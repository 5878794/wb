!function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=17)}([function(n,t,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var n,t={},e=navigator.userAgent.toLowerCase();(n=e.match(/ipad; cpu os ([\d_]+)/))?t.ipad=n[1].replace(/_/g,"."):(n=e.match(/iphone os ([\d_]+)/))?t.iphone=n[1].replace(/_/g,"."):(n=e.match(/android[ \/]([\d.]+)/))?t.android=n[1]:(n=e.match(/rv:([\d.]+)\) like gecko/))?t.ie=n[1]:(n=e.match(/msie ([\d.]+)/))?t.ie=n[1]:(n=e.match(/firefox\/([\d.]+)/))?t.firefox=n[1]:(n=e.match(/chrome\/([\d.]+)/))?t.chrome=n[1]:(n=e.match(/opera.([\d.]+)/))?t.opera=n[1]:(n=e.match(/version\/([\d.]+).*safari/))?t.safari=n[1]:t._=0,i.isIpad=t.hasOwnProperty("ipad"),i.isIphone=t.hasOwnProperty("iphone"),i.isAndroid=t.hasOwnProperty("android"),i.isIe=t.hasOwnProperty("ie"),i.isFirefox=t.hasOwnProperty("firefox"),i.isChrome=t.hasOwnProperty("chrome"),i.isOpera=t.hasOwnProperty("opera"),i.isSafari=t.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in t)t.hasOwnProperty(r)&&(o=t[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),i.ver=s,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var n=navigator.platform,t=0==n.indexOf("Win"),e=0==n.indexOf("Mac"),o="X11"==n||0==n.indexOf("Linux");i.isPc=t||e||o,i.isMac=e,i.isWin=t,i.isLinux=o}(),function(){var n=document.createElement("div").style,t=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in n)return"";for(var t="webkitT,MozT,msT,OT,t".split(","),e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in n)return t[e].substr(0,t[e].length-1);return!1}(),e=function(n){return t?(n=n.charAt(0).toUpperCase()+n.substr(1),t+n):n},o=e("perspective")in n,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=i.isPhone,a=s||r,c=!1!==t,u=e("transitionProperty"),l=e("transitionDuration"),f=e("transformOrigin"),m=e("transitionTimingFunction"),h=e("transitionDelay"),d=function(){return!1===t?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[t]}(),p=function(){return!1===t?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[t]}(),y="onorientationchange"in window?"orientationchange":"resize",v=s?"touchstart":r?"MSPointerDown":"mousedown",b=s?"touchmove":r?"MSPointerMove":"mousemove",g=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===t?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[t]}(),k=function(){return!1===t?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[t]}(),x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,1)}}(),$=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),S=function(n){var t=n.css("position");return"fixed"==t||"absolute"==t||"relative"==t},E=function(){var n=0;return function(){return n+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),O=function(){for(var t="webkitT,MozT,msT,OT".split(","),e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in n)return"-"+t[e].substr(0,t[e].length-1)+"-";return""}(),P=function(t){return t in n?t:O+t in n?O+t:t},A="",F=function(){return"boxPack"in n?2009:O+"box-pack"in n?(A=O,2009):"flexPack"in n?2011:O+"flex-pack"in n?(A=O,2011):"flexBasis"in n?2013:O+"flex-basis"in n?(A=O,2013):void 0}(),M=2013==F?A+"flex":2011==F?A+"flexbox":2009==F?A+"box":"flex",C=2013==F?A+"align-items":2011==F?A+"flex-pack":2009==F?A+"box-pack":"align-items",L=2013==F?A+"justify-content":2011==F?A+"flex-align":2009==F?A+"box-align":"justify-content",j=2013==F?A+"flex":2011==F?A+"flex":2009==F?A+"box-flex":"flex",N=2013==F?A+"flex-direction":2011==F?A+"flex-direction":2009==F?A+"box-orient":"flex-direction",R=2013==F?"row":2011==F?"row":2009==F?"horizontal":"row",V=2013==F?"column":2011==F?"column":2009==F?"vertical":"column",B=P("animation"),D=P("box-shadow"),z=P("background-size"),q=P("transform"),I=P("transform-origin"),U=P("transform-style"),J=P("perspective"),X=P("perspective-origin"),H=P("border-radius"),W=P("box-sizing"),Y=P("background-clip"),K=P("border-bottom-left-radius"),Z=P("border-bottom-right-radius"),G=P("border-top-left-radius"),Q=P("border-top-right-radius"),nn=P("backface-visibility"),tn=P("transition"),en=P("transition-property"),on=P("transition-duration"),rn=P("transition-timing-function"),sn={box:M,"justify-content":L,"align-items":C,"background-size":z,"background-clip":Y,flex:j,"flex-direction":N,row:R,column:V,transform:q,"transform-origin":I,"transform-style":U,perspective:J,"perspective-origin":X,"border-radius":H,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":W,"box-shadow":D,"backface-visibility":nn,transition:tn,"transition-property":en,"transition-duration":on,"transition-timing-function":rn,animation:B},an=function(){var n,t=[];for(var e in sn)sn.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?t.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?t.push(e):t.push("([^-]"+e+")"));return n=t.join("|"),new RegExp(n,"ig")}(),cn=function(n){var t=JSON.stringify(n),e=un(t);return JSON.parse(e)},un=function(n){return n.replace(an,function(n){var t=n.substr(1,n.length-2);if("box"==t||"transition"==t||"flex"==t){var e=sn[t];return n.substr(0,1)+e+n.substr(n.length-1)}return"row"==n||"column"==n?sn[n]:n.substr(0,1)+sn[n.substr(1)]})},ln=function(n){return n=n.replace(/;/gi," ; "),un(" "+n)};n=null,i.has3d=o,i.hasTouch=a,i.hasTransform=c,i._transform=q,i._transitionProperty=u,i._transitionDuration=l,i._transformOrigin=f,i._transitionTimingFunction=m,i._transitionDelay=h,i.RESIZE_EV=y,i.START_EV=v,i.MOVE_EV=b,i.END_EV=g,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=k,i.FULLSCREEN_EV=d,i.LOCKPOINTER_EV=p,i.nextFrame=x,i.cancelFrame=$,i.language=T,i.counter=E,i.fixObjCss=cn,i.fixCss=ln,i.css=sn,i.boxType=F,i.boxVendors=A,i.checkDomHasPosition=S,i.trim=function(n){return n.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(n,t,e){return n=n>e?e:n,n=n<t?t:n}}(),i.rem2Px=function(n,t){return window.innerWidth/n*100*t},i.delHtmlTag=function(n){return n.replace(/<[^>]+>/g,"")},i.sleep=function(n){return n*=1e3,new Promise(function(t){setTimeout(function(){t()},n)})},n.exports=i},function(n,t,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o=e(0);$.isNumber=function(n){return"number"==typeof n},$.isString=function(n){return"string"==typeof n},$.isBoolean=function(n){return"boolean"==typeof n},$.isObject=function(n){return null!==n&&void 0!==n&&!$.isArray(n)&&"object"===(void 0===n?"undefined":i(n))},$.isArray=function(n){return n.constructor===Array},$.isFunction=function(n){return"function"==typeof n},$.isUndefined=function(n){return void 0===n},$.isUrl=function(n){return new RegExp("[a-zA-z]+://[^s]*").test(n)},$.isJson=function(n){return"object"==(void 0===n?"undefined":i(n))&&"[object object]"==Object.prototype.toString.call(n).toLowerCase()&&!n.length},$.getDom=function(n){var t;return n?($.isString(n)?t=document.getElementById(n):$.isObject(n)&&(1==n.length&&(t=n.get(0)),1==n.nodeType&&(t=n)),t):t},$.getArray=function(n){return $.isArray(n)?n:[]},$.getFunction=function(n){return $.isFunction(n)?n:function(){}},$.getBloom=function(n){return!!$.isBoolean(n)&&n},$.getObj=function(n){return $.isObject(n)?n:{}},$.getNumber=function(n){return n=parseInt(n),n=n||0},$.fn.css3=function(n){return $(this).css(o.fixObjCss(n)),$(this)},$.css3=function(n){return o.fixCss(n)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(n){var t=$("<div></div>");t.css({"transform-style":"preserve-3d"}),t.append($(this).children()),$(this).css({perspective:n+"px"}).append(t)},$.allInputCanNotUse=function(n){if(n){var t=$("input"),e=$("textarea"),i=$("select"),o=function(n){n.attr("disabled")||n.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};t.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(n){"yes"==n.data("__set_disabled__")&&n.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},n.exports=null},function(n,t,e){"use strict";var i=e(3);e(1),e(6),e(5),e(9),e(4),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var n=$("#top_left");i(n).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var n=$("#top_right"),t=$("#menu"),e=t.find(".menu_main"),o=t.find(".menu_close_btn"),r=function(){t.css({display:"block"}),t.cssAnimate({background:"rgba(0,0,0,0.7)"},500),e.cssAnimate({transform:"translateX(-100%)"},500,function(){e.randomShowSpan()})},s=function(){t.cssAnimate({background:"rgba(0,0,0,0)"},500),e.cssAnimate({transform:"translateX(0)"},500,function(){e.find("span").css({opacity:0}),t.css({display:"none"})})};i(n).myclickok(function(){r()}),i(o).myclickok(function(){s()}),i(t).myclickok(function(){s()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(n){n.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var n=window.location.pathname;$("#menu_item").find("a").each(function(){n.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=e(8),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=[],m=function(){function n(t){i(this,n),this[u]=$(t),this[l]=[],this[a](),this.addDefaultEvent()}return o(n,[{key:a,value:function(){var n=this;this[u].each(function(){if(this.__bens_eventid__)n[l].push(this.__bens_eventid__);else{var t=Symbol();this.__bens_eventid__=t,n[l].push(t),s.set(t,new Map)}})}},{key:c,value:function(n,t){for(var e=this[l],i=0,o=e.length;i<o;i++){var r=e[i];s.get(r).set(t,n)}}},{key:"addDefaultEvent",value:function(){for(var n=this[l],t=0,e=n.length;t<e;t++){var i=n[t],o=s.get(i);o.has("myclickdown")||this[c](function(n){n.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(n){n.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(n){for(var t=0,e=this[l].length;t<e;t++){var i=this[l][t],o=s.get(i);if(o){var r=o.get(n);r&&r()}}return this}},{key:"myclickok",value:function(n){return this[c](n,"myclickok"),this}},{key:"myclickdown",value:function(n){return this[c](n,"myclickdown"),this}},{key:"myclickup",value:function(n){return this[c](n,"myclickup"),this}},{key:"mylongclick",value:function(n){return this[c](n,"mylongclick"),this}},{key:"myslideleft",value:function(n){return this[c](n,"myslideleft"),this}},{key:"myslideright",value:function(n){return this[c](n,"myslideright"),this}},{key:"myslidedown",value:function(n){return this[c](n,"myslidedown"),this}},{key:"myslideup",value:function(n){return this[c](n,"myslideup"),this}},{key:"myend",value:function(n){return this[c](n,"myend"),this}},{key:"mystart",value:function(n){return this[c](n,"myclickdown"),this}},{key:"mymove",value:function(n){return this[c](n,"mymove"),this}},{key:"unbind",value:function(n){var t=!(n&&!$.isBoolean(n))||n;this[u].each(function(){var e=this.__bens_eventid__,i=s.get(e);t?(s.delete(e),delete this.__bens_eventid__):(i.delete(n),0==i.size&&(s.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(n,t){var e=n.myTarget,i=!0;n.stopPop=function(){i=!1};var o=function(n){var t=n.parentNode;r(t)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==t&&f.push(e),"myclickup"==t&&(f=[]);var c=a.get(t);c&&c.call(e,n)}i&&o(e)}};r(e)}},{key:"runMove",value:function(n,t,e){f.map(function(i){var o=i.__bens_eventid__,r=s.get(o);if(r){var a=r.get(e);a&&a.call(i,n,t)}})}}]),n}();new r({myTouchDown:function(n){m.run(n,"myclickdown")},myTouchUp:function(n){m.run(n,"myclickup")},myTouch:function(n){m.run(n,"myclickok")},myLongTouch:function(n){m.run(n,"mylongclick")},mySlideLeft:function(n){m.run(n,"myslideleft")},mySlideRight:function(n){m.run(n,"myslideright")},mySlideUp:function(n){m.run(n,"myslideup")},mySlideDown:function(n){m.run(n,"myslidedown")},myMove:function(n,t){m.runMove(n,t,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),n.exports=function(n){return new m(n)}},function(n,t,e){"use strict";var i=function(n){return parseInt(Math.random()*n)};$.fn.hoverSpanJump=function(){$(this).each(function(){var n=$(this).text();$(this).data({text:n});var t=null;$(this).hover(function(){var n=$(this).data("text").length,e=$(this),o=e.find("span");t=setInterval(function(){e.prepend(o.eq(i(n)))},50)},function(){clearInterval(t);for(var e=$(this).find("span"),i=0,o=n.length;i<o;i++){var r=""==n[i]?"$nbsp;":n[i];e.eq(i).html(r)}})})}},function(n,t,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var n=this,t=$(this).text().split("");$(this).text(""),t.map(function(t){t=t||"$nbsp;",$(n).append('<span style="opacity: 0;">'+t+"</span>")})})},n.exports=null},function(n,t,e){"use strict";var i=e(0);e(1),$.fn.cssAnimate=function(){var n={},t=function(){var n=0;return function(){return n+=1}}(),e=function(t,e){t.removeEventListener(i.TRNEND_EV,n[e],!1),delete n[e],delete t.__bens_cssfn_id__};return function(o,r,s,a,c,u){var l=$(this),f=l.get(0),m=f.style;if(c=c||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",f.__bens_cssfn_id__){var h=f.__bens_cssfn_id__;e(f,h)}var d=t();f.__bens_cssfn_id__=d,n[d]=function(n){var t=n.propertyName;n.target==f&&o.hasOwnProperty(t)&&(m[i._transitionProperty]="",m[i._transitionDuration]="",m[i._transitionTimingFunction]="",m.webkitTransformStyle="",m.webkitBackfaceVisibility="",m.willChange="auto",s(),e(f,d))},m[i._transitionProperty]="all",m[i._transitionDuration]=r+"ms",m[i._transitionTimingFunction]=c,m.willChange=u,m.webkitTransformStyle="preserve-3d",m.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){f.addEventListener(i.TRNEND_EV,n[d],!1),l.css(o)},1)}}(),n.exports=null},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=e(0),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),h=Symbol(),d=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n),this.dom=t.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[l]=null,this[s]()}return o(n,[{key:s,value:function(){var n=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(t){n.startFn(t)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(t){n.moveFn(t)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(t){n.endFn(t)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(t){n.endFn(t)},!1)}},{key:f,value:function(n,t){n&&t&&this.points.push({x:n,y:t})}},{key:m,value:function(n){var t=n.clientX,e=n.clientY;return n.touches&&n.touches[0]&&(t=n.touches[0].clientX,e=n.touches[0].clientY),{x:t,y:e}}},{key:h,value:function(){this.points=[]}},{key:"startFn",value:function(n){this[h]();var t=this[m](n),e=t.x,i=t.y;this[f](e,i),this.touchStartTime=n.timestamp,this.target=n.target}},{key:"moveFn",value:function(n){var t=this[m](n),e=t.x,i=t.y;this[f](e,i)}},{key:"endFn",value:function(n){var t=this[m](n),e=t.x,i=t.y;this[f](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),n}();n.exports=d},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var s=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),a=function n(t,e,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:n(r,e,i)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(i)},c=e(7),u=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),h=Symbol(),d=Symbol(),p=Symbol(),y=Symbol(),v=Symbol(),b=Symbol(),g=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),x=Symbol(),$=function(n){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e[l]=n.myTouchDown||function(){},e[f]=n.myTouchUp||function(){},e[m]=n.myTouch||function(){},e[h]=n.myLongTouch||function(){},e[d]=n.mySlideLeft||function(){},e[p]=n.mySlideRight||function(){},e[y]=n.mySlideUp||function(){},e[v]=n.mySlideDown||function(){},e[b]=n.myMove||function(){},e.canMoveLength=n.canMoveLength||20,e.longClickTime=n.longClickTime||1e3,e.slideMaxTime=n.slideMaxTime||500,e[u]=!1,e[g]=!0,e[_]=!1,e}return r(t,n),s(t,[{key:"startFn",value:function(n){var e=this;a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"startFn",this).call(this,n),n.myTarget=this.target,this[u]=!0,this[g]=!0,this[_]=!1,this[l](n),this[k]=setTimeout(function(){e[g]&&(e[_]=!0,e[f](n),e[h](n))},this.longClickTime)}},{key:"moveFn",value:function(n){n.myTarget=this.target,this[u]&&(a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"moveFn",this).call(this,n),this[w]()&&(this[g]=!1))}},{key:"endFn",value:function(n){if(n.myTarget=this.target,this[u]&&(a(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"endFn",this).call(this,n),this[u]=!1,!this[_])){if(clearTimeout(this[k]),this[f](n),this[g])return void this[m](n);this.touchStartTime-n.timestamp>this.slideMaxTime||this[x](n)}}},{key:w,value:function(){var n=this.points.length,t=this.points[0],e=this.points[n-1],i=Math.abs;if(!t||!e)return!0;var o=e.x-t.x,r=e.y-t.y;return this[b](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:x,value:function(n){var t=this.points.length,e=this.points[0],i=this.points[t-1],o=Math.abs,r=i.x-e.x,s=i.y-e.y;o(r)>o(s)?r>0?this[p](n):this[d](n):s>0?this[v](n):this[y](n)}}]),t}(c);n.exports=$},function(n,t,e){"use strict";$.fn.randomShowSpan=function(){for(var n=$(this).find("span"),t=n.length,e=0,i=[],o=0,r=t;o<r;o++)i.push(o);for(var s=0,a=t;s<a;s++)!function(o,r){var s=parseInt(Math.random()*t);s=i.splice(s,1),t--;var a=n.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},e),e+=30}()},n.exports=null},,,,,,,,function(n,t,e){"use strict";var i=e(3);e(6),e(5),e(4),e(2),$(document).ready(function(){o.init()});var o={init:function(){this.addBtnEffect(),this.bindBtnEvent()},addBtnEffect:function(){var n=$("#map");n.text2Span(),n.find("span").css({opacity:1}),n.find("p").hoverSpanJump()},bindBtnEvent:function(){var n=$("#map"),t=$("#map_body");i(n).myclickok(function(){t.css({display:"block"}),t.cssAnimate({opacity:1},500),i(t).unbind(!0),i(t).myclickok(function(){t.css({opacity:0,display:"none"})})})}}}]);