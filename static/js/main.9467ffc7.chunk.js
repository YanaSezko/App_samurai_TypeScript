(this["webpackJsonpit-incubator"]=this["webpackJsonpit-incubator"]||[]).push([[0],{10:function(e,t,n){"use strict";n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i}));var r=n(130),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2b6e2e12-95e4-4959-af89-fb3a85f352e8"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),a.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}})},saveProfile:function(e){return a.put("profile",e)}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r})},logout:function(){return a.delete("auth/login")}},i={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},126:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(37),a=n(8),o={messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"How are you?"}],dialogs:[{id:1,name:"Yana"},{id:2,name:"Olya"},{id:3,name:"Vova"},{id:4,name:"Alex"},{id:5,name:"Zlata"}],newMessageBody:""},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},133:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__EGUfI"}},134:function(e,t,n){e.exports=n.p+"static/media/preloader.2569dfb7.svg"},162:function(e,t,n){e.exports=n(288)},167:function(e,t,n){},168:function(e,t,n){},21:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return p}));var r=n(41),a=n(0),o=n.n(a),u=n(85),c=n(45),i=n.n(c),s=function(e){e.input;var t=e.meta,n=e.children,a=(Object(r.a)(e,["input","meta","children"]),t.touched&&t.error);return o.a.createElement("div",{className:i.a.formControl+" "+(a?i.a.error:"")},o.a.createElement("div",null,n),a&&o.a.createElement("span",null,t.error))},l=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("textarea",Object.assign({},t,n)))},f=function(e){var t=e.input,n=(e.meta,e.child,Object(r.a)(e,["input","meta","child"]));return o.a.createElement(s,e,o.a.createElement("input",Object.assign({},t,n)))},p=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return o.a.createElement("div",null,o.a.createElement(u.a,Object.assign({placeholder:e,name:t,validators:n,component:r},a)),c)}},288:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(62),u=n.n(o),c=(n(167),n(31)),i=n(32),s=n(33),l=n(34),f=(n(168),n(52)),p=n.n(f),d=n(13),m=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(d.b,{to:"/profile",activeClassName:p.a.active},"Profile")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"/users",activeClassName:p.a.active},"Users")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"#"},"News")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"#"},"Music")),a.a.createElement("li",null,a.a.createElement(d.b,{to:"#"},"Settings"))))},g=n(9),h=n(89),E=n.n(h),v=n(53),b=n.n(v),O=function(e){return a.a.createElement("header",{className:E.a.header},a.a.createElement("img",{src:b.a,alt:"logo"}),a.a.createElement("div",{className:E.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"LOGOUT")):a.a.createElement("div",null,a.a.createElement(d.b,{to:"/login"},"Login"),a.a.createElement(g.a,{to:"/login"}))))},w=n(15),S=n(6),j=n.n(S),P=n(12),_=n(8),C=n(26),y=n(10),U={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},T=function(e,t,n,r){return{type:"/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},I=function(e){return{type:"/auth/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},x=function(){return function(){var e=Object(P.a)(j.a.mark((function e(t){var n,r,a,o,u;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,u=r.login,t(T(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(){return function(){var e=Object(P.a)(j.a.mark((function e(t){var n,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.c.getCaptchaUrl();case 2:n=e.sent,r=n.data.url,t(I(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/SET_USER_DATA":case"/auth/GET_CAPTCHA_URL_SUCCESS":return Object(_.a)({},e,{},t.payload);default:return e}},N=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(O,this.props)}}]),n}(a.a.Component),L=Object(w.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,logout:e.auth.logout}}),{logout:function(){return function(){var e=Object(P.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.logout();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(N),F=n(127),G=n(21),z=n(63),R=n(45),M=n.n(R),D=Object(F.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return a.a.createElement("form",{onSubmit:t},Object(G.c)("Email","email",[z.b],G.a),Object(G.c)("Password","password",[z.b],G.a,{type:"password"}),Object(G.c)(null,"rememberMe",{},G.a,{type:"checkbox"},"remember me"),r&&a.a.createElement("img",{src:r}),r&&Object(G.c)("Symbols from image","captcha",[z.b],G.a,{}),n&&a.a.createElement("div",{className:M.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),H=Object(w.b)((function(e){return{captchaUrl:e.auth.captchaUrl,isAuth:e.auth.isAuth}}),{login:function(e,t,n,r){return function(){var a=Object(P.a)(j.a.mark((function a(o){var u,c;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,y.a.login(e,t,n,r);case 2:0===(u=a.sent).data.resultCode?o(x()):(10===u.data.resultCode&&o(k()),c=u.data.messages.length>0?u.data.messages[0]:"some error",o(Object(C.a)("login",{_error:c})));case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(D,{onSubmit:function(t){e.login(t.email,t.password,t.rememberMe,t.captcha)}}))})),W=n(41),B=n(65),V=n(95),X=n(93),Y=n.n(X),Z=n(132),J=n.n(Z),q=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),d=Object(r.useState)(1),m=Object(V.a)(d,2),g=m[0],h=m[1],E=(g-1)*i+1,v=g*i;return a.a.createElement("div",null,g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:J()(Object(B.a)({},Y.a.selected,o===e),Y.a.pageNumber),onClick:function(t){u(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},K=n(133),Q=n.n(K),$=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(d.b,{to:"/profile/"+t.id},a.a.createElement("img",{className:Q.a.userPhoto,src:null!=t.photos.small?t.photos.small:b.a}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"UnFollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},ee=function(e){for(var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,u=e.users,c=Object(W.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]),i=Math.ceil(n/r),s=[],l=1;l<=i;l++)s.push(l);return a.a.createElement("div",null,a.a.createElement(q,{currentPage:t,onPageChanged:o,pageSize:r,totalItemsCount:n}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement($,{user:e,key:e.id,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow})}))))},te=n(37),ne={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},re=function(e){return{type:"FOLLOW",userId:e}},ae=function(e){return{type:"UNFOLLOW",userId:e}},oe=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ue=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},ce=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ie=function(){var e=Object(P.a)(j.a.mark((function e(t,n,r,a){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ce(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(ce(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(_.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(_.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(_.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(_.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(_.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(_.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(te.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},le=n(36),fe=n(7),pe=n(135),de=Object(pe.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),me=function(e){return e.usersPage.pageSize},ge=function(e){return e.usersPage.totalUsersCount},he=function(e){return e.usersPage.currentPage},Ee=function(e){return e.usersPage.isFetching},ve=function(e){return e.usersPage.followingInProgress},be=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(le.a,null):null,a.a.createElement(ee,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),Oe=Object(fe.d)(Object(w.b)((function(e){return{users:de(e),pageSize:me(e),totalUsersCount:ge(e),currentPage:he(e),isFetching:Ee(e),followingInProgress:ve(e)}}),{follow:function(e){return function(){var t=Object(P.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ie(n,e,y.d.follow.bind(y.d),re);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(P.a)(j.a.mark((function t(n){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ie(n,e,y.d.unfollow.bind(y.d),ae);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:oe,toggleFollowingProgress:ce,getUsers:function(e,t){return function(){var n=Object(P.a)(j.a.mark((function n(r){var a;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ue(!0)),r(oe(e)),n.next=4,y.d.getUsers(e,t);case 4:a=n.sent,r(ue(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(be),we={initialized:!1},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)({},e,{initialized:!0});default:return e}},je=n(94),Pe=n(126),_e=n(136),Ce=n(128),ye=Object(fe.c)({profilePage:je.b,dialogPage:Pe.a,usersPage:se,auth:A,form:Ce.a,app:Se}),Ue=Object(fe.e)(ye,Object(fe.a)(_e.a));window.store=Ue;var Te=function(e){return function(t){return a.a.createElement(a.a.Suspense,{fallback:a.a.createElement(le.a,null)},a.a.createElement(e,t))}},Ie=a.a.lazy((function(){return n.e(4).then(n.bind(null,295))})),xe=a.a.lazy((function(){return n.e(3).then(n.bind(null,294))})),ke=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).catchAllUnhandledErrors=function(e){e.reason,e.promise;alert("Some error occured")},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(L,null),a.a.createElement(m,null),a.a.createElement("main",{className:"app-wrapper-content"},a.a.createElement(g.d,null,a.a.createElement(g.b,{exact:!0,path:"/",render:function(){return a.a.createElement(g.a,{to:"/profile"})}}),a.a.createElement(g.b,{path:"/profile/:userId?",render:Te(xe)}),a.a.createElement(g.b,{path:"/dialogs",render:Te(Ie)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(Oe,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(H,null)}}),a.a.createElement(g.b,{path:"*",render:function(){return a.a.createElement("div",null,"404 NOT FOUND")}})))):a.a.createElement(le.a,null)}}]),n}(a.a.Component),Ae=Object(fe.d)(g.g,Object(w.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(x());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(ke),Ne=function(e){return a.a.createElement(d.a,null,a.a.createElement(w.a,{store:Ue},a.a.createElement(Ae,null)))};u.a.render(a.a.createElement(Ne,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(134),u=n.n(o);t.a=function(e){return a.a.createElement("img",{src:u.a})}},45:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3jvrX",error:"FormsControls_error__215TQ",formSummaryError:"FormsControls_formSummaryError__LwGbu"}},52:function(e,t,n){e.exports={nav:"Navdar_nav__2YGIV",active:"Navdar_active__1H7Vo"}},53:function(e,t,n){e.exports=n.p+"static/media/logo.50a503b3.png"},63:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is 30 symbols"}}},89:function(e,t,n){e.exports={header:"Header_header__1capV",loginBlock:"Header_loginBlock__EFdmg"}},93:function(e,t,n){e.exports={pageNumber:"Paginator_pageNumber__1awr0",selected:"Paginator_selected__2zWXS"}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"d",(function(){return d})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return h})),n.d(t,"f",(function(){return E}));var r=n(6),a=n.n(r),o=n(12),u=n(37),c=n(8),i=n(26),s=n(10),l={posts:[{id:1,message:"Hi, how are you?"},{id:2,message:"It's my first post"}],newPostText:"\u0442\u0435\u043a\u0441 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",profile:null,status:""},f=function(e){return{type:"ADD-POST",newPostText:e}},p=function(e){return{type:"SET_STATUS",status:e}},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.d.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.getStatus(e);case 2:r=t.sent,n(p(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(p(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.b.savePhoto(e);case 2:0===(r=t.sent).data.resultCode&&n({type:"SAVE_PHOTO_SUCCESS",photos:r.data.data.photos});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n,r){var o,u;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r().auth.userId,t.next=3,s.b.saveProfile(e);case 3:if(0!==(u=t.sent).data.resultCode){t.next=8;break}n(d(o)),t.next=10;break;case 8:return n(Object(i.a)("edit-profile",{_error:u.data.messages[0]})),t.abrupt("return",Promise.reject(u.data.messages[0]));case 10:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText};return Object(c.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});case"SAVE_PHOTO_SUCCESS":return Object(c.a)({},e,{profile:Object(c.a)({},e.profile,{photos:t.photos})});default:return e}}}},[[162,1,2]]]);
//# sourceMappingURL=main.9467ffc7.chunk.js.map