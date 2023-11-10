parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"P5wa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=u(require("react")),e=u(require("d3")),r=a(require("prop-types")),n=require("../../../common/utils");function a(t){return t&&t.__esModule?t:{default:t}}function i(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(i=function(t){return t?r:e})(t)}function u(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=i(e);if(r&&r.has(t))return r.get(t);var n={__proto__:null},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in t)if("default"!==u&&Object.prototype.hasOwnProperty.call(t,u)){var l=a?Object.getOwnPropertyDescriptor(t,u):null;l&&(l.get||l.set)?Object.defineProperty(n,u,l):n[u]=t[u]}return n.default=t,r&&r.set(t,n),n}function l(t,e){return d(t)||c(t,e)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function s(t,e){if(t){if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(t,e):void 0}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function c(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,a,i,u,l=[],o=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;o=!1}else for(;!(o=(n=i.call(r)).done)&&(l.push(n.value),l.length!==e);o=!0);}catch(t){s=!0,a=t}finally{try{if(!o&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw a}}return l}}function d(t){if(Array.isArray(t))return t}function h(r){var a=r.data,i=r.fields,u=r.id,o=r.binsCount,s=void 0===o?10:o,f=r.filterData,c=r.filters,d=r.filterAdded,h=r.layout,p=(0,t.useRef)(),y=l((0,t.useState)({x:e.scaleLinear(),y:e.scaleLinear()}),1)[0],g=l((0,t.useState)({hist:e.histogram(),bins:null}),1)[0],x=10,m=10,v=30,b=40;return(0,t.useEffect)(function(){setTimeout(function(){e.select(p.current).selectAll("svg").remove("svg");var t=p.current.getBoundingClientRect(),r=t.width-b-m,l=t.height-x-v,o=e.select(p.current).append("svg").attr("width",t.width).attr("height",t.height).append("g").attr("transform","translate(".concat(b,",").concat(x,")"));y.x.domain([0,e.max(a,function(t){return t[i.x]})]).range([0,r]),g.hist.value(function(t){return t[i.x]}).domain(y.x.domain()).thresholds(y.x.ticks(s)),g.bins=g.hist(a),y.y=e.scaleLinear().range([l,0]).domain([0,e.max(g.bins,function(t){return t.length})]);var f=e.brushX().extent([[0,0],[r,l]]).on("end",function(){if(e.event.selection){var t=[e.event.selection[0],e.event.selection[1]],r=t[0],a=t[1];d([{id:u,field:i.x,operation:"range",values:[(0,n.numFixed)(y.x.invert(r)),(0,n.numFixed)(y.x.invert(a))]}])}});o.append("g").call(f),o.append("g").attr("transform","translate(0,".concat(l,")")).call(e.axisBottom(y.x)),o.append("g").call(e.axisLeft(y.y)).append("g").attr("class","hist-area").selectAll(".bar").data(g.bins).join("rect").attr("class","bar").attr("x",1).attr("transform",function(t){return"translate(".concat(y.x(t.x0),",").concat(y.y(t.length),")")}).attr("width",function(t){return Math.max(y.x(t.x1)-y.x(t.x0)-1,0)}).attr("height",function(t){return l-y.y(t.length)}).style("fill","#87CEFA")},100)},[h]),(0,t.useEffect)(function(){setTimeout(function(){var t=p.current.getBoundingClientRect().height-x-v,r=g.bins;0!==c.length&&(r=g.hist(f)),e.select(p.current).selectAll(".hist-area").selectAll(".bar-f").data(r).join("rect").attr("class","bar-f").style("transform","scale(1, -1)").attr("x",function(t){return y.x(t.x0)}).attr("y",function(){return-t}).transition().duration(1e3).attr("width",function(t){return Math.max(y.x(t.x1)-y.x(t.x0)-1,0)}).attr("height",function(e){return t-y.y(e.length)}).style("fill","#4682B4")},100)},[c,f,h]),t.default.createElement("div",{id:u,ref:p,style:{width:"100%",height:"100%"}})}var p=exports.default=h;h.propTypes={data:r.default.arrayOf(r.default.shape({})).isRequired,fields:r.default.shape({x:r.default.string.isRequired}).isRequired,id:r.default.string.isRequired,binsCount:r.default.number,filterData:r.default.arrayOf(r.default.shape({})).isRequired,filters:r.default.arrayOf(r.default.shape({})).isRequired,filterAdded:r.default.func.isRequired,layout:r.default.shape({width:r.default.number.isRequired,currentCols:r.default.number.isRequired}).isRequired},h.defaultProps={binsCount:10};
},{"react":"n8MK","d3":"UzF0","prop-types":"D9Od","../../../common/utils":"by1F"}]},{},[], null)
//# sourceMappingURL=Histogram.6a577788.js.map