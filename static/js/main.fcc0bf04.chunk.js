(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,function(e,a,t){e.exports={affairs:"Affairs_affairs__biDDQ",button:"Affairs_button__1qHjS"}},function(e,a,t){e.exports={message:"Message_message__2eiXp",avatar:"Message_avatar__LMPZF",messageItem:"Message_messageItem__1BiIo",nameMessage:"Message_nameMessage__3frSZ",name:"Message_name__37k0H",item:"Message_item__2TL5W",time:"Message_time__1bC0u"}},,function(e,a,t){e.exports={valid:"Greeting_valid__3F5nd",error:"Greeting_error__2YOg7",button:"Greeting_button__2Zn4S",textError:"Greeting_textError__2v6Lw"}},,,,function(e,a,t){e.exports={App:"App_App__1WaCh"}},function(e,a,t){e.exports={affair:"Affair_affair__1d080"}},,function(e,a,t){e.exports=t(18)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),i=(t(17),t(9)),s=t.n(i),o=t(3),m=t.n(o);var u=function(e){return r.a.createElement("div",{className:m.a.message},r.a.createElement("img",{src:e.avatar,className:m.a.avatar,alt:e.name}),r.a.createElement("div",{className:m.a.messageItem},r.a.createElement("div",{className:m.a.nameMessage},r.a.createElement("span",{className:m.a.name},e.name),r.a.createElement("span",{className:m.a.item},e.message)),r.a.createElement("div",{className:m.a.time},e.time)))},f="https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",d="Maxim",_="Hello! I'm React developer!",E="22:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(u,{avatar:f,name:d,message:_,time:E}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(1),p=t(10),g=t.n(p),v=t(2),k=t.n(v),w=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:g.a.affair},e.affair.name),r.a.createElement("button",{className:k.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(w,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:k.a.affairs},a,r.a.createElement("button",{className:k.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:k.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:k.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:k.a.button,onClick:function(){e.setFilter("low")}},"Low"))},C=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var M=function(){var e=Object(n.useState)(C),a=Object(h.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),i=Object(h.a)(c,2),s=i[0],o=i[1],m=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:m,setFilter:o,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=t(11),A=t(20),O=t(5),y=t.n(O),x=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,i=l?y.a.error:y.a.valid;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:i}),r.a.createElement("button",{onClick:n,className:y.a.button},"ADD"),r.a.createElement("span",null,"Total: ",c),r.a.createElement("br",null),r.a.createElement("span",{className:y.a.textError},l))},S=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(h.a)(l,2),i=c[0],s=c[1],o=Object(n.useState)(""),m=Object(h.a)(o,2),u=m[0],f=m[1],d=a.length;return r.a.createElement(x,{name:i,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){0===i.length?f("Attention! Please, input your name!"):(alert("Hello, ".concat(i,"!")),t(i),s(""),f(""))},error:u,totalUsers:d})};var F=function(){var e=Object(n.useState)([{_id:Object(A.a)(),name:"Max"}]),a=Object(h.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(S,{users:t,addUserCallback:function(e){l([{_id:Object(A.a)(),name:e}].concat(Object(j.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))};var H=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(b,null),r.a.createElement(M,null),r.a.createElement(F,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[12,1,2]]]);
//# sourceMappingURL=main.fcc0bf04.chunk.js.map