import{a as t}from"./ngCDldB-14b8f186.js";import{E as n}from"./aNEOx-cd1a3c66.js";import"./RIdgqr-496d1ed2.js";import"./KUaUumJ-a242f77f.js";import{g as i,e as r}from"./gXDwucsVSH-3272eea5.js";import"./Q8luBI-3852b9e5.js";import{h as o}from"./sd26h95-c49a295c.js";import"./pzq9I3K-8c3ca517.js";import{g as e,n as s,u as a,l as u,i as d,s as c,a as v,b as f,e as h}from"./892cl-0a4421a0.js";import{k as g,z as l}from"./sPKC-d1070d30.js";var m=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function s(t){try{u(r.next(t))}catch(n){e(n)}}function a(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))};var p=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function s(t){try{u(r.next(t))}catch(n){e(n)}}function a(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))};class q extends t{getAccounts(){return p(this,void 0,void 0,(function*(){return t=this.requestManager,m(void 0,void 0,void 0,(function*(){return(yield e(t)).map(g)}));var t}))}newAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){i.validate(["string"],[n]);const r=yield s(t,n);return g(r)})))(this.requestManager,t)}))}unlockAccount(t,n,r){return p(this,void 0,void 0,(function*(){return((t,n,r,o)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address","string","uint"],[n,r,o]),a(t,n,r,o)})))(this.requestManager,t,n,r)}))}lockAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address"],[n]),u(t,n)})))(this.requestManager,t)}))}importRawKey(t,n){return p(this,void 0,void 0,(function*(){return((t,n,r)=>m(void 0,void 0,void 0,(function*(){return i.validate(["string","string"],[n,r]),d(t,n,r)})))(this.requestManager,t,n)}))}sendTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return c(t,e,r)})))(this.requestManager,t,i)}))}signTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return v(t,e,r)})))(this.requestManager,t,i)}))}sign(t,n,o){return p(this,void 0,void 0,(function*(){return((t,n,o,e)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","address","string"],[n,o,e]);const s=r(n)?n:l(n);return f(t,s,o,e)})))(this.requestManager,t,n,o)}))}ecRecover(t,n){return p(this,void 0,void 0,(function*(){return((t,n,o)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","string"],[n,o]);const e=r(n)?n:l(n);return h(t,e,o)})))(this.requestManager,t,n)}))}}export{q as P};
