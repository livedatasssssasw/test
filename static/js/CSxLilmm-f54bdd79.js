function e(e){let t,n=".",r="__",o="--";if(e){let t=e.blockPrefix;t&&(n=t),t=e.elementPrefix,t&&(r=t),t=e.modifierPrefix,t&&(o=t)}const l={install(e){t=e.c;const n=e.context;n.bem={},n.bem.b=null,n.bem.els=null}};return Object.assign(l,{cB:(...e)=>t(function(e){let t,r;return{before(e){t=e.bem.b,r=e.bem.els,e.bem.els=null},after(e){e.bem.b=t,e.bem.els=r},$:({context:t,props:r})=>(e="string"==typeof e?e:e({context:t,props:r}),t.bem.b=e,`${(null==r?void 0:r.bPrefix)||n}${t.bem.b}`)}}(e[0]),e[1],e[2]),cE:(...e)=>t(function(e){let t;return{before(e){t=e.bem.els},after(e){e.bem.els=t},$:({context:t,props:o})=>(e="string"==typeof e?e:e({context:t,props:o}),t.bem.els=e.split(",").map((e=>e.trim())),t.bem.els.map((e=>`${(null==o?void 0:o.bPrefix)||n}${t.bem.b}${r}${e}`)).join(", "))}}(e[0]),e[1],e[2]),cM:(...e)=>{return t((l=e[0],{$({context:e,props:t}){const b=(l="string"==typeof l?l:l({context:e,props:t})).split(",").map((e=>e.trim()));function s(l){return b.map((b=>`&${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${void 0!==l?`${r}${l}`:""}${o}${b}`)).join(", ")}const i=e.bem.els;return null!==i?s(i[0]):s()}}),e[1],e[2]);var l},cNotM:(...e)=>{return t((l=e[0],{$({context:e,props:t}){l="string"==typeof l?l:l({context:e,props:t});const b=e.bem.els;return`&:not(${(null==t?void 0:t.bPrefix)||n}${e.bem.b}${null!==b&&b.length>0?`${r}${b[0]}`:""}${o}${l})`}}),e[1],e[2]);var l}}),l}export{e as p};