!function(t){function n(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var i={};n.m=t,n.c=i,n.i=function(t){return t},n.d=function(t,i,e){n.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:e})},n.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(i,"a",i),i},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=20)}([function(t,n,i){"use strict";var e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=i(1);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":e(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":e(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),i=$("textarea"),e=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),i.each(function(){o($(this))}),e.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},t.exports=null},function(t,n,i){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var e={};!function(){var t,n={},i=navigator.userAgent.toLowerCase();(t=i.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=i.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=i.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=i.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=i.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=i.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=i.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=i.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=i.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,e.isIpad=n.hasOwnProperty("ipad"),e.isIphone=n.hasOwnProperty("iphone"),e.isAndroid=n.hasOwnProperty("android"),e.isIe=n.hasOwnProperty("ie"),e.isFirefox=n.hasOwnProperty("firefox"),e.isChrome=n.hasOwnProperty("chrome"),e.isOpera=n.hasOwnProperty("opera"),e.isSafari=n.hasOwnProperty("safari"),e.isWeChat="micromessenger"==i.match(/MicroMessenger/i),e.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),e.ver=s,e.isPhone=e.isAndroid||e.isIpad||e.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),i=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");e.isPc=n||i||o,e.isMac=i,e.isWin=n,e.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),i=0,e=n.length;i<e;i++)if(n[i]+"ransform"in t)return n[i].substr(0,n[i].length-1);return!1}(),i=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=i("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=e.isPhone,a=s||r,c=!1!==n,u=i("transitionProperty"),l=i("transitionDuration"),f=i("transformOrigin"),h=i("transitionTimingFunction"),m=i("transitionDelay"),d=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),v="onorientationchange"in window?"orientationchange":"resize",g=s?"touchstart":r?"MSPointerDown":"mousedown",y=s?"touchmove":r?"MSPointerMove":"mousemove",w=s?"touchend":r?"MSPointerUp":"mouseup",b=s?"touchcancel":r?"MSPointerUp":"mouseup",A=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),k=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),_=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),x=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),$=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},S=function(){var t=0;return function(){return t+=1}}(),E=(navigator.browserLanguage||navigator.language).toLowerCase(),T=function(){for(var n="webkitT,MozT,msT,OT".split(","),i=0,e=n.length;i<e;i++)if(n[i]+"ransform"in t)return"-"+n[i].substr(0,n[i].length-1)+"-";return""}(),C=function(n){return n in t?n:T+n in t?T+n:n},O="",P=function(){return"boxPack"in t?2009:T+"box-pack"in t?(O=T,2009):"flexPack"in t?2011:T+"flex-pack"in t?(O=T,2011):"flexBasis"in t?2013:T+"flex-basis"in t?(O=T,2013):void 0}(),B=2013==P?O+"flex":2011==P?O+"flexbox":2009==P?O+"box":"flex",F=2013==P?O+"align-items":2011==P?O+"flex-pack":2009==P?O+"box-pack":"align-items",D=2013==P?O+"justify-content":2011==P?O+"flex-align":2009==P?O+"box-align":"justify-content",L=2013==P?O+"flex":2011==P?O+"flex":2009==P?O+"box-flex":"flex",I=2013==P?O+"flex-direction":2011==P?O+"flex-direction":2009==P?O+"box-orient":"flex-direction",N=2013==P?"row":2011==P?"row":2009==P?"horizontal":"row",z=2013==P?"column":2011==P?"column":2009==P?"vertical":"column",M=C("animation"),R=C("box-shadow"),j=C("background-size"),V=C("transform"),U=C("transform-origin"),Y=C("transform-style"),q=C("perspective"),J=C("perspective-origin"),H=C("border-radius"),G=C("box-sizing"),Q=C("background-clip"),W=C("border-bottom-left-radius"),X=C("border-bottom-right-radius"),Z=C("border-top-left-radius"),K=C("border-top-right-radius"),tt=C("backface-visibility"),nt=C("transition"),it=C("transition-property"),et=C("transition-duration"),ot=C("transition-timing-function"),rt={box:B,"justify-content":D,"align-items":F,"background-size":j,"background-clip":Q,flex:L,"flex-direction":I,row:N,column:z,transform:V,"transform-origin":U,"transform-style":Y,perspective:q,"perspective-origin":J,"border-radius":H,"border-bottom-left-radius":W,"border-bottom-right-radius":X,"border-top-left-radius":Z,"border-top-right-radius":K,"box-sizing":G,"box-shadow":R,"backface-visibility":tt,transition:nt,"transition-property":it,"transition-duration":et,"transition-timing-function":ot,animation:M},st=function(){var t,n=[];for(var i in rt)rt.hasOwnProperty(i)&&("box"==i||"transition"==i||"flex"==i?n.push("([^-]"+i+"[^-])"):"row"==i||"column"==i?n.push(i):n.push("([^-]"+i+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),i=ct(n);return JSON.parse(i)},ct=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var i=rt[n];return t.substr(0,1)+i+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ut=function(t){return t=t.replace(/;/gi," ; "),ct(" "+t)};t=null,e.has3d=o,e.hasTouch=a,e.hasTransform=c,e._transform=V,e._transitionProperty=u,e._transitionDuration=l,e._transformOrigin=f,e._transitionTimingFunction=h,e._transitionDelay=m,e.RESIZE_EV=v,e.START_EV=g,e.MOVE_EV=y,e.END_EV=w,e.CANCEL_EV=b,e.TRNEND_EV=A,e.ANIEND_EV=k,e.FULLSCREEN_EV=d,e.LOCKPOINTER_EV=p,e.nextFrame=_,e.cancelFrame=x,e.language=E,e.counter=S,e.fixObjCss=at,e.fixCss=ut,e.css=rt,e.boxType=P,e.boxVendors=O,e.checkDomHasPosition=$,e.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},e.getBetweenNumber=function(t,n,i){return t=t>i?i:t,t=t<n?n:t}}(),e.rem2Px=function(t,n){return window.innerWidth/t*100*n},e.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},e.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=e},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),r=i(9),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=[],h=function(){function t(n){e(this,t),this[u]=$(n),this[l]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[u].each(function(){if(this.__bens_eventid__)t[l].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[l].push(n),s.set(n,new Map)}})}},{key:c,value:function(t,n){for(var i=this[l],e=0,o=i.length;e<o;e++){var r=i[e];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[l],n=0,i=t.length;n<i;n++){var e=t[n],o=s.get(e);o.has("myclickdown")||this[c](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,i=this[l].length;n<i;n++){var e=this[l][n],o=s.get(e);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[c](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[c](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[c](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[c](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[c](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[c](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[c](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[c](t,"myslideup"),this}},{key:"myend",value:function(t){return this[c](t,"myend"),this}},{key:"mystart",value:function(t){return this[c](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[c](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[u].each(function(){var i=this.__bens_eventid__,e=s.get(i);n?(s.delete(i),delete this.__bens_eventid__):(e.delete(t),0==e.size&&(s.delete(i),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var i=t.myTarget,e=!0;t.stopPop=function(){e=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(i){if(i&&"html"!=i.nodeName.toLowerCase()){var r=i.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&f.push(i),"myclickup"==n&&(f=[]);var c=a.get(n);c&&c.call(i,t)}e&&o(i)}};r(i)}},{key:"runMove",value:function(t,n,i){f.map(function(e){var o=e.__bens_eventid__,r=s.get(o);if(r){var a=r.get(i);a&&a.call(e,t,n)}})}}]),t}();new r({myTouchDown:function(t){h.run(t,"myclickdown")},myTouchUp:function(t){h.run(t,"myclickup")},myTouch:function(t){h.run(t,"myclickok")},myLongTouch:function(t){h.run(t,"mylongclick")},mySlideLeft:function(t){h.run(t,"myslideleft")},mySlideRight:function(t){h.run(t,"myslideright")},mySlideUp:function(t){h.run(t,"myslideup")},mySlideDown:function(t){h.run(t,"myslidedown")},myMove:function(t,n){h.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new h(t)}},function(t,n,i){"use strict";var e=i(2);i(0),i(5),i(7),i(11),i(6),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");e(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),i=$("#top_pc_menu"),o=$("#top_pc_close"),r=n.find(".menu_main"),s=n.find(".menu_close_btn"),a=function(){window.innerWidth<DATA.winSize?(n.css3({display:"block",background:"rgba(0,0,0,0)",transform:"scale(1)",opacity:1}),r.css3({transform:"translateX(0)"}),r.find("span").css({opacity:0}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),r.cssAnimate({transform:"translateX(-100%)"},500,function(){r.randomShowSpan()})):(n.css3({display:"block",background:"#181818",opacity:0,transform:"scale(0.95)"}),r.css3({transform:"translateX(-100%)"}),r.find("span").css({opacity:0}),n.cssAnimate({transform:"scale(1)",opacity:1},1e3,function(){r.randomShowSpan()},!0,"ease"))},c=function(){window.innerWidth<DATA.winSize?(n.cssAnimate({background:"rgba(0,0,0,0)"},500),r.cssAnimate({transform:"translateX(0)"},500,function(){r.find("span").css({opacity:0}),n.css({display:"none"})})):n.cssAnimate({transform:"scale(0.95)",opacity:0},1e3,function(){n.css({display:"none"})},!0,"ease")};e(t).myclickok(function(){a()}),e(s).myclickok(function(){c()}),e(o).myclickok(function(){$(this).hide().css({display:"none"}),c(),i.show()}),e(i).myclickok(function(){$(this).hide(),a(),o.css({display:"block"}).show()}),e(n).myclickok(function(){c()}).myclickdown(function(){}).myclickup(function(){}),e($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname,n=$("#menu_item").find("a");"/"==t.substr(t.length-1)?n.eq(0).addClass("notSelect"):n.each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,i){"use strict";function e(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,i){function e(o,r){try{var s=n[o](r),a=s.value}catch(t){return void i(t)}if(!s.done)return Promise.resolve(a).then(function(t){e("next",t)},function(t){e("throw",t)});t(a)}return e("next")})}}i(10),i(0);var o=i(12);$.fn.pageLoading=function(){var t=e(regeneratorRuntime.mark(function t(n,i,e){var r,s,a,c,u,l,f,h,m,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $("body").children().css({opacity:0}),r=$("<div></div>"),r.css({position:"fixed",left:0,top:0,width:"100%",height:"100%","z-index":1e4,background:"#181818"}),s=$("<div></div>"),s.css({position:"absolute",color:"#fff",left:"50%",top:"50%",width:"300px",height:"240px","margin-top":"-120px","margin-left":"-150px","text-align":"center","font-size":"25px","letter-spacing":"4px"}),a=$("<div></div>"),a.css({margin:"0 auto",width:"60px",height:"60px","background-image":"url(./image/home.png)","background-repeat":"no-repeat","background-position":"center center","-webkit-background-size":"17px 30px","background-size":"17px 30px","margin-bottom":"40px"}),c=$("<div></div>"),u=$("<div>AURA SPACE</div>"),u.css({width:"100%","line-height":"30px"}),l=$("<div>THE WORLD OF ART</div>"),l.css({"font-size":"10px","letter-spacing":"5px"}),f=$("<div>0</div>"),f.css({width:"100%","margin-top":"40px"}),c.append(a),s.append(c).append(u).append(l).append(f),r.append(s),$("body").append(r),c.set3dDom(),a.classAnimate({"0%":"transform:rotate3d(0,0,0，0)","25%":"transform:rotate3d(0,0.5,0,180deg)","50%":"transform:rotate3d(0,0,0.5,180deg)","75%":"transform:rotate3d(0.5,0,0,180deg)","100%":"transform:rotate3d(0,0,0,180deg)"},4e3,"linear",!0,!1,function(){},0,"transform"),h=(new Date).getTime(),t.next=23,new o(n,function(t,n){f.text(parseInt(100*t/n))});case 23:m=(new Date).getTime(),d=function(){r.cssAnimate({opacity:0},500,function(){a.removeClassAnimate(),r.remove(),i(),setTimeout(function(){var t=!1;$("body").children().each(function(){$(this).cssAnimate({opacity:1},1e3,function(){t||(t=!0,setTimeout(function(){e()},100))},!0,"","opacity")})},200)})},m-h<1e3?setTimeout(function(){d()},1e3+h-m):d();case 26:case"end":return t.stop()}},t,this)}));return function(n,i,e){return t.apply(this,arguments)}}(),t.exports=null},function(t,n,i){"use strict";var e=i(1);i(0),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),i=function(n,i){n.removeEventListener(e.TRNEND_EV,t[i],!1),delete t[i],delete n.__bens_cssfn_id__};return function(o,r,s,a,c,u){var l=$(this),f=l.get(0),h=f.style;if(c=c||"ease",o=JSON.parse(e.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",f.__bens_cssfn_id__){var m=f.__bens_cssfn_id__;i(f,m)}var d=n();f.__bens_cssfn_id__=d,t[d]=function(t){var n=t.propertyName;t.target==f&&o.hasOwnProperty(n)&&(h[e._transitionProperty]="",h[e._transitionDuration]="",h[e._transitionTimingFunction]="",h.webkitTransformStyle="",h.webkitBackfaceVisibility="",h.willChange="auto",s(),i(f,d))},h[e._transitionProperty]="all",h[e._transitionDuration]=r+"ms",h[e._transitionTimingFunction]=c,h.willChange=u,h.webkitTransformStyle="preserve-3d",h.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){f.addEventListener(e.TRNEND_EV,t[d],!1),l.css(o)},1)}}(),t.exports=null},function(t,n,i){"use strict";var e=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){var t=DATA&&DATA.winSize?DATA.winSize:800;$(this).each(function(){var n=$(this).text();$(this).data({text:n});var i=null;$(this).hover(function(){var n=$(this).data("text").length,o=$(this),r=o.find("span");i=setInterval(function(){window.innerWidth>t&&o.prepend(r.eq(e(n)))},50)},function(){clearInterval(i);var e=$(this).find("span");if(window.innerWidth>t)for(var o=0,r=n.length;o<r;o++){var s=""==n[o]?"$nbsp;":n[o];e.eq(o).html(s)}})})}},function(t,n,i){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),r=i(1),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[l]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(n){t.endFn(n)},!1)}},{key:f,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:h,value:function(t){var n=t.clientX,i=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,i=t.touches[0].clientY),{x:n,y:i}}},{key:m,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[m]();var n=this[h](t),i=n.x,e=n.y;this[f](i,e),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[h](t),i=n.x,e=n.y;this[f](i,e)}},{key:"endFn",value:function(t){var n=this[h](t),i=n.x,e=n.y;this[f](i,e)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),t}();t.exports=d},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),a=function t(n,i,e){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,i);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,i,e)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(e)},c=i(8),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=Symbol(),p=Symbol(),v=Symbol(),g=Symbol(),y=Symbol(),w=Symbol(),b=Symbol(),A=Symbol(),k=Symbol(),_=Symbol(),x=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};e(this,n);var i=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return i[l]=t.myTouchDown||function(){},i[f]=t.myTouchUp||function(){},i[h]=t.myTouch||function(){},i[m]=t.myLongTouch||function(){},i[d]=t.mySlideLeft||function(){},i[p]=t.mySlideRight||function(){},i[v]=t.mySlideUp||function(){},i[g]=t.mySlideDown||function(){},i[y]=t.myMove||function(){},i.canMoveLength=t.canMoveLength||20,i.longClickTime=t.longClickTime||1e3,i.slideMaxTime=t.slideMaxTime||500,i[u]=!1,i[w]=!0,i[A]=!1,i}return r(n,t),s(n,[{key:"startFn",value:function(t){var i=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[u]=!0,this[w]=!0,this[A]=!1,this[l](t),this[k]=setTimeout(function(){i[w]&&(i[A]=!0,i[f](t),i[m](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[b]()&&(this[w]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[u]=!1,!this[A])){if(clearTimeout(this[k]),this[f](t),this[w])return void this[h](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[_](t)}}},{key:b,value:function(){var t=this.points.length,n=this.points[0],i=this.points[t-1],e=Math.abs;if(!n||!i)return!0;var o=i.x-n.x,r=i.y-n.y;return this[y](o,r),e(o)>this.canMoveLength||e(r)>this.canMoveLength}},{key:_,value:function(t){var n=this.points.length,i=this.points[0],e=this.points[n-1],o=Math.abs,r=e.x-i.x,s=e.y-i.y;o(r)>o(s)?r>0?this[p](t):this[d](t):s>0?this[g](t):this[v](t)}}]),n}(c);t.exports=x},function(t,n,i){"use strict";i(0);var e=i(1);$.fn.classAnimate=function(){var t={},n=function(n,i){n.get(0).removeEventListener(e.ANIEND_EV,t[i],!1),n.removeClassAnimate(),delete t[i]},i=function(i,o,r,s){var a="__temp_"+e.counter()+"__";o.get(0).addEventListener(e.ANIEND_EV,t[a]=function(t){i==t.animationName&&(o.css(s),r.call(this),n(o,a))},!1)};return function(t,n,o,r,s,a,c,u){var l="__keyframes_"+e.counter()+"__";n=parseInt(n)||1e3,o=o||"linear",r=$.getBloom(r),a=$.getFunction(a),s=$.getBloom(s),u=u||"auto",c=c||0,n+="ms",c+="ms",r=r?"infinite":"",s=s?"alternate":"";var f=l+"class__";if(!$.isObject(t))throw"css3Animate 参数样式结构错误";var h="",m=$("<style id='"+f+"'></style>"),d=" animation: "+l+" "+n+" "+o+" "+c+" "+r+" "+s+";";d=$.css3(d),d="."+f+"{"+d+"} @keyframes "+l+"{";for(var p in t)if(t.hasOwnProperty(p)){var v=$.css3(t[p]);d+=p+" {"+v+"}",h=v}d+="}",m.text(d),$("head").append(m);var g={};h=h.split(";");for(var y=0,w=h.length;y<w;y++){var b=h[y].split(":");if(2==b.length){var A=$.trim(b[0]),k=$.trim(b[1]);g[A]=k}}return $(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||($(this).css({"will-change":u}),$(this).addClass(f),$(this).get(0).__animate_css3_class__=f)}),r?$(this):($(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||i(l,$(this),a,g)}),$(this))}}(),$.fn.removeClassAnimate=function(){var t={};$(this).each(function(){var n=$(this).get(0).__animate_css3_class__;t[n]=!0,$(this).removeClass(n),$(this).css({"will-change":"auto"})});for(var n in t)if(t.hasOwnProperty(n)){var i=$("#"+n);0!=i.length&&i.remove()}},t.exports=null},function(t,n,i){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,i=0,e=[],o=0,r=n;o<r;o++)e.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=e.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},i),i+=30}()},t.exports=null},function(t,n,i){"use strict";function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){var i=[],e=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(e=(s=a.next()).done)&&(i.push(s.value),!n||i.length!==n);e=!0);}catch(t){o=!0,r=t}finally{try{!e&&a.return&&a.return()}finally{if(o)throw r}}return i}return function(n,i){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,n){for(var i=0;i<n.length;i++){var e=n[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}return function(n,i,e){return i&&t(n.prototype,i),e&&t(n,e),n}}(),s=(Symbol(),Symbol()),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=function(){function t(n,i){return e(this,t),this.ress=n,this.propFn=i||function(){},this.data=[],this[l]=Object.entries(this.ress).length,this[f]=0,this[s](),this[u]()}return r(t,[{key:s,value:function(){var t=!0,n=!1,i=void 0;try{for(var e,r=Object.entries(this.ress)[Symbol.iterator]();!(t=(e=r.next()).done);t=!0){var s=e.value,a=o(s,2),c=a[0],u=a[1];this.data.push({key:c,src:u})}}catch(t){n=!0,i=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw i}}}},{key:a,value:function(t){var n=t.key,i=t.src,e=this;return new Promise(function(t,o){var r=new Image;r.onload=function(){e[f]++,e.propFn(e[f],e[l]),t({key:n,val:this})},r.onerror=function(){o(i)},r.src=i})}},{key:c,value:function(){var t=this,n=this.data.map(function(n){return t[a](n)});return Promise.all(n)}},{key:u,value:function(){var t=this;return new Promise(function(n,i){t[c]().then(function(t){var i={};t.map(function(t){var n=t.key,e=t.val;i[n]=e}),n({state:1,data:i})}).catch(function(t){n({state:0,msg:t})})})}}]),t}();t.exports=h},function(t,n,i){"use strict";i(0),i(5),$.fn.autoShow=function(t){$(this).css({overflow:"hidden"});for(var n=$(this).find(t),i=[],e=0,o=n.length;e<o;e++){var r=n.eq(e).offset().top;i.push(r)}n.css({opacity:0,transform:"translateY("+window.innerHeight+"px)"});var s=function(){var t=$(window).scrollTop(),e=window.innerHeight,o=e-100;i.map(function(i,e){i-t<o&&(n.eq(e).data("run")||n.eq(e).data({run:!0}).cssAnimate({opacity:1,transform:"translateY(0)"},800,function(){},!0,"ease-out","transform"))})};$(window).scroll(function(){s()}),s()},t.exports=null},function(t,n,i){"use strict";var e=function(){var t={},n=window.location.search;n=n.substr(1);for(var i=n.split("&"),e=0,o=i.length;e<o;e++){var r=i[e],s=r.split("=");t[s[0]]=decodeURI(s[1])}return t};t.exports=e},,,function(t,n,i){"use strict";i(0),i(5);var e=i(23),o=i(2),r=i(1),s=function(t){this.imgs=t.imgs||[],this.isPc=r.isPc,this.arrowImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAG+SURBVFiFvdbNi05hGMfxy3grRihjYZKEksZKsrAhWWGhlCzEhthYYM0fYCn/gJSUrbzEbmYhxcLCWI0USjE1UzN5eeZjMTaernPmOed53L+6F/fr99t9d7pOICrabjzGJK5iWc3a1q1u8oV/cxfLBy0wFNUZ7eqfjYiHEbG6Zk/z1Nidl+cZ1pZ4gsC1CokJbCghELiATiLxBptLCARO42ciMYmtJQQCxzCfSHzAzhICgUOYSSS+YG8JgcB+fEskvuNACYHAGD4nErM4XEIgsANTicQ8TpQQCIziXSLxC2dKCARG8DqR6OBiCYHAeownEnClhEBgDZ4kArNYV7Wvrho2zVxE3EvGhyNie5tq2LRdlteMiRJPcDMBw0ts+p8CQ7hTAX+qh/+GfuCr8KACfh8rezmnLXwYzyvgt//eTE9ntYGP4FUF/EbT85rCt+F9Au7gUpvbbLJ4DJ8S+A+cagNvInAQ0wl8BkfawnsVOI65BP4V+/qB9yJwzmJp7c4UdvULX0rgJBYS+FtsGQR8KYHsUxvHxkHBqa+GH7v6jyLiaERMNy2TdVlRM3c9IhYiYk8sltlbEfF7kPCIiD92sihgXGAdaAAAAABJRU5ErkJggg==",this.closeImg="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAbwAAAG8B8aLcQwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAEPSURBVFiF7ZexjQIxEEW/4bQJFEALJJccHdADVVAB0bZBQBmIJg4CaICYEpDQI2CCPZ+Fh9PuWUj7JQe2v2feanfG2gCopAZFs/cAPcA7AVSSZpKCwxvMW7kiA7kxAS48dLL5M+/JvJeMV4ALYMlPfQOjhG9ke00t2wCY8ltbYNjwDG0t1rQNAAF1Ivi6sb9O7Nee2F4AAZtEkpWNWBtv3FcAPoBdIlmsnXlbBxAwBg5Pkh/M4475KoB4lNY5kfyMo+ziUbwTvtUrKP4RFi3DOpHk3xpRp63YUwXzaL6XtJB0a6zdbG2fOfunKuj0Og7g+i+oJH3aE+YOBElfko6SrrnAXoDOVLwT9gA9QHGAOyELxcimF9NPAAAAAElFTkSuQmCC",this.main=null,this.leftBtn=null,this.rightBtn=null,this.closeBtn=null,this.loadDom=null,this.imgDiv=null,this.nowShowDom=null,this.nowShowNumber=-1,this.canClick=!0,this.init()};s.prototype={init:function(){this.createMain(),this.createButton(),this.createLoading(),this.createImgDiv(),this.isPc?this.eventBind():this.eventBindPhone(),$("body").append(this.main)},createMain:function(){var t=$("<div></div>");t.css({width:"100%",height:"100%",position:"fixed",left:0,top:0,"z-index":"9999999",background:"rgba(0,0,0,0.0)",display:"none"}),this.main=t},createButton:function(){var t=null,n=$("<div></div>"),i=$("<div></div>");n.css3({display:"none",position:"absolute",right:"10px",top:"50%","margin-top":"-16px",width:"32px",height:"32px",background:"url('"+this.arrowImg+"') no-repeat center center","background-size":"100% 100%",cursor:"pointer",transition:"all 0.2s linear","z-index":10}),t=n.clone().css3({left:"10px",right:"",transform:"rotate(180deg)"}),i.css({display:"none",position:"absolute",right:"10px",top:"10px",width:"32px",height:"32px",background:"url('"+this.closeImg+"') no-repeat center center","background-size":"100% 100%",cursor:"pointer",transition:"all 0.2s linear","z-index":10}),this.isPc&&(this.leftBtn=t,this.rightBtn=n,this.main.append(n),this.main.append(t)),this.closeBtn=i,this.main.append(i)},createLoading:function(){var t=$("<div></div>");t.css3({width:"20px",height:"20px","border-radius":"32px",border:"2px solid #fff","border-top":"none","border-left":"none",position:"absolute",left:"50%",top:"50%","margin-top":"-16px","margin-left":"-16px"}),t.cssAnimate({"0%":"transform:rotate(0deg)","100%":"transform:rotate(360deg)"},800,"ease-in",!0,!1),this.loadDom=t},createImgDiv:function(){var t=$("<div class='___img_main___'></div>");this.isPc?t.css({width:"95%",height:"95%",position:"absolute",left:"2.5%",top:"2.5%"}):t.css({width:"100%",height:"100%",position:"absolute",left:0,top:0}),t.append(this.loadDom),this.imgDiv=t},showImg:function(t){this.canClick=!1;var n=t>this.nowShowNumber?"100%":"-100%",i=t<this.nowShowNumber?"100%":"-100%",e=this.imgDiv.clone().css({left:n}),o=new Image,r=this;this.main.append(e),t=t<0?r.imgs.length-1:t,t=t>=r.imgs.length?0:t;var s=this.imgs[t];this.hideImg(i),o.onload=function(){r.setImgSize(this,e),e.find("div").remove(),e.append(this),$(this).click(function(t){t.stopPropagation()})},o.src=s;var a=this.isPc?"2.5%":"0";this.nowShowDom?e.cssAnimate({left:a},500,function(){r.nowShowDom&&r.nowShowDom.remove(),r.nowShowDom=e,r.nowShowNumber=t,r.canClick=!0}):(this.main.css({display:"block"}),this.main.cssAnimate({"background-color":"rgba(0,0,0,0.5)"},500,function(){}),e.css({left:a}),r.nowShowDom&&r.nowShowDom.remove(),r.nowShowDom=e,r.nowShowNumber=t,r.canClick=!0)},hideImg:function(t){this.nowShowDom&&this.nowShowDom.cssAnimate({left:t},500)},setImgSize:function(t,n){var i=parseInt(n.width()),o=parseInt(n.height()),r=t.width,s=t.height,a=e(r,s,i,o);$(t).css({width:a.width+"px",height:a.height+"px",position:"absolute",left:"50%",top:"50%","margin-left":-a.width/2+"px","margin-top":-a.height/2+"px"})},eventBind:function(){var t=this;this.leftBtn.click(function(){if(t.canClick){var n=t.nowShowNumber-1;t.showImg(n)}}),this.rightBtn.click(function(){if(t.canClick){var n=t.nowShowNumber+1;t.showImg(n)}}),this.closeBtn.click(function(){t.destroy()}),this.main.click(function(){t.destroy()})},eventBindPhone:function(){var t=this;this.main.click(function(){t.destroy()})},destroy:function(){this.isPc?(this.leftBtn.unbind("click"),this.rightBtn.unbind("click")):o(this.main).unbind(!0),this.closeBtn.unbind("click"),this.main.remove()}},t.exports=s},,,function(t,n,i){"use strict";i(3),i(4),i(13);var e=i(17),o=i(14);$(document).ready(function(){var t=o().id,n=DATA.artist,i={z:"./image/menu_bg1.png",x:"./image/meun_bg2.png",c:"./image/close.png",d:"./image/home.png",e:"./image/home_.png",f:"./image/menu.png",g:"./image/menu_.png"};n.map(function(n,e){if(n.id==t){n.works.map(function(t,n){i["a"+n]=t})}}),$("body").pageLoading(i,function(){r.init()},function(){$("#lists").autoShow("div")})});var r={data:null,init:function(){var t=o().id;if(!t)return alert("参数错误！"),void window.history.go(-1);var n=this.getData(t);if(!n)return alert("参数错误！"),void window.history.go(-1);this.bindData(n),this.bindScrollEffect(),this.addShowBigImage(n)},getData:function(t){var n=null;return DATA.artist.map(function(i){i.id==parseInt(t)&&(n=i)}),n},bindData:function(t){$("#name").text(t.name1),$("#work_number").text(t.works.length);var n=$("#lists"),i=$("#list");t.works.map(function(t,e){var o=i.clone().attr({id:""}).css({display:"block"});o.find("img").attr({src:t}).data({n:e}),o.data({n:e}),n.append(o)}),i.remove()},bindScrollEffect:function(){var t=$("#show_scroll_main");$(window).scroll(function(){var n=window.innerHeight,i=parseInt($("body").height()),e=$(window).scrollTop(),o=100*e/(i-n);o=0==o?.1:o,o=!o||o<0?"100%":o+"%",t.css({height:o})})},addShowBigImage:function(t){$(".artist_info_item").find("img").click(function(){if(window.innerWidth>=DATA.winSize){var n=$(this).data("n");new e({imgs:t.works}).showImg(n)}})}}},,,function(t,n,i){"use strict";var e=function(t,n,i,e){var o,r;return t&&n?(t>0&&n>0?t/n>=i/e?t>i?(o=i,r=n*i/t):(o=t,r=n):n>e?(r=e,o=t*e/n):(o=t,r=n):(o=i,r=e),{width:o,height:r}):{width:i,height:e}};t.exports=e}]);