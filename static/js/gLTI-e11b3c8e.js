import{A as e,e as t}from"./SEUQg8l-59acaf37.js";import{i as n,s as r,k as o,l as i,p as s,m as a,n as u,o as c,u as p,q as d,r as l,t as m}from"./7EFE2hPGZ-42e07982.js";import{i as y,h as f,u as h,a as g}from"./uyPFz46w-c24024d6.js";import"./Behr-b8c04985.js";import{p as v}from"./ptI30i5o5p-7da81808.js";const b=e=>!n(e)&&"object"==typeof e&&!n(e.type)&&"error"===e.type,w=e=>!n(e)&&"object"==typeof e&&!n(e.type)&&"event"===e.type,j=e=>!n(e)&&"object"==typeof e&&!n(e.type)&&"function"===e.type,x=e=>!n(e)&&"object"==typeof e&&!n(e.type)&&"constructor"===e.type,I=e=>"object"==typeof e&&void 0===e.components&&void 0===e.name,_=e=>e.includes("[]")?{type:"tuple[]",name:e.slice(0,-2)}:{type:"tuple",name:e},A=e=>{const t=[];for(const n of Object.keys(e)){const r=e[n];"object"==typeof r?t.push(Object.assign(Object.assign({},_(n)),{components:A(r)})):t.push({name:n,type:e[n]})}return t},B=(t,n)=>{const r=[];return n.forEach((n=>{if("object"==typeof n.components){if(!n.type.startsWith("tuple"))throw new e(`Invalid value given "${n.type}". Error: components found but type is not tuple.`);const o=n.type.indexOf("["),i=o>=0?n.type.substring(o):"",s=B(t,n.components);Array.isArray(s)&&t?r.push(`tuple(${s.join(",")})${i}`):t?r.push(`(${s.join()})`):r.push(`(${s.join(",")})${i}`)}else r.push(n.type)})),r},O=e=>{var t,n,r,o;return b(e)||w(e)||j(e)?(null===(t=e.name)||void 0===t?void 0:t.includes("("))?e.name:`${null!==(n=e.name)&&void 0!==n?n:""}(${B(!1,null!==(r=e.inputs)&&void 0!==r?r:[]).join(",")})`:`(${B(!1,null!==(o=e.inputs)&&void 0!==o?o:[]).join(",")})`},$=t=>{if("string"!=typeof t&&!w(t))throw new e("Invalid parameter value in encodeEventSignature");let n;return n=!t||"function"!=typeof t&&"object"!=typeof t?t:O(t),r(n)},N=32;function W(e=0){var t;if(void 0!==(null===(t=globalThis.Buffer)||void 0===t?void 0:t.alloc)){const t=globalThis.Buffer.alloc(e);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}return new Uint8Array(e)}function S(e){var t,n;return Object.assign(Object.assign({},e),{name:null!==(t=e.name)&&void 0!==t?t:"",components:null===(n=e.components)||void 0===n?void 0:n.map((e=>S(e)))})}function E(t){return t.map((t=>{var r,o;if(!n(o=t)&&"object"==typeof o&&!n(o.type)&&"string"==typeof o.type)return t;if("string"==typeof t)return S(v(t.replace(/tuple/,"")));if(I(t)){const e=Object.keys(t)[0],n=_(e);return n.name=null!==(r=n.name)&&void 0!==r?r:"",Object.assign(Object.assign({},n),{components:A(t[e])})}throw new e("Invalid abi")}))}function z(t){const n=t.type.lastIndexOf("["),r=t.type.substring(0,n),o=t.type.substring(n);let i=-1;if("[]"!==o&&(i=Number(o.slice(1,-1)),isNaN(i)))throw new e("Invalid fixed array size",{size:o});return{param:{type:r,name:"",components:t.components},size:i}}function k(e){var t,n;return!("string"!==e.type&&"bytes"!==e.type&&!e.type.endsWith("[]"))||("tuple"===e.type?null!==(n=null===(t=e.components)||void 0===t?void 0:t.some(k))&&void 0!==n&&n:!!e.type.endsWith("]")&&k(z(e).param))}const L=20,U=N-L;const F=new Map;let P=BigInt(256);for(let ce=8;ce<=256;ce+=8)F.set(`uint${ce}`,{min:BigInt(0),max:P-BigInt(1)}),F.set(`int${ce}`,{min:-P/BigInt(2),max:P/BigInt(2)-BigInt(1)}),P*=BigInt(256);F.set("int",F.get("int256")),F.set("uint",F.get("uint256"));const q=BigInt(1)<<BigInt(256);function C(e,t=N){let n;return n=e<0?(q+e).toString(16):e.toString(16),n=s(n,2*t),f(n)}function G(t,n){let r;try{r=i(n)}catch(s){throw new e("provided input is not number value",{type:t.type,value:n,name:t.name})}const o=F.get(t.type);if(!o)throw new e("provided abi contains invalid number datatype",{type:t.type});if(r<o.min)throw new e("provided input is less then minimum for given type",{type:t.type,value:n,name:t.name,minimum:o.min.toString()});if(r>o.max)throw new e("provided input is greater then maximum for given type",{type:t.type,value:n,name:t.name,maximum:o.max.toString()});return{dynamic:!1,encoded:C(r)}}function M(t,n){if(n.length<N)throw new e("Not enough bytes left to decode",{param:t,bytesLeft:n.length});const r=n.subarray(0,N),o=F.get(t.type);if(!o)throw new e("provided abi contains invalid number datatype",{type:t.type});const i=function(e,t){const n=h(e),r=BigInt(n);return r<=t?r:r-q}(r,o.max);if(i<o.min)throw new e("decoded value is less then minimum for given type",{type:t.type,value:i,name:t.name,minimum:o.min.toString()});if(i>o.max)throw new e("decoded value is greater then maximum for given type",{type:t.type,value:i,name:t.name,maximum:o.max.toString()});return{result:i,encoded:n.subarray(N),consumed:N}}const R=32;function T(t,n){if("string"==typeof n&&n.length%2!=0&&(n+="0"),!g(n))throw new e("provided input is not valid bytes value",{type:t.type,value:n,name:t.name});const r=u(n),[,o]=t.type.split("bytes");if(o){if(Number(o)>R||Number(o)<1)throw new e("invalid bytes type. Static byte type can have between 1 and 32 bytes",{type:t.type});if(Number(o)<r.length)throw new e("provided input size is different than type size",{type:t.type,value:n,name:t.name});const i=W(N);return i.set(r),{dynamic:!1,encoded:i}}const i=Math.ceil(r.length/N),s=W(N+i*N);return s.set(G({type:"uint32",name:""},r.length).encoded),s.set(r,N),{dynamic:!0,encoded:s}}function D(t,n){const[,r]=t.type.split("bytes");let o=Number(r),i=n,s=1,a=0;if(!o){const e=M({type:"uint32",name:""},i);o=Number(e.result),a+=e.consumed,i=e.encoded,s=Math.ceil(o/N)}if(o>n.length)throw new e("there is not enough data to decode",{type:t.type,encoded:n,size:o});return{result:c(i.subarray(0,o)),encoded:i.subarray(s*N),consumed:a+s*N}}function Q(e){let t=0,n=0;const r=[],o=[];for(const i of e)i.dynamic?t+=N:t+=i.encoded.length;for(const i of e)i.dynamic?(r.push(G({type:"uint256",name:""},t+n)),o.push(i),n+=i.encoded.length):r.push(i);return l(...r.map((e=>e.encoded)),...o.map((e=>e.encoded)))}function X(n,r){if("string"===n.type)return function(t,n){if("string"!=typeof n)throw new e("invalid input, should be string",{input:n});return T({type:"bytes",name:""},p(n))}(0,r);if("bool"===n.type)return function(n,r){let o;try{o=a(r)}catch(i){if(i instanceof t)throw new e("provided input is not valid boolean value",{type:n.type,value:r,name:n.name})}return G({type:"uint8",name:""},Number(o))}(n,r);if("address"===n.type)return function(t,n){if("string"!=typeof n)throw new e("address type expects string as input type",{value:n,name:t.name,type:t.type});let r=n.toLowerCase();if(r.startsWith("0x")||(r=`0x${r}`),!y(r))throw new e("provided input is not valid address",{value:n,name:t.name,type:t.type});const o=f(r),i=W(N);return i.set(o,U),{dynamic:!1,encoded:i}}(n,r);if("tuple"===n.type)return Z(n,r);if(n.type.endsWith("]"))return function(t,n){if(!Array.isArray(n))throw new e("Expected value to be array",{abi:t,values:n});const{size:r,param:o}=z(t),i=n.map((e=>X(o,e))),s=-1===r,a=i.length>0&&i[0].dynamic;if(!s&&n.length!==r)throw new e("Given arguments count doesn't match array length",{arrayLength:r,argumentsLength:n.length});if(s||a){const e=Q(i);if(s){const t=G({type:"uint256",name:""},i.length).encoded;return{dynamic:!0,encoded:i.length>0?l(t,e):t}}return{dynamic:!0,encoded:e}}return{dynamic:!1,encoded:l(...i.map((e=>e.encoded)))}}(n,r);if(n.type.startsWith("bytes"))return T(n,r);if(n.type.startsWith("uint")||n.type.startsWith("int"))return G(n,r);throw new e("Unsupported",{param:n,value:r})}function Y(t,n){if("string"===t.type)return function(e,t){const n=D({type:"bytes",name:""},t);return{result:d(n.result),encoded:n.encoded,consumed:n.consumed}}(0,n);if("bool"===t.type)return function(t,n){const r=M({type:"uint8",name:""},n);if(r.result>1||r.result<0)throw new e("Invalid boolean value encoded",{boolBytes:n.subarray(0,N),numberResult:r});return{result:r.result===BigInt(1),encoded:r.encoded,consumed:N}}(0,n);if("address"===t.type)return function(t,n){const r=n.subarray(U,N);if(r.length!==L)throw new e("Invalid decoding input, not enough bytes to decode address",{bytes:n});const i=h(r);return{result:o(i),encoded:n.subarray(N),consumed:N}}(0,n);if("tuple"===t.type)return H(t,n);if(t.type.endsWith("]"))return function(e,t){let{size:n,param:r}=z(e),o=0;const i=[];let s=t;if(-1===n){const e=M({type:"uint32",name:""},t);n=Number(e.result),o=e.consumed,s=e.encoded}if(k(r)){for(let e=0;e<n;e+=1){const t=M({type:"uint32",name:""},s.subarray(e*N));o+=t.consumed;const n=Y(r,s.subarray(Number(t.result)));o+=n.consumed,i.push(n.result)}return{result:i,encoded:s.subarray(o),consumed:o}}for(let a=0;a<n;a+=1){const e=Y(r,t.subarray(o));o+=e.consumed,i.push(e.result)}return{result:i,encoded:t.subarray(o),consumed:o}}(t,n);if(t.type.startsWith("bytes"))return D(t,n);if(t.type.startsWith("uint")||t.type.startsWith("int"))return M(t,n);throw new e("Unsupported",{param:t,bytes:n})}function Z(t,n){var r,o,i;let s=!1;if(!Array.isArray(n)&&"object"!=typeof n)throw new e("param must be either Array or Object",{param:t,input:n});const a=n,u=[];for(let c=0;c<(null!==(o=null===(r=t.components)||void 0===r?void 0:r.length)&&void 0!==o?o:0);c+=1){const r=t.components[c];let o;if(Array.isArray(a)){if(c>=a.length)throw new e("input param length missmatch",{param:t,input:n});o=X(r,a[c])}else{const s=a[null!==(i=r.name)&&void 0!==i?i:""];if(null==s)throw new e("missing input defined in abi",{param:t,input:n,paramName:r.name});o=X(r,s)}o.dynamic&&(s=!0),u.push(o)}return s?{dynamic:!0,encoded:Q(u)}:{dynamic:!1,encoded:l(...u.map((e=>e.encoded)))}}function H(e,t){const n={__length__:0};let r=0;if(!e.components)return{result:n,encoded:t,consumed:r};let o=0;for(const[i,s]of e.components.entries()){let e;if(k(s)){const n=M({type:"uint32",name:""},t.subarray(r));e=Y(s,t.subarray(Number(n.result))),r+=n.consumed,o+=e.consumed}else e=Y(s,t.subarray(r)),r+=e.consumed;n.__length__+=1,n[i]=e.result,s.name&&""!==s.name&&(n[s.name]=e.result)}return{encoded:t.subarray(r+o),result:n,consumed:r+o}}function J(e){const t=[];return e.forEach((e=>{if(Array.isArray(e)){const n=J(e);t.push({type:"tuple",components:n,name:""})}else t.push({type:m(e,!0)})})),t}function K(t,n){if((null==t?void 0:t.length)!==n.length)throw new e("Invalid number of values received for given ABI",{expected:null==t?void 0:t.length,received:n.length});const r=E(t);return h(Z({type:"tuple",name:"",components:r},n).encoded)}function V(t){try{const e=J(t);return h(Z({type:"tuple",name:"",components:e},t).encoded)}catch(n){throw new e("Could not infer types from given params",{params:t})}}const ee=(e,t)=>K([e],[t]),te=(t,n,r)=>{try{if(t.length>0&&(!n||"0x"===n||"0X"===n))throw new e("Returned values aren't valid, did it run Out of Gas? You might also see this error if you are not using the correct ABI for the contract you are retrieving data from, requesting data from a block number that does not exist, or querying a node which is not fully synced.");return function(e,t,n){return H({type:"tuple",name:"",components:E(e)},f(t)).result}(t,`0x${n.replace(/0x/i,"")}`)}catch(o){throw new e(`Parameter decoding error: ${o.message}`,{internalErr:o})}},ne=(e,t)=>te(e,t),re=(e,t)=>ne([e],t)[0],oe=t=>{if("string"!=typeof t&&!j(t))throw new e("Invalid parameter value in encodeFunctionSignature");let n;return n=!t||"function"!=typeof t&&"object"!=typeof t?t:O(t),r(n).slice(0,10)},ie=(t,n)=>{var r;if(!j(t))throw new e("Invalid parameter value in encodeFunctionCall");return`${oe(t)}${K(null!==(r=t.inputs)&&void 0!==r?r:[],null!=n?n:[]).replace("0x","")}`},se=["bool","string","int","uint","address","fixed","ufixed"],ae=(e,t,n)=>{const r=Array.isArray(n)?n:[n],o={},i={};for(const[l,m]of e.entries())m.indexed?o[l]=m:i[l]=m;const s=t?te(Object.values(i),t):{__length__:0},a=r.length-Object.keys(o).length,u=Object.values(o).map(((e,t)=>{return se.some((t=>e.type.startsWith(t)))?(n=e.type,o=r[t+a],"string"===n?o:re(n,o)):r[t+a];var n,o})),c={__length__:0};let p=0,d=0;for(const[l,m]of e.entries())c[l]="string"===m.type?"":void 0,o[l]&&(c[l]=u[p],p+=1),i[l]&&(c[l]=s[String(d)],d+=1),m.name&&(c[m.name]=c[l]),c.__length__+=1;return c},ue=(t,n)=>{if(null==n?void 0:n.data){let i,s,a;try{const o=n.data.slice(0,10),u=t.find((t=>(t=>{if("string"!=typeof t&&!b(t))throw new e("Invalid parameter value in encodeErrorSignature");let n;return n=!t||"function"!=typeof t&&"object"!=typeof t?t:O(t),r(n)})(t).startsWith(o)));(null==u?void 0:u.inputs)&&(i=u.name,s=O(u),a=ne([...u.inputs],n.data.substring(10)))}catch(o){}i&&n.setDecodedProperties(i,s,a)}};export{ee as a,K as b,x as c,oe as d,$ as e,ne as f,b as g,j as h,V as i,O as j,w as k,ue as l,ae as m,ie as n,re as o};
