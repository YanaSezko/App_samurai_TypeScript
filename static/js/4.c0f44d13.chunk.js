(this["webpackJsonpit-incubator"]=this["webpackJsonpit-incubator"]||[]).push([[4],{287:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__1YSVu",dialogsItems:"Dialogs_dialogsItems__2CJwP",active:"Dialogs_active__2Fyh7",dialog:"Dialogs_dialog__9cCwF",messages:"Dialogs_messages__2QNbF",message:"Dialogs_message__2mhXQ"}},293:function(e,a,t){"use strict";t.r(a);var n=t(14),s=t(122),i=t(30),o=t(31),r=t(32),c=t(33),l=t(0),m=t.n(l),u=t(8),g=t(287),d=t.n(g),b=t(11),f=function(e){return m.a.createElement("li",{className:d.a.dialog+" "+d.a.active},m.a.createElement(b.b,{to:"/dialogs/"+e.id},e.name))},E=function(e){return m.a.createElement("div",{className:d.a.message},e.message)},_=t(123),p=t(124),h=t(61),v=t(69),j=Object(v.a)(50),O=Object(p.a)({form:"dialogAddMessageForm"})((function(e){return m.a.createElement("form",{onSubmit:e.handleSubmit},m.a.createElement("div",null,m.a.createElement(_.a,{component:h.b,validate:[v.b,j],name:"newMessageBody",placeholder:"Enter your message"})),m.a.createElement("div",null,m.a.createElement("button",null,"send")))})),y=function(e){var a=e.dialogPage,t=a.dialogs.map((function(e){return m.a.createElement(f,{name:e.name,key:e.id,id:e.id})})),n=a.messages.map((function(e){return m.a.createElement(E,{message:e.message,key:e.id,id:e.id})}));a.newMessageBody;return e.isAuth?m.a.createElement("div",{className:d.a.dialogs},m.a.createElement("ul",{className:d.a.dialogsItems},t),m.a.createElement("div",{className:d.a.messages},n),m.a.createElement(O,{onSubmit:function(a){e.sendMessage(a.newMessageBody)}})):m.a.createElement(u.a,{to:"/login"})},w=t(6);a.default=Object(w.d)(Object(n.b)((function(e){return{dialogPage:e.dialogPage}}),(function(e){return{sendMessage:function(a){e(Object(s.b)(a))}}})),(function(e){var a=function(a){Object(c.a)(n,a);var t=Object(r.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return this.props.isAuth?m.a.createElement(e,this.props):m.a.createElement(u.a,{to:"/login"})}}]),n}(m.a.Component);return Object(n.b)((function(e){return{isAuth:e.auth.isAuth}}))(a)}))(y)}}]);
//# sourceMappingURL=4.c0f44d13.chunk.js.map