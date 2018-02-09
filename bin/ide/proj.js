!function(){"use strict";window.__&&console.error("Another instance of lean detected")}();var __={env:{},load:function(e){var t=__.onReady(e);if(__.env.supportNative)document.addEventListener("deviceready",t,!1),__.env.loaded||__.dom.link("cordova.js","js");else{if("complete"===document.readyState)return t();window.addEventListener("load",t,!1)}__.env.loaded=1},onReady:function(e){return function(t){return 2===__.env.loaded?t():(e.push(t),function(){for(var t,n=0;t=e[n];n++)t();__.env.loaded=2,e.length=0})}}([]),dummyCB:function(){},dotchain:function e(t,n){if(!n||!n.length)return t;var o=t[n.shift()];return o?e(o,n):0},querystring:function(e){return Object.keys(e).reduce(function(t,n){return t.push(encodeURIComponent(n)+"="+encodeURIComponent(e[n])),t},[]).join("&")},ajax:function(e,t,n,o,r,i){if(r=r||function(e){e&&console.error(e)},!t)return r("url not defined");n=n||{},o=o||{};var a=new XMLHttpRequest,c="POST"===(e=e.toUpperCase()),u=n.charAt?1:n instanceof FormData?3:2;if(t=encodeURI(t),c)2===u&&(n=JSON.stringify(n));else if(t+=(-1===t.indexOf("?")?"?":"&")+"appVer="+__.env.appVer||0,n){switch(t+="&",u){case 1:t+=encodeURIComponent(n);break;case 2:t+=__.querystring(n);break;case 3:return r("FormData with GET method is not supported yet")}n=null}a.open(e,t,!o.sync,o.un,o.passwd),a.timeout=o.timeout||0,a.responseType=o.responseType||"",a.onreadystatechange=function(){if(1<a.readyState){var t,c=a.status;return c>=300&&c<400&&(t=a.getResponseHeader("location"))?__.ajax(e,t,n,o,r,i):(a.onerror=void 0,r(300>c||!c?null:{error:a.statusText,code:a.status},a.readyState,a.response,i))}},a.ontimeout=a.onerror=function(e){r({error:a.statusText,code:a.status,src:e,params:arguments},a.readyState,null,i)};var s="Content-Type",d=o.headers;if(c&&!d[s]&&n)switch(u){case 1:case 2:a.setRequestHeader(s,"text/plain");break;case 3:a.setRequestHeader(s,"multipart/form-data")}for(var l in d)a.setRequestHeader(l,d[l]);return a.send(n),a},createEvent:function(e,t,n,o){var r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n||!1,o||!1,t),r},detectEvent:function(e,t){var n=document.createElement(t||"div"),o=(e="on"+e)in n||e in window;return o||(n.setAttribute(e,""),o="function"==typeof n[e],n[e]=void 0,n.removeAttribute(e)),n=void 0,o}};!function(){"use strict";var e=__.env,t=document.querySelector("meta[name=app-version]"),n="transitionend",o="webkitTransitionEnd";e.transitionEnd=__.detectEvent(n)?n:__.detectEvent(o.toLowerCase())?o:void 0,e.supportPassive=!1;try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){e.supportPassive=!0}}))}catch(e){}if(e.appVer=t?t.getAttribute("content"):"0",e.loaded=0,e.supportNative=!1,-1===document.URL.indexOf("http://")&&-1===document.URL.indexOf("https://")){var r=document.querySelector("meta[name=app-support-native]");e.supportNative=!!r&&"1"===r.getAttribute("content")}}(),function(){"use strict";__.onReady(function(){__.device=__.dotchain(window,["device"])||function(e,t){for(var n,o,r=e.userAgent,i="",a=0;n=t[a];a++)if(~(o=r.indexOf(n))){i=r.substr(o+n.length+1).split(/[ ;]+/,1)[0];break}return{model:n||"",version:i,platform:"web",manufacturer:e.vendor||"",cordova:0,uuid:Math.random().toString(36).substr(2)+Date.now().toString(36),isVirtual:!1,serial:""}}(navigator,["Trident","Edge","Chromium","Chrome","Safari","Firefox","OPR","Opera"])})}(),function(){"use strict";__.onReady(function(){var e=__.dotchain(window,["navigator","notification"]);__.dialogs=e?{alert:function(t,n,o,r){e.alert(t,r||__.dummyCB,n,o)},confirm:function(t,n,o,r){e.confirm(t,r,n,o)},prompt:function(t,n,o,r,i){e.prompt(t,i,n,o,r)},beep:function(t){e.beep(t)}}:{alert:function(e,t,n,o){setTimeout(function(){alert(e),(o||__.dummyCB)()},0)},confirm:function(e,t,n,o){setTimeout(function(){o(confirm(e)?1:2)},0)},prompt:function(e,t,n,o,r){setTimeout(function(){var t=prompt(e,o);r({buttonIndex:t?1:2,input1:t})},0)},beep:function(){console.log("beep")}}})}(),function(){"use strict";var e=document.head||document.getElementsByTagName("head")[0],t=["el","tagName","id","className","style","content"],n=function(e,t){if(e){for(;e.hasChildNodes();)n(e.lastChild);!t&&e.parentElement&&e.parentElement.removeChild(e)}},o=function(e){if(e){if(e instanceof HTMLElement)return e;var t=e.el;return t?t.charAt&&(t=document.querySelector(t)):t=document.createElement(e.tagName||"div"),a(t,e.id),c(t.classList,e.className),u(t,e),d(e.style),s(t,e.content),t}},r=function(e,t,n){n>=t.length||(e.appendChild(o(t[n++])),r(e,t,n))},a=function(e,t){t&&(e.id=t)},c=function(e,t){t&&t.length&&e.add.apply(e,Array.isArray(t)?t:t.split(" "))},u=function(e,n){if(n)for(var o,r,i=0,a=Object.keys(n);o=a[i];i++)~t.indexOf(o)||null!=(r=n[o])&&e.setAttribute(o,r)},s=function(e,t){null!=t&&(t.charAt?e.innerHTML=t:r(e,t,0))},d=function(t){if(t)for(var n,o,r=Object.keys(t),i=0;n=r[i];i++)(o=e.querySelector('style[src="'+n+'"]'))?o.dataset.rc=1+parseInt(o.dataset.rc):((o=document.createElement("style")).setAttribute("src",n),o.dataset.rc=1,o.appendChild(document.createTextNode(t[n])),e.appendChild(o))},l=function(t){if(t)for(var n,o,r,i=Object.keys(t),a=0;n=i[a];a++)(o=e.querySelector('style[src="'+n+'"]'))&&((r=o.dataset).rc=parseInt(r.rc)-1,0==r.rc&&o.parentNode.removeChild(o))};__.dom={link:function(t,n,o){var r;switch(n){case"js":return(r=document.createElement("script")).setAttribute("src",t),r.onload=o,r.onerror=o,void e.insertBefore(r,e.lastChild);case"css":return(r=document.createElement("link")).setAttribute("rel","stylesheet"),r.setAttribute("href",t),e.insertBefore(r,e.lastChild),setTimeout(o,0);default:return o()}},unlink:function(e,t){var n,o;switch(t){case"js":o=document.getElementsByTagName("script"),n="src";break;case"css":o=document.getElementsByTagName("link"),n="href";break;default:return}for(var r,a;r=o[i];i--)(a=r.getAttribute(n))&&~a.indexOf(e)&&r.parentNode.removeChild(r)},setId:a,setClasses:c,setAttributes:u,setContent:s,get:o,forget:function(e,t){n(e,!!t.el),l(t.style)},style:d,unstyle:l}}(),function(){"use strict";if(!__.detectEvent("touchstart")){var e=!__.env.supportPassive||{capture:!0,passive:!0},t="mousedown",n="mouseup",o="mousemove",r=function(e){var r;switch(e.type){case t:r="touchstart";break;case n:r="touchend";break;case o:r="touchmove";break;default:return console.error("wrong event: "+e.type)}var i=e.target,a=[{pageX:e.pageX,pageY:e.pageY,target:i}],c=__.createEvent(r,null,e.bubbles,e.cancelable);c.pageX=e.pageX,c.pageY=e.pageY,c.touches=c.changedTouches=c.targetTouches=a,c.mouseToTouch=!0,i.dispatchEvent(c)},i=function(){document.removeEventListener(t,a,e),document.removeEventListener(o,c,e),document.removeEventListener(n,u,e)},a=function(t){i(),document.addEventListener(o,c,e),document.addEventListener(n,u,e),r(t)},c=function(e){r(e)},u=function(n){i(),document.addEventListener(t,a,e),r(n)};document.addEventListener(t,a,e)}}(),function(){"use strict";__.onReady(function(){var e,t=__.dotchain(window,["sqlitePlugin"]),n=__.dotchain(window,["openDatabase"]),o=function(e){if(e)return console.error(e)},r={};t||n?(e=function(e){var n;(n=t?t.openDatabase({name:e,location:"default"}):openDatabase(e,"1.0","lean local storage emulator",52428800)).transaction(function(e){e.executeSql("CREATE TABLE IF NOT EXISTS kv (key TEXT UNIQUE NOT NULL, val TEXT);",null,null,function(e,t){console.error(t)})}),this.db=n}).prototype={key:function(e,t){this.db.readTransaction(function(n){n.executeSql("SELECT key FROM KV order by oid ASC;",null,function(n,o){var r=o.rows;if(r.length<=e)return t();t(null,r[e].key)},function(e,n){t(n)})})},getItem:function(e,t){this.db.readTransaction(function(n){n.executeSql("SELECT val FROM kv WHERE key=?;",[e],function(e,n){if(!n.rows.length)return t();t(null,n.rows[0].val)},function(e,n){t(n)})})},setItem:function(e,t,n){n=n||o,this.db.transaction(function(o){o.executeSql("INSERT OR REPLACE INTO kv (oid,key,val) VALUES ((SELECT oid FROM kv WHERE key=?), ?, ?);",[e,e,t],function(e,t){n(null,t.insertId)},function(e,t){n(t)})})},removeItem:function(e,t){t=t||o,this.db.transaction(function(n){n.executeSql("DELETE FROM kv WHERE key=?;",[e],function(e,n){t()},function(e,n){t(n)})})},clear:function(e){e=e||o,this.db.transaction(function(t){t.executeSql("DELETE FROM kv;",null,function(t,n){e()},function(t,n){e(n)})})},length:function(e){this.db.readTransaction(function(t){t.executeSql("SELECT count(*) AS len FROM KV;",null,function(t,n){e(null,n.rows[0].len)},function(t,n){e(n)})})}}:(e=function(e){this.prefix=e+"_",this.db=window.localStorage}).prototype={key:function(e,t){t(null,this.db.key(e))},getItem:function(e,t){t(null,this.db.getItem(this.prefix+e))},setItem:function(e,t,n){n=n||o;try{n(null,this.db.setItem(this.prefix+e,t))}catch(e){n(e)}},removeItem:function(e,t){(t=t||o)(null,this.db.removeItem(this.prefix+e))},clear:function(e){(e=e||o)(null,this.db.clear())},length:function(e){e(null,this.db.length)}},__.store=function(t){return t=t||"localstorage",r[t]=r[t]||new e(t)}})}(),function(){"use strict";var e,t,n=!__.env.supportPassive||{capture:!0,passive:!0},o=0,r=1,i=0,a=0,c=function(e){return[e.pageX,e.pageY]},u=function(e){o||(o=1,e.target.dispatchEvent(__.createEvent("longTap",t,!0)))};document.addEventListener("touchstart",function(n){o=0,r=1,t=e=c(n.touches[0]),i=window.setTimeout(u,2e3,n)},n),document.addEventListener("touchend",function(e){if(window.clearTimeout(i),r=0,!o){var n=Date.now();n-a<300?(e.target.dispatchEvent(__.createEvent("taps",t,!0)),a=0):(e.target.dispatchEvent(__.createEvent("tap",t,!0)),a=n)}},n),document.addEventListener("touchmove",function(n){var i=c(n.touches[0]);r&&n.target.dispatchEvent(__.createEvent("rub",[t[0],t[1],i[0],i[1]],!0)),!o&&(i[0]>e[0]+9||i[0]<e[0]-9)&&(o=1),t=i},n),document.addEventListener("touchcancel",function(e){o=1,r=0,window.clearTimeout(i)},n)}();
//# sourceMappingURL=bin/lean.min.js.map;
(function(e,r,t){var n,i,o=Date.now(),a=function(){},u=function(){arguments[arguments.length-1]()},s={run:a,inherit:a,reload:a,parse:a,define:a,import:a,export:a,env:a,ajax:a},c={},f={},l={},h={},p={},g="undefined"==typeof requestAnimationFrame?function(e){return setTimeout(e,100)}:requestAnimationFrame,d=function(e){return e.substring(e.indexOf("{")+1,e.lastIndexOf("}"))},v=function(e){if(!e)return null;var r=e.lastIndexOf(".");return-1!==r&&-1===e.indexOf("/",r)?e.substr(r):null},y=function(e,r){if(!e.length)return r();m(e.shift(),function(t){if(t)return r(t);y(e,r)})},m=function(e,r){if(c[e])return r(null,c[e]);var t=e.indexOf("/"),i=~t?l[e.slice(0,t)]:0,o=i?e.slice(t+1):e;(i=i||l["~"]||"")instanceof Function?i(o,function(t,n){if(t)return r(t);c[e]=n,r(null,n)}):n("get",i+o+(v(e)?"":".js"),null,null,function(t,n,i){if(4===n)return t?r(t):void D(e,i,r)})},b=function(e){return Object.defineProperties(Function("return arguments.callee.__proto__.apply(this,arguments)"),{name:{value:e},i:{value:o}})},k=function(e){return"function"==typeof e&&o===e.i},w=function(e,r){return e&&e!==r?(k(e)&&(e.prototype=r.prototype),e.__proto__=r,e):r},x=function(e){return k(e)?e.__proto__:e},S=function(e,r){return e?O(e,this,r):this},O=function(e,r,t){var n=x(e),i=x(r),o=typeof n,a=typeof i;switch(o){case"function":var u=n,s=n.prototype;break;case"object":if(o===a)return n.__proto__=i,n;var u=function(){return i.apply(this,arguments)},s=n;break;default:return n}switch(Object.assign(u,i,x(t)),a){case"function":return(c=u.prototype=Object.assign(Object.create(i.prototype),s)).constructor=u,(n.__super__=i.prototype).constructor=i,u;case"object":var c=u.prototype=Object.assign(Object.create(i),s);return c.constructor=u,n.__super__=i,u;default:return n}},T=function(e,r){var t=c[e];return void 0===t?r?m(e,r):c[e]=b(e):(r&&setTimeout(r,0,null,t),t)},A=function(e,r,t,n){n=n||s;var i=e?'"use strict";\n'+r+(h.live?"":"//# sourceURL="+e):r,o=function(e){return c[e]||t.push(e),c[e]};try{var u=Function("exports","require","module","define","inherit","pico",i)}catch(r){return console.error(e,r.message)}return u.call({},{},o,{},a,o,n),u},j=function(e,r,t){var n=v(e)||".js",i=p[n];switch(i&&(r=i(e,r)),n){case".js":var o,a={exports:{}},u={},s=r.call(t?{}:u,a.exports,T,a,j,function(e){return o=T(e)},M)||a.exports;return o&&(s=O(s,o)),"function"==typeof s&&(s.extend=S),u.load&&u.load(s),u.update&&(f[e]=[u.update,s]),e?c[e]=w(c[e],s):s;case".json":try{return c[e]=JSON.parse(r)}catch(r){return console.error(e,r.message)}default:return c[e]=r}},D=function(e,r,t){if(t=t||a,c[e])return t(null,c[e]);if(".js"!==(v(e)||".js"))return t(null,j(e,r));var n=[],i=A(e,r,n);e&&(c[e]=b(e)),y(n,function(r){if(r)return t(r);t(null,j(e,i))})},E=function(e){var r;for(var t in f)(r=f[t])&&r[0](r[1],e);g(E)},M=e[r]={run:function(e,r){M.ajax=n=e.ajax||n,l=e.paths||l,h=e.env||h,p=e.preprocessors||p,i=e.importRule;var t;for(var o in c)(t=p[v(o)||".js"])&&(c[o]=t(o,c[o]));(e.onLoad||u)(function(){D(e.name||null,d(r.toString()),function(e,r){if(e)return console.error(e);r&&r(),g(E)})})},reload:function(e,r,t){"function"==typeof r&&(t=r),t=t||a;var n=function(r,n){if(r)return t(r);t(null,c[e]=w(c[e],n))};delete c[e],t===r?m(e,n):D(e,r,n)},parse:D,define:j,import:function(e){if(!Array.isArray(i)||-1!==i.indexOf(e))return t(e)},export:T,env:function(e){return h[e]}};j("pico/json",function(e,r,t,n,i,o){return{parse:function(e,r){return JSON.parse(e[0],function(t,n){switch(t[0]){case"$":if(r)return JSON.parse(e[n]);case"_":return e[n];default:return n}})},stringify:function(e,r){var t=[];return t.unshift(JSON.stringify(e,function(e,n){switch(e[0]){case"$":if(r)return t.push(JSON.stringify(n));case"_":return t.push(n);default:return n}})),t},path:function(e){function r(e,r){return r<0?(e.length||0)+r:r}function t(e,r){if(e&&r&&"object"==typeof r){if(r[e])return r[e];for(var n,i,o=[],a=Object.keys(r),u=0;i=a[u];u++)(n=t(e,r[i]))&&(Array.isArray(n)?o.push.apply(o,n):o.push(n));return o.length?o:void 0}}function n(){if(!arguments.length)return i;var e=Array.isArray(i);switch(typeof arguments[0]){case"string":var o=arguments[0];switch(o){default:if(e){if(!i[0][o])break;i=i.map(function(e){return e[o]})}else{if(!i[o])break;i=i[o]}break;case"..":i=t(arguments[1],i)||i;break;case"*":if(e)break;i=Object.keys(i).map(function(e){return i[e]})}break;case"object":var a=arguments[0];if(!Array.isArray(a))break;i=a.map(function(e){return i[r(i,e)]});break;case"number":for(var u=r(i,arguments[0]),s=r(i,arguments[1])||i.length-1||0,c=arguments[2]||1,f=[],l=[],h=u;h<=s;h+=c)f.push(i[h]),l.push(h);i=f;break;case"function":var p=arguments[0];i=e?i.map(p):p(i)}return Array.isArray(i)&&(i=i.filter(function(e){return void 0!=e})),1===i.length&&(i=i.pop()),n}var i=e;return n}}}),j("pico/obj",function(){var e=["object","function"];return{extend:function r(t,n,i){var o=e.indexOf(typeof t);if(-1===o)return n;var a=e.indexOf(typeof n);if(-1===a)return t;if(1===a&&a===o)return n.prototype=t,n;var u,s,c=(i=i||{}).tidy;if(1===a||void 0===n.length)for(u in n)void 0===(s=n[u])&&c||(t[u]=r(t[u],s,i));else if(i.mergeArr){var f,l,h={};for(f=0,l=t.length;f<l;f++)void 0===(s=t[f])&&c||(h[s]=s);for(f=0,l=n.length;f<l;f++)void 0===(s=n[f])&&c||(h[s]=s);t=[];for(u in h)t.push(h[u])}else t=n;return t},extends:function(e,r,t){for(var n,i=this.extend,o=0;n=r[o];o++)e=i(e,n,t);return e},parseInts:function(e,r){for(var t=0,n=e.length;t<n;t++)e[t]=parseInt(e[t],r);return e},pluck:function(e,r){var t=[];if(e.length){var n,i,o,a,u,s={};for(o=0,a=e.length;o<a;o++)(n=e[o])&&void 0!==(i=n[r])&&(s[i]=i);for(u in s)t.push(s[u])}return t},dotchain:function e(r,t,n){if(!t||!t.length)return r;var i=r[t.shift()];return i?e(i,t):n}}}),j("pico/str",function(){Math.ceil;var e=Math.random,r=function(e,r){var t=r[0];return"["+(t.getFunctionName()||t.getTypeName()+"."+t.getMethodName())+"@"+(t.isEval()?t.getEvalOrigin():t.getFileName())+":"+t.getLineNumber()+":"+t.getColumnNumber()+"]"},t=function(e){var r=e.search("[#:%]");switch(r){case-1:case 0:return e}return[e.substring(0,r),e.substr(r)]},n=function(e,r,i,o){var a=e.indexOf("/",r);if(-1===a)return i.push(t(e.substring(r))),o(null,i);i.push(t(e.substring(r,a))),n(e,a+1,i,o)},i=function(e,r,t){if(!e.length)return t(null,r);n(e.shift(),0,[],function(n,o){if(n)return t(n);r.push(o),i(e,r,t)})},o=function(e,r,t,n,i){switch(e[0]){default:return e===r;case"%":i[e.substr(1)]=parseFloat(r);break;case":":i[e.substr(1)]=r;break;case"#":i[e.substr(1)]=t.slice(n).join("/")}return!0},a=function(e,r,t){if(e.length<r.length)return!1;for(var n,i,a=0,u=r.length;a<u;a++)if(i=r[a],n=e[a],Array.isArray(i)){if(0!==n.indexOf(i[0]))return!1;if(!o(i[1],n.substr(i[0].length),e,a,t))return!1}else if(!o(i,n,e,a,t))return!1;return e.splice(0,u),!0};return{codec:function(e,r){for(var t,n=0,i="";t=r.charCodeAt(n);n++)i+=String.fromCharCode(t^e);return i},hash:function(e){for(var r,t=0,n=0;r=e.charCodeAt(t);t++)n=(n<<3)-n+r|0;return n},rand:function(){return e().toString(36).substr(2)},pad:function(e,r,t){return this.tab(e,r,t)+e},tab:function(e,r,t){var n=r-String(e).length+1;return Array(n>0?n:0).join(t||"0")},template:function(e){for(var r,t=/<%(.+?)%>/g,n=/(^( )?(var|if|for|else|switch|case|break|{|}|;))(.*)?/g,i="var r=[];\n",o=0,a=function(e,r){return i+=r?e.match(n)?e+"\n":"r.push("+e+");\n":""!=e?'r.push("'+e.replace(/"/g,'\\"')+'");\n':"",a};r=t.exec(e);)a(e.slice(o,r.index))(r[1],!0),o=r.index+r[0].length;return a(e.substr(o,e.length-o)),new Function("d",(i+'return r.join("");').replace(/[\r\t\n]/g," "))},compileRest:function(e,r){return r=r||[],-1===e.search("[|#:%]")?r:(i(e.split("|"),[e],function(e,t){if(e)throw e;r.push(t)}),r)},execRest:function(e,r,t){for(var n,i,o,u=e.split("/"),s=0;n=r[s];s++)if(a(u,n[1],t)){for(i=2;(o=n[i])&&a(u,o,t);i++);return n[0]}return null},log:function e(){var t=Error.prepareStackTrace,n=Error.stackTraceLimit;Error.prepareStackTrace=r,Error.stackTraceLimit=1;var i=new Error;Error.captureStackTrace(i,arguments[0]||e);var o=[(new Date).toISOString(),i.stack];console.log.apply(console,o.concat(Array.prototype.slice.call(arguments,1))),Error.prepareStackTrace=t,Error.stackTraceLimit=n},error:function e(){var r=Error.stackTraceLimit;Error.stackTraceLimit=4;var t=new Error;Error.captureStackTrace(t,arguments[0]||e);var n=[(new Date).toISOString()];(n=n.concat(Array.prototype.slice.call(arguments,1))).push("\n"),console.error.apply(console,n.concat(t.stack)),Error.stackTraceLimit=r}}}),j("pico/time",function(){var e=Math.max,r=Math.min,t=Math.floor,n=Math.ceil,i=function(e,r){return(e-r)/864e5},o=function(e,r,t){var a=r?1:0,u=new Date(e.getFullYear()+(t||0),0,1),s=(7-u.getDay())%7+a,c=i(e,u);return c>s?n((c-s)/7):o(e,r,-1)},a=function(e,r,t){var n=e.split("/"),i=n[0];if("*"===i)n[0]=r;else if((i=n[0]=parseInt(i))<r||i>t)return;return 1===n.length?n.push(0):n[1]=parseInt(n[1]),n},u=function(e,r,t){if("*"===e)return 0;var n=[];list=e.split(",");for(var i,o,u,s,c,f,l,h=0;i=list[h];h++){if(!(u=i.split("-")).length)return null;if(s=a(u[0],r,t),1!==u.length)if(c=a(u[1],r,t),o=s[0],f=c[0],l=c[1]||1,o>f){for(f=t;o<=f;o+=l)n.push(o);for(o=r,f=c[0];o<=f;o+=l)n.push(o)}else for(;o<=f;o+=l)n.push(o);else if(l=s[1])for(o=s[0];o<=t;o+=l)n.push(o);else n.push(s[0])}return n.sort(function(e,r){return e-r}),n},s=function(t,n,i){if(!n)return t;if(e.apply(Math,n.concat(t))===t)return t+(i-t)+r.apply(Math,n);for(var o=0,a=n.length;o<a;o++)if(n[o]>=t)return n[o];console.error("not suppose to be here",t,n,i)},c=function(e,r,n,i,o,a,u,f,l){if(r++>1)return l(0);var h=s(e.getMinutes(),n,60),p=s(e.getHours()+t(h/60),i,24),g=e.getDate(),d=e.getMonth(),v=e.getFullYear(),y=new Date(v,d,0).getDate();if(u){var m=e.getDay()+t(p/24);g+=s(m,u,7)-m}else g=s(g+t(p/24),o,y);if(d=s(d+1+t(g/y),a,12),e.getMonth()+1!==d)return c(new Date(v,d-1),r,n,i,o,a,u,f,l);if(v=s(v+t((d-1)/12),f,0),e.getFullYear()!==v)return c(new Date(v,d-1),r,n,i,o,a,u,f,l);var b=new Date(v,(d-1)%12).getTime();return b+=864e5*(g%y-1),b+=p%24*36e5,b+=h%60*6e4,l(b)};return{parse:function(e){var r=e.split(" ");if(r.length<6)return 0;var t=u(r[0],0,59);if(null==t)return 0;var n=u(r[1],0,23);if(null==n)return 0;var i=u(r[2],1,31);if(null==i)return 0;var o=u(r[3],1,12);if(null==o)return 0;var a=u(r[4],0,6);if(null==a)return 0;var s=u(r[5],1975,2075);return null==s?0:[t,n,i,o,a,s]},nearest:function(e,r,t,n,i,o){var a=new Date,u=s(a.getFullYear(),o,0),f=s(a.getMonth()+1,n,12)-1;if(a.getFullYear()!==u||a.getMonth()!==f)a=new Date(u,f);else{var l=a.getTime();a=new Date(l+6e4)}return c(a,0,e,r,t,n,i,o,function(e){return e})},daynum:i,weeknum:o,day:function(e,r){var t=new Date,n=new Date(t.getFullYear(),t.getMonth(),t.getDate(),12,0,0)-e;return n>=0&&n<=1296e5||n<=0&&n>-1296e5?t.getDate()===e.getDate()?"Today":t>e?"Yesterday":"Tomorrow":(r=r||"en-US",t.getFullYear()===e.getFullYear()&&o(t)===o(e)?e.toLocaleDateString(r,{weekday:"long"}):e.toLocaleDateString(r,{weekday:"short",month:"short",day:"numeric"}))}}}),j("pico/web",function(e,r,t,i,o,a){function u(e){if(!e.url)return console.error("url is not set");k(this,Object.assign({cullAge:0,delimiter:["&"]},e)),this.reqId=1+f(1e3*l()),this.inbox=[],this.outbox=[],this.uploads=[],this.callbacks={},this.acks=[],this.reqs=[],this.resEndPos=0,this.head=null,this.body=[],this.currPT=h,this.serverTime=0,this.serverTimeAtClient=0}var s=r("pico/json"),c=Math.abs,f=Math.floor,l=Math.random,h=1,p=!0,g=function(e){e&&console.error(e)},d=function(e,r,t){e.append(r,t)},v=function(e,r,t){e[r]=t},y=function(e,r){r=r||g,n("get",e.url,null,null,function(t,n,i){if(4===n){if(t)return r(t);var o=parseInt(i);if(isNaN(o))return r("invalid timesync response");e.serverTime=o,e.serverTimeAtClient=Date.now(),r()}})},m=function(e,r,t,n){switch(e&&4===r&&y(n),r){case 2:n.head=null,n.currPT=h,n.resEndPos=0}if(t){var i,o=n.resEndPos,a=-1,u=n.delimiter,f=u.length,l=n.body;try{for(;;){if(-1===(a=t.indexOf(u,o)))break;switch(n.currPT){case h:n.head=JSON.parse(t.substring(o,a)),l.length=0,n.currPT=2;break;case 2:l.push(t.substring(o,a))}if((i=n.head)&&i.len===l.length){if(n.currPT=h,i.resId&&n.request("ack",{resId:i.resId}),!i.reqId)return void console.error("incomplete response header: "+JSON.stringify(i));if(n.cullAge&&n.cullAge<c(n.getServerTime()-i.date))return void console.error("invalid server time: "+JSON.stringify(i)+" "+c(n.getServerTime()-i.date));if(n.secretKey&&l.length){for(var p=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,n.secretKey+i.date),g=0,d=l.length;g<d;g++)p.update(l[g]);if(i.key!==p.finalize().toString(CryptoJS.enc.Base64))return void console.error("invalid server key: "+JSON.stringify(i))}i.len&&(i.data=s.parse(l,!0)),n.inbox.push(i),n.head=null}o=a+f}}catch(e){console.error(e)}n.resEndPos=4===r?0:o}},b=function(e,r,t,n,i){n=n||"",i=i||"";for(var o,a,u,s,c=e instanceof FormData?d:v,f=r.baseURI,l=0,h=r.elements;s=h[l];l++)if(s.hasAttribute("name"))if("FILE"===(o=s.hasAttribute("type")?s.getAttribute("type").toUpperCase():"TEXT"))for(a=0,u=s.files.length;a<u;c(e,n+s.name,s.files[a++]));else("RADIO"!==o&&"CHECKBOX"!==o||s.checked)&&c(e,n+s.name,s.value);if(t)for(var p in t)c(e,i+p,t[p]);return f=f.substring(0,f.lastIndexOf("/")+1),r.action.substr(f.length)},k=function(e,r){e.url=r.url||e.url,e.secretKey=r.secretKey||e.secretKey,e.cullAge=r.cullAge||e.cullAge,e.delimiter=r.delimiter?JSON.stringify(r.delimiter):e.delimiter},w=function(e){e.resEndPos=e.outbox.length=e.acks.length=0,e.currPT=h};return u.prototype={beat:function(){if(this.inbox.length)for(var e,r,t,i=this.inbox,o=this.callbacks;t=i.pop();)(r=o[e=t.reqId])&&(delete o[e],r(t.error,t.data));if(p&&(this.uploads.length||this.outbox.length||this.acks.length)){var a=this.uploads,u=this.outbox,s=this.acks;if(a.length)n("post",this.url,a.shift(),null,m,this);else{var c=this.reqs=s.concat(u);s.length=u.length=0,n("post",this.url,c.join(this.delimiter)+this.delimiter,null,m,this)}}},reconnect:function(e,r){k(this,e),w(this),y(this,function(e){r(e,this)})},submit:function(e,r,t){if(!("undefined"!=typeof window&&e&&e instanceof HTMLFormElement))return console.error("No HTMLFormElement submitted");var n=0;t&&(n=this.reqId++,this.callbacks[n]=t);var i=new FormData;i.append("api",b(i,e,r,"data/","cred/")),i.append("reqId",n),this.uploads.push(i)},request:function(e,r,t,n){switch(arguments.length){case 2:r instanceof Function&&(n=r,r=t=void 0);break;case 3:t instanceof Function&&(n=t,t=void 0);break;case 4:break;default:return console.error("wrong request params!")}if("undefined"!=typeof window&&r instanceof HTMLFormElement){var i={};e=b(i,r),r=i}if(!e)return console.error("Missing api,  data["+JSON.stringify(r)+"]");var o=this.acks;if("ack"!==e&&(o=this.outbox).length){var a=o.shift();-1===a.indexOf(e)&&o.unshift(a)}var u=0;n&&(u=this.reqId++,this.callbacks[u]=n);var c=r?s.stringify(r,!0):[];if(c.unshift(JSON.stringify(t)),c.length&&this.secretKey){for(var f=this.getServerTime(),l=CryptoJS.algo.HMAC.create(CryptoJS.algo.MD5,this.secretKey+f),h=0,p=c.length;h<p;h++)l.update(c[h]);c.unshift(JSON.stringify({api:e,reqId:u,len:c.length,date:f,key:l.finalize().toString(CryptoJS.enc.Base64)}))}else c.unshift(JSON.stringify({api:e,reqId:u,len:c.length}));o.push(c.join(this.delimiter))},getServerTime:function(){return this.serverTime+(Date.now()-this.serverTimeAtClient)},test:function(e){y(this,e)}},{create:function(e,r){var t=new u(e);return y(t,function(e){r&&r(e,t)}),t},ajax:n,online:function(){p=!0},offline:function(){p=!1}}})}).apply(null,"undefined"==typeof window?[module,"exports",require]:[window,"pico"]);
//# sourceMappingURL=bin/pico.min.js.map;
pico.define('po/Callback',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var ALL='*'
var Callback=function(){
	this.slots={}
}
var off=function(slot, cb, ctx){
	if (!slot) return
	for(var i=0,s; s=slot[i]; ){
		if ((!cb || cb===s[0]) && (!ctx || ctx===s[1])) slot.splice(i,1)
		else i++
	}
}

Callback.prototype={
	on:function(key, cb, ctx){
		if (!cb) return
		var slot=this.slots[key] || []
		slot.push([cb,ctx])
		this.slots[key]=slot
	},
	off:function(key, cb, ctx){
		var slots=this.slots
		if (key){
			off(slots[key], cb, ctx)
		}else{
			for (key in slots){
				off(slots[key], cb, ctx)
			}
		}
	},
	trigger:function(key){
		var i,s
		var slot=this.slots[key]
		if (slot) for(i=0; s=slot[i]; i++) s[0].apply(s[1],arguments)
		slot=this.slots[ALL]
		if (slot) for(i=0; s=slot[i]; i++) s[0].apply(s[1],arguments)
	}
}

return Callback
//# sourceURL=po/Callback
})
pico.define('po/Model',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var Callback=require('po/Callback')
var changes={
	has:function(obj, key){
		return key in obj
	},
	get:function(obj, key){
		return obj[key]
	},
	set:function(obj, key, value){
		var ov=obj[key]
		if (value === ov) return false
		obj[key]=value
		if (void 0 == ov){
			obj.callback.trigger('field.add',key,value)
		}else{
			obj.callback.trigger('field.update',key,value,ov)
		}
		return true
	},
	deleteProperty:function(obj, key){
		if (key in obj){
			obj[key] = void 0
			obj.callback.trigger('field.delete',key)
		}
	},
	ownKeys:function(obj){
		return Object.keys(obj)
	},
	defineProperty:function(obj, key, desc){
		if (desc && desc.value){
			return changes.set(obj,key,desc.value)
		}
		return false
	},
	getOwnPropertyDescriptor:function(obj,key){
		var v=obj[key]
		return v ? {
			value: v,
			writable:true,
			enumerable:true,
			configurable:true
		} : void 0 
	}
}

return function(obj){
	Object.defineProperty(obj, 'callback', {
		value: new Callback,
		writable:false,
		enumerable:false,
		configurable:true
	})
	return new Proxy(obj, changes)
}
//# sourceURL=po/Model
})
pico.define('po/Collection',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var pStr=require('pico/str')
var Model=require('po/Model')
var Callback=require('po/Callback')
var storage=window.localStorage
var dcb=__.dummyCB

var dummyNetwork = {
	ajax:function(method,route,params,cb){
		if (!route) return cb(null,params)
		pico.ajax(method,route,params,null,function(err,state,res){
			if (4!==state) return
			if (err) return cb(err)
			try{var obj=JSON.parse(res)}
			catch(ex){return cb(ex)}
			cb(null,obj)
		})
	}
}

function Collection(data,routes,name,network,opt){
	this.name=name || 'C'+pStr.rand()
	routes=this.routes=routes||{}
	opt = opt || {}
	this.idAttr=opt.idAttr||'id'
	this.network=network || dummyNetwork
	this.modelIndex=[]
	this.models={}
	this.callback=new Callback
	this.load(data)
	opt.reload && reload(this, name+':')
	this.init()
}
function populate(coll, id, obj){
	coll.modelIndex.push(id)
	coll.modelIndex.sort()
	var model = coll.models[id] = Model(obj)
	model.callback.on('*', update, [coll, id])
}
function reload(coll, name){
	for(var i=0,k,json,obj; k=storage.key(i); i++){
		if (0 !== k.indexOf(name)) continue
		json=storage.getItem(k)
		if (!json) {
			storage.removeItem(k)
			continue
		}
		try{ obj=JSON.parse(json) }
		catch(ex){
			storage.removeItem(k)
			continue
		}
		populate(coll, obj[coll.idAttr], obj)
	}
}
function load(coll,models,idx,cb){
	if (models.length <= idx) return cb()
	coll.create(models[idx++],function(err){
		if (err) return cb(err)	
		load(coll,models,idx,cb)
	})
}
function set(coll,obj){
	if (!obj) return
	var id=obj[coll.idAttr]
	var model=coll.models[id]
	if (!model){
		model = populate(coll, id, obj)
		coll.callback.trigger('add',coll,id)
	}
	storage.setItem(coll.name+':'+id, JSON.stringify(obj))
	return model
}
function get(coll,id){
	var model=coll.models[id]
	if (model) return model
	var json=storage.getItem(coll.name+':'+id)
	if (!json) return
	try { return populate(coll, id, JSON.parse(json)) }
	catch (ex) { return }
}
function update(){
	var coll = this[0]
	var id = this[1]
	var model = get(coll, id)
	coll.network.ajax('put',coll.routes.update,model,function(err,res){
		if (err) return cb(err)
		coll.callback.trigger('update',coll,id)
		storage.setItem(coll.name+':'+id, JSON.stringify(model))
	})
}
function remove(coll,id){
	if (coll.models[id]){
		var idx=coll.modelIndex.indexOf(id)
		if (~idx){
			var model=coll.models[id]
			model.callback.trigger('delete',model,id)
			coll.callback.trigger('delete',coll,id)
			coll.modelIndex.splice(idx,1)
		}
		coll.models[id] = void 0
	}

	storage.removeItem(coll.name+':'+id)
}
function clear(){
	this.modelIndex=[]
	this.models={}
	this.callback.trigger('clear')
	storage.clear()
}

Collection.prototype={
	// to be overriden
	init:function(){},
	fini:function(){},

	load:function(models,cb){
		cb=cb||dcb
		if (!models) return cb()
		load(this,models,0,cb)
	},
	create:function(model,cb){
		cb=cb||dcb
		var coll=this
		this.network.ajax('post',this.routes.create,model,function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		})
	},
	get:function(id){
		return get(this,id)
	},
	read:function(id,cb){
		var coll=this
		var model=get(this,id)
		if (model) return cb(null,model)
		var params={}
		params[this.idAttr]=id
		this.network.ajax('get',this.routes.read,params,function(err,res){
			if (err) return cb(err)
			cb(null,set(coll,res))
		})
	},
	// list(cb)
	// list([1,4,89],cb)
	// list(1,100,cb)
	list:function(list,cb){
		var coll=this
		var remained=[]
		var models=[]
		var model
		switch(arguments.length){
		case 3:
			for(var i=arguments[0],l=arguments[1]; i<=l; i++){
				model=get(this,i)
				if (model) models.push(model)
				else remained.push(i)
			}
			cb = arguments[2]
			break
		case 2:
			for(var i=0,id; id=list[i]; i++){
				model=get(this,id)
				if (model) models.push(model)
				else remained.push(id)
			}
			break
		case 1:
			cb = arguments[0]
			list = this.modelIndex
			
			for(var i=0,id; id=list[i]; i++){ models.push(get(this,id)) }
			break
		default:
			return
		}
		if (!remained.length) return cb(null,models)
		var params={}
		params[this.idAttr]=remained
		this.network.ajax('get',this.routes.list,params,function(err,res){
			if (err) return cb(err)
			if (!res || !res.length) return cb()
			for(var i=0,m; m=res[i]; i++){
				models.push(set(coll,m))
			}
			cb(null,models)
		})
	},
	remove:function(id,cb){
		cb=cb||dcb
		var coll=this
		var params={}
		params[this.idAttr]=id
		this.network.ajax('delete',this.routes.delete,params,function(err,res){
			if (err) return cb(err)
			cb(null,remove(coll,id))
		})
	},
	clear:clear
}

return Collection
//# sourceURL=po/Collection
})
pico.define('p/pHTTP',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var web=require('pico/web')
var pObj=require('pico/obj')
var Callback=require('po/Callback')
var instances = []
var count=30

this.update=function(){
	if (count--) return
	count=30
	for(var i=0, c; c=instances[i]; i++){
		c.client.beat()
	}
}

function pHTTP(env, cred){
	this.env = env
	this.cred = cred
	this.callback = new Callback
	this.reload()
	instances.push(this)
}

pHTTP.prototype = {
	reload: function(){
		this.client = web.create(this.env.get(0).get(), function(err, client){
			err && console.error(err)
		})
	},
	ajax: function(method,route,params,cb){
		if (!route) return cb(null, params)
		var c = this.client

		if (!c) return cb('client undefined')

		var cred = this.cred.get(0).get()
		var reqData = params || {}
		var onReceive = function(err, data){
			if (err) {
				callback.trigger('network.error', err)
				return cb(err)
			}
			callback.trigger('network.recv', null, route, data)
			return cb(null,data)
		}

		if (reqData.charAt){
			try {reqData=JSON.parse(reqData)}
			catch(e){return cb(err)}
		}

		if (reqData instanceof HTMLFormElement){
			route = reqData.action
			var hasFile = req.hasFile 
			for(var i=0,es=reqData.elements,e; e=es[i]; i++){
				if (e.hasAttribute('type') && 'FILE' === e.getAttribute('type').toUpperCase()){
					hasFile = true
					break
				}
			}
			if (hasFile){
				c.submit(reqData, cred, onReceive)
			}else{
				c.request(null, reqData, cred, onReceive)
			}
		}else{
			c.request(route, reqData, cred, onReceive)
		}
		callback.trigger('network.send', null, route)
	}
}

return pHTTP
//# sourceURL=p/pHTTP
})
pico.define('p/SSE',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
// TODO:
// authentication(header or cookies) with withCredentials=true
// how to get sep["&"] from pico/web?
var Callback=require('po/Callback')
var PJSON=require('pico/json')

function callbacks(self){
    return [
    function(e){
		self.dcCount=0
        self.callback.trigger(e.type)
    },
    function(e){
		self.dcCount++
        switch(e.target.readyState){
        case EventSource.CONNECTING: self.callback.trigger('connecting',self.dcCount); break
		case EventSource.OPEN:
			try{var d=JSON.parse(e.data)}
			catch(ex){console.error(ex)}
			self.callback.trigger('error',d);
			break
        case EventSource.CLOSED:
        default:
            self.callback.trigger('closed',self.dcCount);
            break
        }       
    },
	function(e){
        var data
        try{ data=PJSON.parse(e.data.split('["&"]'),true) }
        catch(exp){ data=e.data }
        self.callback.trigger(e.type, data, e.lastEventId)
    }
    ]
}

function init(self, env, params, events, autoconnect){
	self.env=env
	self.cred=cred
	self.params=params
    self.events=events
	self.callback=new Callback
    if (!autoconnect || !env) return
	
	var e = env.get(0).get()
	var c = cred.get(0).get()
    var cbList=callbacks(self)
    var s=new EventSource(
            encodeURI(e.path),
            (-1===e.path.lastIndexOf('?')?'?':'&') + __.querystring(Object.assign(params,c)),
            {withCredentials:e.withCredentials})

    s.addEventListener('open', cbList[0], false)   
    s.addEventListener('error', cbList[1], false)   
    for(var i=0,e; e=events[i]; i++){
        s.addEventListener(e,cbList[2],false)
    }
	self.sse=s
} 

function SSE(env, cred, params, events, autoconnect){
	this.dcCount=0
    init(this, env, cred, params, events, autoconnect)
}           

SSE.prototype={
    reconnect:function(params, events){
        var s=this.sse
        if (s) s.close()
		init(
			this,
			this.env,
			this.cred,
			params||this.params,
			events||this.events,
			true)
    },
    close:function(){
        var s=this.sse
        if (!s) return
        s.close()
    }
}

return SSE
//# sourceURL=p/SSE
})
pico.define('p/make',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var pObj=require('pico/obj')
var Collection=require('po/Collection')
var specMgr=require('p/specMgr')
var pHttp=require('p/pHTTP')
var SSE=require('p/SSE')

return function(name, type, rawSpec, klass, cb){
	specMgr.load(null, null, rawSpec, function(err, spec){
		if (err) return cb(err)

		switch(type){
		case 'models':
			var C = klass ? Collection.extend(klass) : Collection
			return cb(null, new C(
				specMgr.find('data',spec), 
				specMgr.find('routes',spec), 
				name,
				specMgr.find('network',spec),
				specMgr.find('options',spec)
			))
			break
		case 'phttp':
			var C = klass ? pHTTP.extend(klass) : pHTTP
			return cb(null, new C(
				specMgr.find('env',spec),
				specMgr.find('cred',spec)
			))
			break
		case 'sse':
			var C = klass ? SSE.extend(klass) : SSE
			return cb(null, new C(
				specMgr.find('env',spec),
				specMgr.find('cred',spec),
				specMgr.find('params',spec),
				specMgr.find('events',spec),
				specMgr.find('autoconnect',spec)
			))
			break
		}
	})
}
//# sourceURL=p/make
})
pico.define('p/specMgr',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var
ID=0,TYPE=1,VALUE=2,EXTRA=3,
ERR1='ref of REF not found',ERR2='record RECORD of ref of REF not found',
extOpt={mergeArr:1},
pObj=require('pico/obj'),
make=require('p/make'),
create = function(id, type, value, extra){ return Array.prototype.slice.call(arguments) },
getId = function(spec){return spec[ID]},
getType = function(spec){return spec[TYPE]},
getValue = function(spec){return spec[VALUE]},
getExtra = function(spec,idx){return spec[EXTRA+(idx||0)]},
find = function(id, list, all){ for(var i=0,o; o=list[i]; i++){ if (id === o[ID]) return all?o:o[VALUE] } },
findAll = function(cond, list, by, all){
    var arr = []
    for(var i=0,o; o=list[i]; i++){ if (cond === o[by]) arr.push(all?o:o[VALUE]) }
    return arr
},
spec2Obj=function(spec){
	var obj={}
	for(var i=0,s;s=spec[i];i++){ obj[s[ID]]=s[VALUE] }
	return obj
},
loadDeps = function(links, idx, cb, klass){
    if (!links || links.length <= idx) return cb(null, klass)
    if (links.charAt) return require(links, cb)
    require(links[idx++], function(err, mod){
        if (err) return cb(err)
        loadDeps(links, idx, cb, pObj.extend(klass || {}, mod, extOpt))
    })
},
load = function(ctx, params, spec, idx, deps, cb, userData){
    if (spec.length <= idx) return cb(null, deps, params, userData)

    var s = spec[idx++]
    var t = s[TYPE]
    var f

    switch(t){
    case 'ref': //ID[id] TYPE[ref] VALUE[orgId]
        f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, params, userData)
        deps.push(create(s[ID], f[TYPE], f[VALUE]))
        break
    case 'refs': // ID[id] TYPE[refs] VALUE[orgType]
        Array.prototype.push.apply(deps, findAll(s[VALUE], ctx, TYPE, 1))
        break
    case 'models': // ID[id] TYPE[models] VALUE[options] EXTRA[mixin]
    case 'phttp': // ID[id] TYPE[phttp] VALUE[options] EXTRA[mixin]
    case 'sse': // ID[id] TYPE[sse] VALUE[options] EXTRA[mixin]
		return loadDeps(s[EXTRA],0,function(err,klass){
			f=s[ID]
			make(f, t, s[VALUE], klass, function(err, instance){
				deps.push(create(f, t, instance))
				load(ctx, params, spec, idx, deps, cb, userData)
			})
		})
        break
	case 'model':
		f = find(s[VALUE], ctx, true)
		if (!f) return cb(ERR1.replace('REF', s[VALUE]), deps, params, userData)
		var m = f[VALUE].get(params[s[EXTRA]])
		if (!m) return cb(ERR2.replace('REF', s[VALUE]).replace('RECORD',params[s[EXTRA]]), deps, params, userData)
		deps.push(create(s[ID], t, m)) 
		break
    case 'ctrl':
    case 'view': // ID[id/path] TYPE[ctrl/view] VALUE[spec] EXTRA[path/path+mixins]
        f=s[ID]
        return loadDeps(s[EXTRA]||f, 0, function(err, klass){
            if (err) return cb(err, deps, params, userData)
            deps.push(create(f, t, s[VALUE], klass))
            load(ctx, params, spec, idx, deps, cb, userData)
        })
    case 'file': // ID[id] TYPE[file] VALUE[path]
        return require(s[VALUE], function(err, mod){
            if (err) return cb(err, deps, params, userData)
            deps.push(create(s[ID], t, mod, s[VALUE]))
            load(ctx, params, spec, idx, deps, cb, userData)
        })
    case 'param': // ID[id] TYPE[param] VALUE[index]
        deps.push(create(s[ID], t, params[s[VALUE]]))
        break
    case 'time':
    case 'date':
    case 'datetime': // ID[id] TYPE[date/datetime] VALUE[unixtime/time in string]
        deps.push(create(s[ID], t, new Date(s[VALUE])))
        break
	case 'int': // ID[id] TYPE[int] VALUE[number or number in string]
		deps.push(create(s[ID], t, parseInt(s[VALUE])))
		break
    default:
        deps.push(create(s[ID], t, s[VALUE]))
        break
    }
    load(ctx, params, spec, idx, deps, cb, userData)
},
// need to get original spec, the one before spec.load, no way to diff ref and models
unload = function(rawSpec, spec){
    if (!spec || !spec.length) return
    var j,s
    for(var i=0,r; r=rawSpec[i]; i++){
        switch(r[TYPE]){
        case 'models':
        case 'stream':
            for(j=0; s=spec[j]; j++){
                if (r[ID] === s[ID]) {
                    switch(s[TYPE]){
                    case 'models': s[VALUE].reset(); break
                    case 'stream': s[VALUE].close(); break
                    }
                }
            }
            break
        }
    }
    for(j=0; s=spec[j]; j++){
		switch(s[TYPE]){
		case 'worker': s[VALUE].close(); break
		}
        delete s[VALUE]
    }
    spec.length = 0
}

return {
    load:function(host, params, spec, cb, userData){
        if (!spec) return cb(null, [], params, userData)
        load(host?host.spec||[]:[], params, spec, 0, [], cb, userData)
    },
    unload:unload,
	find:find,
    findAllById: function(cond, list, all){ return findAll(cond, list, ID, all) },
    findAllByType:function(cond, list, all){ return findAll(cond, list, TYPE, all) },
	spec2Obj:spec2Obj,
    create:create,
    getId:getId,
    getType:getType,
    getValue:getValue,
    getExtra:getExtra,
	getViewOptions:function(spec){
		var opt=find('options',spec)
		if (!opt || !opt.els) return opt
		var paneId=find('paneId',spec)||0
		opt.el=opt.els[paneId]
		return opt
	}
}
//# sourceURL=p/specMgr
})
pico.define('po/Module',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var pStr=require('pico/str')
var Callback=require('po/Callback')
var INVALID_NAME=/[^a-zA-Z0-9 -]/g
function createListener(des){
	return function (e){
		var devts=des[e.type]
		if (!devts || !devts.length) return
		for(var i=0,d,target,query; d=devts[i]; i++){
			;(target=e.target) && target.closest && (query=d[2]) && (target=target.closest(query))
			target && d[1].call(d[0],e,target)
			target = void 0
			if (e.cancelBubble) break
		}
	}
}
var globalEvents={}
var onGlobalEvent=createListener(globalEvents)
function listen(self,el,des,onEvent,action,query,cb){
	var devts=des[action]=des[action]||[]
	devts.push([self,cb,query])
	el.addEventListener(action,onEvent,{capture:true})
}
function unlisten(self,el,des,onEvent){
	var keys=Object.keys(des)
	var list,i,l
	for(var j=0,k; k=keys[j]; j++){
		list=des[k]
		for(i=0; l=list[i];){
			if (self===l[0]) list.splice(i,1)
			else i++
		}
		if (!list.length){
			el.removeEventListener(k,onEvent)
			delete des[k]
		}
	}
}
function delegate(evts){
	var el=this.el
	evts=evts||this.events
	if (!el || !evts) return
	var des=this.domEvents
	var sidx,action
	for(var evt in evts){
		sidx=evt.indexOf(' ')
		if (-1===sidx) sidx=evt.length
		action=evt.substr(0,sidx)
		if (!action) continue
		if (97	<= action.charCodeAt())
			listen(this,el,des,this.onEvent,action,evt.substr(sidx+1),evts[evt])
		else
			listen(this,window,globalEvents,onGlobalEvent,action.toLowerCase(),evt.substr(sidx+1),evts[evt])
	}
}
function undelegate(){
	unlisten(this,this.el,this.domEvents,this.onEvent)
	unlisten(this,window,globalEvents,onGlobalEvent)
}
function start(opt){
	this.domEvents={}
	this.onEvent=createListener(this.domEvents)
	this.el=this._el=__.dom.get(opt)
	delegate.call(this)
	this._opt=opt
}
function stop(){
	this._removed = 1
	this.callback.off()
	if (this._el) {
		undelegate.call(this)
		__.dom.forget(this._el, this._opt)
		this.domEvents = this.onEvent = this._el = this.el = this._opt=void 0
	}
}
function Module(name){
	this.id='M'+pStr.rand()
	this.name=(name && name.toString().replace(INVALID_NAME,'-'))||this.id
	this.callback=new Callback
}

// options: el,id,className,tagName,attributes
Module.prototype={
	// to be overriden
	start:start,
	stop:stop,

	setElement:function(el){
		undelegate.call(this)
		this.el=el
		delegate.call(this)
	},


	delegateEvents:function(evt){
		!evt && undelegate.call(this)
		delegate.call(this, evt)
	},
	undelegateEvents:undelegate
}

return Module
//# sourceURL=po/Module
})
pico.define('p/sigslot',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var specMgr=require('p/specMgr')
var evts=[]
var middlewares=[]

function addMW(arr){
	for(var i=0,a; a=arr[i]; i++){
		middlewares.push(specMgr.getValue(a))
	}
}
function applyMW(mws,evt,args,cb){
	if (!mws.length) return cb(evt,args)
	var mw=mws.shift()
	var next=function(evt,args){ 
		if (!evt) return cb(evt,args)
		applyMW(mws,evt,args,cb)
	}
	if (mw instanceof Function) mw(evt,args,next)
	else if (mw.run) mw.run(evt,args,next)
	else applyMW(mws,evt,args,cb)
}
function sigslot(self, def){
    var signals = {}
    
    ;(self.signals||[]).concat(def||[]).forEach(function(evt){
        var sender = this
        signals[evt] = function(){
            return {
                args: Array.prototype.slice.call(arguments),
                sender: sender,
                evt: evt,
				mws:[],
                queue: false,
				run:run,
                send: proc,
                sendNow: procNow
            }
        }
    }, self)

    self.callback.on('*', recv, self)
        
    return signals
}
function run(mw){
	if (mw instanceof Function)this.mws.push(mw)
	else if (mw.length) Array.prototype.push.apply(this.mws,mw)
	return this
}
function proc(a, next){
	var self=this
	applyMW(this.mws.concat(middlewares),this.evt,this.args,function(evt,args){
		if (!evt) return console.warn(self.evt,'signal aborted',args)
		self.evt=evt
		self.args=args
		;(next || send).call(self,a)
	})
}
function procNow(a){
	proc.call(this, a, dispatch)
}
function send(a, from){
	if (this.sender._removed) return
    this.queue=true
    evts.push([this, a, from||this.sender])
}      
function recv(evt, from, params){
    var func = this.slots[evt]
    var forward = true 
                
    if (func) forward = func.apply(this, [from, params.sender].concat(params.args))
	if (from===this) return // prevent trigger twice from extra 'from'
    if (forward) (params.queue?send:dispatch).call(params, [from,this], this)
}
function dispatch(a, from){
	if (this.sender._removed) return
    from=from||this.sender

    var isArr=Array.isArray(a)
    if (!isArr && a) return a.callback.trigger(this.evt, from, this)

    var host = from.host
    var modules = from.modules.concat(host ? [host,from] : [from]) //extra 'from' for mixin

    if (isArr){
        for(var i=0,m; m=modules[i]; i++) if (-1 === a.indexOf(m)) m.callback.trigger(this.evt, from, this);
    }else{
        for(var i=0,m; m=modules[i]; i++) m.callback.trigger(this.evt, from, this);
    }
}

this.update= function(){
	for(var i=0,l=evts.length,e; i<l; i++){
        e=evts.shift()
        dispatch.call(e[0], e[1], e[2])
    }
}

return {
	create:sigslot,
	addMiddleware:addMW
}
//# sourceURL=p/sigslot
})
pico.define('p/Ctrl',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var STD_SIGNALS=['moduleAdded']
var REFS='refs'
var Module=inherit('po/Module')
var specMgr = require('p/specMgr')
var sigslot= require('p/sigslot')

function refs(id,spec,rawSpec){
    var
    ret={},
    i,s,t
    for(i=0; s=rawSpec[i]; i++){
        if(REFS===s[TYPE] && id===s[ID]){
            t=s[VALUE]
            break
        }
    }
    if (!t) return ret
    for(i=0; s=spec[i]; i++){
        if(t===s[TYPE]){ ret[s[EXTRA]||s[ID]]=s[VALUE] }
    }
    return ret
}

function specLoaded(err, spec, params, userData){
	console.log('Ctrl.specLoaded',arguments)
	var self = userData[0]
	var host = self.host

	host.modules && host.modules.push(self)

	self.initialize(spec, params)

	var _el = self._el
	if (_el){
		host.el && !_el.parentElement && host.el.appendChild(_el)
		self.el = self.render()
	}

	var chains = userData[1]

	if (!chains) return
	if (2 === chains.length) {
		var cb = chains[0]
		return cb && cb()
	}
	host.spawn(chains.shift(), params, chains[chains.length-1], chains)
}

function Ctrl(name, specRaw, params, host, chains){
	console.log('Ctrl',arguments)
	Module.call(this, name)

	this._specRaw = specRaw
	this.host = host
	this.modules = []
	this.super = Ctrl.prototype
    this.signals = sigslot.create(this, STD_SIGNALS)

	host && specMgr.load(host, params||[], specRaw, specLoaded, [this, chains])
}

Ctrl.prototype = {
	initialize: function(spec, params, cb){
	    console.log('Ctrl.initialize',arguments)
		this.spec = spec

		var deps = {}
		var d = this.deps || {}

		for(var i=0,keys=Object.keys(d),s,k,v; k=keys[i]; i++){
			v=d[k]
			v=Array.isArray(v) ? v : [v]
            switch(v[0]){
            case REFS:
                deps[k]=refs(k,spec,self._specRaw)
                break
			case 'ctrl':
			case 'view':
                deps[k]=specMgr.find(k, spec, true)
				break
            default:
                s=specMgr.findAllById(k, spec)
                if (1 === s.length){ deps[k]=s[0] }
                else if (!s.length){ deps[k]=v[1] }
                else{ deps[k] = s }
                break
            }
		}
		this.deps = deps

		this.create(deps, params, cb)
	},
	create: function(deps, params, cb){
		console.log('Ctrl.create',arguments)
		this.spawnBySpec(this.spec, params, [], cb)
	},
	remove: function(){
		console.log('Ctrl.remove',arguments)
		var ms = this.modules
		for (var i=0,m; m=ms[i]; i++){
			m.remove()
		}
		ms.length = 0
		this.deps = this.spec = this._specRaw = void 0
	},
	spawn: function(Mod, params, extraSpec, chains){
		console.log('Ctrl.spawn',arguments)
		if (!Mod || !Mod.length) return

		return new (Ctrl.extend(specMgr.getExtra(Mod)))(
			specMgr.getId(Mod),
			specMgr.getValue(Mod).concat(extraSpec||[]),
			params,
			this,
			chains instanceof Function ? [chains, extraSpec] : chains
		)
	},
	spawnBySpec: function(spec, params, extraSpec, cb, list){
		console.log('Ctrl.spawnBySpec',arguments)
		list = (list || []).concat(specMgr.findAllByType('ctrl', spec, true))
		if (!list.length) return  cb && cb()
		list.push(cb, extraSpec)
		return this.spawn(list.shift(), params, extraSpec, list)
	},
	slots: {
	}
}

return Ctrl
//# sourceURL=p/Ctrl
})
pico.define('p/View',function anonymous(exports,require,module,define,inherit,pico
/*``*/) {
"use strict";
var Ctrl = inherit('p/Ctrl')
var specMgr = require('p/specMgr')

function style(csss){
	if (!csss) return csss
	var obj = {}
	for (var i = 0, css; css = csss[i]; i++){
		obj[specMgr.getExtra(css)] = specMgr.getValue(css)	
	}
	return obj
}

function View(name, specRaw, params, host, chains){
	console.log('View',arguments)

    Ctrl.apply(this, arguments)

	this.super = View.prototype
}

View.prototype = {
	initialize: function(spec, params, cb){
		var opt = specMgr.getViewOptions(spec)
		// view must contain an options
		if (!opt){
			opt = {}
			spec.push(['options','map',opt])
		}
		// override content with html spec if any
		opt.content = specMgr.find('html',spec) || opt.content

		var css = specMgr.findAllById('css',spec,true)
		opt.style = style(css)

		this.start(opt)

		Ctrl.prototype.initialize.apply(this, arguments)
	},
	remove: function(){
		console.log('View.remove',arguments)
        Ctrl.prototype.remove.call(this)
		this.stop()
	},
	render: function(){
		console.log(this.name,'.render',arguments)
		return this.el
	},
	spawn: function(Mod, params, extraSpec, chains){
		console.log('View.spawn',arguments)
		if (!Mod || !Mod.length) return

        if ('ctrl' === specMgr.getType(Mod)) return Ctrl.prototype.spawn.apply(this, arguments)

		return new (View.extend(specMgr.getExtra(Mod)))(
			specMgr.getId(Mod),
			specMgr.getValue(Mod).concat(extraSpec||[]),
			params,
			this,
			chains instanceof Function ? [chains, extraSpec] : chains
		)
	},
	spawnBySpec: function(spec, params, extraSpec, cb){
		console.log('View.spawnBySpec',arguments)
		Ctrl.prototype.spawnBySpec.call(
            this,
            spec,
            params,
            extraSpec,
            cb,
            specMgr.findAllByType('view', spec, true)
        )
	}
}

return View
//# sourceURL=p/View
})
pico.define('cfg/proj.json','[["Playground","view",[["options","map",{"el":".__"}],["css","file","Playground.css"],["repos","models",[]],["Github","ctrl",[["repos","ref","repos"]]],["Recreation","view",[["options","map",{"className":"recreation","draggable":"false"}],["html","file","Recreation.html"],["HeaderBar","view",[["options","map",{"className":"headerBar"}],["html","file","HeaderBar.html"],["css","file","HeaderBar.css"]]],["Container","view",[["options","map",{"className":"container"}],["css","file","Container.css"],["Project","view",[["options","map",{"className":"project"}],["html","file","Project.html"],["css","file","Project.css"]]],["Explorer","view",[["options","map",{"className":"explorer"}],["html","file","Explorer.html"],["css","file","Explorer.css"]]],["Editor","view",[["options","map",{"className":"editor"}],["html","file","Editor.html"],["css","file","Editor.css"]]],["Preview","view",[["options","map",{"className":"preview"}],["html","file","Preview.html"],["css","file","Preview.css"]]]]]]]]]]')

pico.run({
    name: 'main',
    ajax: __.ajax,
    onLoad: __.load,
    env:{
        live:false,
		dataset:(function(el){ if (el) return el.dataset })(document.getElementById('picoEnv'))
    },
    preprocessors:{
        '.asp':function(url,asp){ return pico.export('pico/str').template(asp) }
    },
    paths:{
        '~': './mod/',
        root: './',
        cfg: './cfg/',
		p: './lib/pico/',
		po: './lib/pojs/'
    }
},function(){
    var specMgr= require('p/specMgr')
    var View= require('p/View')
    var project = require('cfg/proj.json')

    return function(){
		specMgr.load(null, null, project, function(err, spec){
			if (err) return console.error(err)
			View.prototype.spawnBySpec(spec)
		})
    }
})

