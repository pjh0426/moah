(this["webpackJsonpmoah-web"]=this["webpackJsonpmoah-web"]||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},123:function(e,t,a){},124:function(e,t,a){e.exports=a.p+"static/media/main.5f9667e2.jpg"},125:function(e,t,a){},127:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),o=a.n(c),i=(a(35),a(71),a(21)),l=a(6),s=(a(72),a(134)),m=a(135),u=a(136),d=function(e){var t=e.data;return r.a.createElement("div",{className:"quickLinkDiv"},r.a.createElement("div",{className:"quickLinkDivHeader"},t.icon,r.a.createElement("p",null,t.title)),r.a.createElement("div",{className:"quickLinkDivBody"},r.a.createElement("p",null,t.body)))},E=function(){var e=[{id:1,title:"FINANCIALS",body:"Our fundraising model reflects our vision for sustainable development and empowering childrens and communities to make a difference.",icon:r.a.createElement(s.a,{size:30})},{id:2,title:"EVENT",body:"Moah is a charity organization dedicated to supporting socio-economically disadvantaged children and youth by implementing annual projects and charity events.",icon:r.a.createElement(m.a,{size:30})},{id:3,title:"Contact us",body:"Email: moahtoronto0610@gmail.com",icon:r.a.createElement(u.a,{size:30})}].map((function(e){return r.a.createElement(d,{key:e.id,data:{title:e.title,body:e.body,icon:e.icon}})}));return r.a.createElement("div",{className:"quickLinkContainer"},e)},h=a(30),p=a.n(h),b=a(54),g=a(7),f=(a(76),function(e){var t=e.posts;return e.loading?r.a.createElement("h2",null,"Loading..."):r.a.createElement("div",{className:"postContainer"},t.map((function(e){return r.a.createElement("div",{className:e.id,key:e.id},r.a.createElement("div",{className:"box1"}),r.a.createElement("div",{className:"content box2"},r.a.createElement("p",{className:"header"},e.header),r.a.createElement("p",{className:"title"},e.title),r.a.createElement("p",{className:"body"},e.body)),r.a.createElement("div",{className:"box3"},r.a.createElement("p",null," + ")),r.a.createElement("div",{className:"box4"}))})))}),v=function(e){for(var t=e.postsPerPage,a=e.totalPosts,n=e.paginate,c=[],o=1;o<=Math.ceil(a/t);o++)c.push(o);return r.a.createElement("div",{className:"mr-2 mt-2 float-right"},r.a.createElement("ul",{className:"pagination"},c.map((function(e){return r.a.createElement("li",{key:e,className:"page-item"},r.a.createElement("a",{onClick:function(){return n(e)},className:"page-link"},e))}))))},N=(a(77),a(95),function(){console.log("postPage");var e=Object(n.useState)([]),t=Object(g.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),i=Object(g.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)(1),u=Object(g.a)(m,2),d=u[0],E=u[1],h=Object(n.useState)(2),N=Object(g.a)(h,1)[0];Object(n.useEffect)((function(){console.log("here2"),function(){var e=Object(b.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s(!0),c([{id:"event1",header:"EVENT 1.",title:"Garage Sale",body:"Body1"},{id:"event2",header:"EVENT 2.",title:"New Year Charitiy Party",body:"Body2"},{id:"event3",header:"EVENT 3.",title:"EVENT 3 Title",body:"Body3"}]),s(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]);var O=d*N,j=O-N,y=a.slice(j,O);return console.log(j),console.log(O),r.a.createElement("div",{className:"postPageContainer"},r.a.createElement("div",null,r.a.createElement(f,{posts:y,loading:l}),r.a.createElement(v,{postsPerPage:N,totalPosts:a.length,paginate:function(e){return E(e)}})))}),O=a(55),j=a.n(O);a(98);function y(){var e=Object(n.useState)(""),t=Object(g.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(""),i=Object(g.a)(o,2),l=i[0],s=i[1],m=Object(n.useState)(""),u=Object(g.a)(m,2),d=u[0],E=u[1];return r.a.createElement("div",null,r.a.createElement("form",{className:"container mb-5",onSubmit:function(e){e.preventDefault(),c(""),s(""),E("Thank you. Your email has been successfully sent"),j.a.sendForm("MoahWebApp","template_m7j4gnl",e.target,"user_MEDyu14kNj280fdNXcQp5").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},r.a.createElement("div",{className:"header1"},"CONTACT US"),r.a.createElement("div",{className:"col-8 form-group mx-auto"},r.a.createElement("input",{type:"text",className:"form-control",placeholder:"name",name:"user_name",value:a,onChange:function(e){return c(e.target.value)}})),r.a.createElement("div",{className:"col-8 form-group pt-2 mx-auto"},r.a.createElement("input",{type:"email",className:"form-control",placeholder:"Email Address",name:"user_email",value:l,onChange:function(e){return s(e.target.value)}})),r.a.createElement("div",{className:"col-8 form-group pt-2 mx-auto"},r.a.createElement("textarea",{className:"form-control",cols:"30",rows:"8",placeholder:"Your message",name:"message",value:d,onChange:function(e){return E(e.target.value)}})),r.a.createElement("input",{type:"submit",className:"btn-info-custom footer",value:"Send Message"})))}a(99);var k=function(e){var t=e.data;return r.a.createElement("div",{className:"mainStoryDiv"},r.a.createElement("div",{className:"mainStoryDivHeader"},r.a.createElement("p",null,t.title)),r.a.createElement("div",{className:"mainStoryDivBody"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body1}}),r.a.createElement("div",{className:"focus",dangerouslySetInnerHTML:{__html:t.body2}}),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.body3}})))},S=function(){var e=[{id:1,title:"MOAH STORY",body1:'MOAH WAS FOUNDED BY A HANDFUL OF WARM-HEARTED FRIENDS<br/>WHO ARE EAGER TO FIND WAYS TO HELP THE LESS FORTUNATES,<br/>ESPECIALLY THE MOST VULNERABLE ONES, "CHILDREN".<br/>OUR STORY BEGAN WITH A SIMPLE IDEA IN OUR MINDS<br/>',body2:"WHAT CAN WE GIVE BACK TO THE WORLD? AND HOW?",body3:"BEFORE OUR JOURNEY  BEGAN, THERE WAS AN UNCERTAINTY WHETHER<br/>OUR INITIATIVES WOULD BRING ANY SIGNIFICANT DIFFERENCES IN THE WORLD;<br/>HOWEVER, WE CONTINUED TO STEP FORTH AS WE TRULY BELIEVE THAT EVEN<br/>ONE SMALL ACTION OF BENEFICIENCE COULD BRING A GREATER CHANGE<br/>TOMORROW. THUS, WITH THAT COMMON GROUND IN PLACE, MORE AND MORE<br/>HIGHLY TALENTED INDIVIDUALS FROM VARIOUS FIELDS AND INDUSTRIES HAVE<br/>BEEN VOULUNTARILY JOINING OUR TEAM."}].map((function(e){return r.a.createElement(k,{key:e.id,data:{title:e.title,body1:e.body1,body2:e.body2,body3:e.body3}})}));return r.a.createElement("div",{className:"MainStoryContainer"},e)},w=(a(100),function(e){var t=e.bgcolor,a=e.completed,n={height:"100%",width:"".concat(a,"%"),backgroundColor:t,borderRadius:"inherit",textAlign:"right",transition:"width 5s ease-in-out",overflow:"hidden"};return r.a.createElement("div",{style:{height:20,width:"90%",backgroundColor:"#e0e0de",borderRadius:50}},r.a.createElement("div",{style:n},r.a.createElement("span",{style:{padding:5,color:"white",fontWeight:"bold"}},"".concat(a,"%"))))}),x=function(e){var t=Object(n.useState)(0),a=Object(g.a)(t,2),c=a[0],o=a[1];return Object(n.useEffect)((function(){setInterval((function(){return o(60)}),2e3)}),[]),r.a.createElement(w,{bgcolor:"#1F2B5D",completed:c})},A=(a(101),a(56)),I=a.n(A),T=function(e){return r.a.createElement("div",{className:"projectContainer"},r.a.createElement("div",{className:"projectHeader"},r.a.createElement("div",{className:"mt-5"},r.a.createElement("span",{className:"header1"},"MOAH PROJECT 1."),r.a.createElement("span",{className:"header2"}," Support for Somrongthom School in Cambodia"))),r.a.createElement("div",{className:"projectBody"},r.a.createElement("div",{className:"projectImageDiv"},r.a.createElement("img",{src:I.a,alt:"",className:"fixed_img"})),r.a.createElement("div",{className:"projectDetailDiv"},r.a.createElement("div",{className:"header3"},"Help children bloom by improving their learning environment."),r.a.createElement("div",{className:"header4"},"$2000"),r.a.createElement("div",null,r.a.createElement(x,null)))))},C=a(14),D=a(9),H=a(3);function R(){var e=Object(D.a)(["\n    transform: translateX(-","px);\n    transition: transform ease-out ","s;\n    height: 100%;\n    width: ","px;\n    display: flex;\n"]);return R=function(){return e},e}var M=a(64).a.div(R(),(function(e){return e.translate}),(function(e){return e.transition}),(function(e){return e.width}));function W(){var e=Object(D.a)(["\n            width: ","%;\n            background-image: url('","');\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: center;\n        "]);return W=function(){return e},e}var L=function(e){var t=e.content,a=e.size,n=e.handleClick;return Object(H.c)("div",{onClick:n,id:t,css:Object(H.b)(W(),a,t)})};function F(){var e=Object(D.a)(["\n            height: 100%;\n            width: 100%;\n            background-image: url('","');\n            background-size: cover;\n            background-repeat: no-repeat;\n            background-position: center;\n        "]);return F=function(){return e},e}var U=function(e){var t=e.content;e.size;return Object(H.c)("div",{css:Object(H.b)(F(),t)})},B=a(57),P=a.n(B),_=a(58),G=a.n(_);function V(){var e=Object(D.a)(["\n  position: relative;\n  height: 100vh;\n  width: 100vw;\n  margin: 0 auto;\n  overflow: hidden;\n"]);return V=function(){return e},e}function Y(){var e=Object(D.a)(["\n                display: flex;\n                position:absolute;\n                top: 50%;\n                ",";\n                height: 50px;\n                width: 50px;\n                justify-content: center;\n                background: white;\n                border-radius: 50%;\n                cursor: pointer;\n                align-items: center;\n                transition: transform ease-in 0.1s;\n                &:hover{\n                    transform: scale(1.1);\n                }\n                img{\n                    transform: translateX(","px);\n                    width: 100%;\n                    height: 100%\n                }&:focus{\n                    outline:0;\n                }\n            "]);return Y=function(){return e},e}Object(H.b)(V());var z=function(e){var t=e.direction,a=e.handleClick;return Object(H.c)("div",{onClick:a,css:Object(H.b)(Y(),"right"===t?"right: 25px":"left:25px","0")},"right"===t?Object(H.c)("img",{src:G.a}):Object(H.c)("img",{src:P.a}))};function J(){var e=Object(D.a)(["\n                position: absolute;\n                bottom: 25px;\n                width: 100%;\n                display: flex;\n                align-items: center;\n                justify-content: center;\n            "]);return J=function(){return e},e}function q(){var e=Object(D.a)(["\n                padding: 10px;\n                margin-right: 5px;\n                cursor: pointer;\n                border-radius: 50%;\n                background: ",";\n            "]);return q=function(){return e},e}var Q=function(e){var t=e.active;return Object(H.c)("span",{css:Object(H.b)(q(),t?"black":"white")})},X=function(e){var t=e.images,a=e.activeIndex;return Object(H.c)("div",{css:Object(H.b)(J())},t.map((function(e,t){return Object(H.c)(Q,{key:e,active:a===t})})))},$=function(){return["https://raw.githubusercontent.com/pjh0426/moah/main/src/images/main.jpg","https://images.unsplash.com/photo-1491331222365-8cd6e4cb657c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600","https://images.unsplash.com/photo-1575482076854-794bc2a4b9c4?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=80&w=1600","https://images.unsplash.com/photo-1583978620392-00b7aad02dfc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"]};function K(){var e=Object(D.a)(["\n    position: absoloute;\n    height: 80vh;\n    width: 100vw;\n    margin: 0 auto;\n    overflow: hidden;\n    margin-bottom: 10px;\n    "]);return K=function(){return e},e}function Z(){var e=Object(D.a)(["\n    position: relative;\n    height: ","vh;\n    width: 100vw;\n    margin: 0 auto;\n    overflow: hidden;\n    "]);return Z=function(){return e},e}var ee=function(e){var t=e.displayPerPage,a=e.mode;console.log(t);var r=function(){return window.innerWidth/t},c=100/t,o=80/t,i=$(),l=i.length>t,s=Object(n.useState)({activeIndex:0,translate:0,transition:.45,selectedImage:i[0]}),m=Object(g.a)(s,2),u=m[0],d=m[1],E=Object(H.b)(Z(),o),h=Object(H.b)(K());console.log("============"),console.log(i);var p=u.translate,b=u.transition,f=u.activeIndex,v=u.selectedImage,N=function(e){d(Object(C.a)(Object(C.a)({},u),{},{selectedImage:e.target.id}))};return Object(H.c)("div",null,"2"==a?Object(H.c)("div",{css:h},Object(H.c)(U,{key:f,content:v,size:100})):null,Object(H.c)("div",{css:E},Object(H.c)(M,{translate:p,transition:b,width:r()*i.length},i.map((function(e){return Object(H.c)(L,{key:e,content:e,size:c,handleClick:N})}))),l?Object(H.c)(z,{direction:"left",handleClick:function(){if(0===f)return d(Object(C.a)(Object(C.a)({},u),{},{translate:(i.length-t)*r(),activeIndex:i.length-t}));d(Object(C.a)(Object(C.a)({},u),{},{activeIndex:f-1,translate:(f-1)*r()}))}}):null,l?Object(H.c)(z,{direction:"right",handleClick:function(){if(f===i.length-t)return d(Object(C.a)(Object(C.a)({},u),{},{translate:0,activeIndex:0}));d(Object(C.a)(Object(C.a)({},u),{},{activeIndex:f+1,translate:(f+1)*r()}))}}):null,l?Object(H.c)(X,{images:i,activeIndex:f}):null))},te=(a(102),a(27)),ae=a.n(te),ne=a(24),re=function(e){return r.a.createElement("div",{className:"footerContainer"},r.a.createElement("div",{className:"col1"}),r.a.createElement("div",{className:"col2"},r.a.createElement("img",{src:ae.a,alt:"",className:"logo_img2"}),r.a.createElement("div",null,"@moahtoronto")),r.a.createElement("div",{className:"col3"}),r.a.createElement("div",{className:"col4"},r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links",href:"/moah/#/Home"},"About Us")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links",href:"/moah/#/Home"},"Contact")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links",href:"/moah/#/Home"},"Terms & Conditions"))),r.a.createElement("div",{className:"col5"},r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links",href:"https://www.facebook.com/events/180963629502125/"},r.a.createElement(ne.c,{fab:!0,icon:"facebook-f"})," Facebook")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links",href:"https://www.instagram.com/moahtoronto/"},r.a.createElement(ne.c,{fab:!0,icon:"instagram"})," Instagram"))),r.a.createElement("div",{className:"col6"}),r.a.createElement("div",{className:"col7"},r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links"},"Subscribe to our newsletter")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("input",{id:"emailForSave",type:"email",name:"email",spaceholder:"email address",className:"subInput"}),r.a.createElement("span",null,r.a.createElement("input",{id:"submitEmail",type:"submit",value:"Go"})))),r.a.createElement("div",{className:"col8"},r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links"},"2 Rean Dr, Toronto, ON")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links"},"+1 000 000 0000")),r.a.createElement("div",{className:"linkDiv"},r.a.createElement("a",{className:"footer-links"},"moahtoronto0601@gmail.com"))),r.a.createElement("div",{className:"col8"}))},ce=function(e){return r.a.createElement("div",null,r.a.createElement(ee,{displayPerPage:1}),r.a.createElement(E,null),r.a.createElement(S,null),r.a.createElement(T,null),r.a.createElement(N,null),r.a.createElement(ee,{displayPerPage:7,mode:2}),r.a.createElement(y,null),r.a.createElement(re,null))},oe=function(e){var t=e.src,a=e.h,c=e.author,o=Object(n.useState)(0),i=Object(g.a)(o,2),l=i[0],s=i[1];return r.a.createElement("div",{className:"imgframe "+(l?"pop":""),style:{height:Number(a)}},r.a.createElement("img",{className:l?"mainimgpop":"mainimg",src:t,height:Number(a)}),r.a.createElement("span",{className:l?"show":"close",onClick:function(){return s(0)}},"X"),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{className:l?"hide":"",onClick:function(){return s(l?0:1)}},"\u2139 "),r.a.createElement("button",{onClick:function(){return window.location=t}},"\u23ec"),r.a.createElement("div",{className:l?"":"hide"},c)))},ie=function(e){var t=e.images;return r.a.createElement("div",{className:"column"},t.map((function(e,t){return r.a.createElement(oe,{key:t,src:e.src,h:e.height,author:e.author})})))},le=function(e,t){console.log(e);for(var a=[],n=0;n<t;n++)a.push([]);var r=0;e.forEach((function(e){r+=Number(e.height)}));var c=Math.floor(r/t),o=0,i=0;return console.log(r),console.log(c),e.forEach((function(e){console.log("current:"+o),o>=c?(i+=1,o=Number(e.height),console.log("going to the next column:"+i),a[i].push(e)):(o+=Number(e.height),a[i].push(e))})),a},se=function(e){var t=e.imgarr,a=e.col,c=Object(n.useState)([]),o=Object(g.a)(c,2),i=o[0],l=o[1];return Object(n.useEffect)((function(){window.matchMedia("all and (max-width: 800px)").matches?l(le(t,a/2)):l(le(t,a))}),[]),r.a.createElement(n.Fragment,null,i.map((function(e,t){return r.a.createElement(ie,{key:t,images:e})})))},me=(a(123),function(){return[{src:"https://source.unsplash.com/random/500x500?sig=1",height:500,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=2",height:400,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=3",height:700,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=4",height:250,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=5",height:800,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=1",height:500,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=2",height:400,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=3",height:700,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=4",height:250,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=5",height:800,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=4",height:250,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=5",height:800,author:"AWESOME"},{src:"https://source.unsplash.com/random/500x500?sig=4",height:250,author:"AWESOME"}]}),ue=function(){var e=me();return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"gallery"},r.a.createElement(se,{imgarr:e,col:4})))},de=(a(124),[{title:"Who's us",url:"/moah/#/Home",cName:"nav-links",icon:""},{title:"Events & Campaign",url:"/moah/#/Events",cName:"nav-links",icon:""},{title:"instagram",url:"https://www.instagram.com/moahtoronto/",cName:"nav-links",icon:"instagram"},{title:"facebook",url:"https://www.facebook.com/events/180963629502125/",cName:"nav-links",icon:"facebook-f"}]),Ee=(a(125),function(){var e=Object(n.useState)(!1),t=Object(g.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"NavbarItems"},r.a.createElement("div",{className:"navbar-logo"},r.a.createElement("img",{src:ae.a,alt:"",className:"logo_img"})),r.a.createElement("div",{className:"menu-icon",onClick:function(){return c(!a)}},r.a.createElement("i",{className:a?"fas fa-times":"fas fa-bars"})),r.a.createElement("ul",{className:a?"nav-menu active":"nav-menu"},de.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{className:e.cName,href:e.url},""!=e.icon?r.a.createElement(ne.c,{fab:!0,icon:e.icon}):e.title))}))))}),he=function(){return console.log("app"),r.a.createElement(i.a,{basename:"/"},r.a.createElement("div",{className:"App"},r.a.createElement(Ee,null),r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:ce}),r.a.createElement(l.a,{path:"/Home",component:ce}),r.a.createElement(l.a,{path:"/Events",component:ue}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(126);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){e.exports=a.p+"static/media/Moah_logo_web_bg.37b27188.jpg"},35:function(e,t,a){},56:function(e,t,a){e.exports=a.p+"static/media/Cambodia_Inclass.01fd42b8.JPG"},57:function(e,t,a){e.exports=a.p+"static/media/left-arrow.3e3b6c28.png"},58:function(e,t,a){e.exports=a.p+"static/media/right-arrow.e7e8a524.png"},66:function(e,t,a){e.exports=a(127)},71:function(e,t,a){},72:function(e,t,a){},76:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.f6c8c051.chunk.js.map