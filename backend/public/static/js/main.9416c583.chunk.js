(this["webpackJsonptool-life"]=this["webpackJsonptool-life"]||[]).push([[0],{100:function(e,t,n){e.exports=n(131)},105:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(27),o=n.n(l),c=(n(105),n(6)),u=n(11),s=n(23),i=n(33),m=n(38),d=n(18);function p(){var e=Object(s.a)(['\n  .navbar {\n    background-color: #017179;\n    color: white;\n  }\n  .home {\n    padding: 0;\n  }\n  .navbar-brand {\n    font-size: 5vw;\n    \n    font-family: "Montserrat", sans-serif;\n    font-weight: light;\n    color: white;\n    padding: 0;\n    margin: 0;\n  }\n']);return p=function(){return e},e}var f=d.a.div(p());var E=function(e){return r.a.createElement(f,null,r.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",variant:"dark"},r.a.createElement(i.a.Brand,null,e.onLoad),r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"}),r.a.createElement(m.a,null,r.a.createElement(c.b,null,r.a.createElement(c.c,{className:"nav-link home ",to:"/"},"Home")),r.a.createElement(c.b,null,r.a.createElement(c.c,{className:"nav-link home ",to:"https://my.appliedmedical.com"},"My Applied"))))))},h=n(10),g=n.n(h),b=n(16),v=n(13),j=n(64),y=n(49);function O(){var e=Object(s.a)(["\n  margin-top: 75px;\n  .btn-primary {\n    background-color: #017179;\n    color: white;\n    width: 100%;\n  \n  }\n\n  .btn-xxl {\n\n  }\n\n  .top-buffer {\n    margin-top: 20px;\n  }\n"]);return O=function(){return e},e}var x=d.a.div(O()),w=function(){var e=Object(a.useState)([{name:"-"}]),t=Object(v.a)(e,2),n=t[0],l=t[1],o=function(){var e=Object(b.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3200/products");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a=n.products,l(a);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){o()}),[]),r.a.createElement(x,null,r.a.createElement(j.a,{id:"dropdown-basic-button",title:"Select Product Line","background-color":"#017179"},n.map((function(e){return r.a.createElement(y.a.Item,{name:e.name},r.a.createElement(c.b,null,r.a.createElement(c.c,{to:"/products/"+e.name},e.name)))}))))},k=n(70),T=n(146),N=Object(T.a)((function(){return{d:{fontFamily:"'Thasadith', sans-serif",fontWeight:"100",paddingTop:20}}})),C=function(){var e=N();return r.a.createElement("h1",{className:e.d},"Welcome to the Applied Medical Tool Life Data Tracker. Please select your product line from the drop down button below to get started")},L=n(98),S=n.n(L),R=n(37),_=n(20),F=n(14);function B(){var e=Object(s.a)(["\n  .navbarP {\n    padding: 0;\n  }\n  .buttonP {\n   \n  }\n  .appliedLogo {\n   \n    margin-top: 40px;\n  }\n"]);return B=function(){return e},e}var D=d.a.div(B());var P=function(){return r.a.createElement(c.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(D,null,r.a.createElement(R.a,{fluid:!0},r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{className:"navbarP px-xs-0",md:12,lg:10},r.a.createElement(E,{onLoad:"Tool Life Tracker"}))),r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{lg:5},r.a.createElement(C,null),r.a.createElement(F.a,{xs:12,md:8,lg:6,xl:4},r.a.createElement(w,null))),r.a.createElement(F.a,{className:"d-none d-lg-block",lg:5},r.a.createElement(k.a,{className:"appliedLogo",src:S.a,fluid:!0})))))))},Q=Object(T.a)((function(){return{d:{fontFamily:"'Thasadith', sans-serif",fontWeight:"100",paddingTop:20}}})),I=function(e){var t=Q();return r.a.createElement("h1",{className:t.d},e.onLoad)},q=n(30),z=n(28),H=function(e){var t=Object(a.useState)(!1),n=Object(v.a)(t,2),l=n[0],o=n[1],s=Object(u.e)().pid,i=function(){return o(!1)},m=e.onload,d=(e.passedProduct,Object(a.useState)([{name:"-"}])),p=Object(v.a)(d,2),f=p[0],E=p[1],h=function(){var e=Object(b.a)(g.a.mark((function e(){var t,n,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:3200/products/"+s+"/"+m,e.next=3,fetch(t);case 3:return n=e.sent,console.log(t),e.next=7,n.json();case 7:a=e.sent,E(a.operations.programs),console.log(a.operations.programs),console.log("arse");case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){h()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{variant:"link",onClick:function(){return o(!0)}},m),r.a.createElement(q.a,{show:l,onHide:i,backdrop:"static",keyboard:!1},r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,null,m)),r.a.createElement(q.a.Body,null,r.a.createElement("p",null,"Select the machining operation you will be tracking:"),f.map((function(e){return r.a.createElement(z.a,{variant:"outline-info"},r.a.createElement(c.b,null,r.a.createElement(c.c,{to:"/products/"+s+"/"+m+"/"+e.name},e.name)))}))),r.a.createElement(q.a.Footer,null,r.a.createElement(z.a,{variant:"secondary",onClick:i},"Close"))))};function M(){var e=Object(s.a)(["\n  margin-top: 75px;\n  .btn-primary {\n    background-color: #017179;\n    color: white;\n    width: 100%;\n    font-size: 1.2rem;\n  }\n\n  .btn-xxl {\n    font-size: 1.5rem;\n  }\n\n  .top-buffer {\n    margin-top: 20px;\n  }\n\n  .dropdown-toggle {\n    white-space: pre-wrap;\n  }\n"]);return M=function(){return e},e}var G=d.a.div(M());var W=function(){var e=Object(u.e)().pid;console.log(e);var t=Object(a.useState)([{name:"-"}]),n=Object(v.a)(t,2),l=n[0],o=n[1],c=function(){var t=Object(b.a)(g.a.mark((function t(){var n,a,r;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://fierce-refuge-42726.herokuapp.com/products/"+e);case 2:return n=t.sent,t.next=5,n.json();case 5:return a=t.sent,t.next=8,a.components.map((function(e){return e.components}));case 8:r=t.sent,o(r[0]);case 10:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){c()}),[]),r.a.createElement(G,null,r.a.createElement(j.a,{id:"dropdown-basic-button",title:"Select Component button","background-color":"#017179"},l.map((function(t){return r.a.createElement(y.a.Item,{name:t.name},r.a.createElement(H,{passedProduct:e,onload:t.name}))}))))},A=n(99),J=n.n(A),U=function(){var e=Object(u.e)();return console.log(e.pid),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{fluid:!0},r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{md:10},r.a.createElement(E,{onLoad:e.pid}))),r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{md:10,lg:5},r.a.createElement(I,{onLoad:"When you are a ready to perfrom a tool change, click the drop down menu below and select the tool number that you are changing"}),r.a.createElement(F.a,{lg:8},r.a.createElement(W,null))),r.a.createElement(F.a,{className:"d-none d-lg-block",md:5},r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{lg:8},r.a.createElement(k.a,{src:J.a,fluid:!0})))))))};function Y(){var e=Object(s.a)(['\n  .navbar {\n    background-color: #017179;\n    color: white;\n  }\n  .home {\n    padding: 0;\n  }\n  .navbar-brand {\n    font-size: 4vw;\n    \n    font-family: "Montserrat", sans-serif;\n    font-weight: light;\n    color: white;\n    padding: 0;\n    margin: 0;\n  }\n']);return Y=function(){return e},e}var K=d.a.div(Y());var V=function(e){var t=e.onLoad2;return e.theData,r.a.createElement(K,null,r.a.createElement(i.a,{collapseOnSelect:!0,expand:"lg",variant:"dark"},r.a.createElement(i.a.Brand,null,e.onLoad),r.a.createElement(i.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),r.a.createElement(i.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(m.a,{className:"mr-auto"}),r.a.createElement(m.a,null,r.a.createElement(m.a.Link,null,r.a.createElement(c.b,null,r.a.createElement(c.c,{className:"nav-link home ",to:"/"},"Home"))),r.a.createElement(m.a.Link,{href:"https://my.appliedmedical.com"},"My Applied"),r.a.createElement(m.a.Link,null,r.a.createElement(c.b,null,r.a.createElement(c.c,{className:"nav-link",to:t},"Data")))))))},X=n(58),Z=n(73),$=n(57),ee=n(22),te=(n(114),[{Tool:"No Tool Changes yet",Quantity:"-",Rotated:"-",Reason:"-"}]);var ne=function(e){var t=Object(u.e)(),n=t.pid,l=t.cid,o=t.oid,c=Object(a.useState)(!1),s=Object(v.a)(c,2),i=s[0],m=s[1],d=Object(a.useState)({Tool:"",Quantity:"",Rotated:!1,Reason:""}),p=Object(v.a)(d,2),f=p[0],E=p[1],h=e.getTheData,j=e.refreshLength,y=function(){return m(!1)},O=e.passNameOf,x=(r.a.createRef(),function(e){var t=e.target,n=t.name,a=t.value;console.log(a),E((function(e){return Object($.a)(Object($.a)({},e),{},Object(Z.a)({},n,a))}))}),w=function(){var e=Object(b.a)(g.a.mark((function e(){var t,a;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t="http://localhost:3200/products/"+n+"/"+l+"/"+o+"/data",e.next=4,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tool:te[te.length-1].Tool,quantity:te[te.length-1].Quantity,rotated:te[te.length-1].Rotated,reason:te[te.length-1].Reason})};case 4:return a=e.sent,e.next=7,fetch(t,a);case 7:console.log("i sent"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("Nope");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,r,c,u,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t={method:"GET",headers:{"Content-Type":"application/json"}},a="http://localhost:3200/products/"+n+"/"+l+"/"+o+"/data",e.next=5,fetch(a,t);case 5:return r=e.sent,e.next=8,r.json();case 8:return c=e.sent,console.log("i got a response"),e.next=12,c[0].components.filter((function(e){return e.name===l}));case 12:return u=e.sent,e.next=15,u[0].programs.filter((function(e){return e.name===o}));case 15:return s=e.sent,e.abrupt("return",s);case 19:e.prev=19,e.t0=e.catch(0),console.log("Unable to get data from table");case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(b.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),"-"===te[0].Quantity?(te.push(f),te.shift()):te.push(f),e.next=4,w();case 4:return e.next=6,k();case 6:return e.next=8,k();case 8:n=e.sent,console.log(n),console.log("SLim bean"),h(te),j(te[te.length-1]);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(z.a,{variant:"outline-info",onClick:function(){return m(!0)}},"Change Tool"),r.a.createElement(q.a,{show:i,onHide:y},r.a.createElement(q.a.Header,{closeButton:!0},r.a.createElement(q.a.Title,null,O)),r.a.createElement(q.a.Body,null,r.a.createElement(ee.a,{onSubmit:T},r.a.createElement(ee.a.Group,{controlId:"number"},r.a.createElement(ee.a.Label,null,"Enter quantity:"),r.a.createElement(ee.a.Control,{type:"number",name:"Quantity",onChange:x}),r.a.createElement(ee.a.Text,{className:"text-muted"},"This is the tolal number of components ran since the beginning of your shift.")),r.a.createElement("div",null,r.a.createElement(ee.a.Label,null,"Is this tool being moved to another tool number?")),r.a.createElement("div",{key:"inline-radio",className:"mb-3"},r.a.createElement("fieldset",null,r.a.createElement(ee.a.Check,{onChange:x,name:"Rotated",inline:!0,value:"Yes",label:"Yes",type:"radio",id:"inline-radio-1"}),r.a.createElement(ee.a.Check,{name:"Rotated",onChange:x,inline:!0,value:"No",label:"No",type:"radio",id:"inline-radio-2"}))),r.a.createElement(ee.a.Group,{controlId:"Reason"},r.a.createElement(ee.a.Label,null,"Select the reason for tool change:"),r.a.createElement(ee.a.Control,{onClick:function(){E((function(e){return Object($.a)(Object($.a)({},e),{},{Tool:O})}))},onChange:x,name:"Reason",as:"select",multiple:!0},r.a.createElement("option",null,"Excessive Burr"),r.a.createElement("option",null,"Chatter"),r.a.createElement("option",null,"Tool Breakage"))),r.a.createElement(z.a,{variant:"secondary",onClick:y,type:"submit"},"Close"),r.a.createElement(z.a,{variant:"primary",type:"submit",onClick:function(){y()}},"Save Changes")))))},ae=n(74),re=function(){var e=Object(u.e)(),t=e.pid,n=e.cid,l=e.oid,o=Object(a.useState)([{name:"-"}]),c=Object(v.a)(o,2),s=c[0],i=c[1],m=Object(a.useState)("None"),d=Object(v.a)(m,2),p=(d[0],d[1],function(){var e=Object(b.a)(g.a.mark((function e(){var a,r,o,c,u,s,m;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a={method:"GET",headers:{"Content-Type":"application/json"}},r="http://localhost:3200/products/"+t+"/"+n+"/"+l+"/data",e.next=5,fetch(r,a);case 5:return o=e.sent,e.next=8,o.json();case 8:return c=e.sent,console.log("i got a response"),e.next=12,c[0].components.filter((function(e){return e.name===n}));case 12:return u=e.sent,e.next=15,u[0].programs.filter((function(e){return e.name===l}));case 15:return s=e.sent,e.next=18,s[0].history;case 18:m=e.sent,console.log(m),i(m),e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.log("Unable to get data from table");case 26:case"end":return e.stop()}}),e,null,[[0,23]])})));return function(){return e.apply(this,arguments)}}());return Object(a.useEffect)((function(){p()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(ae.a,{onLoad:p,striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Tool #"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Rotated"),r.a.createElement("th",null,"Reason"))),r.a.createElement("tbody",null,s.map((function(e){return r.a.createElement("tr",null,r.a.createElement("td",null,e.tool),r.a.createElement("td",null,e.quantity),r.a.createElement("td",null,e.rotated),r.a.createElement("td",null,e.reason))})))),r.a.createElement("h1",null,s[0].name))},le=function(e){console.log("I was called upon");return r.a.createElement("div",null,r.a.createElement(R.a,{fluid:!0},r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(F.a,{md:10},r.a.createElement(V,{onLoad:"Data Page"}),r.a.createElement(re,null)))))};function oe(){var e=Object(s.a)(["\n.card-img-top {\n    width: 100%;\n    height: 20vw;\n    object-fit: cover;\n}\n  "]);return oe=function(){return e},e}var ce=function(){var e=Object(u.e)(),t=e.oid+"/data",n=e.pid,l=e.cid,o=e.oid,c=d.a.div(oe()),s=Object(a.useState)([{name:"T1: 1/4 Roughing",image:"https://cdn11.bigcommerce.com/s-zbaqm/images/stencil/500x659/products/121389/422382/square-4fl-single-end-1__20617.1532441222.1280.1280__66048.1532455452__76708.1578586504.jpg?c=2&imbypass=on&imbypass=on"},{name:"T2: 1/4 Finishing",image:"https://cdn11.bigcommerce.com/s-zbaqm/images/stencil/500x659/products/121389/422382/square-4fl-single-end-1__20617.1532441222.1280.1280__66048.1532455452__76708.1578586504.jpg?c=2&imbypass=on&imbypass=on"},{name:"T3: 1/8 Roughing",image:"https://www.toolstoday.com/media/catalog/product/4/6/46225-k.jpg"},{name:"T1: 1/8 Finishing",image:"https://www.toolstoday.com/media/catalog/product/4/6/46225-k.jpg"}]),i=Object(v.a)(s,2),m=i[0],p=i[1],f=function(){var e=Object(b.a)(g.a.mark((function e(){var t,a,r,c,u,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="http://localhost:3200/products/"+n+"/"+l+"/"+o,e.next=3,fetch(t);case 3:return a=e.sent,console.log(t),e.next=7,a.json();case 7:r=e.sent,c=r.operations.programs,u=c.find((function(e){return e.name===o})),s=u.tools,p(s),console.log(s),console.log("arse");case 14:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){f()}),[]),console.log(ne.todaysData);var E=Object(a.useState)([{Tool:"No Tool Changes yet",Quantity:"-",Rotated:"-",Reason:"-"}]),h=Object(v.a)(E,2),j=h[0],y=h[1],O=Object(a.useState)(te[te.length-1]),x=Object(v.a)(O,2),w=x[0],k=x[1],T=Object(a.useState)(!1),N=Object(v.a)(T,2),C=(N[0],N[1],function(e){k(e)});return console.log(j),r.a.createElement(c,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,null,r.a.createElement(V,{goData:j,onLoad2:t,onLoad:e.cid+" "+e.oid}),r.a.createElement("h5",null,"Most Recent Tool Change. (Click Data in the heading menu to view all data)"),r.a.createElement(ae.a,{striped:!0,bordered:!0,hover:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Tool #"),r.a.createElement("th",null,"Quantity"),r.a.createElement("th",null,"Rotated"),r.a.createElement("th",null,"Reason"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,w.Tool),r.a.createElement("td",null,w.Quantity),r.a.createElement("td",null,w.Rotated),r.a.createElement("td",null,w.Reason)))),r.a.createElement(_.a,{className:"justify-content-center"},m.map((function(e){return r.a.createElement(_.a,null,r.a.createElement(F.a,{style:{padding:"5px"},lg:2.5},r.a.createElement(X.a,{style:{width:"18rem"}},r.a.createElement(X.a.Img,{variant:"top",src:e.image}),r.a.createElement(X.a.Body,null,r.a.createElement(R.a,null,r.a.createElement(_.a,{className:"justify-content-center"},r.a.createElement(X.a.Title,null,e.name),r.a.createElement(ne,{getTheData:y,refreshLength:C,passNameOf:e.name})))))))}))))))};var ue=function(){return r.a.createElement(c.b,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(P,null)),r.a.createElement(u.a,{exact:!0,path:"/products/:pid"},r.a.createElement(U,null)),r.a.createElement(u.a,{exact:!0,path:"/products/:pid/:cid/:oid"},r.a.createElement(ce,null)),r.a.createElement(u.a,{exact:!0,path:"/products/:pid/:cid/:oid/data"},r.a.createElement(le,null)))};o.a.render(r.a.createElement(c.b,null,r.a.createElement(ue,null)),document.getElementById("root"))},98:function(e,t,n){e.exports=n.p+"static/media/logo.6d76a096.png"},99:function(e,t,n){e.exports=n.p+"static/media/jawss.2bf7a5d6.png"}},[[100,1,2]]]);
//# sourceMappingURL=main.9416c583.chunk.js.map