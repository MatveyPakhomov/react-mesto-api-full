(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{12:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},25:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(13),i=n.n(s),o=(n(12),n(16)),r=n(3),l=n(7),u=n(6),p=n.p+"static/media/header-logo.03b78ada.svg",d=n(0),j=["userData"];function m(e){var t=e.userData,n=Object(l.a)(e,j);return Object(d.jsx)("header",{className:"header page__header",children:Object(d.jsxs)("section",{className:"header__section",children:[Object(d.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f: \u041c\u0435\u0441\u0442\u043e - \u0420\u043e\u0441\u0441\u0438\u044f",className:"header__logo"}),Object(d.jsxs)("section",{className:"header__user-section",children:[Object(d.jsx)("p",{className:"header__user-email",children:t.email}),Object(d.jsx)(u.b,{to:"".concat(t.link||"/sign-up"),className:"header__link",onClick:n.onSignOut,children:t.title||"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"})]})]})})}var b=n(5),h=c.a.createContext();function A(e){var t,n=c.a.useContext(h),a=e.ownerId===n._id,s="card__delete-button ".concat(a?"card__delete-button_visible":"card__delete-button_hidden"),i=e.likes.some((function(e){return e._id===n._id})),o="card__like-button ".concat(i?"card__like-button_active":"card__like-button");return Object(d.jsxs)("li",{className:"card",children:[Object(d.jsx)("img",{className:"card__image",onClick:function(){e.handleClick(e)},src:e.url,alt:e.alt}),Object(d.jsxs)("div",{className:"card__section",children:[Object(d.jsx)("h2",{className:"card__title",children:e.title}),Object(d.jsx)("button",{type:"button",onClick:function(){e.onCardDelete(e)},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",className:s}),Object(d.jsxs)("div",{className:"card__like-section",children:[Object(d.jsx)("button",{type:"button",onClick:function(){e.onCardLike(e)},"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u043c\u043d\u0435 \u043d\u0440\u0430\u0432\u0438\u0442\u0441\u044f",className:o}),Object(d.jsx)("p",{className:"card__like-counter",children:null===(t=e.likes)||void 0===t?void 0:t.length})]})]})]})}var f=["key"];function O(e){var t=c.a.useContext(h);return Object(d.jsxs)("main",{className:"content",children:[Object(d.jsxs)("section",{className:"profile content__profile",children:[Object(d.jsx)("button",{type:"button",onClick:e.onEditAvatar,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u043f\u043e\u043c\u0435\u043d\u044f\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",className:"profile__avatar-edit-button",children:Object(d.jsx)("img",{src:t.avatar?t.avatar:"data:image/jpeg;base64,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",alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: \u043f\u043e\u0440\u0442\u0440\u0435\u0442 - \u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e",className:"profile__avatar"})}),Object(d.jsxs)("div",{className:"profile__info",children:[Object(d.jsx)("h1",{className:"profile__title",children:t.name?t.name:"\u0416\u0430\u043a-\u0418\u0432 \u041a\u0443\u0441\u0442\u043e"}),Object(d.jsx)("button",{type:"button",onClick:e.onEditProfile,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",className:"profile__edit-button"}),Object(d.jsx)("p",{className:"profile__subtitle",children:t.about?t.about:"\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u043e\u043a\u0435\u0430\u043d\u0430"})]}),Object(d.jsx)("button",{type:"button",onClick:e.onAddPlace,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043c\u0435\u0441\u0442\u043e",className:"profile__add-button"})]}),Object(d.jsx)("div",{className:"cards",children:Object(d.jsx)("ul",{className:"cards__list",children:e.cards.map((function(t){var n=t.key,a=Object(l.a)(t,f);return Object(d.jsx)(A,Object(b.a)({handleClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},a),n)}))})})]})}function g(){var e=(new Date).getFullYear();return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsxs)("p",{className:"footer__title",children:["\xa9 ",e," Mesto Russia"]})})}function x(e){return Object(d.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(e.isOpen?"popup_opened":""),children:Object(d.jsxs)("div",{className:"popup__container ".concat(e.containerName),children:[Object(d.jsx)("button",{type:"button",onClick:e.onClose,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-button"}),Object(d.jsx)("h2",{className:"popup__title",children:e.title}),Object(d.jsxs)("form",{className:"popup__form popup__form_type_".concat(e.name),onSubmit:e.onSubmit,children:[e.children,Object(d.jsx)("button",{type:"submit",className:"popup__submit-button",children:e.submitButtonName})]})]})})}function N(e){var t,n,a;return Object(d.jsx)("div",{className:"popup popup_type_image ".concat(e.card?"popup_opened":""),children:Object(d.jsxs)("figure",{className:"popup__image-field",children:[Object(d.jsx)("button",{type:"button",onClick:e.onClose,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",className:"popup__close-button popup__close-button_image"}),Object(d.jsx)("img",{className:"popup__image",src:null===(t=e.card)||void 0===t?void 0:t.url,alt:null===(n=e.card)||void 0===n?void 0:n.title}),Object(d.jsx)("figcaption",{className:"popup__caption",children:null===(a=e.card)||void 0===a?void 0:a.title})]})})}var v=n(14),C=n(15),B=new(function(){function e(t){Object(v.a)(this,e),this.url=t.baseUrl,this.headers=t.headers}return Object(C.a)(e,[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}},{key:"getUserInfo",value:function(){return fetch(this.url+"/users/me",{credentials:"include",headers:this.headers}).then(this._checkResponse)}},{key:"getCardList",value:function(){return fetch(this.url+"/cards",{credentials:"include",headers:this.headers}).then(this._checkResponse)}},{key:"setUserInfo",value:function(e){return fetch(this.url+"/users/me",{method:"PATCH",credentials:"include",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"addNewCard",value:function(e){return fetch(this.url+"/cards",{method:"POST",credentials:"include",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"setUserAvatar",value:function(e){return fetch(this.url+"/users/me/avatar",{method:"PATCH",credentials:"include",headers:this.headers,body:JSON.stringify(e)}).then(this._checkResponse)}},{key:"deleteCard",value:function(e){return fetch(this.url+"/cards/".concat(e),{method:"DELETE",credentials:"include",headers:this.headers}).then(this._checkResponse)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch(this.url+"/cards/likes/".concat(e),{method:t?"DELETE":"PUT",credentials:"include",headers:this.headers}).then(this._checkResponse)}}]),e}())({baseUrl:"https://api.pakhomov.nomoredomains.rocks",headers:{Authorization:"Bearer ".concat(document.cookie.slice(4)),"Content-Type":"application/json"}});function y(e){var t=c.a.useContext(h),n=c.a.useState(""),a=Object(r.a)(n,2),s=a[0],i=a[1],o=c.a.useState(""),l=Object(r.a)(o,2),u=l[0],p=l[1];return c.a.useEffect((function(){i(t.name),p(t.about)}),[t,e.isOpen]),Object(d.jsxs)(x,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submitButtonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:u})},children:[Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{type:"text",id:"edit-title",value:s||"",onChange:function(e){i(e.target.value)},name:"name",className:"popup__input popup__input_value_name",placeholder:"\u0418\u043c\u044f",required:!0,minLength:"2",maxLength:"40"}),Object(d.jsx)("span",{id:"edit-title-error",className:"popup__input-error"})]}),Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{type:"text",id:"edit-subtitle",value:u||"",onChange:function(e){p(e.target.value)},name:"link",className:"popup__input popup__input_value_job",placeholder:"\u0412\u0438\u0434 \u0434\u0435\u044f\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438",required:!0,minLength:"2",maxLength:"200"}),Object(d.jsx)("span",{id:"edit-subtitle-error",className:"popup__input-error"})]})]})}function V(e){var t=c.a.useRef();return Object(d.jsx)(x,{name:"edit-avatar",containerName:"popup__container_type_edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submitButtonName:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},children:Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{type:"url",id:"update-avatar",ref:t,name:"avatar",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043d\u043e\u0432\u044b\u0439 \u0430\u0432\u0430\u0442\u0430\u0440",className:"popup__input popup__input_value_link",required:!0}),Object(d.jsx)("span",{id:"update-avatar-error",className:"popup__input-error"})]})})}function E(e){var t=c.a.useState(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=c.a.useState(""),o=Object(r.a)(i,2),l=o[0],u=o[1];return c.a.useEffect((function(){s(""),u("")}),[e.isOpen]),Object(d.jsxs)(x,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submitButtonName:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:a,link:l})},children:[Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{type:"text",id:"create-title",value:a||"",onChange:function(e){s(e.target.value)},name:"name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",className:"popup__input popup__input_value_place",required:!0,minLength:"2",maxLength:"30"}),Object(d.jsx)("span",{id:"create-title-error",className:"popup__input-error"})]}),Object(d.jsxs)("section",{className:"popup__section",children:[Object(d.jsx)("input",{type:"url",id:"create-subtitle",value:l||"",onChange:function(e){u(e.target.value)},name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__input popup__input_value_link",required:!0}),Object(d.jsx)("span",{id:"create-subtitle-error",className:"popup__input-error"})]})]})}function U(e){return console.log(e),{ownerId:e.owner._id,cardId:e._id,key:e._id,url:e.link,title:e.name,alt:e.name,likes:e.likes}}var L=n(2),q=n(9);n(22);function k(e){var t=c.a.useState({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(q.a)({},n,a))}))}return Object(d.jsx)("div",{className:"login page__login",children:Object(d.jsxs)("section",{className:"login__section",children:[Object(d.jsx)("h2",{className:"login__title",children:"\u0412\u0445\u043e\u0434"}),Object(d.jsxs)("form",{className:"login__form",onSubmit:function(t){t.preventDefault();var n=a.email,c=a.password;e.onLogin(n,c)},children:[Object(d.jsx)("input",{required:!0,id:"email",name:"email",type:"email",value:a.email,className:"login__input",placeholder:"Email",onChange:i}),Object(d.jsx)("input",{required:!0,id:"password",name:"password",type:"password",value:a.password,className:"login__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:i}),Object(d.jsx)("button",{type:"submit",className:"login__submit-button",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})}n(23);function w(e){var t=c.a.useState({email:"",password:""}),n=Object(r.a)(t,2),a=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s((function(e){return Object(b.a)(Object(b.a)({},e),{},Object(q.a)({},n,a))}))}return Object(d.jsx)("div",{className:"register page__register",children:Object(d.jsxs)("section",{className:"register__section",children:[Object(d.jsx)("h2",{className:"register__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(d.jsxs)("form",{className:"register__form",onSubmit:function(t){t.preventDefault();var n=a.email,c=a.password;e.onRegister(n,c)},children:[Object(d.jsx)("input",{required:!0,id:"email",name:"email",type:"email",value:a.email,className:"register__input",placeholder:"Email",onChange:i}),Object(d.jsx)("input",{required:!0,id:"password",name:"password",type:"password",value:a.password,className:"register__input",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",onChange:i}),Object(d.jsx)("button",{type:"submit",className:"register__submit-button",children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"}),Object(d.jsxs)("section",{className:"register__signin-section",children:[Object(d.jsx)("p",{className:"register__signin",children:"\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?"}),Object(d.jsx)(u.b,{to:"/sign-in",className:"register__login-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})]})})}n(24);var S=n.p+"static/media/fail.df8eddf6.svg",Q=n.p+"static/media/success.1b6082f8.svg",I=["data"];function J(e){var t=e.data,n=Object(l.a)(e,I);return Object(d.jsx)("div",{className:"popup infoTooltip ".concat(n.isOpen?"infoTooltip_opened":""),children:Object(d.jsxs)("div",{className:"infoTooltip__container",children:[Object(d.jsx)("button",{type:"button",onClick:n.onClose,"aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430: \u0437\u0430\u043a\u0440\u044b\u0442\u044c",className:"infoTooltip__close-button"}),Object(d.jsx)("img",{className:"infoTooltip__image",src:"success"===t.className?Q:S,alt:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430: ".concat("success"===t.className?"\u0447\u0435\u0440\u043d\u0430\u044f \u0433\u0430\u043b\u043e\u0447\u043a\u0430":"\u043a\u0440\u0430\u0441\u043d\u044b\u0439 \u043a\u0440\u0435\u0441\u0442\u0438\u043a"," \u0432 \u043a\u0440\u0443\u0436\u043a\u0435")}),Object(d.jsx)("p",{className:"infoTooltip__title",children:"success"===t.className?"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!":"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})}var M=["component"];function Z(e){var t=e.component,n=Object(l.a)(e,M);return n.loggedIn?Object(d.jsx)(t,Object(b.a)({},n)):Object(d.jsx)(L.a,{to:"/sign-in"})}var D="https://api.pakhomov.nomoredomains.rocks";function R(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status," ").concat(e.statusText))}function W(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=c.a.useState(!1),i=Object(r.a)(s,2),l=i[0],u=i[1],p=c.a.useState(!1),j=Object(r.a)(p,2),b=j[0],A=j[1],f=c.a.useState(null),v=Object(r.a)(f,2),C=v[0],q=v[1],S=c.a.useState({}),Q=Object(r.a)(S,2),I=Q[0],M=Q[1],W=c.a.useState([]),K=Object(r.a)(W,2),H=K[0],X=K[1],T=c.a.useState(!1),F=Object(r.a)(T,2),_=F[0],z=F[1],G=c.a.useState({}),Y=Object(r.a)(G,2),P=Y[0],$=Y[1],ee=c.a.useState(!1),te=Object(r.a)(ee,2),ne=te[0],ae=te[1],ce=c.a.useState({}),se=Object(r.a)(ce,2),ie=se[0],oe=se[1],re=Object(L.g)();function le(){a(!1),u(!1),A(!1),q(null),ae(!1),oe({})}function ue(){fetch("".concat(D,"/users/me"),{method:"GET",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"}}).then(R).then((function(e){return e})).then((function(e){z(!0),re("/"),$({email:e.email,title:"\u0412\u044b\u0439\u0442\u0438",link:"/sign-in"})})).catch((function(e){return console.log(e)}))}return c.a.useEffect((function(){_&&Promise.all([B.getUserInfo(),B.getCardList()]).then((function(e){var t=Object(r.a)(e,2),n=t[0],a=t[1];M(n),X(a.map((function(e){return U(e)})))})).catch((function(e){return console.log(e)}))}),[_]),c.a.useEffect((function(){function e(e){"Escape"===e.key&&le()}return document.addEventListener("keyup",e),function(){return document.removeEventListener("keyup",e)}})),c.a.useEffect((function(){function e(e){e.target.classList.contains("popup")&&le()}return document.addEventListener("mousedown",e),function(){return document.removeEventListener("mousedown",e)}}),[]),c.a.useEffect((function(){document.cookie.slice(4)&&ue()}),[_]),Object(d.jsx)(h.Provider,{value:I,children:Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)("div",{className:"page",children:[Object(d.jsx)(m,{userData:P,onSignOut:function(){localStorage.removeItem("token"),z(!1),re("/sign-in"),$({title:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",link:"/sign-up"})}}),Object(d.jsxs)(L.d,{children:[Object(d.jsx)(L.b,{path:"/",element:Object(d.jsx)(Z,{component:O,loggedIn:_,onEditProfile:function(){a(!0)},onAddPlace:function(){u(!0)},onEditAvatar:function(){A(!0)},onCardClick:function(e){q(e)},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));B.changeLikeCardStatus(e.cardId,t).then((function(t){X((function(n){return n.map((function(n){return console.log(123,n),n.cardId===e.cardId?U(t):n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){B.deleteCard(e.cardId).then((function(){X((function(t){return t.filter((function(t){return t.cardId!==e.cardId}))}))})).catch((function(e){return console.log(e)}))},cards:H})}),Object(d.jsx)(L.b,{path:"/sign-in",element:Object(d.jsx)(k,{onLogin:function(e,t){return function(e,t){return fetch("".concat(D,"/signin"),{method:"POST",credentials:"include",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)}(e,t).then((function(e){e&&(z(!0),re("/"))})).catch((function(e){ae(!0),oe({className:"fail"}),console.log(e)}))}})}),Object(d.jsx)(L.b,{path:"/sign-up",element:Object(d.jsx)(w,{onRegister:function(e,t){return function(e,t){return fetch("".concat(D,"/signup"),{method:"POST",credentials:"include",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(R)}(e,t).then((function(){ae(!0),oe({className:"success"}),re("/sign-in")})).catch((function(e){ae(!0),oe({className:"fail"}),console.log(e)}))}})}),Object(d.jsx)(L.b,{path:"*",element:_?"/":Object(d.jsx)(L.a,{to:"/sign-in"})})]}),Object(d.jsx)(g,{}),Object(d.jsx)(y,{isOpen:n,onClose:le,onUpdateUser:function(e){B.setUserInfo(e).then((function(e){M(e),le()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(E,{isOpen:l,onClose:le,onAddPlace:function(e){B.addNewCard(e).then((function(e){console.log(e),X((function(){return[U(e)].concat(Object(o.a)(H))})),le()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(V,{isOpen:b,onClose:le,onUpdateAvatar:function(e){B.setUserAvatar(e).then((function(e){M(e),le()})).catch((function(e){return console.log(e)}))}}),Object(d.jsx)(x,{name:"delete-place",containerName:"popup__container_type_delete-place",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",submitButtonName:"\u0414\u0430"}),Object(d.jsx)(N,{card:C,onClose:le}),Object(d.jsx)(J,{isOpen:ne,onClose:le,data:ie})]})})})}var K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(u.a,{children:Object(d.jsx)(W,{})})}),document.getElementById("root")),K()}},[[25,1,2]]]);
//# sourceMappingURL=main.e7fa0e0a.chunk.js.map