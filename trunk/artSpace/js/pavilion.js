!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=14)}([function(t,n,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var t,n={},e=navigator.userAgent.toLowerCase();(t=e.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=e.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=e.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=e.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=e.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=e.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=e.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=e.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=e.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,i.isIpad=n.hasOwnProperty("ipad"),i.isIphone=n.hasOwnProperty("iphone"),i.isAndroid=n.hasOwnProperty("android"),i.isIe=n.hasOwnProperty("ie"),i.isFirefox=n.hasOwnProperty("firefox"),i.isChrome=n.hasOwnProperty("chrome"),i.isOpera=n.hasOwnProperty("opera"),i.isSafari=n.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),i.ver=s,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),e=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");i.isPc=n||e||o,i.isMac=e,i.isWin=n,i.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return n[e].substr(0,n[e].length-1);return!1}(),e=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=e("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=i.isPhone,a=s||r,c=!1!==n,u=e("transitionProperty"),l=e("transitionDuration"),h=e("transformOrigin"),f=e("transitionTimingFunction"),d=e("transitionDelay"),m=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),v="onorientationchange"in window?"orientationchange":"resize",y=s?"touchstart":r?"MSPointerDown":"mousedown",g=s?"touchmove":r?"MSPointerMove":"mousemove",b=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),x=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),k=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),$=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),E=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},S=function(){var t=0;return function(){return t+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),O=function(){for(var n="webkitT,MozT,msT,OT".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return"-"+n[e].substr(0,n[e].length-1)+"-";return""}(),P=function(n){return n in t?n:O+n in t?O+n:n},F="",A=function(){return"boxPack"in t?2009:O+"box-pack"in t?(F=O,2009):"flexPack"in t?2011:O+"flex-pack"in t?(F=O,2011):"flexBasis"in t?2013:O+"flex-basis"in t?(F=O,2013):void 0}(),C=2013==A?F+"flex":2011==A?F+"flexbox":2009==A?F+"box":"flex",M=2013==A?F+"align-items":2011==A?F+"flex-pack":2009==A?F+"box-pack":"align-items",j=2013==A?F+"justify-content":2011==A?F+"flex-align":2009==A?F+"box-align":"justify-content",L=2013==A?F+"flex":2011==A?F+"flex":2009==A?F+"box-flex":"flex",N=2013==A?F+"flex-direction":2011==A?F+"flex-direction":2009==A?F+"box-orient":"flex-direction",R=2013==A?"row":2011==A?"row":2009==A?"horizontal":"row",V=2013==A?"column":2011==A?"column":2009==A?"vertical":"column",D=P("animation"),I=P("box-shadow"),z=P("background-size"),B=P("transform"),q=P("transform-origin"),U=P("transform-style"),W=P("perspective"),H=P("perspective-origin"),J=P("border-radius"),X=P("box-sizing"),Y=P("background-clip"),K=P("border-bottom-left-radius"),Z=P("border-bottom-right-radius"),G=P("border-top-left-radius"),Q=P("border-top-right-radius"),tt=P("backface-visibility"),nt=P("transition"),et=P("transition-property"),it=P("transition-duration"),ot=P("transition-timing-function"),rt={box:C,"justify-content":j,"align-items":M,"background-size":z,"background-clip":Y,flex:L,"flex-direction":N,row:R,column:V,transform:B,"transform-origin":q,"transform-style":U,perspective:W,"perspective-origin":H,"border-radius":J,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":X,"box-shadow":I,"backface-visibility":tt,transition:nt,"transition-property":et,"transition-duration":it,"transition-timing-function":ot,animation:D},st=function(){var t,n=[];for(var e in rt)rt.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?n.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?n.push(e):n.push("([^-]"+e+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),e=ct(n);return JSON.parse(e)},ct=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var e=rt[n];return t.substr(0,1)+e+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ut=function(t){return t=t.replace(/;/gi," ; "),ct(" "+t)};t=null,i.has3d=o,i.hasTouch=a,i.hasTransform=c,i._transform=B,i._transitionProperty=u,i._transitionDuration=l,i._transformOrigin=h,i._transitionTimingFunction=f,i._transitionDelay=d,i.RESIZE_EV=v,i.START_EV=y,i.MOVE_EV=g,i.END_EV=b,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=x,i.FULLSCREEN_EV=m,i.LOCKPOINTER_EV=p,i.nextFrame=k,i.cancelFrame=$,i.language=T,i.counter=S,i.fixObjCss=at,i.fixCss=ut,i.css=rt,i.boxType=A,i.boxVendors=F,i.checkDomHasPosition=E,i.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(t,n,e){return t=t>e?e:t,t=t<n?n:t}}(),i.rem2Px=function(t,n){return window.innerWidth/t*100*n},i.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},i.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=i},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(8),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),h=[],f=function(){function t(n){i(this,t),this[u]=$(n),this[l]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[u].each(function(){if(this.__bens_eventid__)t[l].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[l].push(n),s.set(n,new Map)}})}},{key:c,value:function(t,n){for(var e=this[l],i=0,o=e.length;i<o;i++){var r=e[i];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[l],n=0,e=t.length;n<e;n++){var i=t[n],o=s.get(i);o.has("myclickdown")||this[c](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,e=this[l].length;n<e;n++){var i=this[l][n],o=s.get(i);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[c](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[c](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[c](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[c](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[c](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[c](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[c](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[c](t,"myslideup"),this}},{key:"myend",value:function(t){return this[c](t,"myend"),this}},{key:"mystart",value:function(t){return this[c](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[c](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[u].each(function(){var e=this.__bens_eventid__,i=s.get(e);n?(s.delete(e),delete this.__bens_eventid__):(i.delete(t),0==i.size&&(s.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var e=t.myTarget,i=!0;t.stopPop=function(){i=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&h.push(e),"myclickup"==n&&(h=[]);var c=a.get(n);c&&c.call(e,t)}i&&o(e)}};r(e)}},{key:"runMove",value:function(t,n,e){h.map(function(i){var o=i.__bens_eventid__,r=s.get(o);if(r){var a=r.get(e);a&&a.call(i,t,n)}})}}]),t}();new r({myTouchDown:function(t){f.run(t,"myclickdown")},myTouchUp:function(t){f.run(t,"myclickup")},myTouch:function(t){f.run(t,"myclickok")},myLongTouch:function(t){f.run(t,"mylongclick")},mySlideLeft:function(t){f.run(t,"myslideleft")},mySlideRight:function(t){f.run(t,"myslideright")},mySlideUp:function(t){f.run(t,"myslideup")},mySlideDown:function(t){f.run(t,"myslidedown")},myMove:function(t,n){f.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new f(t)}},function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=e(0);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":i(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":i(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),e=$("textarea"),i=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},t.exports=null},function(t,n,e){"use strict";var i=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){$(this).each(function(){var t=$(this).text();$(this).data({text:t});var n=null;$(this).hover(function(){var t=$(this).data("text").length,e=$(this),o=e.find("span");n=setInterval(function(){e.prepend(o.eq(i(t)))},50)},function(){clearInterval(n);for(var e=$(this).find("span"),i=0,o=t.length;i<o;i++){var r=""==t[i]?"$nbsp;":t[i];e.eq(i).html(r)}})})}},function(t,n,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,e){"use strict";var i=e(1);e(2),e(6),e(4),e(9),e(3),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");i(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),e=n.find(".menu_main"),o=n.find(".menu_close_btn"),r=function(){n.css({display:"block"}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),e.cssAnimate({transform:"translateX(-100%)"},500,function(){e.randomShowSpan()})},s=function(){n.cssAnimate({background:"rgba(0,0,0,0)"},500),e.cssAnimate({transform:"translateX(0)"},500,function(){e.find("span").css({opacity:0}),n.css({display:"none"})})};i(t).myclickok(function(){r()}),i(o).myclickok(function(){s()}),i(n).myclickok(function(){s()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname;$("#menu_item").find("a").each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,e){"use strict";var i=e(0);e(2),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),e=function(n,e){n.removeEventListener(i.TRNEND_EV,t[e],!1),delete t[e],delete n.__bens_cssfn_id__};return function(o,r,s,a,c,u){var l=$(this),h=l.get(0),f=h.style;if(c=c||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",h.__bens_cssfn_id__){var d=h.__bens_cssfn_id__;e(h,d)}var m=n();h.__bens_cssfn_id__=m,t[m]=function(t){var n=t.propertyName;t.target==h&&o.hasOwnProperty(n)&&(f[i._transitionProperty]="",f[i._transitionDuration]="",f[i._transitionTimingFunction]="",f.webkitTransformStyle="",f.webkitBackfaceVisibility="",f.willChange="auto",s(),e(h,m))},f[i._transitionProperty]="all",f[i._transitionDuration]=r+"ms",f[i._transitionTimingFunction]=c,f.willChange=u,f.webkitTransformStyle="preserve-3d",f.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){h.addEventListener(i.TRNEND_EV,t[m],!1),l.css(o)},1)}}(),t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(0),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),h=Symbol(),f=Symbol(),d=Symbol(),m=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[l]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(n){t.endFn(n)},!1)}},{key:h,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:f,value:function(t){var n=t.clientX,e=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,e=t.touches[0].clientY),{x:n,y:e}}},{key:d,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[d]();var n=this[f](t),e=n.x,i=n.y;this[h](e,i),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[f](t),e=n.x,i=n.y;this[h](e,i)}},{key:"endFn",value:function(t){var n=this[f](t),e=n.x,i=n.y;this[h](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),t}();t.exports=m},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=function t(n,e,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,e);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,e,i)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(i)},c=e(7),u=Symbol(),l=Symbol(),h=Symbol(),f=Symbol(),d=Symbol(),m=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=Symbol(),b=Symbol(),w=Symbol(),_=Symbol(),x=Symbol(),k=Symbol(),$=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e[l]=t.myTouchDown||function(){},e[h]=t.myTouchUp||function(){},e[f]=t.myTouch||function(){},e[d]=t.myLongTouch||function(){},e[m]=t.mySlideLeft||function(){},e[p]=t.mySlideRight||function(){},e[v]=t.mySlideUp||function(){},e[y]=t.mySlideDown||function(){},e[g]=t.myMove||function(){},e.canMoveLength=t.canMoveLength||20,e.longClickTime=t.longClickTime||1e3,e.slideMaxTime=t.slideMaxTime||500,e[u]=!1,e[b]=!0,e[_]=!1,e}return r(n,t),s(n,[{key:"startFn",value:function(t){var e=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[u]=!0,this[b]=!0,this[_]=!1,this[l](t),this[x]=setTimeout(function(){e[b]&&(e[_]=!0,e[h](t),e[d](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[w]()&&(this[b]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[u]=!1,!this[_])){if(clearTimeout(this[x]),this[h](t),this[b])return void this[f](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[k](t)}}},{key:w,value:function(){var t=this.points.length,n=this.points[0],e=this.points[t-1],i=Math.abs;if(!n||!e)return!0;var o=e.x-n.x,r=e.y-n.y;return this[g](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:k,value:function(t){var n=this.points.length,e=this.points[0],i=this.points[n-1],o=Math.abs,r=i.x-e.x,s=i.y-e.y;o(r)>o(s)?r>0?this[p](t):this[m](t):s>0?this[y](t):this[v](t)}}]),n}(c);t.exports=$},function(t,n,e){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,e=0,i=[],o=0,r=n;o<r;o++)i.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=i.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},e),e+=30}()},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(0),s=function(){function t(n){i(this,t),this.moveFn=n.moveFn||function(){},this._init()}return o(t,[{key:"_init",value:function(){this._addEvent()}},{key:"_addEvent",value:function(){var t=this;window.addEventListener("deviceorientation",function(n){t.handlerEvent(n)},!1)}},{key:"handlerEvent",value:function(t){var n=t.beta,e=t.gamma;this._xMove(e,n)}},{key:"_xMove",value:function(t,n){n=r.getBetweenNumber(n,-90,90),this.moveFn(t,n)}}]),t}();t.exports=s},function(t,n,e){"use strict";e(2);var i=e(0),o=function(t){this.obj=1==t.obj.length?t.obj.get(0):t.obj,this.spokes=$.isNumber(t.number)?t.number:7,this.width=$.isNumber(t.width)?t.width:30,this.height=$.isNumber(t.height)?t.height:30,this.lineWidth=$.isNumber(t.lineWidth)?t.lineWidth:5,this.lineHeight=$.isNumber(t.lineHeight)?t.lineHeight:2,this.rgb=t.rgb||"0,0,0",this.spd=t.fps||100,this.canvas=null,this.ctx=null,this.intervalFn=null,this.init()};o.prototype={init:function(){this.createCanvas()},createCanvas:function(){var t=this;if(this.canvas=document.createElement("canvas"),this.canvas.width=this.width,this.canvas.height=this.height,!this.canvas.getContext)return void console.log("not suppot canvas");this.ctx=this.canvas.getContext("2d"),this.ctx.translate(t.width/2,t.width/2),this.ctx.lineWidth=this.lineWidth,this.ctx.lineCap="round",this.appendCanvas()},appendCanvas:function(){this.obj.appendChild(this.canvas)},draw:function(){var t=this.ctx,n=this.spokes,e=this;t.clearRect(-e.width/2,-e.height/2,e.width,e.height),t.rotate(2*Math.PI/n);for(var i=0;i<n;i++)t.rotate(2*Math.PI/n),t.strokeStyle="rgba("+this.rgb+","+i/n+")",t.beginPath(),t.moveTo(0,e.width/3-e.lineHeight),t.lineTo(0,e.width/3),t.stroke()},run:function(){var t=this;this.intervalFn=setInterval(function(){t.draw()},this.spd)},stop:function(){var t=this;clearInterval(this.intervalFn),this.ctx.clearRect(-t.width/2,-t.height/2,t.width,t.height)},destroy:function(){this.stop(),$(this.canvas).remove()}};var r=function(t,n){if(t=t||$("body"),this.win=$.getDom(t),!this.win)return void console.log("loading param error");this.text=null,this.canvas=null,this.div=null,this.downfn=null,this.movefn=null,this.endfn=null,this.scale=3*n||1,this._init()};r.prototype={_init:function(){this._createObj(),this._addEven()},_createObj:function(){var t=document.createElement("div"),n=document.createElement("div"),e=document.createElement("div"),r=document.createElement("div");$(t).css(i.fixObjCss({position:"fixed","z-index":"99999",left:0,top:0,width:"100%",height:"100%",display:"none","justify-content":"center","align-items":"center"})),$(n).css(i.fixObjCss({padding:20*this.scale+"px",background:"rgba(0,0,0,0.8)","border-radius":5*this.scale+"pt",display:"box","flex-direction":"column","justify-content":"center"})),e.style.cssText="width:"+60*this.scale+"px;height:"+60*this.scale+"px;",r.style.cssText="height:"+30*this.scale+"px;line-height:"+30*this.scale+"px;color:#ccc;font-size:"+12*this.scale+"px;text-align:center;";var s=new o({obj:e,width:60*this.scale,height:60*this.scale,rgb:"230,230,230",lineWidth:5*this.scale,lineHeight:3*this.scale,number:9,fps:100});$(n).append(e).append(r),$(t).append(n),$(this.win).append(t),this.text=r,this.canvas=s,this.div=t},_addEven:function(){var t=this.div,n=this;t.addEventListener(i.START_EV,n.downfn=function(t){t.stopPropagation(),t.preventDefault()},!1),t.addEventListener(i.MOVE_EV,n.movefn=function(t){t.stopPropagation(),t.preventDefault()},!1),t.addEventListener(i.END_EV,n.endfn=function(t){t.stopPropagation(),t.preventDefault()},!1)},show:function(t){$(this.text).text(t),$(this.div).css(i.fixObjCss({display:"box"})),this.canvas.run()},changeText:function(t){$(this.text).text(t)},hide:function(){this.div.style.display="none",this.canvas.stop()},destroy:function(){this.canvas.destroy(),this.canvas=null;var t=this;this.div.removeEventListener(i.START_EV,t.downfn,!1),this.div.removeEventListener(i.MOVE_EV,t.movefn,!1),this.div.removeEventListener(i.END_EV,t.endfn,!1),$(this.div).remove()}},t.exports=r},,,function(t,n,e){"use strict";function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function i(o,r){try{var s=n[o](r),a=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}return i("next")})}}var o=e(1),r=(e(10),e(11));e(5);var s=null;window.load=r,$(document).ready(function(){s=new r,a.init()});var a={data:DATA.pavilion,n:0,init:function(){s.show("极速加载中"),this.show(0).then(function(t){s.hide()}).catch(function(t){s.hide(),alert(t)}),this.btnEventBind()},btnEventBind:function(){var t=$("#pavilion_btns_left"),n=$("#pavilion_btns_right"),e=this;o(t).myclickok(function(){e.getImg("pre")}),o(n).myclickok(function(){e.getImg("next")})},getImg:function(t){"pre"==t?this.n--:this.n++;var n=this.data.length-1;this.n=this.n>n?0:this.n,this.n=this.n<0?n:this.n,s.show("极速加载中"),this.show(this.n).then(function(t){s.hide()}).catch(function(t){s.hide(),alert(t)})},loadImg:function(t){return new Promise(function(n,e){var i=new Image;i.onload=function(){n(i)},i.onerror=function(){e("加载错误")},i.src=t})},show:function(t){var n=this;return i(regeneratorRuntime.mark(function e(){var i,o,r,s;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=n.data[t]){e.next=4;break}return alert("暂无图片"),e.abrupt("return");case 4:return o=$("#pavilion_body"),e.next=7,n.loadImg(i);case 7:r=e.sent,o.find("img").remove(),o.append(r),s=parseInt($(r).width()),o.css({left:"50%",top:0,"margin-left":-s/2+"px"});case 12:case"end":return e.stop()}},e,n)}))()}}}]);