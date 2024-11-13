import{W as t,a as s,b as e}from"./ltDa-b0f7c082.js";import{F as n,b as i,D as o,B as a}from"./63TmSrWO-c706edc1.js";import{W as r,n as c,c as d,S as u}from"./DmJ6LfrSaQ-0eacab28.js";import"./V-c4c59e5a.js";import{b as l,t as h,g as p,W as f}from"./taJQ-69341cff.js";import"./egl-40b4b7b4.js";import{b as m,A as v,d as g,a as b,g as _,c as y,e as j,s as F,f as O,N as I}from"./esPDEf-af6978d9.js";import{e as w,j as P,a as A,b as x,i as C,c as M,d as E,f as S,g as G,h as B,k,l as D}from"./AugH5kF-8ef811ba.js";import{i as R,D as W,F as T,G as $,H,I as L,k as N}from"./JMlYyMcf0-ab5c9801.js";const J=({address:t},s,e)=>{var o,a;const r=null==e?void 0:e.topics,c=null!==(o=null==e?void 0:e.filter)&&void 0!==o?o:{},d={};if(R(null==e?void 0:e.fromBlock)||(d.fromBlock=W(m.properties.number,null==e?void 0:e.fromBlock,{number:n.HEX,bytes:i.HEX})),R(null==e?void 0:e.toBlock)||(d.toBlock=W(m.properties.number,null==e?void 0:e.toBlock,{number:n.HEX,bytes:i.HEX})),r&&Array.isArray(r))d.topics=[...r];else if(d.topics=[],!s||s.anonymous||[v,"allEvents"].includes(s.name)||d.topics.push(null!==(a=s.signature)&&void 0!==a?a:w(P(s))),![v,"allEvents"].includes(s.name)&&s.inputs)for(const n of s.inputs){if(!n.indexed)continue;const t=c[n.name];t?Array.isArray(t)?d.topics.push(t.map((t=>A(n.type,t)))):"string"===n.type?d.topics.push(T(t)):d.topics.push(A(n.type,t)):d.topics.push(null)}return d.topics.length||delete d.topics,t&&(d.address=t.toLowerCase()),d},V=(t,s,e)=>{const n=Array.isArray(t.inputs)?t.inputs.length:0;if(t.inputs&&n!==s.length)throw new r(`The number of arguments is not matching the methods required number. You need to pass ${n} arguments.`);let i;if(i=t.inputs?x(Array.isArray(t.inputs)?t.inputs:[],s).replace("0x",""):C(s).replace("0x",""),M(t)){if(!e)throw new r("The contract has no contract data option set. This is necessary to append the constructor parameters.");return e.startsWith("0x")?`${e}${i}`:`0x${e}${i}`}return`${E(t)}${i}`},U=(t,s,e=!0)=>{const n=e&&s&&s.length>=10&&s.startsWith("0x")?s.slice(10):s;if(!t.inputs)throw new r("No inputs found in the ABI");return S([...t.inputs],n)};class X extends t{constructor(t,s){super(t,s),this.address=t.address,this.topics=t.topics,this.abi=t.abi,this.jsonInterface=t.jsonInterface}_buildSubscriptionParams(){return["logs",{address:this.address,topics:this.topics}]}formatSubscriptionResult(t){return g(this.abi,t,this.jsonInterface,super.returnFormat)}}const Q=(t,s,e,n)=>{var i,o;const a={};return R(t.data)&&"both"!==n||(a.data=V(s,e,null!==(i=t.data)&&void 0!==i?i:t.input)),R(t.input)&&"both"!==n||(a.input=V(s,e,null!==(o=t.input)&&void 0!==o?o:t.data)),R(a.input)&&R(a.data)&&(a[n]=V(s,e)),{data:a.data,input:a.input}},Y=({abi:t,params:s,options:e,contractOptions:n})=>{var i,o,a;if(!(null!==(a=null!==(o=null!==(i=null==e?void 0:e.input)&&void 0!==i?i:null==e?void 0:e.data)&&void 0!==o?o:n.input)&&void 0!==a?a:n.data)&&!(null==e?void 0:e.to)&&!n.address)throw new r("Contract address not specified");if(!(null==e?void 0:e.from)&&!n.from)throw new r('Contract "from" address not specified');let c=$({to:n.address,gas:n.gas,gasPrice:n.gasPrice,from:n.from,input:n.input,maxPriorityFeePerGas:n.maxPriorityFeePerGas,maxFeePerGas:n.maxFeePerGas,data:n.data},e);const d=Q(c,t,s,null==e?void 0:e.dataInputFill);return c=Object.assign(Object.assign({},c),{data:d.data,input:d.input}),c},q=t=>"object"==typeof t&&!R(t)&&0!==Object.keys(t).length&&!H(t);var z=globalThis&&globalThis.__awaiter||function(t,s,e,n){return new(e||(e=Promise))((function(i,o){function a(t){try{c(n.next(t))}catch(s){o(s)}}function r(t){try{c(n.throw(t))}catch(s){o(s)}}function c(t){var s;t.done?i(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(a,r)}c((n=n.apply(t,s||[])).next())}))};const K={logs:X,newHeads:I,newBlockHeaders:I};class Z extends s{constructor(t,n,i,o,a){var r,d,u;const h=H(n)?n:H(i)?i:void 0;let p,f;if(p=q(n)?n:q(i)?i:o,f="object"==typeof n&&"provider"in n?n.provider:"object"==typeof i&&"provider"in i?i.provider:"object"==typeof o&&"provider"in o?o.provider:Z.givenProvider,super(Object.assign(Object.assign({},p),{provider:f,registeredSubscriptions:K})),this.syncWithContext=!1,this._functions={},(null==p?void 0:p.wallet)&&(this._wallet=p.wallet),(null==p?void 0:p.accountProvider)&&(this._accountProvider=p.accountProvider),!l(h)&&!l(h.data)&&!l(h.input)&&"both"!==this.config.contractDataInputFill)throw new c({data:h.data,input:h.input});this._overloadedMethodAbis=new Map;const m=L(o)?o:L(i)?i:null!=a?a:this.defaultReturnFormat,v="string"==typeof n?n:void 0;this.config.contractDataInputFill=null!==(r=null==h?void 0:h.dataInputFill)&&void 0!==r?r:this.config.contractDataInputFill,this._parseAndSetJsonInterface(t,m),this.defaultReturnFormat!==m&&(this.defaultReturnFormat=m),l(v)||this._parseAndSetAddress(v,m),this.options={address:v,jsonInterface:this._jsonInterface,gas:null!==(d=null==h?void 0:h.gas)&&void 0!==d?d:null==h?void 0:h.gasLimit,gasPrice:null==h?void 0:h.gasPrice,from:null==h?void 0:h.from,input:null==h?void 0:h.input,data:null==h?void 0:h.data},this.syncWithContext=null!==(u=null==h?void 0:h.syncWithContext)&&void 0!==u&&u,p instanceof s&&this.subscribeToContextEvents(p),Object.defineProperty(this.options,"address",{set:t=>this._parseAndSetAddress(t,m),get:()=>this._address}),Object.defineProperty(this.options,"jsonInterface",{set:t=>this._parseAndSetJsonInterface(t,m),get:()=>this._jsonInterface}),p instanceof s&&p.on(e.CONFIG_CHANGE,(t=>{this.setConfig({[t.name]:t.newValue})}))}get events(){return this._events}get methods(){return this._methods}clone(){let t;return t=this.options.address?new Z([...this._jsonInterface,...this._errorsInterface],this.options.address,{gas:this.options.gas,gasPrice:this.options.gasPrice,from:this.options.from,input:this.options.input,data:this.options.data,provider:this.currentProvider,syncWithContext:this.syncWithContext,dataInputFill:this.config.contractDataInputFill},this.getContextObject()):new Z([...this._jsonInterface,...this._errorsInterface],{gas:this.options.gas,gasPrice:this.options.gasPrice,from:this.options.from,input:this.options.input,data:this.options.data,provider:this.currentProvider,syncWithContext:this.syncWithContext,dataInputFill:this.config.contractDataInputFill},this.getContextObject()),this.context&&t.subscribeToContextEvents(this.context),t}deploy(t){var s,e,n;let i=this._jsonInterface.find((t=>"constructor"===t.type));i||(i={type:"constructor",stateMutability:""});const a=W({format:"bytes"},null!==(s=null==t?void 0:t.input)&&void 0!==s?s:this.options.input,o),c=W({format:"bytes"},null!==(e=null==t?void 0:t.data)&&void 0!==e?e:this.options.data,o);if(!(a&&"0x"!==a.trim()||c&&"0x"!==c.trim()))throw new r("contract creation without any data provided.");const d=null!==(n=null==t?void 0:t.arguments)&&void 0!==n?n:[],u=Object.assign(Object.assign({},this.options),{input:a,data:c}),l=null!=a?a:c;return{arguments:d,send:t=>{const s=Object.assign({},t);return this._contractMethodDeploySend(i,d,s,u)},estimateGas:(t,s=this.defaultReturnFormat)=>z(this,void 0,void 0,(function*(){const e=Object.assign({},t);return this._contractMethodEstimateGas({abi:i,params:d,returnFormat:s,options:e,contractOptions:u})})),encodeABI:()=>V(i,d,W({format:"bytes"},l,this.defaultReturnFormat)),decodeData:t=>Object.assign(Object.assign({},U(i,t.replace(l,""),!1)),{__method__:i.type})}}getPastEvents(t,s,e){var n;return z(this,void 0,void 0,(function*(){const i="string"==typeof t?t:v,o="string"==typeof t||L(t)?L(s)?{}:s:t,a=L(t)?t:L(s)?s:null!=e?e:this.defaultReturnFormat,c="allEvents"===i||i===v?b:this._jsonInterface.find((t=>"name"in t&&t.name===i));if(!c)throw new r(`Event ${i} not found.`);const{fromBlock:d,toBlock:u,topics:l,address:h}=J(this.options,c,null!=o?o:{}),p=yield _(this,{fromBlock:d,toBlock:u,topics:l,address:h},a),f=p?p.map((t=>"string"==typeof t?t:g(c,t,this._jsonInterface,a))):[],m=null!==(n=null==o?void 0:o.filter)&&void 0!==n?n:{},y=Object.keys(m);return y.length>0?f.filter((t=>"string"==typeof t||y.every((s=>{var e;if(Array.isArray(m[s]))return m[s].some((e=>String(t.returnValues[s]).toUpperCase()===String(e).toUpperCase()));const n=null===(e=c.inputs)||void 0===e?void 0:e.filter((t=>t.name===s))[0];if((null==n?void 0:n.indexed)&&"string"===n.type){if(T(m[s])===String(t.returnValues[s]))return!0}return String(t.returnValues[s]).toUpperCase()===String(m[s]).toUpperCase()})))):f}))}_parseAndSetAddress(t,s=this.defaultReturnFormat){this._address=t?N(W({format:"address"},t,s)):t}decodeMethodData(t){const s=t.slice(0,10),e=this._jsonInterface.filter((t=>"error"!==t.type)).find((t=>s===E(P(t))));if(!e)throw new r(`The ABI for the provided method signature ${s} was not found.`);return Object.assign(Object.assign({},U(e,t)),{__method__:P(e)})}_parseAndSetJsonInterface(t,s=this.defaultReturnFormat){var e,n,i,o,a;this._functions={},this._methods={},this._events={};let r=[];const c=t.filter((t=>"error"!==t.type)),d=t.filter((t=>G(t)));for(const u of c){const t=Object.assign(Object.assign({},u),{signature:""});if(B(t)){const s=P(t),r=E(s);t.methodNameWithInputs=s,t.signature=r,t.constant=null!==(n=null!==(e="view"===t.stateMutability)&&void 0!==e?e:"pure"===t.stateMutability)&&void 0!==n?n:t.constant,t.payable=null!==(i="payable"===t.stateMutability)&&void 0!==i?i:t.payable,this._overloadedMethodAbis.set(t.name,[...null!==(o=this._overloadedMethodAbis.get(t.name))&&void 0!==o?o:[],t]);const c=null!==(a=this._overloadedMethodAbis.get(t.name))&&void 0!==a?a:[],u=this._createContractMethod(c,d),l=this._createContractMethod(c,d,!0);this._functions[s]={signature:r,method:l},this._methods[t.name]=u,this._methods[s]=l,this._methods[r]=l}else if(k(t)){const e=P(t),n=w(e),i=this._createContractEvent(t,s);t.signature=n,e in this._events&&"bound"!==t.name||(this._events[e]=i),this._events[t.name]=i,this._events[n]=i}r=[...r,t]}this._events.allEvents=this._createContractEvent(b,s),this._jsonInterface=[...r],this._errorsInterface=d}_getAbiParams(t,s){var e;try{return h(null!==(e=t.inputs)&&void 0!==e?e:[],s)}catch(n){throw new r(`Invalid parameters for method ${t.name}: ${n.message}`)}}_createContractMethod(t,s,e=!1){const n=t[t.length-1];return(...t)=>{var i,o,a;let r;const c=null!==(o=e?null===(i=this._overloadedMethodAbis.get(n.name))||void 0===i?void 0:i.filter((t=>t.signature===n.signature)):this._overloadedMethodAbis.get(n.name))&&void 0!==o?o:[];let d=c[0];const u=s,l=c.filter((s=>{var e;return(null!==(e=s.inputs)&&void 0!==e?e:[]).length===t.length}));if(1===c.length||0===l.length)r=this._getAbiParams(d,t),p.validate(null!==(a=n.inputs)&&void 0!==a?a:[],r);else{const s=[],e=[];for(const n of l)try{r=this._getAbiParams(n,t),p.validate(n.inputs,r),e.push(n)}catch(m){s.push(m)}if((1===e.length||e.length>1)&&([d]=e),s.length===l.length)throw new f(s)}const h={arguments:r,call:(t,s)=>z(this,void 0,void 0,(function*(){return this._contractMethodCall(d,r,u,t,s)})),send:t=>this._contractMethodSend(d,r,u,t),estimateGas:(t,s=this.defaultReturnFormat)=>z(this,void 0,void 0,(function*(){return this._contractMethodEstimateGas({abi:d,params:r,returnFormat:s,options:t})})),encodeABI:()=>V(d,r),decodeData:t=>U(d,t),createAccessList:(t,s)=>z(this,void 0,void 0,(function*(){return this._contractMethodCreateAccessList(d,r,u,t,s)}))};return d.stateMutability,h}}_contractMethodCall(t,s,e,n,i){var o;return z(this,void 0,void 0,(function*(){const a=(({abi:t,params:s,options:e,contractOptions:n})=>{if(!(null==e?void 0:e.to)&&!n.address)throw new r("Contract address not specified");let i=$({to:n.address,gas:n.gas,gasPrice:n.gasPrice,from:n.from,input:n.input,maxPriorityFeePerGas:n.maxPriorityFeePerGas,maxFeePerGas:n.maxFeePerGas,data:n.data},e);const o=Q(i,t,s,null==e?void 0:e.dataInputFill);return i=Object.assign(Object.assign({},i),{data:o.data,input:o.input}),i})({abi:t,params:s,options:Object.assign(Object.assign({},n),{dataInputFill:this.config.contractDataInputFill}),contractOptions:Object.assign(Object.assign({},this.options),{from:null!==(o=this.options.from)&&void 0!==o?o:this.config.defaultAccount})});try{const s=yield y(this,a,i,this.defaultReturnFormat);return((t,s)=>{if("constructor"===t.type)return s;if(!s)return null;const e=s.length>=2?s.slice(2):s;if(!t.outputs)return null;const n=S([...t.outputs],e);return 1===n.__length__?n[0]:n})(t,s)}catch(c){throw c instanceof d&&D(e,c.cause),c}}))}_contractMethodCreateAccessList(t,s,e,n,i){var o;return z(this,void 0,void 0,(function*(){const a=(({abi:t,params:s,options:e,contractOptions:n})=>{if(!(null==e?void 0:e.to)&&!n.address)throw new r("Contract address not specified");if(!(null==e?void 0:e.from)&&!n.from)throw new r('Contract "from" address not specified');let i=$({to:n.address,gas:n.gas,gasPrice:n.gasPrice,from:n.from,input:n.input,maxPriorityFeePerGas:n.maxPriorityFeePerGas,maxFeePerGas:n.maxFeePerGas,data:n.data},e);const o=Q(i,t,s,null==e?void 0:e.dataInputFill);return i=Object.assign(Object.assign({},i),{data:o.data,input:o.input}),i})({abi:t,params:s,options:Object.assign(Object.assign({},n),{dataInputFill:this.config.contractDataInputFill}),contractOptions:Object.assign(Object.assign({},this.options),{from:null!==(o=this.options.from)&&void 0!==o?o:this.config.defaultAccount})});try{return j(this,a,i,this.defaultReturnFormat)}catch(c){throw c instanceof d&&D(e,c.cause),c}}))}_contractMethodSend(t,s,e,n,i){var o,a;let r=null!=i?i:this.options;r=Object.assign(Object.assign({},r),{input:void 0,from:null!==(a=null!==(o=r.from)&&void 0!==o?o:this.defaultAccount)&&void 0!==a?a:void 0});const c=Y({abi:t,params:s,options:Object.assign(Object.assign({},n),{dataInputFill:this.config.contractDataInputFill}),contractOptions:r}),u=F(this,c,this.defaultReturnFormat,{checkRevertBeforeSending:!1,contractAbi:this._jsonInterface});return u.on("error",(t=>{t instanceof d&&D(e,t.cause)})),u}_contractMethodDeploySend(t,s,e,n){var i,o;let a=null!=n?n:this.options;a=Object.assign(Object.assign({},a),{from:null!==(o=null!==(i=a.from)&&void 0!==i?i:this.defaultAccount)&&void 0!==o?o:void 0});const c=Y({abi:t,params:s,options:Object.assign(Object.assign({},e),{dataInputFill:this.contractDataInputFill}),contractOptions:a});return F(this,c,this.defaultReturnFormat,{transactionResolver:t=>{if(t.status===BigInt(0))throw new r("code couldn't be stored",t);const s=this.clone();return s.options.address=t.contractAddress,s},contractAbi:this._jsonInterface,checkRevertBeforeSending:!1})}_contractMethodEstimateGas({abi:t,params:s,returnFormat:e,options:n,contractOptions:i}){return z(this,void 0,void 0,(function*(){const o=(({abi:t,params:s,options:e,contractOptions:n})=>{let i=$({to:n.address,gas:n.gas,gasPrice:n.gasPrice,from:n.from,input:n.input,data:n.data},e);const o=Q(i,t,s,null==e?void 0:e.dataInputFill);return i=Object.assign(Object.assign({},i),{data:o.data,input:o.input}),i})({abi:t,params:s,options:Object.assign(Object.assign({},n),{dataInputFill:this.config.contractDataInputFill}),contractOptions:null!=i?i:this.options});return O(this,o,a.LATEST,null!=e?e:this.defaultReturnFormat)}))}_createContractEvent(t,s=this.defaultReturnFormat){return(...e)=>{var n;const{topics:i,fromBlock:o}=J(this.options,t,e[0]),a=new X({address:this.options.address,topics:i,abi:t,jsonInterface:this._jsonInterface},{subscriptionManager:this.subscriptionManager,returnFormat:s});return l(o)||this.getPastEvents(t.name,{fromBlock:o,topics:i},s).then((t=>{t&&t.forEach((t=>a.emit("data",t)))})).catch((t=>{a.emit("error",new u("Failed to get past events.",t))})),null===(n=this.subscriptionManager)||void 0===n||n.addSubscription(a).catch((t=>{a.emit("error",new u("Failed to subscribe.",t))})),a}}subscribeToContextEvents(t){const s=this;this.context=t,s.syncWithContext&&t.on(e.CONFIG_CHANGE,(t=>{s.setConfig({[t.name]:t.newValue})}))}}export{Z as C};
