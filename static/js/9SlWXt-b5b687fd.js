import{a as e}from"./ngCDldB-14b8f186.js";import{F as t}from"./aNEOx-cd1a3c66.js";import{o as n,p as s,q as i}from"./RIdgqr-496d1ed2.js";import"./KUaUumJ-a242f77f.js";import{e as r}from"./gXDwucsVSH-3272eea5.js";import"./Q8luBI-3852b9e5.js";import{i as a}from"./sd26h95-c49a295c.js";import"./pzq9I3K-8c3ca517.js";import{g as o}from"./V19Cy4dD-511aa0b6.js";import{C as y}from"./QHKbZQsZ-82c8766e.js";import{e as d}from"./V-d572886a.js";import{s as p,i as u,J as l}from"./sPKC-d1070d30.js";const c={addr:"0x3b3b57de",name:"0x691f3431",abi:"0x2203ab56",pubkey:"0xc8690233",text:"0x59d1d43c",contenthash:"0xbc1c58d1"},m="addr",h="addr",b="pubkey",v="contenthash",f="text",T="name",g={main:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",goerli:"0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"},x={"0x1":"main","0x5":"goerli"},w=[{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!0,internalType:"bytes32",name:"label",type:"bytes32"},{indexed:!1,internalType:"address",name:"owner",type:"address"}],name:"NewOwner",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"address",name:"resolver",type:"address"}],name:"NewResolver",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"address",name:"owner",type:"address"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"recordExists",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"resolver",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"ttl",outputs:[{internalType:"uint64",name:"",type:"uint64"}],stateMutability:"view",type:"function"}],C=[{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"address",name:"a",type:"address"}],name:"AddrChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"uint256",name:"coinType",type:"uint256"},{indexed:!1,internalType:"bytes",name:"newAddress",type:"bytes"}],name:"AddressChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"hash",type:"bytes"}],name:"ContenthashChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"name",type:"bytes"},{indexed:!1,internalType:"uint16",name:"resource",type:"uint16"},{indexed:!1,internalType:"bytes",name:"record",type:"bytes"}],name:"DNSRecordChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"name",type:"bytes"},{indexed:!1,internalType:"uint16",name:"resource",type:"uint16"}],name:"DNSRecordDeleted",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"}],name:"DNSZoneCleared",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"bytes",name:"lastzonehash",type:"bytes"},{indexed:!1,internalType:"bytes",name:"zonehash",type:"bytes"}],name:"DNSZonehashChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!0,internalType:"bytes4",name:"interfaceID",type:"bytes4"},{indexed:!1,internalType:"address",name:"implementer",type:"address"}],name:"InterfaceChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"string",name:"name",type:"string"}],name:"NameChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!1,internalType:"bytes32",name:"x",type:"bytes32"},{indexed:!1,internalType:"bytes32",name:"y",type:"bytes32"}],name:"PubkeyChanged",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"bytes32",name:"node",type:"bytes32"},{indexed:!0,internalType:"string",name:"indexedKey",type:"string"},{indexed:!1,internalType:"string",name:"key",type:"string"}],name:"TextChanged",type:"event"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"uint256",name:"contentTypes",type:"uint256"}],name:"ABI",outputs:[{internalType:"uint256",name:"",type:"uint256"},{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"addr",outputs:[{internalType:"address payable",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"uint256",name:"coinType",type:"uint256"}],name:"addr",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"contenthash",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"bytes32",name:"name",type:"bytes32"},{internalType:"uint16",name:"resource",type:"uint16"}],name:"dnsRecord",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"bytes32",name:"name",type:"bytes32"}],name:"hasDNSRecords",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"bytes4",name:"interfaceID",type:"bytes4"}],name:"interfaceImplementer",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"account",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"pubkey",outputs:[{internalType:"bytes32",name:"x",type:"bytes32"},{internalType:"bytes32",name:"y",type:"bytes32"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceID",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"string",name:"key",type:"string"}],name:"text",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"}],name:"zonehash",outputs:[{internalType:"bytes",name:"",type:"bytes"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes32",name:"node",type:"bytes32"},{internalType:"address",name:"a",type:"address"}],name:"setAddr",outputs:[],stateMutability:"nonpayable",type:"function"}],A=e=>{let t="";for(let n=0;n<32;n+=1)t+="00";if(e){const n=(e=>d(e))(e).split(".");for(let e=n.length-1;e>=0;e-=1){const s=p(n[e]).slice(2);t=p(`0x${t}${s}`).slice(2)}}return`0x${t}`};var _=globalThis&&globalThis.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function a(e){try{y(s.next(e))}catch(t){r(t)}}function o(e){try{y(s.throw(e))}catch(t){r(t)}}function y(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}y((s=s.apply(e,t||[])).next())}))};class I{constructor(e,t){this.contract=new y(w,null!=t?t:g.main,e),this.context=e}getOwner(e){return _(this,void 0,void 0,(function*(){try{return this.contract.methods.owner(A(e)).call()}catch(t){throw new Error}}))}getTTL(e){return _(this,void 0,void 0,(function*(){try{return this.contract.methods.ttl(A(e)).call()}catch(t){throw new Error}}))}recordExists(e){return _(this,void 0,void 0,(function*(){try{return this.contract.methods.recordExists(A(e)).call()}catch(t){throw new Error}}))}getResolver(e){return _(this,void 0,void 0,(function*(){try{return this.contract.methods.resolver(A(e)).call().then((e=>{if("string"==typeof e){return new y(C,e,this.context)}throw new Error}))}catch(t){throw new Error}}))}get events(){return this.contract.events}}var k=globalThis&&globalThis.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function a(e){try{y(s.next(e))}catch(t){r(t)}}function o(e){try{y(s.throw(e))}catch(t){r(t)}}function y(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}y((s=s.apply(e,t||[])).next())}))};class M{constructor(e){this.registry=e}getResolverContractAdapter(e){return k(this,void 0,void 0,(function*(){return this.registry.getResolver(e)}))}checkInterfaceSupport(e,t){var s,i;return k(this,void 0,void 0,(function*(){if(u(c[t]))throw new n(null!==(s=e.options.address)&&void 0!==s?s:"",t);if(!(yield e.methods.supportsInterface(c[t]).call()))throw new n(null!==(i=e.options.address)&&void 0!==i?i:"",t)}))}supportsInterface(e,t){var n;return k(this,void 0,void 0,(function*(){const s=yield this.getResolverContractAdapter(e);let i=t;if(!r(i)){if(i=null!==(n=l(t))&&void 0!==n?n:"",""===t)throw new Error("Invalid interface Id");i=i.slice(0,10)}return s.methods.supportsInterface(i).call()}))}getAddress(e,t=60){return k(this,void 0,void 0,(function*(){const n=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(n,h),n.methods.addr(A(e),t).call()}))}getPubkey(e){return k(this,void 0,void 0,(function*(){const t=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(t,b),t.methods.pubkey(A(e)).call()}))}getContenthash(e){return k(this,void 0,void 0,(function*(){const t=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(t,v),t.methods.contenthash(A(e)).call()}))}setAddress(e,t,n){return k(this,void 0,void 0,(function*(){const s=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(s,m),s.methods.setAddr(A(e),t).send(n)}))}getText(e,t){return k(this,void 0,void 0,(function*(){const n=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(n,f),n.methods.text(A(e),t).call()}))}getName(e){return k(this,void 0,void 0,(function*(){const t=yield this.getResolverContractAdapter(e);return yield this.checkInterfaceSupport(t,T),t.methods.name(A(e)).call()}))}}var R=globalThis&&globalThis.__awaiter||function(e,t,n,s){return new(n||(n=Promise))((function(i,r){function a(e){try{y(s.next(e))}catch(t){r(t)}}function o(e){try{y(s.throw(e))}catch(t){r(t)}}function y(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,o)}y((s=s.apply(e,t||[])).next())}))};class E extends e{constructor(e,t){super(null!=t?t:""),this.registryAddress=null!=e?e:g.main,this._registry=new I(this.getContextObject(),e),this._resolver=new M(this._registry)}getResolver(e){return R(this,void 0,void 0,(function*(){return this._registry.getResolver(e)}))}recordExists(e){return R(this,void 0,void 0,(function*(){return this._registry.recordExists(e)}))}getTTL(e){return R(this,void 0,void 0,(function*(){return this._registry.getTTL(e)}))}getOwner(e){return R(this,void 0,void 0,(function*(){return this._registry.getOwner(e)}))}getAddress(e,t=60){return R(this,void 0,void 0,(function*(){return this._resolver.getAddress(e,t)}))}getText(e,t){return R(this,void 0,void 0,(function*(){return this._resolver.getText(e,t)}))}getName(e){return R(this,void 0,void 0,(function*(){return this._resolver.getName(e)}))}getPubkey(e){return R(this,void 0,void 0,(function*(){return this._resolver.getPubkey(e)}))}getContenthash(e){return R(this,void 0,void 0,(function*(){return this._resolver.getContenthash(e)}))}checkNetwork(){return R(this,void 0,void 0,(function*(){const e=Date.now()/1e3;if(!this._lastSyncCheck||e-this._lastSyncCheck>3600){const t=yield a(this);if("boolean"!=typeof t||t)throw new s;this._lastSyncCheck=e}if(this._detectedAddress)return this._detectedAddress;const n=yield o(this,Object.assign(Object.assign({},this.defaultReturnFormat),{number:t.HEX})),r=g[x[n]];if(void 0===r)throw new i(n);return this._detectedAddress=r,this._detectedAddress}))}supportsInterface(e,t){return R(this,void 0,void 0,(function*(){return this._resolver.supportsInterface(e,t)}))}get events(){return this._registry.events}setAddress(e,t,n){return R(this,void 0,void 0,(function*(){return this._resolver.setAddress(e,t,n)}))}}export{E,g as r};
