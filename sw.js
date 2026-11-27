if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise(i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()}).then(()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e}));self.define=(s,f)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>n(e,r),t={module:{uri:r},exports:o,require:c};i[r]=Promise.all(s.map(e=>t[e]||c(e))).then(e=>(f(...e),o))}}define(["./workbox-146ffa86"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"a54515918ff0a93ee4b485895316d20a"},{url:"index.html",revision:"1df86ff0af641c369c33fd785792ca89"},{url:"icon-512.png",revision:"36c6601e5995e0b85350881eb185a515"},{url:"icon-192.png",revision:"4374c4e8c9d4f3c39eb2bfb04795510f"},{url:"favicon.svg",revision:"6fdb219c2c68bab69191d74afa6c2034"},{url:"favicon-32.png",revision:"f6550cf3280230f8f2b89657708ad864"},{url:"apple-touch-icon.png",revision:"78462d0970dea6f9d34c0f7db89624b0"},{url:"assets/index-DamybOnc.js",revision:"6a488b8b5ae68e1b00edf1f598fe5331"},{url:"assets/index-CaFleBGu.css",revision:"75d195f4e28c387d93898292dab077ca"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/sw\.js$/,/^\/manifest\.webmanifest$/]}))});
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
