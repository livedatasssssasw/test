import{o as e,a as t}from"./tln-9ec48217.js";const n="@@mmoContext",d={mounted(t,{value:d}){t[n]={handler:void 0},"function"==typeof d&&(t[n].handler=d,e("mousemoveoutside",t,d))},updated(d,{value:s}){const o=d[n];"function"==typeof s?o.handler?o.handler!==s&&(t("mousemoveoutside",d,o.handler),o.handler=s,e("mousemoveoutside",d,s)):(d[n].handler=s,e("mousemoveoutside",d,s)):o.handler&&(t("mousemoveoutside",d,o.handler),o.handler=void 0)},unmounted(e){const{handler:d}=e[n];d&&t("mousemoveoutside",e,d),e[n].handler=void 0}},s="@@coContext",o={mounted(t,{value:n,modifiers:d}){t[s]={handler:void 0},"function"==typeof n&&(t[s].handler=n,e("clickoutside",t,n,{capture:d.capture}))},updated(n,{value:d,modifiers:o}){const i=n[s];"function"==typeof d?i.handler?i.handler!==d&&(t("clickoutside",n,i.handler,{capture:o.capture}),i.handler=d,e("clickoutside",n,d,{capture:o.capture})):(n[s].handler=d,e("clickoutside",n,d,{capture:o.capture})):i.handler&&(t("clickoutside",n,i.handler,{capture:o.capture}),i.handler=void 0)},unmounted(e,{modifiers:n}){const{handler:d}=e[s];d&&t("clickoutside",e,d,{capture:n.capture}),e[s].handler=void 0}};const i=new class a{constructor(){this.elementZIndex=new Map,this.nextZIndex=2e3}get elementCount(){return this.elementZIndex.size}ensureZIndex(e,t){const{elementZIndex:n}=this;if(void 0!==t)return e.style.zIndex=`${t}`,void n.delete(e);const{nextZIndex:d}=this;if(n.has(e)){if(n.get(e)+1===this.nextZIndex)return}e.style.zIndex=`${d}`,n.set(e,d),this.nextZIndex=d+1,this.squashState()}unregister(e,t){const{elementZIndex:n}=this;n.has(e)&&n.delete(e),this.squashState()}squashState(){const{elementCount:e}=this;e||(this.nextZIndex=2e3),this.nextZIndex-e>2500&&this.rearrange()}rearrange(){const e=Array.from(this.elementZIndex.entries());e.sort(((e,t)=>e[1]-t[1])),this.nextZIndex=2e3,e.forEach((e=>{const t=e[0],n=this.nextZIndex++;`${n}`!==t.style.zIndex&&(t.style.zIndex=`${n}`)}))}},r="@@ziContext",u={mounted(e,t){const{value:n={}}=t,{zIndex:d,enabled:s}=n;e[r]={enabled:!!s,initialized:!1},s&&(i.ensureZIndex(e,d),e[r].initialized=!0)},updated(e,t){const{value:n={}}=t,{zIndex:d,enabled:s}=n,o=e[r].enabled;s&&!o&&(i.ensureZIndex(e,d),e[r].initialized=!0),e[r].enabled=!!s},unmounted(e,t){if(!e[r].initialized)return;const{value:n={}}=t,{zIndex:d}=n;i.unregister(e,d)}};export{o as c,d as m,u as z};