!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=17)}([function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=e(1);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":i(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":i(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),e=$("textarea"),i=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},t.exports=null},function(t,n,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var t,n={},e=navigator.userAgent.toLowerCase();(t=e.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=e.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=e.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=e.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=e.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=e.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=e.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=e.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=e.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,i.isIpad=n.hasOwnProperty("ipad"),i.isIphone=n.hasOwnProperty("iphone"),i.isAndroid=n.hasOwnProperty("android"),i.isIe=n.hasOwnProperty("ie"),i.isFirefox=n.hasOwnProperty("firefox"),i.isChrome=n.hasOwnProperty("chrome"),i.isOpera=n.hasOwnProperty("opera"),i.isSafari=n.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),i.ver=s,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),e=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");i.isPc=n||e||o,i.isMac=e,i.isWin=n,i.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return n[e].substr(0,n[e].length-1);return!1}(),e=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=e("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=i.isPhone,a=s||r,c=!1!==n,u=e("transitionProperty"),h=e("transitionDuration"),l=e("transformOrigin"),f=e("transitionTimingFunction"),m=e("transitionDelay"),d=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),v="onorientationchange"in window?"orientationchange":"resize",y=s?"touchstart":r?"MSPointerDown":"mousedown",g=s?"touchmove":r?"MSPointerMove":"mousemove",b=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),k=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),$=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),E=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},S=function(){var t=0;return function(){return t+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),P=function(){for(var n="webkitT,MozT,msT,OT".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return"-"+n[e].substr(0,n[e].length-1)+"-";return""}(),F=function(n){return n in t?n:P+n in t?P+n:n},O="",A=function(){return"boxPack"in t?2009:P+"box-pack"in t?(O=P,2009):"flexPack"in t?2011:P+"flex-pack"in t?(O=P,2011):"flexBasis"in t?2013:P+"flex-basis"in t?(O=P,2013):void 0}(),L=2013==A?O+"flex":2011==A?O+"flexbox":2009==A?O+"box":"flex",B=2013==A?O+"align-items":2011==A?O+"flex-pack":2009==A?O+"box-pack":"align-items",M=2013==A?O+"justify-content":2011==A?O+"flex-align":2009==A?O+"box-align":"justify-content",C=2013==A?O+"flex":2011==A?O+"flex":2009==A?O+"box-flex":"flex",D=2013==A?O+"flex-direction":2011==A?O+"flex-direction":2009==A?O+"box-orient":"flex-direction",j=2013==A?"row":2011==A?"row":2009==A?"horizontal":"row",V=2013==A?"column":2011==A?"column":2009==A?"vertical":"column",N=F("animation"),R=F("box-shadow"),z=F("background-size"),I=F("transform"),q=F("transform-origin"),W=F("transform-style"),U=F("perspective"),X=F("perspective-origin"),H=F("border-radius"),Y=F("box-sizing"),J=F("background-clip"),K=F("border-bottom-left-radius"),Z=F("border-bottom-right-radius"),G=F("border-top-left-radius"),Q=F("border-top-right-radius"),tt=F("backface-visibility"),nt=F("transition"),et=F("transition-property"),it=F("transition-duration"),ot=F("transition-timing-function"),rt={box:L,"justify-content":M,"align-items":B,"background-size":z,"background-clip":J,flex:C,"flex-direction":D,row:j,column:V,transform:I,"transform-origin":q,"transform-style":W,perspective:U,"perspective-origin":X,"border-radius":H,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":Y,"box-shadow":R,"backface-visibility":tt,transition:nt,"transition-property":et,"transition-duration":it,"transition-timing-function":ot,animation:N},st=function(){var t,n=[];for(var e in rt)rt.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?n.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?n.push(e):n.push("([^-]"+e+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),e=ct(n);return JSON.parse(e)},ct=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var e=rt[n];return t.substr(0,1)+e+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ut=function(t){return t=t.replace(/;/gi," ; "),ct(" "+t)};t=null,i.has3d=o,i.hasTouch=a,i.hasTransform=c,i._transform=I,i._transitionProperty=u,i._transitionDuration=h,i._transformOrigin=l,i._transitionTimingFunction=f,i._transitionDelay=m,i.RESIZE_EV=v,i.START_EV=y,i.MOVE_EV=g,i.END_EV=b,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=k,i.FULLSCREEN_EV=d,i.LOCKPOINTER_EV=p,i.nextFrame=x,i.cancelFrame=$,i.language=T,i.counter=S,i.fixObjCss=at,i.fixCss=ut,i.css=rt,i.boxType=A,i.boxVendors=O,i.checkDomHasPosition=E,i.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(t,n,e){return t=t>e?e:t,t=t<n?n:t}}(),i.rem2Px=function(t,n){return window.innerWidth/t*100*n},i.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},i.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=i},function(t,n,e){"use strict";var i=e(3);e(0),e(5),e(7),e(11),e(6),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");i(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),e=n.find(".menu_main"),o=n.find(".menu_close_btn"),r=function(){n.css({display:"block"}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),e.cssAnimate({transform:"translateX(-100%)"},500,function(){e.randomShowSpan()})},s=function(){n.cssAnimate({background:"rgba(0,0,0,0)"},500),e.cssAnimate({transform:"translateX(0)"},500,function(){e.find("span").css({opacity:0}),n.css({display:"none"})})};i(t).myclickok(function(){r()}),i(o).myclickok(function(){s()}),i(n).myclickok(function(){s()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname;$("#menu_item").find("a").each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(9),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),h=Symbol(),l=[],f=function(){function t(n){i(this,t),this[u]=$(n),this[h]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[u].each(function(){if(this.__bens_eventid__)t[h].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[h].push(n),s.set(n,new Map)}})}},{key:c,value:function(t,n){for(var e=this[h],i=0,o=e.length;i<o;i++){var r=e[i];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[h],n=0,e=t.length;n<e;n++){var i=t[n],o=s.get(i);o.has("myclickdown")||this[c](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,e=this[h].length;n<e;n++){var i=this[h][n],o=s.get(i);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[c](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[c](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[c](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[c](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[c](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[c](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[c](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[c](t,"myslideup"),this}},{key:"myend",value:function(t){return this[c](t,"myend"),this}},{key:"mystart",value:function(t){return this[c](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[c](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[u].each(function(){var e=this.__bens_eventid__,i=s.get(e);n?(s.delete(e),delete this.__bens_eventid__):(i.delete(t),0==i.size&&(s.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var e=t.myTarget,i=!0;t.stopPop=function(){i=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&l.push(e),"myclickup"==n&&(l=[]);var c=a.get(n);c&&c.call(e,t)}i&&o(e)}};r(e)}},{key:"runMove",value:function(t,n,e){l.map(function(i){var o=i.__bens_eventid__,r=s.get(o);if(r){var a=r.get(e);a&&a.call(i,t,n)}})}}]),t}();new r({myTouchDown:function(t){f.run(t,"myclickdown")},myTouchUp:function(t){f.run(t,"myclickup")},myTouch:function(t){f.run(t,"myclickok")},myLongTouch:function(t){f.run(t,"mylongclick")},mySlideLeft:function(t){f.run(t,"myslideleft")},mySlideRight:function(t){f.run(t,"myslideright")},mySlideUp:function(t){f.run(t,"myslideup")},mySlideDown:function(t){f.run(t,"myslidedown")},myMove:function(t,n){f.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new f(t)}},function(t,n,e){"use strict";function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function i(o,r){try{var s=n[o](r),a=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}return i("next")})}}e(10),e(0);var o=e(12);$.fn.pageLoading=function(){var t=i(regeneratorRuntime.mark(function t(n,e,i){var r,s,a,c,u,h,l,f,m;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $("body").children().css({opacity:0}),r=$("<div></div>"),r.css({position:"fixed",left:0,top:0,width:"100%",height:"100%","z-index":1e4,background:"#333"}),s=$("<div></div>"),s.css({position:"absolute",color:"#fff",left:"50%",top:"50%",width:"300px",height:"200px","margin-top":"-100px","margin-left":"-150px","text-align":"center","font-size":"32px"}),a=$("<div></div>"),a.css({margin:"0 auto",width:"60px",height:"60px","background-image":"url(./image/home.png)","background-repeat":"no-repeat","background-position":"center center","-webkit-background-size":"17px 30px","background-size":"17px 30px"}),c=$("<div>AURA SPACE</div>"),c.css({width:"100%","line-height":"60px"}),u=$("<div>THE WORLD OF ART</div>"),u.css({"font-size":"14px","letter-spacing":"4px"}),h=$("<div>0</div>"),h.css({width:"100%","line-height":"100px"}),s.append(a).append(c).append(u).append(h),r.append(s),$("body").append(r),s.set3dDom(),a.classAnimate({"0%":"transform:rotateY(0deg) rotateX(0deg)","50%":"transform:rotateY(180deg) rotateX(0deg)","100%":"transform:rotateY(180deg) rotateX(180deg)"},2e3,"linear",!0,!1,function(){},0,"transform"),l=(new Date).getTime(),t.next=21,new o(n,function(t,n){h.text(parseInt(100*t/n))});case 21:f=(new Date).getTime(),m=function(){a.removeClassAnimate(),r.cssAnimate({opacity:0},500,function(){r.remove(),e(),setTimeout(function(){var t=!1;$("body").children().each(function(){$(this).cssAnimate({opacity:1},1e3,function(){t||(t=!0,setTimeout(function(){i()},100))},!0,"","opacity")})},200)})},f-l<1e3?setTimeout(function(){m()},1e3+l-f):m();case 24:case"end":return t.stop()}},t,this)}));return function(n,e,i){return t.apply(this,arguments)}}(),t.exports=null},function(t,n,e){"use strict";var i=e(1);e(0),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),e=function(n,e){n.removeEventListener(i.TRNEND_EV,t[e],!1),delete t[e],delete n.__bens_cssfn_id__};return function(o,r,s,a,c,u){var h=$(this),l=h.get(0),f=l.style;if(c=c||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",l.__bens_cssfn_id__){var m=l.__bens_cssfn_id__;e(l,m)}var d=n();l.__bens_cssfn_id__=d,t[d]=function(t){var n=t.propertyName;t.target==l&&o.hasOwnProperty(n)&&(f[i._transitionProperty]="",f[i._transitionDuration]="",f[i._transitionTimingFunction]="",f.webkitTransformStyle="",f.webkitBackfaceVisibility="",f.willChange="auto",s(),e(l,d))},f[i._transitionProperty]="all",f[i._transitionDuration]=r+"ms",f[i._transitionTimingFunction]=c,f.willChange=u,f.webkitTransformStyle="preserve-3d",f.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){l.addEventListener(i.TRNEND_EV,t[d],!1),h.css(o)},1)}}(),t.exports=null},function(t,n,e){"use strict";var i=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){$(this).each(function(){var t=$(this).text();$(this).data({text:t});var n=null;$(this).hover(function(){var t=$(this).data("text").length,e=$(this),o=e.find("span");n=setInterval(function(){window.innerWidth>800&&e.prepend(o.eq(i(t)))},50)},function(){clearInterval(n);var e=$(this).find("span");if(window.innerWidth>800)for(var i=0,o=t.length;i<o;i++){var r=""==t[i]?"$nbsp;":t[i];e.eq(i).html(r)}})})}},function(t,n,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(1),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),h=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[h]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[h]=function(n){t.endFn(n)},!1)}},{key:l,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:f,value:function(t){var n=t.clientX,e=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,e=t.touches[0].clientY),{x:n,y:e}}},{key:m,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[m]();var n=this[f](t),e=n.x,i=n.y;this[l](e,i),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[f](t),e=n.x,i=n.y;this[l](e,i)}},{key:"endFn",value:function(t){var n=this[f](t),e=n.x,i=n.y;this[l](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[h],!1)}}]),t}();t.exports=d},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=function t(n,e,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,e);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,e,i)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(i)},c=e(8),u=Symbol(),h=Symbol(),l=Symbol(),f=Symbol(),m=Symbol(),d=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=Symbol(),b=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),x=Symbol(),$=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e[h]=t.myTouchDown||function(){},e[l]=t.myTouchUp||function(){},e[f]=t.myTouch||function(){},e[m]=t.myLongTouch||function(){},e[d]=t.mySlideLeft||function(){},e[p]=t.mySlideRight||function(){},e[v]=t.mySlideUp||function(){},e[y]=t.mySlideDown||function(){},e[g]=t.myMove||function(){},e.canMoveLength=t.canMoveLength||20,e.longClickTime=t.longClickTime||1e3,e.slideMaxTime=t.slideMaxTime||500,e[u]=!1,e[b]=!0,e[_]=!1,e}return r(n,t),s(n,[{key:"startFn",value:function(t){var e=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[u]=!0,this[b]=!0,this[_]=!1,this[h](t),this[k]=setTimeout(function(){e[b]&&(e[_]=!0,e[l](t),e[m](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[w]()&&(this[b]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[u]=!1,!this[_])){if(clearTimeout(this[k]),this[l](t),this[b])return void this[f](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[x](t)}}},{key:w,value:function(){var t=this.points.length,n=this.points[0],e=this.points[t-1],i=Math.abs;if(!n||!e)return!0;var o=e.x-n.x,r=e.y-n.y;return this[g](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:x,value:function(t){var n=this.points.length,e=this.points[0],i=this.points[n-1],o=Math.abs,r=i.x-e.x,s=i.y-e.y;o(r)>o(s)?r>0?this[p](t):this[d](t):s>0?this[y](t):this[v](t)}}]),n}(c);t.exports=$},function(t,n,e){"use strict";e(0);var i=e(1);$.fn.classAnimate=function(){var t={},n=function(n,e){n.get(0).removeEventListener(i.ANIEND_EV,t[e],!1),n.removeClassAnimate(),delete t[e]},e=function(e,o,r,s){var a="__temp_"+i.counter()+"__";o.get(0).addEventListener(i.ANIEND_EV,t[a]=function(t){e==t.animationName&&(o.css(s),r.call(this),n(o,a))},!1)};return function(t,n,o,r,s,a,c,u){var h="__keyframes_"+i.counter()+"__";n=parseInt(n)||1e3,o=o||"linear",r=$.getBloom(r),a=$.getFunction(a),s=$.getBloom(s),u=u||"auto",c=c||0,n+="ms",c+="ms",r=r?"infinite":"",s=s?"alternate":"";var l=h+"class__";if(!$.isObject(t))throw"css3Animate 参数样式结构错误";var f="",m=$("<style id='"+l+"'></style>"),d=" animation: "+h+" "+n+" "+o+" "+c+" "+r+" "+s+";";d=$.css3(d),d="."+l+"{"+d+"} @keyframes "+h+"{";for(var p in t)if(t.hasOwnProperty(p)){var v=$.css3(t[p]);d+=p+" {"+v+"}",f=v}d+="}",m.text(d),$("head").append(m);var y={};f=f.split(";");for(var g=0,b=f.length;g<b;g++){var w=f[g].split(":");if(2==w.length){var _=$.trim(w[0]),k=$.trim(w[1]);y[_]=k}}return $(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||($(this).css({"will-change":u}),$(this).addClass(l),$(this).get(0).__animate_css3_class__=l)}),r?$(this):($(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||e(h,$(this),a,y)}),$(this))}}(),$.fn.removeClassAnimate=function(){var t={};$(this).each(function(){var n=$(this).get(0).__animate_css3_class__;t[n]=!0,$(this).removeClass(n),$(this).css({"will-change":"auto"})});for(var n in t)if(t.hasOwnProperty(n)){var e=$("#"+n);0!=e.length&&e.remove()}},t.exports=null},function(t,n,e){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,e=0,i=[],o=0,r=n;o<r;o++)i.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=i.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},e),e+=30}()},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){var e=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),s=(Symbol(),Symbol()),a=Symbol(),c=Symbol(),u=Symbol(),h=Symbol(),l=Symbol(),f=function(){function t(n,e){return i(this,t),this.ress=n,this.propFn=e||function(){},this.data=[],this[h]=Object.entries(this.ress).length,this[l]=0,this[s](),this[u]()}return r(t,[{key:s,value:function(){var t=!0,n=!1,e=void 0;try{for(var i,r=Object.entries(this.ress)[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,a=o(s,2),c=a[0],u=a[1];this.data.push({key:c,src:u})}}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}}},{key:a,value:function(t){var n=t.key,e=t.src,i=this;return new Promise(function(t,o){var r=new Image;r.onload=function(){i[l]++,i.propFn(i[l],i[h]),t({key:n,val:this})},r.onerror=function(){o(e)},r.src=e})}},{key:c,value:function(){var t=this,n=this.data.map(function(n){return t[a](n)});return Promise.all(n)}},{key:u,value:function(){var t=this;return new Promise(function(n,e){t[c]().then(function(t){var e={};t.map(function(t){var n=t.key,i=t.val;e[n]=i}),n({state:1,data:e})}).catch(function(t){n({state:0,msg:t})})})}}]),t}();t.exports=f},,,,function(t,n,e){"use strict";e(0),e(5);var i=e(1),o=e(3),r=function(t){this.win=t.win,this.body=t.body,this.imgLength=this.body.find("a").length,this.time=t.time||5e3,this.animateTime=t.animateTime||1e3,this.showPoint=!$.isBoolean(t.showPoint)||t.showPoint,this.leftBtn=t.rightBtn,this.rightBtn=t.leftBtn,this.pointBg="#fff",this.pointSelectBg="rgb(32,177,160)",this.changeStartFn=t.changeStartFn||function(){},this.changeEndFn=t.changeEndFn||function(){},this.winWidth=parseInt(this.win.width()),this.winHeight=parseInt(this.win.height()),this.page=0,this.maxPage=this.imgLength-1,this.intervalFn=null,this.points=[],this.pointBody=null,this.touchStartTime=0,this.touchPoints=[],this.leftPx=0,this.init()};r.prototype={init:function(){this.styleSet(),this.addPoint(),this.setDiv(),this.addEvent()},styleSet:function(){this.win.css({position:"relative",overflow:"hidden"}),this.body.css({position:"absolute",left:0,top:0}),this.body.find("a").css({display:"block",width:this.winWidth+"px",height:this.winHeight+"px",border:"none",overflow:"hidden",position:"relative"}),this.body.find("a").css({float:"left",display:"block"})},addPoint:function(){var t=this,n=$("<div></div>"),e=20*t.imgLength,i=this.showPoint?"block":"none";n.css({width:e+"px",height:"10px",position:"absolute",bottom:"0.2rem",left:"50%","margin-left":-e/2+"px",display:i,"z-index":9999});var o=$("<div></div>");o.css({width:"10px",height:"10px",margin:"0 5px",background:this.pointBg,"border-radius":"5px",float:"left",border:"1pt solid transparent"}).addClass("border_box");for(var r=0,s=this.imgLength;r<s;r++){var a=o.clone().attr({n:r});0==r&&a.css({background:this.pointSelectBg,"border-color":this.pointSelectBg}),n.append(a)}this.points=n.find("div"),this.pointBody=n,this.win.append(n)},setDiv:function(){this.body.stop(!0,!0),this.winWidth=parseInt(this.win.width()),this.winHeight=parseInt(this.win.height());var t=this.winWidth*this.imgLength;this.body.css({width:t+"px",height:"100%"}),this.body.find("a").css({width:this.winWidth+"px",height:"100%"})},addEvent:function(){var t=this;window.addEventListener("resize",t.resizeFn=function(){t.setDiv()},!1);var n=function(){t.imgLength<=1||(t.intervalFn=setInterval(function(){t.page++,t.animate()},t.time),t.animate())};if(i.hasTouch){var e=this.win.get(0);e.addEventListener(i.START_EV,t.startEventFn=function(n){t.body.stop(!0),clearInterval(t.intervalFn),t.leftPx=parseInt(t.body.css("left")),t.intervalFn=null,t.startEvent(n)},!1),e.addEventListener(i.MOVE_EV,t.moveEventFn=function(n){t.savePoint(n);var e=t.touchPoints[t.touchPoints.length-1],i=e.x,o=e.y,r=t.touchPoints[0],s=r.x,a=r.y,c=i-s,u=o-a;Math.abs(c)>Math.abs(u)&&(n.preventDefault(),t.moveEvent(n,c))},!1),e.addEventListener(i.END_EV,t.endEventFn=function(e){t.endEvent(e),t.intervalFn||n()},!1),n()}else this.win.hover(function(){t.body.stop(!0),clearInterval(t.intervalFn),t.intervalFn=null},function(){t.intervalFn||n()}),this.points.mouseover(function(){t.page=$(this).attr("n"),t.animate()}),n();this.leftBtn&&o(this.leftBtn).myclickok(function(){clearInterval(t.intervalFn),t.intervalFn=null,n(),t.page++,t.animate()}),this.rightBtn&&o(this.rightBtn).myclickok(function(){clearInterval(t.intervalFn),t.intervalFn=null,n(),t.page--,t.animate()})},animate:function(){this.page=this.page>this.maxPage?0:this.page,this.page=this.page<0?this.maxPage:this.page,this.points.css({background:this.pointBg,"border-color":this.pointSelectBg}),this.points.eq(this.page).css({background:this.pointSelectBg,"border-color":"#fff"}),this.body.get(0).style[i._transitionDuration]="",this.changeStartFn(this.page);var t=this;this.body.cssAnimate({left:-this.page*this.winWidth+"px"},this.animateTime,function(){t.changeEndFn(t.page)})},startEvent:function(t){this.touchPoints=[],this.touchStartTime=(new Date).getTime(),this.savePoint(t)},moveEvent:function(t,n){if(0!=this.touchStartTime){var e=this.leftPx+n;this.body.css({left:e+"px"})}},endEvent:function(){if(0==this.touchStartTime)return void this.scrollBack();if(this.touchPoints.length<2)return void this.scrollBack();var t=(new Date).getTime(),n=t-this.touchStartTime,e=this;this.touchStartTime=0;var i=this.touchPoints[this.touchPoints.length-1],o=i.x,r=i.y,s=this.touchPoints[0],a=s.x,c=s.y,u=Math.abs(a-o),h=Math.abs(c-r);n<500&&u>30&&u>h?a>o?(e.page++,e.page=e.page>e.maxPage?e.maxPage:e.page,e.animate()):(e.page--,e.page=e.page>=0?e.page:0,e.animate()):e.scrollBack()},savePoint:function(t){var n;n=i.hasTouch?t.touches[0]:t,this.touchPoints.push({x:n.pageX,y:n.pageY})},scrollBack:function(){this.animate()},destroy:function(){this.intervalFn&&clearInterval(this.intervalFn),window.removeEventListener("resize",this.resizeFn,!1),i.hasTouch?(this.win.get(0).removeEventListener(i.START_EV,this.startEventFn,!1),this.win.get(0).removeEventListener(i.MOVE_EV,this.moveEventFn,!1),this.win.get(0).removeEventListener(i.END_EV,this.endEventFn,!1)):(this.win.unbind("hover"),this.points.unbind("mouseover")),this.leftBtn&&o(this.leftBtn).unbind(!0),this.rightBtn&&o(this.rightBtn).unbind(!0),this.body.get(0).style[i._transitionDuration]="",this.body.css({left:0}),this.pointBody.remove()}},t.exports=r},function(t,n,e){"use strict";e(2),e(0),e(4);var i=e(16),o=e(3);$(document).ready(function(){var t={c:"./image/close.png",d:"./image/home.png",e:"./image/home_.png",f:"./image/menu.png",g:"./image/menu_.png",a:"./image/about/p1.png",b:"./image/about/p2.png",h:"./image/about/p3.png",i:"./image/about/img.png"};$("body").pageLoading(t,function(){r.init()},function(){})});var r={data:DATA.about,init:function(){this.bindData(),this.setBanner()},bindData:function(){for(var t=$("#about_banner_body"),n=this.data.banner,e=0,i=n.length;e<i;e++){var o=$("<a></a>");o.css3({background:"url("+n[e]+") no-repeat center center","background-size":"100% 100%"}),t.append(o)}for(var r=$("#about_text"),s=this.data.text,a=0,c=s.length;a<c;a++){var u=$("<p>"+s[a]+"</p>");r.append(u)}},setBanner:function(){var t=$("#about_banner_html"),n=$("#about_banner_body"),e=parseInt(t.width()),o=588*e/881;t.css({height:o+"px"}),new i({win:t,body:n,time:5e3,animateTime:1e3,showPoint:!1})},addSlideEvent:function(){var t=$("body"),n=$("#about_body");o(t).myslideup(function(){n.cssAnimate({transform:"translateY(-100%)"},500)}).myslidedown(function(){n.cssAnimate({transform:"translateY(0)"},500)}).myclickdown(function(){}).myclickup(function(){})}}}]);