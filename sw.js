if(!self.define){let s,e={};const o=(o,n)=>(o=new URL(o+".js",n).href,e[o]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=o,s.onload=e,document.head.appendChild(s)}else s=o,importScripts(o),e()})).then((()=>{let s=e[o];if(!s)throw new Error(`Module ${o} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let f={};const c=s=>o(s,t),d={module:{uri:t},exports:f,require:c};e[t]=Promise.all(n.map((s=>d[s]||c(s)))).then((s=>(i(...s),f)))}}define(["./workbox-bc55f1ff"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/fonts/fontello-2022-04-11/css/animation.css",revision:"5efb6f925470166045ba28c25131f79a"},{url:"assets/fonts/fontello-2022-04-11/css/thrsouza-icons-codes.css",revision:"3a6bd7ad3f0dd688c7d2d3a12bee1fd7"},{url:"assets/fonts/fontello-2022-04-11/css/thrsouza-icons-embedded.css",revision:"ad3d799e279f8838d48bbe82a97a8b12"},{url:"assets/fonts/fontello-2022-04-11/css/thrsouza-icons-ie7-codes.css",revision:"286ce3362f78433365b7702e26fd96bc"},{url:"assets/fonts/fontello-2022-04-11/css/thrsouza-icons-ie7.css",revision:"d95fa7de98a3fe2b1ba5dc53d4fb5506"},{url:"assets/fonts/fontello-2022-04-11/css/thrsouza-icons.css",revision:"3c16ba3fedea857713c995abdf8fffe0"},{url:"assets/fonts/fontello-2022-04-11/demo.html",revision:"673044944b414225f69f6470a0ccc080"},{url:"assets/index.0550367e.js",revision:null},{url:"assets/index.bf8df4dd.css",revision:null},{url:"index.html",revision:"106368ad82993611bd017ef98dea630e"},{url:"assets/icons/manifest-icon-192.maskable.png",revision:"1dc1b535265baa9bc22d93c549437717"},{url:"assets/icons/manifest-icon-512.maskable.png",revision:"5c50fb5f45f9c0862e80a7fd44dce60b"},{url:"manifest.webmanifest",revision:"ce2abad205db72282a567c604e1d034d"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
