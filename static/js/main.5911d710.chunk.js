(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{104:function(e,a,t){e.exports=t(119)},113:function(e,a,t){},119:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),c=t.n(l),o=t(59),u=t(33),i=(t(113),t(82)),s=t.n(i),m=t(7),p=t(6),_=t(37),d=t.n(_);var E=function(e){return r.a.createElement("div",{className:d.a.message},r.a.createElement("img",{src:e.avatar,className:d.a.avatar,alt:e.name}),r.a.createElement("div",{className:d.a.messageItem},r.a.createElement("div",{className:d.a.nameMessage},r.a.createElement("span",{className:d.a.name},e.name),r.a.createElement("span",{className:d.a.item},e.message)),r.a.createElement("div",{className:d.a.time},e.time)))},g="https://www.meme-arsenal.com/memes/2860a0cb8333cc6923653a31792d4453.jpg",f="Maxim",v="Hello! I'm React developer!",b="22:00";var h=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:g,name:f,message:v,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},C=t(83),k=t.n(C),N=t(36),O=t.n(N),j=function(e){return r.a.createElement("div",null,r.a.createElement("span",{className:k.a.affair},e.affair.name),r.a.createElement("button",{className:O.a.button,onClick:function(){e.deleteAffairCallback(e.affair._id)}},"X"))};var y=function(e){var a=e.data.map((function(a){return r.a.createElement(j,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",{className:O.a.affairs},a,r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("all")}},"All"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("high")}},"High"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("middle")}},"Middle"),r.a.createElement("button",{className:O.a.button,onClick:function(){e.setFilter("low")}},"Low"))},S=[{_id:1,name:"React",priority:"high"},{_id:2,name:"Anime",priority:"low"},{_id:3,name:"Games",priority:"low"},{_id:4,name:"Work",priority:"high"},{_id:5,name:"HTML & CSS",priority:"middle"}];var x=function(){var e=Object(n.useState)(S),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(m.a)(c,2),u=o[0],i=o[1],s=function(e,a){switch(a){case"high":return e.filter((function(e){return"high"===e.priority}));case"middle":return e.filter((function(e){return"middle"===e.priority}));case"low":return e.filter((function(e){return"low"===e.priority}));default:return e}}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(y,{data:s,setFilter:i,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},I=t(35),w=t(160),T=t(13),A=t(64),H=t.n(A),P=function(e){e.red;var a=e.addUser,t=e.disabled,n=(e.className,Object(T.a)(e,["red","addUser","disabled","className"])),l="".concat(t?H.a.disabled:H.a.default," ").concat(H.a.button);return r.a.createElement("button",Object.assign({onClick:a,className:l},n))},M=t(43),W=t.n(M),B=function(e){e.type;var a=e.onChange,t=e.onChangeName,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName,Object(T.a)(e,["type","onChange","onChangeName","onKeyPress","onEnter","error","className","spanClassName"])),u="".concat(W.a.error," ").concat(c?W.a.errorMessage:""),i="".concat(W.a.input," ").concat(W.a.input_invalid," ").concat(c?W.a.input_invalid:W.a.input_valid);return r.a.createElement("div",null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i,placeholder:"Write something here..."},o)),c&&r.a.createElement("span",{className:u},c))},D=t(42),R=t.n(D),F=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(""),u=Object(m.a)(o,2),i=u[0],s=u[1],p=function(){l?(alert("Hello, ".concat(l,"!")),e.addUserCallback(l),c(""),s("")):s("Attention! Please, enter your name!")},_=e.users.length;return r.a.createElement("div",{className:R.a.flex},r.a.createElement(B,{value:l,onChangeName:c,error:i,onEnter:function(){p()}}),r.a.createElement(P,{addUser:p},"ADD"),r.a.createElement("span",null,"Total: ",_),r.a.createElement("br",null))},G=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?R.a.error:R.a.valid;return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o}),r.a.createElement("button",{onClick:n,className:R.a.button},"ADD"),r.a.createElement("span",null,"Total: ",c),r.a.createElement("br",null),r.a.createElement("span",{className:R.a.textError},l))},K=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(m.a)(l,2),o=c[0],u=c[1],i=Object(n.useState)(""),s=Object(m.a)(i,2),p=s[0],_=s[1],d=a.length;return r.a.createElement(G,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){0===o.length?_("Attention! Please, input your name!"):(alert("Hello, ".concat(o,"!")),t(o),u(""),_(""))},error:p,totalUsers:d})};var L=function(){var e=Object(n.useState)([{_id:Object(w.a)(),name:"Max"}]),a=Object(m.a)(e,2),t=a[0],l=a[1],c=function(e){l([{_id:Object(w.a)(),name:e}].concat(Object(I.a)(t)))};return console.log(t),r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(K,{users:t,addUserCallback:c}),r.a.createElement("hr",null),r.a.createElement(F,{users:t,addUserCallback:c}),r.a.createElement("hr",null))},U=t(44),J=t.n(U),X=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=e.onKeyPress,l=e.onEnter,c=e.error,o=(e.className,e.spanClassName,Object(T.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"])),u="".concat(J.a.error," ").concat(c?J.a.errorMessage:""),i="".concat(J.a.input," ").concat(J.a.input_invalid," ").concat(c?J.a.input_invalid:J.a.input_valid);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),l&&"Enter"===e.key&&l()},className:i,placeholder:"Write something here..."},o)),c&&r.a.createElement("span",{className:u},c))},Y=t(73),z=t.n(Y),Z=t(151),Q=t(74),V=t.n(Q),q=function(e){e.red;var a=e.color,t=e.disabled,n=(e.className,Object(T.a)(e,["red","color","disabled","className"])),l="".concat(t?V.a.disabled:V.a.default," ");return r.a.createElement(Z.a,{variant:"contained",color:"primary"===a?"primary":"secondary",className:l,onClick:n.onClick},n.children)},$=t(65),ee=t.n($),ae=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),o="".concat(ee.a.checkbox," ").concat(n||"");return r.a.createElement("label",{className:ee.a.checkbox},r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e),t&&t(e.currentTarget.checked)},className:o},c)),l&&r.a.createElement("span",{className:ee.a.spanClassName},l))};var te=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1],c=t?"":"Please, enter the text",o=function(){c?alert("Please, enter the text"):alert(t)},u=Object(n.useState)(!1),i=Object(m.a)(u,2),s=i[0],p=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:z.a.column},r.a.createElement(X,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement("div",{className:z.a.buttons},r.a.createElement(q,null,"default"),r.a.createElement(q,{red:!0,onClick:o},"GO! "),r.a.createElement(q,{disabled:!0},"disabled")),r.a.createElement(ae,{checked:s,onChangeChecked:p},"Checkbox 1 "),r.a.createElement(ae,{checked:s,onChange:function(e){return p(e.currentTarget.checked)}},"Checkbox 2")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ne=t(155),re=t(45),le=t.n(re),ce=function(e){e.type;var a=e.onChange,t=e.onBlur,n=e.onChangeText,l=e.onKeyPress,c=e.onEnter,o=e.error,u=(e.className,e.spanClassName,Object(T.a)(e,["type","onChange","onBlur","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),"".concat(le.a.error," ").concat(o?le.a.errorMessage:"")),i="".concat(le.a.input," ").concat(le.a.input_invalid," ").concat(o?le.a.input_invalid:le.a.input_valid);return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne.a,{type:"text",onBlur:t,onChange:function(e){a&&a(e),n&&n(e.currentTarget.value)},onKeyPress:function(e){l&&l(e),c&&"Enter"===e.key&&c()},className:i,placeholder:"Write something here..."}),o&&r.a.createElement("span",{className:u},o))},oe=t(89),ue=t.n(oe),ie=t(88),se=t.n(ie),me=function(e){e.autoFocus;var a=e.onBlur,t=e.onEnter,l=e.spanProps,c=Object(T.a)(e,["autoFocus","onBlur","onEnter","spanProps"]),o=Object(n.useState)(!1),u=Object(m.a)(o,2),i=u[0],s=u[1],p=l||{},_=p.children,d=p.onDoubleClick,E=p.className,g=Object(T.a)(p,["children","onDoubleClick","className"]),f="".concat(se.a.superSpan," ").concat(E);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(ce,Object.assign({autoFocus:!0,onBlur:function(e){s(!1),a&&a(e),console.log("disactivate")},onEnter:function(){s(!1),t&&t()}},c)):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",Object.assign({onDoubleClick:function(e){s(!0),d&&d(e)},className:f},g),_||c.value),r.a.createElement(ue.a,null)))};function pe(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}function _e(e,a){var t=a,n=localStorage.getItem(e);return null!==n&&(t=JSON.parse(n)),t}pe("test",{x:"A",y:1});_e("test",{x:"",y:0});var de=t(54),Ee=t.n(de),ge=t(90),fe=t.n(ge),ve=t(91),be=t.n(ve);var he=function(){var e=Object(n.useState)(""),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,"homeworks 6",r.a.createElement("div",{className:Ee.a.hw6},r.a.createElement("div",{className:Ee.a.span},r.a.createElement(me,{value:t,onChangeText:l,spanProps:{children:t?void 0:"enter text..."}})),r.a.createElement("div",{className:Ee.a.btns},r.a.createElement(Z.a,{onClick:function(){pe("editable-span-value",t),console.log("saved in localStorage")},variant:"contained",color:"primary",size:"small",className:Ee.a.button,startIcon:r.a.createElement(fe.a,null)},"Save"),r.a.createElement(Z.a,{onClick:function(e){var a=_e("editable-span-value","");l(a)},variant:"contained",color:"default",className:Ee.a.button,startIcon:r.a.createElement(be.a,null)},"Upload"))))},Ce=function(){return r.a.createElement("div",null,r.a.createElement(h,null),r.a.createElement(x,null),r.a.createElement(L,null),r.a.createElement(te,null),r.a.createElement(he,null))},ke=t(66),Ne=t.n(ke),Oe=function(){return r.a.createElement("div",{className:Ne.a.errorPage},r.a.createElement("div",null,r.a.createElement("h1",{className:Ne.a.errorNum},"-404-")),r.a.createElement("div",null,r.a.createElement("h2",{className:Ne.a.errorTitle},"Page not found!")),r.a.createElement("canvas",{id:"canv"}))},je=t(99),ye={loading:!1},Se="LOADING",xe=function(e){return{type:Se,loading:e}},Ie=t(97),we=function(){return r.a.createElement(Ie.a,{color:"blue"})},Te=function(){var e=Object(o.c)((function(e){return e.loading})),a=Object(o.b)();console.log(e);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e.loading?r.a.createElement(we,null):r.a.createElement("div",null,r.a.createElement(q,{onClick:function(){a(xe(!0)),setTimeout((function(){return a(xe(!1))}),2e3),console.log("loading...")}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ae=t(95),He=t.n(Ae),Pe=function(e){e.type;var a=e.onChange,t=e.value,n=e.onChangeRange,l=e.className,c=Object(T.a)(e,["type","onChange","value","onChangeRange","className"]),o="".concat(He.a.range," ").concat(l||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",value:t,onChange:function(e){a&&a(e),n&&n(+e.currentTarget.value)},className:o},c)))},Me=t(156),We=t(161),Be=Object(Me.a)({root:{width:300}}),De=function(e){e.type,e.onChange;var a=e.onChangeRange,t=e.value,n=(e.className,Object(T.a)(e,["type","onChange","onChangeRange","value","className"]),Be()),l=r.a.useState(t),c=Object(m.a)(l,2),o=c[0],u=c[1],i=[Array.isArray(t)?t.reduce((function(e){return e})):t,Array.isArray(o)?o.reduce((function(e,a){return 0+a})):o];return r.a.createElement(r.a.Fragment,null,r.a.createElement(We.a,{className:n.root,value:i,onChange:function(e,t){u(t),a(t)},step:5,valueLabelDisplay:"auto","aria-labelledby":"range-slider",color:"secondary"}))};var Re=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(100),o=Object(m.a)(c,2),u=o[0],i=o[1],s=[t,u];return r.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,t),r.a.createElement(Pe,{onChangeRange:l,value:t})),r.a.createElement("div",null,r.a.createElement("span",null,t),"\xa0",r.a.createElement(De,{onChangeRange:function(e){l(Array.isArray(e)?e.reduce((function(e){return e})):e),i(Array.isArray(e)?e.reduce((function(e,a){return 0+a})):e)},value:s}),"\xa0",r.a.createElement("span",null,u)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Fe=t(162),Ge=t(163),Ke=t(157),Le=t(164),Ue=t(158),Je=Object(Me.a)((function(e){return Object(Fe.a)({button:{display:"block",marginTop:e.spacing(2)},formControl:{margin:e.spacing(1),minWidth:120}})})),Xe=function(e){var a=e.options,t=e.onChange,n=e.onChangeOption,l=Object(T.a)(e,["options","onChange","onChangeOption"]),c=Je(),o=r.a.useState(!1),u=Object(m.a)(o,2),i=u[0],s=u[1],p=a?a.map((function(e,a){return r.a.createElement(Ge.a,{key:a,value:e},e)})):[""],_=function(){s(!0)};return r.a.createElement("div",null,r.a.createElement(Z.a,{className:c.button,onClick:_},"Open the select"),r.a.createElement(Ke.a,{className:c.formControl},r.a.createElement(Le.a,{id:"demo-controlled-open-select-label"},"Letters"),r.a.createElement(Ue.a,{open:i,onClose:function(){s(!1)},onOpen:_,onChange:function(e){t&&t(e),n&&n(e.target.value)},value:l.value},p)))},Ye=t(159),ze=function(e){e.type;var a=e.name,t=e.options,n=e.value,l=e.onChange,c=e.onChangeOption,o=(Object(T.a)(e,["type","name","options","value","onChange","onChangeOption"]),function(e){l&&l(e),c&&c(e.currentTarget.value)});console.log(n);var u=t?t.map((function(e,t){return r.a.createElement("label",{key:"".concat(a," - ").concat(t)},r.a.createElement(Ye.a,{name:e,checked:e===n,value:e,onChange:o}),e)})):[];return r.a.createElement(r.a.Fragment,null,u)},Ze=["x","y","z"];var Qe=function(){var e=Object(n.useState)(Ze[1]),a=Object(m.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(Xe,{options:Ze,value:t,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ze,{name:"radio",options:Ze,value:t,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ve=function(e,a){switch(a.type){case"SORT-UP":return Object(I.a)(e.sort((function(e,a){return e.name.charCodeAt(0)-a.name.charCodeAt(0)})));case"SORT-DOWN":return Object(I.a)(e.sort((function(e,a){return a.name.charCodeAt(0)-e.name.charCodeAt(0)})));case"CHECK-AGE":return Object(I.a)(e.filter((function(e){return e.age>=a.payload})));default:return e}},qe=t(96),$e=t.n(qe),ea=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var aa=function(){var e=Object(n.useState)(ea),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(0),o=Object(m.a)(c,2),u=o[0],i=o[1],s=t.map((function(e){return r.a.createElement("div",{key:e._id},"".concat(e.name," ").concat(e.age))}));return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 8",s,r.a.createElement("hr",null),r.a.createElement("span",null,"Insert sort age: "),r.a.createElement("input",{value:u,onChange:function(e){return i(+e.currentTarget.value)}}),r.a.createElement("div",{className:$e.a.btns},r.a.createElement(q,{onClick:function(){return l(Ve(ea,{type:"SORT-UP"}))},color:"primary"},"sort up"),r.a.createElement(q,{onClick:function(){return l(Ve(ea,{type:"SORT-DOWN"}))},color:"secondary"},"sort down"),r.a.createElement(q,{onClick:function(){return l(Ve(ea,function(e){return{type:"CHECK-AGE",payload:e}}(u)))},color:"primary"},"check 18")),r.a.createElement("hr",null),r.a.createElement("hr",null))},ta=t(60),na=t.n(ta);var ra=function(){var e=Object(n.useState)(0),a=Object(m.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)((new Date).toLocaleTimeString()),o=Object(m.a)(c,2),u=o[0],i=o[1],s=Object(n.useState)(!1),p=Object(m.a)(s,2),_=p[0],d=p[1],E=function(){clearInterval(t),console.log("click stop")},g=function(){d(!0),console.log("on")},f=function(){d(!1),console.log("off")},v=u,b=(new Date).toLocaleDateString();return r.a.createElement("div",{className:na.a.clockSection},_?r.a.createElement("div",{className:na.a.time,onMouseEnter:g,onMouseLeave:f},b):r.a.createElement("div",{className:na.a.time,onMouseEnter:g,onMouseLeave:f},v),r.a.createElement("div",{className:na.a.clockControls},r.a.createElement(q,{onClick:function(){E();var e=window.setInterval((function(){i((new Date).toLocaleTimeString())}),1e3);l(e)},color:"primary"},"start"),r.a.createElement(q,{onClick:E,color:"secondary"},"stop")))},la=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ra,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},ca=function(){return r.a.createElement("div",null,"HW 7-11",r.a.createElement(Qe,null),r.a.createElement(aa,null),r.a.createElement(la,null),r.a.createElement(Te,null),r.a.createElement(Re,null))},oa=function(){return r.a.createElement("div",null,"HW 12 -")},ua="/pre-junior",ia="/junior",sa="/junior-plus",ma=function(){return r.a.createElement("div",null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",element:r.a.createElement(p.a,{to:ua})}),r.a.createElement(p.b,{path:ua,element:r.a.createElement(Ce,null)}),r.a.createElement(p.b,{path:ia,element:r.a.createElement(ca,null)}),r.a.createElement(p.b,{path:sa,element:r.a.createElement(oa,null)}),r.a.createElement(p.b,{path:"*",element:r.a.createElement(Oe,null)})))},pa=t(19),_a=t.n(pa),da=function(){var e=Object(n.useState)(_a.a.menu),a=Object(m.a)(e,2),t=a[0],l=a[1];return console.log(t),r.a.createElement("div",{className:t,onMouseEnter:function(){l("".concat(_a.a.menu," ").concat(_a.a.menu_active))},onMouseLeave:function(){l("".concat(_a.a.menu))}},r.a.createElement("button",{className:_a.a.trigger},r.a.createElement("span",null,"menu")),r.a.createElement("nav",{className:_a.a.menu_list},r.a.createElement(u.b,{to:ua,className:function(e){var a=e.isActive;return _a.a.link+" "+(a?_a.a.link_active:"")}},"PRE-Junior"),r.a.createElement(u.b,{to:ia,className:function(e){var a=e.isActive;return _a.a.link+" "+(a?_a.a.link_active:"")}},"Junior"),r.a.createElement(u.b,{to:sa,className:function(e){var a=e.isActive;return _a.a.link+" "+(a?_a.a.link_active:"")}},"Junior+")))},Ea=function(){return r.a.createElement("div",null,r.a.createElement(da,null),r.a.createElement(ma,null))},ga=function(){return r.a.createElement("div",{className:s.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Ea,null),r.a.createElement(ne.a,null))},fa=t(26),va=t(98),ba=Object(fa.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case Se:return Object(je.a)({},e,{loading:a.loading});default:return e}}}),ha=Object(va.a)({reducer:ba});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,null,r.a.createElement(o.a,{store:ha},r.a.createElement(ga,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},19:function(e,a,t){e.exports={menu:"Header_menu__1KjlI",menu_active:"Header_menu_active__dz_1H",menu_list:"Header_menu_list__2hH9J",trigger:"Header_trigger__2XYXs",link:"Header_link__ZYKtG",link_active:"Header_link_active__3kFHS"}},36:function(e,a,t){e.exports={affairs:"Affairs_affairs__biDDQ",button:"Affairs_button__1qHjS"}},37:function(e,a,t){e.exports={message:"Message_message__2eiXp",avatar:"Message_avatar__LMPZF",messageItem:"Message_messageItem__1BiIo",nameMessage:"Message_nameMessage__3frSZ",name:"Message_name__37k0H",item:"Message_item__2TL5W",time:"Message_time__1bC0u"}},42:function(e,a,t){e.exports={flex:"Greeting_flex__3hj48",valid:"Greeting_valid__3F5nd",error:"Greeting_error__2YOg7",button:"Greeting_button__2Zn4S",textError:"Greeting_textError__2v6Lw"}},43:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__3y2PY",errorInput:"SuperInputText_errorInput__3K27B",error:"SuperInputText_error__3ZZ7d",input:"SuperInputText_input__2aE96",input_invalid:"SuperInputText_input_invalid__4ku3d",input_valid:"SuperInputText_input_valid__2GgXi",errorMessage:"SuperInputText_errorMessage__35yDz"}},44:function(e,a,t){e.exports={superInput:"SuperInputText_superInput__18YRl",errorInput:"SuperInputText_errorInput__2P158",error:"SuperInputText_error__3GcHS",input:"SuperInputText_input__35vHD",input_invalid:"SuperInputText_input_invalid__10sKR",input_valid:"SuperInputText_input_valid__3pTvR",errorMessage:"SuperInputText_errorMessage__1LCBI"}},45:function(e,a,t){e.exports={superInput:"SuperInput_superInput__1lUoB",errorInput:"SuperInput_errorInput__2z5IB",error:"SuperInput_error__1PtGi",input:"SuperInput_input__2Z4Cx",input_invalid:"SuperInput_input_invalid__18-93",input_valid:"SuperInput_input_valid__1l0i7",errorMessage:"SuperInput_errorMessage__2og6d"}},54:function(e,a,t){e.exports={hw6:"HW6_hw6__3IjHz",span:"HW6_span__3jXbG",btns:"HW6_btns__33uxG",button:"HW6_button__27B2a"}},60:function(e,a,t){e.exports={clockSection:"Clock_clockSection__2IYH4",time:"Clock_time__2KDuX",clockControls:"Clock_clockControls__1l-0G"}},64:function(e,a,t){e.exports={button:"SuperButton_button__11y4P",disabled:"SuperButton_disabled__3NUW-",ring:"SuperButton_ring__N1WV7"}},65:function(e,a,t){e.exports={spanClassName:"SuperCheckbox_spanClassName__2BKhs",checkbox:"SuperCheckbox_checkbox__3ubRI",focused:"SuperCheckbox_focused__3wTMj"}},66:function(e,a,t){e.exports={errorPage:"Error404_errorPage__VP57K",waves:"Error404_waves__pI_Pj",errorNum:"Error404_errorNum__1pOQE",flicks:"Error404_flicks__2Rvia",errorTitle:"Error404_errorTitle__2Rv1B",spanflicks:"Error404_spanflicks__3LfC2"}},73:function(e,a,t){e.exports={blue:"HW4_blue__1G_zu",green:"HW4_green__3-JvH",column:"HW4_column__2FPwi",testSpanError:"HW4_testSpanError__W-VDi",buttons:"HW4_buttons__3A3L_"}},74:function(e,a,t){e.exports={button:"SuperButton_button__PY_DX",disabled:"SuperButton_disabled__2jTq6",ring:"SuperButton_ring__2gEHN"}},82:function(e,a,t){e.exports={App:"App_App__1WaCh"}},83:function(e,a,t){e.exports={affair:"Affair_affair__1d080"}},88:function(e,a,t){e.exports={superSpan:"SuperEditableSpan_superSpan__1BaP4"}},95:function(e,a,t){e.exports={range:"SuperRange_range__18CYQ"}},96:function(e,a,t){e.exports={btns:"HW8_btns__2MbR-"}}},[[104,1,2]]]);
//# sourceMappingURL=main.5911d710.chunk.js.map