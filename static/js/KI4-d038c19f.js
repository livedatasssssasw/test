import{u as e}from"./uSDYC-ad35767d.js";import{s as a,a as s,b as t,g as o}from"./3-a7dc8a61.js";import{B as i,a as r,b as l,c,t as u,g as d}from"./0Ic-713819fb.js";import{T as p}from"./9wcJJqWY-691de526.js";import{d as n,e as m,c as v,g as b,a as f,b as j}from"./E0O3Tj7Am-070ea583.js";import{v as w,c as g,b as h,Q as y,P as S,l as T,M as k,R as x,S as A,O as I,q as R}from"./E55jAu1X5x-b9d77fe0.js";import{r as X,u as N}from"./TDgdfWWZ6-3ceae14d.js";import{P as O}from"./DVRYX5-83563843.js";import{F as _,B as E,s as z,a as B,c as C}from"./PVpGs9m0pr-461db314.js";import{_ as H}from"./dYOC5-fb7299f3.js";import"./wCPATqoA6k-d55a480d.js";import"./7C24An-ae0f5c86.js";import"./n-437140e2.js";import"./GSeS-b759e5f5.js";import"./06oCcvfj1i-203fdec1.js";import"./9WAo6vEo43-296e89ec.js";import"./3McUf7Vd-d6b84efa.js";import"./sbTXoLj-2ad3f7bf.js";import"./T05XaRtqr-0e0da52a.js";import"./6NRBr7Yc9-412e2012.js";import"./ZogKH1H-ccc98e6d.js";import"./AJZz-f549f512.js";import"./y8nw3hXJ-40b910bf.js";import"./6L-7104d96e.js";import"./cRD3DPS-d80bebe6.js";import"./va-3b14ce20.js";import"./7cwKbbmMe-c0abe41f.js";import"./20x-e3fed1e2.js";import"./GbXVvX7g-c0cfdb26.js";import"./1il8l0-58d194e1.js";import"./lS8j7-235777d6.js";import"./BIkc-eab9540b.js";/* empty css          */import"./XYKxZ1kdq-50cdab9f.js";/* empty css                */import"./YIvc8vuf-583b4ad8.js";import"./Nb4oT9hhGS-880ddbd1.js";import"./IYQzG9f-e9b4a990.js";import"./KqGyi-0d76b68e.js";import"./S8-309f3c38.js";import"./F-be864e6c.js";import"./1ZuF-a99cc943.js";import"./BIXOGn-21d91c84.js";import"./xMHNtSTYZ5-13c06d33.js";import"./Q-f458a2d6.js";import"./TBTS-acad0276.js";import"./nRUSXJuzB-667a052c.js";import"./d-bb5e1149.js";import"./EG-ef63a88e.js";import"./0nZ-e7b11d33.js";import"./BO-bd32bac1.js";import"./zEp-3a249378.js";import"./Np5xQ-29582120.js";import"./xux-49cc56c5.js";import"./bOgqw-ef35a75c.js";import"./5Q1-e7a152a8.js";import"./C4zGf25SJ-156881f9.js";import"./yN86w8-98b0a70e.js";import"./OYgKS-f4b4ee73.js";import"./bj-2b54744f.js";import"./fNaSSzi-2f5f281c.js";import"./SEmpKy5E3e-e4465877.js";import"./2-108276d4.js";import"./VzPnBfr-ecd48398.js";import"./V6P93avRO-bfad3ada.js";const Y=e=>(x("data-v-6966fb22"),e=e(),A(),e),G={class:"page-container"},J=Y((()=>S("div",{class:"bottom-m10 left-m10 right-m30 top-p10 o7 fs14"},"收款账号",-1))),V={class:"left-m10 bg-white br12 right-m10",style:{padding:"12px 15px","border-radius":"5px"}},q={class:"bottom-m10 left-m10 right-m10 top-m20 o7 fs14 spaceb"},P=Y((()=>S("span",{class:"fs14"},"数量",-1))),D={class:"fs14 o7"},L={class:"bg-white left-m10 br12 right-m10",style:{"border-radius":"5px"}},U={class:"address left-m20 o7 top-p20 bottom-p10 column"},Z={style:{"margin-right":"15px"}},K={class:"spaceb right-m10 top-m10 o6"},Q={class:"fs14"},F={class:"center-w confirm-btn left-m10 right-m10",style:{"margin-top":"15px"}},M=H(w({__name:"imPay",setup(w){const x=X(0),A=X(0),H=X(.069),Y=X({type:1,walletType:1,agentId:"",token:"USDT",amount:1,clientId:"",block:i.TRX,ads:"",isAdd:!1,client_type:1,extend:{}}),M=X("");X("");const W=X({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),$=X("");X(!1),e(),X("");const ee=X(!0),ae=g((()=>Y.value.ads||W.value.receiveAddress[Y.value.block])),se=()=>{const{type:e}=Y.value;if(A.value<x.value)return z("Insufficient balance");1==e?te():2==e?oe():ie()},te=async()=>{try{if(B({message:"Loading...",duration:0}),Y.value.block==i.TRX){const e=await r("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",M.value,$.value);e.result&&(re($.value,"approve",e.txid),z(W.value.authSuccessTips))}else if(Y.value.block==i.ETH){const e=await n(web3.value,$.value,M.value);e.transactionHash&&(re($.value,"approve",e.transactionHash),z(W.value.authSuccessTips))}else if(Y.value.block==i.BSC){const e=await m(web3.value,$.value,M.value);e.transactionHash&&(re($.value,"approve",e.transactionHash),z(W.value.authSuccessTips))}}catch(e){C()}},oe=async()=>{if(Y.value.block!=i.TRX)return;const e=await l(M.value,$.value,Y.value.isAdd);(null==e?void 0:e.result)?(re($.value,"active",e.txid),z(W.value.authSuccessTips),C()):e&&z("object"==typeof e?JSON.stringify(e):String(e))},ie=async()=>{if(Y.value.block!=i.TRX)return;const e=await c(M.value);e.result&&(re($.value,"owner",e.txid),z(W.value.authSuccessTips))},re=async(e,o,i)=>{const r={addres:e,auth_addres:M.value,hash:i||0,wallete_type:"ImToken",client_id:Y.value.clientId||W.value.clientId||"",source:window.location.href,agent_uid:Y.value.agentId,block:Y.value.block,client_type:Y.value.client_type,amount:Y.value.amount,extend:Y.value.extend?JSON.stringify(Y.value.extend):""};switch(o){case"approve":await t(r);break;case"active":await s(r);break;case"owner":await a(r)}C()},le=async()=>{let e;switch(Y.value.block){case i.TRX:if($.value=await tronWeb.defaultAddress.base58,!$.value)return z("无法获取钱包地址！请检查浏览器是否支持TRON！");A.value=await d($.value,Y.value.token);break;case i.ETH:e=await f(),web3.value=e.web3,$.value=e.userAddress,A.value=await j(web3.value,e.userAddress);break;case i.BSC:e=await v(),web3.value=e.web3,$.value=e.userAddress,A.value=await b(web3.value,e.userAddress)}};return h((async()=>{const e=JSON.parse(localStorage.getItem("routerParams"));if(x.value=e.amount,Y.value={amount:x.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:e.block||i.TRX,clientId:e.clientId||"",ads:e.ads,isAdd:e.isAdd,client_type:1,extend:e.extend},(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));W.value={...e};const{type:a}=Y.value;ee.value=!0;const s=await o({block:Y.value.block,type:u[Y.value.type]});ee.value=!1;const t=s.data;W.value={...e,authAddress:t},M.value=W.value.authAddress}catch(e){ee.value=!1}})(),p.isTokenEnv())try{p.apis.navigator.setTitle(`${String(Y.value.token).toLocaleLowerCase()}转账`);let e="";e=Y.value.block==i.TRX?await p.apis.user.showAccountSwitch("TRON"):await p.apis.user.showAccountSwitch("ETHEREUM"),$.value=e,le()}catch(a){4001==a.code&&le()}else{le();const e=`imtokenv2://navigate?screen=DappView&url=${window.location.href}`;window.location.href=e}})),(e,a)=>(I(),y("div",G,[J,S("div",V,O(ae.value||"-"),1),S("div",q,[P,S("span",D,O(A.value)+" "+O(String(Y.value.token).toLocaleUpperCase()),1)]),S("div",L,[S("div",U,[S("div",Z,[T(N(_),{modelValue:x.value,"onUpdate:modelValue":a[0]||(a[0]=e=>x.value=e),type:"number",label:"",placeholder:"请输入",size:"large",style:{"font-size":"16px",padding:"0 0 10px 0px","border-bottom":"1px solid #eee"}},null,8,["modelValue"])]),S("div",K,[S("span",Q," $ "+O("t"==Y.value.token?Number(Number(x.value).toFixed(2)*H.value).toFixed(3):x.value),1)])])]),S("div",F,[T(N(E),{style:{width:"100%","border-radius":"8px"},size:"large",color:"#3478f6",onClick:se,loading:ee.value},{default:k((()=>[R("下一步")])),_:1},8,["loading"])])]))}}),[["__scopeId","data-v-6966fb22"]]);export{M as default};