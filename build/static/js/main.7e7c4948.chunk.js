(this.webpackJsonpanimeworldz=this.webpackJsonpanimeworldz||[]).push([[0],{236:function(e,t,c){},242:function(e,t,c){},429:function(e,t,c){},430:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),s=c(54),i=c.n(s),r=(c(236),c(11)),j=c(43),o=c(14),l=c(16),b=c(102),u=c(3);var d=function(e){var t=e.Component,c=Object(b.a)(e,["Component"]);return Object(u.jsx)(o.a,Object(l.a)(Object(l.a)({},c),{},{render:function(e){return Object(u.jsx)(t,Object(l.a)({},e))}}))},O=c(437),h=c(439),x=c(30),m=(c(242),a.a.createContext()),p=a.a.createContext(),f=a.a.createContext(),v=m,g=c(433),y=c(445),S=c(442),C=c(21),w=c.n(C),k=c(212),I=c.n(k),N={width:300,marginBottom:10};var P=function(e){var t=Object(n.useContext)(p),c=t.keyword,a=t.setKeyword,s=Object(n.useState)(),i=Object(r.a)(s,2),j=i[0],o=i[1],l=Object(n.useState)(!1),b=Object(r.a)(l,2),d=b[0],O=b[1],h=Object(n.useContext)(v).setAnimeContext;Object(n.useEffect)((function(){var e=setTimeout((function(){return m()}),1e3);return function(){return clearTimeout(e)}}),[c]);var m=function(){c&&w.a.get("/api/v1/anime/".concat(c),{onDownloadProgress:O(!0)}).then((function(e){o(e.data),O(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsx)("div",{children:Object(u.jsxs)(g.a,{style:N,children:[Object(u.jsx)(g.a.Addon,{children:d?Object(u.jsx)(y.a,{}):""}),Object(u.jsx)(S.a,{data:j?j.map((function(e){return e.title})):"",onChange:function(e){a(e)},onSelect:function(t){var c=I.a.find(j,(function(e){return e.title==t.value}));h({name:c.title,url:c.link}),e.history.push("/anime/".concat(c.title.replace(/\s/g,"-")))},filterBy:function(e,t){return t}}),Object(u.jsx)(g.a.Addon,{children:Object(u.jsx)(x.a,{icon:"search"})})]})})},E=c(446),F=c(447),R=c(448),A=c(436),z=c(449),D=c(441),K=c(450),J=c(451),L=c(61),T=c(97);function q(e){var t=Object.assign({},e),c=E.a.Types.StringType,n=E.a.Model({email:c().isEmail("Please enter a valid email address.").isRequired("This field is required."),password:c().isRequired("This field is required.")});return Object(u.jsx)(F.a,Object(l.a)(Object(l.a)({style:{backgroundColor:"lightgray"}},t),{},{children:Object(u.jsxs)(R.a,{model:n,children:[Object(u.jsxs)(A.a,{children:[Object(u.jsx)(z.a,{children:Object(u.jsx)("b",{children:"Email: "})}),Object(u.jsx)(D.a,{name:"email",type:"email"}),Object(u.jsx)(K.a,{tooltip:!0,children:"Required"})]}),Object(u.jsxs)(A.a,{children:[Object(u.jsx)(z.a,{children:Object(u.jsx)("b",{children:"Password: "})}),Object(u.jsx)(D.a,{name:"password",type:"password"})]}),Object(u.jsx)(A.a,{children:Object(u.jsxs)(J.a,{children:[Object(u.jsx)(L.a,{appearance:"primary",type:"submit",children:"Sign in"}),Object(u.jsx)(L.a,{appearance:"subtle",children:"Signup"})]})})]})}))}var B=function(){return Object(u.jsx)(T.a,{trigger:"click",placement:"bottom",speaker:Object(u.jsx)(q,{}),children:Object(u.jsx)(L.a,{appearance:"ghost",children:"Login"})})};var W=function(e){var t=e.onSelect,c=e.activeKey,n=Object(b.a)(e,["onSelect","activeKey"]);return Object(u.jsxs)(O.a,Object(l.a)(Object(l.a)({appearance:"sublte"},n),{},{children:[Object(u.jsx)(O.a.Header,{children:Object(u.jsx)("span",{className:"navbar-brand logo",children:"A N I M E W O R L D Z"})}),Object(u.jsxs)(O.a.Body,{className:"body-nav",children:[Object(u.jsxs)(h.a,{onSelect:t,activeKey:c,children:[Object(u.jsx)(j.b,{to:"/",children:Object(u.jsx)(h.a.Item,{eventKey:"1",icon:Object(u.jsx)(x.a,{icon:"home"}),children:"Home"})}),Object(u.jsx)(j.b,{to:"/popular",children:Object(u.jsx)(h.a.Item,{eventKey:"2",children:"Popular"})}),Object(u.jsx)(j.b,{to:"/latest",children:Object(u.jsx)(h.a.Item,{eventKey:"3",children:"Latest"})}),Object(u.jsx)(h.a.Item,{eventKey:"4",children:"About"})]}),Object(u.jsx)(h.a,{pullRight:!0,children:Object(u.jsx)(B,{})}),Object(u.jsx)(h.a,{pullRight:!0,children:Object(u.jsx)(P,Object(l.a)({},n))})]})]}))},_=c(452),H=c(438);var M=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(r.a)(i,2),o=j[0],b=j[1],d=Object(n.useState)("waifu"),O=Object(r.a)(d,2),h=O[0],x=O[1];Object(n.useEffect)((function(){m()}),[h]);var m=function(){w.a.post("/api/v1/anime/random/keyword/".concat(h),{},{onDownloadProgress:b(!0)}).then((function(e){s(e.data.files),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"homepage",children:[Object(u.jsx)(W,Object(l.a)({activekey:1},e)),Object(u.jsx)("h4",{children:"Welcome to Anime World-Z"}),Object(u.jsx)("br",{}),Object(u.jsx)(_.a,{autoplay:!0,className:"custom-slider",shape:"bar",style:{width:"100vh",height:"60vh",display:"block",marginLeft:"auto",marginRight:"auto"},children:o?Object(u.jsx)(y.a,{center:!0}):a?a.map((function(e){return Object(u.jsx)("img",{src:e})})):""}),Object(u.jsx)("br",{}),Object(u.jsxs)("div",{children:["Choose Category:",Object(u.jsx)(H.a,{data:[{label:"waifu",value:"waifu"},{label:"neko",value:"neko"},{label:"shinobu",value:"shinobu"},{label:"megumin",value:"megumin"},{label:"pat",value:"pat"},{label:"smug",value:"smug"},{label:"smile",value:"smile"},{label:"nom",value:"nom"},{label:"slap",value:"slap"}],style:{width:224},onSelect:function(e){x(e)}}),Object(u.jsx)("br",{}),Object(u.jsx)("i",{children:"*Choose Pat for Stress Relief"})]})]})},Z=c(227),G=c(99),Q=c(453),U=c(440);var V=function(e){var t=Object(o.f)().name,c=Object(n.useState)(),a=Object(r.a)(c,2),s=a[0],i=a[1],j=Object(n.useContext)(v).animeContext,b=Object(n.useState)(!1),d=Object(r.a)(b,2),O=d[0],h=d[1],x=Object(n.useState)(),m=Object(r.a)(x,2),p=m[0],g=m[1],S=Object(n.useContext)(f).setInfo;Object(n.useEffect)((function(){C()}),[j.url]);var C=function(){""!==j.url?w.a.post("/api/v1/anime",{uri:j.url},{onDownloadProgress:h(!0)}).then((function(e){g(e.data),h(!1)})).catch((function(e){return console.log(e)})):e.history.push("/")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"nav-header",children:Object(u.jsx)(W,Object(l.a)({activekey:s,onSelect:function(e){i(e)}},e))}),Object(u.jsx)("div",{className:"anime-info",children:O?Object(u.jsx)(y.a,{center:!0,size:"md"}):p?Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:p.result.image,width:"250"}),Object(u.jsx)("h3",{children:p.result.name}),Object(u.jsxs)("p",{children:["Language: ",p.result.language]}),Object(u.jsx)("p",{children:p.result.plot_summary}),Object(u.jsxs)("p",{children:["Released: ",p.result["release_date_(jp)"]]}),Object(u.jsxs)("p",{children:["Studio: ",p.result.studio]}),Object(u.jsxs)("p",{children:["Status: ",p.result.status]}),Object(u.jsx)(Q.a,{}),Object(u.jsx)("h4",{children:"Episodes:"}),Object(u.jsx)(U.a,{hover:!0,bordered:!0,children:function(){var c=JSON.parse(localStorage.getItem(t));null===c&&console.log("NO RECORD");var n,a=[],s=Object(Z.a)(p.result.episodes.entries());try{var i=function(){var s=Object(r.a)(n.value,2),i=(s[0],s[1]);a.push(Object(u.jsx)("div",{style:{padding:"2px",display:"inline-block"},children:Object(u.jsxs)(L.a,{appearance:null!==c&&c.includes(parseInt(i.number))?"default":"ghost",style:{padding:"10px"},onClick:function(){return function(c){var n=JSON.parse(localStorage.getItem(t));null===n?localStorage.setItem(t,JSON.stringify([c])):n.includes(c)||localStorage.setItem(t,JSON.stringify([].concat(Object(G.a)(n),[c]))),S(p),e.history.push({pathname:"".concat(e.location.pathname,"/").concat(parseInt(c))})}(parseInt(i.number))},children:["Episode ",i.number]})}))};for(s.s();!(n=s.n()).done;)i()}catch(j){s.e(j)}finally{s.f()}return a}()})]}):""})]})},X=c(229);var Y=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useContext)(v).animeContext,j=Object(o.f)(),b=j.ep,d=j.name,O=Object(n.useState)(),h=Object(r.a)(O,2),m=h[0],p=h[1],g=Object(n.useState)(!1),S=Object(r.a)(g,2),C=S[0],k=S[1],I=Object(n.useContext)(f).info;Object(n.useEffect)((function(){P(),N()}),[i.url,b]);var N=function(){var e=JSON.parse(localStorage.getItem(d));e.includes(parseInt(b))||localStorage.setItem(d,JSON.stringify([].concat(Object(G.a)(e),[parseInt(b)])))},P=function(){i.url?w.a.post("/api/v1/anime/episode",{uri:I.result.episodes[b-1].link},{onDownloadProgress:k(!0)}).then((function(e){p(e.data),k(!1)})).catch((function(e){return console.log(e)})):e.history.push("/")};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"nav-header",children:Object(u.jsx)(W,Object(l.a)({activekey:a,onSelect:function(e){s(e)}},e))}),Object(u.jsx)("div",{className:"watch-episode",children:C?Object(u.jsx)(y.a,{center:!0,size:"md"}):Object(u.jsxs)(u.Fragment,{children:[m?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(Q.a,{}),Object(u.jsxs)("h4",{children:["Watch ",m.name," Episode ",m.currentEpisode]}),Object(u.jsx)(Q.a,{}),Object(u.jsx)("video",{className:"episode-video-player",width:"320",height:"240",controls:!0,src:m.download[0].link}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"arrow-left"}),placement:"left",style:{float:"left"},onClick:function(){e.history.push("/anime/".concat(e.match.params.name,"/").concat(parseInt(b)-1))},disabled:1===parseInt(b),children:"Previous"}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"arrow-right"}),placement:"right",style:{float:"right"},onClick:function(){e.history.push("/anime/".concat(e.match.params.name,"/").concat(parseInt(b)+1))},disabled:parseInt(I.result.episodeCount)===parseInt(b),children:"Next"}),Object(u.jsx)(Q.a,{})]}):Object(u.jsx)(y.a,{center:!0,size:"md"}),Object(u.jsx)(Q.a,{})]})})]})},$=c(443),ee=c(444);var te=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(r.a)(i,2),o=j[0],b=j[1],d=Object(n.useContext)(v).setAnimeContext,O=Object(n.useState)(1),h=Object(r.a)(O,2),m=h[0],p=h[1];Object(n.useEffect)((function(){f()}),[m]);var f=function(){w.a.get("/api/v1/anime/page/".concat(m),{onDownloadProgress:b(!0)}).then((function(e){s(e.data),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"latest",children:[Object(u.jsx)(W,Object(l.a)({activekey:3},e)),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Latest Release"}),Object(u.jsx)($.a,{prev:!0,last:!0,next:!0,first:!0,size:"md",pages:10,activePage:m,onSelect:function(e){p(e)}}),Object(u.jsx)("br",{}),o?Object(u.jsx)(y.a,{center:!0,size:"md"}):a?a.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(ee.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:240},children:[Object(u.jsx)("img",{src:t.img,height:"300"}),Object(u.jsx)(ee.a,{header:t.name,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("small",{children:t.ep}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"play"}),onClick:function(){return c=t.name,void w.a.get("/api/v1/anime/".concat(c)).then((function(t){d({name:t.data[0].title,url:t.data[0].link}),e.history.push("/anime/".concat(t.data[0].title.replace(/\s/g,"-")))})).catch((function(e){return console.log(e)}));var c}})]})})]})})})):""]})]})};var ce=function(e){var t=Object(n.useState)(),c=Object(r.a)(t,2),a=c[0],s=c[1],i=Object(n.useState)(!1),j=Object(r.a)(i,2),o=j[0],b=j[1],d=Object(n.useContext)(v).setAnimeContext,O=Object(n.useState)(1),h=Object(r.a)(O,2),m=h[0],p=h[1];Object(n.useEffect)((function(){f()}),[m]);var f=function(){w.a.get("/api/v1/anime/popular/fetch/".concat(m),{onDownloadProgress:b(!0)}).then((function(e){s(e.data),b(!1)})).catch((function(e){return console.log(e)}))};return Object(u.jsxs)("div",{className:"popular",children:[Object(u.jsx)(W,Object(l.a)({activekey:2},e)),Object(u.jsxs)("div",{children:[Object(u.jsx)("h4",{children:"Popular Anime"}),Object(u.jsx)($.a,{prev:!0,last:!0,next:!0,first:!0,size:"md",pages:10,activePage:m,onSelect:function(e){p(e)}}),Object(u.jsx)("br",{}),o?Object(u.jsx)(y.a,{center:!0,size:"md"}):a?a.map((function(t){return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(ee.a,{shaded:!0,bordered:!0,bodyFill:!0,style:{display:"inline-block",width:240},children:[Object(u.jsx)("img",{src:t.img,height:"300"}),Object(u.jsx)(ee.a,{header:t.name,children:Object(u.jsxs)("p",{children:[Object(u.jsx)("small",{children:t.rel}),Object(u.jsx)(X.a,{icon:Object(u.jsx)(x.a,{icon:"play"}),onClick:function(){return c=t.name,void w.a.get("/api/v1/anime/".concat(c)).then((function(t){d({name:t.data[0].title,url:t.data[0].link}),e.history.push("/anime/".concat(t.data[0].title.replace(/\s/g,"-")))})).catch((function(e){return console.log(e)}));var c}})]})})]})})})):""]})]})};c(428),c(429);var ne=function(){var e=Object(n.useState)({name:"",url:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)(""),i=Object(r.a)(s,2),l=i[0],b=i[1],O=Object(n.useState)(),h=Object(r.a)(O,2),x=h[0],m=h[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(j.a,{children:Object(u.jsx)(o.c,{children:Object(u.jsx)(v.Provider,{value:{animeContext:c,setAnimeContext:a},children:Object(u.jsx)(p.Provider,{value:{keyword:l,setKeyword:b},children:Object(u.jsxs)(f.Provider,{value:{info:x,setInfo:m},children:[Object(u.jsx)(d,{exact:!0,path:"/",component:M}),Object(u.jsx)(d,{exact:!0,path:"/latest",component:te}),Object(u.jsx)(d,{exact:!0,path:"/popular",component:ce}),Object(u.jsx)(d,{exact:!0,path:"/anime/:name",component:V}),Object(u.jsx)(d,{exact:!0,path:"/anime/:name/:ep",component:Y})]})})})})})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,455)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),s(e),i(e)}))};i.a.render(Object(u.jsx)(ne,{}),document.getElementById("root")),ae()}},[[430,1,2]]]);
//# sourceMappingURL=main.7e7c4948.chunk.js.map