/* Taeglicher Funktionstest der Anfrageformulare.
   Prueft: alle vier Schritte durchlaufen, Absendung wird wirklich ausgeloest,
   beide Zustellwege (Web3Forms, FormSubmit), Erfolg nur bei echter Bestaetigung,
   Fehlerfall zeigt die direkten Kontaktwege und legt die Anfrage in die
   Warteschlange, die beim naechsten Besuch automatisch nachgereicht wird.
   Aufruf:  node scripts/formular-test.js [basis-url]            */
const {chromium}=require('playwright-core');
const BASIS=process.argv[2]||'http://127.0.0.1:8790';
const CHROM=process.env.CHROME_PFAD||'/opt/pw-browsers/chromium';
const JA={status:200,contentType:'application/json',body:'{"success":true,"message":"ok"}'};
const NEIN={status:200,contentType:'application/json',body:'{"success":false,"message":"nicht freigeschaltet"}'};

async function seite(b,opt){
  opt=opt||{};
  const c=await b.newContext({viewport:{width:1440,height:900}});
  const p=await c.newPage();
  const log={eigen:null,web3:null,fs:null,fehler:[],mailsprung:false};
  p.on('pageerror',e=>log.fehler.push(e.message));
  p.on('framenavigated',f=>{ if(f===p.mainFrame() && f.url().startsWith('mailto')) log.mailsprung=true; });
  if(opt.schluessel) await p.addInitScript(k=>{window.OBS_WEB3FORMS_KEY=k;},opt.schluessel);
  if(opt.vorher) await p.addInitScript(opt.vorher);
  /* Weg 1: eigener Server. 'echt' laesst die Anfrage wirklich an anfrage.php laufen. */
  await p.route('**/anfrage.php',async r=>{ log.eigen=r.request().postData();
    if(opt.eigen==='echt') return r.continue();
    if(opt.eigen==='nein') return r.fulfill(NEIN);
    return r.abort('failed'); });
  await p.route('**/api.web3forms.com/**',async r=>{ log.web3=r.request().postData();
    if(opt.web3==='ab') return r.abort('failed');
    await r.fulfill(opt.web3==='nein'?NEIN:JA); });
  await p.route('**/formsubmit.co/**',async r=>{ log.fs=r.request().postData();
    if(opt.fs==='ab') return r.abort('failed');
    await r.fulfill(opt.fs==='nein'?NEIN:JA); });
  await p.goto(BASIS+'/index.html?t='+Date.now(),{waitUntil:'load'});
  return {c,p,log};
}

async function anfrage(b,opt){
  const {c,p,log}=await seite(b,opt);
  await p.evaluate(()=>document.querySelectorAll('[class*=cookie]').forEach(e=>e.remove()));
  await (await p.$('#quizForm')).scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.evaluate(()=>document.querySelectorAll('.quiz-step.active .choice')[0].click());
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.evaluate(()=>document.querySelectorAll('.quiz-step.active .choice')[0].click());
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.fill('[name=name]','Funktionstest'); await p.fill('[name=email]','test@example.com');
  await p.click('#nextStep'); await p.waitForTimeout(1800);
  const r=await p.evaluate(()=>{const e=document.getElementById('quizError');
    let offen=0; try{ offen=(JSON.parse(localStorage.getItem('obs_warteschlange')||'[]')).length; }catch(x){}
    return {danke:!!document.querySelector('.quiz-success.show,#quizSuccess.show'),
            hinweis:e?!e.hidden:false, wege:e?e.querySelectorAll('a').length:0, offen};});
  await c.close();
  return {...r,...log,gesendet:!!(log.eigen||log.web3||log.fs)};
}

(async()=>{
  const b=await chromium.launch({executablePath:CHROM});
  const ok=(w,t)=>{ console.log((w?'  OK     ':'  FEHLER ')+t); return !!w; };
  let alles=true;
  console.log('Formular-Funktionstest gegen '+BASIS);

  const a=await anfrage(b,{});
  alles&=ok(a.gesendet,'Anfrage wird an den Versanddienst geschickt');
  alles&=ok(/Funktionstest/.test(a.fs||''),'Eingaben stehen in der Sendung');
  alles&=ok(a.danke && !a.hinweis,'Bestaetigung nur nach echter Zusage des Dienstes');
  alles&=ok(a.offen===0,'nichts bleibt in der Warteschlange liegen');
  alles&=ok(a.fehler.length===0,'keine JavaScript-Fehler');

  const e=await anfrage(b,{eigen:'echt',web3:'ab',fs:'ab'});
  alles&=ok(/Funktionstest/.test(e.eigen||''),'Weg 1 (eigener Server, anfrage.php) nimmt die Anfrage an');
  alles&=ok(e.danke && !e.web3 && !e.fs,'eigener Server genuegt - kein Fremddienst noetig');

  const w=await anfrage(b,{schluessel:'test-key',fs:'ab'});
  alles&=ok(/Funktionstest/.test(w.web3||''),'Weg 2 (Web3Forms) wird genutzt, wenn ein Schluessel gesetzt ist');
  alles&=ok(w.danke && !w.fs,'Web3Forms allein genuegt - FormSubmit wird dann nicht gebraucht');

  const z=await anfrage(b,{schluessel:'test-key',web3:'nein'});
  alles&=ok(!!z.fs,'faellt auf Weg 3 (FormSubmit) zurueck, wenn Weg 1 ablehnt');
  alles&=ok(z.danke,'Bestaetigung, wenn der zweite Weg zustellt');

  const n=await anfrage(b,{fs:'nein'});
  alles&=ok(!n.danke,'keine falsche Bestaetigung, wenn der Dienst ablehnt');
  alles&=ok(n.hinweis && n.wege>=3,'Fehlerhinweis mit E-Mail, WhatsApp und Telefon');
  alles&=ok(n.offen===1,'abgelehnte Anfrage liegt in der Warteschlange');

  const o=await anfrage(b,{fs:'ab'});
  alles&=ok(!o.danke && o.hinweis,'keine falsche Bestaetigung ohne Verbindung');
  alles&=ok(o.offen===1,'Anfrage ohne Verbindung geht nicht verloren');
  alles&=ok(!o.mailsprung && !n.mailsprung,'kein automatischer Sprung ins Mailprogramm');

  /* Nachreichen: gespeicherte Anfrage muss beim naechsten Besuch rausgehen. */
  const nach=await seite(b,{vorher:()=>{ try{ localStorage.setItem('obs_warteschlange',
    JSON.stringify([{zeit:Date.now(),daten:{Name:'Nachgereicht','E-Mail':'test@example.com',
    _subject:'Neue Anfrage über obscura-berlin.de'}}])); }catch(e){} }});
  await nach.p.waitForTimeout(3500);
  const rest=await nach.p.evaluate(()=>{ try{ return (JSON.parse(localStorage.getItem('obs_warteschlange')||'[]')).length; }catch(e){ return -1; } });
  await nach.c.close();
  alles&=ok(/Nachgereicht/.test(nach.log.fs||''),'gespeicherte Anfrage wird beim naechsten Besuch nachgereicht');
  alles&=ok(rest===0,'Warteschlange ist nach erfolgreichem Nachreichen leer');

  await b.close();
  console.log(alles?'\nERGEBNIS: alles in Ordnung':'\nERGEBNIS: FEHLER GEFUNDEN');
  process.exit(alles?0:1);
})();
