import{aw as e,ax as t,ag as r,ae as s,ay as i}from"./AV-d5d60771.js";import{B as n,T as a}from"./F80yR-2c05f73f.js";import{k as o}from"./aoit2XYn-67625a90.js";import{u as l}from"./se-1fc5d9ae.js";import{Z as u,z as f}from"./3vXEZg-10d514e7.js";const c=e=>e.message?e.message:"unspecified error";class m extends e{constructor(e){super(),this.code=t,this.errors=e,super.message=`Web3 validator found ${e.length} error[s]:\n${this._compileErrors().join("\n")}`}_compileErrors(){return this.errors.map(c)}}const y=["bool","int","uint","bytes","string","address","tuple"],p=e=>"object"==typeof e&&"type"in e&&"name"in e,d=e=>"string"==typeof e,h=e=>"string"==typeof e&&/^((-)?0x[0-9a-f]+|(0x))$/i.test(e);function g(e,t){return!("string"!=typeof e||!e.match(/^0x[0-9A-Fa-f]*$/))&&!(void 0!==t&&t>0&&e.length!==2+2*t)}const b=e=>"number"==typeof e||"bigint"==typeof e||"string"==typeof e&&/^((-0x|0x|-)?[0-9a-f]+|(0x))$/i.test(e);function v(e){if("string"!=typeof e)throw new Error("[isHexPrefixed] input must be type 'string', received type "+typeof e);return e.startsWith("0x")}const A=function(e){for(const[t,r]of Object.entries(e))if(void 0!==r&&r.length>0&&0===r[0])throw new Error(`${t} cannot have leading zeroes, received: ${r.toString()}`)},$=["hex","number","blockNumber","blockNumberOrTag","filter","bloom"],x=e=>{let t,r=e.replace(/ /,""),s=!1,i=[];if(e.includes("[")&&(r=r.slice(0,r.indexOf("[")),i=[...e.matchAll(/(?:\[(\d*)\])/g)].map((e=>parseInt(e[1],10))).map((e=>Number.isNaN(e)?-1:e)),s=i.length>0),y.includes(r))return{baseType:r,isArray:s,baseTypeSize:t,arraySizes:i};if(r.startsWith("int"))t=parseInt(r.substring(3),10),r="int";else if(r.startsWith("uint"))t=parseInt(e.substring(4),10),r="uint";else{if(!r.startsWith("bytes"))return{baseType:void 0,isArray:!1,baseTypeSize:void 0,arraySizes:i};t=parseInt(r.substring(5),10),r="bytes"}return{baseType:r,isArray:s,baseTypeSize:t,arraySizes:i}},I=(e,t={})=>{if(Object.keys(t).includes("type"))throw new m([{keyword:"eth",message:'Either "eth" or "type" can be presented in schema',params:{eth:e},instancePath:"",schemaPath:""}]);const{baseType:r,baseTypeSize:s}=x(e);if(!r&&!$.includes(e))throw new m([{keyword:"eth",message:`Eth data type "${e}" is not valid`,params:{eth:e},instancePath:"",schemaPath:""}]);if(r){if("tuple"===r)throw new Error('"tuple" type is not implemented directly.');return{format:`${r}${null!=s?s:""}`,required:!0}}return e?{format:e,required:!0}:{}},w=(e,t="/0")=>{const r={type:"array",items:[],maxItems:e.length,minItems:e.length};for(const[s,i]of e.entries()){let e,n,a=[];p(i)?(e=i.type,n=i.name||`${t}/${s}`,a=i.components):"string"==typeof i?(e=i,n=`${t}/${s}`):Array.isArray(i)&&(i[0]&&"string"==typeof i[0]&&i[0].startsWith("tuple")&&!Array.isArray(i[0])&&i[1]&&Array.isArray(i[1])?(e=i[0],n=`${t}/${s}`,a=i[1]):(e="tuple",n=`${t}/${s}`,a=i));const{baseType:o,isArray:l,arraySizes:u}=x(e);let f,c=r;for(let t=u.length-1;t>0;t-=1)f={type:"array",$id:n,items:[],maxItems:u[t],minItems:u[t]},u[t]<0&&(delete f.maxItems,delete f.minItems),Array.isArray(c.items)?0===c.items.length?c.items=[f]:c.items.push(f):c.items=[c.items,f],c=f;if("tuple"!==o||l)if("tuple"===o&&l){const e=u[0],t=Object.assign({type:"array",$id:n,items:w(a,n)},e>=0&&{minItems:e,maxItems:e});c.items.push(t)}else if(l){const t=u[0],r=Object.assign({type:"array",$id:n,items:I(e)},t>=0&&{minItems:t,maxItems:t});c.items.push(r)}else Array.isArray(c.items),c.items.push(Object.assign({$id:n},I(e)));else{const e=w(a,n);e.$id=n,c.items.push(e)}c=r}return r},T=e=>w(e),S=(e,t)=>1===t?e:S(e[0],t-1),j=(e,t,r)=>{const s=[];for(const[i,n]of e.entries()){let e,a,o=[];p(n)?(e=n.type,a=n.name,o=n.components):"string"==typeof n?e=n:Array.isArray(n)&&(n[1]&&Array.isArray(n[1])?(e=n[0],o=n[1]):(e="tuple",o=n));const{baseType:l,isArray:u,arraySizes:f}=x(e),c=Array.isArray(t)?t[i]:t[a];if("tuple"!==l||u)if("tuple"===l&&u){const e=[];for(const t of c)if(f.length>1){const s=S(t,f.length-1),i=[];for(const e of s)i.push(j(o,e,r));e.push(i)}else e.push(j(o,t,r));s.push(e)}else s.push(c);else s.push(j(o,c,r))}return(r=null!=r?r:[]).push(...s),r},z=e=>{if(e>=48&&e<=57)return e-48;if(e>=65&&e<=70)return e-55;if(e>=97&&e<=102)return e-87;throw new Error(`Invalid code point: ${e}`)},B=e=>{if(!h(e))throw new Error("Invalid hex string");const[t,r]=e.startsWith("-")?[!0,e.slice(1)]:[!1,e],s=BigInt(r);return s>Number.MAX_SAFE_INTEGER?t?-s:s:s<Number.MIN_SAFE_INTEGER?s:t?-1*Number(s):Number(s)},O=e=>{if(("number"==typeof e||"bigint"==typeof e)&&e<0)return`-0x${e.toString(16).slice(1)}`;if(("number"==typeof e||"bigint"==typeof e)&&e>=0)return`0x${e.toString(16)}`;if("string"==typeof e&&h(e)){const[t,r]=e.startsWith("-")?[!0,e.slice(1)]:[!1,e];return`${t?"-":""}0x${r.split(/^(-)?0(x|X)/).slice(-1)[0].replace(/^0+/,"").toLowerCase()}`}if("string"==typeof e&&!h(e))return O(BigInt(e));throw new r(e)},E=(e,t,r="0")=>{if("string"==typeof e&&!h(e))return e.padStart(t,r);const s="string"==typeof e&&h(e)?e:O(e),[i,n]=s.startsWith("-")?["-0x",s.slice(3)]:["0x",s.slice(2)];return`${i}${n.padStart(t,r)}`};function N(e){let t="0x";for(const r of e){const e=r.toString(16);t+=1===e.length?`0${e}`:e}return t}const k={zero:48,nine:57,A:65,F:70,a:97,f:102};function _(e){return e>=k.zero&&e<=k.nine?e-k.zero:e>=k.A&&e<=k.F?e-(k.A-10):e>=k.a&&e<=k.f?e-(k.a-10):void 0}function W(e){let t=0;if(!e.startsWith("0")||"x"!==e[1]&&"X"!==e[1]||(t=2),e.length%2!=0)throw new s(`hex string has odd length: ${e}`);const r=(e.length-t)/2,i=new Uint8Array(r);for(let n=0,a=t;n<r;n+=1){const t=_(e.charCodeAt(a++)),r=_(e.charCodeAt(a++));if(void 0===t||void 0===r)throw new s(`Invalid byte sequence ("${e[a-2]}${e[a-1]}" in "${e}").`);i[n]=16*t+r}return i}function F(e){var t;return e instanceof Uint8Array||"Uint8Array"!==(null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name)?e:Uint8Array.from(e)}const P=Object.freeze(Object.defineProperty({__proto__:null,parseBaseType:x,abiSchemaToJsonSchema:w,ethAbiToJsonSchema:T,fetchArrayElement:S,transformJsonDataToAbiFormat:j,codePointToInt:z,hexToNumber:B,numberToHex:O,padLeft:E,uint8ArrayToHexString:N,hexToUint8Array:W,ensureIfUint8Array:F},Symbol.toStringTag,{value:"Module"})),U=e=>{var t,r;return e instanceof Uint8Array||"Uint8Array"===(null===(t=null==e?void 0:e.constructor)||void 0===t?void 0:t.name)||"Buffer"===(null===(r=null==e?void 0:e.constructor)||void 0===r?void 0:r.name)},q=(e,t={abiType:"bytes"})=>{if("string"!=typeof e&&!Array.isArray(e)&&!U(e))return!1;if("string"==typeof e&&h(e)&&e.startsWith("-"))return!1;if("string"==typeof e&&!h(e))return!1;let r;if("string"==typeof e){if(e.length%2!=0)return!1;r=W(e)}else if(Array.isArray(e)){if(e.some((e=>e<0||e>255||!Number.isInteger(e))))return!1;r=new Uint8Array(e)}else r=e;if(null==t?void 0:t.abiType){const{baseTypeSize:e}=x(t.abiType);return!e||r.length===e}return!(null==t?void 0:t.size)||r.length===(null==t?void 0:t.size)},C=e=>{if(!/^(0x)?[0-9a-f]{40}$/i.test(e))return!1;const t=e.slice(2),r=l(t.toLowerCase()),s=N(o(F(r))).slice(2);for(let i=0;i<40;i+=1)if(parseInt(s[i],16)>7&&t[i].toUpperCase()!==t[i]||parseInt(s[i],16)<=7&&t[i].toLowerCase()!==t[i])return!1;return!0},X=(e,t=!0)=>{if("string"!=typeof e&&!U(e))return!1;let r;return r=U(e)?N(e):"string"!=typeof e||h(e)||e.toLowerCase().startsWith("0x")?e:`0x${e}`,!!/^(0x)?[0-9a-f]{40}$/i.test(r)&&(!(!/^(0x|0X)?[0-9a-f]{40}$/.test(r)&&!/^(0x|0X)?[0-9A-F]{40}$/.test(r))||(!t||C(r)))},J=(e,t)=>{if(t===BigInt(0))return BigInt(1);let r=e;for(let s=1;s<t;s+=1)r*=e;return r},L=(e,t={abiType:"uint"})=>{if(!["number","string","bigint"].includes(typeof e)||"string"==typeof e&&0===e.length)return!1;let r;if(null==t?void 0:t.abiType){const{baseTypeSize:e}=x(t.abiType);e&&(r=e)}else t.bitSize&&(r=t.bitSize);const s=J(BigInt(2),BigInt(null!=r?r:256))-BigInt(1);try{const t="string"==typeof e&&h(e)?BigInt(B(e)):BigInt(e);return t>=0&&t<=s}catch(i){return!1}},M=(e,t={abiType:"int"})=>{if(!["number","string","bigint"].includes(typeof e))return!1;if("number"==typeof e&&e>Number.MAX_SAFE_INTEGER)return!1;let r;if(null==t?void 0:t.abiType){const{baseTypeSize:e,baseType:s}=x(t.abiType);if("int"!==s)return!1;e&&(r=e)}else t.bitSize&&(r=t.bitSize);const s=J(BigInt(2),BigInt((null!=r?r:256)-1)),i=BigInt(-1)*J(BigInt(2),BigInt((null!=r?r:256)-1));try{const t="string"==typeof e&&h(e)?BigInt(B(e)):BigInt(e);return t>=i&&t<=s}catch(n){return!1}},H=e=>!!M(e)||(!("string"!=typeof e||!/[0-9.]/.test(e)||e.indexOf(".")!==e.lastIndexOf("."))||"number"==typeof e),R=e=>L(e),G=e=>Object.values(n).includes(e),D=e=>G(e)||R(e),Z=e=>"string"==typeof e&&(!!/^(0x)?[0-9a-f]{512}$/i.test(e)&&!(!/^(0x)?[0-9a-f]{512}$/.test(e)&&!/^(0x)?[0-9A-F]{512}$/.test(e))),V=(e,t)=>{if("string"==typeof t&&!h(t))return!1;if(!Z(e))return!1;const r="string"==typeof t?W(t):t,s=N(o(r)).slice(2);for(let i=0;i<12;i+=4){const t=(parseInt(s.slice(i,i+2),16)<<8)+parseInt(s.slice(i+2,i+4),16)&2047,r=1<<t%4;if((z(e.charCodeAt(e.length-1-Math.floor(t/4)))&r)!==r)return!1}return!0},Y=(e,t)=>{if(!Z(e))return!1;if(!X(t))return!1;const r=E(t,64);return V(e,r)},K=(e,t)=>!!Z(e)&&(!!X(t)&&V(e,t)),Q=e=>null==e,ee=e=>!("object"!=typeof e||Q(e)||Array.isArray(e)||e instanceof a),te=e=>"string"==typeof e&&(!!/^(0x)?[0-9a-f]{64}$/i.test(e)&&!(!/^(0x)?[0-9a-f]{64}$/.test(e)&&!/^(0x)?[0-9A-F]{64}$/.test(e))),re=(e,t)=>!!Z(e)&&(!!te(t)&&V(e,t)),se={address:e=>X(e),bloom:e=>Z(e),blockNumber:e=>R(e),blockTag:e=>G(e),blockNumberOrTag:e=>D(e),bool:e=>{return!!["number","string","boolean"].includes(typeof(t=e))&&("boolean"==typeof t||("string"!=typeof t||h(t)?"string"==typeof t&&h(t)?"0x1"===t||"0x0"===t:1===t||0===t:"1"===t||"0"===t));var t},bytes:e=>q(e),filter:e=>(e=>{const t=["fromBlock","toBlock","address","topics","blockHash"];if(Q(e)||"object"!=typeof e)return!1;if(!Object.keys(e).every((e=>t.includes(e))))return!1;if(!Q(e.fromBlock)&&!D(e.fromBlock)||!Q(e.toBlock)&&!D(e.toBlock))return!1;if(!Q(e.address))if(Array.isArray(e.address)){if(!e.address.every((e=>X(e))))return!1}else if(!X(e.address))return!1;return!(!Q(e.topics)&&!e.topics.every((e=>!!Q(e)||(Array.isArray(e)?e.every((e=>te(e))):!!te(e)))))})(e),hex:e=>h(e),uint:e=>L(e),int:e=>M(e),number:e=>H(e),string:e=>d(e)};for(let le=8;le<=256;le+=8)se[`int${le}`]=e=>M(e,{bitSize:le}),se[`uint${le}`]=e=>L(e,{bitSize:le});for(let le=1;le<=32;le+=1)se[`bytes${le}`]=e=>q(e,{size:le});se.bytes256=se.bytes;const ie=e=>{if((!(null==e?void 0:e.type)||"object"===(null==e?void 0:e.type))&&(null==e?void 0:e.properties)){const t={};for(const r of Object.keys(e.properties)){const s=ie(e.properties[r]);s&&(t[r]=s)}return Array.isArray(e.required)?f.object(t).partial().required(e.required.reduce(((e,t)=>Object.assign(Object.assign({},e),{[t]:!0})),{})):f.object(t).partial()}if("array"===(null==e?void 0:e.type)&&(null==e?void 0:e.items)){if(Array.isArray(e.items)&&e.items.length>1&&void 0!==e.maxItems&&new Set(e.items.map((e=>e.$id))).size===e.items.length){const t=[];for(const r of e.items){const e=ie(r);e&&t.push(e)}return f.tuple(t)}const t=Array.isArray(e.items)?e.items[0]:e.items;let r=f.array(ie(t));return r=void 0!==e.minItems?r.min(e.minItems):r,r=void 0!==e.maxItems?r.max(e.maxItems):r,r}if(e.oneOf&&Array.isArray(e.oneOf))return f.union(e.oneOf.map((e=>ie(e))));if(null==e?void 0:e.format){if(!se[e.format])throw new i(e.format);return f.any().refine(se[e.format],(t=>({params:{value:t,format:e.format}})))}return(null==e?void 0:e.type)&&"object"!==(null==e?void 0:e.type)&&"function"==typeof f[String(e.type)]?f[String(e.type)]():f.object({data:f.any()}).partial()};class ne{static factory(){return ne.validatorInstance||(ne.validatorInstance=new ne),ne.validatorInstance}validate(e,t,r){var s,i;const n=ie(e).safeParse(t);if(!n.success){const e=this.convertErrors(null!==(i=null===(s=n.error)||void 0===s?void 0:s.issues)&&void 0!==i?i:[]);if(e){if(null==r?void 0:r.silent)return e;throw new m(e)}}}convertErrors(e){if(e&&Array.isArray(e)&&e.length>0)return e.map((e=>{var t;let r,s,i,n;n=e.path.join("/");const a=String(e.path[e.path.length-1]),o=e.path.join("/");if(e.code===u.too_big)s="maxItems",n=`${o}/maxItems`,i={limit:e.maximum},r=`must NOT have more than ${e.maximum} items`;else if(e.code===u.too_small)s="minItems",n=`${o}/minItems`,i={limit:e.minimum},r=`must NOT have fewer than ${e.minimum} items`;else if(e.code===u.custom){const{value:s,format:a}=null!==(t=e.params)&&void 0!==t?t:{};r=void 0===s?`value at "/${n}" is required`:`value "${"object"==typeof s?JSON.stringify(s):s}" at "/${n}" must pass "${a}" validation`,i={value:s}}return{keyword:null!=s?s:a,instancePath:o?`/${o}`:"",schemaPath:n?`#${n}`:"#",params:null!=i?i:{value:e.message},message:null!=r?r:e.message}}))}}const ae=new class oe{constructor(){this._validator=ne.factory()}validateJSONSchema(e,t,r){return this._validator.validate(e,t,r)}validate(e,t,r={silent:!1}){var s,i;const n=T(e);if(!Array.isArray(n.items)||0!==(null===(s=n.items)||void 0===s?void 0:s.length)||0!==t.length){if(Array.isArray(n.items)&&0===(null===(i=n.items)||void 0===i?void 0:i.length)&&0!==t.length)throw new m([{instancePath:"/0",schemaPath:"/",keyword:"required",message:"empty schema against data can not be validated",params:t}]);return this._validator.validate(n,t,r)}}};export{K as A,te as B,re as C,E as D,ee as E,T as F,m as W,q as a,Q as b,g as c,v as d,h as e,d as f,ae as g,W as h,X as i,H as j,G as k,L as l,P as m,B as n,O as o,b as p,M as q,J as r,F as s,j as t,N as u,A as v,C as w,Z as x,V as y,Y as z};
