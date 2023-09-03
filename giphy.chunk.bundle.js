"use strict";(self.webpackChunkfrontend_performance_basecamp=self.webpackChunkfrontend_performance_basecamp||[]).push([[999],{8617:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.GiphyFetch=void 0;var o=r(3859),a=i(r(2431)),u=r(1073),c=i(r(9669)),s=function(e){return e&&e.type?e.type:"gifs"},f=function(){function e(e){var t=this;this.getQS=function(e){return void 0===e&&(e={}),a.default.stringify(n(n({},e),{api_key:t.apiKey,pingback_id:o.getPingbackId()}))},this.apiKey=e}return e.prototype.categories=function(e){return c.default("gifs/categories?"+this.getQS(e))},e.prototype.gif=function(e){return c.default("gifs/"+e+"?"+this.getQS(),u.normalizeGif)},e.prototype.gifs=function(e,t){return Array.isArray(e)?c.default("gifs?"+this.getQS({ids:e.join(",")}),u.normalizeGifs):c.default("gifs/categories/"+e+"/"+t+"?"+this.getQS(),u.normalizeGifs)},e.prototype.emoji=function(e){return c.default("emoji?"+this.getQS(e),u.normalizeGifs)},e.prototype.animate=function(e,t){void 0===t&&(t={});var r=this.getQS(n(n({},t),{m:e}));return c.default("text/animate?"+r,u.normalizeGifs)},e.prototype.search=function(e,t){void 0===t&&(t={});var r,i=t.channel?"@"+t.channel+" "+e:e;"text"===t.type&&(r=!0);var o=this.getQS(n(n({},t),{q:i,excludeDynamicResults:r}));return c.default(s(t)+"/search?"+o,u.normalizeGifs)},e.prototype.subcategories=function(e,t){return c.default("gifs/categories/"+e+"?"+this.getQS(t))},e.prototype.trending=function(e){return void 0===e&&(e={}),c.default(s(e)+"/trending?"+this.getQS(e),u.normalizeGifs)},e.prototype.random=function(e){return c.default(s(e)+"/random?"+this.getQS(e),u.normalizeGif,!0)},e.prototype.related=function(e,t){return c.default(("stickers"===(null==t?void 0:t.type)?"stickers":"gifs")+"/related?"+this.getQS(n({gif_id:e},t)),u.normalizeGifs)},e}();t.GiphyFetch=f,t.default=f},4331:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.serverUrl=void 0;var n=("undefined"!=typeof window?window:r.g)||{};t.serverUrl=n.GIPHY_API_URL||"https://api.giphy.com/v1/"},3027:function(e,t){var r,n=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)});Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(t,r,n){void 0===r&&(r=0),void 0===n&&(n="");var i=e.call(this,t)||this;return i.status=r,i.statusText=n,i}return n(t,e),t}(Error);t.default=i},8304:function(e,t,r){var n,i=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||i(t,e,r)},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.gifPaginator=t.GiphyFetch=t.serverUrl=void 0;var u=r(3859),c=r(4331);Object.defineProperty(t,"serverUrl",{enumerable:!0,get:function(){return c.serverUrl}});var s=r(8617);Object.defineProperty(t,"GiphyFetch",{enumerable:!0,get:function(){return a(s).default}}),o(r(6100),t);var f=r(742);Object.defineProperty(t,"gifPaginator",{enumerable:!0,get:function(){return f.gifPaginator}}),o(r(9581),t);var l=r(8821).i8;(null===(n=u.getGiphySDKRequestHeaders())||void 0===n?void 0:n.get("X-GIPHY-SDK-NAME"))||(u.appendGiphySDKRequestHeader("X-GIPHY-SDK-NAME","FetchAPI"),u.appendGiphySDKRequestHeader("X-GIPHY-SDK-VERSION",l))},1073:function(e,t){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normalizeGifs=t.normalizeGif=t.USER_BOOL_PROPS=t.BOOL_PROPS=void 0,t.BOOL_PROPS=["is_anonymous","is_community","is_featured","is_hidden","is_indexable","is_preserve_size","is_realtime","is_removed","is_sticker","is_dynamic"],t.USER_BOOL_PROPS=["suppress_chrome","is_public","is_verified"];var n=function(e){return function(t){return e[t]=!!e[t]}},i=function(e){return"string"==typeof e?e:e.text},o=function(e){var o=r({},e);o.id=String(o.id),o.tags=(o.tags||[]).map(i),t.BOOL_PROPS.forEach(n(o)),Object.keys(o.images||{}).forEach((function(e){var t=o.images[e];t.width=parseInt(t.width),t.height=parseInt(t.height)}));var a=o.user;if(a){var u=r({},a);t.USER_BOOL_PROPS.forEach(n(u)),o.user=u}return o};t.normalizeGif=function(e){return e.data=o(e.data),e};t.normalizeGifs=function(e){return e.data=e.data.map((function(e){return o(e)})),e}},6100:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},742:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},i=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.gifPaginator=void 0;t.gifPaginator=function(e,t){void 0===t&&(t=[]);var o=i([],t),a=t.map((function(e){return e.id})),u=t.length,c=!1;return function(){return r(void 0,void 0,void 0,(function(){var t,r,s;return n(this,(function(n){switch(n.label){case 0:return c?[2,o]:[4,e(u)];case 1:return t=n.sent(),r=t.pagination,s=t.data,u=r.count+r.offset,c=u===r.total_count,s.forEach((function(e){var t=e.id;a.includes(t)||(o.push(e),a.push(t))})),[2,i([],o)]}}))}))}}},9669:function(e,t,r){var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function a(e){try{c(n.next(e))}catch(e){o(e)}}function u(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,u)}c((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,n=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=a.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.DEFAULT_ERROR=t.ERROR_PREFIX=void 0;var a=r(4331),u=o(r(3027));t.ERROR_PREFIX="@giphy/js-fetch-api: ",t.DEFAULT_ERROR="Error fetching";var c=function(e){return e},s={};t.default=function(e,r,o){var f,l=this;if(void 0===r&&(r=c),void 0===o&&(o=!1),f=Date.now(),Object.keys(s).forEach((function(e){var t=s[e].isError?6e3:6e4;f-s[e].ts>=t&&delete s[e]})),!s[e]||o){s[e]={request:n(l,void 0,void 0,(function(){var n,o,c,f,l,d;return i(this,(function(i){switch(i.label){case 0:return i.trys.push([0,9,,10]),[4,fetch(""+a.serverUrl+e,{method:"get"})];case 1:return(o=i.sent()).ok?[4,o.json()]:[3,3];case 2:if(f=i.sent(),null===(d=f.meta)||void 0===d?void 0:d.response_id)return[2,r(f)];throw{message:"synthetic response"};case 3:c=t.DEFAULT_ERROR,i.label=4;case 4:return i.trys.push([4,6,,7]),[4,o.json()];case 5:return(f=i.sent()).message&&(c=f.message),[3,7];case 6:return i.sent(),[3,7];case 7:s[e]&&(s[e].isError=!0),n=new u.default(""+t.ERROR_PREFIX+c,o.status,o.statusText),i.label=8;case 8:return[3,10];case 9:return l=i.sent(),n=new u.default(l.message),s[e]&&(s[e].isError=!0),[3,10];case 10:throw n}}))})),ts:Date.now()}}return s[e].request}},9581:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},4935:e=>{var t=String.prototype.replace,r=/%20/g,n="RFC1738",i="RFC3986";e.exports={default:i,formatters:{RFC1738:function(e){return t.call(e,r,"+")},RFC3986:function(e){return String(e)}},RFC1738:n,RFC3986:i}},2431:(e,t,r)=>{var n=r(4748),i=r(9088),o=r(4935);e.exports={formats:o,parse:i,stringify:n}},9088:(e,t,r)=>{var n=r(4761),i=Object.prototype.hasOwnProperty,o=Array.isArray,a={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:n.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},u=function(e){return e.replace(/&#(\d+);/g,(function(e,t){return String.fromCharCode(parseInt(t,10))}))},c=function(e,t){return e&&"string"==typeof e&&t.comma&&e.indexOf(",")>-1?e.split(","):e},s=function(e,t,r,n){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,a=/(\[[^[\]]*])/g,u=r.depth>0&&/(\[[^[\]]*])/.exec(o),s=u?o.slice(0,u.index):o,f=[];if(s){if(!r.plainObjects&&i.call(Object.prototype,s)&&!r.allowPrototypes)return;f.push(s)}for(var l=0;r.depth>0&&null!==(u=a.exec(o))&&l<r.depth;){if(l+=1,!r.plainObjects&&i.call(Object.prototype,u[1].slice(1,-1))&&!r.allowPrototypes)return;f.push(u[1])}return u&&f.push("["+o.slice(u.index)+"]"),function(e,t,r,n){for(var i=n?t:c(t,r),o=e.length-1;o>=0;--o){var a,u=e[o];if("[]"===u&&r.parseArrays)a=[].concat(i);else{a=r.plainObjects?Object.create(null):{};var s="["===u.charAt(0)&&"]"===u.charAt(u.length-1)?u.slice(1,-1):u,f=parseInt(s,10);r.parseArrays||""!==s?!isNaN(f)&&u!==s&&String(f)===s&&f>=0&&r.parseArrays&&f<=r.arrayLimit?(a=[])[f]=i:a[s]=i:a={0:i}}i=a}return i}(f,t,r,n)}};e.exports=function(e,t){var r=function(e){if(!e)return a;if(null!==e.decoder&&void 0!==e.decoder&&"function"!=typeof e.decoder)throw new TypeError("Decoder has to be a function.");if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var t=void 0===e.charset?a.charset:e.charset;return{allowDots:void 0===e.allowDots?a.allowDots:!!e.allowDots,allowPrototypes:"boolean"==typeof e.allowPrototypes?e.allowPrototypes:a.allowPrototypes,allowSparse:"boolean"==typeof e.allowSparse?e.allowSparse:a.allowSparse,arrayLimit:"number"==typeof e.arrayLimit?e.arrayLimit:a.arrayLimit,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:a.charsetSentinel,comma:"boolean"==typeof e.comma?e.comma:a.comma,decoder:"function"==typeof e.decoder?e.decoder:a.decoder,delimiter:"string"==typeof e.delimiter||n.isRegExp(e.delimiter)?e.delimiter:a.delimiter,depth:"number"==typeof e.depth||!1===e.depth?+e.depth:a.depth,ignoreQueryPrefix:!0===e.ignoreQueryPrefix,interpretNumericEntities:"boolean"==typeof e.interpretNumericEntities?e.interpretNumericEntities:a.interpretNumericEntities,parameterLimit:"number"==typeof e.parameterLimit?e.parameterLimit:a.parameterLimit,parseArrays:!1!==e.parseArrays,plainObjects:"boolean"==typeof e.plainObjects?e.plainObjects:a.plainObjects,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:a.strictNullHandling}}(t);if(""===e||null==e)return r.plainObjects?Object.create(null):{};for(var f="string"==typeof e?function(e,t){var r,s={},f=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,l=t.parameterLimit===1/0?void 0:t.parameterLimit,d=f.split(t.delimiter,l),p=-1,h=t.charset;if(t.charsetSentinel)for(r=0;r<d.length;++r)0===d[r].indexOf("utf8=")&&("utf8=%E2%9C%93"===d[r]?h="utf-8":"utf8=%26%2310003%3B"===d[r]&&(h="iso-8859-1"),p=r,r=d.length);for(r=0;r<d.length;++r)if(r!==p){var g,y,v=d[r],b=v.indexOf("]="),m=-1===b?v.indexOf("="):b+1;-1===m?(g=t.decoder(v,a.decoder,h,"key"),y=t.strictNullHandling?null:""):(g=t.decoder(v.slice(0,m),a.decoder,h,"key"),y=n.maybeMap(c(v.slice(m+1),t),(function(e){return t.decoder(e,a.decoder,h,"value")}))),y&&t.interpretNumericEntities&&"iso-8859-1"===h&&(y=u(y)),v.indexOf("[]=")>-1&&(y=o(y)?[y]:y),i.call(s,g)?s[g]=n.combine(s[g],y):s[g]=y}return s}(e,r):e,l=r.plainObjects?Object.create(null):{},d=Object.keys(f),p=0;p<d.length;++p){var h=d[p],g=s(h,f[h],r,"string"==typeof e);l=n.merge(l,g,r)}return!0===r.allowSparse?l:n.compact(l)}},4748:(e,t,r)=>{var n=r(7478),i=r(4761),o=r(4935),a=Object.prototype.hasOwnProperty,u={brackets:function(e){return e+"[]"},comma:"comma",indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},c=Array.isArray,s=Array.prototype.push,f=function(e,t){s.apply(e,c(t)?t:[t])},l=Date.prototype.toISOString,d=o.default,p={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:i.encode,encodeValuesOnly:!1,format:d,formatter:o.formatters[d],indices:!1,serializeDate:function(e){return l.call(e)},skipNulls:!1,strictNullHandling:!1},h=function e(t,r,o,a,u,s,l,d,h,g,y,v,b,m,_){var O,w=t;if(_.has(t))throw new RangeError("Cyclic object value");if("function"==typeof l?w=l(r,w):w instanceof Date?w=g(w):"comma"===o&&c(w)&&(w=i.maybeMap(w,(function(e){return e instanceof Date?g(e):e}))),null===w){if(a)return s&&!b?s(r,p.encoder,m,"key",y):r;w=""}if("string"==typeof(O=w)||"number"==typeof O||"boolean"==typeof O||"symbol"==typeof O||"bigint"==typeof O||i.isBuffer(w))return s?[v(b?r:s(r,p.encoder,m,"key",y))+"="+v(s(w,p.encoder,m,"value",y))]:[v(r)+"="+v(String(w))];var P,S=[];if(void 0===w)return S;if("comma"===o&&c(w))P=[{value:w.length>0?w.join(",")||null:void 0}];else if(c(l))P=l;else{var j=Object.keys(w);P=d?j.sort(d):j}for(var R=0;R<P.length;++R){var E=P[R],A="object"==typeof E&&void 0!==E.value?E.value:w[E];if(!u||null!==A){var x=c(w)?"function"==typeof o?o(r,E):r:r+(h?"."+E:"["+E+"]");_.set(t,!0);var k=n();f(S,e(A,x,o,a,u,s,l,d,h,g,y,v,b,m,k))}}return S};e.exports=function(e,t){var r,i=e,s=function(e){if(!e)return p;if(null!==e.encoder&&void 0!==e.encoder&&"function"!=typeof e.encoder)throw new TypeError("Encoder has to be a function.");var t=e.charset||p.charset;if(void 0!==e.charset&&"utf-8"!==e.charset&&"iso-8859-1"!==e.charset)throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=o.default;if(void 0!==e.format){if(!a.call(o.formatters,e.format))throw new TypeError("Unknown format option provided.");r=e.format}var n=o.formatters[r],i=p.filter;return("function"==typeof e.filter||c(e.filter))&&(i=e.filter),{addQueryPrefix:"boolean"==typeof e.addQueryPrefix?e.addQueryPrefix:p.addQueryPrefix,allowDots:void 0===e.allowDots?p.allowDots:!!e.allowDots,charset:t,charsetSentinel:"boolean"==typeof e.charsetSentinel?e.charsetSentinel:p.charsetSentinel,delimiter:void 0===e.delimiter?p.delimiter:e.delimiter,encode:"boolean"==typeof e.encode?e.encode:p.encode,encoder:"function"==typeof e.encoder?e.encoder:p.encoder,encodeValuesOnly:"boolean"==typeof e.encodeValuesOnly?e.encodeValuesOnly:p.encodeValuesOnly,filter:i,format:r,formatter:n,serializeDate:"function"==typeof e.serializeDate?e.serializeDate:p.serializeDate,skipNulls:"boolean"==typeof e.skipNulls?e.skipNulls:p.skipNulls,sort:"function"==typeof e.sort?e.sort:null,strictNullHandling:"boolean"==typeof e.strictNullHandling?e.strictNullHandling:p.strictNullHandling}}(t);"function"==typeof s.filter?i=(0,s.filter)("",i):c(s.filter)&&(r=s.filter);var l,d=[];if("object"!=typeof i||null===i)return"";l=t&&t.arrayFormat in u?t.arrayFormat:t&&"indices"in t?t.indices?"indices":"repeat":"indices";var g=u[l];r||(r=Object.keys(i)),s.sort&&r.sort(s.sort);for(var y=n(),v=0;v<r.length;++v){var b=r[v];s.skipNulls&&null===i[b]||f(d,h(i[b],b,g,s.strictNullHandling,s.skipNulls,s.encode?s.encoder:null,s.filter,s.sort,s.allowDots,s.serializeDate,s.format,s.formatter,s.encodeValuesOnly,s.charset,y))}var m=d.join(s.delimiter),_=!0===s.addQueryPrefix?"?":"";return s.charsetSentinel&&("iso-8859-1"===s.charset?_+="utf8=%26%2310003%3B&":_+="utf8=%E2%9C%93&"),m.length>0?_+m:""}},4761:(e,t,r)=>{var n=r(4935),i=Object.prototype.hasOwnProperty,o=Array.isArray,a=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),u=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r};e.exports={arrayToObject:u,assign:function(e,t){return Object.keys(t).reduce((function(e,r){return e[r]=t[r],e}),e)},combine:function(e,t){return[].concat(e,t)},compact:function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var i=t[n],a=i.obj[i.prop],u=Object.keys(a),c=0;c<u.length;++c){var s=u[c],f=a[s];"object"==typeof f&&null!==f&&-1===r.indexOf(f)&&(t.push({obj:a,prop:s}),r.push(f))}return function(e){for(;e.length>1;){var t=e.pop(),r=t.obj[t.prop];if(o(r)){for(var n=[],i=0;i<r.length;++i)void 0!==r[i]&&n.push(r[i]);t.obj[t.prop]=n}}}(t),e},decode:function(e,t,r){var n=e.replace(/\+/g," ");if("iso-8859-1"===r)return n.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(n)}catch(e){return n}},encode:function(e,t,r,i,o){if(0===e.length)return e;var u=e;if("symbol"==typeof e?u=Symbol.prototype.toString.call(e):"string"!=typeof e&&(u=String(e)),"iso-8859-1"===r)return escape(u).replace(/%u[0-9a-f]{4}/gi,(function(e){return"%26%23"+parseInt(e.slice(2),16)+"%3B"}));for(var c="",s=0;s<u.length;++s){var f=u.charCodeAt(s);45===f||46===f||95===f||126===f||f>=48&&f<=57||f>=65&&f<=90||f>=97&&f<=122||o===n.RFC1738&&(40===f||41===f)?c+=u.charAt(s):f<128?c+=a[f]:f<2048?c+=a[192|f>>6]+a[128|63&f]:f<55296||f>=57344?c+=a[224|f>>12]+a[128|f>>6&63]+a[128|63&f]:(s+=1,f=65536+((1023&f)<<10|1023&u.charCodeAt(s)),c+=a[240|f>>18]+a[128|f>>12&63]+a[128|f>>6&63]+a[128|63&f])}return c},isBuffer:function(e){return!(!e||"object"!=typeof e)&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},maybeMap:function(e,t){if(o(e)){for(var r=[],n=0;n<e.length;n+=1)r.push(t(e[n]));return r}return t(e)},merge:function e(t,r,n){if(!r)return t;if("object"!=typeof r){if(o(t))t.push(r);else{if(!t||"object"!=typeof t)return[t,r];(n&&(n.plainObjects||n.allowPrototypes)||!i.call(Object.prototype,r))&&(t[r]=!0)}return t}if(!t||"object"!=typeof t)return[t].concat(r);var a=t;return o(t)&&!o(r)&&(a=u(t,n)),o(t)&&o(r)?(r.forEach((function(r,o){if(i.call(t,o)){var a=t[o];a&&"object"==typeof a&&r&&"object"==typeof r?t[o]=e(a,r,n):t.push(r)}else t[o]=r})),t):Object.keys(r).reduce((function(t,o){var a=r[o];return i.call(t,o)?t[o]=e(t[o],a,n):t[o]=a,t}),a)}}},1301:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.setRenditionScaleUpMaxPixels=void 0;var n=r(1645),i=50;t.setRenditionScaleUpMaxPixels=function(e){n.Logger.debug("@giphy/js-util set rendition selection scale up max pixels to "+e),i=e},t.default=function(e,t,r,n){void 0===n&&(n=i);var o=e[0],a=e.filter((function(e){return e.width*e.height>o.width*o.height&&(o=e),t-e.width<=n&&r-e.height<=n}));return 0===a.length?o:function(e,t,r){var n,i=1/0;return r.forEach((function(r){var o=r.width/e*(r.height/t),a=Math.abs(1-o);a<i&&(i=a,n=r)})),n}(t,r,a)}},1184:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.pick=t.without=t.take=t.forEach=t.mapValues=void 0,t.mapValues=function(e,t){if(Array.isArray(e))throw"This map is just for objects, just use array.map for arrays";return Object.keys(e).reduce((function(r,n){return r[n]=t(e[n],n),r}),{})},t.forEach=function(e,t){if(Array.isArray(e))throw"This map is just for objects, just use array.forEach for arrays";return Object.keys(e).forEach((function(r){t(e[r],r)}))},t.take=function(e,t){return void 0===t&&(t=0),e.slice(0,t)},t.without=function(e,t){return e.filter((function(e){return-1===t.indexOf(e)}))},t.pick=function(e,t){var r={};return t.forEach((function(t){void 0!==e[t]&&(r[t]=e[t])})),r}},8918:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){var t=0,r=0,n=e.offsetWidth,i=e.offsetHeight;do{t+=e.offsetLeft,r+=e.offsetTop,e=e.offsetParent}while(e);return{left:t,top:r,width:n,height:i,right:t+n,bottom:r+i}}},1539:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(4763),i="";t.default=function(){if(!i){try{i=sessionStorage.getItem("giphyPingbackId")}catch(e){}if(!i){var e=(new Date).getTime().toString(16);try{i=(""+e+n.v4().replace(/-/g,"")).substring(0,16)}catch(e){i=function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=0;r<16;r++)e+=t.charAt(Math.floor(62*Math.random()));return e}()}try{sessionStorage.setItem("giphyPingbackId",i)}catch(e){}}}return i}},5956:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var i in t=arguments[r])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},n.apply(this,arguments)},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getAltText=t.getGifWidth=t.getGifHeight=t.getBestRenditionUrl=t.getBestRendition=t.getBestVideo=t.getSpecificRendition=void 0;var o=i(r(1301)),a=r(1184),u=r(4485);t.getSpecificRendition=function(e,t,r,n){var i=e.images,o=e.is_sticker;if(void 0===r&&(r=!1),void 0===n&&(n=!1),!i||!t)return"";var a=i[t+((r=r&&!n)?"_still":"")];if(a){if(o||r)return a.url;var c=u.SUPPORTS_WEBP&&a.webp;return n?a.mp4:c||a.url}return""};t.getBestVideo=function(e,t,r){var i=null==e?void 0:e.assets;if(i){delete(i=n({},i)).source;var a=Object.values(i).sort((function(e,t){return e.width-t.width}));return o.default(a,t,r)}};t.getBestRendition=function(e,t,r,i){var u=a.pick(e,["original","fixed_width","fixed_height","fixed_width_small","fixed_height_small"]),c=Object.entries(u).map((function(e){var t=e[0],r=e[1];return n({renditionName:t},r)}));return o.default(c,t,r,i)};t.getBestRenditionUrl=function(e,r,n,i){var o=e.images,a=e.video,c=e.type;if(void 0===i&&(i={isStill:!1,useVideo:!1}),!r||!n||!o)return"";var s=i.useVideo,f=i.isStill,l=i.scaleUpMaxPixels,d=function(e,t,r){return"video"===e&&r&&r.previews&&!Object.keys(t).length?r.previews:t}(c,o,a),p=d[t.getBestRendition(d,r,n,l).renditionName+(f&&!s?"_still":"")];return(s?p.mp4:u.SUPPORTS_WEBP&&p.webp?p.webp:p.url)||""};t.getGifHeight=function(e,t){var r=e.images.fixed_width;if(r){var n=r.width/r.height;return Math.round(t/n)}return 0};t.getGifWidth=function(e,t){var r=e.images.fixed_width;if(r){var n=r.width/r.height;return Math.round(t*n)}return 0};t.getAltText=function(e){var t=e.user,r=e.tags,n=void 0===r?[]:r,i=e.is_sticker,o=void 0!==i&&i,u=e.title,c=void 0===u?"":u;if(c)return c;var s=t&&t.username||"";return(s?s+" ":"")+a.take(a.without(n,["transparent"]),s?4:5).join(" ")+" "+(o?"Sticker":"GIF")}},3859:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),i=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfWebP=t.getSpecificRendition=t.getGifWidth=t.getGifHeight=t.getBestVideo=t.getBestRenditionUrl=t.getBestRendition=t.getAltText=t.getPingbackId=t.getClientRect=t.setRenditionScaleUpMaxPixels=t.bestfit=void 0;var a=r(1301);Object.defineProperty(t,"bestfit",{enumerable:!0,get:function(){return o(a).default}}),Object.defineProperty(t,"setRenditionScaleUpMaxPixels",{enumerable:!0,get:function(){return a.setRenditionScaleUpMaxPixels}}),i(r(1184),t);var u=r(8918);Object.defineProperty(t,"getClientRect",{enumerable:!0,get:function(){return o(u).default}});var c=r(1539);Object.defineProperty(t,"getPingbackId",{enumerable:!0,get:function(){return o(c).default}});var s=r(5956);Object.defineProperty(t,"getAltText",{enumerable:!0,get:function(){return s.getAltText}}),Object.defineProperty(t,"getBestRendition",{enumerable:!0,get:function(){return s.getBestRendition}}),Object.defineProperty(t,"getBestRenditionUrl",{enumerable:!0,get:function(){return s.getBestRenditionUrl}}),Object.defineProperty(t,"getBestVideo",{enumerable:!0,get:function(){return s.getBestVideo}}),Object.defineProperty(t,"getGifHeight",{enumerable:!0,get:function(){return s.getGifHeight}}),Object.defineProperty(t,"getGifWidth",{enumerable:!0,get:function(){return s.getGifWidth}}),Object.defineProperty(t,"getSpecificRendition",{enumerable:!0,get:function(){return s.getSpecificRendition}}),i(r(1645),t),i(r(3465),t);var f=r(4485);Object.defineProperty(t,"checkIfWebP",{enumerable:!0,get:function(){return f.checkIfWebP}})},1645:function(e,t){var r,n=this&&this.__spreadArray||function(e,t){for(var r=0,n=t.length,i=e.length;r<n;r++,i++)e[i]=t[r];return e};Object.defineProperty(t,"__esModule",{value:!0}),t.Logger=t.LogLevel=void 0,function(e){e[e.DEBUG=0]="DEBUG",e[e.INFO=1]="INFO",e[e.WARN=2]="WARN",e[e.ERROR=3]="ERROR"}(r=t.LogLevel||(t.LogLevel={})),t.Logger={ENABLED:"undefined"!=typeof window&&"undefined"!=typeof location&&-1!==location.search.indexOf("giphy-debug"),LEVEL:0,PREFIX:"GiphyJS",debug:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];t.Logger.ENABLED&&t.Logger.LEVEL<=r.DEBUG&&console.debug.apply(console,n([t.Logger.PREFIX],e))},info:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];t.Logger.ENABLED&&t.Logger.LEVEL<=r.INFO&&console.info.apply(console,n([t.Logger.PREFIX],e))},warn:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];t.Logger.ENABLED&&t.Logger.LEVEL<=r.WARN&&console.warn.apply(console,n([t.Logger.PREFIX],e))},error:function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];t.Logger.ENABLED&&t.Logger.LEVEL<=r.ERROR&&console.error.apply(console,n([t.Logger.PREFIX],e))}}},3465:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.appendGiphySDKRequestParam=t.appendGiphySDKRequestHeader=t.getGiphySDKRequestHeaders=void 0;var n=("undefined"!=typeof window?window:r.g)||{};n._GIPHY_SDK_HEADERS_=n._GIPHY_SDK_HEADERS_||(n.Headers?new n.Headers({"X-GIPHY-SDK-PLATFORM":"web"}):void 0);t.getGiphySDKRequestHeaders=function(){return n._GIPHY_SDK_HEADERS_};t.appendGiphySDKRequestHeader=function(e,r){var n;return null===(n=t.getGiphySDKRequestHeaders())||void 0===n?void 0:n.set(e,r)};t.appendGiphySDKRequestParam=function(e,r){var n;return null===(n=t.getGiphySDKRequestHeaders())||void 0===n?void 0:n.set(e,r)}},4485:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.checkIfWebP=t.SUPPORTS_WEBP=void 0,t.SUPPORTS_WEBP=null,t.checkIfWebP=new Promise((function(e){"undefined"==typeof Image&&e(!1);var r=new Image;r.onload=function(){t.SUPPORTS_WEBP=!0,e(t.SUPPORTS_WEBP)},r.onerror=function(){t.SUPPORTS_WEBP=!1,e(t.SUPPORTS_WEBP)},r.src="data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA"}))},4763:(e,t,r)=>{var n;r.r(t),r.d(t,{NIL:()=>L,parse:()=>y,stringify:()=>f,v1:()=>g,v3:()=>R,v4:()=>E,v5:()=>D,validate:()=>u,version:()=>I});var i=new Uint8Array(16);function o(){if(!n&&!(n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(i)}const a=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const u=function(e){return"string"==typeof e&&a.test(e)};for(var c=[],s=0;s<256;++s)c.push((s+256).toString(16).substr(1));const f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(c[e[t+0]]+c[e[t+1]]+c[e[t+2]]+c[e[t+3]]+"-"+c[e[t+4]]+c[e[t+5]]+"-"+c[e[t+6]]+c[e[t+7]]+"-"+c[e[t+8]]+c[e[t+9]]+"-"+c[e[t+10]]+c[e[t+11]]+c[e[t+12]]+c[e[t+13]]+c[e[t+14]]+c[e[t+15]]).toLowerCase();if(!u(r))throw TypeError("Stringified UUID is invalid");return r};var l,d,p=0,h=0;const g=function(e,t,r){var n=t&&r||0,i=t||new Array(16),a=(e=e||{}).node||l,u=void 0!==e.clockseq?e.clockseq:d;if(null==a||null==u){var c=e.random||(e.rng||o)();null==a&&(a=l=[1|c[0],c[1],c[2],c[3],c[4],c[5]]),null==u&&(u=d=16383&(c[6]<<8|c[7]))}var s=void 0!==e.msecs?e.msecs:Date.now(),g=void 0!==e.nsecs?e.nsecs:h+1,y=s-p+(g-h)/1e4;if(y<0&&void 0===e.clockseq&&(u=u+1&16383),(y<0||s>p)&&void 0===e.nsecs&&(g=0),g>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");p=s,h=g,d=u;var v=(1e4*(268435455&(s+=122192928e5))+g)%4294967296;i[n++]=v>>>24&255,i[n++]=v>>>16&255,i[n++]=v>>>8&255,i[n++]=255&v;var b=s/4294967296*1e4&268435455;i[n++]=b>>>8&255,i[n++]=255&b,i[n++]=b>>>24&15|16,i[n++]=b>>>16&255,i[n++]=u>>>8|128,i[n++]=255&u;for(var m=0;m<6;++m)i[n+m]=a[m];return t||f(i)};const y=function(e){if(!u(e))throw TypeError("Invalid UUID");var t,r=new Uint8Array(16);return r[0]=(t=parseInt(e.slice(0,8),16))>>>24,r[1]=t>>>16&255,r[2]=t>>>8&255,r[3]=255&t,r[4]=(t=parseInt(e.slice(9,13),16))>>>8,r[5]=255&t,r[6]=(t=parseInt(e.slice(14,18),16))>>>8,r[7]=255&t,r[8]=(t=parseInt(e.slice(19,23),16))>>>8,r[9]=255&t,r[10]=(t=parseInt(e.slice(24,36),16))/1099511627776&255,r[11]=t/4294967296&255,r[12]=t>>>24&255,r[13]=t>>>16&255,r[14]=t>>>8&255,r[15]=255&t,r};function v(e,t,r){function n(e,n,i,o){if("string"==typeof e&&(e=function(e){e=unescape(encodeURIComponent(e));for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t}(e)),"string"==typeof n&&(n=y(n)),16!==n.length)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");var a=new Uint8Array(16+e.length);if(a.set(n),a.set(e,n.length),(a=r(a))[6]=15&a[6]|t,a[8]=63&a[8]|128,i){o=o||0;for(var u=0;u<16;++u)i[o+u]=a[u];return i}return f(a)}try{n.name=e}catch(e){}return n.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",n.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",n}function b(e){return 14+(e+64>>>9<<4)+1}function m(e,t){var r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function _(e,t,r,n,i,o){return m((a=m(m(t,e),m(n,o)))<<(u=i)|a>>>32-u,r);var a,u}function O(e,t,r,n,i,o,a){return _(t&r|~t&n,e,t,i,o,a)}function w(e,t,r,n,i,o,a){return _(t&n|r&~n,e,t,i,o,a)}function P(e,t,r,n,i,o,a){return _(t^r^n,e,t,i,o,a)}function S(e,t,r,n,i,o,a){return _(r^(t|~n),e,t,i,o,a)}const j=function(e){if("string"==typeof e){var t=unescape(encodeURIComponent(e));e=new Uint8Array(t.length);for(var r=0;r<t.length;++r)e[r]=t.charCodeAt(r)}return function(e){for(var t=[],r=32*e.length,n="0123456789abcdef",i=0;i<r;i+=8){var o=e[i>>5]>>>i%32&255,a=parseInt(n.charAt(o>>>4&15)+n.charAt(15&o),16);t.push(a)}return t}(function(e,t){e[t>>5]|=128<<t%32,e[b(t)-1]=t;for(var r=1732584193,n=-271733879,i=-1732584194,o=271733878,a=0;a<e.length;a+=16){var u=r,c=n,s=i,f=o;r=O(r,n,i,o,e[a],7,-680876936),o=O(o,r,n,i,e[a+1],12,-389564586),i=O(i,o,r,n,e[a+2],17,606105819),n=O(n,i,o,r,e[a+3],22,-1044525330),r=O(r,n,i,o,e[a+4],7,-176418897),o=O(o,r,n,i,e[a+5],12,1200080426),i=O(i,o,r,n,e[a+6],17,-1473231341),n=O(n,i,o,r,e[a+7],22,-45705983),r=O(r,n,i,o,e[a+8],7,1770035416),o=O(o,r,n,i,e[a+9],12,-1958414417),i=O(i,o,r,n,e[a+10],17,-42063),n=O(n,i,o,r,e[a+11],22,-1990404162),r=O(r,n,i,o,e[a+12],7,1804603682),o=O(o,r,n,i,e[a+13],12,-40341101),i=O(i,o,r,n,e[a+14],17,-1502002290),r=w(r,n=O(n,i,o,r,e[a+15],22,1236535329),i,o,e[a+1],5,-165796510),o=w(o,r,n,i,e[a+6],9,-1069501632),i=w(i,o,r,n,e[a+11],14,643717713),n=w(n,i,o,r,e[a],20,-373897302),r=w(r,n,i,o,e[a+5],5,-701558691),o=w(o,r,n,i,e[a+10],9,38016083),i=w(i,o,r,n,e[a+15],14,-660478335),n=w(n,i,o,r,e[a+4],20,-405537848),r=w(r,n,i,o,e[a+9],5,568446438),o=w(o,r,n,i,e[a+14],9,-1019803690),i=w(i,o,r,n,e[a+3],14,-187363961),n=w(n,i,o,r,e[a+8],20,1163531501),r=w(r,n,i,o,e[a+13],5,-1444681467),o=w(o,r,n,i,e[a+2],9,-51403784),i=w(i,o,r,n,e[a+7],14,1735328473),r=P(r,n=w(n,i,o,r,e[a+12],20,-1926607734),i,o,e[a+5],4,-378558),o=P(o,r,n,i,e[a+8],11,-2022574463),i=P(i,o,r,n,e[a+11],16,1839030562),n=P(n,i,o,r,e[a+14],23,-35309556),r=P(r,n,i,o,e[a+1],4,-1530992060),o=P(o,r,n,i,e[a+4],11,1272893353),i=P(i,o,r,n,e[a+7],16,-155497632),n=P(n,i,o,r,e[a+10],23,-1094730640),r=P(r,n,i,o,e[a+13],4,681279174),o=P(o,r,n,i,e[a],11,-358537222),i=P(i,o,r,n,e[a+3],16,-722521979),n=P(n,i,o,r,e[a+6],23,76029189),r=P(r,n,i,o,e[a+9],4,-640364487),o=P(o,r,n,i,e[a+12],11,-421815835),i=P(i,o,r,n,e[a+15],16,530742520),r=S(r,n=P(n,i,o,r,e[a+2],23,-995338651),i,o,e[a],6,-198630844),o=S(o,r,n,i,e[a+7],10,1126891415),i=S(i,o,r,n,e[a+14],15,-1416354905),n=S(n,i,o,r,e[a+5],21,-57434055),r=S(r,n,i,o,e[a+12],6,1700485571),o=S(o,r,n,i,e[a+3],10,-1894986606),i=S(i,o,r,n,e[a+10],15,-1051523),n=S(n,i,o,r,e[a+1],21,-2054922799),r=S(r,n,i,o,e[a+8],6,1873313359),o=S(o,r,n,i,e[a+15],10,-30611744),i=S(i,o,r,n,e[a+6],15,-1560198380),n=S(n,i,o,r,e[a+13],21,1309151649),r=S(r,n,i,o,e[a+4],6,-145523070),o=S(o,r,n,i,e[a+11],10,-1120210379),i=S(i,o,r,n,e[a+2],15,718787259),n=S(n,i,o,r,e[a+9],21,-343485551),r=m(r,u),n=m(n,c),i=m(i,s),o=m(o,f)}return[r,n,i,o]}(function(e){if(0===e.length)return[];for(var t=8*e.length,r=new Uint32Array(b(t)),n=0;n<t;n+=8)r[n>>5]|=(255&e[n/8])<<n%32;return r}(e),8*e.length))};const R=v("v3",48,j);const E=function(e,t,r){var n=(e=e||{}).random||(e.rng||o)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,t){r=r||0;for(var i=0;i<16;++i)t[r+i]=n[i];return t}return f(n)};function A(e,t,r,n){switch(e){case 0:return t&r^~t&n;case 1:case 3:return t^r^n;case 2:return t&r^t&n^r&n}}function x(e,t){return e<<t|e>>>32-t}const k=function(e){var t=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof e){var n=unescape(encodeURIComponent(e));e=[];for(var i=0;i<n.length;++i)e.push(n.charCodeAt(i))}else Array.isArray(e)||(e=Array.prototype.slice.call(e));e.push(128);for(var o=e.length/4+2,a=Math.ceil(o/16),u=new Array(a),c=0;c<a;++c){for(var s=new Uint32Array(16),f=0;f<16;++f)s[f]=e[64*c+4*f]<<24|e[64*c+4*f+1]<<16|e[64*c+4*f+2]<<8|e[64*c+4*f+3];u[c]=s}u[a-1][14]=8*(e.length-1)/Math.pow(2,32),u[a-1][14]=Math.floor(u[a-1][14]),u[a-1][15]=8*(e.length-1)&4294967295;for(var l=0;l<a;++l){for(var d=new Uint32Array(80),p=0;p<16;++p)d[p]=u[l][p];for(var h=16;h<80;++h)d[h]=x(d[h-3]^d[h-8]^d[h-14]^d[h-16],1);for(var g=r[0],y=r[1],v=r[2],b=r[3],m=r[4],_=0;_<80;++_){var O=Math.floor(_/20),w=x(g,5)+A(O,y,v,b)+m+t[O]+d[_]>>>0;m=b,b=v,v=x(y,30)>>>0,y=g,g=w}r[0]=r[0]+g>>>0,r[1]=r[1]+y>>>0,r[2]=r[2]+v>>>0,r[3]=r[3]+b>>>0,r[4]=r[4]+m>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]};const D=v("v5",80,k),L="00000000-0000-0000-0000-000000000000";const I=function(e){if(!u(e))throw TypeError("Invalid UUID");return parseInt(e.substr(14,1),16)}},8821:e=>{e.exports={i8:"4.1.1"}}}]);
//# sourceMappingURL=giphy.chunk.bundle.js.map