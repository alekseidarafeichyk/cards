(this.webpackJsonpcards=this.webpackJsonpcards||[]).push([[0],{13:function(e,t,r){e.exports={containerForm:"Register_containerForm__374RV",form:"Register_form__1tDJh",error:"Register_error__2ss3E"}},23:function(e,t,r){e.exports={formContainer:"Login_formContainer__3Fd2Z",error:"Login_error__1eD1w"}},24:function(e,t,r){e.exports={forgotStyle:"PasswordRecovery_forgotStyle__3qR_w",formForgot:"PasswordRecovery_formForgot__KPRD_",error:"PasswordRecovery_error__1P396"}},26:function(e,t,r){e.exports={link:"NavlinkCommon_link__21JlT",active:"NavlinkCommon_active__2J4uy"}},41:function(e,t,r){e.exports={header:"Header_header__3kZgy"}},42:function(e,t,r){e.exports={routes:"Route_routes__1ggEc"}},45:function(e,t,r){e.exports={input:"Input_input__1GLt5"}},46:function(e,t,r){e.exports={button:"Button_button__1P0gp",buton:"Button_buton__1g8Pz"}},49:function(e,t,r){e.exports={ldsRing:"Loader_ldsRing__37cMZ"}},51:function(e,t,r){e.exports=r(80)},56:function(e,t,r){},57:function(e,t,r){},80:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(18),i=r.n(o),s=(r(56),r(57),r(41)),l=r.n(s),c=r(11),u=r(26),d=r.n(u),m=function(e){return n.a.createElement(c.b,{to:e.to,className:d.a.link,activeClassName:d.a.active},e.linkName)},p=function(){return n.a.createElement("div",{className:l.a.header},n.a.createElement(m,{to:"/login",linkName:"Login"}),n.a.createElement(m,{to:"/register",linkName:"Register"}),n.a.createElement(m,{to:"/password_recovery",linkName:"Password Recovery"}),n.a.createElement(m,{to:"/new_password",linkName:"New Password"}),n.a.createElement(m,{to:"/profile",linkName:"Profile"}))},f=r(42),E=r.n(f),v=r(1),g=r(4),b=r(15),_=r(22),h=r(45),w=r.n(h),R=n.a.memo((function(e){e.name;var t=e.id,r=Object(_.a)(e,["name","id"]);return n.a.createElement("input",Object.assign({className:w.a.input},r,{id:t}))})),O=r(46),S=r.n(O),j=n.a.memo((function(e){var t=e.name,r=Object(_.a)(e,["name"]);return n.a.createElement("button",Object.assign({className:S.a.button},r),t)})),y=r(2),P=r(48),N=r.n(P).a.create({withCredentials:!0,baseURL:"https://neko-back.herokuapp.com/2.0"}),k=function(){return N.post("/auth/me",{})},A=function(e){return N.post("/auth/login",Object(g.a)({},e))},F=function(){return N.delete("/auth/me")},T=function(e,t){return N.post("/auth/register",{email:e,password:t})},C=function(e){return N.post("/auth/forgot",e)},x={_id:"",email:"",rememberMe:!1,isAdmin:!1,name:"",verified:!1,publicCardPacksCount:0,created:"",updated:"",__v:0,token:"",tokenDeathTime:0,avatar:"Some avatar"},I=function(e){return{type:"SET-DELETE-USER",user:e}},L={status:"idle"},V=function(e){return{type:"SET_STATUS",status:e}},Z={isAuth:!1,status:"idle"},M=function(e){return{type:"LOGIN/SET_IS_AUTH",isAuth:e}},D=r(23),U=r.n(D),q=r(49),G=r.n(q),$=function(){return n.a.createElement("div",{className:G.a.ldsRing},n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null),n.a.createElement("div",null))},H=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.login.isAuth})),r=Object(y.c)((function(e){return e.loader.status})),a=Object(b.a)({initialValues:{email:"",password:"",rememberMe:!1},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required",e.password?e.password.length<6&&(t.password="Must be 5 characters or more"):t.password="Field is required"}(e,t),t},onSubmit:function(t){var r;e((r=Object(g.a)({},t),function(e){e(V("loading")),A(Object(g.a)({},r)).then((function(t){e(V("succeeded")),e(I(t.data)),e(M(!0))})).catch((function(t){e(V("failed"));var r=t.response?t.response.data.error:t.message;console.log(r)}))}))}});return t?n.a.createElement(v.a,{to:"/profile"}):n.a.createElement("div",{className:U.a.formContainer},n.a.createElement("form",{onSubmit:a.handleSubmit},n.a.createElement(R,Object.assign({id:"email",type:"text",placeholder:"Enter your email"},a.getFieldProps("email"))),a.errors.email?n.a.createElement("div",{className:U.a.error},a.errors.email):null,n.a.createElement(R,Object.assign({id:"password",placeholder:"password",type:"password"},a.getFieldProps("password"))),a.errors.password?n.a.createElement("div",{className:U.a.error},a.errors.password):null,"remember me ",n.a.createElement("input",Object.assign({type:"checkbox"},a.getFieldProps("rememberMe"))),"loading"===r?n.a.createElement($,null):n.a.createElement(j,{type:"submit",name:"Sign In"})))},J=r(13),B=r.n(J),W={isRegistered:!1,serverError:"",status:"idle"},z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return{type:"REGISTER_USER",isRegistered:e,error:t}},K=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return e.register})),r=t.isRegistered,o=t.serverError,i=Object(y.c)((function(e){return e.loader.status})),s=Object(b.a)({initialValues:{email:"",password:"",repeatPassword:""},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required",e.password?e.password.length<6&&(t.password="Must be 5 characters or more"):t.password="Field is required",(null===e||void 0===e?void 0:e.repeatPassword)?e.repeatPassword.length<6&&(t.password="Must be 5 characters or more"):t.repeatPassword="Field is required"}(e,t),t},onSubmit:function(t){var r,a;e((r=t.email,a=t.password,function(e){e(V("loading")),T(r,a).then((function(t){e(V("succeeded")),e(z(!0))})).catch((function(t){e(V("failed")),e(z(!1,t.response.data.error))}))}))}});if(Object(a.useEffect)((function(){return function(){e(z(!1))}}),[]),r)return n.a.createElement(v.a,{to:"/login"});var l=o?n.a.createElement("div",{className:B.a.error},o):null;return n.a.createElement("div",{className:B.a.containerForm},n.a.createElement("form",{className:B.a.form,onSubmit:s.handleSubmit},n.a.createElement(R,Object.assign({type:"text",id:"email",placeholder:"Email"},s.getFieldProps("email"))),s.errors.email?n.a.createElement("div",{className:B.a.error},s.errors.email):null,n.a.createElement(R,Object.assign({type:"password",id:"password",placeholder:"Password"},s.getFieldProps("password"))),s.errors.password?n.a.createElement("div",{className:B.a.error},s.errors.password):null,n.a.createElement(R,Object.assign({type:"password",id:"repeatPassword",placeholder:"Repeat password"},s.getFieldProps("repeatPassword"))),s.errors.repeatPassword?n.a.createElement("div",{className:B.a.error},s.errors.repeatPassword):null,"loading"===i?n.a.createElement($,null):n.a.createElement(j,{type:"submit",name:"Register"})),l)},Y={email:"",serverResponse:"",serverError:"",status:"idle"},Q=function(e){return{type:"SAVE_SERVER_RESPONSE",answer:e}},X=function(e){return{type:"SAVE_SERVER_ERROR",error:e}},ee=r(24),te=r.n(ee),re=function(){var e=Object(y.c)((function(e){return e.passwordRecover})),t=e.serverResponse,r=e.serverError,a=Object(y.c)((function(e){return e.loader.status})),o=Object(y.b)(),i=Object(b.a)({initialValues:{email:""},validate:function(e){var t={};return function(e,t){e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Field is required"}(e,t),t},onSubmit:function(e){var t={email:e.email,from:"test-front-admin",message:'<div style="background-color: gold; padding: 15px">Password recover link:\n                    <a href="https://alekseidarafeichyk.github.io/cards/#/new_password/$token$">link</a>\n                </div>'};o(function(e){return function(t){t(V("loading")),C(e).then((function(r){t(V("succeeded")),t({type:"EMAIL_TO_CHANGE_PASSWORD",email:e.email}),t(Q(r.data.info))})).catch((function(e){t(V("failed")),t(X(e.response.data.error))}))}}(t))}});return n.a.createElement("div",{className:te.a.forgotStyle},n.a.createElement("form",{onSubmit:i.handleSubmit,className:te.a.formForgot},n.a.createElement("div",null,"Your Email:"),n.a.createElement(R,Object.assign({placeholder:"Email",id:"email",name:"email",type:"email",onFocus:function(){o(Q("")),o(X(""))}},i.getFieldProps("email"))),i.errors.email?n.a.createElement("div",{className:te.a.error},i.errors.email):null,n.a.createElement("div",null,n.a.createElement(j,{type:"submit",name:"Send",disabled:"loading"===a||!!r||!!t}))),"loading"===a?n.a.createElement($,null):null,t||r)},ae=function(){return n.a.createElement("div",null,"NewPassword")},ne=function(){var e=Object(y.c)((function(e){return e.login.isAuth})),t=Object(y.c)((function(e){return e.profile})),r=Object(y.c)((function(e){return e.loader.status})),a=Object(y.b)();if(!e)return n.a.createElement(v.a,{to:"/login"});return n.a.createElement("div",null,n.a.createElement("div",null,n.a.createElement("span",null,"name : ",t.name)),n.a.createElement("div",null,n.a.createElement("span",null,"avatar : ",t.avatar)),n.a.createElement("div",null,n.a.createElement("span",null,"publicCardPacksCount : ",t.publicCardPacksCount)),"loading"===r?n.a.createElement($,null):n.a.createElement(j,{onClick:function(){a((function(e){e(V("loading")),F().then((function(t){e(V("succeeded")),e(I({_id:"",email:"",rememberMe:!1,isAdmin:!1,name:"",verified:!1,publicCardPacksCount:0,created:"",updated:"",__v:0,token:"",tokenDeathTime:0,avatar:"Some avatar"})),e(M(!1))})).catch((function(t){e(V("failed"));var r=t.response?t.response.data.error:t.message;console.log(r)}))}))},name:"Logout"}))},oe=function(){return n.a.createElement("div",{className:E.a.routes},n.a.createElement(v.b,{path:"/login",render:function(){return n.a.createElement(H,null)}}),n.a.createElement(v.b,{path:"/register",render:function(){return n.a.createElement(K,null)}}),n.a.createElement(v.b,{path:"/password_recovery",render:function(){return n.a.createElement(re,null)}}),n.a.createElement(v.b,{path:"/new_password",render:function(){return n.a.createElement(ae,null)}}),n.a.createElement(v.b,{path:"/profile",render:function(){return n.a.createElement(ne,null)}}))},ie=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(p,null),n.a.createElement(oe,null))},se=function(){var e=Object(y.b)();return Object(a.useEffect)((function(){e((function(e){k().then((function(t){e(I(t.data)),e(M(!0))})).catch((function(e){var t=e.response?e.response.data.error:e.message;console.log(t)}))}))}),[]),n.a.createElement("div",{className:"App"},n.a.createElement(c.a,null,n.a.createElement(ie,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=r(16),ce=r(50),ue={},de=Object(le.c)({login:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN/SET_IS_AUTH":return Object(g.a)({},e,{isAuth:t.isAuth});default:return e}},newPassword:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;return t.type,e},passwordRecover:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EMAIL_TO_CHANGE_PASSWORD":return Object(g.a)({},e,{email:t.email});case"SAVE_SERVER_RESPONSE":return Object(g.a)({},e,{serverResponse:t.answer});case"SAVE_SERVER_ERROR":return Object(g.a)({},e,{serverError:t.error});default:return e}},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_USER":return Object(g.a)({},e,{isRegistered:t.isRegistered,serverError:t.error?t.error:""});default:return e}},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-DELETE-USER":return Object(g.a)({},e,{},t.user);default:return e}},loader:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATUS":return Object(g.a)({},e,{status:t.status});default:return e}}}),me=Object(le.d)(de,Object(le.a)(ce.a)),pe=me;window.store=me,i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(y.a,{store:pe},n.a.createElement(se,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.91173aaa.chunk.js.map