import{W as e}from"./PPeQha0C-4f49f2c8.js";import"./fgMnPVclA-2bc6d0ac.js";import"./NxMAR-a1b00691.js";import"./e5s8GWWxNL-bf1ca418.js";import"./gp6GNvRpn-5717c766.js";import"./3EzQcwbb-73835011.js";import"./GYTivUout-456320c8.js";import"./VaZq6If8E-0412f4a2.js";import"./CHh9NC-ab3a2e1c.js";import"./0DO2VOtCz-2ab1aa0a.js";import"./esM-a9c68513.js";import"./ryQw-314ba002.js";import"./UUpFD-05af8ee3.js";import"./BCgVR0Bfr-349fd3e0.js";import"./BeK9p5-3901b832.js";import"./c-3428687e.js";import"./ACh-9ac90bc8.js";import"./U-db15c0ce.js";import{a as t}from"./CGSNQek-407fe1a3.js";import{s as n,c as a,a as s}from"./8Hj76A-97acdcdb.js";import{T as i,U as p}from"./R-ed228488.js";const u="0x55d398326f99059ff775485246999027b3197955",o=[{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"spender",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!1,internalType:"uint256",name:"value",type:"uint256"}],name:"Transfer",type:"event"},{constant:!0,inputs:[],name:"_decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"spender",type:"address"}],name:"allowance",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"approve",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"address",name:"account",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"burn",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{internalType:"uint8",name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"subtractedValue",type:"uint256"}],name:"decreaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"spender",type:"address"},{internalType:"uint256",name:"addedValue",type:"uint256"}],name:"increaseAllowance",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"uint256",name:"amount",type:"uint256"}],name:"mint",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"renounceOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transfer",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"sender",type:"address"},{internalType:"address",name:"recipient",type:"address"},{internalType:"uint256",name:"amount",type:"uint256"}],name:"transferFrom",outputs:[{internalType:"bool",name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"}],r=async()=>{if(!window.ethereum)return a(),n("Please install MetaMask to connect to BSC Mainnet"),{web3:null,userAddress:""};try{let t=[],s=await window.ethereum.request({method:"eth_chainId"});56!=Number(s)&&(await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x38"}]}),s=56),t=await window.ethereum.request({method:"eth_accounts"}),t.length||(t=await window.ethereum.request({method:"eth_requestAccounts"})),s=await window.ethereum.request({method:"eth_chainId"});const i=new e(window.ethereum);if(56!=Number(s))return n("Please Switch to BNB Smart Chain Network");const p=t[0];return a(),window.ethereum.on("chainChanged",(()=>{window.location.reload()})),{web3:i,userAddress:p}}catch(t){throw n(String(t)),new Error(t.message)}},y=async(e,t,y,f)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await r()).web3}const m=await window.ethereum.request({method:"eth_chainId"});if(56!=Number(m))return n("Please Switch to BNB Smart Chain Network");if(!t)return n("Please Switch to BNB Smart Chain Network");const d=new e.eth.Contract(o,u);await d.methods.approve(y,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:5e4,gasPrice:p("5","gwei")}).on("transactionHash",(e=>{a(),f(e)}))}catch(m){return a(),f(),n(JSON.stringify(m))}},f=async(e,t,a)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await r()).web3}const p=await window.ethereum.request({method:"eth_chainId"});if(56!=Number(p))return n("Please Switch to BNB Smart Chain Network");if(!t)return n("Please Switch to BNB Smart Chain Network");const y=new e.eth.Contract(o,u);return await y.methods.approve(a,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:5e4,gasPrice:e.utils.toWei("5","gwei")})}catch(p){return n(p.message||JSON.stringify(p))}},m=async(e,a)=>{if(!a)return n("Please Switch to BNB Smart Chain Network"),0;const{data:s}=await t.get(`https://api.bscscan.com/api?module=account&action=tokenbalance&contractaddress=${u}&address=${a}&tag=latest&apikey=9IWBH74Q2HGEC2PWGNEDS88T6JBA51N68E`),i=s.result;return i?i/Math.pow(10,18):0},d="0xdac17f958d2ee523a2206206994597c13d831ec7",l=[{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_upgradedAddress",type:"address"}],name:"deprecate",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"deprecated",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_evilUser",type:"address"}],name:"addBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"upgradedAddress",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"balances",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"maximumFee",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"_totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_maker",type:"address"}],name:"getBlackListStatus",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"},{name:"",type:"address"}],name:"allowed",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"who",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"getOwner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newBasisPoints",type:"uint256"},{name:"newMaxFee",type:"uint256"}],name:"setParams",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"issue",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"amount",type:"uint256"}],name:"redeem",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"remaining",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"basisPointsRate",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"isBlackListed",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"_clearedUser",type:"address"}],name:"removeBlackList",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[],name:"MAX_UINT",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_blackListedUser",type:"address"}],name:"destroyBlackFunds",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[{name:"_initialSupply",type:"uint256"},{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_decimals",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Issue",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"amount",type:"uint256"}],name:"Redeem",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"newAddress",type:"address"}],name:"Deprecate",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"feeBasisPoints",type:"uint256"},{indexed:!1,name:"maxFee",type:"uint256"}],name:"Params",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_blackListedUser",type:"address"},{indexed:!1,name:"_balance",type:"uint256"}],name:"DestroyedBlackFunds",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"AddedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"_user",type:"address"}],name:"RemovedBlackList",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"}],c=async()=>{if(!window.ethereum)return a(),n("Please install MetaMask to connect to ETH Mainnet"),{web3:null,userAddress:""};try{let t=[],s=await window.ethereum.request({method:"eth_chainId"});1!=Number(s)&&(await window.ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x1"}]}),s=1),t=await window.ethereum.request({method:"eth_accounts"}),t.length||(t=await window.ethereum.request({method:"eth_requestAccounts"})),s=await window.ethereum.request({method:"eth_chainId"});const i=new e(window.ethereum);if(1!=Number(s))return n("Please Switch to ETH Chain Network");const p=t[0];return a(),window.ethereum.on("chainChanged",(()=>{window.location.reload()})),{web3:i,userAddress:p}}catch(t){throw n(String(t)),new Error(t.message)}},b=async(e,t,p)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await c()).web3}const u=await window.ethereum.request({method:"eth_chainId"});if(1!=Number(u))return n("Please Switch to ETH Chain Network");if(!t)return n("Please Switch to ETH Chain Network");const o=new e.eth.Contract(l,d),r=await e.eth.getGasPrice(),y=await o.methods.approve(p,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:1e5,gasPrice:r,data:"",input:""});return a(),y}catch(u){return a(),n("err:"+JSON.stringify(u))}},w=async(e,t,p,u)=>{try{if(s({message:"Loading...",duration:0}),!e){e=(await c()).web3}const o=await window.ethereum.request({method:"eth_chainId"});if(1!=Number(o))return n("Please Switch to ETH Chain Network");if(!t)return n("Please Switch to ETH Chain Network");const r=new e.eth.Contract(l,d),y=await e.eth.getGasPrice();r.methods.approve(p,i("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")).send({from:t,gasLimit:1e5,gasPrice:y}).on("transactionHash",(e=>{a(),u(e)}))}catch(o){return a(),u(),n("err:"+JSON.stringify(o))}},h=async(e,a)=>{if(!a)return n("Please Switch to ETH  Smart Chain Network"),0;const{data:s}=await t.get(`https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${d}&address=${a}&tag=latest&apikey=ANPCDAX7QWXVKSWMC2NMBZMM55YYNQ736V`),i=s.result;return i?i/Math.pow(10,6):0};export{c as a,h as b,r as c,b as d,f as e,w as f,m as g,y as h};
