(this["webpackJsonpcovid-19-statistics"]=this["webpackJsonpcovid-19-statistics"]||[]).push([[0],{14:function(e,n,t){e.exports={history:"History_history__CBe-k",number:"History_number__30zhf"}},15:function(e,n,t){e.exports={container:"GlobalInformations_container__2NLOZ",number:"GlobalInformations_number__HeDz6"}},18:function(e,n,t){e.exports={listing:"CountryItem_listing__1ZNV9",number:"CountryItem_number__2zocP"}},27:function(e,n,t){e.exports={bigContainer:"Detail_bigContainer__2SaSu",container:"Detail_container__2hAnP"}},30:function(e,n,t){e.exports={list:"List_list__2G_ZP"}},31:function(e,n,t){e.exports={navbar:"Navbar_navbar__1HfJ-"}},36:function(e,n,t){},4:function(e,n,t){e.exports={container:"GeneralDetail_container__1R7kA",information:"GeneralDetail_information__3xwpH",number:"GeneralDetail_number__3EOtw",danger:"GeneralDetail_danger__1kSAX",safe:"GeneralDetail_safe__2JmnY"}},44:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t(19),c=t.n(s),r=(t(36),t(17)),i=t(12),l="CREATE_FILTER",o="CREATE_CASE",u="CREATE_HISTORY_DEATHS",d="CREATE_HISTORY_CONFIRMED",j=function(e){return{type:o,payload:e}},m={continent:"All",maxCases:-1,minCases:0,maxDeaths:-1,minDeaths:0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case l:return n.payload;default:return e}},b=t(13),p=t.n(b),x=t(21),f={},O=function(){var e=Object(x.a)(p.a.mark((function e(n){var t,a,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=4,fetch("https://covid-api.mmediagroup.fr/v1/cases",t);case 4:return a=e.sent,e.next=7,a.json();case 7:s=e.sent,n(s),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),n(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(n){return e.apply(this,arguments)}}(),v=t(11),_=t(3),y=t(18),C=t.n(y),N=t(0);var D=function(e){var n=e.country,t=e.name;return Object(N.jsxs)("div",{className:C.a.listing,children:[Object(N.jsx)("p",{children:Object(N.jsx)(v.b,{to:{pathname:"/country",state:{country:t}},children:t})}),Object(N.jsxs)("p",{children:["Confirmed cases:"," ",Object(N.jsx)("span",{className:C.a.number,children:n.confirmed})]}),Object(N.jsxs)("p",{children:["Deaths:"," ",Object(N.jsx)("span",{className:C.a.number,children:n.deaths})]}),Object(N.jsxs)("p",{children:["Recovery:"," ",Object(N.jsx)("span",{className:C.a.number,children:n.recovered})]})]})},g=t(9),E=t.n(g),A=["All","Africa","Asia","North America","South America","Oceania","Europe"],w=function(e){var n=e.clickHandle,t=e.filter,a=function(e){var a=t.continent,s=t.maxCases,c=t.minCases,r=t.maxDeaths,i=t.minDeaths,l=e.target.value;switch(e.target.id){case"min-Cases":c=parseInt(l,10);break;case"max-Cases":s=parseInt(l,10);break;case"min-Deaths":i=parseInt(l,10);break;case"max-Deaths":r=parseInt(l,10);break;default:a=l}n({continent:a,maxCases:s,minCases:c,maxDeaths:r,minDeaths:i})};return Object(N.jsxs)("form",{className:E.a.filterForm,children:[Object(N.jsxs)("label",{htmlFor:"continent",children:["Continent:",Object(N.jsx)("select",{id:"continent",name:"continent",value:t.continent,onChange:a,children:A.map((function(e){return Object(N.jsx)("option",{value:e,children:e},e)}))})]}),Object(N.jsxs)("div",{className:E.a.infoType,children:[Object(N.jsxs)("label",{htmlFor:"min-Cases",children:[Object(N.jsx)("span",{className:E.a.input_label,children:"Minimun number of cases:"}),Object(N.jsx)("input",{type:"number",id:"min-Cases",name:"min-Cases",value:t.minCases,onChange:a})]}),Object(N.jsxs)("label",{htmlFor:"max-Cases",children:[Object(N.jsx)("span",{className:E.a.input_label,children:"Maximun number of cases:"}),Object(N.jsx)("input",{type:"number",id:"max-Cases",name:"max-Cases",value:t.maxCases,onChange:a})]})]}),Object(N.jsxs)("div",{className:E.a.infoType,children:[Object(N.jsxs)("label",{htmlFor:"min-Deaths",children:[Object(N.jsx)("span",{className:E.a.input_label,children:"Minimun number of deaths:"}),Object(N.jsx)("input",{type:"number",id:"min-Deaths",name:"min-Deaths",value:t.minDeaths,onChange:a})]}),Object(N.jsxs)("label",{htmlFor:"max-Deaths",children:[Object(N.jsx)("span",{className:E.a.input_label,children:"Maximun number of deaths:"}),Object(N.jsx)("input",{type:"number",id:"max-Deaths",name:"max-Deaths",value:t.maxDeaths,onChange:a})]})]})]})},k=t(15),T=t.n(k),F=function(e){var n=e.world;return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:T.a.container,children:[Object(N.jsxs)("div",{children:["Population in the world:"," ",Object(N.jsx)("span",{className:T.a.number,children:n.population})]}),Object(N.jsxs)("div",{children:["Confirmed cases in the world:"," ",Object(N.jsx)("span",{className:T.a.number,children:n.confirmed})]}),Object(N.jsxs)("div",{children:["Deaths in the world:"," ",Object(N.jsx)("span",{className:T.a.number,children:n.deaths})]}),Object(N.jsxs)("div",{children:["Total of recovered Persons in the world:"," ",Object(N.jsx)("span",{className:T.a.number,children:n.recovered})]})]})})},H=t(30),I=t.n(H),R={createFilter:function(e){return function(e){return{type:l,payload:e}}(e)},createCase:j},G=Object(i.b)((function(e){return{filter:e.filter,cases:e.cases}}),R)((function(e){var n=e.filter,t=e.cases,s=e.createFilter,c=e.createCase,r=Object.keys(t);Object(a.useEffect)((function(){null===r&&O(c)}),[]);var i=null!==(r=(r=Object.entries(t).filter((function(e){var t=e[1].All;return(t.continent===n.continent||"All"===n.continent)&&(n.maxCases<0||t.confirmed<=n.maxCases)&&(0===n.minCases||t.confirmed>=n.minCases)&&(n.maxDeaths<0||t.deaths<=n.maxDeaths)&&(0===n.minDeaths||t.deaths>=n.minDeaths)})).map((function(e){return e[0]}))).length>0?r.filter((function(e){return"Global"!==e})).map((function(e){return Object(N.jsx)(D,{country:t[e].All,name:e},e)})):null)?Object(N.jsx)(F,{world:t.Global.All}):null;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(w,{filter:n,clickHandle:function(e){s(e)}}),i,Object(N.jsx)("div",{className:I.a.list,children:r})]})})),S=t(4),P=t.n(S),L=function(e){var n=e.country;return Object(N.jsxs)("div",{className:P.a.container,children:[Object(N.jsxs)("div",{className:P.a.information,children:["The capital:"," ",Object(N.jsx)("span",{className:P.a.number,children:n.capital_city})]}),Object(N.jsxs)("div",{className:P.a.information,children:["Population:"," ",Object(N.jsx)("span",{className:P.a.number,children:n.population})]}),Object(N.jsxs)("div",{className:P.a.information,children:["confirmed:"," ",Object(N.jsx)("span",{className:"".concat(P.a.number," ").concat(P.a.danger),children:n.confirmed})," ","confirmed case"]}),Object(N.jsxs)("div",{className:P.a.information,children:[Object(N.jsx)("span",{className:"".concat(P.a.number," ").concat(P.a.danger),children:n.deaths})," ","deaths"]}),Object(N.jsxs)("div",{className:P.a.information,children:[Object(N.jsx)("span",{className:"".concat(P.a.number," ").concat(P.a.safe),children:n.recovered})," ","recovered persons"]})]})},X=t(14),J=t.n(X),M=function(e){var n=e.country.dates,t=Object.keys(n).splice(0,30).map((function(e){return Object(N.jsxs)("li",{children:[e,":"," ",Object(N.jsx)("span",{className:J.a.number,children:n[e]})," "]},e)}));return Object(N.jsxs)("div",{className:J.a.history,children:[Object(N.jsx)("h2",{children:"Deaths in the last 30 days"}),Object(N.jsx)("ul",{children:t})]})},V=function(e){var n=e.country.dates,t=Object.keys(n).splice(0,30).map((function(e){return Object(N.jsxs)("li",{children:[e,":"," ",Object(N.jsx)("span",{className:J.a.number,children:n[e]})," "]},e)}));return Object(N.jsxs)("div",{className:J.a.history,children:[Object(N.jsx)("h2",{children:"Confirmed cases in the last 30 days"}),Object(N.jsx)("ul",{children:t})]})},Y=t(27),z=t.n(Y),U=function(){var e=Object(x.a)(p.a.mark((function e(n,t,a){var s,c,r,i,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,s={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}},e.next=4,fetch("https://covid-api.mmediagroup.fr/v1/history?country=".concat(n,"&status=deaths"),s);case 4:return c=e.sent,e.next=7,c.json();case 7:return r=e.sent,e.next=10,fetch("https://covid-api.mmediagroup.fr/v1/history?country=".concat(n,"&status=confirmed"),s);case 10:return i=e.sent,e.next=13,i.json();case 13:l=e.sent,t(l),a(r),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(0),t(e.t0),a(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(n,t,a){return e.apply(this,arguments)}}(),Z={createHistoryConfirmed:function(e){return{type:d,payload:e}},createHistoryDeaths:function(e){return{type:u,payload:e}},createCase:j},B=Object(i.b)((function(e){return{data:e.cases,deaths:e.deathsHistory,confirmed:e.confirmedHistory}}),Z)((function(e){var n=e.location,t=e.data,s=e.createHistoryConfirmed,c=e.createHistoryDeaths,r=e.deaths,i=e.confirmed,l=e.createCase,o=n.state.country;if(Object(a.useEffect)((function(){0!==Object.keys(r).length&&r.All.country===o||(U(o,s,c),0===Object.keys(t).length&&O(l))}),[]),0===Object.keys(t).length)return Object(N.jsx)("p",{children:"Please wait"});var u=t[o].All,d=null,j=null;return 0===Object.keys(r).length||r.All.country!==o?d=null:(d=Object(N.jsx)(M,{country:r.All}),j=Object(N.jsx)(V,{country:i.All})),Object(N.jsxs)("div",{className:z.a.bigContainer,children:[Object(N.jsx)(L,{country:u}),Object(N.jsxs)("div",{className:z.a.container,children:[d,j]})]})})),W=t(31),q=t.n(W),K=function(){return Object(N.jsxs)("div",{className:q.a.navbar,children:[Object(N.jsx)(v.b,{to:"/",children:"Home"}),Object(N.jsx)("h1",{children:"COVID-19 AROUND THE WORLD"}),Object(N.jsx)("span",{children:"Get the last numbers of cases, deaths, and  recovering"})]})},Q=function(){return Object(N.jsxs)(v.a,{children:[Object(N.jsx)(K,{}),Object(N.jsxs)(_.c,{children:[Object(N.jsx)(_.a,{exact:!0,path:"/",component:G}),Object(N.jsx)(_.a,{path:"/country",component:B})]})]})},$=Object(r.b)({cases:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case o:return n.payload;default:return e}},filter:h,deathsHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u:return n.payload;default:return e}},confirmedHistory:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case d:return n.payload;default:return e}}}),ee=Object(r.c)($,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());c.a.render(Object(N.jsx)(i.a,{store:ee,children:Object(N.jsx)(Q,{})}),document.getElementById("root"))},9:function(e,n,t){e.exports={filterForm:"FilterForm_filterForm__kbdY0",infoType:"FilterForm_infoType__3ixbc",input_label:"FilterForm_input_label__Jl9Xt"}}},[[44,1,2]]]);
//# sourceMappingURL=main.b06766f6.chunk.js.map