import{f as t}from"./1I8-4b4df05e.js";import{W as e}from"./MTz91isGd-2cb3be6a.js";import{ab as n,ac as r,R as o}from"./x15wqrad-8337ab59.js";var s=globalThis&&globalThis.__awaiter||function(t,e,n,r){return new(n||(n=Promise))((function(o,s){function i(t){try{c(r.next(t))}catch(e){s(e)}}function a(t){try{c(r.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((r=r.apply(t,e||[])).next())}))};class i extends e{constructor(t,e){if(super(),!i.validateClientUrl(t))throw new n(t);this.clientUrl=t,this.httpProviderOptions=e}static validateClientUrl(t){return"string"==typeof t&&/^http(s)?:\/\//i.test(t)}getStatus(){throw new r}supportsSubscriptions(){return!1}request(e,n){var r;return s(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},null===(r=this.httpProviderOptions)||void 0===r?void 0:r.providerOptions),n),i=yield t(this.clientUrl,Object.assign(Object.assign({},s),{method:"POST",headers:Object.assign(Object.assign({},s.headers),{"Content-Type":"application/json"}),body:JSON.stringify(e)}));if(!i.ok)throw new o(yield i.json());return yield i.json()}))}on(){throw new r}removeListener(){throw new r}once(){throw new r}removeAllListeners(){throw new r}connect(){throw new r}disconnect(){throw new r}reset(){throw new r}reconnect(){throw new r}}export{i as H};