import"./8n-1fe037c7.js";import{p as e,r as t,W as n}from"./wjVRil-567125c3.js";import{E as o}from"./Gl-176e1540.js";import{az as i}from"./67PO-4e172f33.js";import"./3cJxiB-a30d2150.js";import{e as s,n as r,d as a,a as c,b as d,o as u,f as p,m as v}from"./Fh968nN2-445e7e79.js";import{a as f,i as l}from"./TlTZ-938acc22.js";import{I as b}from"./saUGCH8iO-d3704592.js";import{W as w,r as m,h as g,s as h,a as j,e as y,p as P,b as E,c as T,d as O,f as x,g as K,i as S}from"./rL-75500b71.js";import"./B9P2-29b8e615.js";import{C}from"./7gJm-d4359fe0.js";import{E as I,r as _}from"./MdSpb3ay-0fc16af4.js";import{P as L}from"./RYnQaUu-de08e82b.js";import"./6LrGR-cb966fbe.js";import"./Q4p-71722cbc.js";import{D as M,i as N,R as q,H as A,I as F}from"./FM2XQ-43b42aec.js";import{N as R}from"./o-36e55b9a.js";import"./g-7ca13de2.js";const W={encodeEventSignature:s,encodeFunctionCall:r,encodeFunctionSignature:a,encodeParameter:c,encodeParameters:d,decodeParameter:u,decodeParameters:p,decodeLog:v};var G=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};var Q,U,B=globalThis&&globalThis.__awaiter||function(e,t,n,o){return new(n||(n=Promise))((function(i,s){function r(e){try{c(o.next(e))}catch(t){s(t)}}function a(e){try{c(o.throw(e))}catch(t){s(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}c((o=o.apply(e,t||[])).next())}))};(U=Q||(Q={})).eip6963announceProvider="eip6963:announceProvider",U.eip6963requestProvider="eip6963:requestProvider";const D=new Map,H="web3:providersMapUpdated";class J extends f{constructor(s){var r;N(s)||"string"==typeof s&&""===s.trim()||"string"!=typeof s&&!l(s)&&s.provider;let a={};"string"==typeof s||l(s)?a.provider=s:a=s||{},a.registeredSubscriptions=Object.assign(Object.assign({},t),null!==(r=a.registeredSubscriptions)&&void 0!==r?r:{}),super(a);const c=(t=>{const n=(n,i)=>G(void 0,void 0,void 0,(function*(){const s=yield e(n,t),r=M({format:"bytes"},i,o);return O(s,r)})),i=e=>{const t=x(e);return Object.assign(Object.assign({},t),{signTransaction:e=>G(void 0,void 0,void 0,(function*(){return n(e,t.privateKey)}))})},s=(e,t,o)=>G(void 0,void 0,void 0,(function*(){var i;const s=yield K(e,t,null===(i=null==o?void 0:o.nonStrict)||void 0===i||i);return Object.assign(Object.assign({},s),{signTransaction:e=>G(void 0,void 0,void 0,(function*(){return n(e,s.privateKey)}))})})),r=()=>{const e=S();return Object.assign(Object.assign({},e),{signTransaction:t=>G(void 0,void 0,void 0,(function*(){return n(t,e.privateKey)}))})},a=new w({create:r,privateKeyToAccount:i,decrypt:s});return{signTransaction:n,create:r,privateKeyToAccount:i,decrypt:s,recoverTransaction:m,hashMessage:g,sign:h,recover:j,encrypt:y,wallet:a,privateKeyToAddress:P,parseAndValidatePrivateKey:E,privateKeyToPublicKey:T}})(this);this._wallet=c.wallet,this._accountProvider=c,this.utils=q;const d=this;const u=d.use(n);this.eth=Object.assign(u,{ens:d.use(I,_.main),Iban:b,net:d.use(R),personal:d.use(L),Contract:class p extends C{constructor(e,t,n,o,s){if(A(t)&&A(n))throw new i("Should not provide options at both 2nd and 3rd parameters");let r,a,c,u={};if(!N(t)&&"object"!=typeof t&&"string"!=typeof t)throw new i;"string"==typeof t&&(r=t),u=A(t)?t:A(n)?n:{},a=t instanceof f?t:n instanceof f?n:o instanceof f?o:d.getContextObject(),s?c=s:F(n)?c=n:F(o)&&(c=o),super(e,r,u,a,c),super.subscribeToContextEvents(d)}},abi:W,accounts:c})}}J.version="4.9.0",J.utils=q,J.requestEIP6963Providers=()=>B(void 0,void 0,void 0,(function*(){return new Promise(((e,t)=>{"undefined"==typeof window&&t(new Error("window object not available, EIP-6963 is intended to be used within a browser")),window.addEventListener(Q.eip6963announceProvider,(t=>{D.set(t.detail.info.uuid,t.detail);const n=new CustomEvent(H,{detail:D});window.dispatchEvent(n),e(D)})),window.dispatchEvent(new Event(Q.eip6963requestProvider))}))})),J.onNewProviderDiscovered=e=>{if("undefined"==typeof window)throw new Error("window object not available, EIP-6963 is intended to be used within a browser");window.addEventListener(H,e)},J.modules={Web3Eth:n,Iban:b,Net:R,ENS:I,Personal:L};export{J as W};