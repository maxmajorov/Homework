(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,function(e,a,t){e.exports={affairs:"Affairs_affairs__biDDQ",button:"Affairs_button__1qHjS"}},function(e,a,t){e.exports={message:"Message_message__2eiXp",avatar:"Message_avatar__LMPZF",messageItem:"Message_messageItem__1BiIo",nameMessage:"Message_nameMessage__3frSZ",name:"Message_name__37k0H",item:"Message_item__2TL5W",time:"Message_time__1bC0u"}},,,,function(e,a,t){e.exports={App:"App_App__1WaCh"}},function(e,a,t){e.exports={affair:"Affair_affair__1d080"}},function(e,a,t){e.exports=t(14)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(5),l=t.n(i),s=(t(13),t(6)),c=t.n(s),m=t(2),o=t.n(m);var u=function(e){return r.a.createElement("div",{className:o.a.message},r.a.createElement("img",{src:e.avatar,className:o.a.avatar,alt:e.name}),r.a.createElement("div",{className:o.a.messageItem},r.a.createElement("div",{className:o.a.nameMessage},r.a.createElement("span",{className:o.a.name},e.name),r.a.createElement("span",{className:o.a.item},e.message)),r.a.createElement("div",{className:o.a.time},e.time)))},f="https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",d="Maxim",_="Hello! I'm React developer!",p="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:f,name:d,message:_,time:p}),r.a.createElement("hr",null),r.a.createElement("hr",null))},E=t(3),g=t(7),v=t.n(g),b=t(1),w=t.n(b),k=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:v.a.affair},e.affair.name),r.a.createElement("button",{className:w.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var M=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:w.a.affairs},a,r.a.createElement("button",{className:w.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:w.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:w.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:w.a.button,onClick:function(){e.setFilter("low")}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var A=function(){var e=Object(n.useState)(N),a=Object(E.a)(e,2),t=a[0],i=a[1],l=Object(n.useState)("all"),s=Object(E.a)(l,2),c=s[0],m=s[1],o=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,c);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(M,{data:o,setFilter:m,deleteAffairCallback:function(e){return i(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var C=function(){return r.a.createElement("div",{className:c.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(h,null),r.a.createElement(A,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.885caa0b.chunk.js.map