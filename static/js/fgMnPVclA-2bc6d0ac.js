import{C as t,a as e,P as i,R as r,r as n,b as s,I as o,c as a,S as u,O as c,d as l,E as h}from"./e5s8GWWxNL-bf1ca418.js";import"./gp6GNvRpn-5717c766.js";import{D as d,W as g}from"./NxMAR-a1b00691.js";import"./3EzQcwbb-73835011.js";import{E as f,t as p,i as v,a as m,b,c as _,d as w,e as C,f as y,g as R,h as P,j as q,W as M}from"./R-ed228488.js";import{H as T}from"./UUpFD-05af8ee3.js";import{W as k}from"./BCgVR0Bfr-349fd3e0.js";import"./BeK9p5-3901b832.js";import"./c-3428687e.js";class S{constructor(){this._emitter=new f}on(t,e){this._emitter.on(t,e)}once(t,e){this._emitter.once(t,e)}off(t,e){this._emitter.off(t,e)}emit(t,e){this._emitter.emit(t,e)}listenerCount(t){return this._emitter.listenerCount(t)}listeners(t){return this._emitter.listeners(t)}eventNames(){return this._emitter.eventNames()}removeAllListeners(){return this._emitter.removeAllListeners()}setMaxListenerWarningThreshold(t){this._emitter.setMaxListeners(t)}getMaxListeners(){return this._emitter.getMaxListeners()}}var x;(x||(x={})).CONFIG_CHANGE="CONFIG_CHANGE";class I extends S{constructor(t){super(),this.config={handleRevert:!1,defaultAccount:void 0,defaultBlock:"latest",transactionBlockTimeout:50,transactionConfirmationBlocks:24,transactionPollingInterval:1e3,transactionPollingTimeout:75e4,transactionReceiptPollingInterval:void 0,transactionSendTimeout:75e4,transactionConfirmationPollingInterval:void 0,blockHeaderTimeout:10,maxListenersWarningThreshold:100,contractDataInputFill:"data",defaultNetworkId:void 0,defaultChain:"mainnet",defaultHardfork:"london",defaultCommon:void 0,defaultTransactionType:"0x2",defaultMaxPriorityFeePerGas:p(25e8),enableExperimentalFeatures:{useSubscriptionWhenCheckingBlockTimeout:!1,useRpcCallSpecification:!1},transactionBuilder:void 0,transactionTypeParser:void 0,defaultReturnFormat:d},this.setConfig(null!=t?t:{})}setConfig(t){const e=Object.keys(t);for(const i of e)this._triggerConfigChange(i,t[i]);Object.assign(this.config,t)}get handleRevert(){return this.config.handleRevert}set handleRevert(t){this._triggerConfigChange("handleRevert",t),this.config.handleRevert=t}get contractDataInputFill(){return this.config.contractDataInputFill}set contractDataInputFill(t){this._triggerConfigChange("contractDataInputFill",t),this.config.contractDataInputFill=t}get defaultAccount(){return this.config.defaultAccount}set defaultAccount(t){this._triggerConfigChange("defaultAccount",t),this.config.defaultAccount=t}get defaultBlock(){return this.config.defaultBlock}set defaultBlock(t){this._triggerConfigChange("defaultBlock",t),this.config.defaultBlock=t}get transactionSendTimeout(){return this.config.transactionSendTimeout}set transactionSendTimeout(t){this._triggerConfigChange("transactionSendTimeout",t),this.config.transactionSendTimeout=t}get transactionBlockTimeout(){return this.config.transactionBlockTimeout}set transactionBlockTimeout(t){this._triggerConfigChange("transactionBlockTimeout",t),this.config.transactionBlockTimeout=t}get transactionConfirmationBlocks(){return this.config.transactionConfirmationBlocks}set transactionConfirmationBlocks(t){this._triggerConfigChange("transactionConfirmationBlocks",t),this.config.transactionConfirmationBlocks=t}get transactionPollingInterval(){return this.config.transactionPollingInterval}set transactionPollingInterval(t){this._triggerConfigChange("transactionPollingInterval",t),this.config.transactionPollingInterval=t,this.transactionReceiptPollingInterval=t,this.transactionConfirmationPollingInterval=t}get transactionPollingTimeout(){return this.config.transactionPollingTimeout}set transactionPollingTimeout(t){this._triggerConfigChange("transactionPollingTimeout",t),this.config.transactionPollingTimeout=t}get transactionReceiptPollingInterval(){return this.config.transactionReceiptPollingInterval}set transactionReceiptPollingInterval(t){this._triggerConfigChange("transactionReceiptPollingInterval",t),this.config.transactionReceiptPollingInterval=t}get transactionConfirmationPollingInterval(){return this.config.transactionConfirmationPollingInterval}set transactionConfirmationPollingInterval(t){this._triggerConfigChange("transactionConfirmationPollingInterval",t),this.config.transactionConfirmationPollingInterval=t}get blockHeaderTimeout(){return this.config.blockHeaderTimeout}set blockHeaderTimeout(t){this._triggerConfigChange("blockHeaderTimeout",t),this.config.blockHeaderTimeout=t}get enableExperimentalFeatures(){return this.config.enableExperimentalFeatures}set enableExperimentalFeatures(t){this._triggerConfigChange("enableExperimentalFeatures",t),this.config.enableExperimentalFeatures=t}get maxListenersWarningThreshold(){return this.config.maxListenersWarningThreshold}set maxListenersWarningThreshold(t){this._triggerConfigChange("maxListenersWarningThreshold",t),this.setMaxListenerWarningThreshold(t),this.config.maxListenersWarningThreshold=t}get defaultReturnFormat(){return this.config.defaultReturnFormat}set defaultReturnFormat(t){this._triggerConfigChange("defaultReturnFormat",t),this.config.defaultReturnFormat=t}get defaultNetworkId(){return this.config.defaultNetworkId}set defaultNetworkId(t){this._triggerConfigChange("defaultNetworkId",t),this.config.defaultNetworkId=t}get defaultChain(){return this.config.defaultChain}set defaultChain(e){if(!v(this.config.defaultCommon)&&!v(this.config.defaultCommon.baseChain)&&e!==this.config.defaultCommon.baseChain)throw new t(this.config.defaultChain,e);this._triggerConfigChange("defaultChain",e),this.config.defaultChain=e}get defaultHardfork(){return this.config.defaultHardfork}set defaultHardfork(t){if(!v(this.config.defaultCommon)&&!v(this.config.defaultCommon.hardfork)&&t!==this.config.defaultCommon.hardfork)throw new e(this.config.defaultCommon.hardfork,t);this._triggerConfigChange("defaultHardfork",t),this.config.defaultHardfork=t}get defaultCommon(){return this.config.defaultCommon}set defaultCommon(i){if(!v(this.config.defaultHardfork)&&!v(i)&&!v(i.hardfork)&&this.config.defaultHardfork!==i.hardfork)throw new e(this.config.defaultHardfork,i.hardfork);if(!v(this.config.defaultChain)&&!v(i)&&!v(i.baseChain)&&this.config.defaultChain!==i.baseChain)throw new t(this.config.defaultChain,i.baseChain);this._triggerConfigChange("defaultCommon",i),this.config.defaultCommon=i}get defaultTransactionType(){return this.config.defaultTransactionType}set defaultTransactionType(t){this._triggerConfigChange("defaultTransactionType",t),this.config.defaultTransactionType=t}get defaultMaxPriorityFeePerGas(){return this.config.defaultMaxPriorityFeePerGas}set defaultMaxPriorityFeePerGas(t){this._triggerConfigChange("defaultMaxPriorityFeePerGas",t),this.config.defaultMaxPriorityFeePerGas=t}get transactionBuilder(){return this.config.transactionBuilder}set transactionBuilder(t){this._triggerConfigChange("transactionBuilder",t),this.config.transactionBuilder=t}get transactionTypeParser(){return this.config.transactionTypeParser}set transactionTypeParser(t){this._triggerConfigChange("transactionTypeParser",t),this.config.transactionTypeParser=t}_triggerConfigChange(t,e){this.emit(x.CONFIG_CHANGE,{name:t,oldValue:this.config[t],newValue:e})}}const E=t=>g.isWeb3Provider(t),B=t=>"string"!=typeof t&&"request"in t&&"Function"===t.request.constructor.name,F=t=>"string"!=typeof t&&"request"in t&&"AsyncFunction"===t.request.constructor.name,N=t=>"string"!=typeof t&&"send"in t,A=t=>"string"!=typeof t&&"sendAsync"in t,O=t=>t&&(E(t)||F(t)||B(t)||A(t)||N(t));var H,G,j=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};(G=H||(H={})).PROVIDER_CHANGED="PROVIDER_CHANGED",G.BEFORE_PROVIDER_CHANGE="BEFORE_PROVIDER_CHANGE";const D={HttpProvider:T,WebsocketProvider:k};class W extends S{constructor(t,e,i){super(),v(t)||this.setProvider(t),this.useRpcCallSpecification=e,v(i)||(this.middleware=i)}static get providers(){return D}get provider(){return this._provider}get providers(){return D}setProvider(t){let e;if(t&&"string"==typeof t&&this.providers)if(/^http(s)?:\/\//i.test(t))e=new this.providers.HttpProvider(t);else{if(!/^ws(s)?:\/\//i.test(t))throw new i(`Can't autodetect provider for "${t}"`);e=new this.providers.WebsocketProvider(t)}else e=v(t)?void 0:t;return this.emit(H.BEFORE_PROVIDER_CHANGE,this._provider),this._provider=e,this.emit(H.PROVIDER_CHANGED,this._provider),!0}setMiddleware(t){this.middleware=t}send(t){return j(this,void 0,void 0,(function*(){const e=Object.assign({},t);let i=yield this._sendRequest(e);if(v(this.middleware)||(i=yield this.middleware.processResponse(i)),m(i))return i.result;throw new r(i)}))}sendBatch(t){return j(this,void 0,void 0,(function*(){return yield this._sendRequest(t)}))}_sendRequest(t){return j(this,void 0,void 0,(function*(){const{provider:e}=this;if(v(e))throw new i("Provider not available. Use `.setProvider` or `.provider=` to initialize the provider.");let n=b(t)?_(t):w(t);if(v(this.middleware)||(n=yield this.middleware.processRequest(n)),E(e)){let t;try{t=yield e.request(n)}catch(s){t=s}return this._processJsonRpcResponse(n,t,{legacy:!1,error:!1})}if(F(e))return e.request(n).then((t=>this._processJsonRpcResponse(n,t,{legacy:!0,error:!1}))).catch((t=>this._processJsonRpcResponse(n,t,{legacy:!0,error:!0})));if(B(e))return new Promise(((t,i)=>{const r=t=>{i(this._processJsonRpcResponse(n,t,{legacy:!0,error:!0}))},s=e=>t(this._processJsonRpcResponse(n,e,{legacy:!0,error:!1})),o=e.request(n,((t,e)=>t?r(t):s(e)));if(C(o)){o.then(s).catch((t=>{try{const e=this._processJsonRpcResponse(n,t,{legacy:!0,error:!0});i(e)}catch(e){i(e)}}))}}));if(N(e))return new Promise(((t,i)=>{e.send(n,((e,s)=>{if(e)return i(this._processJsonRpcResponse(n,e,{legacy:!0,error:!0}));if(v(s))throw new r({},'Got a "nullish" response from provider.');return t(this._processJsonRpcResponse(n,s,{legacy:!0,error:!1}))}))}));if(A(e))return e.sendAsync(n).then((t=>this._processJsonRpcResponse(n,t,{legacy:!0,error:!1}))).catch((t=>this._processJsonRpcResponse(n,t,{legacy:!0,error:!0})));throw new i("Provider does not have a request or send method to use.")}))}_processJsonRpcResponse(t,e,{legacy:i,error:a}){if(v(e))return this._buildResponse(t,null,a);if(y(e)){if(this.useRpcCallSpecification&&R(e)){const t=e;if(n.get(t.error.code)){throw new(0,n.get(t.error.code).error)(t)}throw new s(t)}if(!W._isReverted(e))throw new o(e,t)}if(m(e))return e;if(e instanceof Error)throw W._isReverted(e),e;if(!i&&b(t)&&P(e))return e;if(i&&!a&&b(t))return e;if(i&&a&&b(t))throw e;if(i&&!y(e)&&!m(e))return this._buildResponse(t,e,a);if(b(t)&&!Array.isArray(e))throw new r(e,"Got normal response for a batch request.");if(!b(t)&&Array.isArray(e))throw new r(e,"Got batch response for a normal request.");throw new r(e,"Invalid response")}static _isReverted(t){let e;if(y(t)?e=t.error:t instanceof Error&&(e=t),null==e?void 0:e.message.includes("revert"))throw new a(e);return!1}_buildResponse(t,e,i){const r={jsonrpc:"2.0",id:b(t)?t[0].id:"id"in t?t.id:null};return i?Object.assign(Object.assign({},r),{error:e}):Object.assign(Object.assign({},r),{result:e})}}var L=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class J{constructor(t,e,i=!1){this.requestManager=t,this.registeredSubscriptions=e,this.tolerateUnlinkedSubscription=i,this._subscriptions=new Map,this.requestManager.on(H.BEFORE_PROVIDER_CHANGE,(()=>L(this,void 0,void 0,(function*(){yield this.unsubscribe()})))),this.requestManager.on(H.PROVIDER_CHANGED,(()=>{this.clear(),this.listenToProviderEvents()})),this.listenToProviderEvents()}listenToProviderEvents(){const t=this.requestManager.provider;this.requestManager.provider&&("function"!=typeof(null==t?void 0:t.supportsSubscriptions)||(null==t?void 0:t.supportsSubscriptions()))&&"function"==typeof this.requestManager.provider.on&&("function"==typeof this.requestManager.provider.request?this.requestManager.provider.on("message",(t=>this.messageListener(t))):t.on("data",(t=>this.messageListener(t))))}messageListener(t){var e,i,r;if(!t)throw new u("Should not call messageListener with no data. Type was");const n=(null===(e=t.params)||void 0===e?void 0:e.subscription)||(null===(i=t.data)||void 0===i?void 0:i.subscription)||(null===(r=t.id)||void 0===r?void 0:r.toString(16));if(n){const e=this._subscriptions.get(n);null==e||e.processSubscriptionData(t)}}subscribe(t,e,i=d){return L(this,void 0,void 0,(function*(){const r=this.registeredSubscriptions[t];if(!r)throw new u("Invalid subscription type");const n=new r(null!=e?e:void 0,{subscriptionManager:this,returnFormat:i});return yield this.addSubscription(n),n}))}get subscriptions(){return this._subscriptions}addSubscription(t){return L(this,void 0,void 0,(function*(){if(!this.requestManager.provider)throw new i("Provider not available");if(!this.supportsSubscriptions())throw new u("The current provider does not support subscriptions");if(t.id&&this._subscriptions.has(t.id))throw new u(`Subscription with id "${t.id}" already exists`);if(yield t.sendSubscriptionRequest(),v(t.id))throw new u("Subscription is not subscribed yet.");return this._subscriptions.set(t.id,t),t.id}))}removeSubscription(t){return L(this,void 0,void 0,(function*(){const{id:e}=t;if(v(e))throw new u("Subscription is not subscribed yet. Or, had already been unsubscribed but not through the Subscription Manager.");if(!this._subscriptions.has(e)&&!this.tolerateUnlinkedSubscription)throw new u(`Subscription with id "${e.toString()}" does not exists`);return yield t.sendUnsubscribeRequest(),this._subscriptions.delete(e),e}))}unsubscribe(t){return L(this,void 0,void 0,(function*(){const e=[];for(const[i,r]of this.subscriptions.entries())(!t||"function"==typeof t&&t({id:i,sub:r}))&&e.push(this.removeSubscription(r));return Promise.all(e)}))}clear(){this._subscriptions.clear()}supportsSubscriptions(){return!v(this.requestManager.provider)&&((t=this.requestManager.provider)&&"supportsSubscriptions"in t?t.supportsSubscriptions():!(!t||"string"==typeof t||!("on"in t)));var t}}var V=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class U extends S{constructor(t,e){var i;super(),this.args=t;const{requestManager:r}=e,{subscriptionManager:n}=e;this._subscriptionManager=r?new J(r,{},!0):n,this._returnFormat=null!==(i=null==e?void 0:e.returnFormat)&&void 0!==i?i:d}get id(){return this._id}get lastBlock(){return this._lastBlock}subscribe(){return V(this,void 0,void 0,(function*(){return this._subscriptionManager.addSubscription(this)}))}processSubscriptionData(t){var e,i;(null==t?void 0:t.data)?this._processSubscriptionResult(null!==(i=null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.result)&&void 0!==i?i:null==t?void 0:t.data):t&&q(t)&&this._processSubscriptionResult(null==t?void 0:t.params.result)}sendSubscriptionRequest(){return V(this,void 0,void 0,(function*(){return this._id=yield this._subscriptionManager.requestManager.send({method:"eth_subscribe",params:this._buildSubscriptionParams()}),this.emit("connected",this._id),this._id}))}get returnFormat(){return this._returnFormat}get subscriptionManager(){return this._subscriptionManager}resubscribe(){return V(this,void 0,void 0,(function*(){yield this.unsubscribe(),yield this.subscribe()}))}unsubscribe(){return V(this,void 0,void 0,(function*(){this.id&&(yield this._subscriptionManager.removeSubscription(this))}))}sendUnsubscribeRequest(){return V(this,void 0,void 0,(function*(){yield this._subscriptionManager.requestManager.send({method:"eth_unsubscribe",params:[this.id]}),this._id=void 0}))}formatSubscriptionResult(t){return t}_processSubscriptionResult(t){this.emit("data",this.formatSubscriptionResult(t))}_processSubscriptionError(t){this.emit("error",t)}_buildSubscriptionParams(){throw new Error("Implement in the child class")}}var $=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class z{constructor(t){this._requestManager=t,this._requests=new Map}get requests(){return[...this._requests.values()].map((t=>t.payload))}add(t){const e=w(t),i=new M;return this._requests.set(e.id,{payload:e,promise:i}),i}execute(t){var e;return $(this,void 0,void 0,(function*(){if(0===this.requests.length)return Promise.resolve([]);const i=new M({timeout:null!==(e=null==t?void 0:t.timeout)&&void 0!==e?e:1e3,eagerStart:!0,timeoutMessage:"Batch request timeout"});return this._processBatchRequest(i).catch((t=>i.reject(t))),i.catch((t=>{t instanceof c&&this._abortAllRequests("Batch request timeout"),i.reject(t)})),i}))}_processBatchRequest(t){var e,i;return $(this,void 0,void 0,(function*(){const n=yield this._requestManager.sendBatch([...this._requests.values()].map((t=>t.payload)));if(n.length!==this._requests.size)throw this._abortAllRequests("Invalid batch response"),new r(n,`Batch request size mismatch the results size. Requests: ${this._requests.size}, Responses: ${n.length}`);const s=this.requests.map((t=>t.id)).map(Number).sort(((t,e)=>t-e)),o=n.map((t=>t.id)).map(Number).sort(((t,e)=>t-e));if(JSON.stringify(s)!==JSON.stringify(o))throw this._abortAllRequests("Invalid batch response"),new r(n,`Batch request mismatch the results. Requests: [${s.join()}], Responses: [${o.join()}]`);for(const t of n)m(t)?null===(e=this._requests.get(t.id))||void 0===e||e.promise.resolve(t.result):y(t)&&(null===(i=this._requests.get(t.id))||void 0===i||i.promise.reject(t.error));t.resolve(n)}))}_abortAllRequests(t){for(const{promise:e}of this._requests.values())e.reject(new l(t))}}var K=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class Q extends I{constructor(t){var e;if(super(),this.providers=W.providers,v(t)||"string"==typeof t&&""!==t.trim()||O(t))return this._requestManager=new W(t),void(this._subscriptionManager=new J(this._requestManager,{}));const{config:i,provider:r,requestManager:n,subscriptionManager:s,registeredSubscriptions:o,accountProvider:a,wallet:u,requestManagerMiddleware:c}=t;this.setConfig(null!=i?i:{}),this._requestManager=null!=n?n:new W(r,null===(e=null==i?void 0:i.enableExperimentalFeatures)||void 0===e?void 0:e.useSubscriptionWhenCheckingBlockTimeout,c),this._subscriptionManager=s||new J(this.requestManager,null!=o?o:{}),a&&(this._accountProvider=a),u&&(this._wallet=u)}get requestManager(){return this._requestManager}get subscriptionManager(){return this._subscriptionManager}get wallet(){return this._wallet}get accountProvider(){return this._accountProvider}static fromContextObject(...t){return new this(...t.reverse())}getContextObject(){var t;return{config:this.config,provider:this.provider,requestManager:this.requestManager,subscriptionManager:this.subscriptionManager,registeredSubscriptions:null===(t=this.subscriptionManager)||void 0===t?void 0:t.registeredSubscriptions,providers:this.providers,wallet:this.wallet,accountProvider:this.accountProvider}}use(t,...e){const i=new t(...[...e,this.getContextObject()]);return this.on(x.CONFIG_CHANGE,(t=>{i.setConfig({[t.name]:t.newValue})})),this[t.name]=i,i}link(t){this.setConfig(t.config),this._requestManager=t.requestManager,this.provider=t.provider,this._subscriptionManager=t.subscriptionManager,this._wallet=t.wallet,this._accountProvider=t._accountProvider,t.on(x.CONFIG_CHANGE,(t=>{this.setConfig({[t.name]:t.newValue})}))}registerPlugin(t){if(void 0!==this[t.pluginNamespace])throw new h(t.pluginNamespace);const e={[t.pluginNamespace]:t};e[t.pluginNamespace].link(this),Object.assign(this,e)}get provider(){return this.currentProvider}set provider(t){this.requestManager.setProvider(t)}get currentProvider(){return this.requestManager.provider}set currentProvider(t){this.requestManager.setProvider(t)}get givenProvider(){return Q.givenProvider}setProvider(t){return this.provider=t,!0}setRequestManagerMiddleware(t){this.requestManager.setMiddleware(t)}get BatchRequest(){return z.bind(void 0,this._requestManager)}extend(t){var e;return t.property&&!this[t.property]&&(this[t.property]={}),null===(e=t.methods)||void 0===e||e.forEach((e=>{const i=(...t)=>K(this,void 0,void 0,(function*(){return this.requestManager.send({method:e.call,params:t})}));t.property?this[t.property][e.name]=i:this[e.name]=i})),this}}Q.providers=W.providers;var X,Y=globalThis&&globalThis.__awaiter||function(t,e,i,r){return new(i||(i=Promise))((function(n,s){function o(t){try{u(r.next(t))}catch(e){s(e)}}function a(t){try{u(r.throw(t))}catch(e){s(e)}}function u(t){var e;t.done?n(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(o,a)}u((r=r.apply(t,e||[])).next())}))};class Z extends S{constructor(t){super(),this[X]="Promise",this._promise=new Promise(t)}then(t,e){return Y(this,void 0,void 0,(function*(){return this._promise.then(t,e)}))}catch(t){return Y(this,void 0,void 0,(function*(){return this._promise.catch(t)}))}finally(t){return Y(this,void 0,void 0,(function*(){return this._promise.finally(t)}))}on(t,e){return super.on(t,e),this}once(t,e){return super.once(t,e),this}}X=Symbol.toStringTag;export{U as W,Q as a,x as b,Z as c,O as i};
