import{a as e,k as t,b as r,d as n,e as o,r as a,f as s,c as i,p as c,s as u,g as l,i as d}from"./u-28b81c73.js";import{s as f}from"./z-dbd12ae6.js";e.bool;const w=e.bytes;function h(e){if(!(e instanceof Uint8Array))throw new TypeError("bytesToUtf8 expected Uint8Array, got "+typeof e);return(new TextDecoder).decode(e)}function p(t){return r=>(e.bytes(r),t(r))}(()=>{const e="object"==typeof globalThis&&"crypto"in globalThis?globalThis.crypto:void 0,t="undefined"!=typeof module&&"function"==typeof module.require&&module.require.bind(module);t&&!e&&t("crypto")})(),p(t);const b=(()=>{const e=p(r);return e.create=r.create,e})();function y(e){return a(e)}p(n),p(o);const g={web:s};function m(e,t,r){if(!r.startsWith("aes-"))throw new Error(`AES submodule doesn't support mode ${r}`);if(16!==t.length)throw new Error("AES: wrong IV length");if(r.startsWith("aes-128")&&16!==e.length||r.startsWith("aes-256")&&32!==e.length)throw new Error("AES: wrong key length")}async function E(e,t,r){if(!g.web)throw new Error("Browser crypto not available.");let n;if(["aes-128-cbc","aes-256-cbc"].includes(e)&&(n="cbc"),["aes-128-ctr","aes-256-ctr"].includes(e)&&(n="ctr"),!n)throw new Error("AES: unsupported mode");return[await g.web.subtle.importKey("raw",t,{name:`AES-${n.toUpperCase()}`,length:8*t.length},!0,["encrypt","decrypt"]),{name:`aes-${n}`,iv:r,counter:r,length:128}]}async function A(e,t,r,n="aes-128-ctr",o=!0){if(m(t,r,n),g.web){const[a,s]=await E(n,t,r),i=await g.web.subtle.encrypt(s,a,e);let c=new Uint8Array(i);return o||"aes-cbc"!==s.name||e.length%16||(c=c.slice(0,-16)),c}if(g.node){const a=g.node.createCipheriv(n,t,r);return a.setAutoPadding(o),i(a.update(e),a.final())}throw new Error("The environment doesn't have AES module")}async function v(e,t,r,n="aes-128-ctr",o=!0){if(m(t,r,n),g.web){const[a,s]=await E(n,t,r);if(!o&&"aes-cbc"===s.name){const o=await async function(e,t,r,n){const o=e.slice(-16);for(let a=0;a<16;a++)o[a]^=16^r[a];return(await A(o,t,r,n)).slice(0,16)}(e,t,r,n);e=i(e,o)}const c=await g.web.subtle.decrypt(s,a,e),u=new Uint8Array(c);if("aes-cbc"===s.name){if(!function(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}(await A(u,t,r,n),e))throw new Error("AES: wrong padding")}return u}if(g.node){const a=g.node.createDecipheriv(n,t,r);return a.setAutoPadding(o),i(a.update(e),a.final())}throw new Error("The environment doesn't have AES module")}function S(e,t,r,n,o){if(!["sha256","sha512"].includes(o))throw new Error("Only sha256 and sha512 are supported");return w(e),w(t),c("sha256"===o?u:l,e,t,{c:r,dkLen:n})}function T(e,t,r,n,o,a,s){return w(e),w(t),d(e,t,{N:r,r:o,p:n,dkLen:a,onProgress:s})}const k=Object.freeze(Object.defineProperty({__proto__:null,secp256k1:f},Symbol.toStringTag,{value:"Module"}));export{A as a,h as b,v as d,k as e,y as g,b as k,S as p,T as s};
