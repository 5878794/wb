!function(t){function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var e={};n.m=t,n.c=e,n.i=function(t){return t},n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:i})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="",n(n.s=25)}([function(t,n,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o=e(1);$.isNumber=function(t){return"number"==typeof t},$.isString=function(t){return"string"==typeof t},$.isBoolean=function(t){return"boolean"==typeof t},$.isObject=function(t){return null!==t&&void 0!==t&&!$.isArray(t)&&"object"===(void 0===t?"undefined":i(t))},$.isArray=function(t){return t.constructor===Array},$.isFunction=function(t){return"function"==typeof t},$.isUndefined=function(t){return void 0===t},$.isUrl=function(t){return new RegExp("[a-zA-z]+://[^s]*").test(t)},$.isJson=function(t){return"object"==(void 0===t?"undefined":i(t))&&"[object object]"==Object.prototype.toString.call(t).toLowerCase()&&!t.length},$.getDom=function(t){var n;return t?($.isString(t)?n=document.getElementById(t):$.isObject(t)&&(1==t.length&&(n=t.get(0)),1==t.nodeType&&(n=t)),n):n},$.getArray=function(t){return $.isArray(t)?t:[]},$.getFunction=function(t){return $.isFunction(t)?t:function(){}},$.getBloom=function(t){return!!$.isBoolean(t)&&t},$.getObj=function(t){return $.isObject(t)?t:{}},$.getNumber=function(t){return t=parseInt(t),t=t||0},$.fn.css3=function(t){return $(this).css(o.fixObjCss(t)),$(this)},$.css3=function(t){return o.fixCss(t)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(t){var n=$("<div></div>");n.css({"transform-style":"preserve-3d"}),n.append($(this).children()),$(this).css({perspective:t+"px"}).append(n)},$.allInputCanNotUse=function(t){if(t){var n=$("input"),e=$("textarea"),i=$("select"),o=function(t){t.attr("disabled")||t.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};n.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),s=$("textarea"),a=$("select"),c=function(t){"yes"==t.data("__set_disabled__")&&t.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),s.each(function(){c($(this))}),a.each(function(){c($(this))})}},t.exports=null},function(t,n,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var t,n={},e=navigator.userAgent.toLowerCase();(t=e.match(/ipad; cpu os ([\d_]+)/))?n.ipad=t[1].replace(/_/g,"."):(t=e.match(/iphone os ([\d_]+)/))?n.iphone=t[1].replace(/_/g,"."):(t=e.match(/android[ \/]([\d.]+)/))?n.android=t[1]:(t=e.match(/rv:([\d.]+)\) like gecko/))?n.ie=t[1]:(t=e.match(/msie ([\d.]+)/))?n.ie=t[1]:(t=e.match(/firefox\/([\d.]+)/))?n.firefox=t[1]:(t=e.match(/chrome\/([\d.]+)/))?n.chrome=t[1]:(t=e.match(/opera.([\d.]+)/))?n.opera=t[1]:(t=e.match(/version\/([\d.]+).*safari/))?n.safari=t[1]:n._=0,i.isIpad=n.hasOwnProperty("ipad"),i.isIphone=n.hasOwnProperty("iphone"),i.isAndroid=n.hasOwnProperty("android"),i.isIe=n.hasOwnProperty("ie"),i.isFirefox=n.hasOwnProperty("firefox"),i.isChrome=n.hasOwnProperty("chrome"),i.isOpera=n.hasOwnProperty("opera"),i.isSafari=n.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in n)n.hasOwnProperty(r)&&(o=n[r]);o=o.split(".");for(var s=[],a=0,c=o.length;a<c&&!(a>=2);a++)s.push(o[a]);s=s.join("."),i.ver=s,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var t=navigator.platform,n=0==t.indexOf("Win"),e=0==t.indexOf("Mac"),o="X11"==t||0==t.indexOf("Linux");i.isPc=n||e||o,i.isMac=e,i.isWin=n,i.isLinux=o}(),function(){var t=document.createElement("div").style,n=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in t)return"";for(var n="webkitT,MozT,msT,OT,t".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return n[e].substr(0,n[e].length-1);return!1}(),e=function(t){return n?(t=t.charAt(0).toUpperCase()+t.substr(1),n+t):t},o=e("perspective")in t,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),s=i.isPhone,a=s||r,c=!1!==n,u=e("transitionProperty"),l=e("transitionDuration"),f=e("transformOrigin"),h=e("transitionTimingFunction"),m=e("transitionDelay"),d=function(){return!1===n?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[n]}(),p=function(){return!1===n?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[n]}(),v="onorientationchange"in window?"orientationchange":"resize",y=s?"touchstart":r?"MSPointerDown":"mousedown",g=s?"touchmove":r?"MSPointerMove":"mousemove",b=s?"touchend":r?"MSPointerUp":"mouseup",w=s?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===n?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[n]}(),k=function(){return!1===n?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[n]}(),$=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return setTimeout(t,1)}}(),x=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),S=function(t){var n=t.css("position");return"fixed"==n||"absolute"==n||"relative"==n},T=function(){var t=0;return function(){return t+=1}}(),E=(navigator.browserLanguage||navigator.language).toLowerCase(),A=function(){for(var n="webkitT,MozT,msT,OT".split(","),e=0,i=n.length;e<i;e++)if(n[e]+"ransform"in t)return"-"+n[e].substr(0,n[e].length-1)+"-";return""}(),O=function(n){return n in t?n:A+n in t?A+n:n},P="",F=function(){return"boxPack"in t?2009:A+"box-pack"in t?(P=A,2009):"flexPack"in t?2011:A+"flex-pack"in t?(P=A,2011):"flexBasis"in t?2013:A+"flex-basis"in t?(P=A,2013):void 0}(),C=2013==F?P+"flex":2011==F?P+"flexbox":2009==F?P+"box":"flex",M=2013==F?P+"align-items":2011==F?P+"flex-pack":2009==F?P+"box-pack":"align-items",D=2013==F?P+"justify-content":2011==F?P+"flex-align":2009==F?P+"box-align":"justify-content",L=2013==F?P+"flex":2011==F?P+"flex":2009==F?P+"box-flex":"flex",j=2013==F?P+"flex-direction":2011==F?P+"flex-direction":2009==F?P+"box-orient":"flex-direction",z=2013==F?"row":2011==F?"row":2009==F?"horizontal":"row",N=2013==F?"column":2011==F?"column":2009==F?"vertical":"column",R=O("animation"),q=O("box-shadow"),V=O("background-size"),B=O("transform"),I=O("transform-origin"),U=O("transform-style"),W=O("perspective"),H=O("perspective-origin"),J=O("border-radius"),X=O("box-sizing"),Y=O("background-clip"),K=O("border-bottom-left-radius"),Z=O("border-bottom-right-radius"),G=O("border-top-left-radius"),Q=O("border-top-right-radius"),tt=O("backface-visibility"),nt=O("transition"),et=O("transition-property"),it=O("transition-duration"),ot=O("transition-timing-function"),rt={box:C,"justify-content":D,"align-items":M,"background-size":V,"background-clip":Y,flex:L,"flex-direction":j,row:z,column:N,transform:B,"transform-origin":I,"transform-style":U,perspective:W,"perspective-origin":H,"border-radius":J,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":X,"box-shadow":q,"backface-visibility":tt,transition:nt,"transition-property":et,"transition-duration":it,"transition-timing-function":ot,animation:R},st=function(){var t,n=[];for(var e in rt)rt.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?n.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?n.push(e):n.push("([^-]"+e+")"));return t=n.join("|"),new RegExp(t,"ig")}(),at=function(t){var n=JSON.stringify(t),e=ct(n);return JSON.parse(e)},ct=function(t){return t.replace(st,function(t){var n=t.substr(1,t.length-2);if("box"==n||"transition"==n||"flex"==n){var e=rt[n];return t.substr(0,1)+e+t.substr(t.length-1)}return"row"==t||"column"==t?rt[t]:t.substr(0,1)+rt[t.substr(1)]})},ut=function(t){return t=t.replace(/;/gi," ; "),ct(" "+t)};t=null,i.has3d=o,i.hasTouch=a,i.hasTransform=c,i._transform=B,i._transitionProperty=u,i._transitionDuration=l,i._transformOrigin=f,i._transitionTimingFunction=h,i._transitionDelay=m,i.RESIZE_EV=v,i.START_EV=y,i.MOVE_EV=g,i.END_EV=b,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=k,i.FULLSCREEN_EV=d,i.LOCKPOINTER_EV=p,i.nextFrame=$,i.cancelFrame=x,i.language=E,i.counter=T,i.fixObjCss=at,i.fixCss=ut,i.css=rt,i.boxType=F,i.boxVendors=P,i.checkDomHasPosition=S,i.trim=function(t){return t.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(t,n,e){return t=t>e?e:t,t=t<n?n:t}}(),i.rem2Px=function(t,n){return window.innerWidth/t*100*n},i.delHtmlTag=function(t){return t.replace(/<[^>]+>/g,"")},i.sleep=function(t){return t*=1e3,new Promise(function(n){setTimeout(function(){n()},t)})},t.exports=i},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(9),s=new Map,a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=[],h=function(){function t(n){i(this,t),this[u]=$(n),this[l]=[],this[a](),this.addDefaultEvent()}return o(t,[{key:a,value:function(){var t=this;this[u].each(function(){if(this.__bens_eventid__)t[l].push(this.__bens_eventid__);else{var n=Symbol();this.__bens_eventid__=n,t[l].push(n),s.set(n,new Map)}})}},{key:c,value:function(t,n){for(var e=this[l],i=0,o=e.length;i<o;i++){var r=e[i];s.get(r).set(n,t)}}},{key:"addDefaultEvent",value:function(){for(var t=this[l],n=0,e=t.length;n<e;n++){var i=t[n],o=s.get(i);o.has("myclickdown")||this[c](function(t){t.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(t){t.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(t){for(var n=0,e=this[l].length;n<e;n++){var i=this[l][n],o=s.get(i);if(o){var r=o.get(t);r&&r()}}return this}},{key:"myclickok",value:function(t){return this[c](t,"myclickok"),this}},{key:"myclickdown",value:function(t){return this[c](t,"myclickdown"),this}},{key:"myclickup",value:function(t){return this[c](t,"myclickup"),this}},{key:"mylongclick",value:function(t){return this[c](t,"mylongclick"),this}},{key:"myslideleft",value:function(t){return this[c](t,"myslideleft"),this}},{key:"myslideright",value:function(t){return this[c](t,"myslideright"),this}},{key:"myslidedown",value:function(t){return this[c](t,"myslidedown"),this}},{key:"myslideup",value:function(t){return this[c](t,"myslideup"),this}},{key:"myend",value:function(t){return this[c](t,"myend"),this}},{key:"mystart",value:function(t){return this[c](t,"myclickdown"),this}},{key:"mymove",value:function(t){return this[c](t,"mymove"),this}},{key:"unbind",value:function(t){var n=!(t&&!$.isBoolean(t))||t;this[u].each(function(){var e=this.__bens_eventid__,i=s.get(e);n?(s.delete(e),delete this.__bens_eventid__):(i.delete(t),0==i.size&&(s.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(t,n){var e=t.myTarget,i=!0;t.stopPop=function(){i=!1};var o=function(t){var n=t.parentNode;r(n)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,a=s.get(r);if(a){"myclickdown"==n&&f.push(e),"myclickup"==n&&(f=[]);var c=a.get(n);c&&c.call(e,t)}i&&o(e)}};r(e)}},{key:"runMove",value:function(t,n,e){f.map(function(i){var o=i.__bens_eventid__,r=s.get(o);if(r){var a=r.get(e);a&&a.call(i,t,n)}})}}]),t}();new r({myTouchDown:function(t){h.run(t,"myclickdown")},myTouchUp:function(t){h.run(t,"myclickup")},myTouch:function(t){h.run(t,"myclickok")},myLongTouch:function(t){h.run(t,"mylongclick")},mySlideLeft:function(t){h.run(t,"myslideleft")},mySlideRight:function(t){h.run(t,"myslideright")},mySlideUp:function(t){h.run(t,"myslideup")},mySlideDown:function(t){h.run(t,"myslidedown")},myMove:function(t,n){h.runMove(t,n,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),t.exports=function(t){return new h(t)}},function(t,n,e){"use strict";var i=e(2);e(0),e(5),e(7),e(11),e(6),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var t=$("#top_left");i(t).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var t=$("#top_right"),n=$("#menu"),e=$("#top_pc_menu"),o=$("#top_pc_close"),r=n.find(".menu_main"),s=n.find(".menu_close_btn"),a=function(){window.innerWidth<DATA.winSize?(n.css3({display:"block",background:"rgba(0,0,0,0)",transform:"scale(1)",opacity:1}),r.css3({transform:"translateX(0)"}),r.find("span").css({opacity:0}),n.cssAnimate({background:"rgba(0,0,0,0.7)"},500),r.cssAnimate({transform:"translateX(-100%)"},500,function(){r.randomShowSpan()})):(n.css3({display:"block",background:"#181818",opacity:0,transform:"scale(0.5)"}),r.css3({transform:"translateX(-100%)"}),r.find("span").css({opacity:0}),n.cssAnimate({transform:"scale(1)",opacity:1},500,function(){r.randomShowSpan()}))},c=function(){window.innerWidth<DATA.winSize?(n.cssAnimate({background:"rgba(0,0,0,0)"},500),r.cssAnimate({transform:"translateX(0)"},500,function(){r.find("span").css({opacity:0}),n.css({display:"none"})})):n.cssAnimate({transform:"scale(0.5)",opacity:0},500,function(){n.css({display:"none"})})};i(t).myclickok(function(){a()}),i(s).myclickok(function(){c()}),i(o).myclickok(function(){$(this).hide().css({display:"none"}),c(),e.show()}),i(e).myclickok(function(){$(this).hide(),a(),o.css({display:"block"}).show()}),i(n).myclickok(function(){c()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(t){t.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var t=window.location.pathname,n=$("#menu_item").find("a");"/"==t.substr(t.length-1)?n.eq(0).addClass("notSelect"):n.each(function(){t.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(t,n,e){"use strict";function i(t){return function(){var n=t.apply(this,arguments);return new Promise(function(t,e){function i(o,r){try{var s=n[o](r),a=s.value}catch(t){return void e(t)}if(!s.done)return Promise.resolve(a).then(function(t){i("next",t)},function(t){i("throw",t)});t(a)}return i("next")})}}e(10),e(0);var o=e(12);$.fn.pageLoading=function(){var t=i(regeneratorRuntime.mark(function t(n,e,i){var r,s,a,c,u,l,f,h,m,d;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return $("body").children().css({opacity:0}),r=$("<div></div>"),r.css({position:"fixed",left:0,top:0,width:"100%",height:"100%","z-index":1e4,background:"#181818"}),s=$("<div></div>"),s.css({position:"absolute",color:"#fff",left:"50%",top:"50%",width:"300px",height:"240px","margin-top":"-120px","margin-left":"-150px","text-align":"center","font-size":"25px","letter-spacing":"4px"}),a=$("<div></div>"),a.css({margin:"0 auto",width:"60px",height:"60px","background-image":"url(./image/home.png)","background-repeat":"no-repeat","background-position":"center center","-webkit-background-size":"17px 30px","background-size":"17px 30px","margin-bottom":"40px"}),c=$("<div></div>"),u=$("<div>AURA SPACE</div>"),u.css({width:"100%","line-height":"30px"}),l=$("<div>THE WORLD OF ART</div>"),l.css({"font-size":"10px","letter-spacing":"5px"}),f=$("<div>0</div>"),f.css({width:"100%","margin-top":"40px"}),c.append(a),s.append(c).append(u).append(l).append(f),r.append(s),$("body").append(r),c.set3dDom(),a.classAnimate({"0%":"transform:rotate3d(0,0,0，0)","25%":"transform:rotate3d(0,0.5,0,180deg)","50%":"transform:rotate3d(0,0,0.5,180deg)","75%":"transform:rotate3d(0.5,0,0,180deg)","100%":"transform:rotate3d(0,0,0,180deg)"},4e3,"linear",!0,!1,function(){},0,"transform"),h=(new Date).getTime(),t.next=23,new o(n,function(t,n){f.text(parseInt(100*t/n))});case 23:m=(new Date).getTime(),d=function(){r.cssAnimate({opacity:0},500,function(){a.removeClassAnimate(),r.remove(),e(),setTimeout(function(){var t=!1;$("body").children().each(function(){$(this).cssAnimate({opacity:1},1e3,function(){t||(t=!0,setTimeout(function(){i()},100))},!0,"","opacity")})},200)})},m-h<1e3?setTimeout(function(){d()},1e3+h-m):d();case 26:case"end":return t.stop()}},t,this)}));return function(n,e,i){return t.apply(this,arguments)}}(),t.exports=null},function(t,n,e){"use strict";var i=e(1);e(0),$.fn.cssAnimate=function(){var t={},n=function(){var t=0;return function(){return t+=1}}(),e=function(n,e){n.removeEventListener(i.TRNEND_EV,t[e],!1),delete t[e],delete n.__bens_cssfn_id__};return function(o,r,s,a,c,u){var l=$(this),f=l.get(0),h=f.style;if(c=c||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,s=$.getFunction(s),a=!!$.isBoolean(a)&&a,u=u||"auto",f.__bens_cssfn_id__){var m=f.__bens_cssfn_id__;e(f,m)}var d=n();f.__bens_cssfn_id__=d,t[d]=function(t){var n=t.propertyName;t.target==f&&o.hasOwnProperty(n)&&(h[i._transitionProperty]="",h[i._transitionDuration]="",h[i._transitionTimingFunction]="",h.webkitTransformStyle="",h.webkitBackfaceVisibility="",h.willChange="auto",s(),e(f,d))},h[i._transitionProperty]="all",h[i._transitionDuration]=r+"ms",h[i._transitionTimingFunction]=c,h.willChange=u,h.webkitTransformStyle="preserve-3d",h.webkitBackfaceVisibility=a?"visible":"hidden",setTimeout(function(){f.addEventListener(i.TRNEND_EV,t[d],!1),l.css(o)},1)}}(),t.exports=null},function(t,n,e){"use strict";var i=function(t){return parseInt(Math.random()*t)};$.fn.hoverSpanJump=function(){var t=DATA&&DATA.winSize?DATA.winSize:800;$(this).each(function(){var n=$(this).text();$(this).data({text:n});var e=null;$(this).hover(function(){var n=$(this).data("text").length,o=$(this),r=o.find("span");e=setInterval(function(){window.innerWidth>t&&o.prepend(r.eq(i(n)))},50)},function(){clearInterval(e);var i=$(this).find("span");if(window.innerWidth>t)for(var o=0,r=n.length;o<r;o++){var s=""==n[o]?"$nbsp;":n[o];i.eq(o).html(s)}})})}},function(t,n,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var t=this,n=$(this).text().split("");$(this).text(""),n.map(function(n){n=n||"$nbsp;",$(t).append('<span style="opacity: 0;">'+n+"</span>")})})},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),r=e(1),s=Symbol(),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.dom=n.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[a]=null,this[c]=null,this[u]=null,this[l]=null,this[s]()}return o(t,[{key:s,value:function(){var t=this;this.dom.get(0).addEventListener(r.START_EV,this[a]=function(n){t.startFn(n)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(n){t.moveFn(n)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(n){t.endFn(n)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(n){t.endFn(n)},!1)}},{key:f,value:function(t,n){t&&n&&this.points.push({x:t,y:n})}},{key:h,value:function(t){var n=t.clientX,e=t.clientY;return t.touches&&t.touches[0]&&(n=t.touches[0].clientX,e=t.touches[0].clientY),{x:n,y:e}}},{key:m,value:function(){this.points=[]}},{key:"startFn",value:function(t){this[m]();var n=this[h](t),e=n.x,i=n.y;this[f](e,i),this.touchStartTime=t.timestamp,this.target=t.target}},{key:"moveFn",value:function(t){var n=this[h](t),e=n.x,i=n.y;this[f](e,i)}},{key:"endFn",value:function(t){var n=this[h](t),e=n.x,i=n.y;this[f](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[a],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),t}();t.exports=d},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}function r(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}var s=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),a=function t(n,e,i){null===n&&(n=Function.prototype);var o=Object.getOwnPropertyDescriptor(n,e);if(void 0===o){var r=Object.getPrototypeOf(n);return null===r?void 0:t(r,e,i)}if("value"in o)return o.value;var s=o.get;if(void 0!==s)return s.call(i)},c=e(8),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=Symbol(),b=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),$=Symbol(),x=function(t){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n);var e=o(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return e[l]=t.myTouchDown||function(){},e[f]=t.myTouchUp||function(){},e[h]=t.myTouch||function(){},e[m]=t.myLongTouch||function(){},e[d]=t.mySlideLeft||function(){},e[p]=t.mySlideRight||function(){},e[v]=t.mySlideUp||function(){},e[y]=t.mySlideDown||function(){},e[g]=t.myMove||function(){},e.canMoveLength=t.canMoveLength||20,e.longClickTime=t.longClickTime||1e3,e.slideMaxTime=t.slideMaxTime||500,e[u]=!1,e[b]=!0,e[_]=!1,e}return r(n,t),s(n,[{key:"startFn",value:function(t){var e=this;a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"startFn",this).call(this,t),t.myTarget=this.target,this[u]=!0,this[b]=!0,this[_]=!1,this[l](t),this[k]=setTimeout(function(){e[b]&&(e[_]=!0,e[f](t),e[m](t))},this.longClickTime)}},{key:"moveFn",value:function(t){t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"moveFn",this).call(this,t),this[w]()&&(this[b]=!1))}},{key:"endFn",value:function(t){if(t.myTarget=this.target,this[u]&&(a(n.prototype.__proto__||Object.getPrototypeOf(n.prototype),"endFn",this).call(this,t),this[u]=!1,!this[_])){if(clearTimeout(this[k]),this[f](t),this[b])return void this[h](t);this.touchStartTime-t.timestamp>this.slideMaxTime||this[$](t)}}},{key:w,value:function(){var t=this.points.length,n=this.points[0],e=this.points[t-1],i=Math.abs;if(!n||!e)return!0;var o=e.x-n.x,r=e.y-n.y;return this[g](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:$,value:function(t){var n=this.points.length,e=this.points[0],i=this.points[n-1],o=Math.abs,r=i.x-e.x,s=i.y-e.y;o(r)>o(s)?r>0?this[p](t):this[d](t):s>0?this[y](t):this[v](t)}}]),n}(c);t.exports=x},function(t,n,e){"use strict";e(0);var i=e(1);$.fn.classAnimate=function(){var t={},n=function(n,e){n.get(0).removeEventListener(i.ANIEND_EV,t[e],!1),n.removeClassAnimate(),delete t[e]},e=function(e,o,r,s){var a="__temp_"+i.counter()+"__";o.get(0).addEventListener(i.ANIEND_EV,t[a]=function(t){e==t.animationName&&(o.css(s),r.call(this),n(o,a))},!1)};return function(t,n,o,r,s,a,c,u){var l="__keyframes_"+i.counter()+"__";n=parseInt(n)||1e3,o=o||"linear",r=$.getBloom(r),a=$.getFunction(a),s=$.getBloom(s),u=u||"auto",c=c||0,n+="ms",c+="ms",r=r?"infinite":"",s=s?"alternate":"";var f=l+"class__";if(!$.isObject(t))throw"css3Animate 参数样式结构错误";var h="",m=$("<style id='"+f+"'></style>"),d=" animation: "+l+" "+n+" "+o+" "+c+" "+r+" "+s+";";d=$.css3(d),d="."+f+"{"+d+"} @keyframes "+l+"{";for(var p in t)if(t.hasOwnProperty(p)){var v=$.css3(t[p]);d+=p+" {"+v+"}",h=v}d+="}",m.text(d),$("head").append(m);var y={};h=h.split(";");for(var g=0,b=h.length;g<b;g++){var w=h[g].split(":");if(2==w.length){var _=$.trim(w[0]),k=$.trim(w[1]);y[_]=k}}return $(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||($(this).css({"will-change":u}),$(this).addClass(f),$(this).get(0).__animate_css3_class__=f)}),r?$(this):($(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||e(l,$(this),a,y)}),$(this))}}(),$.fn.removeClassAnimate=function(){var t={};$(this).each(function(){var n=$(this).get(0).__animate_css3_class__;t[n]=!0,$(this).removeClass(n),$(this).css({"will-change":"auto"})});for(var n in t)if(t.hasOwnProperty(n)){var e=$("#"+n);0!=e.length&&e.remove()}},t.exports=null},function(t,n,e){"use strict";$.fn.randomShowSpan=function(){for(var t=$(this).find("span"),n=t.length,e=0,i=[],o=0,r=n;o<r;o++)i.push(o);for(var s=0,a=n;s<a;s++)!function(o,r){var s=parseInt(Math.random()*n);s=i.splice(s,1),n--;var a=t.eq(s);setTimeout(function(){a.cssAnimate({opacity:1},500)},e),e+=30}()},t.exports=null},function(t,n,e){"use strict";function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}var o=function(){function t(t,n){var e=[],i=!0,o=!1,r=void 0;try{for(var s,a=t[Symbol.iterator]();!(i=(s=a.next()).done)&&(e.push(s.value),!n||e.length!==n);i=!0);}catch(t){o=!0,r=t}finally{try{!i&&a.return&&a.return()}finally{if(o)throw r}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function t(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(n,e,i){return e&&t(n.prototype,e),i&&t(n,i),n}}(),s=(Symbol(),Symbol()),a=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=function(){function t(n,e){return i(this,t),this.ress=n,this.propFn=e||function(){},this.data=[],this[l]=Object.entries(this.ress).length,this[f]=0,this[s](),this[u]()}return r(t,[{key:s,value:function(){var t=!0,n=!1,e=void 0;try{for(var i,r=Object.entries(this.ress)[Symbol.iterator]();!(t=(i=r.next()).done);t=!0){var s=i.value,a=o(s,2),c=a[0],u=a[1];this.data.push({key:c,src:u})}}catch(t){n=!0,e=t}finally{try{!t&&r.return&&r.return()}finally{if(n)throw e}}}},{key:a,value:function(t){var n=t.key,e=t.src,i=this;return new Promise(function(t,o){var r=new Image;r.onload=function(){i[f]++,i.propFn(i[f],i[l]),t({key:n,val:this})},r.onerror=function(){o(e)},r.src=e})}},{key:c,value:function(){var t=this,n=this.data.map(function(n){return t[a](n)});return Promise.all(n)}},{key:u,value:function(){var t=this;return new Promise(function(n,e){t[c]().then(function(t){var e={};t.map(function(t){var n=t.key,i=t.val;e[n]=i}),n({state:1,data:e})}).catch(function(t){n({state:0,msg:t})})})}}]),t}();t.exports=h},function(t,n,e){"use strict";e(0),e(5),$.fn.autoShow=function(t){$(this).css({overflow:"hidden"});for(var n=$(this).find(t),e=[],i=0,o=n.length;i<o;i++){var r=n.eq(i).offset().top;e.push(r)}n.css({opacity:0,transform:"translateY("+window.innerHeight+"px)"});var s=function(){var t=$(window).scrollTop(),i=window.innerHeight,o=i-100;e.map(function(e,i){e-t<o&&(n.eq(i).data("run")||n.eq(i).data({run:!0}).cssAnimate({opacity:1,transform:"translateY(0)"},800,function(){},!0,"ease-out","transform"))})};$(window).scroll(function(){s()}),s()},t.exports=null},,,,,,,,,,,,function(t,n,e){"use strict";e(3),e(13),e(0),e(4),$(document).ready(function(){var t=DATA.show,n={c:"./image/close.png",d:"./image/home.png",e:"./image/home_.png",f:"./image/menu.png",g:"./image/menu_.png"};t.map(function(t,e){n["a"+e]=t.img}),$("body").pageLoading(n,function(){i.init()},function(){$("#show_list").autoShow("a")})});var i={data:DATA.show,init:function(){this.bindData(),this.addEffect(),this.bindScrollEffect()},bindData:function(){$("#show_number").text(this.data.length);var t=$("#show_list"),n=$("#list");this.data.map(function(e){var i=n.clone().attr({id:""}).css({display:"block"});i.attr({href:"show_info.html?id="+e.id}),i.find(".show_item_time").text(e.year),i.find(".show_item_title").text(e.name),i.find(".show_item_info").text(e.msg),i.find("img").attr({src:e.img}),t.append(i)})},addEffect:function(){for(var t=$("#show_list").find("a"),n=[],e=0,i=t.length;e<i;e++){var o=t.eq(e).offset().top;n.push(o)}t.eq(0).addClass("active"),this.setBg(t.eq(0));var r=this;$(window).scroll(function(){var e=$(window).scrollTop(),i=window.innerHeight/2;r.handleScroll(n,e,i,t)})},handleScroll:function(t,n,e,i){var o=[],r=[];t.map(function(t){var i=t-n-e;o.push(i),r.push(i)}),r=r.filter(function(t){if(t<=0)return t});var s=Math.max.apply(this,r),a=o.indexOf(s),c=i.eq(a);c.hasClass("active")||(i.removeClass("active"),c.addClass("active"),this.setBg(c))},bindScrollEffect:function(){var t=$("#show_scroll_main");$(window).scroll(function(){var n=window.innerHeight,e=parseInt($("body").height()),i=$(window).scrollTop(),o=100*i/(e-n);o=0==o?.1:o,o=!o||o<0?"100%":o+"%",t.css({height:o})})},setBg:function(t){if(!(DATA.winSize>window.innerWidth)){var n=t.find("img").attr("src");$("#show_pc_bg").css3({opacity:.2,background:"url("+n+") no-repeat top center","background-size":"cover"}),setTimeout(function(){$("#show_pc_bg").cssAnimate({opacity:.6},500)},100)}}}}]);