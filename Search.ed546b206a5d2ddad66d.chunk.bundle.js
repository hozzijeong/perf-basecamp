(self.webpackChunkfrontend_performance_basecamp=self.webpackChunkfrontend_performance_basecamp||[]).push([[288],{9868:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>_});var i=t(5893),n=t(7294),a=t(8304);const r=new Map;var c=function(e,s,t,i){return new(t||(t=Promise))((function(n,a){function r(e){try{o(i.next(e))}catch(e){a(e)}}function c(e){try{o(i.throw(e))}catch(e){a(e)}}function o(e){var s;e.done?n(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(r,c)}o((i=i.apply(e,s||[])).next())}))};const o=new a.GiphyFetch("zLiTTqLyryZZKsOUFd9TLnhW4C6Mbokj");function l(e){return e.map((e=>{const{id:s,title:t,images:i}=e;return{id:s,title:t,gifUrl:i.original.url,webpUrl:i.original.webp}}))}const h={getTrending:function(){return c(this,void 0,void 0,(function*(){try{return l((yield((e,s)=>{const t=(new Date).getTime(),i=r.get(e);if(i&&i.validTime>t)return i.result;const n=s();return r.set(e,{validTime:t+3e4,result:n}),n})("trending",(()=>fetch("https://api.giphy.com/v1/gifs/trending?api_key=zLiTTqLyryZZKsOUFd9TLnhW4C6Mbokj&limit=16&rating=g").then((e=>e.json()))))).data)}catch(e){return[]}}))},searchByKeyword:function(e,s){return c(this,void 0,void 0,(function*(){const t={limit:16,lang:"en",offset:16*s};try{return l((yield o.search(e,t)).data)}catch(e){return[]}}))}};var d=function(e,s,t,i){return new(t||(t=Promise))((function(n,a){function r(e){try{o(i.next(e))}catch(e){a(e)}}function c(e){try{o(i.throw(e))}catch(e){a(e)}}function o(e){var s;e.done?n(e.value):(s=e.value,s instanceof t?s:new t((function(e){e(s)}))).then(r,c)}o((i=i.apply(e,s||[])).next())}))};const g="BEFORE_SEARCH",u="LOADING",p="FOUND",m="NO_RESULT";var y=t(6868);const j=({searchKeyword:e,onEnter:s,onChange:t,onSearch:n})=>(0,i.jsxs)("section",Object.assign({className:"_yRyLCVW_8BrXNu2Ae1I"},{children:[(0,i.jsx)("h3",Object.assign({className:"tmllUNaCFiCyJ_2LTNUL"},{children:"- find the best gif now - "})),(0,i.jsxs)("div",Object.assign({className:"p1yl5o1LGzbcgKpLvnzP"},{children:[(0,i.jsx)("input",{className:"XZuzNzJP7hkmuiygaxt6",type:"text",value:e,onKeyUp:s,onChange:t}),(0,i.jsx)("button",Object.assign({className:"_HPJ5AEs_c3uawxix3Uk",type:"button",onClick:n},{children:(0,i.jsx)(y.RB5,{color:"white",size:"2rem"})}))]}))]})),f="bMX5kwo8awW0wG6uP_MM",x=({status:e})=>{switch(e){case m:return(0,i.jsxs)("h3",Object.assign({className:f},{children:[(0,i.jsx)("span",{children:"Nothing"}),"🥲"]}));case g:return(0,i.jsxs)("h3",Object.assign({className:f},{children:["🔥 ",(0,i.jsx)("span",{children:"Trending Now"})," 🔥"]}));default:return(0,i.jsx)("h3",Object.assign({className:f},{children:(0,i.jsx)("span",{children:"We Found..."})}))}},b=(0,n.memo)((({gifUrl:e="",title:s="",webpUrl:t=""})=>(0,i.jsxs)("div",Object.assign({className:"d9Kx4D_C6coYB4Bq3Y_D"},{children:[(0,i.jsxs)("picture",{children:[(0,i.jsx)("source",{srcSet:t,type:"image/webp"}),(0,i.jsx)("img",{className:"_qDfMSZFh0Sj5QB2_372",src:e,loading:"lazy",alt:s})]}),(0,i.jsxs)("div",Object.assign({className:"jmVam4uDiwDe9X0kov9s"},{children:[(0,i.jsx)("div",{className:"bESWa5xgNgk178EbWGcc"}),(0,i.jsx)("h4",Object.assign({className:"x8ChTAzHTz86NM8umGRm"},{children:s}))]}))]})))),w=({status:e,gifList:s,loadMore:t})=>(0,i.jsxs)("section",Object.assign({className:"de2qwsei5MNiz7eV4rNm"},{children:[(0,i.jsx)(x,{status:e}),(e===p||e===g)&&(0,i.jsx)("div",Object.assign({className:"Sk1D0Qs59YRDsSi_PLe_"},{children:s.map((e=>(0,i.jsx)(b,{gifUrl:e.gifUrl,title:e.title,webpUrl:e.webpUrl},e.id)))})),e===p&&(0,i.jsx)("button",Object.assign({className:"qrKiKyOk1oFYBTmViAam",onClick:t},{children:"load more"}))]}));var v=t(7166),N=t.n(v);const U=[{name:"Pola Lucas",profileUrl:"https://giphy.com/polalucas",profileImageUrl:"https://media4.giphy.com/media/gwWAA4PYJLTtyOHkUD/giphy.gif"},{name:"Yizr",profileUrl:"https://giphy.com/yizr",profileImageUrl:"https://media.giphy.com/avatars/yizr/llqaOJQnpDWZ/200h.gif"},{name:"YUNGSUNG",profileUrl:"https://giphy.com/yungsung",profileImageUrl:"https://media0.giphy.com/media/lgnOH6bhb1QpUm2k6w/giphy.gif"},{name:"Kev Lavery",profileUrl:"https://giphy.com/kevlavery",profileImageUrl:"https://media1.giphy.com/media/ZPLluhRJiGwSttn7i2/giphy.gif"},{name:"Lorna Mills",profileUrl:"https://giphy.com/lornamills",profileImageUrl:"https://media1.giphy.com/media/l0Iyn1gGtCPa3x41a/200.gif"}],O=({artist:e})=>{const{name:s,profileUrl:t,profileImageUrl:n}=e;return(0,i.jsxs)("li",Object.assign({className:"WS5RuQ_x18SikZHTRyke"},{children:[(0,i.jsx)("img",{className:"XNLKxvyVOVu8lOJJSdAt",src:n,loading:"lazy",alt:e.name}),(0,i.jsx)("p",{children:(0,i.jsx)("a",Object.assign({className:"mdtZcvbaOpN76XOUKbzG",href:t},{children:s}))})]}))},k=({artists:e})=>(0,i.jsx)("ul",{children:e.map(((e,s)=>(0,i.jsx)(O,{artist:e},s)))}),L=e=>{const s=(0,n.useMemo)((()=>(e=>new IntersectionObserver((s=>{s.forEach((({isIntersecting:s})=>{s&&e()}))})))(e)),[]);return(0,n.useCallback)((e=>{e&&s.observe(e)}),[])},S=()=>{const[e,s]=(0,n.useState)(!1),[t,a]=(0,n.useState)(U),r=L((()=>{a((e=>e.length>500?e:[...e,...U]))}));return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("button",Object.assign({type:"button",className:"jQBPp9XzUlR0s47cyMvy",onClick:()=>s(!0)},{children:(0,i.jsx)(y.US6,{color:"white",size:"24px"})})),(0,i.jsxs)("section",Object.assign({className:N()("bI_mJt1zrVbU9rgQ8O9a",{_xMBJVElyMLYg2be4I3S:e})},{children:[(0,i.jsxs)("div",Object.assign({className:"p259JqbBpFGYE_NkFPXj"},{children:[(0,i.jsx)("h4",{children:"What's all this? "}),(0,i.jsx)("button",Object.assign({type:"button",onClick:()=>s(!1)},{children:(0,i.jsx)(y.oHP,{size:"24px"})}))]})),(0,i.jsxs)("div",Object.assign({className:"_4uL_W0scH3KiWMUSa8z"},{children:[(0,i.jsx)("img",{loading:"lazy",src:"https://media0.giphy.com/media/3oKIPdiPGxPI7Dze7u/giphy.gif?cid=ecf05e475f5bct6ci09g3pgn43nf6bausx33fj7f96f6ig92&rid=giphy.gif&ct=g",width:"288px",height:"162px",alt:"GIPHY"}),(0,i.jsx)("p",{children:"'memegle' is powered by GIPHY, the top source for the best & newest GIFs & Animated Stickers online. You can find any gif uploaded on GIPHY here."}),(0,i.jsx)("br",{}),(0,i.jsx)("img",{loading:"lazy",src:"https://giphy.com/static/img/artistdirectory_1040.gif",width:"288px",height:"42px",alt:"artistwork"}),(0,i.jsxs)("p",{children:["If you want more, you are always welcome to contribute as an artist. Please refer to the guideline ",(0,i.jsx)("a",Object.assign({href:"https://support.giphy.com/hc/en-us/articles/360019977552-How-to-Upload"},{children:"here"}))," and upload your work!"]}),(0,i.jsx)("br",{}),(0,i.jsx)("p",{children:"Here are some artists you can refer to."}),(0,i.jsx)("br",{}),(0,i.jsx)("section",{children:(0,i.jsx)(k,{artists:t})}),(0,i.jsx)("div",{className:"_ab4giRhKyTUrGVp3jqM",ref:r})]}))]}))]})},_=()=>{const{status:e,searchKeyword:s,gifList:t,searchByKeyword:a,updateSearchKeyword:r,loadMore:c}=(()=>{const[e,s]=(0,n.useState)(g),[t,i]=(0,n.useState)(0),[a,r]=(0,n.useState)([]),[c,o]=(0,n.useState)("");return(0,n.useEffect)((()=>(d(void 0,void 0,void 0,(function*(){if(e===g){const e=yield h.getTrending();r(e)}})),()=>s(u))),[]),{status:e,searchKeyword:c,gifList:a,searchByKeyword:()=>d(void 0,void 0,void 0,(function*(){s(u),i(0);const e=yield h.searchByKeyword(c,0);0!==e.length?(r(e),s(p)):s(m)})),updateSearchKeyword:e=>{o(e.target.value)},loadMore:()=>d(void 0,void 0,void 0,(function*(){const e=t+1,s=yield h.searchByKeyword(c,e);r([...a,...s]),i(e)}))}})();return(0,i.jsxs)("div",Object.assign({className:"OXPtcxG6dhJUUZLVn9IN"},{children:[(0,i.jsx)(j,{searchKeyword:s,onEnter:e=>{"Enter"===e.key&&a()},onChange:r,onSearch:a}),(0,i.jsx)(w,{status:e,gifList:t,loadMore:c}),(0,i.jsx)(S,{})]}))}},4654:()=>{}}]);
//# sourceMappingURL=Search.ed546b206a5d2ddad66d.chunk.bundle.js.map