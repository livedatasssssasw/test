import{W as e}from"./Nb4oT9hhGS-880ddbd1.js";import"./F-be864e6c.js";import"./S8-309f3c38.js";import"./1ZuF-a99cc943.js";import"./BIXOGn-21d91c84.js";import"./xMHNtSTYZ5-13c06d33.js";import"./IYQzG9f-e9b4a990.js";import"./KqGyi-0d76b68e.js";import"./bj-2b54744f.js";import"./SEmpKy5E3e-e4465877.js";import"./V6P93avRO-bfad3ada.js";import"./OYgKS-f4b4ee73.js";import"./BO-bd32bac1.js";import"./Np5xQ-29582120.js";import"./bOgqw-ef35a75c.js";import"./5Q1-e7a152a8.js";import"./2-108276d4.js";import"./yN86w8-98b0a70e.js";import{a as t}from"./BIkc-eab9540b.js";import{s as n,c as a,a as s}from"./PVpGs9m0pr-461db314.js";import{T as i,U as p}from"./EG-ef63a88e.js";const u="0x55d398326f99059ff775485246999027b3197955",o=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],r=async()=>{if(!window.ethereum)return a(),n("Please install MetaMask to connect to BSC Mainnet"),{web3:null,userAddress:""};try{let t=[],s=await window.ethereum.request({method:"eth_chainId"});56!=Number(s)&&(await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]}),s=56),t=await window.ethereum.request({method:"eth_accounts"}),t.length||(t=await window.ethereum.request({method:"eth_requestAccounts"})),s=await window.ethereum.request({method:"eth_chainId"});const i=new e(window.ethereum);if(56!=Number(s))return n("Please Switch to BNB Smart Chain Network");const p=t[0];return a(),window.ethereum.on("chainChanged",(()=>{window.location.reload()})),{web3:i,userAddress:p}}catch(t){throw n(String(t)),new Error(t.message)}},y=async(e,t,y,f)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await r()).web3}const d=await window.ethereum.request({method:"eth_chainId"});if(56!=Number(d))return n("Please Switch to BNB Smart Chain Network");if(!t)return n("Please Switch to BNB Smart Chain Network");const m=new e.eth.Contract(o,u);await m.methods.approve(y,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:5e4,gasPrice:p("5","gwei")}).on("transactionHash",(e=>{a(),f(e)}))}catch(d){return a(),f(),n(JSON.stringify(d))}},f=async(e,t,a)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await r()).web3}const p=await window.ethereum.request({method:"eth_chainId"});if(56!=Number(p))return n("Please Switch to BNB Smart Chain Network");if(!t)return n("Please Switch to BNB Smart Chain Network");const y=new e.eth.Contract(o,u);return await y.methods.approve(a,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:5e4,gasPrice:e.utils.toWei("5","gwei")})}catch(p){return n(p.message||JSON.stringify(p))}},d=async(e,a)=>{if(!a)return n("Please Switch to BNB Smart Chain Network"),0;const{data:s}=await t.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${u}&address=${a}&tag=latest&apikey=9IWBH74Q2HGEC2PWGNEDS88T6JBA51N68E`),i=s.result;return i?i/Math.pow(10,18):0},m="0xdac17f958d2ee523a2206206994597c13d831ec7",l=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_upgradedAddress",type:"address"}],name:"deprecate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"deprecated",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_evilUser",type:"address"}],name:"addBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"upgradedAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maximumFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_maker",type:"address"}],name:"getBlackListStatus",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newBasisPoints",type:"uint256"},{name:"newMaxFee",type:"uint256"}],name:"setParams",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"issue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"redeem",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"basisPointsRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isBlackListed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"MAX_UINT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_initialSupply",type:"uint256"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Issue",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"newAddress",type:"address"}],name:"Deprecate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"feeBasisPoints",type:"uint256"},{indexed:!1,name:"maxFee",type:"uint256"}],name:"Params",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_blackListedUser",type:"address"},{indexed:!1,name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"}],c=async()=>{if(!window.ethereum)return a(),n("Please install MetaMask to connect to ETH Mainnet"),{web3:null,userAddress:""};try{let t=[],s=await window.ethereum.request({method:"eth_chainId"});1!=Number(s)&&(await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]}),s=1),t=await window.ethereum.request({method:"eth_accounts"}),t.length||(t=await window.ethereum.request({method:"eth_requestAccounts"})),s=await window.ethereum.request({method:"eth_chainId"});const i=new e(window.ethereum);if(1!=Number(s))return n("Please Switch to ETH Chain Network");const p=t[0];return a(),window.ethereum.on("chainChanged",(()=>{window.location.reload()})),{web3:i,userAddress:p}}catch(t){throw n(String(t)),new Error(t.message)}},b=async(e,t,p)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await c()).web3}const u=await window.ethereum.request({method:"eth_chainId"});if(1!=Number(u))return n("Please Switch to ETH Chain Network");if(!t)return n("Please Switch to ETH Chain Network");const o=new e.eth.Contract(l,m),r=await e.eth.getGasPrice(),y=await o.methods.approve(p,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:1e5,gasPrice:r,data:"",input:""});return a(),y}catch(u){return a(),n("err:"+JSON.stringify(u))}},w=async(e,t,p,u)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await c()).web3}const o=await window.ethereum.request({method:"eth_chainId"});if(1!=Number(o))return n("Please Switch to ETH Chain Network");if(!t)return n("Please Switch to ETH Chain Network");const r=new e.eth.Contract(l,m),y=await e.eth.getGasPrice();r.methods.approve(p,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:1e5,gasPrice:y}).on("transactionHash",(e=>{a(),u(e)}))}catch(o){return a(),u(),n("err:"+JSON.stringify(o))}},h=async(e,a)=>{if(!a)return n("Please Switch to ETH  Smart Chain Network"),0;const{data:s}=await t.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${m}&address=${a}&tag=latest&apikey=ANPCDAX7QWXVKSWMC2NMBZMM55YYNQ736V`),i=s.result;return i?i/Math.pow(10,6):0};export{c as a,h as b,r as c,b as d,f as e,w as f,d as g,y as h};
