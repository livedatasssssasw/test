import{q as t,F as e,C as o,v as n,z as r,g as l,i,x as s,E as a,c as u,h as d,I as c,b as f,w as h,n as p,K as m,d as v,a as g,D as b}from"./wuV1FhF-24c12a21.js";import{a as y,o as w}from"./dbX06-f0c9a243.js";import{b as x,d as S,p as T,j as $,a as M}from"./G-9c465e3c.js";import{r as R,o as z}from"./jH6-bd9b654c.js";import{u as E}from"./FbGBRWXaLF-e13ae1db.js";import{d as B,u as F,o as A,i as I}from"./mvK-b801ca05.js";import{z as L}from"./TD-ba991851.js";import{R as W}from"./dx-d7e5e14c.js";import{C as k}from"./mRi14JL4a-30590811.js";function N(t,e,o="default"){const n=e[o];if(void 0===n)throw new Error(`[vueuc/${t}]: slot[${o}] is empty.`);return n()}function X(n,r=!0,l=[]){return n.forEach((n=>{if(null!==n)if("object"==typeof n)if(Array.isArray(n))X(n,r,l);else if(n.type===e){if(null===n.children)return;Array.isArray(n.children)&&X(n.children,r,l)}else n.type!==o&&l.push(n);else"string"!=typeof n&&"number"!=typeof n||l.push(t(String(n)))})),l}function C(t,e,o="default"){const n=e[o];if(void 0===n)throw new Error(`[vueuc/${t}]: slot[${o}] is empty.`);const r=X(n());if(1===r.length)return r[0];throw new Error(`[vueuc/${t}]: slot[${o}] should have exactly one child.`)}let Y=null;function j(){if(null===Y&&(Y=document.getElementById("v-binder-view-measurer"),null===Y)){Y=document.createElement("div"),Y.id="v-binder-view-measurer";const{style:t}=Y;t.position="fixed",t.left="0",t.right="0",t.top="0",t.bottom="0",t.pointerEvents="none",t.visibility="hidden",document.body.appendChild(Y)}return Y.getBoundingClientRect()}function H(t){const e=t.getBoundingClientRect(),o=j();return{left:e.left-o.left,top:e.top-o.top,bottom:o.height+o.top-e.bottom,right:o.width+o.left-e.right,width:e.width,height:e.height}}function O(t){if(null===t)return null;const e=function(t){return 9===t.nodeType?null:t.parentNode}(t);if(null===e)return null;if(9===e.nodeType)return document;if(1===e.nodeType){const{overflow:t,overflowX:o,overflowY:n}=getComputedStyle(e);if(/(auto|scroll|overlay)/.test(t+n+o))return e}return O(e)}const D=n({name:"Binder",props:{syncTargetWithParent:Boolean,syncTarget:{type:Boolean,default:!0}},setup(t){var e;r("VBinder",null===(e=l())||void 0===e?void 0:e.proxy);const o=i("VBinder",null),n=R(null);let a=[];const u=()=>{for(const t of a)y("scroll",t,c,!0);a=[]},d=new Set,c=()=>{x(f)},f=()=>{d.forEach((t=>t()))},h=new Set,p=()=>{h.forEach((t=>t()))};return s((()=>{y("resize",window,p),u()})),{targetRef:n,setTargetRef:e=>{n.value=e,o&&t.syncTargetWithParent&&o.setTargetRef(e)},addScrollListener:t=>{0===d.size&&(()=>{let t=n.value;for(;t=O(t),null!==t;)a.push(t);for(const e of a)w("scroll",e,c,!0)})(),d.has(t)||d.add(t)},removeScrollListener:t=>{d.has(t)&&d.delete(t),0===d.size&&u()},addResizeListener:t=>{0===h.size&&w("resize",window,p),h.has(t)||h.add(t)},removeResizeListener:t=>{h.has(t)&&h.delete(t),0===h.size&&y("resize",window,p)}}},render(){return N("binder",this.$slots)}}),P=n({name:"Target",setup(){const{setTargetRef:t,syncTarget:e}=i("VBinder");return{syncTarget:e,setTargetDirective:{mounted:t,updated:t}}},render(){const{syncTarget:t,setTargetDirective:e}=this;return t?a(C("follower",this.$slots),[[e]]):C("follower",this.$slots)}});const{c:V}=k(),U="vueuc-style";function q(t){return t&-t}class K{constructor(t,e){this.l=t,this.min=e;const o=new Array(t+1);for(let n=0;n<t+1;++n)o[n]=0;this.ft=o}add(t,e){if(0===e)return;const{l:o,ft:n}=this;for(t+=1;t<=o;)n[t]+=e,t+=q(t)}get(t){return this.sum(t+1)-this.sum(t)}sum(t){if(void 0===t&&(t=this.l),t<=0)return 0;const{ft:e,min:o,l:n}=this;if(t>n)throw new Error("[FinweckTree.sum]: `i` is larger than length.");let r=t*o;for(;t>0;)r+=e[t],t-=q(t);return r}getBound(t){let e=0,o=this.l;for(;o>e;){const n=Math.floor((e+o)/2),r=this.sum(n);if(r>t)o=n;else{if(!(r<t))return n;if(e===n)return this.sum(e+1)<=t?e+1:n;e=n}}return e}}function G(t){return"string"==typeof t?document.querySelector(t):t()}const _=n({name:"LazyTeleport",props:{to:{type:[String,Object],default:void 0},disabled:Boolean,show:{type:Boolean,required:!0}},setup:t=>({showTeleport:B(z(t,"show")),mergedTo:u((()=>{const{to:e}=t;return null!=e?e:"body"}))}),render(){return this.showTeleport?this.disabled?N("lazy-teleport",this.$slots):d(c,{disabled:this.disabled,to:this.mergedTo},N("lazy-teleport",this.$slots)):null}}),J={top:"bottom",bottom:"top",left:"right",right:"left"},Q={start:"end",center:"center",end:"start"},Z={top:"height",bottom:"height",left:"width",right:"width"},tt={"bottom-start":"top left",bottom:"top center","bottom-end":"top right","top-start":"bottom left",top:"bottom center","top-end":"bottom right","right-start":"top left",right:"center left","right-end":"bottom left","left-start":"top right",left:"center right","left-end":"bottom right"},et={"bottom-start":"bottom left",bottom:"bottom center","bottom-end":"bottom right","top-start":"top left",top:"top center","top-end":"top right","right-start":"top right",right:"center right","right-end":"bottom right","left-start":"top left",left:"center left","left-end":"bottom left"},ot={"bottom-start":"right","bottom-end":"left","top-start":"right","top-end":"left","right-start":"bottom","right-end":"top","left-start":"bottom","left-end":"top"},nt={top:!0,bottom:!1,left:!0,right:!1},rt={top:"end",bottom:"start",left:"end",right:"start"};const lt=V([V(".v-binder-follower-container",{position:"absolute",left:"0",right:"0",top:"0",height:"0",pointerEvents:"none",zIndex:"auto"}),V(".v-binder-follower-content",{position:"absolute",zIndex:"auto"},[V("> *",{pointerEvents:"all"})])]),it=n({name:"Follower",inheritAttrs:!1,props:{show:Boolean,enabled:{type:Boolean,default:void 0},placement:{type:String,default:"bottom"},syncTrigger:{type:Array,default:["resize","scroll"]},to:[String,Object],flip:{type:Boolean,default:!0},internalShift:Boolean,x:Number,y:Number,width:String,minWidth:String,containerClass:String,teleportDisabled:Boolean,zindexable:{type:Boolean,default:!0},zIndex:Number,overlap:Boolean},setup(t){const e=i("VBinder"),o=F((()=>void 0!==t.enabled?t.enabled:t.show)),n=R(null),r=R(null),l=()=>{const{syncTrigger:o}=t;o.includes("scroll")&&e.addScrollListener(d),o.includes("resize")&&e.addResizeListener(d)},a=()=>{e.removeScrollListener(d),e.removeResizeListener(d)};f((()=>{o.value&&(d(),l())}));const u=E();lt.mount({id:"vueuc/binder",head:!0,anchorMetaName:U,ssr:u}),s((()=>{a()})),A((()=>{o.value&&d()}));const d=()=>{if(!o.value)return;const l=n.value;if(null===l)return;const i=e.targetRef,{x:s,y:a,overlap:u}=t,d=void 0!==s&&void 0!==a?function(t,e){const o=j();return{top:e,left:t,height:0,width:0,right:o.width-t,bottom:o.height-e}}(s,a):H(i);l.style.setProperty("--v-target-width",`${Math.round(d.width)}px`),l.style.setProperty("--v-target-height",`${Math.round(d.height)}px`);const{width:c,minWidth:f,placement:h,internalShift:p,flip:m}=t;l.setAttribute("v-placement",h),u?l.setAttribute("v-overlap",""):l.removeAttribute("v-overlap");const{style:v}=l;v.width="target"===c?`${d.width}px`:void 0!==c?c:"",v.minWidth="target"===f?`${d.width}px`:void 0!==f?f:"";const g=H(l),b=H(r.value),{left:y,top:w,placement:x}=function(t,e,o,n,r,l){if(!r||l)return{placement:t,top:0,left:0};const[i,s]=t.split("-");let a=null!=s?s:"center",u={top:0,left:0};const d=(t,r,l)=>{let i=0,s=0;const a=o[t]-e[r]-e[t];return a>0&&n&&(l?s=nt[r]?a:-a:i=nt[r]?a:-a),{left:i,top:s}},c="left"===i||"right"===i;if("center"!==a){const n=ot[t],r=J[n],l=Z[n];if(o[l]>e[l]){if(e[n]+e[l]<o[l]){const t=(o[l]-e[l])/2;e[n]<t||e[r]<t?e[n]<e[r]?(a=Q[s],u=d(l,r,c)):u=d(l,n,c):a="center"}}else o[l]<e[l]&&e[r]<0&&e[n]>e[r]&&(a=Q[s])}else{const t="bottom"===i||"top"===i?"left":"top",n=J[t],r=Z[t],l=(o[r]-e[r])/2;(e[t]<l||e[n]<l)&&(e[t]>e[n]?(a=rt[t],u=d(r,t,c)):(a=rt[n],u=d(r,n,c)))}let f=i;return e[i]<o[Z[i]]&&e[i]<e[J[i]]&&(f=J[i]),{placement:"center"!==a?`${f}-${a}`:f,left:u.left,top:u.top}}(h,d,g,p,m,u),S=function(t,e){return e?et[t]:tt[t]}(x,u),{left:T,top:$,transform:M}=function(t,e,o,n,r,l){if(l)switch(t){case"bottom-start":case"left-end":return{top:`${Math.round(o.top-e.top+o.height)}px`,left:`${Math.round(o.left-e.left)}px`,transform:"translateY(-100%)"};case"bottom-end":case"right-end":return{top:`${Math.round(o.top-e.top+o.height)}px`,left:`${Math.round(o.left-e.left+o.width)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top-start":case"left-start":return{top:`${Math.round(o.top-e.top)}px`,left:`${Math.round(o.left-e.left)}px`,transform:""};case"top-end":case"right-start":return{top:`${Math.round(o.top-e.top)}px`,left:`${Math.round(o.left-e.left+o.width)}px`,transform:"translateX(-100%)"};case"top":return{top:`${Math.round(o.top-e.top)}px`,left:`${Math.round(o.left-e.left+o.width/2)}px`,transform:"translateX(-50%)"};case"right":return{top:`${Math.round(o.top-e.top+o.height/2)}px`,left:`${Math.round(o.left-e.left+o.width)}px`,transform:"translateX(-100%) translateY(-50%)"};case"left":return{top:`${Math.round(o.top-e.top+o.height/2)}px`,left:`${Math.round(o.left-e.left)}px`,transform:"translateY(-50%)"};default:return{top:`${Math.round(o.top-e.top+o.height)}px`,left:`${Math.round(o.left-e.left+o.width/2)}px`,transform:"translateX(-50%) translateY(-100%)"}}switch(t){case"bottom-start":return{top:`${Math.round(o.top-e.top+o.height+n)}px`,left:`${Math.round(o.left-e.left+r)}px`,transform:""};case"bottom-end":return{top:`${Math.round(o.top-e.top+o.height+n)}px`,left:`${Math.round(o.left-e.left+o.width+r)}px`,transform:"translateX(-100%)"};case"top-start":return{top:`${Math.round(o.top-e.top+n)}px`,left:`${Math.round(o.left-e.left+r)}px`,transform:"translateY(-100%)"};case"top-end":return{top:`${Math.round(o.top-e.top+n)}px`,left:`${Math.round(o.left-e.left+o.width+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"right-start":return{top:`${Math.round(o.top-e.top+n)}px`,left:`${Math.round(o.left-e.left+o.width+r)}px`,transform:""};case"right-end":return{top:`${Math.round(o.top-e.top+o.height+n)}px`,left:`${Math.round(o.left-e.left+o.width+r)}px`,transform:"translateY(-100%)"};case"left-start":return{top:`${Math.round(o.top-e.top+n)}px`,left:`${Math.round(o.left-e.left+r)}px`,transform:"translateX(-100%)"};case"left-end":return{top:`${Math.round(o.top-e.top+o.height+n)}px`,left:`${Math.round(o.left-e.left+r)}px`,transform:"translateX(-100%) translateY(-100%)"};case"top":return{top:`${Math.round(o.top-e.top+n)}px`,left:`${Math.round(o.left-e.left+o.width/2+r)}px`,transform:"translateY(-100%) translateX(-50%)"};case"right":return{top:`${Math.round(o.top-e.top+o.height/2+n)}px`,left:`${Math.round(o.left-e.left+o.width+r)}px`,transform:"translateY(-50%)"};case"left":return{top:`${Math.round(o.top-e.top+o.height/2+n)}px`,left:`${Math.round(o.left-e.left+r)}px`,transform:"translateY(-50%) translateX(-100%)"};default:return{top:`${Math.round(o.top-e.top+o.height+n)}px`,left:`${Math.round(o.left-e.left+o.width/2+r)}px`,transform:"translateX(-50%)"}}}(x,b,d,w,y,u);l.setAttribute("v-placement",x),l.style.setProperty("--v-offset-left",`${Math.round(y)}px`),l.style.setProperty("--v-offset-top",`${Math.round(w)}px`),l.style.transform=`translateX(${T}) translateY(${$}) ${M}`,l.style.setProperty("--v-transform-origin",S),l.style.transformOrigin=S};h(o,(t=>{t?(l(),c()):a()}));const c=()=>{p().then(d).catch((t=>{}))};["placement","x","y","internalShift","flip","width","overlap","minWidth"].forEach((e=>{h(z(t,e),d)})),["teleportDisabled"].forEach((e=>{h(z(t,e),c)})),h(z(t,"syncTrigger"),(t=>{t.includes("resize")?e.addResizeListener(d):e.removeResizeListener(d),t.includes("scroll")?e.addScrollListener(d):e.removeScrollListener(d)}));const m=I(),v=F((()=>{const{to:e}=t;if(void 0!==e)return e;m.value}));return{VBinder:e,mergedEnabled:o,offsetContainerRef:r,followerRef:n,mergedTo:v,syncPosition:d}},render(){return d(_,{show:this.show,to:this.mergedTo,disabled:this.teleportDisabled},{default:()=>{var t,e;const o=d("div",{class:["v-binder-follower-container",this.containerClass],ref:"offsetContainerRef"},[d("div",{class:"v-binder-follower-content",ref:"followerRef"},null===(e=(t=this.$slots).default)||void 0===e?void 0:e.call(t))]);return this.zindexable?a(o,[[L,{enabled:this.mergedEnabled,zIndex:this.zIndex}]]):o}})}});const st=new class at{constructor(){this.handleResize=this.handleResize.bind(this),this.observer=new("undefined"!=typeof window&&window.ResizeObserver||W)(this.handleResize),this.elHandlersMap=new Map}handleResize(t){for(const e of t){const t=this.elHandlersMap.get(e.target);void 0!==t&&t(e)}}registerHandler(t,e){this.elHandlersMap.set(t,e),this.observer.observe(t)}unregisterHandler(t){this.elHandlersMap.has(t)&&(this.elHandlersMap.delete(t),this.observer.unobserve(t))}},ut=n({name:"ResizeObserver",props:{onResize:Function},setup(t){let e=!1;const o=l().proxy;function n(e){const{onResize:o}=t;void 0!==o&&o(e)}f((()=>{const t=o.$el;void 0!==t&&(t.nextElementSibling!==t.nextSibling&&3===t.nodeType&&""!==t.nodeValue||null!==t.nextElementSibling&&(st.registerHandler(t.nextElementSibling,n),e=!0))})),s((()=>{e&&st.unregisterHandler(o.$el.nextElementSibling)}))},render(){return m(this.$slots,"default")}});let dt,ct;function ft(){return"undefined"==typeof document?1:(void 0===ct&&(ct="chrome"in window?window.devicePixelRatio:1),ct)}const ht=V(".v-vl",{maxHeight:"inherit",height:"100%",overflow:"auto",minWidth:"1px"},[V("&:not(.v-vl--show-scrollbar)",{scrollbarWidth:"none"},[V("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb",{width:0,height:0,display:"none"})])]),pt=n({name:"VirtualList",inheritAttrs:!1,props:{showScrollbar:{type:Boolean,default:!0},items:{type:Array,default:()=>[]},itemSize:{type:Number,required:!0},itemResizable:Boolean,itemsStyle:[String,Object],visibleItemsTag:{type:[String,Object],default:"div"},visibleItemsProps:Object,ignoreItemResize:Boolean,onScroll:Function,onWheel:Function,onResize:Function,defaultScrollKey:[Number,String],defaultScrollIndex:Number,keyField:{type:String,default:"key"},paddingTop:{type:[Number,String],default:0},paddingBottom:{type:[Number,String],default:0}},setup(t){const e=E();ht.mount({id:"vueuc/virtual-list",head:!0,anchorMetaName:U,ssr:e}),f((()=>{const{defaultScrollIndex:e,defaultScrollKey:o}=t;null!=e?b({index:e}):null!=o&&b({key:o})}));let o=!1,n=!1;v((()=>{o=!1,n?b({top:h.value,left:c}):n=!0})),g((()=>{o=!0,n||(n=!0)}));const r=u((()=>{const e=new Map,{keyField:o}=t;return t.items.forEach(((t,n)=>{e.set(t[o],n)})),e})),l=R(null),i=R(void 0),s=new Map,a=u((()=>{const{items:e,itemSize:o,keyField:n}=t,r=new K(e.length,o);return e.forEach(((t,e)=>{const o=t[n],l=s.get(o);void 0!==l&&r.add(e,l)})),r})),d=R(0);let c=0;const h=R(0),p=F((()=>Math.max(a.value.getBound(h.value-S(t.paddingTop))-1,0))),m=u((()=>{const{value:e}=i;if(void 0===e)return[];const{items:o,itemSize:n}=t,r=p.value,l=Math.min(r+Math.ceil(e/n+1),o.length-1),s=[];for(let t=r;t<=l;++t)s.push(o[t]);return s})),b=(t,e)=>{if("number"==typeof t)return void M(t,e,"auto");const{left:o,top:n,index:l,key:i,position:s,behavior:a,debounce:u=!0}=t;if(void 0!==o||void 0!==n)M(o,n,a);else if(void 0!==l)$(l,a,u);else if(void 0!==i){const t=r.value.get(i);void 0!==t&&$(t,a,u)}else"bottom"===s?M(0,Number.MAX_SAFE_INTEGER,a):"top"===s&&M(0,0,a)};let y,w=null;function $(e,o,n){const{value:r}=a,i=r.sum(e)+S(t.paddingTop);if(n){y=e,null!==w&&window.clearTimeout(w),w=window.setTimeout((()=>{y=void 0,w=null}),16);const{scrollTop:t,offsetHeight:n}=l.value;if(i>t){const s=r.get(e);i+s<=t+n||l.value.scrollTo({left:0,top:i+s-n,behavior:o})}else l.value.scrollTo({left:0,top:i,behavior:o})}else l.value.scrollTo({left:0,top:i,behavior:o})}function M(t,e,o){l.value.scrollTo({left:t,top:e,behavior:o})}const z=!("undefined"!=typeof document&&(void 0===dt&&(dt="matchMedia"in window&&window.matchMedia("(pointer:coarse)").matches),dt));let B=!1;function A(){const{value:t}=l;null!=t&&(h.value=t.scrollTop,c=t.scrollLeft)}function I(t){let e=t;for(;null!==e;){if("none"===e.style.display)return!0;e=e.parentElement}return!1}return{listHeight:i,listStyle:{overflow:"auto"},keyToIndex:r,itemsStyle:u((()=>{const{itemResizable:e}=t,o=T(a.value.sum());return d.value,[t.itemsStyle,{boxSizing:"content-box",height:e?"":o,minHeight:e?o:"",paddingTop:T(t.paddingTop),paddingBottom:T(t.paddingBottom)}]})),visibleItemsStyle:u((()=>(d.value,{transform:`translateY(${T(a.value.sum(p.value))})`}))),viewportItems:m,listElRef:l,itemsElRef:R(null),scrollTo:b,handleListResize:function(e){if(o)return;if(I(e.target))return;if(e.contentRect.height===i.value)return;i.value=e.contentRect.height;const{onResize:n}=t;void 0!==n&&n(e)},handleListScroll:function(e){var o;null===(o=t.onScroll)||void 0===o||o.call(t,e),z&&B||A()},handleListWheel:function(e){var o;if(null===(o=t.onWheel)||void 0===o||o.call(t,e),z){const t=l.value;if(null!=t){if(0===e.deltaX){if(0===t.scrollTop&&e.deltaY<=0)return;if(t.scrollTop+t.offsetHeight>=t.scrollHeight&&e.deltaY>=0)return}e.preventDefault(),t.scrollTop+=e.deltaY/ft(),t.scrollLeft+=e.deltaX/ft(),A(),B=!0,x((()=>{B=!1}))}}},handleItemResize:function(e,n){var i,u,c;if(o)return;if(t.ignoreItemResize)return;if(I(n.target))return;const{value:f}=a,h=r.value.get(e),p=f.get(h),m=null!==(c=null===(u=null===(i=n.borderBoxSize)||void 0===i?void 0:i[0])||void 0===u?void 0:u.blockSize)&&void 0!==c?c:n.contentRect.height;if(m===p)return;0===m-t.itemSize?s.delete(e):s.set(e,m-t.itemSize);const v=m-p;if(0===v)return;f.add(h,v);const g=l.value;if(null!=g){if(void 0===y){const t=f.sum(h);g.scrollTop>t&&g.scrollBy(0,v)}else if(h<y)g.scrollBy(0,v);else if(h===y){m+f.sum(h)>g.scrollTop+g.offsetHeight&&g.scrollBy(0,v)}A()}d.value++}}},render(){const{itemResizable:t,keyField:e,keyToIndex:o,visibleItemsTag:n}=this;return d(ut,{onResize:this.handleListResize},{default:()=>{var r,l;return d("div",b(this.$attrs,{class:["v-vl",this.showScrollbar&&"v-vl--show-scrollbar"],onScroll:this.handleListScroll,onWheel:this.handleListWheel,ref:"listElRef"}),[0!==this.items.length?d("div",{ref:"itemsElRef",class:"v-vl-items",style:this.itemsStyle},[d(n,Object.assign({class:"v-vl-visible-items",style:this.visibleItemsStyle},this.visibleItemsProps),{default:()=>this.viewportItems.map((n=>{const r=n[e],l=o.get(r),i=this.$slots.default({item:n,index:l})[0];return t?d(ut,{key:r,onResize:t=>this.handleItemResize(r,t)},{default:()=>i}):(i.key=r,i)}))})]):null===(l=(r=this.$slots).empty)||void 0===l?void 0:l.call(r)])}})}}),mt=V(".v-x-scroll",{overflow:"auto",scrollbarWidth:"none"},[V("&::-webkit-scrollbar",{width:0,height:0})]),vt=n({name:"XScroll",props:{disabled:Boolean,onScroll:Function},setup(){const t=R(null);const e=E();mt.mount({id:"vueuc/x-scroll",head:!0,anchorMetaName:U,ssr:e});const o={scrollTo(...e){var o;null===(o=t.value)||void 0===o||o.scrollTo(...e)}};return Object.assign({selfRef:t,handleWheel:function(t){t.currentTarget.offsetWidth<t.currentTarget.scrollWidth&&0!==t.deltaY&&(t.currentTarget.scrollLeft+=t.deltaY+t.deltaX,t.preventDefault())}},o)},render(){return d("div",{ref:"selfRef",onScroll:this.onScroll,onWheel:this.disabled?void 0:this.handleWheel,class:"v-x-scroll"},this.$slots)}}),gt="v-hidden",bt=V("[v-hidden]",{display:"none!important"}),yt=n({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateCount:Function,onUpdateOverflow:Function},setup(t,{slots:e}){const o=R(null),n=R(null);function r(r){const{value:l}=o,{getCounter:i,getTail:s}=t;let a;if(a=void 0!==i?i():n.value,!l||!a)return;a.hasAttribute(gt)&&a.removeAttribute(gt);const{children:u}=l;if(r.showAllItemsBeforeCalculate)for(const t of u)t.hasAttribute(gt)&&t.removeAttribute(gt);const d=l.offsetWidth,c=[],f=e.tail?null==s?void 0:s():null;let h=f?f.offsetWidth:0,p=!1;const m=l.children.length-(e.tail?1:0);for(let e=0;e<m-1;++e){if(e<0)continue;const o=u[e];if(p){o.hasAttribute(gt)||o.setAttribute(gt,"");continue}o.hasAttribute(gt)&&o.removeAttribute(gt);const n=o.offsetWidth;if(h+=n,c[e]=n,h>d){const{updateCounter:o}=t;for(let n=e;n>=0;--n){const r=m-1-n;void 0!==o?o(r):a.textContent=`${r}`;const l=a.offsetWidth;if(h-=c[n],h+l<=d||0===n){p=!0,e=n-1,f&&(-1===e?(f.style.maxWidth=d-l+"px",f.style.boxSizing="border-box"):f.style.maxWidth="");const{onUpdateCount:o}=t;o&&o(r);break}}}}const{onUpdateOverflow:v}=t;p?void 0!==v&&v(!0):(void 0!==v&&v(!1),a.setAttribute(gt,""))}const l=E();return bt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:U,ssr:l}),f((()=>r({showAllItemsBeforeCalculate:!1}))),{selfRef:o,counterRef:n,sync:r}},render(){const{$slots:t}=this;return p((()=>this.sync({showAllItemsBeforeCalculate:!1}))),d("div",{class:"v-overflow",ref:"selfRef"},[m(t,"default"),t.counter?t.counter():d("span",{style:{display:"inline-block"},ref:"counterRef"}),t.tail?t.tail():null])}});function wt(t){return t instanceof HTMLElement}function xt(t){for(let e=0;e<t.childNodes.length;e++){const o=t.childNodes[e];if(wt(o)&&(Tt(o)||xt(o)))return!0}return!1}function St(t){for(let e=t.childNodes.length-1;e>=0;e--){const o=t.childNodes[e];if(wt(o)&&(Tt(o)||St(o)))return!0}return!1}function Tt(t){if(!function(t){if(t.tabIndex>0||0===t.tabIndex&&null!==t.getAttribute("tabIndex"))return!0;if(t.getAttribute("disabled"))return!1;switch(t.nodeName){case"A":return!!t.href&&"ignore"!==t.rel;case"INPUT":return"hidden"!==t.type&&"file"!==t.type;case"BUTTON":case"SELECT":case"TEXTAREA":return!0;default:return!1}}(t))return!1;try{t.focus({preventScroll:!0})}catch(e){}return document.activeElement===t}let $t=[];const Mt=n({name:"FocusTrap",props:{disabled:Boolean,active:Boolean,autoFocus:{type:Boolean,default:!0},onEsc:Function,initialFocusTo:String,finalFocusTo:String,returnFocusOnDeactivated:{type:Boolean,default:!0}},setup(t){const e=$(),o=R(null),n=R(null);let r=!1,l=!1;const i="undefined"==typeof document?null:document.activeElement;function a(){return $t[$t.length-1]===e}function u(e){var o;"Escape"===e.code&&a()&&(null===(o=t.onEsc)||void 0===o||o.call(t,e))}function d(t){if(!l&&a()){const e=c();if(null===e)return;if(e.contains(M(t)))return;m("first")}}function c(){const t=o.value;if(null===t)return null;let e=t;for(;!(e=e.nextSibling,null===e||e instanceof Element&&"DIV"===e.tagName););return e}function p(){var o;if(t.disabled)return;if(document.removeEventListener("focus",d,!0),$t=$t.filter((t=>t!==e)),a())return;const{finalFocusTo:n}=t;void 0!==n?null===(o=G(n))||void 0===o||o.focus({preventScroll:!0}):t.returnFocusOnDeactivated&&i instanceof HTMLElement&&(l=!0,i.focus({preventScroll:!0}),l=!1)}function m(e){if(a()&&t.active){const t=o.value,r=n.value;if(null!==t&&null!==r){const o=c();if(null==o||o===r)return l=!0,t.focus({preventScroll:!0}),void(l=!1);l=!0;const n="first"===e?xt(o):St(o);l=!1,n||(l=!0,t.focus({preventScroll:!0}),l=!1)}}}return f((()=>{h((()=>t.active),(o=>{o?(!function(){var o;if(t.disabled)return;if($t.push(e),t.autoFocus){const{initialFocusTo:e}=t;void 0===e?m("first"):null===(o=G(e))||void 0===o||o.focus({preventScroll:!0})}r=!0,document.addEventListener("focus",d,!0)}(),w("keydown",document,u)):(y("keydown",document,u),r&&p())}),{immediate:!0})})),s((()=>{y("keydown",document,u),r&&p()})),{focusableStartRef:o,focusableEndRef:n,focusableStyle:"position: absolute; height: 0; width: 0;",handleStartFocus:function(t){if(l)return;const e=c();null!==e&&(null!==t.relatedTarget&&e.contains(t.relatedTarget)?m("last"):m("first"))},handleEndFocus:function(t){l||(null!==t.relatedTarget&&t.relatedTarget===o.value?m("last"):m("first"))}}},render(){const{default:t}=this.$slots;if(void 0===t)return null;if(this.disabled)return t();const{active:o,focusableStyle:n}=this;return d(e,null,[d("div",{"aria-hidden":"true",tabindex:o?"0":"-1",ref:"focusableStartRef",style:n,onFocus:this.handleStartFocus}),t(),d("div",{"aria-hidden":"true",style:n,ref:"focusableEndRef",tabindex:o?"0":"-1",onFocus:this.handleEndFocus})])}});export{Mt as F,_ as L,ut as V,pt as a,it as b,D as c,P as d,yt as e,vt as f,st as r};
