if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,n,i)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const t={uri:location.origin+r.slice(1)};return Promise.all(n.map((r=>{switch(r){case"exports":return s;case"module":return t;default:return e(r)}}))).then((e=>{const r=i(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-33444ff3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"./index.html",revision:"d6abac53c5da4fdcd53f1361691d713c"},{url:"6b1a4ec5520b32114d61e860d6c4d1fd.png",revision:null},{url:"9f662027c8fafbef62ac4c4809bf5938.png",revision:null},{url:"main.js",revision:"4bd7bed636dd3881438297211a4263b0"}],{}),e.registerRoute(/\.(?:png)$/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxEntries:2,purgeOnQuotaError:!0})]}),"GET")}));
