(this["webpackJsonpit-incubator"]=this["webpackJsonpit-incubator"]||[]).push([[0],{12:function(e,t,n){"use strict";n.d(t,"c",(function(){return o})),n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return c}));var r=n(128),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"2b6e2e12-95e4-4959-af89-fb3a85f352e8"}}),o={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.log("Obsolele method. Please  profileAPI object."),u.getProfile(e)}},u={getProfile:function(e){return a.get("profile/"+e)},getStatus:function(e){return a.get("profile/status/"+e)},updateStatus:function(e){return a.put("profile/status/",{status:e})}},c={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(){return a.delete("auth/login")}}},122:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(38),a=n(9),o={messages:[{id:1,message:"Hi"},{id:2,message:"Hello"},{id:3,message:"How are you?"}],dialogs:[{id:1,name:"Yana"},{id:2,name:"Olya"},{id:3,name:"Vova"},{id:4,name:"Alex"},{id:5,name:"Zlata"}],newMessageBody:""},u=function(e){return{type:"SEND-MESSAGE",newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEND-MESSAGE":var n=t.newMessageBody;return Object(a.a)({},e,{messages:[].concat(Object(r.a)(e.messages),[{id:4,message:n}])});default:return e}}},130:function(e,t,n){e.exports={selected:"Paginator_selected__2zWXS"}},131:function(e,t,n){e.exports={userPhoto:"Users_userPhoto__EGUfI"}},132:function(e,t,n){e.exports=n.p+"static/media/preloader.2569dfb7.svg"},160:function(e,t,n){e.exports=n(286)},165:function(e,t,n){},166:function(e,t,n){},28:function(e,t,n){e.exports={formControl:"FormsControls_formControl__3jvrX",error:"FormsControls_error__215TQ",formSummaryError:"FormsControls_formSummaryError__LwGbu"}},286:function(e,t,n){"use strict";n.r(t);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var r=n(0),a=n.n(r),o=n(59),u=n.n(o),c=(n(165),n(30)),i=n(31),s=n(32),l=n(33),f=(n(166),n(49)),p=n.n(f),m=n(11),d=function(){return a.a.createElement("nav",{className:p.a.nav},a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(m.b,{to:"/profile",activeClassName:p.a.active},"Profile")),a.a.createElement("li",null,a.a.createElement(m.b,{to:"/dialogs",activeClassName:p.a.active},"Messages")),a.a.createElement("li",null,a.a.createElement(m.b,{to:"/users",activeClassName:p.a.active},"Users")),a.a.createElement("li",null,a.a.createElement(m.b,{to:"#"},"News")),a.a.createElement("li",null,a.a.createElement(m.b,{to:"#"},"Music")),a.a.createElement("li",null,a.a.createElement(m.b,{to:"#"},"Settings"))))},g=n(8),h=n(87),E=n.n(h),v=n(60),b=n.n(v),w=function(e){return a.a.createElement("header",{className:E.a.header},a.a.createElement("img",{src:b.a,alt:"logo"}),a.a.createElement("div",{className:E.a.loginBlock},e.isAuth?a.a.createElement("div",null,e.login," - ",a.a.createElement("button",{onClick:e.logout},"LOGOUT")):a.a.createElement(m.b,{to:"/login"},"Login")))},O=n(14),S=n(7),P=n.n(S),j=n(16),_=n(9),y=n(50),C=n(12),I={userId:null,email:null,login:null,isAuth:!1},T=function(e,t,n,r){return{type:"/auth/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},U=function(){return function(){var e=Object(j.a)(P.a.mark((function e(t){var n,r,a,o,u;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,a=r.id,o=r.email,u=r.login,t(T(a,o,u,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"/auth/SET_USER_DATA":return Object(_.a)({},e,{},t.payload);default:return e}},k=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return a.a.createElement(w,this.props)}}]),n}(a.a.Component),N=Object(O.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,logout:e.auth.logout}}),{logout:function(){return function(){var e=Object(j.a)(P.a.mark((function e(t){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.a.logout();case 2:0===e.sent.data.resultCode&&t(T(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(k),A=n(123),L=n(124),F=n(61),G=n(69),z=n(28),R=n.n(z),M=Object(L.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error;return a.a.createElement("form",{onSubmit:t},a.a.createElement("div",null,a.a.createElement(A.a,{placeholder:"Email",name:"email",component:F.a,validate:[G.b]})),a.a.createElement("div",null,a.a.createElement(A.a,{placeholder:"Password",name:"password",type:"password",component:F.a,validate:[G.b]})),a.a.createElement("div",null,a.a.createElement(A.a,{type:"checkbox",name:"rememborMe",component:F.a})),n&&a.a.createElement("div",{className:R.a.formSummaryError},n),a.a.createElement("div",null,a.a.createElement("button",null,"Login")))})),D=Object(O.b)((function(e){return{isAuth:e.auth.isAuth}}),{login:function(e,t,n){return function(){var r=Object(j.a)(P.a.mark((function r(a){var o,u;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.a.login(e,t,n);case 2:0===(o=r.sent).data.resultCode?a(U()):(u=o.data.messages.length>0?o.data.messages[0]:"some error",a(Object(y.a)("login",{_error:u})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()}})((function(e){return e.isAuth?a.a.createElement(g.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"LOGIN"),a.a.createElement(M,{onSubmit:function(t){e.login(t.email,t.password,t.rememborMe)}}))})),H=n(48),W=n(125),B=n(130),V=n.n(B),X=function(e){for(var t=e.totalItemsCount,n=e.pageSize,o=e.currentPage,u=e.onPageChanged,c=e.portionSize,i=void 0===c?10:c,s=Math.ceil(t/n),l=[],f=1;f<=s;f++)l.push(f);var p=Math.ceil(s/i),m=Object(r.useState)(1),d=Object(W.a)(m,2),g=d[0],h=d[1],E=(g-1)*i+1,v=g*i;return a.a.createElement("div",null,g>1&&a.a.createElement("button",{onClick:function(){h(g-1)}},"PREV"),l.filter((function(e){return e>=E&&e<=v})).map((function(e){return a.a.createElement("span",{className:o===e&&V.a.selected,onClick:function(t){u(e)}},e)})),p>g&&a.a.createElement("button",{onClick:function(){h(g+1)}},"NEXT"))},Y=n(131),Z=n.n(Y),J=function(e){var t=e.user,n=e.followingInProgress,r=e.unfollow,o=e.follow;return a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement("div",null,a.a.createElement(m.b,{to:"/profile/"+t.id},a.a.createElement("img",{className:Z.a.userPhoto,src:null!=t.photos.small?t.photos.small:b.a}))),a.a.createElement("div",null,t.followed?a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)}},"UnFollow"):a.a.createElement("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){o(t.id)}},"Follow"))),a.a.createElement("div",null,a.a.createElement("span",null,a.a.createElement("div",null,t.name),a.a.createElement("div",null,t.status)),a.a.createElement("span",null,a.a.createElement("div",null,"user.location.country"),a.a.createElement("div",null,"user.location.city"))))},q=function(e){for(var t=e.currentPage,n=e.totalUsersCount,r=e.pageSize,o=e.onPageChanged,u=e.users,c=Object(H.a)(e,["currentPage","totalUsersCount","pageSize","onPageChanged","users"]),i=Math.ceil(n/r),s=[],l=1;l<=i;l++)s.push(l);return a.a.createElement("div",null,a.a.createElement(X,{currentPage:t,onPageChanged:o,pageSize:r,totalItemsCount:n}),a.a.createElement("div",null,u.map((function(e){return a.a.createElement(J,{user:e,key:e.id,followingInProgress:c.followingInProgress,unfollow:c.unfollow,follow:c.follow})}))))},K=n(38),Q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[],fake:10},$=function(e){return{type:"FOLLOW",userId:e}},ee=function(e){return{type:"UNFOLLOW",userId:e}},te=function(e){return{type:"SET_CURRENT_PAGE",currentPage:e}},ne=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},re=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},ae=function(){var e=Object(j.a)(P.a.mark((function e(t,n,r,a){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(re(!0,n)),e.next=3,r(n);case 3:0==e.sent.data.resultCode&&t(a(n)),t(re(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(_.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)({},e,{followed:!0}):e}))});case"UNFOLLOW":return Object(_.a)({},e,{users:e.users.map((function(e){return e.id===t.userId?Object(_.a)({},e,{followed:!1}):e}))});case"SET_USERS":return Object(_.a)({},e,{users:t.users});case"SET_CURRENT_PAGE":return Object(_.a)({},e,{currentPage:t.currentPage});case"SET_TOTAL_USERS_COUNT":return Object(_.a)({},e,{totalUsersCount:t.count});case"TOGGLE_IS_FETCHING":return Object(_.a)({},e,{isFetching:t.isFetching});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(_.a)({},e,{followingInProgress:t.isFetching?[].concat(Object(K.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!=t.userId}))});default:return e}},ue=n(63),ce=n(6),ie=n(133),se=Object(ie.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),le=function(e){return e.usersPage.pageSize},fe=function(e){return e.usersPage.totalUsersCount},pe=function(e){return e.usersPage.currentPage},me=function(e){return e.usersPage.isFetching},de=function(e){return e.usersPage.followingInProgress},ge=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onPageChanged=function(t){var n=e.props.pageSize;e.props.getUsers(t,n)},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,n=e.pageSize;this.props.getUsers(t,n)}},{key:"render",value:function(){return a.a.createElement(a.a.Fragment,null,this.props.isFetching?a.a.createElement(ue.a,null):null,a.a.createElement(q,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,users:this.props.users,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress}))}}]),n}(a.a.Component),he=Object(ce.d)(Object(O.b)((function(e){return{users:se(e),pageSize:le(e),totalUsersCount:fe(e),currentPage:pe(e),isFetching:me(e),followingInProgress:de(e)}}),{follow:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,C.c.follow.bind(C.c),$);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},unfollow:function(e){return function(){var t=Object(j.a)(P.a.mark((function t(n){return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:ae(n,e,C.c.unfollow.bind(C.c),ee);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},setCurrentPage:te,toggleFollowingProgress:re,getUsers:function(e,t){return function(){var n=Object(j.a)(P.a.mark((function n(r){var a;return P.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(ne(!0)),r(te(e)),n.next=4,C.c.getUsers(e,t);case 4:a=n.sent,r(ne(!1)),r({type:"SET_USERS",users:a.items}),r({type:"SET_TOTAL_USERS_COUNT",count:a.totalCount});case 8:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}))(ge),Ee={initialized:!1},ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(_.a)({},e,{initialized:!0});default:return e}},be=n(91),we=n(122),Oe=n(134),Se=n(126),Pe=Object(ce.c)({profilePage:be.b,dialogPage:we.a,usersPage:oe,auth:x,form:Se.a,app:ve}),je=Object(ce.e)(Pe,Object(ce.a)(Oe.a));window.store=je;var _e=function(e){return function(t){return a.a.createElement(r.Suspense,{fallback:a.a.createElement("div",null,"Loading...")},a.a.createElement(e,t))}},ye=a.a.lazy((function(){return n.e(4).then(n.bind(null,293))})),Ce=a.a.lazy((function(){return n.e(3).then(n.bind(null,292))})),Ie=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?a.a.createElement("div",{className:"app-wrapper"},a.a.createElement(N,null),a.a.createElement(d,null),a.a.createElement("main",{className:"app-wrapper-content"},a.a.createElement(g.b,{path:"/profile/:userId?",render:_e(Ce)}),a.a.createElement(g.b,{path:"/dialogs",render:_e(ye)}),a.a.createElement(g.b,{path:"/users",render:function(){return a.a.createElement(he,null)}}),a.a.createElement(g.b,{path:"/login",render:function(){return a.a.createElement(D,null)}}))):a.a.createElement(ue.a,null)}}]),n}(a.a.Component),Te=Object(ce.d)(g.f,Object(O.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(U());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(Ie),Ue=function(e){return a.a.createElement(m.a,null,a.a.createElement(O.a,{store:je},"//@ts-ignore",a.a.createElement(Te,null)))};u.a.render(a.a.createElement(Ue,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},49:function(e,t,n){e.exports={nav:"Navdar_nav__2YGIV",active:"Navdar_active__1H7Vo"}},60:function(e,t,n){e.exports=n.p+"static/media/logo.50a503b3.png"},61:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return s}));var r=n(48),a=n(0),o=n.n(a),u=n(28),c=n.n(u),i=function(e){var t=e.input,n=e.meta,a=n.touched,u=n.error,i=Object(r.a)(e,["input","meta"]),s=a&&u;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("textarea",Object.assign({},t,i)),s&&o.a.createElement("p",null,u))},s=function(e){var t=e.input,n=e.meta,a=n.touched,u=n.error,i=Object(r.a)(e,["input","meta"]),s=a&&u;return o.a.createElement("div",{className:c.a.formControl+" "+(s?c.a.error:"")},o.a.createElement("input",Object.assign({},t,i)),s&&o.a.createElement("p",null,u))}},63:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(132),u=n.n(o);t.a=function(e){return a.a.createElement("img",{src:u.a})}},69:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r=function(e){if(!e)return"Field is required"},a=function(e){return function(t){if(t&&t.length>e)return"Max length is 30 symbols"}}},87:function(e,t,n){e.exports={header:"Header_header__1capV",loginBlock:"Header_loginBlock__EFdmg"}},91:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return p})),n.d(t,"c",(function(){return m})),n.d(t,"e",(function(){return d}));var r=n(7),a=n.n(r),o=n(16),u=n(38),c=n(9),i=n(12),s={posts:[{id:1,message:"Hi, how are you?"},{id:2,message:"It's my first post"}],newPostText:"\u0442\u0435\u043a\u0441 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",profile:null,status:""},l=function(e){return{type:"ADD-POST",newPostText:e}},f=function(e){return{type:"SET_STATUS",status:e}},p=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.c.getProfile(e);case 2:r=t.sent,n({type:"SET_USER_PROFILE",profile:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.getStatus(e);case 2:r=t.sent,n(f(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},d=function(e){return function(){var t=Object(o.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.b.updateStatus(e);case 2:0===t.sent.data.resultCode&&n(f(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n={id:3,message:t.newPostText};return Object(c.a)({},e,{posts:[].concat(Object(u.a)(e.posts),[n]),newPostText:""});case"SET_USER_PROFILE":return Object(c.a)({},e,{profile:t.profile});case"SET_STATUS":return Object(c.a)({},e,{status:t.status});default:return e}}}},[[160,1,2]]]);
//# sourceMappingURL=main.e257726c.chunk.js.map