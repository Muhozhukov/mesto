(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n,r){var o=r.handleCardClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e.name,this._link=e.link,this._cardSelector=n,this._handleCardClick=o}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".element__image").addEventListener("click",(function(){e._handleCardClick()}));var t=this._element.querySelector(".element__like-button");t.addEventListener("click",(function(){t.classList.toggle("element__like-button_active")})),this._element.querySelector(".element__delete-button").addEventListener("click",(function(e){e.target.closest(".element").remove()}))}},{key:"generateCard",value:function(){this._element=this._getTemplate();var e=this._element.querySelector(".element__image");return this._setEventListeners(),e.src=this._link,e.alt=this._title,this._element.querySelector(".element__title").textContent=this._title,this._element}}])&&e(n.prototype,r),t}(),n=document.querySelector(".popup_type_edit-profile"),r=document.querySelector(".popup_type_edit-card"),o=document.querySelector(".popup_type_image"),i=document.querySelector(".profile__edit-button"),u=document.querySelector(".profile__add-button"),c=(n.querySelector(".popup__close-button"),r.querySelector(".popup__close-button"),o.querySelector(".popup__close-button"),n.querySelector(".popup__submit-button"),r.querySelector(".popup__submit-button"),n.querySelector(".popup__input_name")),l=n.querySelector(".popup__input_profession"),s=document.querySelector(".profile__name"),a=document.querySelector(".profile__profession"),p=(r.querySelector(".popup__input_place"),r.querySelector(".popup__input_image-url"),{formSelector:".popup__form",formProfileSelector:".popup__form_profile",formCardSelector:".popup__form_card",inputSelector:".popup__input",inputValidClass:"popup__input_valid",inputErrorClass:"popup__input_invalid",submitButtonSelector:".popup__submit-button",activeButtonSelector:"popup__submit-button_active",disabledButtonSelector:"popup__submit-button_disabled",errorClass:"popup__error_visible"}),f=Array.from(document.querySelectorAll(p.formSelector));function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formSelector=t,this._formElement=document.querySelector(t),this._inputSelector=n.inputSelector,this._inputValidClass=n.inputValidClass,this._inputErrorClass=n.inputErrorClass,this._submitButtonSelector=n.submitButtonSelector,this._activeButtonSelector=n.activeButtonSelector,this._disabledButtonSelector=n.disabledButtonSelector,this._errorClass=n.errorClass}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),t.classList.remove(this._inputValidClass),n.textContent=t.validationMessage,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){var n=e.querySelector("#".concat(t.id,"-error"));t.classList.add(this._inputValidClass),t.classList.remove(this._inputErrorClass),n.textContent="",n.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e,t){t.validity.valid?this._hideInputError(e,t):this._showInputError(e,t)}},{key:"_activeSubmitButton",value:function(e){e.classList.remove(this._disabledButtonSelector),e.classList.add(this._activeButtonSelector),e.disabled=!1}},{key:"_disableSubmitButton",value:function(e){e.classList.remove(this._activeButtonSelector),e.classList.add(this._disabledButtonSelector),e.disabled=!0}},{key:"_checkFormValidity",value:function(e,t){e?this._disableSubmitButton(t):this._activeSubmitButton(t)}},{key:"_setEventListeners",value:function(e){var t=this,n=Array.from(e.querySelectorAll(this._inputSelector)),r=e.querySelector(this._submitButtonSelector);n.forEach((function(o){o.addEventListener("input",(function(){t._checkInputValidity(e,o);var i=n.some((function(e){return!e.validity.valid}));t._checkFormValidity(i,r)}))}))}},{key:"enableValidation",value:function(){var e=this;f.forEach((function(t){t.addEventListener("submit",(function(e){e.preventDefault()})),e._setEventListeners(t)}))}}])&&_(t.prototype,n),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t){var n=t.profileName,r=t.profileDescription;t.formSelector,function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._profileName=n,this._profileDescription=r}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._profileName.textContent,profession:this._profileDescription.textContent}}},{key:"setUserInfo",value:function(e){this._profileName.textContent=e.name,this._profileDescription.textContent=e.profession}}])&&y(t.prototype,n),e}();function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var v=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(){var e=this;this._renderedItems.forEach((function(t){return e._renderer(t)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&h(t.prototype,n),e}();function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var S=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this.escClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(){"Escape"===event.key&&this.closePopup()}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.querySelector(".popup__close-button").addEventListener("click",this.closePopup.bind(this)),this._popupSelector.addEventListener("click",(function(t){t.target.closest(".popup__form")||e.closePopup()}))}},{key:"openPopup",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keyup",this.escClose)}},{key:"closePopup",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keyup",this.escClose)}}])&&b(t.prototype,n),e}();function k(e){return(k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function E(e,t,n){return(E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function C(e,t){return(C=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t){return!t||"object"!==k(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function L(e){return(L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var q=document.querySelector(".popup_type_image"),P=q.querySelector(".popup__image-title"),O=q.querySelector(".popup__image"),j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&C(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function u(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._title=e.name,n._link=e.link,n}return t=u,(n=[{key:"openPopup",value:function(){P.textContent=this._title,O.src=this._link,E(L(u.prototype),"openPopup",this).call(this)}}])&&g(t.prototype,n),u}(S);function I(e){return(I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function x(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(e,t,n){return(B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=D(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function V(e,t){return!t||"object"!==I(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function D(e){return(D=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&R(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=D(r);if(o){var n=D(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return V(this,e)});function u(e,t){var n,r=t.formSubmitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._formSubmitHandler=r,n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._popupSelector.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;this._popupSelector.addEventListener("submit",(function(t){t.preventDefault(),e._formSubmitHandler(e._getInputValues()),e._popupSelector.querySelector(".popup__form").reset(),e.closePopup()})),B(D(u.prototype),"setEventListeners",this).call(this)}},{key:"closePopup",value:function(){this._popupSelector.querySelector(".popup__form").reset(),B(D(u.prototype),"closePopup",this).call(this)}}])&&x(t.prototype,n),u}(S);i.addEventListener("click",(function(){H.openPopup();var e=U.getUserInfo();c.value=e.name,l.value=e.profession})),u.addEventListener("click",(function(){A.openPopup()}));var N=new v({items:[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}],renderer:function(e){var n=new t(e,"#element",{handleCardClick:function(){var t=new j(e,o);t.openPopup(),t.setEventListeners()}}).generateCard();N.addItem(n)}},".elements");N.renderItems();var A=new T(r,{formSubmitHandler:function(e){var n=new t(e,"#element",{handleCardClick:function(){var t=new j(e,o);t.openPopup(),t.setEventListeners()}}).generateCard();N.addItem(n)}});A.setEventListeners();var H=new T(n,{formSubmitHandler:function(e){U.setUserInfo(e)}});H.setEventListeners();var U=new m({profileName:s,profileDescription:a});new d(p.formProfileSelector,p).enableValidation(),new d(p.formCardSelector,p).enableValidation()})();