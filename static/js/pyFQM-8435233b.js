import{c as e}from"./Q-ac472093.js";!function(e,t){if(!e.setImmediate){var n,a,s,o,c,i=1,r={},f=!1,l=e.document,u=Object.getPrototypeOf&&Object.getPrototypeOf(e);u=u&&u.setTimeout?u:e,"[object process]"==={}.toString.call(e.process)?n=function(e){process.nextTick((function(){d(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((s=new MessageChannel).port1.onmessage=function(e){d(e.data)},n=function(e){s.port2.postMessage(e)}):l&&"onreadystatechange"in l.createElement("script")?(a=l.documentElement,n=function(e){var t=l.createElement("script");t.onreadystatechange=function(){d(e),t.onreadystatechange=null,a.removeChild(t),t=null},a.appendChild(t)}):n=function(e){setTimeout(d,0,e)}:(o="setImmediate$"+Math.random()+"$",c=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(o)&&d(+t.data.slice(o.length))},e.addEventListener?e.addEventListener("message",c,!1):e.attachEvent("onmessage",c),n=function(t){e.postMessage(o+t,"*")}),u.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),a=0;a<t.length;a++)t[a]=arguments[a+1];var s={callback:e,args:t};return r[i]=s,n(i),i++},u.clearImmediate=m}function m(e){delete r[e]}function d(e){if(f)setTimeout(d,0,e);else{var n=r[e];if(n){f=!0;try{!function(e){var n=e.callback,a=e.args;switch(a.length){case 0:n();break;case 1:n(a[0]);break;case 2:n(a[0],a[1]);break;case 3:n(a[0],a[1],a[2]);break;default:n.apply(t,a)}}(n)}finally{m(e),f=!1}}}}}("undefined"==typeof self?e:self);
