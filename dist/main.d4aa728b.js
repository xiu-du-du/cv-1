parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"epB2":[function(require,module,exports) {
var n=document.querySelector("#demo"),r=document.querySelector("#style"),a=0,e="/*\n你好，这里是我的一个小项目。\n在这个项目中我将使用代码画一个八卦。\n第一步，先画一个八卦的形状；\n */\n#div1{\n    border-radius:50%;\n    box-shadow:0 0 10px rgba(0,0,0,0.5);\n}\n/*\n第二步，将八卦填充黑白两色。\n*/\n#div1{\n    background: rgb(0,0,0);\n    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);\n}\n/*\n第三步，使用S的方式分割阴阳区域。\n*/\n#div1::before{\n    background-color:white;\n    top:0;\n    left:50%;\n    transform:translateX(-50%);\n}\n#div1::after{\n    background-color:black;\n    bottom:0;\n    left:50%;\n    transform:translateX(-50%);\n}\n/*\n接下来，在分割好的阴阳两面画龙点睛。\n*/\n#div1::before{\n    background: rgb(0,0,0);\n    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);\n}\n#div1::after{\n    background: rgb(255,255,255);\n    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);\n}\n",b="",o=function o(){setTimeout(function(){"\n"===e[a]?b+="<br>":" "===e[a]?b+="&nbsp;":b+=e[a],n.innerHTML=b,r.innerHTML=e.substring(0,a),window.scrollTo(0,99999),(a+=1)<e.length&&o()},50)};o();
},{}]},{},["epB2"], null)
//# sourceMappingURL=main.d4aa728b.js.map