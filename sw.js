if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise(i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()}).then(()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e}));self.define=(s,c)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(i[d])return;let r={};const f=e=>n(e,d),o={module:{uri:d},exports:r,require:f};i[d]=Promise.all(s.map(e=>o[e]||f(e))).then(e=>(c(...e),r))}}define(["./workbox-146ffa86"],function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"./manifest.webmanifest",revision:"83dd7c8c05cd231f1a9d6827b3ae361d"},{url:"./index.html",revision:"eb0b19a9d498923d0134d713c3091fc9"},{url:"./icon-512.png",revision:"36c6601e5995e0b85350881eb185a515"},{url:"./icon-192.png",revision:"4374c4e8c9d4f3c39eb2bfb04795510f"},{url:"./favicon.svg",revision:"6fdb219c2c68bab69191d74afa6c2034"},{url:"./favicon-32.png",revision:"f6550cf3280230f8f2b89657708ad864"},{url:"./apple-touch-icon.png",revision:"78462d0970dea6f9d34c0f7db89624b0"},{url:"./assets/index-mRqUZ9_C.css",revision:"0583d45ebeba06b1745f3dbf5fd0c3ff"},{url:"./assets/index-DaRDibzN.js",revision:"dff379dbc229f8256d8a61b97dc7ca99"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("./index.html"),{denylist:[/sw\.js$/,/manifest\.webmanifest$/]}))});
//# sourceMappingURL=sw.js.map
//# sourceMappingURL=sw.js.map

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});
self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
