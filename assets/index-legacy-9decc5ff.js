System.register([],(function(n,t){"use strict";return{execute:function(){n("d",(function(n){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var e=Array.from("string"==typeof n?[n]:n);e[e.length-1]=e[e.length-1].replace(/\r?\n([\t ]*)$/,"");var a=e.reduce((function(n,t){var r=t.match(/\n([\t ]+|(?!\s).)/g);return r?n.concat(r.map((function(n){var t,r;return null!==(r=null===(t=n.match(/[\t ]/g))||void 0===t?void 0:t.length)&&void 0!==r?r:0}))):n}),[]);if(a.length){var c=new RegExp("\n[\t ]{"+Math.min.apply(Math,a)+"}","g");e=e.map((function(n){return n.replace(c,"\n")}))}e[0]=e[0].replace(/^\r?\n/,"");var i=e[0];return t.forEach((function(n,t){var r=i.match(/(?:^|\n)( *)$/),a=r?r[1]:"",c=n;"string"==typeof n&&n.includes("\n")&&(c=String(n).split("\n").map((function(n,t){return 0===t?n:""+a+n})).join("\n")),i+=c+e[t+1]})),i}))}}}));
//# sourceMappingURL=index-legacy-9decc5ff.js.map
