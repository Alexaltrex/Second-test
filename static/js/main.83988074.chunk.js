(this.webpackJsonpmaxfarseer2=this.webpackJsonpmaxfarseer2||[]).push([[0],{258:function(e,t,a){e.exports=a(403)},403:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(13),o=a.n(i),c=a(19),l=a(48),s=a(18),u=a(203),m=a(24),d=a.n(m),p=a(49),f=a(16),E=a(204),g=a.n(E).a.create({baseURL:"https://mysterious-reef-29460.herokuapp.com/api/v1/"}),b=function(){return Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("news");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})))()},h=function(e,t){return Object(p.a)(d.a.mark((function a(){var n;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.post("validate",{email:e,password:t});case 2:return n=a.sent,a.abrupt("return",n.data);case 4:case"end":return a.stop()}}),a)})))()},v=function(e){return Object(p.a)(d.a.mark((function t(){var a;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("user-info/".concat(e));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})))()},O=a(81),w={open:!0,isLoading:!1,isLanError:!1},S=function(e){return{type:"APP/SET_OPEN",open:e}},y=function(e){return{type:"APP/TOGGLE_LOADING",isLoading:e}},x=function(e){return{type:"AUTH/SET_IS_LAN_ERROR",isLanError:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"APP/SET_OPEN":return Object(f.a)({},e,{open:t.open});case"APP/TOGGLE_LOADING":return Object(f.a)({},e,{isLoading:t.isLoading});case"AUTH/SET_IS_LAN_ERROR":return Object(f.a)({},e,{isLanError:t.isLanError});default:return e}},I={currentItem:0},T=function(e){return{type:"SIDEBAR/SET_CURRENT_ITEM",currentItem:e}},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIDEBAR/SET_CURRENT_ITEM":return Object(f.a)({},e,{currentItem:t.currentItem});default:return e}},L={isAuth:!1,userId:null,loginStatus:null,errorText:null,userInfo:null,userInfoStatus:null},_=function(e){return{type:"AUTH/SET_IS_AUTH",isAuth:e}},k=function(e){return{type:"AUTH/SET_USER_ID",userId:e}},A=function(){return{type:"AUTH/LOGOUT"}},R=function(e){return{type:"AUTH/SET_LOGIN_STATUS",loginStatus:e}},U=function(e){return{type:"AUTH/SET_USER_INFO",userInfo:e}},C=function(e){return{type:"AUTH/SET_USER_INFO_STATUS",userInfoStatus:e}},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH/SET_IS_AUTH":return Object(f.a)({},e,{isAuth:t.isAuth});case"AUTH/SET_USER_ID":return Object(f.a)({},e,{userId:t.userId});case"AUTH/LOGOUT":return Object(f.a)({},e,{isAuth:!1,userId:null});case"AUTH/SET_LOGIN_STATUS":return Object(f.a)({},e,{loginStatus:t.loginStatus});case"AUTH/SET_ERROR_TEXT":switch(t.errorText){case"wrong_email_or_password":return Object(f.a)({},e,{errorText:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"});default:return e}case"AUTH/SET_USER_INFO":return Object(f.a)({},e,{userInfo:t.userInfo});case"AUTH/SET_USER_INFO_STATUS":return Object(f.a)({},e,{userInfoStatus:t.userInfoStatus});default:return e}},H={news:[]},F=function(e){return{type:"NEWS/SET_NEWS",news:e}},G=function(e){return{type:"NEWS/TOGGLE_FAVORITE",id:e}},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"NEWS/SET_NEWS":for(var a=[],n=0;n<t.news.length;n++)a.push(Object(f.a)({},t.news[n],{favorite:!1}));return Object(f.a)({},e,{news:a});case"NEWS/TOGGLE_FAVORITE":return Object(f.a)({},e,{news:e.news.map((function(e){return e.id===t.id?Object(f.a)({},e,{favorite:!e.favorite}):e}))});default:return e}},P=a(201),W=Object(s.c)({auth:B,news:D,sidebar:N,app:j,form:P.a}),M=Object(s.d)(W,Object(s.a)(u.a));window.store=M;var z=M,q=a(69),J=a(2),V=a(443),K=a(445),X=a(446),Z=a(30),$=a(447),Q=a(209),Y=a.n(Q),ee=a(448),te=Object(V.a)((function(e){return{appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},title:{flexGrow:1}}})),ae=function(e){var t=e.open,a=e.setOpen,n=e.isAuth,i=e.logout,o=te();return r.a.createElement(K.a,{position:"fixed",className:Object(J.default)(o.appBar,Object(q.a)({},o.appBarShift,t))},r.a.createElement(X.a,null,r.a.createElement($.a,{color:"inherit","aria-label":"open drawer",onClick:function(){a(!0)},edge:"start",className:Object(J.default)(o.menuButton,t&&o.hide)},r.a.createElement(Y.a,null)),r.a.createElement(Z.a,{variant:"h6",noWrap:!0,className:o.title},"React is awesome"),r.a.createElement(ee.a,{color:"inherit",component:l.b,to:"/login",onClick:function(){n&&i()}},n?"\u0412\u044b\u0439\u0442\u0438":"\u0412\u043e\u0439\u0442\u0438")))},ne=S,re=A,ie=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,open:e.app.open}}),{logout:re,setOpen:ne})(ae),oe=a(17),ce=a(449),le=Object(V.a)({circular:{display:"flex",justifyContent:"center",marginTop:20}}),se=function(){var e=le();return r.a.createElement("div",{className:e.circular},r.a.createElement(ce.a,{size:100,color:"secondary"}))},ue=a(224),me=Object(V.a)({row:{display:"grid",paddingTop:3,paddingBottom:3,gridTemplateColumns:"1fr 1fr",borderBottom:"1px #ccc solid",paddingLeft:10,"&:nth-of-type(odd)":{backgroundColor:"#ccc"}}}),de=function(e){var t=me(),a=e.leftContent,r=e.rightContent;return n.createElement("div",{className:t.row},n.createElement(Z.a,{variant:"subtitle1"},a),n.createElement(Z.a,{variant:"h6",color:"primary"},r))},pe=a(472),fe=Object(ue.a)({img:{width:30,display:"inline-block"},title:{marginBottom:20},chip:{marginRight:5},link:{textDecoration:"none",marginRight:5}}),Ee=function(e){var t=fe(),a=e.userId,i=e.getUserInfo,o=e.isLoading,c=e.userInfo,l=e.userInfoStatus;if(Object(n.useEffect)((function(){a&&i(a)}),[a,i]),o)return r.a.createElement(se,null);var s=c?c.languages.map((function(e,a){return r.a.createElement(pe.a,{label:e,color:"primary",key:a,className:t.chip})})):null,u=c?c.social.sort((function(e,t){return"web"===e.label?-1:"web"===t.label?1:0})).map((function(e,a){return r.a.createElement("a",{key:a,href:e.link,target:"_blank",rel:"noopener noreferrer",className:t.link},r.a.createElement("img",{src:"".concat("/Second-test","/").concat(e.label,".png"),className:t.img,alt:""}))})):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{className:t.title,align:"center",color:"primary",variant:"h4"},"\u041f\u0440\u043e\u0444\u0438\u043b\u044c"),c&&"ok"===l&&r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(de,{leftContent:"\u0413\u043e\u0440\u043e\u0434:",rightContent:c.city}),r.a.createElement(de,{leftContent:"\u0417\u043d\u0430\u043d\u0438\u0435 \u044f\u0437\u044b\u043a\u043e\u0432:",rightContent:s}),r.a.createElement(de,{leftContent:"\u0421\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0435 \u0441\u0435\u0442\u0438:",rightContent:u}))),"err"===l&&r.a.createElement("div",null,"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"))},ge=Object(c.b)((function(e){return{userInfo:e.auth.userInfo,userId:e.auth.userId,userInfoStatus:e.auth.userInfoStatus,isLoading:e.app.isLoading}}),{getUserInfo:function(e){return function(){var t=Object(p.a)(d.a.mark((function t(a){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a(y(!0)),a(x(!1)),t.next=5,v(e);case 5:n=t.sent,a(y(!1)),"ok"===n.status?(a(U(n.data)),a(C("ok")),a(y(!1))):(a(C("err")),a(y(!1))),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),a(x(!0));case 13:return t.prev=13,a(y(!1)),t.finish(13);case 16:case"end":return t.stop()}}),t,null,[[0,10,13,16]])})));return function(e){return t.apply(this,arguments)}}()}})(Ee),be=a(199),he=a(200),ve=a(154),Oe=a(213),we=a.n(Oe),Se=a(470),ye=Object(ue.a)({root:{position:"relative"},iconLeft:{position:"absolute",left:-5,top:"50%",transform:"translate(-100%, -70%)"},textField:{width:300,marginBottom:20}}),xe=function(e){var t=e.icon,a=e.label,n=e.input,i=e.placeholder,o=e.meta,c=o.touched,l=o.invalid,s=o.error,u=e.disabled,m=ye();return r.a.createElement("div",{className:m.root},r.a.createElement("div",{className:m.iconLeft},t),r.a.createElement(Se.a,Object.assign({className:m.textField,disabled:u,variant:"outlined",label:a,placeholder:i,error:c&&l,helperText:c&&s},n)))},je=a(58),Ie=a(450),Te=a(475),Ne=a(452),Le=a(211),_e=a.n(Le),ke=a(212),Ae=a.n(ke),Re=a(474),Ue=a(210),Ce=a.n(Ue),Be=Object(ue.a)({root:{position:"relative"},iconLeft:{position:"absolute",left:-5,top:"50%",transform:"translate(-100%, -50%)"},textField:{width:300,marginBottom:20},error:{paddingLeft:14,paddingTop:2},input:{height:56}}),He=function(e){var t=e.label,a=e.input,i=e.placeholder,o=e.meta,c=e.disabled,l=Object(n.useState)(!1),s=Object(je.a)(l,2),u=s[0],m=s[1],d=Object(n.useState)(""),p=Object(je.a)(d,2),f=p[0],E=p[1],g=Be();return r.a.createElement("div",{className:g.root},r.a.createElement(Ce.a,{className:g.iconLeft}),r.a.createElement(Ie.a,{className:g.textField,variant:"outlined"},r.a.createElement(Te.a,{htmlFor:"outlined-adornment-password"},t),r.a.createElement(Re.a,Object.assign({className:g.input,disabled:c,id:"outlined-adornment-password",placeholder:i,type:u?"text":"password",value:f,error:o.touched&&o.invalid,onChange:function(e){E(e.target.value)}},a,{endAdornment:r.a.createElement(Ne.a,{position:"end"},r.a.createElement($.a,{"aria-label":"toggle password visibility",onClick:function(){m(!u)},onMouseDown:function(e){e.preventDefault()},edge:"end"},u?r.a.createElement(_e.a,null):r.a.createElement(Ae.a,null))),labelWidth:130})),o.touched&&o.invalid&&r.a.createElement(Z.a,{color:"error",variant:"caption",className:g.error},o.error)))},Fe=Object(ue.a)({root:{display:"flex",justifyContent:"center"},paper:{width:400,display:"flex",flexDirection:"column",alignItems:"center",padding:10,paddingBottom:20,borderRadius:15},error:{width:300,marginBottom:10},button:{marginBottom:10,width:300},title:{marginBottom:20},fieldWrapper:{marginBottom:20}}),Ge=function(e){return/^\s+$/.test(e)},De=Object(he.a)({form:"login",validate:function(e){var t={};return Ge(e.email)&&(t.email="email field is empty"),e.email||(t.email="field is required"),Ge(e.password)&&(t.password="password field is empty"),e.password||(t.password="field is required"),t}})((function(e){var t=e.handleSubmit,a=e.submitting,n=e.pristine,i=e.error,o=e.isLoading,c=Fe();return r.a.createElement("div",{className:c.root},r.a.createElement(ve.a,{elevation:6,className:c.paper},r.a.createElement("form",{onSubmit:t},r.a.createElement(Z.a,{className:c.title,align:"center",color:"primary",variant:"h4"},"\u0412\u043e\u0439\u0442\u0438 \u0432 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"),r.a.createElement("div",null,r.a.createElement(be.a,{disabled:o,name:"email",component:xe,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 email",label:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430 (max@test.com)",icon:r.a.createElement(we.a,null)})),r.a.createElement("div",null,r.a.createElement(be.a,{name:"password",disabled:o,component:He,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u043f\u0430\u0440\u043e\u043b\u044c",label:"\u041f\u0430\u0440\u043e\u043b\u044c (12345)"})),i&&r.a.createElement(Z.a,{color:"error",variant:"subtitle1",className:c.error},i),r.a.createElement("div",null,r.a.createElement(ee.a,{type:"submit",color:"primary",variant:"contained",className:c.button,disabled:a||n||o},"\u0412\u043e\u0439\u0442\u0438")))))})),Pe=function(e){var t=e.login,a=e.isLoading;return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,{onSubmit:function(e){t(e.email,e.password)},isLoading:a}),a&&r.a.createElement(se,null))},We=Object(c.b)((function(e){return{loginStatus:e.auth.loginStatus,errorText:e.auth.errorText,isLoading:e.app.isLoading}}),{login:function(e,t){return function(){var a=Object(p.a)(d.a.mark((function a(n){var r;return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,n(y(!0)),a.next=4,h(e,t);case 4:r=a.sent,n(x(!1)),n(R(r.status)),"ok"===r.status?(n(_(!0)),n(k(r.data.id)),n(T(2))):"err"===r.status&&(n(Object(O.a)("login")),n(Object(O.b)("login",{_error:"\u0418\u043c\u044f \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c \u0432\u0432\u0435\u0434\u0435\u043d\u044b \u043d\u0435 \u0432\u0435\u0440\u043d\u043e"}))),a.next=13;break;case 10:a.prev=10,a.t0=a.catch(0),n(x(!0));case 13:return a.prev=13,n(y(!1)),a.finish(13);case 16:case"end":return a.stop()}}),a,null,[[0,10,13,16]])})));return function(e){return a.apply(this,arguments)}}()}})(Pe),Me=a(453),ze=a(454),qe=a(456),Je=a(457),Ve=a(121),Ke=a.n(Ve),Xe=a(455),Ze=a(146),$e=a.n(Ze),Qe=Object(ue.a)({cardRoot:{marginBottom:10},cardHeaderRoot:{backgroundColor:$e.a[900]},cardHeaderTitle:{color:"white"},favorite:{color:"red"}}),Ye=function(e){var t=e.newItem,a=e.toggleFavorite,i=Qe(),o=Object(n.useState)(!1),c=Object(je.a)(o,2),l=c[0],s=c[1],u=t.text.length>60?"".concat(t.text.slice(0,60),"..."):t.text;return r.a.createElement(Me.a,{classes:{root:i.cardRoot}},r.a.createElement(ze.a,{title:t.title,classes:{root:i.cardHeaderRoot,title:i.cardHeaderTitle}}),!l&&r.a.createElement(Xe.a,{onClick:function(){s(!0),console.log("test")}},r.a.createElement(qe.a,null,r.a.createElement(Z.a,{variant:"body1",color:"textSecondary",component:"p"},u))),l&&r.a.createElement(qe.a,null,r.a.createElement(Z.a,{variant:"body1",color:"textSecondary",component:"p"},t.text)),r.a.createElement(Je.a,{disableSpacing:!0},r.a.createElement($.a,{"aria-label":"add to favorites",onClick:function(){a(t.id)}},r.a.createElement(Ke.a,{className:Object(J.default)(t.favorite&&i.favorite)}))))},et=a(462),tt=a(122),at=a.n(tt),nt=a(458),rt=a(459),it=a(460),ot=a(461),ct=Object(ue.a)({panel:{display:"flex",margin:10,marginBottom:20},panelItem:{marginRight:60,display:"flex",alignItems:"center"},panelItemTitle:{marginRight:10},favorite:{color:"red"},title:{marginBottom:20}}),lt=function(e){var t=e.news,a=e.isLoading,i=e.getNews,o=e.toggleFavorite,c=e.isLanError,s=e.setCurrentSidebarMenuItem,u=ct(),m=Object(n.useState)(!1),d=Object(je.a)(m,2),p=d[0],f=d[1],E=r.a.useState(!1),g=Object(je.a)(E,2),b=g[0],h=g[1];Object(n.useEffect)((function(){c&&h(!0)}),[c]);var v=t?t.map((function(e){return p?e.favorite?r.a.createElement(Ye,{key:e.id,newItem:e,toggleFavorite:o}):null:r.a.createElement(Ye,{key:e.id,newItem:e,toggleFavorite:o})})):null;Object(n.useEffect)((function(){i()}),[i]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(nt.a,{disableBackdropClick:!0,disableEscapeKeyDown:!0,maxWidth:"xs","aria-labelledby":"confirmation-dialog-title",open:b},r.a.createElement(rt.a,{id:"confirmation-dialog-title"},"Error"),r.a.createElement(it.a,null,"\u0421\u0435\u0440\u0432\u0435\u0440 \u043d\u0435\u0434\u043e\u0441\u0442\u0443\u043f\u0435\u043d"),r.a.createElement(ot.a,null,r.a.createElement(ee.a,{color:"primary",component:l.b,to:"/about",onClick:function(){s(1)}},"Ok"))),r.a.createElement(Z.a,{className:u.title,align:"center",color:"primary",variant:"h4"},"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),a||!t?r.a.createElement(se,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:u.panel},r.a.createElement("div",{className:u.panelItem},r.a.createElement(Z.a,{variant:"subtitle1",color:"primary",component:"span",className:u.panelItemTitle},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u043d\u043e\u0432\u043e\u0441\u0442\u0435\u0439:"),r.a.createElement(et.a,{badgeContent:t.length,color:"primary",max:99999,showZero:!0},r.a.createElement(at.a,null))),r.a.createElement("div",{className:u.panelItem},r.a.createElement(Z.a,{variant:"subtitle1",color:"primary",component:"span",className:u.panelItemTitle},"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0442\u043c\u0435\u0447\u0435\u043d\u043d\u044b\u0435"),r.a.createElement($.a,{"aria-label":"add to favorites",onClick:function(){f(!p)}},r.a.createElement(Ke.a,{className:Object(J.default)(p&&u.favorite)})))),r.a.createElement("div",null,v)))},st=G,ut=T,mt=Object(c.b)((function(e){return{news:e.news.news,isLoading:e.app.isLoading,isLanError:e.app.isLanError}}),{getNews:function(){return function(){var e=Object(p.a)(d.a.mark((function e(t){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(y(!0)),e.next=4,b();case 4:"ok"===(a=e.sent).status&&t(F(a.data)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),t(x(!0));case 11:return e.prev=11,t(y(!1)),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(t){return e.apply(this,arguments)}}()},toggleFavorite:st,setCurrentSidebarMenuItem:ut})(lt),dt=a(214),pt=a.n(dt),ft=a(451),Et=a(463),gt=a(464),bt=a(465),ht=a(466),vt=function(e){var t=e.text,a=e.color;return r.a.createElement(Et.a,null,r.a.createElement(gt.a,null,r.a.createElement(pt.a,{color:a})),r.a.createElement(bt.a,{primary:t}))},Ot=function(){var e=["\u0418\u043d\u0442\u0435\u0440\u0444\u0435\u0439\u0441 \u0441\u043e\u0437\u0434\u0430\u043d \u043d\u0430 \u0431\u0430\u0437\u0435 React","\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 state - \u0433\u043b\u043e\u0431\u0430\u043b\u044c\u043d\u044b\u043c: redux, react-redux, \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u044b\u043c: react hook useState","\u041f\u043e\u0431\u043e\u0447\u043d\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b - react hook useEffect, redux-thunk","\u0420\u043e\u0443\u0442\u0438\u043d\u0433 - react-router-dom","\u0421\u0435\u0442\u0435\u0432\u044b\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u044b: axios","\u0420\u0430\u0431\u043e\u0442\u0430 \u0441 \u0444\u043e\u0440\u043c\u0430\u043c\u0438 - redux-form","\u0414\u0438\u0437\u0430\u0439\u043d - Material-UI","\u0422\u0438\u043f\u0438\u0437\u0430\u0446\u0438\u044f - typescript"].map((function(e,t){return r.a.createElement(vt,{key:t,text:e,color:t%2===0?"primary":"secondary"})}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Z.a,{variant:"h6"},r.a.createElement(ht.a,{href:"https://github.com/maxfarseer/tz-webinars/tree/tz-2-react-redux-router-async",onClick:function(e){return e.preventDefault()}},"\u0412\u0442\u043e\u0440\u043e\u0435 \u0442\u0435\u0441\u0442\u043e\u0432\u043e\u0435 \u0437\u0430\u0434\u0430\u043d\u0438\u0435")," \u041c\u0430\u043a\u0441\u0438\u043c\u0430 \u041f\u0430\u0446\u0438\u0430\u043d\u0441\u043a\u043e\u0433\u043e.\u0423\u0440\u043e\u0432\u0435\u043d\u044c \u0440\u0430\u0431\u043e\u0442\u044b \u0441 \u0430\u0441\u0438\u043d\u0445\u0440\u043e\u043d\u043d\u044b\u043c\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u043c\u0438. \u041f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u0435 \u0432\u0437\u0430\u0438\u043c\u043e\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u044f \u043a\u043b\u0438\u0435\u043d\u0442\u0430 \u0438 \u0441\u0435\u0440\u0432\u0435\u0440\u0430."),r.a.createElement(ft.a,null,e))},wt=Object(V.a)((function(e){return{drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}})),St=function(e){var t=e.isAuth,a=e.open,n=wt();return r.a.createElement("main",{className:Object(J.default)(n.content,Object(q.a)({},n.contentShift,a))},r.a.createElement("div",{className:n.drawerHeader}),r.a.createElement(oe.b,{path:"/about",component:Ot}),r.a.createElement(oe.b,{path:"/news",component:mt}),r.a.createElement(oe.b,{path:"/profile"},t?r.a.createElement(ge,null):r.a.createElement(oe.a,{to:"/login"})),r.a.createElement(oe.b,{path:"/login"},t?r.a.createElement(oe.a,{to:"/profile"}):r.a.createElement(We,null)))},yt=Object(c.b)((function(e){return{isAuth:e.auth.isAuth,open:e.app.open}}),{})(St),xt=a(467),jt=a(469),It=a(35),Tt=a(471),Nt=a(468),Lt=a(217),_t=a.n(Lt),kt=a(218),At=a.n(kt),Rt=a(215),Ut=a.n(Rt),Ct=a(216),Bt=a.n(Ct),Ht=function(e){var t=e.ownIndex,a=e.to,n=e.primary,i=e.icon,o=e.currentItem,c=e.setCurrentSidebarMenuItem;return r.a.createElement("li",null,r.a.createElement(Et.a,{onClick:function(){c(t)},selected:t===o,button:!0,component:l.b,to:a},i?r.a.createElement(Ut.a,{color:"primary"},i):null,r.a.createElement(Bt.a,{primary:n})))},Ft=T,Gt=Object(c.b)((function(e){return{currentItem:e.sidebar.currentItem}}),{setCurrentSidebarMenuItem:Ft})(Ht),Dt=a(220),Pt=a.n(Dt),Wt=a(219),Mt=a.n(Wt),zt=Object(V.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(f.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},title:{flexGrow:1}}})),qt=function(e){var t=e.setOpen,a=e.open,n=zt(),i=Object(It.a)();return r.a.createElement(Tt.a,{className:n.drawer,variant:"persistent",anchor:"left",open:a,classes:{paper:n.drawerPaper}},r.a.createElement("div",{className:n.drawerHeader},r.a.createElement($.a,{onClick:function(){t(!1)}},"ltr"===i.direction?r.a.createElement(_t.a,null):r.a.createElement(At.a,null))),r.a.createElement(Nt.a,null),r.a.createElement(ft.a,null,r.a.createElement(Gt,{ownIndex:1,to:"/about",primary:"\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435",icon:r.a.createElement(Mt.a,null)}),r.a.createElement(Gt,{ownIndex:2,to:"/profile",primary:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",icon:r.a.createElement(Pt.a,null)}),r.a.createElement(Gt,{ownIndex:3,to:"/news",primary:"\u041d\u043e\u0432\u043e\u0441\u0442\u0438",icon:r.a.createElement(at.a,null)})))},Jt=S,Vt=Object(c.b)((function(e){return{open:e.app.open}}),{setOpen:Jt})(qt),Kt=Object(ue.a)((function(){return Object(xt.a)({root:{display:"flex"}})})),Xt=function(){var e=Kt();return r.a.createElement("div",{className:e.root},r.a.createElement(jt.a,null),r.a.createElement(ie,null),r.a.createElement(Vt,null),r.a.createElement(yt,null))};o.a.render(r.a.createElement(l.a,null,r.a.createElement(c.a,{store:z},r.a.createElement(Xt,null))),document.getElementById("root"))}},[[258,1,2]]]);
//# sourceMappingURL=main.83988074.chunk.js.map