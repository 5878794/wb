!function(e){function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}var t={};n.m=e,n.c=t,n.i=function(e){return e},n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s=5)}({0:function(e,n,t){"use strict";var i=function(e){var n,t=e,i=window.innerWidth,r=document.querySelector('meta[name="viewport"]');r?r.setAttribute("content","width= device-width,initial-scale=1,maximum-scale=1, minimum-scale=1,user-scalable=no"):$("head").append('<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimum-scale=1, maximum-scale=1">');var o=document.createElement("style");i=window.innerWidth,n=i/t*100,o.innerHTML="html{font-size:"+n+"px!important;}",document.querySelector("head").appendChild(o);var a=setInterval(function(){i=window.innerWidth;var e=i/t*100;console.log(i,t,n),n!=e&&(n=e,o.innerHTML="html{font-size:"+n+"px!important;}")},500);setTimeout(function(){clearInterval(a)},1e4),$(window).resize(function(){i=window.innerWidth,n=i/t*100,o.innerHTML="html{font-size:"+n+"px!important;}"})};e.exports=i},5:function(e,n,t){"use strict";t(0)(750)}});