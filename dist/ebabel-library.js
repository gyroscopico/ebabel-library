window["ebabel-library"]=function(r){function e(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return r[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=r,e.c=n,e.d=function(r,n,t){e.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:t})},e.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return e.d(n,"a",n),n},e.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},e.p="",e(e.s=0)}([function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.randomNumber=void 0;var t=n(1);e.randomNumber=t.randomNumber},function(r,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=function(r){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(e>r)throw new Error("min cannot be greater than max.");var n=Math.random()*(r-e)+e;return{value:n,toInt:function(){return Math.floor(n)}}};e.randomNumber=t}]);
//# sourceMappingURL=ebabel-library.js.map