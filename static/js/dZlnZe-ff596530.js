import{f as t}from"./3CBYPSzSg-f228892d.js";import{W as e}from"./pYFy1hqYJ-fb86e659.js";import{ab as n,ac as o,R as r}from"./Rnm6Oz-6e1fa5a5.js";var s=globalThis&&globalThis.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(r,s){function i(t){try{c(o.next(t))}catch(e){s(e)}}function a(t){try{c(o.throw(t))}catch(e){s(e)}}function c(t){var e;t.done?r(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(i,a)}c((o=o.apply(t,e||[])).next())}))};class i extends e{constructor(t,e){if(super(),!i.validateClientUrl(t))throw new n(t);this.clientUrl=t,this.httpProviderOptions=e}static validateClientUrl(t){return"string"==typeof t&&/^http(s)?:\/\//i.test(t)}getStatus(){throw new o}supportsSubscriptions(){return!1}request(e,n){var o;return s(this,void 0,void 0,(function*(){const s=Object.assign(Object.assign({},null===(o=this.httpProviderOptions)||void 0===o?void 0:o.providerOptions),n),i=yield t(this.clientUrl,Object.assign(Object.assign({},s),{method:"POST",headers:Object.assign(Object.assign({},s.headers),{"Content-Type":"application/json"}),body:JSON.stringify(e)}));if(!i.ok)throw new r(yield i.json());return yield i.json()}))}on(){throw new o}removeListener(){throw new o}once(){throw new o}removeAllListeners(){throw new o}connect(){throw new o}disconnect(){throw new o}reset(){throw new o}reconnect(){throw new o}}export{i as H};
