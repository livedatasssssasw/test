var r,n={};
/*! crc32.js (C) 2014-present SheetJS -- http://sheetjs.com */r=function(r){r.version="1.2.2";var n=function(){for(var r=0,n=new Array(256),e=0;256!=e;++e)r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=1&(r=e)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1)?-306674912^r>>>1:r>>>1,n[e]=r;return"undefined"!=typeof Int32Array?new Int32Array(n):n}(),e=function(r){var n=0,e=0,t=0,f="undefined"!=typeof Int32Array?new Int32Array(4096):new Array(4096);for(t=0;256!=t;++t)f[t]=r[t];for(t=0;256!=t;++t)for(e=r[t],n=256+t;n<4096;n+=256)e=f[n]=e>>>8^r[255&e];var o=[];for(t=1;16!=t;++t)o[t-1]="undefined"!=typeof Int32Array?f.subarray(256*t,256*t+256):f.slice(256*t,256*t+256);return o}(n),t=e[0],f=e[1],o=e[2],a=e[3],u=e[4],i=e[5],y=e[6],c=e[7],d=e[8],A=e[9],v=e[10],h=e[11],s=e[12],l=e[13],p=e[14];r.table=n,r.bstr=function(r,e){for(var t=~e,f=0,o=r.length;f<o;)t=t>>>8^n[255&(t^r.charCodeAt(f++))];return~t},r.buf=function(r,e){for(var C=~e,I=r.length-15,b=0;b<I;)C=p[r[b++]^255&C]^l[r[b++]^C>>8&255]^s[r[b++]^C>>16&255]^h[r[b++]^C>>>24]^v[r[b++]]^A[r[b++]]^d[r[b++]]^c[r[b++]]^y[r[b++]]^i[r[b++]]^u[r[b++]]^a[r[b++]]^o[r[b++]]^f[r[b++]]^t[r[b++]]^n[r[b++]];for(I+=15;b<I;)C=C>>>8^n[255&(C^r[b++])];return~C},r.str=function(r,e){for(var t=~e,f=0,o=r.length,a=0,u=0;f<o;)(a=r.charCodeAt(f++))<128?t=t>>>8^n[255&(t^a)]:a<2048?t=(t=t>>>8^n[255&(t^(192|a>>6&31))])>>>8^n[255&(t^(128|63&a))]:a>=55296&&a<57344?(a=64+(1023&a),u=1023&r.charCodeAt(f++),t=(t=(t=(t=t>>>8^n[255&(t^(240|a>>8&7))])>>>8^n[255&(t^(128|a>>2&63))])>>>8^n[255&(t^(128|u>>6&15|(3&a)<<4))])>>>8^n[255&(t^(128|63&u))]):t=(t=(t=t>>>8^n[255&(t^(224|a>>12&15))])>>>8^n[255&(t^(128|a>>6&63))])>>>8^n[255&(t^(128|63&a))];return~t}},"undefined"==typeof DO_NOT_EXPORT_CRC?r(n):r({});export{n as c};
