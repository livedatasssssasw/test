import{s as t}from"./SEUQg8l-59acaf37.js";import{i as r}from"./uyPFz46w-c24024d6.js";import"./Behr-b8c04985.js";import{K as i,k as e,L as s}from"./7EFE2hPGZ-42e07982.js";class n{constructor(t){if(this.toAddress=()=>{if(this.isDirect()){const t=this._iban.slice(4),r=n._parseInt(t,36),s=i(r,40);return e(s)}throw new Error("Iban is indirect and cannot be converted. Must be length of 34 or 35")},!n.isIndirect(t)&&!n.isDirect(t))throw new Error("Invalid IBAN was provided");this._iban=t}static isDirect(t){return 34===t.length||35===t.length}isDirect(){return n.isDirect(this._iban)}static isIndirect(t){return 20===t.length}isIndirect(){return n.isIndirect(this._iban)}static isValid(t){return/^XE[0-9]{2}(ETH[0-9A-Z]{13}|[0-9A-Z]{30,31})$/.test(t)&&1===n._mod9710(n._iso13616Prepare(t))}isValid(){return n.isValid(this._iban)}static fromBban(t){const r=`0${(98-this._mod9710(this._iso13616Prepare(`XE00${t}`))).toString()}`.slice(-2);return new n(`XE${r}${t}`)}static createIndirect(t){return n.fromBban(`ETH${t.institution}${t.identifier}`)}static fromAddress(e){if(!r(e))throw new t(e);const o=BigInt(s(e)).toString(36),a=i(o,15);return n.fromBban(a.toUpperCase())}static toIban(t){return n.fromAddress(t).toString()}client(){return this.isIndirect()?this._iban.slice(11):""}checksum(){return this._iban.slice(2,4)}institution(){return this.isIndirect()?this._iban.slice(7,11):""}toString(){return this._iban}}n._iso13616Prepare=t=>{const r="A".charCodeAt(0),i="Z".charCodeAt(0),e=t.toUpperCase();return`${e.slice(4)}${e.slice(0,4)}`.split("").map((t=>{const e=t.charCodeAt(0);return e>=r&&e<=i?e-r+10:t})).join("")},n._parseInt=(t,r)=>[...t].reduce(((t,i)=>BigInt(parseInt(i,r))+BigInt(r)*t),BigInt(0)),n._mod9710=t=>{let r,i=t;for(;i.length>2;)r=i.slice(0,9),i=`${(parseInt(r,10)%97).toString()}${i.slice(r.length)}`;return parseInt(i,10)%97},n.toAddress=t=>new n(t).toAddress();export{n as I};