(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(21),o=a.n(l),c=(a(78),a(79),a(57)),i=a.n(c),s=a(14),u=a(39),m=a.n(u),d=function(e){return n.a.createElement(s.c,{to:e.to,className:m.a.link,activeClassName:m.a.active},e.linkName)},p=function(){return n.a.createElement("div",{className:i.a.header},n.a.createElement(d,{to:"/login",linkName:"Login"}),n.a.createElement(d,{to:"/register",linkName:"Register"}),n.a.createElement(d,{to:"/password_recovery",linkName:"Password Recovery"}),n.a.createElement(d,{to:"/new_password",linkName:"New Password"}),n.a.createElement(d,{to:"/profile",linkName:"Profile"}),n.a.createElement(d,{to:"/packs",linkName:"Packs"}))},E=a(58),f=a.n(E),v=a(4),b=a(7),g=a(18),h=a(3),_=a(61),w=a.n(_),S=n.a.memo((function(e){e.name;var t=e.id,a=Object(h.a)(e,["name","id"]);return n.a.createElement("input",Object.assign({className:w.a.input},a,{id:t}))})),O=a(62),k=a.n(O),j=n.a.memo((function(e){var t=e.name,a=Object(h.a)(e,["name"]);return n.a.createElement("button",Object.assign({className:k.a.button},a),t)})),y=a(2),R=a(33),N=a(64),P=a.n(N).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),C=function(){return P.post("/auth/me",{})},A=function(e){return P.post("/auth/login",Object(R.a)({},e))},T=function(){return P.delete("/auth/me")},x=function(e,t){return P.post("/auth/register",{email:e,password:t})},F=function(e){return P.post("/auth/forgot",{email:e,from:"test-front-admin",message:'<div style="background-color: gold; padding: 15px">Password recover link:\n                    <a href="https://alekseidarafeichyk.github.io/cards/#/new_password/$token$">link</a>\n                </div>'})},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e3,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"0updated";return P.get("/cards/pack?pageCount=".concat(e,"&page=",4,"&sortPacks=").concat(t))},L={_id:"",email:"",rememberMe:!1,isAdmin:!1,name:"",verified:!1,publicCardPacksCount:0,created:"",updated:"",__v:0,token:"",tokenDeathTime:0,avatar:"Some avatar"},V=function(e){return{type:"SET-DELETE-USER",user:e}},D={status:"idle"},M=function(e){return{type:"SET_STATUS",status:e}},U={isAuth:!1,status:"idle"},Z=function(e){return{type:"LOGIN/SET_IS_AUTH",isAuth:e}},q=a(35),G=a.n(q),W=a(65),H=a.n(W),$=function(){return n.a.createElement("div",{className:H.a.ldsRing},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))},B=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.login.isAuth})),a=Object(y.c)((function(e){return e.loader.status})),r=Object(g.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required",e.password?e.password.length<6&&(t.password="Must be 5 characters or more"):t.password="Field is required"}(e,t),t},onSubmit:function(t){var a;e((a=Object(b.a)({},t),function(e){e(M("loading")),A(Object(b.a)({},a)).then((function(t){e(M("succeeded")),e(V(t.data)),e(Z(!0))})).catch((function(t){e(M("failed"));var a=t.response?t.response.data.error:t.message;console.log(a)}))}))}});return t?n.a.createElement(v.a,{to:"/profile"}):n.a.createElement("div",{className:G.a.formContainer},n.a.createElement("form",{onSubmit:r.handleSubmit},n.a.createElement(S,Object.assign({id:"email",type:"text",placeholder:"Enter your email"},r.getFieldProps("email"))),r.errors.email?n.a.createElement("div",{className:G.a.error},r.errors.email):null,n.a.createElement(S,Object.assign({id:"password",placeholder:"password",type:"password"},r.getFieldProps("password"))),r.errors.password?n.a.createElement("div",{className:G.a.error},r.errors.password):null,"remember me ",n.a.createElement("input",Object.assign({type:"checkbox"},r.getFieldProps("rememberMe"))),"loading"===a?n.a.createElement($,null):n.a.createElement(j,{type:"submit",name:"Sign In"})))},J=a(20),z=a.n(J),K={isRegistered:!1,serverError:"",status:"idle"},Y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{type:"REGISTER_USER",isRegistered:e,error:t}},Q=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.register})),a=t.isRegistered,l=t.serverError,o=Object(y.c)((function(e){return e.loader.status})),c=Object(g.a)({initialValues:{email:"",password:"",repeatPassword:""},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required",e.password?e.password.length<6&&(t.password="Must be 5 characters or more"):t.password="Field is required",(null===e||void 0===e?void 0:e.repeatPassword)?e.repeatPassword.length<6&&(t.password="Must be 5 characters or more"):t.repeatPassword="Field is required"}(e,t),t},onSubmit:function(t){var a,r;e((a=t.email,r=t.password,function(e){e(M("loading")),x(a,r).then((function(t){e(M("succeeded")),e(Y(!0))})).catch((function(t){e(M("failed")),e(Y(!1,t.response.data.error))}))}))}});if(Object(r.useEffect)((function(){return function(){e(Y(!1))}}),[e]),a)return n.a.createElement(v.a,{to:"/login"});var i=l?n.a.createElement("div",{className:z.a.error},l):null;return n.a.createElement("div",{className:z.a.containerForm},n.a.createElement("form",{className:z.a.form,onSubmit:c.handleSubmit},n.a.createElement(S,Object.assign({type:"text",id:"email",placeholder:"Email"},c.getFieldProps("email"))),c.errors.email?n.a.createElement("div",{className:z.a.error},c.errors.email):null,n.a.createElement(S,Object.assign({type:"password",id:"password",placeholder:"Password"},c.getFieldProps("password"))),c.errors.password?n.a.createElement("div",{className:z.a.error},c.errors.password):null,n.a.createElement(S,Object.assign({type:"password",id:"repeatPassword",placeholder:"Repeat password"},c.getFieldProps("repeatPassword"))),c.errors.repeatPassword?n.a.createElement("div",{className:z.a.error},c.errors.repeatPassword):null,"loading"===o?n.a.createElement($,null):n.a.createElement(j,{type:"submit",name:"Register"})),i)},X={email:"",serverResponse:"",serverError:"",status:"idle"},ee=function(e){return{type:"SAVE_SERVER_RESPONSE",answer:e}},te=function(e){return{type:"SAVE_SERVER_ERROR",error:e}},ae=a(36),re=a.n(ae),ne=function(){var e=Object(y.c)((function(e){return e.passwordRecover})),t=e.serverResponse,a=e.serverError,r=Object(y.c)((function(e){return e.loader.status})),l=Object(y.b)(),o=Object(g.a)({initialValues:{email:""},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required"}(e,t),t},onSubmit:function(e){var t;l((t=e.email,function(e){e(M("loading")),F(t).then((function(a){e(M("succeeded")),e(function(e){return{type:"EMAIL_TO_CHANGE_PASSWORD",email:e}}(t)),e(ee(a.data.info))})).catch((function(t){e(M("failed")),e(te(t.response.data.error))}))}))}});return n.a.createElement("div",{className:re.a.forgotStyle},n.a.createElement("form",{onSubmit:o.handleSubmit,className:re.a.formForgot},n.a.createElement("div",null,"Your Email:"),n.a.createElement(S,Object.assign({placeholder:"Email",id:"email",name:"email",type:"email",onFocus:function(){l(ee("")),l(te(""))}},o.getFieldProps("email"))),o.errors.email?n.a.createElement("div",{className:re.a.error},o.errors.email):null,n.a.createElement("div",null,n.a.createElement(j,{type:"submit",name:"Send",disabled:"loading"===r||!!a||!!t}))),"loading"===r?n.a.createElement($,null):null,t||a)},le=function(){return n.a.createElement("div",null,"NewPassword")},oe=function(){var e=Object(y.c)((function(e){return e.login.isAuth})),t=Object(y.c)((function(e){return e.profile})),a=Object(y.c)((function(e){return e.loader.status})),r=Object(y.b)();if(!e)return n.a.createElement(v.a,{to:"/login"});return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("span",null,"name : ",t.name)),n.a.createElement("div",null,n.a.createElement("span",null,"avatar : ",t.avatar)),n.a.createElement("div",null,n.a.createElement("span",null,"publicCardPacksCount : ",t.publicCardPacksCount)),"loading"===a?n.a.createElement($,null):n.a.createElement(j,{onClick:function(){r((function(e){e(M("loading")),T().then((function(t){e(M("succeeded")),e(V({_id:"",email:"",rememberMe:!1,isAdmin:!1,name:"",verified:!1,publicCardPacksCount:0,created:"",updated:"",__v:0,token:"",tokenDeathTime:0,avatar:"Some avatar"})),e(Z(!1))})).catch((function(t){e(M("failed"));var a=t.response?t.response.data.error:t.message;console.log(a)}))}))},name:"Logout"}))},ce=a(71),ie=a(37),se=a.n(ie),ue={cardPacks:[{_id:null,user_id:null,user_name:null,private:null,name:null,path:null,grade:null,shots:null,cardsCount:null,type:null,rating:null,created:null,updated:null,more_id:null,__v:null,deckCover:null}],page:null,pageCount:null,cardPacksTotalCount:null,minCardsCount:null,maxCardsCount:null,token:null,tokenDeathTime:null},me=function(){var e=Object(y.c)((function(e){return e.packs.cardPacks})),t=Object(y.b)();Object(r.useEffect)((function(){t((function(e){I().then((function(t){e({type:"SET_PACKS",packs:t.data})})).catch((function(e){}))}))}),[]);return r.createElement("table",{className:se.a.table},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Name"),r.createElement("th",null,"CardsCount",r.createElement("button",{className:se.a.arrow},"/\\"),r.createElement("button",{className:se.a.arrow},"\\/")),r.createElement("th",null,"Update"),r.createElement("th",null,"Url"),r.createElement("th",null,r.createElement("button",null,"add")),r.createElement("th",null),r.createElement("th",null))),r.createElement("tbody",null,e.map((function(e){return r.createElement("tr",{key:e._id},r.createElement("td",null,e.name),r.createElement("td",null,e.cardsCount),r.createElement("td",null,e.updated),r.createElement("td",null,"''"),r.createElement("td",null,r.createElement("button",null,"delete")),r.createElement("td",null,r.createElement("button",null,"update")),r.createElement("td",null,r.createElement(s.b,{to:"#"},"cards")))}))))},de=a(118),pe=a(45),Ee=a.n(pe),fe=a(116),ve=Object(fe.a)({root:{width:"100%",color:"black"}}),be=n.a.memo((function(e){var t=ve();return n.a.createElement("div",{className:Ee.a.container},n.a.createElement("div",{className:Ee.a.value},n.a.createElement("span",null,e.value[0]),n.a.createElement("span",null,e.value[1])),n.a.createElement(de.a,{className:t.root,min:e.min,max:e.max,value:e.value,onChange:function(t,a){e.setValue(a)},valueLabelDisplay:"auto","aria-labelledby":"range-slider"}))})),ge=a(69),he=a.n(ge),_e=function(){var e=Object(r.useState)([0,100]),t=Object(ce.a)(e,2),a=t[0],l=t[1],o=Object(g.a)({initialValues:{search:""},onSubmit:function(e){alert(e.search),alert(a[0]),alert(a[1])}});return n.a.createElement(n.a.Fragment,null,n.a.createElement("form",{onSubmit:o.handleSubmit,className:he.a.formStyle},n.a.createElement(S,Object.assign({placeholder:"Search",id:"search",name:"search",type:"text"},o.getFieldProps("search"))),n.a.createElement(be,{value:a,setValue:l,min:0,max:100}),n.a.createElement("div",null,n.a.createElement(j,{type:"submit",name:"Search"}))),n.a.createElement("h1",null,"Packs"),n.a.createElement(me,null))},we=function(){return n.a.createElement("div",{className:f.a.routes},n.a.createElement(v.b,{path:"/login",render:function(){return n.a.createElement(B,null)}}),n.a.createElement(v.b,{path:"/register",render:function(){return n.a.createElement(Q,null)}}),n.a.createElement(v.b,{path:"/password_recovery",render:function(){return n.a.createElement(ne,null)}}),n.a.createElement(v.b,{path:"/new_password",render:function(){return n.a.createElement(le,null)}}),n.a.createElement(v.b,{path:"/profile",render:function(){return n.a.createElement(oe,null)}}),n.a.createElement(v.b,{path:"/packs",render:function(){return n.a.createElement(_e,null)}}))},Se=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null),n.a.createElement(we,null))},Oe=function(){var e=Object(y.b)();return Object(r.useEffect)((function(){e((function(e){C().then((function(t){e(V(t.data)),e(Z(!0))})).catch((function(e){var t=e.response?e.response.data.error:e.message;console.log(t)}))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(s.a,null,n.a.createElement(Se,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(24),je=a(70),ye={},Re=Object(ke.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_IS_AUTH":return Object(b.a)({},e,{isAuth:t.isAuth});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMAIL_TO_CHANGE_PASSWORD":return Object(b.a)({},e,{email:t.email});case"SAVE_SERVER_RESPONSE":return Object(b.a)({},e,{serverResponse:t.answer});case"SAVE_SERVER_ERROR":return Object(b.a)({},e,{serverError:t.error});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_USER":return Object(b.a)({},e,{isRegistered:t.isRegistered,serverError:t.error?t.error:""});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-DELETE-USER":return Object(b.a)({},e,{},t.user);default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATUS":return Object(b.a)({},e,{status:t.status});default:return e}},packs:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PACKS":return Object(R.a)({},e,{},t.packs);default:return e}}}),Ne=Object(ke.d)(Re,Object(ke.a)(je.a)),Pe=Ne;window.store=Ne,o.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y.a,{store:Pe},n.a.createElement(Oe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},20:function(e,t,a){e.exports={containerForm:"Register_containerForm__1TkN8",form:"Register_form__3jhg_",error:"Register_error__3hqSw"}},35:function(e,t,a){e.exports={formContainer:"Login_formContainer__WWFxh",error:"Login_error__rS7O4"}},36:function(e,t,a){e.exports={forgotStyle:"PasswordRecovery_forgotStyle__25qDt",formForgot:"PasswordRecovery_formForgot__2bykr",error:"PasswordRecovery_error__2zQep"}},37:function(e,t,a){e.exports={table:"Table_table__2zNDP",arrow:"Table_arrow__1Y0Sd"}},39:function(e,t,a){e.exports={link:"NavlinkCommon_link__21JlT",active:"NavlinkCommon_active__2J4uy"}},45:function(e,t,a){e.exports={container:"CommonSlider_container__I_JcE",value:"CommonSlider_value__30TGB",root:"CommonSlider_root__hWbh9"}},57:function(e,t,a){e.exports={header:"Header_header__3kZgy"}},58:function(e,t,a){e.exports={routes:"Route_routes__1ggEc"}},61:function(e,t,a){e.exports={input:"Input_input__1GLt5"}},62:function(e,t,a){e.exports={button:"Button_button__1P0gp",active:"Button_active__15H3D"}},65:function(e,t,a){e.exports={ldsRing:"Loader_ldsRing__37cMZ"}},69:function(e,t,a){e.exports={formStyle:"Packs_formStyle__24Oxg"}},73:function(e,t,a){e.exports=a(102)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.c10026e8.chunk.js.map