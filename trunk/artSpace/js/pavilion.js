!function(n){function t(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return n[i].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var e={};t.m=n,t.c=e,t.i=function(n){return n},t.d=function(n,e,i){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:i})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},t.p="",t(t.s=24)}([function(n,t,e){"use strict";var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},o=e(1);$.isNumber=function(n){return"number"==typeof n},$.isString=function(n){return"string"==typeof n},$.isBoolean=function(n){return"boolean"==typeof n},$.isObject=function(n){return null!==n&&void 0!==n&&!$.isArray(n)&&"object"===(void 0===n?"undefined":i(n))},$.isArray=function(n){return n.constructor===Array},$.isFunction=function(n){return"function"==typeof n},$.isUndefined=function(n){return void 0===n},$.isUrl=function(n){return new RegExp("[a-zA-z]+://[^s]*").test(n)},$.isJson=function(n){return"object"==(void 0===n?"undefined":i(n))&&"[object object]"==Object.prototype.toString.call(n).toLowerCase()&&!n.length},$.getDom=function(n){var t;return n?($.isString(n)?t=document.getElementById(n):$.isObject(n)&&(1==n.length&&(t=n.get(0)),1==n.nodeType&&(t=n)),t):t},$.getArray=function(n){return $.isArray(n)?n:[]},$.getFunction=function(n){return $.isFunction(n)?n:function(){}},$.getBloom=function(n){return!!$.isBoolean(n)&&n},$.getObj=function(n){return $.isObject(n)?n:{}},$.getNumber=function(n){return n=parseInt(n),n=n||0},$.fn.css3=function(n){return $(this).css(o.fixObjCss(n)),$(this)},$.css3=function(n){return o.fixCss(n)},$.fn.addScroll=function(){$(this).css({"overflow-x":"hidden","overflow-y":"scroll","-webkit-overflow-scrolling":"touch"})},$.fn.set3dDom=function(n){var t=$("<div></div>");t.css({"transform-style":"preserve-3d"}),t.append($(this).children()),$(this).css({perspective:n+"px"}).append(t)},$.allInputCanNotUse=function(n){if(n){var t=$("input"),e=$("textarea"),i=$("select"),o=function(n){n.attr("disabled")||n.attr({disabled:"disabled"}).data({__set_disabled__:"yes"})};t.each(function(){o($(this))}),e.each(function(){o($(this))}),i.each(function(){o($(this))})}else{var r=$("input"),a=$("textarea"),s=$("select"),c=function(n){"yes"==n.data("__set_disabled__")&&n.removeAttr("disabled").data({__set_disabled__:""})};r.each(function(){c($(this))}),a.each(function(){c($(this))}),s.each(function(){c($(this))})}},n.exports=null},function(n,t,e){"use strict";window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,1)},window.cancelAnimationFrame=window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||clearTimeout;var i={};!function(){var n,t={},e=navigator.userAgent.toLowerCase();(n=e.match(/ipad; cpu os ([\d_]+)/))?t.ipad=n[1].replace(/_/g,"."):(n=e.match(/iphone os ([\d_]+)/))?t.iphone=n[1].replace(/_/g,"."):(n=e.match(/android[ \/]([\d.]+)/))?t.android=n[1]:(n=e.match(/rv:([\d.]+)\) like gecko/))?t.ie=n[1]:(n=e.match(/msie ([\d.]+)/))?t.ie=n[1]:(n=e.match(/firefox\/([\d.]+)/))?t.firefox=n[1]:(n=e.match(/chrome\/([\d.]+)/))?t.chrome=n[1]:(n=e.match(/opera.([\d.]+)/))?t.opera=n[1]:(n=e.match(/version\/([\d.]+).*safari/))?t.safari=n[1]:t._=0,i.isIpad=t.hasOwnProperty("ipad"),i.isIphone=t.hasOwnProperty("iphone"),i.isAndroid=t.hasOwnProperty("android"),i.isIe=t.hasOwnProperty("ie"),i.isFirefox=t.hasOwnProperty("firefox"),i.isChrome=t.hasOwnProperty("chrome"),i.isOpera=t.hasOwnProperty("opera"),i.isSafari=t.hasOwnProperty("safari"),i.isWeChat="micromessenger"==e.match(/MicroMessenger/i),i.ver=0;var o;for(var r in t)t.hasOwnProperty(r)&&(o=t[r]);o=o.split(".");for(var a=[],s=0,c=o.length;s<c&&!(s>=2);s++)a.push(o[s]);a=a.join("."),i.ver=a,i.isPhone=i.isAndroid||i.isIpad||i.isIphone}(),function(){var n=navigator.platform,t=0==n.indexOf("Win"),e=0==n.indexOf("Mac"),o="X11"==n||0==n.indexOf("Linux");i.isPc=t||e||o,i.isMac=e,i.isWin=t,i.isLinux=o}(),function(){var n=document.createElement("div").style,t=function(){if(window.navigator.msPointerEnabled)return"";if("MozTransform"in n)return"";for(var t="webkitT,MozT,msT,OT,t".split(","),e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in n)return t[e].substr(0,t[e].length-1);return!1}(),e=function(n){return t?(n=n.charAt(0).toUpperCase()+n.substr(1),t+n):n},o=e("perspective")in n,r=!!(window.navigator.msMaxTouchPoints&&window.navigator.msMaxTouchPoints>0),a=i.isPhone,s=a||r,c=!1!==t,u=e("transitionProperty"),l=e("transitionDuration"),f=e("transformOrigin"),h=e("transitionTimingFunction"),m=e("transitionDelay"),d=function(){return!1===t?"fullscreenchange":{"":"fullscreenchange",webkit:"webkitfullscreenchange",Moz:"mozfullscreenchange",O:"ofullscreenchange",ms:"msfullscreenchange"}[t]}(),p=function(){return!1===t?"pointerlockchange":{"":"pointerlockchange",webkit:"webkitpointerlockchange",Moz:"mozpointerlockchange",O:"opointerlockchange",ms:"mspointerlockchange"}[t]}(),v="onorientationchange"in window?"orientationchange":"resize",y=a?"touchstart":r?"MSPointerDown":"mousedown",g=a?"touchmove":r?"MSPointerMove":"mousemove",b=a?"touchend":r?"MSPointerUp":"mouseup",w=a?"touchcancel":r?"MSPointerUp":"mouseup",_=function(){return!1===t?"transitionend":{"":"transitionend",webkit:"webkitTransitionEnd",Moz:"transitionend",O:"otransitionend",ms:"MSTransitionEnd"}[t]}(),k=function(){return!1===t?"animationEnd":{"":"animationEnd",webkit:"webkitAnimationEnd",Moz:"mozAnimationEnd",O:"oanimationend",ms:"MSAnimationEnd"}[t]}(),x=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(n){return setTimeout(n,1)}}(),$=function(){return window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout}(),S=function(n){var t=n.css("position");return"fixed"==t||"absolute"==t||"relative"==t},E=function(){var n=0;return function(){return n+=1}}(),T=(navigator.browserLanguage||navigator.language).toLowerCase(),A=function(){for(var t="webkitT,MozT,msT,OT".split(","),e=0,i=t.length;e<i;e++)if(t[e]+"ransform"in n)return"-"+t[e].substr(0,t[e].length-1)+"-";return""}(),O=function(t){return t in n?t:A+t in n?A+t:t},P="",F=function(){return"boxPack"in n?2009:A+"box-pack"in n?(P=A,2009):"flexPack"in n?2011:A+"flex-pack"in n?(P=A,2011):"flexBasis"in n?2013:A+"flex-basis"in n?(P=A,2013):void 0}(),C=2013==F?P+"flex":2011==F?P+"flexbox":2009==F?P+"box":"flex",M=2013==F?P+"align-items":2011==F?P+"flex-pack":2009==F?P+"box-pack":"align-items",j=2013==F?P+"justify-content":2011==F?P+"flex-align":2009==F?P+"box-align":"justify-content",L=2013==F?P+"flex":2011==F?P+"flex":2009==F?P+"box-flex":"flex",z=2013==F?P+"flex-direction":2011==F?P+"flex-direction":2009==F?P+"box-orient":"flex-direction",D=2013==F?"row":2011==F?"row":2009==F?"horizontal":"row",R=2013==F?"column":2011==F?"column":2009==F?"vertical":"column",N=O("animation"),I=O("box-shadow"),V=O("background-size"),B=O("transform"),q=O("transform-origin"),W=O("transform-style"),U=O("perspective"),J=O("perspective-origin"),X=O("border-radius"),H=O("box-sizing"),Y=O("background-clip"),K=O("border-bottom-left-radius"),Z=O("border-bottom-right-radius"),G=O("border-top-left-radius"),Q=O("border-top-right-radius"),nn=O("backface-visibility"),tn=O("transition"),en=O("transition-property"),on=O("transition-duration"),rn=O("transition-timing-function"),an={box:C,"justify-content":j,"align-items":M,"background-size":V,"background-clip":Y,flex:L,"flex-direction":z,row:D,column:R,transform:B,"transform-origin":q,"transform-style":W,perspective:U,"perspective-origin":J,"border-radius":X,"border-bottom-left-radius":K,"border-bottom-right-radius":Z,"border-top-left-radius":G,"border-top-right-radius":Q,"box-sizing":H,"box-shadow":I,"backface-visibility":nn,transition:tn,"transition-property":en,"transition-duration":on,"transition-timing-function":rn,animation:N},sn=function(){var n,t=[];for(var e in an)an.hasOwnProperty(e)&&("box"==e||"transition"==e||"flex"==e?t.push("([^-]"+e+"[^-])"):"row"==e||"column"==e?t.push(e):t.push("([^-]"+e+")"));return n=t.join("|"),new RegExp(n,"ig")}(),cn=function(n){var t=JSON.stringify(n),e=un(t);return JSON.parse(e)},un=function(n){return n.replace(sn,function(n){var t=n.substr(1,n.length-2);if("box"==t||"transition"==t||"flex"==t){var e=an[t];return n.substr(0,1)+e+n.substr(n.length-1)}return"row"==n||"column"==n?an[n]:n.substr(0,1)+an[n.substr(1)]})},ln=function(n){return n=n.replace(/;/gi," ; "),un(" "+n)};n=null,i.has3d=o,i.hasTouch=s,i.hasTransform=c,i._transform=B,i._transitionProperty=u,i._transitionDuration=l,i._transformOrigin=f,i._transitionTimingFunction=h,i._transitionDelay=m,i.RESIZE_EV=v,i.START_EV=y,i.MOVE_EV=g,i.END_EV=b,i.CANCEL_EV=w,i.TRNEND_EV=_,i.ANIEND_EV=k,i.FULLSCREEN_EV=d,i.LOCKPOINTER_EV=p,i.nextFrame=x,i.cancelFrame=$,i.language=T,i.counter=E,i.fixObjCss=cn,i.fixCss=ln,i.css=an,i.boxType=F,i.boxVendors=P,i.checkDomHasPosition=S,i.trim=function(n){return n.replace(/(^\s*)|(\s*$)/g,"")},i.getBetweenNumber=function(n,t,e){return n=n>e?e:n,n=n<t?t:n}}(),i.rem2Px=function(n,t){return window.innerWidth/n*100*t},i.delHtmlTag=function(n){return n.replace(/<[^>]+>/g,"")},i.sleep=function(n){return n*=1e3,new Promise(function(t){setTimeout(function(){t()},n)})},n.exports=i},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=e(9),a=new Map,s=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=[],h=function(){function n(t){i(this,n),this[u]=$(t),this[l]=[],this[s](),this.addDefaultEvent()}return o(n,[{key:s,value:function(){var n=this;this[u].each(function(){if(this.__bens_eventid__)n[l].push(this.__bens_eventid__);else{var t=Symbol();this.__bens_eventid__=t,n[l].push(t),a.set(t,new Map)}})}},{key:c,value:function(n,t){for(var e=this[l],i=0,o=e.length;i<o;i++){var r=e[i];a.get(r).set(t,n)}}},{key:"addDefaultEvent",value:function(){for(var n=this[l],t=0,e=n.length;t<e;t++){var i=n[t],o=a.get(i);o.has("myclickdown")||this[c](function(n){n.stopPop(),$(this).css({opacity:.5})},"myclickdown"),o.has("myclickup")||this[c](function(n){n.stopPop(),$(this).css({opacity:1})},"myclickup")}}},{key:"trigger",value:function(n){for(var t=0,e=this[l].length;t<e;t++){var i=this[l][t],o=a.get(i);if(o){var r=o.get(n);r&&r()}}return this}},{key:"myclickok",value:function(n){return this[c](n,"myclickok"),this}},{key:"myclickdown",value:function(n){return this[c](n,"myclickdown"),this}},{key:"myclickup",value:function(n){return this[c](n,"myclickup"),this}},{key:"mylongclick",value:function(n){return this[c](n,"mylongclick"),this}},{key:"myslideleft",value:function(n){return this[c](n,"myslideleft"),this}},{key:"myslideright",value:function(n){return this[c](n,"myslideright"),this}},{key:"myslidedown",value:function(n){return this[c](n,"myslidedown"),this}},{key:"myslideup",value:function(n){return this[c](n,"myslideup"),this}},{key:"myend",value:function(n){return this[c](n,"myend"),this}},{key:"mystart",value:function(n){return this[c](n,"myclickdown"),this}},{key:"mymove",value:function(n){return this[c](n,"mymove"),this}},{key:"unbind",value:function(n){var t=!(n&&!$.isBoolean(n))||n;this[u].each(function(){var e=this.__bens_eventid__,i=a.get(e);t?(a.delete(e),delete this.__bens_eventid__):(i.delete(n),0==i.size&&(a.delete(e),delete this.__bens_eventid__))})}}],[{key:"run",value:function(n,t){var e=n.myTarget,i=!0;n.stopPop=function(){i=!1};var o=function(n){var t=n.parentNode;r(t)},r=function(e){if(e&&"html"!=e.nodeName.toLowerCase()){var r=e.__bens_eventid__,s=a.get(r);if(s){"myclickdown"==t&&f.push(e),"myclickup"==t&&(f=[]);var c=s.get(t);c&&c.call(e,n)}i&&o(e)}};r(e)}},{key:"runMove",value:function(n,t,e){f.map(function(i){var o=i.__bens_eventid__,r=a.get(o);if(r){var s=r.get(e);s&&s.call(i,n,t)}})}}]),n}();new r({myTouchDown:function(n){h.run(n,"myclickdown")},myTouchUp:function(n){h.run(n,"myclickup")},myTouch:function(n){h.run(n,"myclickok")},myLongTouch:function(n){h.run(n,"mylongclick")},mySlideLeft:function(n){h.run(n,"myslideleft")},mySlideRight:function(n){h.run(n,"myslideright")},mySlideUp:function(n){h.run(n,"myslideup")},mySlideDown:function(n){h.run(n,"myslidedown")},myMove:function(n,t){h.runMove(n,t,"mymove")},canMoveLength:20,longClickTime:1e3,slideMaxTime:500}),n.exports=function(n){return new h(n)}},function(n,t,e){"use strict";var i=e(2);e(0),e(5),e(7),e(11),e(6),$(document).ready(function(){o.init()});var o={init:function(){$("#menu_item").text2Span(),this.menuListSelect(),this.homePageBtnEventBind(),this.menuBtnEventBind(),this.menuBtnHoverEvent()},homePageBtnEventBind:function(){var n=$("#top_left");i(n).myclickok(function(){window.location.href="./index.html"})},menuBtnEventBind:function(){var n=$("#top_right"),t=$("#menu"),e=$("#top_pc_menu"),o=$("#top_pc_close"),r=t.find(".menu_main"),a=t.find(".menu_close_btn"),s=function(){window.innerWidth<DATA.winSize?(t.css3({display:"block",background:"rgba(0,0,0,0)",transform:"scale(1)",opacity:1}),r.css3({transform:"translateX(0)"}),r.find("span").css({opacity:0}),t.cssAnimate({background:"rgba(0,0,0,0.7)"},500),r.cssAnimate({transform:"translateX(-100%)"},500,function(){r.randomShowSpan()})):(t.css3({display:"block",background:"#181818",opacity:0,transform:"scale(0.5)"}),r.css3({transform:"translateX(-100%)"}),r.find("span").css({opacity:0}),t.cssAnimate({transform:"scale(1)",opacity:1},500,function(){r.randomShowSpan()}))},c=function(){window.innerWidth<DATA.winSize?(t.cssAnimate({background:"rgba(0,0,0,0)"},500),r.cssAnimate({transform:"translateX(0)"},500,function(){r.find("span").css({opacity:0}),t.css({display:"none"})})):t.cssAnimate({transform:"scale(0.5)",opacity:0},500,function(){t.css({display:"none"})})};i(n).myclickok(function(){s()}),i(a).myclickok(function(){c()}),i(o).myclickok(function(){$(this).hide().css({display:"none"}),c(),e.show()}),i(e).myclickok(function(){$(this).hide(),s(),o.css({display:"block"}).show()}),i(t).myclickok(function(){c()}).myclickdown(function(){}).myclickup(function(){}),i($("#menu_main")).myclickok(function(n){n.stopPop()}).myclickdown(function(){}).myclickup(function(){})},menuBtnHoverEvent:function(){$("#menu_item").find("a:not(.notSelect)").hoverSpanJump()},menuListSelect:function(){var n=window.location.pathname,t=$("#menu_item").find("a");"/"==n.substr(n.length-1)?t.eq(0).addClass("notSelect"):t.each(function(){n.indexOf($(this).attr("href"))>-1&&$(this).addClass("notSelect")})}}},function(n,t,e){"use strict";function i(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function i(o,r){try{var a=t[o](r),s=a.value}catch(n){return void e(n)}if(!a.done)return Promise.resolve(s).then(function(n){i("next",n)},function(n){i("throw",n)});n(s)}return i("next")})}}e(10),e(0);var o=e(12);$.fn.pageLoading=function(){var n=i(regeneratorRuntime.mark(function n(t,e,i){var r,a,s,c,u,l,f,h,m,d;return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return $("body").children().css({opacity:0}),r=$("<div></div>"),r.css({position:"fixed",left:0,top:0,width:"100%",height:"100%","z-index":1e4,background:"#181818"}),a=$("<div></div>"),a.css({position:"absolute",color:"#fff",left:"50%",top:"50%",width:"300px",height:"240px","margin-top":"-120px","margin-left":"-150px","text-align":"center","font-size":"25px","letter-spacing":"4px"}),s=$("<div></div>"),s.css({margin:"0 auto",width:"60px",height:"60px","background-image":"url(./image/home.png)","background-repeat":"no-repeat","background-position":"center center","-webkit-background-size":"17px 30px","background-size":"17px 30px","margin-bottom":"40px"}),c=$("<div></div>"),u=$("<div>AURA SPACE</div>"),u.css({width:"100%","line-height":"30px"}),l=$("<div>THE WORLD OF ART</div>"),l.css({"font-size":"10px","letter-spacing":"5px"}),f=$("<div>0</div>"),f.css({width:"100%","margin-top":"40px"}),c.append(s),a.append(c).append(u).append(l).append(f),r.append(a),$("body").append(r),c.set3dDom(),s.classAnimate({"0%":"transform:rotate3d(0,0,0，0)","25%":"transform:rotate3d(0,0.5,0,180deg)","50%":"transform:rotate3d(0,0,0.5,180deg)","75%":"transform:rotate3d(0.5,0,0,180deg)","100%":"transform:rotate3d(0,0,0,180deg)"},4e3,"linear",!0,!1,function(){},0,"transform"),h=(new Date).getTime(),n.next=23,new o(t,function(n,t){f.text(parseInt(100*n/t))});case 23:m=(new Date).getTime(),d=function(){r.cssAnimate({opacity:0},500,function(){s.removeClassAnimate(),r.remove(),e(),setTimeout(function(){var n=!1;$("body").children().each(function(){$(this).cssAnimate({opacity:1},1e3,function(){n||(n=!0,setTimeout(function(){i()},100))},!0,"","opacity")})},200)})},m-h<1e3?setTimeout(function(){d()},1e3+h-m):d();case 26:case"end":return n.stop()}},n,this)}));return function(t,e,i){return n.apply(this,arguments)}}(),n.exports=null},function(n,t,e){"use strict";var i=e(1);e(0),$.fn.cssAnimate=function(){var n={},t=function(){var n=0;return function(){return n+=1}}(),e=function(t,e){t.removeEventListener(i.TRNEND_EV,n[e],!1),delete n[e],delete t.__bens_cssfn_id__};return function(o,r,a,s,c,u){var l=$(this),f=l.get(0),h=f.style;if(c=c||"ease",o=JSON.parse(i.fixObjCss(JSON.stringify(o))),r=r||1e3,a=$.getFunction(a),s=!!$.isBoolean(s)&&s,u=u||"auto",f.__bens_cssfn_id__){var m=f.__bens_cssfn_id__;e(f,m)}var d=t();f.__bens_cssfn_id__=d,n[d]=function(n){var t=n.propertyName;n.target==f&&o.hasOwnProperty(t)&&(h[i._transitionProperty]="",h[i._transitionDuration]="",h[i._transitionTimingFunction]="",h.webkitTransformStyle="",h.webkitBackfaceVisibility="",h.willChange="auto",a(),e(f,d))},h[i._transitionProperty]="all",h[i._transitionDuration]=r+"ms",h[i._transitionTimingFunction]=c,h.willChange=u,h.webkitTransformStyle="preserve-3d",h.webkitBackfaceVisibility=s?"visible":"hidden",setTimeout(function(){f.addEventListener(i.TRNEND_EV,n[d],!1),l.css(o)},1)}}(),n.exports=null},function(n,t,e){"use strict";var i=function(n){return parseInt(Math.random()*n)};$.fn.hoverSpanJump=function(){var n=DATA&&DATA.winSize?DATA.winSize:800;$(this).each(function(){var t=$(this).text();$(this).data({text:t});var e=null;$(this).hover(function(){var t=$(this).data("text").length,o=$(this),r=o.find("span");e=setInterval(function(){window.innerWidth>n&&o.prepend(r.eq(i(t)))},50)},function(){clearInterval(e);var i=$(this).find("span");if(window.innerWidth>n)for(var o=0,r=t.length;o<r;o++){var a=""==t[o]?"$nbsp;":t[o];i.eq(o).html(a)}})})}},function(n,t,e){"use strict";$.fn.text2Span=function(){$(this).children().each(function(){var n=this,t=$(this).text().split("");$(this).text(""),t.map(function(t){t=t||"$nbsp;",$(n).append('<span style="opacity: 0;">'+t+"</span>")})})},n.exports=null},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=e(1),a=Symbol(),s=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=function(){function n(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,n),this.dom=t.dom||$(document),this.touchStartTime=0,this.target=null,this.points=[],this[s]=null,this[c]=null,this[u]=null,this[l]=null,this[a]()}return o(n,[{key:a,value:function(){var n=this;this.dom.get(0).addEventListener(r.START_EV,this[s]=function(t){n.startFn(t)},!1),this.dom.get(0).addEventListener(r.MOVE_EV,this[c]=function(t){n.moveFn(t)},!1),this.dom.get(0).addEventListener(r.END_EV,this[u]=function(t){n.endFn(t)},!1),this.dom.get(0).addEventListener(r.CANCEL_EV,this[l]=function(t){n.endFn(t)},!1)}},{key:f,value:function(n,t){n&&t&&this.points.push({x:n,y:t})}},{key:h,value:function(n){var t=n.clientX,e=n.clientY;return n.touches&&n.touches[0]&&(t=n.touches[0].clientX,e=n.touches[0].clientY),{x:t,y:e}}},{key:m,value:function(){this.points=[]}},{key:"startFn",value:function(n){this[m]();var t=this[h](n),e=t.x,i=t.y;this[f](e,i),this.touchStartTime=n.timestamp,this.target=n.target}},{key:"moveFn",value:function(n){var t=this[h](n),e=t.x,i=t.y;this[f](e,i)}},{key:"endFn",value:function(n){var t=this[h](n),e=t.x,i=t.y;this[f](e,i)}},{key:"destroy",value:function(){this.dom.get(0).removeEventListener(r.START_EV,this[s],!1),this.dom.get(0).removeEventListener(r.MOVE_EV,this[c],!1),this.dom.get(0).removeEventListener(r.END_EV,this[u],!1),this.dom.get(0).removeEventListener(r.CANCEL_EV,this[l],!1)}}]),n}();n.exports=d},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function o(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}function r(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}var a=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),s=function n(t,e,i){null===t&&(t=Function.prototype);var o=Object.getOwnPropertyDescriptor(t,e);if(void 0===o){var r=Object.getPrototypeOf(t);return null===r?void 0:n(r,e,i)}if("value"in o)return o.value;var a=o.get;if(void 0!==a)return a.call(i)},c=e(8),u=Symbol(),l=Symbol(),f=Symbol(),h=Symbol(),m=Symbol(),d=Symbol(),p=Symbol(),v=Symbol(),y=Symbol(),g=Symbol(),b=Symbol(),w=Symbol(),_=Symbol(),k=Symbol(),x=Symbol(),$=function(n){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e[l]=n.myTouchDown||function(){},e[f]=n.myTouchUp||function(){},e[h]=n.myTouch||function(){},e[m]=n.myLongTouch||function(){},e[d]=n.mySlideLeft||function(){},e[p]=n.mySlideRight||function(){},e[v]=n.mySlideUp||function(){},e[y]=n.mySlideDown||function(){},e[g]=n.myMove||function(){},e.canMoveLength=n.canMoveLength||20,e.longClickTime=n.longClickTime||1e3,e.slideMaxTime=n.slideMaxTime||500,e[u]=!1,e[b]=!0,e[_]=!1,e}return r(t,n),a(t,[{key:"startFn",value:function(n){var e=this;s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"startFn",this).call(this,n),n.myTarget=this.target,this[u]=!0,this[b]=!0,this[_]=!1,this[l](n),this[k]=setTimeout(function(){e[b]&&(e[_]=!0,e[f](n),e[m](n))},this.longClickTime)}},{key:"moveFn",value:function(n){n.myTarget=this.target,this[u]&&(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"moveFn",this).call(this,n),this[w]()&&(this[b]=!1))}},{key:"endFn",value:function(n){if(n.myTarget=this.target,this[u]&&(s(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"endFn",this).call(this,n),this[u]=!1,!this[_])){if(clearTimeout(this[k]),this[f](n),this[b])return void this[h](n);this.touchStartTime-n.timestamp>this.slideMaxTime||this[x](n)}}},{key:w,value:function(){var n=this.points.length,t=this.points[0],e=this.points[n-1],i=Math.abs;if(!t||!e)return!0;var o=e.x-t.x,r=e.y-t.y;return this[g](o,r),i(o)>this.canMoveLength||i(r)>this.canMoveLength}},{key:x,value:function(n){var t=this.points.length,e=this.points[0],i=this.points[t-1],o=Math.abs,r=i.x-e.x,a=i.y-e.y;o(r)>o(a)?r>0?this[p](n):this[d](n):a>0?this[y](n):this[v](n)}}]),t}(c);n.exports=$},function(n,t,e){"use strict";e(0);var i=e(1);$.fn.classAnimate=function(){var n={},t=function(t,e){t.get(0).removeEventListener(i.ANIEND_EV,n[e],!1),t.removeClassAnimate(),delete n[e]},e=function(e,o,r,a){var s="__temp_"+i.counter()+"__";o.get(0).addEventListener(i.ANIEND_EV,n[s]=function(n){e==n.animationName&&(o.css(a),r.call(this),t(o,s))},!1)};return function(n,t,o,r,a,s,c,u){var l="__keyframes_"+i.counter()+"__";t=parseInt(t)||1e3,o=o||"linear",r=$.getBloom(r),s=$.getFunction(s),a=$.getBloom(a),u=u||"auto",c=c||0,t+="ms",c+="ms",r=r?"infinite":"",a=a?"alternate":"";var f=l+"class__";if(!$.isObject(n))throw"css3Animate 参数样式结构错误";var h="",m=$("<style id='"+f+"'></style>"),d=" animation: "+l+" "+t+" "+o+" "+c+" "+r+" "+a+";";d=$.css3(d),d="."+f+"{"+d+"} @keyframes "+l+"{";for(var p in n)if(n.hasOwnProperty(p)){var v=$.css3(n[p]);d+=p+" {"+v+"}",h=v}d+="}",m.text(d),$("head").append(m);var y={};h=h.split(";");for(var g=0,b=h.length;g<b;g++){var w=h[g].split(":");if(2==w.length){var _=$.trim(w[0]),k=$.trim(w[1]);y[_]=k}}return $(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||($(this).css({"will-change":u}),$(this).addClass(f),$(this).get(0).__animate_css3_class__=f)}),r?$(this):($(this).each(function(){"none"==$(this).css("display")||"hidden"==$(this).css("visibility")||e(l,$(this),s,y)}),$(this))}}(),$.fn.removeClassAnimate=function(){var n={};$(this).each(function(){var t=$(this).get(0).__animate_css3_class__;n[t]=!0,$(this).removeClass(t),$(this).css({"will-change":"auto"})});for(var t in n)if(n.hasOwnProperty(t)){var e=$("#"+t);0!=e.length&&e.remove()}},n.exports=null},function(n,t,e){"use strict";$.fn.randomShowSpan=function(){for(var n=$(this).find("span"),t=n.length,e=0,i=[],o=0,r=t;o<r;o++)i.push(o);for(var a=0,s=t;a<s;a++)!function(o,r){var a=parseInt(Math.random()*t);a=i.splice(a,1),t--;var s=n.eq(a);setTimeout(function(){s.cssAnimate({opacity:1},500)},e),e+=30}()},n.exports=null},function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){var e=[],i=!0,o=!1,r=void 0;try{for(var a,s=n[Symbol.iterator]();!(i=(a=s.next()).done)&&(e.push(a.value),!t||e.length!==t);i=!0);}catch(n){o=!0,r=n}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return n(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),a=(Symbol(),Symbol()),s=Symbol(),c=Symbol(),u=Symbol(),l=Symbol(),f=Symbol(),h=function(){function n(t,e){return i(this,n),this.ress=t,this.propFn=e||function(){},this.data=[],this[l]=Object.entries(this.ress).length,this[f]=0,this[a](),this[u]()}return r(n,[{key:a,value:function(){var n=!0,t=!1,e=void 0;try{for(var i,r=Object.entries(this.ress)[Symbol.iterator]();!(n=(i=r.next()).done);n=!0){var a=i.value,s=o(a,2),c=s[0],u=s[1];this.data.push({key:c,src:u})}}catch(n){t=!0,e=n}finally{try{!n&&r.return&&r.return()}finally{if(t)throw e}}}},{key:s,value:function(n){var t=n.key,e=n.src,i=this;return new Promise(function(n,o){var r=new Image;r.onload=function(){i[f]++,i.propFn(i[f],i[l]),n({key:t,val:this})},r.onerror=function(){o(e)},r.src=e})}},{key:c,value:function(){var n=this,t=this.data.map(function(t){return n[s](t)});return Promise.all(t)}},{key:u,value:function(){var n=this;return new Promise(function(t,e){n[c]().then(function(n){var e={};n.map(function(n){var t=n.key,i=n.val;e[t]=i}),t({state:1,data:e})}).catch(function(n){t({state:0,msg:n})})})}}]),n}();n.exports=h},,,function(n,t,e){"use strict";function i(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}var o=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}(),r=e(1),a=function(){function n(t){i(this,n),this.moveFn=t.moveFn||function(){},this._init()}return o(n,[{key:"_init",value:function(){this._addEvent()}},{key:"_addEvent",value:function(){var n=this;window.addEventListener("deviceorientation",function(t){n.handlerEvent(t)},!1)}},{key:"handlerEvent",value:function(n){var t=n.beta,e=n.gamma;this._xMove(e,t)}},{key:"_xMove",value:function(n,t){t=r.getBetweenNumber(t,-90,90),this.moveFn(n,t)}}]),n}();n.exports=a},,,,,,,,,function(n,t,e){"use strict";function i(n){return function(){var t=n.apply(this,arguments);return new Promise(function(n,e){function i(o,r){try{var a=t[o](r),s=a.value}catch(n){return void e(n)}if(!a.done)return Promise.resolve(s).then(function(n){i("next",n)},function(n){i("throw",n)});n(s)}return i("next")})}}var o=e(2),r=e(15);e(3),e(0),e(3),e(4),$(document).ready(function(){var n={c:"./image/close.png",d:"./image/home.png",e:"./image/home_.png",f:"./image/menu.png",g:"./image/menu_.png",a:"./image/pavilion/p1.jpg",b:"./image/pavilion/p2.jpg",h:"./image/pavilion/p3.jpg",i:"./image/pavilion/p4.jpg",j:"./image/arrow.png"};$("body").pageLoading(n,function(){a.init()},function(){})});var a={data:DATA.pavilion,n:0,init:function(){this.addTLYEvent(),this.show(0).then(function(n){}).catch(function(n){alert(n)}),this.btnEventBind(),this.resizeFn()},btnEventBind:function(){var n=$("#pavilion_btns_left"),t=$("#pavilion_btns_right"),e=this;o(n).myclickok(function(){e.getImg("pre")}),o(t).myclickok(function(){e.getImg("next")})},getImg:function(n){"pre"==n?this.n--:this.n++;var t=this.data.length-1;this.n=this.n>t?0:this.n,this.n=this.n<0?t:this.n,this.show(this.n).then(function(n){}).catch(function(n){alert(n)})},loadImg:function(n){return new Promise(function(t,e){var i=new Image;i.onload=function(){t(i)},i.onerror=function(){e("加载错误")},i.src=n})},show:function(n){var t=this;return i(regeneratorRuntime.mark(function e(){var i,o,r,a;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.data[n]){e.next=4;break}return alert("暂无图片"),e.abrupt("return");case 4:return o=$("#pavilion_body"),e.next=7,t.loadImg(i);case 7:r=e.sent,t.img=r,t.imgAutoSize(),o.find("img").remove(),o.append(r),a=parseInt($(r).width()),o.css({left:"50%",top:0,"margin-left":-a/2+"px"});case 14:case"end":return e.stop()}},e,t)}))()},addTLYEvent:function(){var n=$("#pavilion_body");window.innerWidth<DATA.winSize&&new r({moveFn:function(t,e){t*=4,n.css3({transform:"translate3d("+t+"px,0,0)"})}})},imgAutoSize:function(){if(this.img&&window.innerWidth>DATA.winSize){var n=window.innerWidth,t=window.innerHeight,e=this.img.width,i=this.img.height;n/t>=e/i?(this.img.width=n,this.img.height=n*i/e):(this.img.height=t,this.img.width=t*e/i);var o=$("#pavilion_body");o.find("img").css({width:this.img.width+"px",height:this.img.height+"px"}),o.css({left:"50%",top:0,"margin-left":-this.img.width/2+"px"})}},resizeFn:function(){var n=this;$(window).resize(function(){window.innerWidth>DATA.winSize&&n.imgAutoSize()})}}}]);