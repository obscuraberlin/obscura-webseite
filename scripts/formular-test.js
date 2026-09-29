/* Taeglicher Funktionstest der Anfrageformulare.
   Prueft: alle vier Schritte durchlaufen, Absendung wird wirklich ausgeloest,
   Erfolg nur bei echter Bestaetigung, Fehlerfall zeigt die direkten Kontaktwege.
   Aufruf:  node scripts/formular-test.js [basis-url]            */
const {chromium}=require('playwright-core');
const BASIS=process.argv[2]||'http://127.0.0.1:8765';
const CHROM=process.env.CHROME_PFAD||'/opt/pw-browsers/chromium';

async function anfrage(b,antwort){
  const c=await b.newContext({viewport:{width:1440,height:900}});
  const p=await c.newPage(); let nutzlast=null,fehler=[];
  p.on('pageerror',e=>fehler.push(e.message));
  await p.route('**/formsubmit.co/**',async r=>{ nutzlast=r.request().postData(); await antwort(r); });
  await p.goto(BASIS+'/index.html?t='+Date.now(),{waitUntil:'load'});
  await p.evaluate(()=>document.querySelectorAll('[class*=cookie]').forEach(e=>e.remove()));
  await (await p.$('#quizForm')).scrollIntoViewIfNeeded(); await p.waitForTimeout(300);
  await p.evaluate(()=>document.querySelectorAll('.quiz-step.active .choice')[0].click());
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.evaluate(()=>document.querySelectorAll('.quiz-step.active .choice')[0].click());
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.click('#nextStep'); await p.waitForTimeout(200);
  await p.fill('[name=name]','Funktionstest'); await p.fill('[name=email]','test@example.com');
  await p.click('#nextStep'); await p.waitForTimeout(1500);
  const r=await p.evaluate(()=>{const e=document.getElementById('quizError');
    return {danke:!!document.querySelector('.quiz-success.show,#quizSuccess.show'),
            hinweis:e?!e.hidden:false, wege:e?e.querySelectorAll('a').length:0};});
  await c.close();
  return {...r,gesendet:!!nutzlast,nutzlast,fehler};
}

(async()=>{
  const b=await chromium.launch({executablePath:CHROM});
  const ok=(b,t)=>{ console.log((b?'  OK   ':'  FEHLER ')+t); return b; };
  let alles=true;
  console.log('Formular-Funktionstest gegen '+BASIS);

  const a=await anfrage(b,r=>r.fulfill({status:200,contentType:'application/json',body:'{"success":"true"}'}));
  alles&=ok(a.gesendet,'Anfrage wird an den Versanddienst geschickt');
  alles&=ok(/Funktionstest/.test(a.nutzlast||''),'Eingaben stehen in der Sendung');
  alles&=ok(a.danke && !a.hinweis,'Bestaetigung nur nach echter Zusage des Dienstes');
  alles&=ok(a.fehler.length===0,'keine JavaScript-Fehler');

  const n=await anfrage(b,r=>r.fulfill({status:200,contentType:'application/json',body:'{"success":"false","message":"nicht freigeschaltet"}'}));
  alles&=ok(!n.danke,'keine falsche Bestaetigung, wenn der Dienst ablehnt');
  alles&=ok(n.hinweis && n.wege>=3,'Fehlerhinweis mit E-Mail, WhatsApp und Telefon');

  const o=await anfrage(b,r=>r.abort('failed'));
  alles&=ok(!o.danke && o.hinweis,'keine falsche Bestaetigung ohne Verbindung');

  await b.close();
  console.log(alles?'\nERGEBNIS: alles in Ordnung':'\nERGEBNIS: FEHLER GEFUNDEN');
  process.exit(alles?0:1);
})();
