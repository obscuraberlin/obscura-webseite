import {chromium} from 'playwright-core';
import fs from 'fs';
const html=fs.readFileSync('preview/index.html','utf8');
const wrapped='<!doctype html><html class="js" lang="de"><head><meta charset="utf-8"></head><body>'+html+'</body></html>';
fs.writeFileSync('/tmp/wrapped.html',wrapped);
const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium-1194/chrome-linux/chrome'});
const p=await b.newPage();
const errs=[];p.on('pageerror',e=>errs.push(e.message));
await p.goto('file:///tmp/wrapped.html');
await p.waitForTimeout(600);
// visual order of media cards
const order=await p.$$eval('.media-row .media-card',els=>els.map(e=>{
  const r=e.getBoundingClientRect();
  return {x:Math.round(r.x),label:e.getAttribute('aria-label'),reel:e.getAttribute('data-reel').slice(0,30)};
}).sort((a,b)=>a.x-b.x).map(o=>o.label+' | '+o.reel));
console.log('ORDER:');order.forEach(o=>console.log(' ',o));
// click spectre (first) and check video loads
await p.$eval('.media-row .media-card.featured-media',e=>e.click());
await p.waitForTimeout(800);
const vinfo=await p.$eval('#reelPlayer',v=>({src:v.currentSrc.slice(0,30),readyState:v.readyState,dur:v.duration,w:v.videoWidth,h:v.videoHeight}));
console.log('SPECTRE VIDEO:',JSON.stringify(vinfo));
console.log('ERRORS:',errs.length);
await b.close();
