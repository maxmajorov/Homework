(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,,,function(e,a,t){e.exports={menu:"Header_menu__1KjlI",menu_active:"Header_menu_active__dz_1H",menu_list:"Header_menu_list__2hH9J",trigger:"Header_trigger__2XYXs",link:"Header_link__ZYKtG",link_active:"Header_link_active__3kFHS"}},,,,,,,,function(e,a,t){e.exports={affairs:"Affairs_affairs__biDDQ",button:"Affairs_button__1qHjS"}},function(e,a,t){e.exports={message:"Message_message__2eiXp",avatar:"Message_avatar__LMPZF",messageItem:"Message_messageItem__1BiIo",nameMessage:"Message_nameMessage__3frSZ",name:"Message_name__37k0H",item:"Message_item__2TL5W",time:"Message_time__1bC0u"}},function(e,a,t){e.exports={flex:"Greeting_flex__3hj48",valid:"Greeting_valid__3F5nd",error:"Greeting_error__2YOg7",button:"Greeting_button__2Zn4S",textError:"Greeting_textError__2v6Lw"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3y2PY",errorInput:"SuperInputText_errorInput__3K27B",error:"SuperInputText_error__3ZZ7d",input:"SuperInputText_input__2aE96",input_invalid:"SuperInputText_input_invalid__4ku3d",input_valid:"SuperInputText_input_valid__2GgXi",errorMessage:"SuperInputText_errorMessage__35yDz"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__18YRl",errorInput:"SuperInputText_errorInput__2P158",error:"SuperInputText_error__3GcHS",input:"SuperInputText_input__35vHD",input_invalid:"SuperInputText_input_invalid__10sKR",input_valid:"SuperInputText_input_valid__3pTvR",errorMessage:"SuperInputText_errorMessage__1LCBI"}},function(e,a,t){e.exports={superInput:"SuperInput_superInput__1lUoB",errorInput:"SuperInput_errorInput__2z5IB",error:"SuperInput_error__1PtGi",input:"SuperInput_input__2Z4Cx",input_invalid:"SuperInput_input_invalid__18-93",input_valid:"SuperInput_input_valid__1l0i7",errorMessage:"SuperInput_errorMessage__2og6d"}},,,,function(e,a,t){e.exports={hw6:"HW6_hw6__3IjHz",span:"HW6_span__3jXbG",btns:"HW6_btns__33uxG",button:"HW6_button__27B2a"}},,,,,,,,,,function(e,a,t){e.exports={button:"SuperButton_button__11y4P",disabled:"SuperButton_disabled__3NUW-",ring:"SuperButton_ring__N1WV7"}},function(e,a,t){e.exports={button:"SuperButton_button__PY_DX",disabled:"SuperButton_disabled__2jTq6",ring:"SuperButton_ring__2gEHN"}},function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__2BKhs",checkbox:"SuperCheckbox_checkbox__3ubRI",focused:"SuperCheckbox_focused__3wTMj"}},function(e,a,t){e.exports={errorPage:"Error404_errorPage__VP57K",waves:"Error404_waves__pI_Pj",errorNum:"Error404_errorNum__1pOQE",flicks:"Error404_flicks__2Rvia",errorTitle:"Error404_errorTitle__2Rv1B",spanflicks:"Error404_spanflicks__3LfC2"}},,,,function(e,a,t){e.exports={blue:"HW4_blue__1G_zu",green:"HW4_green__3-JvH",column:"HW4_column__2FPwi",testSpanError:"HW4_testSpanError__W-VDi",buttons:"HW4_buttons__3A3L_"}},,function(e,a,t){e.exports={App:"App_App__1WaCh"}},function(e,a,t){e.exports={affair:"Affair_affair__1d080"}},,function(e,a,t){e.exports={superSpan:"SuperEditableSpan_superSpan__1BaP4"}},,,,,,,function(e,a,t){e.exports=t(66)},,,,,function(e,a,t){},,,,,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),c=t.n(l),o=(t(60),t(45)),s=t.n(o),u=t(16),i=t(4),m=t(3),_=t(18),p=t.n(_);var d=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("img",{src:e.avatar,className:p.a.avatar,alt:e.name}),r.a.createElement("div",{className:p.a.messageItem},r.a.createElement("div",{className:p.a.nameMessage},r.a.createElement("span",{className:p.a.name},e.name),r.a.createElement("span",{className:p.a.item},e.message)),r.a.createElement("div",{className:p.a.time},e.time)))},E="https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",f="Maxim",b="Hello! I'm React developer!",v="22:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(d,{avatar:E,name:f,message:b,time:v}),r.a.createElement("hr",null),r.a.createElement("hr",null))},h=t(46),N=t.n(h),k=t(17),C=t.n(k),x=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:N.a.affair},e.affair.name),r.a.createElement("button",{className:C.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var S=function(e){var a=e.data.map((function(a){return r.a.createElement(x,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:C.a.affairs},a,r.a.createElement("button",{className:C.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:C.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:C.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:C.a.button,onClick:function(){e.setFilter("low")}},"Low"))},j=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var I=function(){var e=Object(n.useState)(j),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),s=o[0],u=o[1],m=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(S,{data:m,setFilter:u,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},O=t(15),y=t(87),T=t(2),w=t(36),H=t.n(w),P=function(e){e.red;var a=e.addUser,t=e.disabled,n=(e.className,Object(T.a)(e,["red","addUser","disabled","className"])),l="".concat(t?H.a.disabled:H.a.default," ").concat(H.a.button);return r.a.createElement("button",Object.assign({onClick:a,className:l},n))},M=t(20),A=t.n(M),W=function(e){e.type;var a=e.onChange,t=e.onChangeName,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName,Object(T.a)(e,["type","onChange","onChangeName","onKeyPress","onEnter","error","className","spanClassName"])),s="".concat(A.a.error," ").concat(c?A.a.errorMessage:""),u="".concat(A.a.input," ").concat(A.a.input_invalid," ").concat(c?A.a.input_invalid:A.a.input_valid);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u,placeholder:"Write something here..."},o)),c&&r.a.createElement("span",{className:s},c))},B=t(19),F=t.n(B),K=function(e){var a=Object(n.useState)(""),t=Object(i.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),s=Object(i.a)(o,2),u=s[0],m=s[1],_=function(){l?(alert("Hello, ".concat(l,"!")),e.addUserCallback(l),c(""),m("")):m("Attention! Please, enter your name!")},p=e.users.length;return r.a.createElement("div",{className:F.a.flex},r.a.createElement(W,{value:l,onChangeName:c,error:u,onEnter:function(){_()}}),r.a.createElement(P,{addUser:_},"ADD"),r.a.createElement("span",null,"Total: ",p),r.a.createElement("br",null))},G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?F.a.error:F.a.valid;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{onClick:n,className:F.a.button},"ADD"),r.a.createElement("span",null,"Total: ",c),r.a.createElement("br",null),r.a.createElement("span",{className:F.a.textError},l))},U=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],s=c[1],u=Object(n.useState)(""),m=Object(i.a)(u,2),_=m[0],p=m[1],d=a.length;return r.a.createElement(G,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){0===o.length?p("Attention! Please, input your name!"):(alert("Hello, ".concat(o,"!")),t(o),s(""),p(""))},error:_,totalUsers:d})};var D=function(){var e=Object(n.useState)([{_id:Object(y.a)(),name:"Max"}]),a=Object(i.a)(e,2),t=a[0],l=a[1],c=function(e){l([{_id:Object(y.a)(),name:e}].concat(Object(O.a)(t)))};return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(U,{users:t,addUserCallback:c}),r.a.createElement("hr",null),r.a.createElement(K,{users:t,addUserCallback:c}),r.a.createElement("hr",null))},J=t(21),L=t.n(J),R=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName,Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),s="".concat(L.a.error," ").concat(c?L.a.errorMessage:""),u="".concat(L.a.input," ").concat(L.a.input_invalid," ").concat(c?L.a.input_invalid:L.a.input_valid);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:u,placeholder:"Write something here..."},o)),c&&r.a.createElement("span",{className:s},c))},X=t(43),Z=t.n(X),z=t(37),Y=t.n(z),V=function(e){e.red;var a=e.disabled,t=(e.className,Object(T.a)(e,["red","disabled","className"])),n="".concat(a?Y.a.disabled:Y.a.default," ").concat(Y.a.button);return r.a.createElement("button",Object.assign({className:n},t))},q=t(38),Q=t.n(q),$=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(Q.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:Q.a.checkbox},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:Q.a.spanClassName},l))};var ee=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"Please, enter the text",o=function(){c?alert("Please, enter the text"):alert(t)},s=Object(n.useState)(!1),u=Object(i.a)(s,2),m=u[0],_=u[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:Z.a.column},r.a.createElement(R,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement("div",{className:Z.a.buttons},r.a.createElement(V,null,"default"),r.a.createElement(V,{red:!0,onClick:o},"GO! "),r.a.createElement(V,{disabled:!0},"disabled")),r.a.createElement($,{checked:m,onChangeChecked:_},"Checkbox 1 "),r.a.createElement($,{checked:m,onChange:function(e){return _(e.currentTarget.checked)}},"Checkbox 2")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ae=t(35),te=t(30),ne=t(86),re=t(22),le=t.n(re),ce=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName,Object(te.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),"".concat(le.a.error," ").concat(c?le.a.errorMessage:"")),s="".concat(le.a.input," ").concat(le.a.input_invalid," ").concat(c?le.a.input_invalid:le.a.input_valid);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:s,placeholder:"Write something here..."}),c&&r.a.createElement("span",{className:o},c))},oe=t(49),se=t.n(oe),ue=t(48),ie=t.n(ue),me=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(te.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),s=Object(ae.a)(o,2),u=s[0],i=s[1],m=l||{},_=m.children,p=m.onDoubleClick,d=m.className,E=Object(te.a)(m,["children","onDoubleClick","className"]),f="".concat(ie.a.superSpan," ").concat(d);return r.a.createElement(r.a.Fragment,null,u?r.a.createElement(ce,Object.assign({autoFocus:!0,onBlur:function(e){i(!1),a&&a(e)},onEnter:function(){i(!1),t&&t()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){i(!0),p&&p(e)},className:f},E),_||c.value),r.a.createElement(se.a,null)))};function _e(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function pe(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}_e("test",{x:"A",y:1});pe("test",{x:"",y:0});var de=t(26),Ee=t.n(de),fe=t(85),be=t(50),ve=t.n(be),ge=t(51),he=t.n(ge);var Ne=function(){var e=Object(n.useState)(""),a=Object(ae.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,"homeworks 6",r.a.createElement("div",{className:Ee.a.hw6},r.a.createElement("div",{className:Ee.a.span},r.a.createElement(me,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:Ee.a.btns},r.a.createElement(fe.a,{onClick:function(){_e("editable-span-value",t),console.log("saved in localStorage")},variant:"contained",color:"primary",size:"small",className:Ee.a.button,startIcon:r.a.createElement(ve.a,null)},"Save"),r.a.createElement(fe.a,{onClick:function(e){var a=pe("editable-span-value","");l(a)},variant:"contained",color:"default",className:Ee.a.button,startIcon:r.a.createElement(he.a,null)},"Upload"))))},ke=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(I,null),r.a.createElement(D,null),r.a.createElement(ee,null),r.a.createElement(Ne,null))},Ce=t(39),xe=t.n(Ce),Se=function(){return r.a.createElement("div",{className:xe.a.errorPage},r.a.createElement("div",null,r.a.createElement("h1",{className:xe.a.errorNum},"-404-")),r.a.createElement("div",null,r.a.createElement("h2",{className:xe.a.errorTitle},"Page not found!")),r.a.createElement("canvas",{id:"canv"}))},je=function(){return r.a.createElement("div",null,"HW 7-11")},Ie=function(){return r.a.createElement("div",null,"HW 12 -")},Oe="/pre-junior",ye="/junior",Te="/junior-plus",we=function(){return r.a.createElement("div",null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",element:r.a.createElement(m.a,{to:Oe})}),r.a.createElement(m.b,{path:Oe,element:r.a.createElement(ke,null)}),r.a.createElement(m.b,{path:ye,element:r.a.createElement(je,null)}),r.a.createElement(m.b,{path:Te,element:r.a.createElement(Ie,null)}),r.a.createElement(m.b,{path:"*",element:r.a.createElement(Se,null)})))},He=t(9),Pe=t.n(He),Me=function(){var e=Object(n.useState)(Pe.a.menu),a=Object(i.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",{className:t,onMouseEnter:function(){l("".concat(Pe.a.menu," ").concat(Pe.a.menu_active))},onMouseLeave:function(){l("".concat(Pe.a.menu))}},r.a.createElement("button",{className:Pe.a.trigger},r.a.createElement("span",null,"menu")),r.a.createElement("nav",{className:Pe.a.menu_list},r.a.createElement(u.b,{to:Oe,className:function(e){var a=e.isActive;return Pe.a.link+" "+(a?Pe.a.link_active:"")}},"PRE-Junior"),r.a.createElement(u.b,{to:ye,className:function(e){var a=e.isActive;return Pe.a.link+" "+(a?Pe.a.link_active:"")}},"Junior"),r.a.createElement(u.b,{to:Te,className:function(e){var a=e.isActive;return Pe.a.link+" "+(a?Pe.a.link_active:"")}},"Junior+")))},Ae=function(){return r.a.createElement("div",null,r.a.createElement(u.a,null,r.a.createElement(Me,null),r.a.createElement(we,null)))},We=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ae,null),r.a.createElement(ne.a,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(We,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[55,1,2]]]);
//# sourceMappingURL=main.453ffc45.chunk.js.map