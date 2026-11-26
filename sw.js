if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise(i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()}).then(()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e}));self.define=(s,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const t=e=>n(e,r),d={module:{uri:r},exports:o,require:t};i[r]=Promise.all(s.map(e=>d[e]||t(e))).then(e=>(c(...e),o))}}define(["./workbox-146ffa86"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"83dd7c8c05cd231f1a9d6827b3ae361d"},{url:"index.html",revision:"e3a663a7aca2e052b2cca9d0b011b2b8"},{url:"icon-512.png",revision:"36c6601e5995e0b85350881eb185a515"},{url:"icon-192.png",revision:"4374c4e8c9d4f3c39eb2bfb04795510f"},{url:"favicon.svg",revision:"6fdb219c2c68bab69191d74afa6c2034"},{url:"favicon-32.png",revision:"f6550cf3280230f8f2b89657708ad864"},{url:"apple-touch-icon.png",revision:"78462d0970dea6f9d34c0f7db89624b0"},{url:"assets/index-DDBMt82Q.js",revision:"f362d3ee05fe73e2e642bade6dfd1391"},{url:"assets/index-B_kTPzNd.css",revision:"6af5afbc36883a4cd0cb2444b05f3f04"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/sw\.js$/,/^\/manifest\.webmanifest$/]}))});
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
