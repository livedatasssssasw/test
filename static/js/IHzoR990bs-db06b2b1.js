import{i as n}from"./mU-beeec96c.js";const e="undefined"!=typeof document;function s(){if(e)return;const s=n("@css-render/vue3-ssr",null);return null!==s?{adapter:(n,e)=>function(n,e,s){const{styles:t,ids:r}=s;r.has(n)||null!==t&&(r.add(n),t.push(function(n,e){return`<style cssr-id="${n}">\n${e}\n</style>`}(n,e)))}(n,e,s),context:s}:void 0}export{s as u};
