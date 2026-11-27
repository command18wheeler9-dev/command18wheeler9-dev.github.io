if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise(i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()}).then(()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e}));self.define=(s,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let o={};const c=e=>n(e,d),f={module:{uri:d},exports:o,require:c};i[d]=Promise.all(s.map(e=>f[e]||c(e))).then(e=>(r(...e),o))}}define(["./workbox-146ffa86"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"manifest.webmanifest",revision:"83dd7c8c05cd231f1a9d6827b3ae361d"},{url:"index.html",revision:"8ec38e14d827b3ba3b24229b2495f36b"},{url:"icon-512.png",revision:"36c6601e5995e0b85350881eb185a515"},{url:"icon-192.png",revision:"4374c4e8c9d4f3c39eb2bfb04795510f"},{url:"favicon.svg",revision:"6fdb219c2c68bab69191d74afa6c2034"},{url:"favicon-32.png",revision:"f6550cf3280230f8f2b89657708ad864"},{url:"apple-touch-icon.png",revision:"78462d0970dea6f9d34c0f7db89624b0"},{url:"assets/index-YlpUwquJ.js",revision:"cddf14a392a4fe289d0ab81b7acd4295"},{url:"assets/index-CZunRBb6.css",revision:"fe0f2520d4209ffaf39d786b5d09dce0"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/^\/sw\.js$/,/^\/manifest\.webmanifest$/]}))});
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
