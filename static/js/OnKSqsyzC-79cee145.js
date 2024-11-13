import{i as t}from"./1ZN-b5cf335c.js";import{q as e,r as n,m as s,j as o,i as c,b as a,t as r,g as i,v as u,w as f}from"./MTjLW-5c6a4a30.js";import{i as p,w as l,J as h,n as d,c as y}from"./aCphg9D0-5c2f28d9.js";
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let b;const v=t=>b=t,_=Symbol();function j(t){return t&&"object"==typeof t&&"[object Object]"===Object.prototype.toString.call(t)&&"function"!=typeof t.toJSON}var m,g;function O(){const o=e(!0),c=o.run((()=>n({})));let a=[],r=[];const i=s({install(t){v(i),i._a=t,t.provide(_,i),t.config.globalProperties.$pinia=i,r.forEach((t=>a.push(t))),r=[]},use(e){return this._a||t?a.push(e):r.push(e),this},_p:a,_a:null,_e:o,_s:new Map,state:c});return i}(g=m||(m={})).direct="direct",g.patchObject="patch object",g.patchFunction="patch function";const $=()=>{};function w(t,e,n,s=$){t.push(e);const o=()=>{const n=t.indexOf(e);n>-1&&(t.splice(n,1),s())};return!n&&i()&&u(o),o}function P(t,...e){t.slice().forEach((t=>{t(...e)}))}const S=t=>t();function E(t,e){t instanceof Map&&e instanceof Map&&e.forEach(((e,n)=>t.set(n,e))),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],o=t[n];j(o)&&j(s)&&t.hasOwnProperty(n)&&!c(s)&&!a(s)?t[n]=E(o,s):t[n]=s}return t}const M=Symbol();const{assign:x}=Object;function I(t,s,i={},u,f,p){let h;const y=x({actions:{}},i),b={deep:!0};let _,g,O,I=[],A=[];const C=u.state.value[t];let F;function J(e){let n;_=g=!1,"function"==typeof e?(e(u.state.value[t]),n={type:m.patchFunction,storeId:t,events:O}):(E(u.state.value[t],e),n={type:m.patchObject,payload:e,storeId:t,events:O});const s=F=Symbol();d().then((()=>{F===s&&(_=!0)})),g=!0,P(I,n,u.state.value[t])}p||C||(u.state.value[t]={}),n({});const N=p?function(){const{state:t}=i,e=t?t():{};this.$patch((t=>{x(t,e)}))}:$;function W(e,n){return function(){v(u);const s=Array.from(arguments),o=[],c=[];let a;P(A,{args:s,name:e,store:q,after:function(t){o.push(t)},onError:function(t){c.push(t)}});try{a=n.apply(this&&this.$id===t?this:q,s)}catch(r){throw P(c,r),r}return a instanceof Promise?a.then((t=>(P(o,t),t))).catch((t=>(P(c,t),Promise.reject(t)))):(P(o,a),a)}}const k={_p:u,$id:t,$onAction:w.bind(null,A),$patch:J,$reset:N,$subscribe(e,n={}){const s=w(I,e,n.detached,(()=>o())),o=h.run((()=>l((()=>u.state.value[t]),(s=>{("sync"===n.flush?g:_)&&e({storeId:t,type:m.direct,events:O},s)}),x({},b,n))));return s},$dispose:function(){h.stop(),I=[],A=[],u._s.delete(t)}},q=o(k);u._s.set(t,q);const D=(u._a&&u._a.runWithContext||S)((()=>u._e.run((()=>(h=e()).run(s)))));for(const e in D){const n=D[e];if(c(n)&&(!c(T=n)||!T.effect)||a(n))p||(!C||j(L=n)&&L.hasOwnProperty(M)||(c(n)?n.value=C[e]:E(n,C[e])),u.state.value[t][e]=n);else if("function"==typeof n){const t=W(e,n);D[e]=t,y.actions[e]=n}}var L,T;return x(q,D),x(r(q),D),Object.defineProperty(q,"$state",{get:()=>u.state.value[t],set:t=>{J((e=>{x(e,t)}))}}),u._p.forEach((t=>{x(q,h.run((()=>t({store:q,app:u._a,pinia:u,options:y}))))})),C&&p&&i.hydrate&&i.hydrate(q.$state,C),_=!0,g=!0,q}function A(t,e,n){let o,c;const a="function"==typeof e;function r(t,n){const r=h();(t=t||(r?p(_,null):null))&&v(t),(t=b)._s.has(o)||(a?I(o,e,c,t):function(t,e,n,o){const{state:c,actions:a,getters:r}=e,i=n.state.value[t];let u;u=I(t,(function(){i||(n.state.value[t]=c?c():{});const e=f(n.state.value[t]);return x(e,a,Object.keys(r||{}).reduce(((e,o)=>(e[o]=s(y((()=>{v(n);const e=n._s.get(t);return r[o].call(e,e)}))),e)),{}))}),e,n,0,!0)}(o,c,t));return t._s.get(o)}return"string"==typeof t?(o=t,c=a?n:e):(c=t,o=t.id),r.$id=o,r}export{O as c,A as d};
