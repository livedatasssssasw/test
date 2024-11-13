import{s as t}from"./oHf-6dda22ea.js";import{i}from"./DpmIa-000ab3aa.js";import"./sLRINGshA-35205e27.js";import{K as r,k as s,L as e}from"./S9aNL-65356a8c.js";class n{constructor(t){if(this.toAddress=()=>{if(this.isDirect()){const t=this._iban.slice(4),i=n._parseInt(t,36),e=r(i,40);return s(e)}throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35")},!n.isIndirect(t)&&!n.isDirect(t))throw new Error("Invalid IBAN was provided");this._iban=t}static isDirect(t){return 34===t.length||35===t.length}isDirect(){return n.isDirect(this._iban)}static isIndirect(t){return 20===t.length}isIndirect(){return n.isIndirect(this._iban)}static isValid(t){return/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(t)&&1===n._mod9710(n._iso13616Prepare(t))}isValid(){return n.isValid(this._iban)}static fromBban(t){const i=`0${(98-this._mod9710(this._iso13616Prepare(`XE00${t}`))).toString()}`.slice(-2);return new n(`XE${i}${t}`)}static createIndirect(t){return n.fromBban(`ETH${t.institution}${t.identifier}`)}static fromAddress(s){if(!i(s))throw new t(s);const a=BigInt(e(s)).toString(36),o=r(a,15);return n.fromBban(o.toUpperCase())}static toIban(t){return n.fromAddress(t).toString()}client(){return this.isIndirect()?this._iban.slice(11):""}checksum(){return this._iban.slice(2,4)}institution(){return this.isIndirect()?this._iban.slice(7,11):""}toString(){return this._iban}}n._iso13616Prepare=t=>{const i="A".charCodeAt(0),r="Z".charCodeAt(0),s=t.toUpperCase();return`${s.slice(4)}${s.slice(0,4)}`.split("").map((t=>{const s=t.charCodeAt(0);return s>=i&&s<=r?s-i+10:t})).join("")},n._parseInt=(t,i)=>[...t].reduce(((t,r)=>BigInt(parseInt(r,i))+BigInt(i)*t),BigInt(0)),n._mod9710=t=>{let i,r=t;for(;r.length>2;)i=r.slice(0,9),r=`${(parseInt(i,10)%97).toString()}${r.slice(i.length)}`;return parseInt(r,10)%97},n.toAddress=t=>new n(t).toAddress();export{n as I};
