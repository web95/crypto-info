(this.webpackJsonpbitcoin=this.webpackJsonpbitcoin||[]).push([[0],{46:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(32),s=a.n(r),i=a(12),o=a.n(i),d=a(15),l=a(4),b=a(5),u=a(7),m=a(6),h=a(0),j=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={label:""},e.onLabelChange=function(t){e.setState({label:t.target.value.toLocaleUpperCase()})},e.onSubmit=function(t){t.preventDefault(),e.props.onItemAdded(e.state.label),e.setState({label:""})},e}return Object(b.a)(a,[{key:"render",value:function(){return Object(h.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(h.jsx)("div",{className:"flex",children:Object(h.jsxs)("div",{className:"max-w-xs",children:[Object(h.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"\u0422\u0438\u043a\u0435\u0440"}),Object(h.jsx)("div",{className:"mt-1 relative rounded-md shadow-md",children:Object(h.jsx)("input",{type:"text",name:"wallet",id:"wallet",className:"block w-full pr-10 border-gray-300 text-gray-900 focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm rounded-md",onChange:this.onLabelChange,placeholder:"\u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 DOGE",value:this.state.label})})]})}),Object(h.jsxs)("button",{type:"",className:"my-4 inline-flex items-center py-2 px-4 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-full text-white bg-gray-600 hover:bg-gray-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500",children:[Object(h.jsx)("svg",{class:"-ml-0.5 mr-2 h-6 w-6",xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 24 24",fill:"#ffffff",children:Object(h.jsx)("path",{d:"M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"})}),"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"]})]})}}]),a}(c.Component),p=function(){for(var e=document.getElementsByTagName("section"),t=document.getElementsByTagName("button"),a=function(a){t[a+1].addEventListener("click",(function(){e[a].style.display="none"})),e[a].addEventListener("click",(function(){for(var t=0;t<e.length;t++)e[t].style.border="";e[a].style.border="3px solid #44337a"}))},c=0;c<e.length;c++)a(c)},x=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){p()}},{key:"render",value:function(){var e=this.props.data;return Object(h.jsx)("section",{className:"visable-section",children:Object(h.jsxs)("div",{className:"sec-box bg-white overflow-hidden shadow rounded-lg border-purple-800 border-solid cursor-pointer",children:[Object(h.jsxs)("div",{className:"px-4 py-5 sm:p-6 text-center",children:[Object(h.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"BTC - USD"}),Object(h.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:e})]}),Object(h.jsx)("div",{className:"w-full border-t border-gray-200"}),Object(h.jsxs)("button",{className:"rm-box flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none",children:[Object(h.jsx)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})})}}]),a}(n.a.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){p()}},{key:"render",value:function(){var e=this.props.data;return Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"sec-box2 bg-white overflow-hidden shadow rounded-lg border-solid border-4 cursor-pointer",children:[Object(h.jsxs)("div",{className:"px-4 py-5 sm:p-6 text-center",children:[Object(h.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"ETH - USD"}),Object(h.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:e})]}),Object(h.jsx)("div",{className:"w-full border-t border-gray-200"}),Object(h.jsxs)("button",{className:"rm-box2 flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none",children:[Object(h.jsx)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})})}}]),a}(n.a.Component),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){p()}},{key:"render",value:function(){var e=this.props.data;return Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"sec-box3 bg-white overflow-hidden shadow rounded-lg border-solid cursor-pointer",children:[Object(h.jsxs)("div",{className:"px-4 py-5 sm:p-6 text-center",children:[Object(h.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"BCH - USD"}),Object(h.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:e})]}),Object(h.jsx)("div",{className:"w-full border-t border-gray-200"}),Object(h.jsxs)("button",{className:"rm-box3 flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none",children:[Object(h.jsx)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})})}}]),a}(n.a.Component),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(b.a)(a,[{key:"componentDidMount",value:function(){p()}},{key:"render",value:function(){var e=this.props.data;return Object(h.jsx)("section",{children:Object(h.jsxs)("div",{className:"sec-box4 bg-white overflow-hidden shadow rounded-lg border-solid cursor-pointer",children:[Object(h.jsxs)("div",{className:"px-4 py-5 sm:p-6 text-center",children:[Object(h.jsx)("dt",{className:"text-sm font-medium text-gray-500 truncate",children:"DOGE - USD"}),Object(h.jsx)("dd",{className:"mt-1 text-3xl font-semibold text-gray-900",children:e})]}),Object(h.jsx)("div",{className:"w-full border-t border-gray-200"}),Object(h.jsxs)("button",{className:"rm-box4 flex items-center justify-center font-medium w-full bg-gray-100 px-4 py-4 sm:px-6 text-md text-gray-500 hover:text-gray-600 hover:bg-gray-200 hover:opacity-20 transition-all focus:outline-none",children:[Object(h.jsx)("svg",{class:"h-5 w-5",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"#718096","aria-hidden":"true",children:Object(h.jsx)("path",{"fill-rule":"evenodd",d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z","clip-rule":"evenodd"})}),"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"]})]})})}}]),a}(n.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={btc:"",eth:"",bch:"",doge:""},e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){for(var e=document.getElementsByTagName("section"),t=document.getElementsByTagName("button"),a=function(a){t[a+1].addEventListener("click",(function(){e[a].style.display="none"})),e[a].addEventListener("click",(function(){for(var t=0;t<e.length;t++)e[t].classList.remove="border-purple-800";e[a].classList.add="border-purple-800"}))},c=0;c<e.length;c++)a(c)}},{key:"render",value:function(){var e=this.props,t=e.dataBtc,a=e.dataEth,c=e.dataBch,n=e.dataDoge,r=document.getElementsByTagName("section");return"BTC"===t.name&&(this.btc=t.price,r[0].style.display="block",r[0].style.border="3px solid #44337a"),"ETH"===a.name&&(this.eth=a.price,r[1].style.display="block"),"BCH"===c.name&&(this.bch=c.price,r[2].style.display="block"),"DOGE"===n.name&&(this.doge=n.price,r[3].style.display="block"),Object(h.jsxs)("dl",{className:"mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3",children:[Object(h.jsx)(x,{data:this.btc}),Object(h.jsx)(f,{data:this.eth}),Object(h.jsx)(v,{data:this.bch}),Object(h.jsx)(g,{data:this.doge})]})}}]),a}(n.a.Component),O=function(){return Object(h.jsxs)("div",{className:"relative",children:[Object(h.jsx)("h3",{className:"text-lg leading-6 font-medium text-gray-900 my-8",children:"VUE - USD"}),Object(h.jsxs)("div",{className:"flex items-end border-gray-600 border-b border-l h-64",children:[Object(h.jsx)("div",{className:"bg-purple-800 border w-10 h-24"}),Object(h.jsx)("div",{className:"bg-purple-800 border w-10 h-32"}),Object(h.jsx)("div",{className:"bg-purple-800 border w-10 h-48"}),Object(h.jsx)("div",{className:"bg-purple-800 border w-10 h-16"})]})]})},w=a(34),k=function(){var e=Object(c.useState)([]),t=Object(w.a)(e,2),a=t[0],n=t[1];return Object(c.useEffect)((function(){fetch("/testApi").then((function(e){if(e.ok)return e.text()})).then((function(e){return n(e)}))})),Object(h.jsx)("div",{children:Object(h.jsxs)("div",{className:"valcur",children:["\u0414\u043e\u043b\u043b\u0430\u0440 \u0421\u0428\u0410 $: ",a]})})},N=a(14),B=function(){return Object(h.jsx)("nav",{children:Object(h.jsxs)("div",{class:"nav-wrapper",children:[Object(h.jsx)("a",{href:"",class:"brand-logo",children:"Bitcoin-Info"}),Object(h.jsxs)("ul",{id:"nav-mobile",class:"right hide-on-med-and-down",children:[Object(h.jsx)("li",{children:Object(h.jsx)(N.b,{to:"/",children:"\u0412\u0430\u043b\u044e\u0442\u0430"})}),Object(h.jsx)("li",{children:Object(h.jsx)(N.b,{to:"/",children:"\u041a\u0443\u0440\u0441"})}),Object(h.jsx)("li",{children:Object(h.jsx)(N.b,{to:"/source",children:"\u0418\u0441\u0442\u043e\u0447\u043d\u0438\u043a"})})]})]})})},T=(a(45),a(46),a(17)),D=a.n(T),E=a(2),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var c=arguments.length,n=new Array(c),r=0;r<c;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={apiResponce:"",dataBtc:[],dataEth:[],dataBch:[],dataDoge:[]},e.newTickerBtc={name:"",price:""},e.newTickerEth={name:"",price:""},e.newTickerBch={name:"",price:""},e.newTickerDoge={name:"",price:""},e.addItem=function(){var t=Object(d.a)(o.a.mark((function t(a){var c,n,r,s;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.newTickerBtc.name=a||"BTC","BTC"!==a&&"BTC"!==e.newTickerBtc.name||(c="https://min-api.cryptocompare.com/data/price?fsym=".concat(e.newTickerBtc.name,"&tsyms=USD&api_key=0816c2723876b3928aa5bbb260dbb3ed7a35e34bf2facc22d938d27ec1ee8c8e"),setInterval(Object(d.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get(c);case 2:a=t.sent,n=a.data,e.newTickerBtc.price=n.USD,e.setState({dataBtc:e.newTickerBtc});case 6:case"end":return t.stop()}}),t)}))),1e3)),"ETH"===a&&(e.newTickerEth.name=a||"",n="https://min-api.cryptocompare.com/data/price?fsym=".concat(e.newTickerEth.name,"&tsyms=USD&api_key=0816c2723876b3928aa5bbb260dbb3ed7a35e34bf2facc22d938d27ec1ee8c8e"),setInterval(Object(d.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get(n);case 2:a=t.sent,c=a.data,e.newTickerEth.price=c.USD,e.setState({dataEth:e.newTickerEth});case 6:case"end":return t.stop()}}),t)}))),1e3)),"BCH"===a&&(e.newTickerBch.name=a||"",r="https://min-api.cryptocompare.com/data/price?fsym=".concat(e.newTickerBch.name,"&tsyms=USD&api_key=0816c2723876b3928aa5bbb260dbb3ed7a35e34bf2facc22d938d27ec1ee8c8e"),setInterval(Object(d.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get(r);case 2:a=t.sent,c=a.data,e.newTickerBch.price=c.USD,e.setState({dataBch:e.newTickerBch});case 6:case"end":return t.stop()}}),t)}))),1e3)),"DOGE"===a&&(e.newTickerDoge.name=a||"",s="https://min-api.cryptocompare.com/data/price?fsym=".concat(e.newTickerDoge.name,"&tsyms=USD&api_key=0816c2723876b3928aa5bbb260dbb3ed7a35e34bf2facc22d938d27ec1ee8c8e"),setInterval(Object(d.a)(o.a.mark((function t(){var a,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get(s);case 2:a=t.sent,c=a.data,e.newTickerDoge.price=c.USD,e.setState({dataDoge:e.newTickerDoge});case 6:case"end":return t.stop()}}),t)}))),1e3));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(b.a)(a,[{key:"componentDidMount",value:function(){this.addItem(),p()}},{key:"render",value:function(){var e=this.state,t=e.dataBtc,a=e.dataEth,c=e.dataBch,n=e.dataDoge;return Object(h.jsx)("div",{className:"container mx-auto flex flex-col items-center bg-gray-100 p-4",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsxs)(N.a,{children:[Object(h.jsx)(B,{}),Object(h.jsx)(E.a,{path:"/source",component:function(){return window.location.href="https://www.cryptocompare.com/",null}})]}),Object(h.jsx)("div",{className:"w-full my-4"}),Object(h.jsx)(j,{onItemAdded:this.addItem}),Object(h.jsx)("hr",{className:"w-full border-t border-gray-600 my-4"}),Object(h.jsx)(y,{dataBtc:t,dataEth:a,dataBch:c,dataDoge:n,addItem:this.addItem}),Object(h.jsx)("hr",{className:"w-full border-t border-gray-600 my-4"}),Object(h.jsx)(k,{}),Object(h.jsx)(O,{})]})})}}]),a}(n.a.Component),C=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,66)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(S,{})}),document.getElementById("root")),C()}},[[65,1,2]]]);
//# sourceMappingURL=main.586202c7.chunk.js.map