import"./nUWoqrvKJH-8ac44cb6.js";import{g as n}from"./kpTd8Dck6U-0ef6d460.js";import"./PUE7Ew-682f2be9.js";var t=globalThis&&globalThis.__awaiter||function(n,t,e,o){return new(e||(e=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(t){i(t)}}function s(n){try{d(o.throw(n))}catch(t){i(t)}}function d(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}d((o=o.apply(n,t||[])).next())}))};function e(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_protocolVersion",params:[]})}))}function o(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_syncing",params:[]})}))}function r(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_coinbase",params:[]})}))}function i(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_mining",params:[]})}))}function a(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_hashrate",params:[]})}))}function s(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_gasPrice",params:[]})}))}function d(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_maxPriorityFeePerGas",params:[]})}))}function u(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_accounts",params:[]})}))}function c(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_blockNumber",params:[]})}))}function h(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["address","blockNumberOrTag"],[o,r]),e.send({method:"eth_getBalance",params:[o,r]})}))}function v(e,o,r,i){return t(this,void 0,void 0,(function*(){return n.validate(["address","hex","blockNumberOrTag"],[o,r,i]),e.send({method:"eth_getStorageAt",params:[o,r,i]})}))}function m(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["address","blockNumberOrTag"],[o,r]),e.send({method:"eth_getTransactionCount",params:[o,r]})}))}function f(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32"],[o]),e.send({method:"eth_getBlockTransactionCountByHash",params:[o]})}))}function l(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag"],[o]),e.send({method:"eth_getBlockTransactionCountByNumber",params:[o]})}))}function p(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32"],[o]),e.send({method:"eth_getUncleCountByBlockHash",params:[o]})}))}function _(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag"],[o]),e.send({method:"eth_getUncleCountByBlockNumber",params:[o]})}))}function b(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["address","blockNumberOrTag"],[o,r]),e.send({method:"eth_getCode",params:[o,r]})}))}function g(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["address","hex"],[o,r]),e.send({method:"eth_sign",params:[o,r]})}))}function y(n,e){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_signTransaction",params:[e]})}))}function T(n,e){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_sendTransaction",params:[e]})}))}function k(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["hex"],[o]),e.send({method:"eth_sendRawTransaction",params:[o]})}))}function B(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag"],[r]),e.send({method:"eth_call",params:[o,r]})}))}function x(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag"],[r]),e.send({method:"eth_estimateGas",params:[o,r]})}))}function N(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32","bool"],[o,r]),e.send({method:"eth_getBlockByHash",params:[o,r]})}))}function w(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag","bool"],[o,r]),e.send({method:"eth_getBlockByNumber",params:[o,r]})}))}function O(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32"],[o]),e.send({method:"eth_getTransactionByHash",params:[o]})}))}function A(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32","hex"],[o,r]),e.send({method:"eth_getTransactionByBlockHashAndIndex",params:[o,r]})}))}function H(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag","hex"],[o,r]),e.send({method:"eth_getTransactionByBlockNumberAndIndex",params:[o,r]})}))}function P(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32"],[o]),e.send({method:"eth_getTransactionReceipt",params:[o]})}))}function C(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["bytes32","hex"],[o,r]),e.send({method:"eth_getUncleByBlockHashAndIndex",params:[o,r]})}))}function U(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag","hex"],[o,r]),e.send({method:"eth_getUncleByBlockNumberAndIndex",params:[o,r]})}))}function I(e,o){return t(this,void 0,void 0,(function*(){return n.validate(["filter"],[o]),e.send({method:"eth_getLogs",params:[o]})}))}function R(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_getWork",params:[]})}))}function j(e,o,r,i){return t(this,void 0,void 0,(function*(){return n.validate(["bytes8","bytes32","bytes32"],[o,r,i]),e.send({method:"eth_submitWork",params:[o,r,i]})}))}function W(e,o,r,i){return t(this,void 0,void 0,(function*(){n.validate(["hex","blockNumberOrTag"],[o,r]);for(const t of i)n.validate(["number"],[t]);return e.send({method:"eth_feeHistory",params:[o,r,i]})}))}function q(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_pendingTransactions",params:[]})}))}function D(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_requestAccounts",params:[]})}))}function E(n){return t(this,void 0,void 0,(function*(){return n.send({method:"eth_chainId",params:[]})}))}function G(e,o,r,i){return t(this,void 0,void 0,(function*(){return n.validate(["address","bytes32[]","blockNumberOrTag"],[o,r,i]),e.send({method:"eth_getProof",params:[o,r,i]})}))}function K(n){return t(this,void 0,void 0,(function*(){return n.send({method:"web3_clientVersion",params:[]})}))}function L(e,o,r){return t(this,void 0,void 0,(function*(){return n.validate(["blockNumberOrTag"],[r]),e.send({method:"eth_createAccessList",params:[o,r]})}))}function V(e,o,r,i=!1){return t(this,void 0,void 0,(function*(){return n.validate(["address"],[o]),e.send({method:"eth_signTypedData"+(i?"":"_v4"),params:[o,r]})}))}var F=globalThis&&globalThis.__awaiter||function(n,t,e,o){return new(e||(e=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(t){i(t)}}function s(n){try{d(o.throw(n))}catch(t){i(t)}}function d(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}d((o=o.apply(n,t||[])).next())}))};function J(n){return F(this,void 0,void 0,(function*(){return n.send({method:"net_version",params:[]})}))}function S(n){return F(this,void 0,void 0,(function*(){return n.send({method:"net_peerCount",params:[]})}))}function z(n){return F(this,void 0,void 0,(function*(){return n.send({method:"net_listening",params:[]})}))}var M=globalThis&&globalThis.__awaiter||function(n,t,e,o){return new(e||(e=Promise))((function(r,i){function a(n){try{d(o.next(n))}catch(t){i(t)}}function s(n){try{d(o.throw(n))}catch(t){i(t)}}function d(n){var t;n.done?r(n.value):(t=n.value,t instanceof e?t:new e((function(n){n(t)}))).then(a,s)}d((o=o.apply(n,t||[])).next())}))};const Q=n=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_listAccounts",params:[]})})),X=(n,t)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_newAccount",params:[t]})})),Y=(n,t,e,o)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_unlockAccount",params:[t,e,o]})})),Z=(n,t)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_lockAccount",params:[t]})})),$=(n,t,e)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_importRawKey",params:[t,e]})})),nn=(n,t,e)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_sendTransaction",params:[t,e]})})),tn=(n,t,e)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_signTransaction",params:[t,e]})})),en=(n,t,e,o)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_sign",params:[t,e,o]})})),on=(n,t,e)=>M(void 0,void 0,void 0,(function*(){return n.send({method:"personal_ecRecover",params:[t,e]})}));export{z as $,U as A,O as B,q as C,A as D,H as E,P as F,m as G,g as H,y as I,B as J,x as K,I as L,E as M,G as N,W as O,L as P,V as Q,e as R,r as S,i as T,u as U,R as V,j as W,D as X,K as Y,J as Z,S as _,tn as a,en as b,w as c,k as d,on as e,T as f,Q as g,o as h,$ as i,a as j,s as k,Z as l,d as m,X as n,c as o,h as p,v as q,b as r,nn as s,N as t,Y as u,f as v,l as w,p as x,_ as y,C as z};
