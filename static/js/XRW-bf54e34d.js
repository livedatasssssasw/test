import{a as t}from"./ltDa-b0f7c082.js";import{E as n}from"./63TmSrWO-c706edc1.js";import"./DmJ6LfrSaQ-0eacab28.js";import"./V-c4c59e5a.js";import{g as i,e as r}from"./taJQ-69341cff.js";import"./egl-40b4b7b4.js";import{h as o}from"./esPDEf-af6978d9.js";import"./AugH5kF-8ef811ba.js";import{g as e,n as a,u as s,l as u,i as c,s as d,a as v,b as f,e as h}from"./d-50a6ba7a.js";import{k as l,z as g}from"./JMlYyMcf0-ab5c9801.js";var m=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function a(t){try{u(r.next(t))}catch(n){e(n)}}function s(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,s)}u((r=r.apply(t,n||[])).next())}))};var p=globalThis&&globalThis.__awaiter||function(t,n,i,r){return new(i||(i=Promise))((function(o,e){function a(t){try{u(r.next(t))}catch(n){e(n)}}function s(t){try{u(r.throw(t))}catch(n){e(n)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof i?n:new i((function(t){t(n)}))).then(a,s)}u((r=r.apply(t,n||[])).next())}))};class b extends t{getAccounts(){return p(this,void 0,void 0,(function*(){return t=this.requestManager,m(void 0,void 0,void 0,(function*(){return(yield e(t)).map(l)}));var t}))}newAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){i.validate(["string"],[n]);const r=yield a(t,n);return l(r)})))(this.requestManager,t)}))}unlockAccount(t,n,r){return p(this,void 0,void 0,(function*(){return((t,n,r,o)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address","string","uint"],[n,r,o]),s(t,n,r,o)})))(this.requestManager,t,n,r)}))}lockAccount(t){return p(this,void 0,void 0,(function*(){return((t,n)=>m(void 0,void 0,void 0,(function*(){return i.validate(["address"],[n]),u(t,n)})))(this.requestManager,t)}))}importRawKey(t,n){return p(this,void 0,void 0,(function*(){return((t,n,r)=>m(void 0,void 0,void 0,(function*(){return i.validate(["string","string"],[n,r]),c(t,n,r)})))(this.requestManager,t,n)}))}sendTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return d(t,e,r)})))(this.requestManager,t,i)}))}signTransaction(t,i){return p(this,void 0,void 0,(function*(){return((t,i,r)=>m(void 0,void 0,void 0,(function*(){const e=o(i,n);return v(t,e,r)})))(this.requestManager,t,i)}))}sign(t,n,o){return p(this,void 0,void 0,(function*(){return((t,n,o,e)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","address","string"],[n,o,e]);const a=r(n)?n:g(n);return f(t,a,o,e)})))(this.requestManager,t,n,o)}))}ecRecover(t,n){return p(this,void 0,void 0,(function*(){return((t,n,o)=>m(void 0,void 0,void 0,(function*(){i.validate(["string","string"],[n,o]);const e=r(n)?n:g(n);return h(t,e,o)})))(this.requestManager,t,n)}))}}export{b as P};
