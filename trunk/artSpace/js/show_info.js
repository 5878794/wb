!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=22)}([function(t,n,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var t,n={},e=navigator.userAgent.toLowerCase();(t=e.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=e.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=e.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=e.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=e.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=e.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=e.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=e.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=e.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,i.isIpad=n.hasOwnProperty("ipad"),i.isIphone=n.hasOwnProperty("iphone"),i.isAndroid=n.hasOwnProperty("android"),i.isIe=n.hasOwnProperty("ie"),i.isFirefox=n.hasOwnProperty("firefox"),i.isChrome=n.hasOwnProperty("chrome"),i.isOpera=n.hasOwnProperty("opera"),i.isSafari=n.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,u=o.length;a<u&&!(a>=2);a++)s.push(o[a]);s=s.join("."),i.ver=s,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),e=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");i.isPc=n||e||o,i.isMac=e,i.isWin=n,i.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return n[e].substr(0,n[e].length-1);return!1}(),e=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=e("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=i.isPhone,a=s||r,u=!1!==n,c=e("transitionProperty"),l=e("transitionDuration"),f=e("transformOrigin"),m=e("transitionTimingFunction"),h=e("transitionDelay"),d=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),y="onorientationchange"in window?"orientationchange":"resize",v=s?"touchstart":r?"MSPointerDown":"mousedown",b=s?"touchmove":r?"MSPointerMove":"mousemove",g=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),k=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),$=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),S=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},E=function(){var t=0;return function(){return t+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),O=function(){for(var n="webkitT,MozT,msT,OT".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return"-"+n[e].substr(0,n[e].length-1)+"-";return""}(),A=function(n){return n in t?n:O+n in t?O+n:n},P="",F=function(){return"boxPack"in t?2009:O+"box-pack"in t?(P=O,2009):"flexPack"in t?2011:O+"flex-pack"in t?(P=O,2011):"flexBasis"in t?2013:O+"flex-basis"in t?(P=O,2013):void 0}(),M=2013==F?P+"flex":2011==F?P+"flexbox":2009==F?P+"box":"flex",C=2013==F?P+"align-items":2011==F?P+"flex-pack":2009==F?P+"box-pack":"align-items",L=2013==F?P+"justify-content":2011==F?P+"flex-align":2009==F?P+"box-align":"justify-content",j=2013==F?P+"flex":2011==F?P+"flex":2009==F?P+"box-flex":"flex",D=2013==F?P+"flex-direction":2011==F?P+"flex-direction":2009==F?P+"box-orient":"flex-direction",R=2013==F?"row":2011==F?"row":2009==F?"horizontal":"row",N=2013==F?"column":2011==F?"column":2009==F?"vertical":"column",V=A("animation"),z=A("box-shadow"),B=A("background-size"),q=A("transform"),I=A("transform-origin"),U=A("transform-style"),J=A("perspective"),W=A("perspective-origin"),X=A("border-radius"),H=A("box-sizing"),Y=A("background-clip"),K=A("border-bottom-left-radius"),Z=A("border-bottom-right-radius"),G=A("border-top-left-radius"),Q=A("border-top-right-radius"),tt=A("backface-visibility"),nt=A("transition"),et=A("transition-property"),it=A("transition-duration"),ot=A("transition-timing-function"),rt={box:M,"justify-content":L,"align-items":C,"background-size":B,"background-clip":Y,flex:j,"flex-direction":D,row:R,column:N,transform:q,"transform-origin":I,"transform-style":U,perspective:J,"perspective-origin":W,"border-radius":X,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":H,"box-shadow":z,"backface-visibility":tt,transition:nt,"transition-property":et,"transition-duration":it,"transition-timing-function":ot,animation:V},st=function(){var t,n=[];for(var e in rt)rt.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?n.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?n.push(e):n.push("([^-]"+e+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),e=ut(n);return JSON.parse(e)},ut=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var e=rt[n];return t.substr(0,1)+e+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ct=function(t){return t=t.replace(/;/gi," ; "),ut(" "+t)};t=null,i.has3d=o,i.hasTouch=a,i.hasTransform=u,i._transform=q,i._transitionProperty=c,i._transitionDuration=l,i._transformOrigin=f,i._transitionTimingFunction=m,i._transitionDelay=h,i.RESIZE_EV=y,i.START_EV=v,i.MOVE_EV=b,i.END_EV=g,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=k,i.FULLSCREEN_EV=d,i.LOCKPOINTER_EV=p,i.nextFrame=x,i.cancelFrame=$,i.language=T,i.counter=E,i.fixObjCss=at,i.fixCss=ct,i.css=rt,i.boxType=F,i.boxVendors=P,i.checkDomHasPosition=S,i.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(t,n,e){return t=t>e?e:t,t=t<n?n:t}}(),i.rem2Px=function(t,n){return window.innerWidth/t*100*n},i.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},i.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=i},function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=e(0);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":i(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":i(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),e=$("textarea"),i=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),u=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){u($(this))}),s.each(function(){u($(this))}),a.each(function(){u($(this))})}},t.exports=null},function(t,n,e){"use strict";var i=e(3);e(1),e(4),e(6),e(9),e(5),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");i(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),e=n.find(".menu_main"),o=n.find(".menu_close_btn"),r=function(){n.css({display:"block"}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),e.cssAnimate({transform:"translateX(-100%)"},500,function(){e.randomShowSpan()})},s=function(){n.cssAnimate({background:"rgba(0,0,0,0)"},500),e.cssAnimate({transform:"translateX(0)"},500,function(){e.find("span").css({opacity:0}),n.css({display:"none"})})};i(t).myclickok(function(){r()}),i(o).myclickok(function(){s()}),i(n).myclickok(function(){s()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname;$("#menu_item").find("a").each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(8),s=new Map,a=Symbol(),u=Symbol(),c=Symbol(),l=Symbol(),f=[],m=function(){function t(n){i(this,t),this[c]=$(n),this[l]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[c].each(function(){if(this.__bens_eventid__)t[l].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[l].push(n),s.set(n,new Map)}})}},{key:u,value:function(t,n){for(var e=this[l],i=0,o=e.length;i<o;i++){var r=e[i];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[l],n=0,e=t.length;n<e;n++){var i=t[n],o=s.get(i);o.has("myclickdown")||this[u](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[u](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,e=this[l].length;n<e;n++){var i=this[l][n],o=s.get(i);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[u](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[u](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[u](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[u](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[u](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[u](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[u](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[u](t,"myslideup"),this}},{key:"myend",value:function(t){return this[u](t,"myend"),this}},{key:"mystart",value:function(t){return this[u](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[u](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[c].each(function(){var e=this.__bens_eventid__,i=s.get(e);n?(s.delete(e),delete this.__bens_eventid__):(i.delete(t),0==i.size&&(s.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var e=t.myTarget,i=!0;t.stopPop=function(){i=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&f.push(e),"myclickup"==n&&(f=[]);var u=a.get(n);u&&u.call(e,t)}i&&o(e)}};r(e)}},{key:"runMove",value:function(t,n,e){f.map(function(i){var o=i.__bens_eventid__,r=s.get(o);if(r){var a=r.get(e);a&&a.call(i,t,n)}})}}]),t}();new r({myTouchDown:function(t){m.run(t,"myclickdown")},myTouchUp:function(t){m.run(t,"myclickup")},myTouch:function(t){m.run(t,"myclickok")},myLongTouch:function(t){m.run(t,"mylongclick")},mySlideLeft:function(t){m.run(t,"myslideleft")},mySlideRight:function(t){m.run(t,"myslideright")},mySlideUp:function(t){m.run(t,"myslideup")},mySlideDown:function(t){m.run(t,"myslidedown")},myMove:function(t,n){m.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new m(t)}},function(t,n,e){"use strict";var i=e(0);e(1),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),e=function(n,e){n.removeEventListener(i.TRNEND_EV,t[e],!1),delete t[e],delete n.__bens_cssfn_id__};return function(o,r,s,a,u,c){var l=$(this),f=l.get(0),m=f.style;if(u=u||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,c=c||"auto",f.__bens_cssfn_id__){var h=f.__bens_cssfn_id__;e(f,h)}var d=n();f.__bens_cssfn_id__=d,t[d]=function(t){var n=t.propertyName;t.target==f&&o.hasOwnProperty(n)&&(m[i._transitionProperty]="",m[i._transitionDuration]="",m[i._transitionTimingFunction]="",m.webkitTransformStyle="",m.webkitBackfaceVisibility="",m.willChange="auto",s(),e(f,d))},m[i._transitionProperty]="all",m[i._transitionDuration]=r+"ms",m[i._transitionTimingFunction]=u,m.willChange=c,m.webkitTransformStyle="preserve-3d",m.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){f.addEventListener(i.TRNEND_EV,t[d],!1),l.css(o)},1)}}(),t.exports=null},function(t,n,e){"use strict";var i=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){$(this).each(function(){var t=$(this).text();$(this).data({text:t});var n=null;$(this).hover(function(){var t=$(this).data("text").length,e=$(this),o=e.find("span");n=setInterval(function(){window.innerWidth>800&&e.prepend(o.eq(i(t)))},50)},function(){clearInterval(n);var e=$(this).find("span");if(window.innerWidth>800)for(var i=0,o=t.length;i<o;i++){var r=""==t[i]?"$nbsp;":t[i];e.eq(i).html(r)}})})}},function(t,n,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(0),s=Symbol(),a=Symbol(),u=Symbol(),c=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),h=Symbol(),d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[u]=null,this[c]=null,this[l]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[u]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[c]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(n){t.endFn(n)},!1)}},{key:f,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:m,value:function(t){var n=t.clientX,e=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,e=t.touches[0].clientY),{x:n,y:e}}},{key:h,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[h]();var n=this[m](t),e=n.x,i=n.y;this[f](e,i),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[m](t),e=n.x,i=n.y;this[f](e,i)}},{key:"endFn",value:function(t){var n=this[m](t),e=n.x,i=n.y;this[f](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[u],!1),this.dom.get(0).removeEventListener(r.END_EV,this[c],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),t}();t.exports=d},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=function t(n,e,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,e);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,e,i)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(i)},u=e(7),c=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),h=Symbol(),d=Symbol(),p=Symbol(),y=Symbol(),v=Symbol(),b=Symbol(),g=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),x=Symbol(),$=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e[l]=t.myTouchDown||function(){},e[f]=t.myTouchUp||function(){},e[m]=t.myTouch||function(){},e[h]=t.myLongTouch||function(){},e[d]=t.mySlideLeft||function(){},e[p]=t.mySlideRight||function(){},e[y]=t.mySlideUp||function(){},e[v]=t.mySlideDown||function(){},e[b]=t.myMove||function(){},e.canMoveLength=t.canMoveLength||20,e.longClickTime=t.longClickTime||1e3,e.slideMaxTime=t.slideMaxTime||500,e[c]=!1,e[g]=!0,e[_]=!1,e}return r(n,t),s(n,[{key:"startFn",value:function(t){var e=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[c]=!0,this[g]=!0,this[_]=!1,this[l](t),this[k]=setTimeout(function(){e[g]&&(e[_]=!0,e[f](t),e[h](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[c]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[w]()&&(this[g]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[c]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[c]=!1,!this[_])){if(clearTimeout(this[k]),this[f](t),this[g])return void this[m](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[x](t)}}},{key:w,value:function(){var t=this.points.length,n=this.points[0],e=this.points[t-1],i=Math.abs;if(!n||!e)return!0;var o=e.x-n.x,r=e.y-n.y;return this[b](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:x,value:function(t){var n=this.points.length,e=this.points[0],i=this.points[n-1],o=Math.abs,r=i.x-e.x,s=i.y-e.y;o(r)>o(s)?r>0?this[p](t):this[d](t):s>0?this[v](t):this[y](t)}}]),n}(u);t.exports=$},function(t,n,e){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,e=0,i=[],o=0,r=n;o<r;o++)i.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=i.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},e),e+=30}()},t.exports=null},function(t,n,e){"use strict";var i=function(){var t={},n=window.location.search;n=n.substr(1);for(var e=n.split("&"),i=0,o=e.length;i<o;i++){var r=e[i],s=r.split("=");t[s[0]]=decodeURI(s[1])}return t};t.exports=i},,,,,,,,,,,,function(t,n,e){"use strict";e(2);var i=e(10);$(document).ready(function(){o.init()});var o={init:function(){var t=i().id;if(!t)return alert("参数错误！"),void window.history.go(-1);var n=this.getData(t);if(!n)return alert("参数错误！"),void window.history.go(-1);this.bindData(n)},getData:function(t){var n=null;return DATA.show.map(function(e){e.id==parseInt(t)&&(n=e)}),n},bindData:function(t){$("#bg").css({"background-image":"url("+t.img+")"}),$("#title").text(t.name),$("#info").text(t.info);var n=[];t.address.map(function(t){n.push(t)}),$("#address").html(n.join("<br/>")),$("#organizer").text(t.organizer),$("#time").text(t.time),$("#img").attr({src:t.img});var e=$("#text");t.text.map(function(t){e.append("<p>"+t+"</p>")})}}}]);