!function(t){function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=13)}([function(t,n,i){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var e={};!function(){var t,n={},i=navigator.userAgent.toLowerCase();(t=i.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=i.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=i.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=i.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=i.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=i.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=i.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=i.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=i.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,e.isIpad=n.hasOwnProperty("ipad"),e.isIphone=n.hasOwnProperty("iphone"),e.isAndroid=n.hasOwnProperty("android"),e.isIe=n.hasOwnProperty("ie"),e.isFirefox=n.hasOwnProperty("firefox"),e.isChrome=n.hasOwnProperty("chrome"),e.isOpera=n.hasOwnProperty("opera"),e.isSafari=n.hasOwnProperty("safari"),e.isWeChat="micromessenger"==i.match(/MicroMessenger/i),e.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),e.ver=s,e.isPhone=e.isAndroid||e.isIpad||e.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),i=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");e.isPc=n||i||o,e.isMac=i,e.isWin=n,e.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),i=0,e=n.length;i<e;i++)if(n[i]+"ransform"in t)return n[i].substr(0,n[i].length-1);return!1}(),i=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=i("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=e.isPhone,a=s||r,c=!1!==n,u=i("transitionProperty"),h=i("transitionDuration"),l=i("transformOrigin"),f=i("transitionTimingFunction"),m=i("transitionDelay"),d=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),v="onorientationchange"in window?"orientationchange":"resize",y=s?"touchstart":r?"MSPointerDown":"mousedown",g=s?"touchmove":r?"MSPointerMove":"mousemove",b=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),k=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),E=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),S=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},$=function(){var t=0;return function(){return t+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),P=function(){for(var n="webkitT,MozT,msT,OT".split(","),i=0,e=n.length;i<e;i++)if(n[i]+"ransform"in t)return"-"+n[i].substr(0,n[i].length-1)+"-";return""}(),F=function(n){return n in t?n:P+n in t?P+n:n},O="",A=function(){return"boxPack"in t?2009:P+"box-pack"in t?(O=P,2009):"flexPack"in t?2011:P+"flex-pack"in t?(O=P,2011):"flexBasis"in t?2013:P+"flex-basis"in t?(O=P,2013):void 0}(),B=2013==A?O+"flex":2011==A?O+"flexbox":2009==A?O+"box":"flex",M=2013==A?O+"align-items":2011==A?O+"flex-pack":2009==A?O+"box-pack":"align-items",L=2013==A?O+"justify-content":2011==A?O+"flex-align":2009==A?O+"box-align":"justify-content",C=2013==A?O+"flex":2011==A?O+"flex":2009==A?O+"box-flex":"flex",D=2013==A?O+"flex-direction":2011==A?O+"flex-direction":2009==A?O+"box-orient":"flex-direction",V=2013==A?"row":2011==A?"row":2009==A?"horizontal":"row",j=2013==A?"column":2011==A?"column":2009==A?"vertical":"column",N=F("animation"),R=F("box-shadow"),z=F("background-size"),I=F("transform"),q=F("transform-origin"),U=F("transform-style"),W=F("perspective"),H=F("perspective-origin"),J=F("border-radius"),X=F("box-sizing"),Y=F("background-clip"),K=F("border-bottom-left-radius"),Z=F("border-bottom-right-radius"),G=F("border-top-left-radius"),Q=F("border-top-right-radius"),tt=F("backface-visibility"),nt=F("transition"),it=F("transition-property"),et=F("transition-duration"),ot=F("transition-timing-function"),rt={box:B,"justify-content":L,"align-items":M,"background-size":z,"background-clip":Y,flex:C,"flex-direction":D,row:V,column:j,transform:I,"transform-origin":q,"transform-style":U,perspective:W,"perspective-origin":H,"border-radius":J,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":X,"box-shadow":R,"backface-visibility":tt,transition:nt,"transition-property":it,"transition-duration":et,"transition-timing-function":ot,animation:N},st=function(){var t,n=[];for(var i in rt)rt.hasOwnProperty(i)&&("box"==i||"transition"==i||"flex"==i?n.push("([^-]"+i+"[^-])"):"row"==i||"column"==i?n.push(i):n.push("([^-]"+i+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),i=ct(n);return JSON.parse(i)},ct=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var i=rt[n];return t.substr(0,1)+i+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ut=function(t){return t=t.replace(/;/gi," ; "),ct(" "+t)};t=null,e.has3d=o,e.hasTouch=a,e.hasTransform=c,e._transform=I,e._transitionProperty=u,e._transitionDuration=h,e._transformOrigin=l,e._transitionTimingFunction=f,e._transitionDelay=m,e.RESIZE_EV=v,e.START_EV=y,e.MOVE_EV=g,e.END_EV=b,e.CANCEL_EV=w,e.TRNEND_EV=_,e.ANIEND_EV=k,e.FULLSCREEN_EV=d,e.LOCKPOINTER_EV=p,e.nextFrame=x,e.cancelFrame=E,e.language=T,e.counter=$,e.fixObjCss=at,e.fixCss=ut,e.css=rt,e.boxType=A,e.boxVendors=O,e.checkDomHasPosition=S,e.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},e.getBetweenNumber=function(t,n,i){return t=t>i?i:t,t=t<n?n:t}}(),e.rem2Px=function(t,n){return window.innerWidth/t*100*n},e.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},e.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=e},function(t,n,i){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=i(0);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":e(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":e(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),i=$("textarea"),e=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),i.each(function(){o($(this))}),e.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},t.exports=null},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),r=i(8),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),h=Symbol(),l=[],f=function(){function t(n){e(this,t),this[u]=$(n),this[h]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[u].each(function(){if(this.__bens_eventid__)t[h].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[h].push(n),s.set(n,new Map)}})}},{key:c,value:function(t,n){for(var i=this[h],e=0,o=i.length;e<o;e++){var r=i[e];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[h],n=0,i=t.length;n<i;n++){var e=t[n],o=s.get(e);o.has("myclickdown")||this[c](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,i=this[h].length;n<i;n++){var e=this[h][n],o=s.get(e);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[c](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[c](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[c](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[c](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[c](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[c](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[c](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[c](t,"myslideup"),this}},{key:"myend",value:function(t){return this[c](t,"myend"),this}},{key:"mystart",value:function(t){return this[c](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[c](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[u].each(function(){var i=this.__bens_eventid__,e=s.get(i);n?(s.delete(i),delete this.__bens_eventid__):(e.delete(t),0==e.size&&(s.delete(i),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var i=t.myTarget,e=!0;t.stopPop=function(){e=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(i){if(i&&"html"!=i.nodeName.toLowerCase()){var r=i.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&l.push(i),"myclickup"==n&&(l=[]);var c=a.get(n);c&&c.call(i,t)}e&&o(i)}};r(i)}},{key:"runMove",value:function(t,n,i){l.map(function(e){var o=e.__bens_eventid__,r=s.get(o);if(r){var a=r.get(i);a&&a.call(e,t,n)}})}}]),t}();new r({myTouchDown:function(t){f.run(t,"myclickdown")},myTouchUp:function(t){f.run(t,"myclickup")},myTouch:function(t){f.run(t,"myclickok")},myLongTouch:function(t){f.run(t,"mylongclick")},mySlideLeft:function(t){f.run(t,"myslideleft")},mySlideRight:function(t){f.run(t,"myslideright")},mySlideUp:function(t){f.run(t,"myslideup")},mySlideDown:function(t){f.run(t,"myslidedown")},myMove:function(t,n){f.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new f(t)}},function(t,n,i){"use strict";var e=i(2);i(1),i(6),i(5),i(9),i(4),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");e(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),i=n.find(".menu_main"),o=n.find(".menu_close_btn"),r=function(){n.css({display:"block"}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),i.cssAnimate({transform:"translateX(-100%)"},500,function(){i.randomShowSpan()})},s=function(){n.cssAnimate({background:"rgba(0,0,0,0)"},500),i.cssAnimate({transform:"translateX(0)"},500,function(){i.find("span").css({opacity:0}),n.css({display:"none"})})};e(t).myclickok(function(){r()}),e(o).myclickok(function(){s()}),e(n).myclickok(function(){s()}).myclickdown(function(){}).myclickup(function(){}),e($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname;$("#menu_item").find("a").each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,i){"use strict";var e=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){$(this).each(function(){var t=$(this).text();$(this).data({text:t});var n=null;$(this).hover(function(){var t=$(this).data("text").length,i=$(this),o=i.find("span");n=setInterval(function(){i.prepend(o.eq(e(t)))},50)},function(){clearInterval(n);for(var i=$(this).find("span"),e=0,o=t.length;e<o;e++){var r=""==t[e]?"$nbsp;":t[e];i.eq(e).html(r)}})})}},function(t,n,i){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,i){"use strict";var e=i(0);i(1),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),i=function(n,i){n.removeEventListener(e.TRNEND_EV,t[i],!1),delete t[i],delete n.__bens_cssfn_id__};return function(o,r,s,a,c,u){var h=$(this),l=h.get(0),f=l.style;if(c=c||"ease",o=JSON.parse(e.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",l.__bens_cssfn_id__){var m=l.__bens_cssfn_id__;i(l,m)}var d=n();l.__bens_cssfn_id__=d,t[d]=function(t){var n=t.propertyName;t.target==l&&o.hasOwnProperty(n)&&(f[e._transitionProperty]="",f[e._transitionDuration]="",f[e._transitionTimingFunction]="",f.webkitTransformStyle="",f.webkitBackfaceVisibility="",f.willChange="auto",s(),i(l,d))},f[e._transitionProperty]="all",f[e._transitionDuration]=r+"ms",f[e._transitionTimingFunction]=c,f.willChange=u,f.webkitTransformStyle="preserve-3d",f.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){l.addEventListener(e.TRNEND_EV,t[d],!1),h.css(o)},1)}}(),t.exports=null},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),r=i(0),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),h=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[h]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[h]=function(n){t.endFn(n)},!1)}},{key:l,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:f,value:function(t){var n=t.clientX,i=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,i=t.touches[0].clientY),{x:n,y:i}}},{key:m,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[m]();var n=this[f](t),i=n.x,e=n.y;this[l](i,e),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[f](t),i=n.x,e=n.y;this[l](i,e)}},{key:"endFn",value:function(t){var n=this[f](t),i=n.x,e=n.y;this[l](i,e)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[h],!1)}}]),t}();t.exports=d},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),a=function t(n,i,e){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,i);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,i,e)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(e)},c=i(7),u=Symbol(),h=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),d=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=Symbol(),b=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),x=Symbol(),E=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,n);var i=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return i[h]=t.myTouchDown||function(){},i[l]=t.myTouchUp||function(){},i[f]=t.myTouch||function(){},i[m]=t.myLongTouch||function(){},i[d]=t.mySlideLeft||function(){},i[p]=t.mySlideRight||function(){},i[v]=t.mySlideUp||function(){},i[y]=t.mySlideDown||function(){},i[g]=t.myMove||function(){},i.canMoveLength=t.canMoveLength||20,i.longClickTime=t.longClickTime||1e3,i.slideMaxTime=t.slideMaxTime||500,i[u]=!1,i[b]=!0,i[_]=!1,i}return r(n,t),s(n,[{key:"startFn",value:function(t){var i=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[u]=!0,this[b]=!0,this[_]=!1,this[h](t),this[k]=setTimeout(function(){i[b]&&(i[_]=!0,i[l](t),i[m](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[w]()&&(this[b]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[u]=!1,!this[_])){if(clearTimeout(this[k]),this[l](t),this[b])return void this[f](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[x](t)}}},{key:w,value:function(){var t=this.points.length,n=this.points[0],i=this.points[t-1],e=Math.abs;if(!n||!i)return!0;var o=i.x-n.x,r=i.y-n.y;return this[g](o,r),e(o)>this.canMoveLength||e(r)>this.canMoveLength}},{key:x,value:function(t){var n=this.points.length,i=this.points[0],e=this.points[n-1],o=Math.abs,r=e.x-i.x,s=e.y-i.y;o(r)>o(s)?r>0?this[p](t):this[d](t):s>0?this[y](t):this[v](t)}}]),n}(c);t.exports=E},function(t,n,i){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,i=0,e=[],o=0,r=n;o<r;o++)e.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=e.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},i),i+=30}()},t.exports=null},,function(t,n,i){"use strict";i(1),i(6);var e=i(0),o=i(2),r=function(t){this.win=t.win,this.body=t.body,this.imgLength=this.body.find("a").length,this.time=t.time||5e3,this.animateTime=t.animateTime||1e3,this.showPoint=!$.isBoolean(t.showPoint)||t.showPoint,this.leftBtn=t.rightBtn,this.rightBtn=t.leftBtn,this.pointBg="#fff",this.pointSelectBg="rgb(32,177,160)",this.changeStartFn=t.changeStartFn||function(){},this.changeEndFn=t.changeEndFn||function(){},this.winWidth=parseInt(this.win.width()),this.winHeight=parseInt(this.win.height()),this.page=0,this.maxPage=this.imgLength-1,this.intervalFn=null,this.points=[],this.pointBody=null,this.touchStartTime=0,this.touchPoints=[],this.leftPx=0,this.init()};r.prototype={init:function(){this.styleSet(),this.addPoint(),this.setDiv(),this.addEvent()},styleSet:function(){this.win.css({position:"relative",overflow:"hidden"}),this.body.css({position:"absolute",left:0,top:0}),this.body.find("a").css({display:"block",width:this.winWidth+"px",height:this.winHeight+"px",border:"none",overflow:"hidden",position:"relative"}),this.body.find("a").css({float:"left",display:"block"})},addPoint:function(){var t=this,n=$("<div></div>"),i=20*t.imgLength,e=this.showPoint?"block":"none";n.css({width:i+"px",height:"10px",position:"absolute",bottom:"0.2rem",left:"50%","margin-left":-i/2+"px",display:e,"z-index":9999});var o=$("<div></div>");o.css({width:"10px",height:"10px",margin:"0 5px",background:this.pointBg,"border-radius":"5px",float:"left",border:"1pt solid transparent"}).addClass("border_box");for(var r=0,s=this.imgLength;r<s;r++){var a=o.clone().attr({n:r});0==r&&a.css({background:this.pointSelectBg,"border-color":this.pointSelectBg}),n.append(a)}this.points=n.find("div"),this.pointBody=n,this.win.append(n)},setDiv:function(){this.body.stop(!0,!0),this.winWidth=parseInt(this.win.width()),this.winHeight=parseInt(this.win.height());var t=this.winWidth*this.imgLength;this.body.css({width:t+"px",height:"100%"}),this.body.find("a").css({width:this.winWidth+"px",height:"100%"})},addEvent:function(){var t=this;window.addEventListener("resize",t.resizeFn=function(){t.setDiv()},!1);var n=function(){t.imgLength<=1||(t.intervalFn=setInterval(function(){t.page++,t.animate()},t.time),t.animate())};if(e.hasTouch){var i=this.win.get(0);i.addEventListener(e.START_EV,t.startEventFn=function(n){t.body.stop(!0),clearInterval(t.intervalFn),t.leftPx=parseInt(t.body.css("left")),t.intervalFn=null,t.startEvent(n)},!1),i.addEventListener(e.MOVE_EV,t.moveEventFn=function(n){t.savePoint(n);var i=t.touchPoints[t.touchPoints.length-1],e=i.x,o=i.y,r=t.touchPoints[0],s=r.x,a=r.y,c=e-s,u=o-a;Math.abs(c)>Math.abs(u)&&(n.preventDefault(),t.moveEvent(n,c))},!1),i.addEventListener(e.END_EV,t.endEventFn=function(i){t.endEvent(i),t.intervalFn||n()},!1),n()}else this.win.hover(function(){t.body.stop(!0),clearInterval(t.intervalFn),t.intervalFn=null},function(){t.intervalFn||n()}),this.points.mouseover(function(){t.page=$(this).attr("n"),t.animate()}),n();this.leftBtn&&o(this.leftBtn).myclickok(function(){clearInterval(t.intervalFn),t.intervalFn=null,n(),t.page++,t.animate()}),this.rightBtn&&o(this.rightBtn).myclickok(function(){clearInterval(t.intervalFn),t.intervalFn=null,n(),t.page--,t.animate()})},animate:function(){this.page=this.page>this.maxPage?0:this.page,this.page=this.page<0?this.maxPage:this.page,this.points.css({background:this.pointBg,"border-color":this.pointSelectBg}),this.points.eq(this.page).css({background:this.pointSelectBg,"border-color":"#fff"}),this.body.get(0).style[e._transitionDuration]="",this.changeStartFn(this.page);var t=this;this.body.cssAnimate({left:-this.page*this.winWidth+"px"},this.animateTime,function(){t.changeEndFn(t.page)})},startEvent:function(t){this.touchPoints=[],this.touchStartTime=(new Date).getTime(),this.savePoint(t)},moveEvent:function(t,n){if(0!=this.touchStartTime){var i=this.leftPx+n;this.body.css({left:i+"px"})}},endEvent:function(){if(0==this.touchStartTime)return void this.scrollBack();if(this.touchPoints.length<2)return void this.scrollBack();var t=(new Date).getTime(),n=t-this.touchStartTime,i=this;this.touchStartTime=0;var e=this.touchPoints[this.touchPoints.length-1],o=e.x,r=e.y,s=this.touchPoints[0],a=s.x,c=s.y,u=Math.abs(a-o),h=Math.abs(c-r);n<500&&u>30&&u>h?a>o?(i.page++,i.page=i.page>i.maxPage?i.maxPage:i.page,i.animate()):(i.page--,i.page=i.page>=0?i.page:0,i.animate()):i.scrollBack()},savePoint:function(t){var n;n=e.hasTouch?t.touches[0]:t,this.touchPoints.push({x:n.pageX,y:n.pageY})},scrollBack:function(){this.animate()},destroy:function(){this.intervalFn&&clearInterval(this.intervalFn),window.removeEventListener("resize",this.resizeFn,!1),e.hasTouch?(this.win.get(0).removeEventListener(e.START_EV,this.startEventFn,!1),this.win.get(0).removeEventListener(e.MOVE_EV,this.moveEventFn,!1),this.win.get(0).removeEventListener(e.END_EV,this.endEventFn,!1)):(this.win.unbind("hover"),this.points.unbind("mouseover")),this.leftBtn&&o(this.leftBtn).unbind(!0),this.rightBtn&&o(this.rightBtn).unbind(!0),this.body.get(0).style[e._transitionDuration]="",this.body.css({left:0}),this.pointBody.remove()}},t.exports=r},,function(t,n,i){"use strict";i(3),i(1);var e=i(11),o=i(2);$(document).ready(function(){r.init()});var r={data:DATA.about,init:function(){this.bindData(),this.setBanner(),this.addSlideEvent()},bindData:function(){for(var t=$("#about_banner_body"),n=this.data.banner,i=0,e=n.length;i<e;i++){var o=$("<a></a>");o.css3({background:"url("+n[i]+") no-repeat center center","background-size":"100% 100%"}),t.append(o)}for(var r=$("#about_text"),s=this.data.text,a=0,c=s.length;a<c;a++){var u=$("<p>"+s[a]+"</p>");r.append(u)}},setBanner:function(){var t=$("#about_banner_html"),n=$("#about_banner_body"),i=parseInt(t.width()),o=588*i/881;t.css({height:o+"px"}),new e({win:t,body:n,time:5e3,animateTime:1e3,showPoint:!1})},addSlideEvent:function(){var t=$("body"),n=$("#about_body");o(t).myslideup(function(){n.cssAnimate({transform:"translateY(-100%)"},500)}).myslidedown(function(){n.cssAnimate({transform:"translateY(0)"},500)}).myclickdown(function(){}).myclickup(function(){})}}}]);