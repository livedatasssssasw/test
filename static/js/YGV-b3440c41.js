var e=Object.defineProperty,t=(t,r,s)=>(((t,r,s)=>{r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[r]=s})(t,"symbol"!=typeof r?r+"":r,s),s);import{b as r}from"./7LMjArUqW7-a6b8f67d.js";import{d as s,c as a}from"./OnKSqsyzC-79cee145.js";import{c as o,N as n,a as i,b as c,d as p,e as l,f as m,g as d,h as u,i as f,j as h,k as g,l as v,m as y,n as w,o as b,p as j,q as _,r as I,s as E,t as S,u as k,v as O,w as L,x as P,y as C,z as T,A,B as D,C as N,D as R,E as U,F as W,G as q,H as J,I as $,J as M,K as V,L as x,M as B,O as z,P as H,Q as K,R as Q,S as Z,T as F,U as G,V as X,W as Y,X as ee,Y as te,Z as re,_ as se,$ as ae,a0 as oe,a1 as ne,a2 as ie,a3 as ce,a4 as pe,a5 as le,a6 as me,a7 as de,a8 as ue,a9 as fe,aa as he,ab as ge}from"./knZ9-08122e06.js";import{c as ve,a as ye,u as we,R as be}from"./l6WDfKIv-eb5036d6.js";import{C as je}from"./Ts6TQCK5-082e119e.js";import{j as _e,u as Ie,r as Ee}from"./MTjLW-5c6a4a30.js";import{w as Se,v as ke,b as Oe,L as Le,M as Pe,N as Ce,O as Te,l as Ae,P as De}from"./aCphg9D0-5c2f28d9.js";import{a as Ne}from"./2Mfhl1-170faa9c.js";import{s as Re}from"./5jZQpji-626bbba0.js";/* empty css           */import{d as Ue,r as We}from"./EfEyvBdf-fb1e654e.js";/* empty css                  */import"./OgAd-e7f67152.js";import"./1ZN-b5cf335c.js";import"./y-c687e8db.js";import"./cc-01735fc4.js";import"./8x9-afba2b82.js";import"./wNbWQ27j-5b63dd0a.js";import"./Ov-a29912a6.js";import"./UTUEwhQ-5e30d4aa.js";import"./f-48d75ff5.js";import"./QlGz-2ac998c8.js";import"./LAFWGvZiF-4d1448ee.js";import"./8r2ETjd-fa473eaa.js";import"./W1-074db8ea.js";import"./MKKqx-89fffac8.js";import"./cv-7e6bf156.js";import"./IYfy3bzqW-6ecf5852.js";import"./Xgo3z-b1ec0d93.js";import"./2EITn9sE-33c1b92a.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const qe=o({components:[n,i,c,p,l,m,d,u,f,h,g,v,y,w,b,j,_,I,E,S,k,O,L,P,C,T,A,D,N,R,U,W,q,J,$,M,V,x,B,z,H,K,Q,Z,F,G,X,Y,ee,te,re,se,ae,oe,ne,ie,ce,pe,le,me,de,ue]});const Je={common:{primaryColor:"#5896f5",primaryColorHover:"#1976d2",borderRadius:"6px"},Button:{},Layout:{siderColor:"#e5e5e5"},Card:{colorModal:"var(--im--theme-CGModalBg)"},Drawer:{color:"var(--color-background)"},Upload:{itemDisabledOpacity:"1"},Dropdown:{},Select:{optionTextColorHover:"white"},Input:{borderHover:"#1976d2"}};var $e=0;function Me(e){return function(e){for(var t,r=$e?"0123456789ABCDEF":"0123456789abcdef",s="",a=0;a<e.length;a++)t=e.charCodeAt(a),s+=r.charAt(t>>>4&15)+r.charAt(15&t);return s}(function(e){return function(e){for(var t="",r=0;r<32*e.length;r+=8)t+=String.fromCharCode(e[r>>5]>>>r%32&255);return t}(function(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;for(var r=1732584193,s=-271733879,a=-1732584194,o=271733878,n=0;n<e.length;n+=16){var i=r,c=s,p=a,l=o;r=xe(r,s,a,o,e[n+0],7,-680876936),o=xe(o,r,s,a,e[n+1],12,-389564586),a=xe(a,o,r,s,e[n+2],17,606105819),s=xe(s,a,o,r,e[n+3],22,-1044525330),r=xe(r,s,a,o,e[n+4],7,-176418897),o=xe(o,r,s,a,e[n+5],12,1200080426),a=xe(a,o,r,s,e[n+6],17,-1473231341),s=xe(s,a,o,r,e[n+7],22,-45705983),r=xe(r,s,a,o,e[n+8],7,1770035416),o=xe(o,r,s,a,e[n+9],12,-1958414417),a=xe(a,o,r,s,e[n+10],17,-42063),s=xe(s,a,o,r,e[n+11],22,-1990404162),r=xe(r,s,a,o,e[n+12],7,1804603682),o=xe(o,r,s,a,e[n+13],12,-40341101),a=xe(a,o,r,s,e[n+14],17,-1502002290),r=Be(r,s=xe(s,a,o,r,e[n+15],22,1236535329),a,o,e[n+1],5,-165796510),o=Be(o,r,s,a,e[n+6],9,-1069501632),a=Be(a,o,r,s,e[n+11],14,643717713),s=Be(s,a,o,r,e[n+0],20,-373897302),r=Be(r,s,a,o,e[n+5],5,-701558691),o=Be(o,r,s,a,e[n+10],9,38016083),a=Be(a,o,r,s,e[n+15],14,-660478335),s=Be(s,a,o,r,e[n+4],20,-405537848),r=Be(r,s,a,o,e[n+9],5,568446438),o=Be(o,r,s,a,e[n+14],9,-1019803690),a=Be(a,o,r,s,e[n+3],14,-187363961),s=Be(s,a,o,r,e[n+8],20,1163531501),r=Be(r,s,a,o,e[n+13],5,-1444681467),o=Be(o,r,s,a,e[n+2],9,-51403784),a=Be(a,o,r,s,e[n+7],14,1735328473),r=ze(r,s=Be(s,a,o,r,e[n+12],20,-1926607734),a,o,e[n+5],4,-378558),o=ze(o,r,s,a,e[n+8],11,-2022574463),a=ze(a,o,r,s,e[n+11],16,1839030562),s=ze(s,a,o,r,e[n+14],23,-35309556),r=ze(r,s,a,o,e[n+1],4,-1530992060),o=ze(o,r,s,a,e[n+4],11,1272893353),a=ze(a,o,r,s,e[n+7],16,-155497632),s=ze(s,a,o,r,e[n+10],23,-1094730640),r=ze(r,s,a,o,e[n+13],4,681279174),o=ze(o,r,s,a,e[n+0],11,-358537222),a=ze(a,o,r,s,e[n+3],16,-722521979),s=ze(s,a,o,r,e[n+6],23,76029189),r=ze(r,s,a,o,e[n+9],4,-640364487),o=ze(o,r,s,a,e[n+12],11,-421815835),a=ze(a,o,r,s,e[n+15],16,530742520),r=He(r,s=ze(s,a,o,r,e[n+2],23,-995338651),a,o,e[n+0],6,-198630844),o=He(o,r,s,a,e[n+7],10,1126891415),a=He(a,o,r,s,e[n+14],15,-1416354905),s=He(s,a,o,r,e[n+5],21,-57434055),r=He(r,s,a,o,e[n+12],6,1700485571),o=He(o,r,s,a,e[n+3],10,-1894986606),a=He(a,o,r,s,e[n+10],15,-1051523),s=He(s,a,o,r,e[n+1],21,-2054922799),r=He(r,s,a,o,e[n+8],6,1873313359),o=He(o,r,s,a,e[n+15],10,-30611744),a=He(a,o,r,s,e[n+6],15,-1560198380),s=He(s,a,o,r,e[n+13],21,1309151649),r=He(r,s,a,o,e[n+4],6,-145523070),o=He(o,r,s,a,e[n+11],10,-1120210379),a=He(a,o,r,s,e[n+2],15,718787259),s=He(s,a,o,r,e[n+9],21,-343485551),r=Ke(r,i),s=Ke(s,c),a=Ke(a,p),o=Ke(o,l)}return Array(r,s,a,o)}(function(e){for(var t=Array(e.length>>2),r=0;r<t.length;r++)t[r]=0;for(r=0;r<8*e.length;r+=8)t[r>>5]|=(255&e.charCodeAt(r/8))<<r%32;return t}(e),8*e.length))}(function(e){var t,r,s="",a=-1;for(;++a<e.length;)t=e.charCodeAt(a),r=a+1<e.length?e.charCodeAt(a+1):0,55296<=t&&t<=56319&&56320<=r&&r<=57343&&(t=65536+((1023&t)<<10)+(1023&r),a++),t<=127?s+=String.fromCharCode(t):t<=2047?s+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?s+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(s+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return s}(e)))}function Ve(e,t,r,s,a,o){return Ke((n=Ke(Ke(t,e),Ke(s,o)))<<(i=a)|n>>>32-i,r);var n,i}function xe(e,t,r,s,a,o,n){return Ve(t&r|~t&s,e,t,a,o,n)}function Be(e,t,r,s,a,o,n){return Ve(t&s|r&~s,e,t,a,o,n)}function ze(e,t,r,s,a,o,n){return Ve(t^r^s,e,t,a,o,n)}function He(e,t,r,s,a,o,n){return Ve(r^(t|~s),e,t,a,o,n)}function Ke(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}const Qe=e=>{if("string"==typeof e)try{var t=JSON.parse(e);return!("object"!=typeof t||!t)}catch(r){return!1}return!1},Ze=e=>"false"==e||"true"==e,Fe=e=>{const t=Object.keys(e).sort();let r={};t.map((t=>{r[t]=e[t]}));const s=[];for(var a in r)r.hasOwnProperty(a)&&s.push(encodeURIComponent(a)+"="+encodeURIComponent(r[a]));r=s.join("&"),Me(r).toUpperCase();const o=je.enc.Utf8.parse("J1^P^)1-ZriSi29g"),n=je.enc.Utf8.parse("B2jKhk3J42(@mM++");return{data:je.AES.encrypt(JSON.stringify(e),o,{mode:je.mode.CBC,padding:je.pad.Pkcs7,iv:n}).toString(),k:o}},Ge=_e({pageWidth:document.documentElement.clientWidth,pageHeight:document.documentElement.clientHeight,routerBlackPath:["order","confirm"],walletLinkURL:"",agentId:"",payAmount:0,configData:{}});Object.keys(Ge).forEach((e=>{if(localStorage.getItem(e)){const t=localStorage.getItem(e);if(Qe(t))return Ge[e]=JSON.parse(t);if(Ze(t))return Ge[e]=JSON.parse(t);Ge[e]=t}else"object"==typeof Ge[e]?localStorage.setItem(e,JSON.stringify(Ge[e])):localStorage.setItem(e,Ge[e])})),Se(Ge,((e,t,r)=>{Object.entries(e).forEach((e=>{let t=e[0];e[1],"object"==typeof Ge[t]?localStorage.setItem(t,JSON.stringify(Ge[t])):localStorage.setItem(t,Ge[t])}))}),{deep:!0});const Xe=s({id:"comm",state:()=>Ge,getters:{},actions:{setWindowSize(e){this.pageWidth=e.width,this.pageHeight=e.height},setWalletLinkURL(e){this.walletLinkURL=e},setAgentId(e){this.agentId=e},setPayAmount(e){this.payAmount=e},setConfigData(e){this.configData=e}}});fe();let Ye="https://api.tronoss.work/api";Ye="https://api.tronoss.work/api";const et={},tt=function(e,t,r){if(!t||0===t.length)return e();const s=document.getElementsByTagName("link");return Promise.all(t.map((e=>{if((e=function(e){return"/test/"+e}(e))in et)return;et[e]=!0;const t=e.endsWith(".css"),a=t?'[rel="stylesheet"]':"";if(!!r)for(let r=s.length-1;r>=0;r--){const a=s[r];if(a.href===e&&(!t||"stylesheet"===a.rel))return}else if(document.querySelector(`link[href="${e}"]${a}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e()))},rt=Object.assign({"../views/home/index.vue":()=>tt((()=>import("./vYB59-1d668455.js")),["static/js/vYB59-1d668455.js","static/js/1kH6Wl1-1d369848.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/css/441ry0i-a3015375.css"]),"../views/pay/bitget.vue":()=>tt((()=>import("./PW-5c2d04ae.js")),["static/js/PW-5c2d04ae.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/gSBC4zN-e6eb7954.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/bitpie.vue":()=>tt((()=>import("./r79SiaW-0d5c1fd2.js")),["static/js/r79SiaW-0d5c1fd2.js","static/js/7LMjArUqW7-a6b8f67d.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/l6WDfKIv-eb5036d6.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/WS5l5LvC-71883041.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/comm.vue":()=>tt((()=>import("./wT2iX5UQ-71032860.js")),["static/js/wT2iX5UQ-71032860.js","static/js/7LMjArUqW7-a6b8f67d.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/l6WDfKIv-eb5036d6.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/Et6KeIcnD-f7e6d735.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/imPay.vue":()=>tt((()=>import("./2F6Kh-a21e81dc.js")),["static/js/2F6Kh-a21e81dc.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/rEh2tvln9-9935319f.js","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/M-83fcf35d.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/meta.vue":()=>tt((()=>import("./bbeaPOb-b3339495.js")),["static/js/bbeaPOb-b3339495.js","static/js/7LMjArUqW7-a6b8f67d.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/l6WDfKIv-eb5036d6.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/Mzj9rDkP-bea6bee6.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/okt.vue":()=>tt((()=>import("./42d-4d6775af.js")),["static/js/42d-4d6775af.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/REeF9-e1370e13.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/tpPay.vue":()=>tt((()=>import("./SeijJu-b127141b.js")),["static/js/SeijJu-b127141b.js","static/js/7LMjArUqW7-a6b8f67d.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/l6WDfKIv-eb5036d6.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/zH-bd04d9f4.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/tronlinkPay.vue":()=>tt((()=>import("./ydS-7a0b5604.js")),["static/js/ydS-7a0b5604.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/cc-01735fc4.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/Ml16sc-ddf72d74.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/pay/trust.vue":()=>tt((()=>import("./TQ1zRuXMf-dc83a3c7.js")),["static/js/TQ1zRuXMf-dc83a3c7.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/FfUZ335-f313ebb5.js","static/js/2Mfhl1-170faa9c.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/uSLfN1e-9d003767.js","static/js/VB9hkhNp-019b681f.js","static/js/hfqw-02fd339b.js","static/js/cc-01735fc4.js","static/js/BTLFY-2ec8b3ee.js","static/js/kb7qbB-ac3ab9b0.js","static/js/tAjMY-e313960a.js","static/js/R-b7a7c4fe.js","static/js/mdUzkB4AE-494f5875.js","static/js/DIQ-ed740347.js","static/js/z-6424f8cb.js","static/js/xoLF-d1c4826e.js","static/js/L-ee54a383.js","static/js/VHmqM0-44dd577f.js","static/js/dv-4fb157f2.js","static/js/v-76d8b9cc.js","static/js/vm6O3OK-36297d7d.js","static/js/hJiA-ecfb81cd.js","static/js/TNWQ-ee68730d.js","static/js/3QqpIhRGpv-8aba8397.js","static/js/JD5Jh5-56f0f7ee.js","static/js/KVwX9K4ySf-5e15b3fe.js","static/js/ErN6Icvl-6ebde98f.js","static/js/Sf-b6194174.js","static/js/GkrUsFygAk-f5882e55.js","static/js/9DZWlQC-23059f6d.js","static/js/WoXhI4vKz-ad178ff4.js","static/js/X0y-ac9963cc.js","static/js/hVYCQi-8711b25e.js","static/js/NxOw-208238c3.js","static/js/Kd-5b447117.js","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/KA-d06f3f86.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/swap/jsal.vue":()=>tt((()=>import("./0w-e2273884.js")),["static/js/0w-e2273884.js","static/js/7LMjArUqW7-a6b8f67d.js","static/js/aCphg9D0-5c2f28d9.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/2Mfhl1-170faa9c.js","static/js/y-9a01aa97.js","static/js/l6WDfKIv-eb5036d6.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/css/2aqV-2bc9f95b.css","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/cc-01735fc4.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/BzW0jhCC-2c469a75.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/swap/swap.vue":()=>tt((()=>import("./P8BcWl8-ba09191e.js")),["static/js/P8BcWl8-ba09191e.js","static/js/kah2b-2f39df50.js","static/js/2Mfhl1-170faa9c.js","static/js/y-9a01aa97.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/cc-01735fc4.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/hpbmTuPd-1aba8e47.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"]),"../views/tyc/tyc.vue":()=>tt((()=>import("./9lQ2yLD-746d40ea.js")),["static/js/9lQ2yLD-746d40ea.js","static/js/kah2b-2f39df50.js","static/js/2Mfhl1-170faa9c.js","static/js/l6WDfKIv-eb5036d6.js","static/js/MTjLW-5c6a4a30.js","static/js/OgAd-e7f67152.js","static/js/aCphg9D0-5c2f28d9.js","static/js/y-9a01aa97.js","static/js/5jZQpji-626bbba0.js","static/js/2EITn9sE-33c1b92a.js","static/js/7LMjArUqW7-a6b8f67d.js","static/css/2aqV-2bc9f95b.css","static/js/1kH6Wl1-1d369848.js","static/js/OnKSqsyzC-79cee145.js","static/js/1ZN-b5cf335c.js","static/js/knZ9-08122e06.js","static/js/y-c687e8db.js","static/js/cc-01735fc4.js","static/js/8x9-afba2b82.js","static/js/wNbWQ27j-5b63dd0a.js","static/js/Ov-a29912a6.js","static/js/UTUEwhQ-5e30d4aa.js","static/js/f-48d75ff5.js","static/js/QlGz-2ac998c8.js","static/js/LAFWGvZiF-4d1448ee.js","static/js/8r2ETjd-fa473eaa.js","static/js/W1-074db8ea.js","static/js/MKKqx-89fffac8.js","static/js/cv-7e6bf156.js","static/js/IYfy3bzqW-6ecf5852.js","static/js/Xgo3z-b1ec0d93.js","static/js/Ts6TQCK5-082e119e.js","static/js/EfEyvBdf-fb1e654e.js","static/css/zV1BmWCr-d9e4a5ad.css","static/css/GqHeSpg69S-9d9ae4af.css","static/css/J6CnB7DLC4-73dabe84.css"])}),st=ve({history:ye("/test/"),routes:[{path:"/",name:"home",component:rt["../views/home/index.vue"],meta:{title:"Not Found"}},{path:"/tp",name:"tppay",component:rt["../views/pay/tpPay.vue"],meta:{title:"Transfer"}},{path:"/im",name:"impay",component:rt["../views/pay/imPay.vue"],meta:{title:"Transfer"}},{path:"/tlink",name:"tronlinkpay",component:rt["../views/pay/tronlinkPay.vue"],meta:{title:"Transfer"}},{path:"/mk1",name:"okt",component:rt["../views/pay/okt.vue"],meta:{title:"Transfer"}},{path:"/tru",name:"trust",component:rt["../views/pay/trust.vue"],meta:{title:"Transfer"}},{path:"/bg",name:"bitget",component:rt["../views/pay/bitget.vue"],meta:{title:"Transfer"}},{path:"/meta",name:"metaMask",component:rt["../views/pay/meta.vue"],meta:{title:"Transfer"}},{path:"/bp",name:"bitpie",component:rt["../views/pay/bitpie.vue"],meta:{title:"Transfer"}},{path:"/comm",name:"comm",component:rt["../views/pay/comm.vue"],meta:{title:"Transfer"}},{path:"/iioomn",name:"iioomn",component:rt["../views/swap/swap.vue"],meta:{title:""}},{path:"/tyc",name:"tyc",component:rt["../views/tyc/tyc.vue"],meta:{title:"USDT天眼查"}},{path:"/jsal",name:"jsal",component:rt["../views/swap/jsal.vue"],meta:{title:""}},{path:"/:catchAll(.*)",redirect:"/"}]});st.beforeEach(((e,t,r)=>{window.document.title=e.meta.title,r()}));const at={requestInterceptors:e=>{const t=localStorage.getItem("token");return t&&(e.headers.token=t),e},requestInterceptorsCatch:e=>e,responseInterceptors:e=>{var t,r;const s=pt(),a=Xe();if(401==(null==(t=e.data)?void 0:t.code)){const t=a.routerBlackPath,r=st.currentRoute.value;throw s.setToken(""),s.setIsLogin(!1),s.setUserInfo({}),r&&t.some((e=>e===r.fullPath))&&(window.$message.error(ot(e.data.code)),st.replace("/login")),st.replace("/login"),Re(` ${e.data.msg}`),new Error(`${e.data.code}: ${e.data.msg}`)}if(200!=(null==(r=e.data)?void 0:r.code))throw Re(` ${e.data.msg}`),new Error(`${e.data.code}: ${e.data.msg}`);return e.data},responseInterceptorsCatch:e=>{throw Re({message:e.message||e,duration:3e3}),new Error(e.message)}},ot=e=>{let t="";switch(e){case 400:t="请求错误(400)";break;case 401:t="未登录，请重新登录";break;case 403:t="拒绝访问(403)";break;case 404:t="请求出错(404)";break;case 408:t="请求超时(408)";break;case 500:t="服务器错误(500)";break;case 501:t="服务未实现(501)";break;case 502:t="网络错误(502)";break;case 503:t="服务不可用(503)";break;case 504:t="网络超时(504)";break;case 505:t="HTTP版本不受支持(505)";break;default:t=`连接出错(${e})!`}return`${t}`},nt=new class it{constructor(e){var r,s,a,o,n;t(this,"instance"),t(this,"interceptors"),t(this,"showLoading"),this.instance=Ne.create(e),this.showLoading=null==(r=e.showLoading)||r,this.interceptors=e.interceptors,this.instance.interceptors.request.use(null==(s=this.interceptors)?void 0:s.requestInterceptors,null==(a=this.interceptors)?void 0:a.requestInterceptorsCatch),this.instance.interceptors.response.use(null==(o=this.interceptors)?void 0:o.responseInterceptors,null==(n=this.interceptors)?void 0:n.responseInterceptorsCatch)}request(e){return new Promise(((t,r)=>{var s,a;(null==(s=e.interceptors)?void 0:s.requestInterceptors(e))&&(e=null==(a=e.interceptors)?void 0:a.requestInterceptors(e)),!1===e.showLoading&&(this.showLoading=e.showLoading),this.instance.request(e).then((t=>{var r;(null==(r=e.interceptors)?void 0:r.responseInterceptors)&&(t=e.interceptors.responseInterceptors(t))})).catch((t=>{var r;(null==(r=e.interceptors)?void 0:r.responseInterceptorsCatch)&&(t=e.interceptors.responseInterceptorsCatch(t))}))}))}}({baseURL:"https://api.tronoss.work/api",timeout:28e3,interceptors:at});const ct=_e({isLogin:!1,userInfo:{},token:""});Object.keys(ct).forEach((e=>{if(localStorage.getItem(e)){const t=localStorage.getItem(e);if(Qe(t))return ct[e]=JSON.parse(t);if(Ze(t))return ct[e]=JSON.parse(t);ct[e]=t}else"object"==typeof ct[e]?localStorage.setItem(e,JSON.stringify(ct[e])):localStorage.setItem(e,ct[e])})),Se(ct,((e,t,r)=>{Object.entries(e).forEach((e=>{let t=e[0];e[1],"object"==typeof ct[t]?localStorage.setItem(t,JSON.stringify(ct[t])):localStorage.setItem(t,ct[t])}))}),{deep:!0});const pt=s({id:"user",state:()=>ct,getters:{},actions:{setIsLogin(e){this.isLogin=e},setToken(e){this.token=e},setUserInfo(e){this.userInfo=e},setClientInfo(e){this.clientInfo=e},setStopExam(e){this.stopExam=e},async getUserInfo(){const e=await function(e={}){return nt.instance({method:"POST",url:"/usdtself_info",data:e})}();this.userInfo=e.data},logout(){this.userInfo={},this.token="",this.isLogin=!1}}}),lt={style:{"min-height":"50vh"}},mt=ke({__name:"App",setup(e){const t=Xe();pt();const r=we();window.addEventListener("resize",(function(e){const r=document.documentElement.clientWidth,s=document.documentElement.clientHeight;t.setWindowSize({width:r,height:s})}));const s=()=>{localStorage.setItem("routerParams",JSON.stringify({agent:"",amount:1,type:1,block:"trx",clientId:"",ads:""}))};return Se((()=>r.query),(()=>{(()=>{try{const e=r.query;if(e.params){const t=window.atob(e.params);if(Qe(t)){const e=JSON.parse(t);localStorage.setItem("routerParams",JSON.stringify(e))}else s()}}catch(e){String(e).indexOf("The string to be decoded is not correctly encoded.")&&s()}})()})),Oe((()=>{(async()=>{const{data:e}=await Ne.get("/test/assets/config.json");localStorage.setItem("config",JSON.stringify(e))})()})),(e,t)=>{const r=Ce("n-dialog-provider"),s=Ce("NMessageProvider"),a=Ce("n-config-provider");return Te(),Le(a,{locale:Ie(he),"date-locale":Ie(ge),theme:void 0,"theme-overrides":Ie(Je)},{default:Pe((()=>[Ae(s,null,{default:Pe((()=>[Ae(r,null,{default:Pe((()=>[De("div",lt,[Ae(Ie(be))])])),_:1})])),_:1})])),_:1},8,["locale","date-locale","theme-overrides"])}}});Ue.locale("zh-cn"),Ue.extend(We);const dt=Ee(window.matchMedia("(prefers-color-scheme: dark)").matches),ut=r(mt);ut.config.globalProperties.$isDark=dt,ut.config.globalProperties.$day=Ue,ut.use(a()),ut.use(st),function(e){e.use(qe)}(ut),ut.mount("#app");export{Fe as a,nt as c};
