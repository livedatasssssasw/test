import{a as t}from"./fgMnPVclA-2bc6d0ac.js";import{E as n}from"./NxMAR-a1b00691.js";import"./e5s8GWWxNL-bf1ca418.js";import"./gp6GNvRpn-5717c766.js";import{g as i,e as r}from"./3EzQcwbb-73835011.js";import"./GYTivUout-456320c8.js";import{h as o}from"./VaZq6If8E-0412f4a2.js";import"./CHh9NC-ab3a2e1c.js";import{g as e,n as s,u as a,l as u,i as c,s as d,a as v,b as f,e as h}from"./U-db15c0ce.js";import{k as g,z as l}from"./R-ed228488.js";var m=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function s(t){try{u(r.next(t))}catch(n){e(n)}}function a(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))};var p=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function s(t){try{u(r.next(t))}catch(n){e(n)}}function a(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(s,a)}u((r=r.apply(t,n||[])).next())}))};class b extends t{getAccounts(){return p(this,void 0,void 0,(function*(){return t=this.requestManager,m(void 0,void 0,void 0,(function*(){return(yield e(t)).map(g)}));var t}))}newAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){i.validate(["string"],[n]);const r=yield s(t,n);return g(r)})))(this.requestManager,t)}))}unlockAccount(t,n,r){return p(this,void 0,void 0,(function*(){return((t,n,r,o)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address","string","uint"],[n,r,o]),a(t,n,r,o)})))(this.requestManager,t,n,r)}))}lockAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address"],[n]),u(t,n)})))(this.requestManager,t)}))}importRawKey(t,n){return p(this,void 0,void 0,(function*(){return((t,n,r)=>m(void 0,void 0,void 0,(function*(){return i.validate(["string","string"],[n,r]),c(t,n,r)})))(this.requestManager,t,n)}))}sendTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return d(t,e,r)})))(this.requestManager,t,i)}))}signTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return v(t,e,r)})))(this.requestManager,t,i)}))}sign(t,n,o){return p(this,void 0,void 0,(function*(){return((t,n,o,e)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","address","string"],[n,o,e]);const s=r(n)?n:l(n);return f(t,s,o,e)})))(this.requestManager,t,n,o)}))}ecRecover(t,n){return p(this,void 0,void 0,(function*(){return((t,n,o)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","string"],[n,o]);const e=r(n)?n:l(n);return h(t,e,o)})))(this.requestManager,t,n)}))}}export{b as P};
