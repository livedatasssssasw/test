import{f as t}from"./8Ta-d3976aa7.js";import{W as e}from"./G8wU1uq-d7a1fcbb.js";import{ab as n,ac as o,R as r}from"./1iGTqnTHhJ-840d622d.js";var i=globalThis&&globalThis.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,i){function s(t){try{c(o.next(t))}catch(e){i(e)}}function a(t){try{c(o.throw(t))}catch(e){i(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(s,a)}c((o=o.apply(t,e||[])).next())}))};class s extends e{constructor(t,e){if(super(),!s.validateClientUrl(t))throw new n(t);this.clientUrl=t,this.httpProviderOptions=e}static validateClientUrl(t){return"string"==typeof t&&/^http(s)?:\/\//i.test(t)}getStatus(){throw new o}supportsSubscriptions(){return!1}request(e,n){var o;return i(this,void 0,void 0,(function*(){const i=Object.assign(Object.assign({},null===(o=this.httpProviderOptions)||void 0===o?void 0:o.providerOptions),n),s=yield t(this.clientUrl,Object.assign(Object.assign({},i),{method:"POST",headers:Object.assign(Object.assign({},i.headers),{"Content-Type":"application/json"}),body:JSON.stringify(e)}));if(!s.ok)throw new r(yield s.json());return yield s.json()}))}on(){throw new o}removeListener(){throw new o}once(){throw new o}removeAllListeners(){throw new o}connect(){throw new o}disconnect(){throw new o}reset(){throw new o}reconnect(){throw new o}}export{s as H};
