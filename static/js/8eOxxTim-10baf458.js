import{m as n}from"./86X-980cfc3a.js";const t=/\s*,(?![^(]*\))\s*/g,e=/\s+/g;function r(n){let r=[""];return n.forEach((n=>{(n=n&&n.trim())&&(r=n.includes("&")?function(n,e){const r=[];return e.split(t).forEach((t=>{let e=function(n){let t=0;for(let e=0;e<n.length;++e)"&"===n[e]&&++t;return t}(t);if(!e)return void n.forEach((n=>{r.push((n&&n+" ")+t)}));if(1===e)return void n.forEach((n=>{r.push(t.replace("&",n))}));let o=[t];for(;e--;){const t=[];o.forEach((e=>{n.forEach((n=>{t.push(e.replace("&",n))}))})),o=t}o.forEach((n=>r.push(n)))})),r}(r,n):function(n,e){const r=[];return e.split(t).forEach((t=>{n.forEach((n=>{r.push((n&&n+" ")+t)}))})),r}(r,n))})),r.join(", ").replace(e," ")}function o(n){if(!n)return;const t=n.parentElement;t&&t.removeChild(n)}function s(n,t){return(null!=t?t:document.head).querySelector(`style[cssr-id="${n}"]`)}function c(n){return!!n&&/^\s*@(s|m)/.test(n)}const i=/[A-Z]/g;function u(n){return n.replace(i,(n=>"-"+n.toLowerCase()))}function f(n,t,e,r){if(!t)return"";const o=function(n,t,e){return"function"==typeof n?n({context:t.context,props:e}):n}(t,e,r);if(!o)return"";if("string"==typeof o)return`${n} {\n${o}\n}`;const s=Object.keys(o);if(0===s.length)return e.config.keepEmptyBlock?n+" {\n}":"";const c=n?[n+" {"]:[];return s.forEach((n=>{const t=o[n];"raw"!==n?(n=u(n),null!=t&&c.push(`  ${n}${function(n,t="  "){return"object"==typeof n&&null!==n?" {\n"+Object.entries(n).map((n=>t+`  ${u(n[0])}: ${n[1]};`)).join("\n")+"\n"+t+"}":`: ${n};`}(t)}`)):c.push("\n"+t+"\n")})),n&&c.push("}"),c.join("\n")}function l(n,t,e){n&&n.forEach((n=>{if(Array.isArray(n))l(n,t,e);else if("function"==typeof n){const r=n(t);Array.isArray(r)?l(r,t,e):r&&e(r)}else n&&e(n)}))}function p(n,t,e,o,s){const i=n.$;let u="";if(i&&"string"!=typeof i)if("function"==typeof i){const n=i({context:o.context,props:s});c(n)?u=n:t.push(n)}else if(i.before&&i.before(o.context),i.$&&"string"!=typeof i.$){if(i.$){const n=i.$({context:o.context,props:s});c(n)?u=n:t.push(n)}}else c(i.$)?u=i.$:t.push(i.$);else c(i)?u=i:t.push(i);const a=r(t),h=f(a,n.props,o,s);u?e.push(`${u} {`):h.length&&e.push(h),n.children&&l(n.children,{context:o.context,props:s},(n=>{if("string"==typeof n){const t=f(a,{raw:n},o,s);e.push(t)}else p(n,t,e,o,s)})),t.pop(),u&&e.push("}"),i&&i.after&&i.after(o.context)}function a(n,t){n.push(t)}function h(t,e,r,o,c,i,u,f,l){let p;if(void 0===r&&(p=e.render(o),r=n(p)),l)return void l.adapter(r,null!=p?p:e.render(o));void 0===f&&(f=document.head);const h=s(r,f);if(null!==h&&!i)return h;const d=null!=h?h:function(n){const t=document.createElement("style");return t.setAttribute("cssr-id",n),t}(r);if(void 0===p&&(p=e.render(o)),d.textContent=p,null!==h)return h;if(u){const n=f.querySelector(`meta[name="${u}"]`);if(n)return f.insertBefore(d,n),a(e.els,d),d}return c?f.insertBefore(d,f.querySelector("style, link")):f.appendChild(d),a(e.els,d),d}function d(n){return function(n,t,e){const r=[];return p(n,[],r,t,e),r.join("\n\n")}(this,this.instance,n)}function y(n={}){const{id:t,ssr:e,props:r,head:o=!1,force:s=!1,anchorMetaName:c,parent:i}=n;return h(this.instance,this,t,r,o,s,c,i,e)}function $(n={}){const{id:t,parent:e}=n;!function(n,t,e,r){const{els:c}=t;if(void 0===e)c.forEach(o),t.els=[];else{const n=s(e,r);n&&c.includes(n)&&(o(n),t.els=c.filter((t=>t!==n)))}}(this.instance,this,t,e)}"undefined"!=typeof window&&(window.__cssrContext={});const m=function(n,t,e,r){return{instance:n,$:t,props:e,children:r,els:[],render:d,mount:y,unmount:$}};function x(n={}){const t={c:(...n)=>function(n,t,e,r){return Array.isArray(t)?m(n,{$:null},null,t):Array.isArray(e)?m(n,t,null,e):Array.isArray(r)?m(n,t,e,r):m(n,t,e,null)}(t,...n),use:(n,...e)=>n.install(t,...e),find:s,context:{},config:n};return t}function E(n,t){if(void 0===n)return!1;if(t){const{context:{ids:e}}=t;return e.has(n)}return null!==s(n)}export{x as C,E as e};
