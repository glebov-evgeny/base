(window.webpackJsonp=window.webpackJsonp||[]).push([[13,5,7],{386:function(e,t,n){"use strict";var o=n(2),r=n(387);o({target:"String",proto:!0,forced:n(388)("link")},{link:function(e){return r(this,"a","href",e)}})},387:function(e,t,n){var o=n(4),r=n(36),d=n(16),l=/"/g,c=o("".replace);e.exports=function(e,t,n,o){var _=d(r(e)),v="<"+t;return""!==n&&(v+=" "+n+'="'+c(d(o),l,"&quot;")+'"'),v+">"+_+"</"+t+">"}},388:function(e,t,n){var o=n(3);e.exports=function(e){return o((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}))}},389:function(e,t,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("178857f8",content,!0,{sourceMap:!1})},390:function(e,t,n){var o=n(52)(!1);o.push([e.i,".a-button{position:relative;display:flex;justify-content:center;align-items:center;width:100%;padding:0.625rem;border:none;border-radius:0.5rem;font-weight:500;cursor:pointer}.a-button .a-button__label{display:flex;justify-content:center;align-items:center;font-size:1.125rem;flex-grow:1}.a-button--default{color:var(--color-text);background-color:var(--color-yellow)}.a-button--bordered{color:var(--a-color-red);background-color:rgba(0,0,0,0);border:0.0625rem solid var(--a-color-red)}.a-button--s-md{min-height:3rem}.a-button--medium{min-height:2.5rem}.a-button--rounded{width:1.875rem;height:1.875rem;border-radius:50%}.a-button[disabled]{opacity:.7;cursor:not-allowed}",""]),e.exports=o},391:function(e,t,n){"use strict";n.r(t);var o=n(18),r=(n(389),{name:"a-button",props:{label:{type:String,default:null},disabled:{type:Boolean,required:!1}},emits:["click"],computed:{classes:function(){var e;return e={"a-button":!0},Object(o.a)(e,"a-button--".concat(this.size||"medium"),!0),Object(o.a)(e,"a-button--".concat(this.bgColor),this.bgColor),Object(o.a)(e,"a-button--".concat(this.addIcon),this.addIcon),e}},methods:{onClickBtn:function(){this.$emit("click")}}}),d=n(35),component=Object(d.a)(r,(function(){var e=this;return(0,e._self._c)("button",{class:e.classes,attrs:{type:"button",disabled:e.disabled},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.onClickBtn.apply(null,arguments)}}})}),[],!1,null,null,null);t.default=component.exports},395:function(e,t,n){var content=n(396);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("0de29a24",content,!0,{sourceMap:!1})},396:function(e,t,n){var o=n(52)(!1);o.push([e.i,'.a-popup{position:fixed;z-index:1001;top:0;right:0;left:0;bottom:0;display:flex;overflow:hidden;overflow-y:auto;justify-content:center;align-items:flex-start;width:100vw;height:calc(var(--vh, 1vh)*100);flex-shrink:0;flex-grow:0;color:var(--color-text)}@media all and (min-width: 768px){.a-popup{padding:var(--a-padding-x8)}}.a-popup__backdrop{position:fixed;z-index:2;top:0;right:0;left:0;bottom:0;width:100%;height:100%;background:rgba(17,37,61,.5)}.a-popup__container{position:relative;z-index:3;display:flex;flex-direction:column;width:fit-content;height:auto;max-height:100%;margin:auto 0.625rem;padding:var(--a-padding-x8) var(--a-padding-x4);background-color:var(--color-bg);flex-shrink:0;flex-grow:0}@media all and (min-width: 768px){.a-popup__container{padding:var(--a-padding-x12) var(--a-padding-x8);border-radius:var(--border-radius-x3)}}.a-popup__close{position:absolute;top:0.5rem;right:1rem;width:2.125rem;height:2.125rem;padding:var(--a-padding-x2);background-color:var(--color-bg);border-radius:var(--border-radius-x1);cursor:pointer}.a-popup__close::before{content:"";position:absolute;width:1.125rem;height:1.125rem;background-image:url("/images/icons/close.svg");background-repeat:no-repeat;background-position:center;transition:all .4s ease}.a-popup__close:hover::before{transform:scale(0.8)}.a-popup__content{overflow-y:auto}.a-popup__content h1,.a-popup__content h2,.a-popup__content h3,.a-popup__content h4,.a-popup__content h5,.a-popup__content h6,.a-popup__content p{margin-bottom:1em}',""]),e.exports=o},397:function(e,t,n){"use strict";n.r(t);n(386),n(395);var o={name:"a-popup",props:{visible:{type:Boolean,default:!1},type:{type:String,validator:function(e){return-1!==["iframe","content"].indexOf(e)},default:"content"},link:{type:String,default:"#"},width:{type:String,default:"100%"}},methods:{closePopup:function(){this.$emit("close",!1)}}},r=n(35),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return e.visible?t("div",{staticClass:"a-popup"},[t("div",{staticClass:"a-popup__backdrop",on:{click:e.closePopup,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closePopup.apply(null,arguments)}}}),e._v(" "),t("div",{staticClass:"a-popup__container",style:"max-width: ".concat(e.width)},[t("div",{staticClass:"a-popup__close",on:{click:e.closePopup,keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.closePopup.apply(null,arguments)}}}),e._v(" "),"iframe"!==e.type?t("div",{staticClass:"a-popup__content"},[e._t("default")],2):t("div",{staticClass:"a-popup__iframe"},[t("iframes",{attrs:{title:"",src:e.link,frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})],1)])]):e._e()}),[],!1,null,null,null);t.default=component.exports},404:function(e,t,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(53).default)("7ad7596b",content,!0,{sourceMap:!1})},405:function(e,t,n){var o=n(52)(!1);o.push([e.i,".s-event{max-width:100vw}.s-event__container{width:100%}.s-event__top{position:relative;display:flex;overflow:hidden;align-items:center}.s-event__top-content{display:flex;flex-direction:column;justify-content:space-between;min-height:35.3125rem;padding:var(--a-padding-x14) var(--a-padding-x4) var(--a-padding-x6)}@media screen and (min-width: 768px){.s-event__top-content{justify-content:center;min-height:23.1875rem;padding:var(--a-padding-x14) var(--a-padding-x4) var(--a-padding-x14)}}@media screen and (min-width: 1200px){.s-event__top-content{min-height:35.3125rem}}.s-event__image{position:absolute;z-index:0;top:0;left:50%;width:100%;min-height:100%;background-position:center;background-size:cover;transform:translateX(-50%);object-fit:cover}.s-event__title{position:relative;z-index:1;color:var(--color-white)}@media screen and (min-width: 768px){.s-event__title{max-width:43.75rem}}@media screen and (min-width: 1200px){.s-event__title{max-width:68.75rem}}.s-event__button{position:relative;margin-top:3.125rem}.s-event__button.disabled{opacity:.7;cursor:default;pointer-events:none}@media screen and (min-width: 768px){.s-event__button{max-width:20.5rem}}.s-event__button--bottom{margin-top:1.5rem}@media screen and (min-width: 1440px){.s-event__button--bottom{max-width:16.875rem;margin-top:2.5rem}}.s-event__block{display:grid;align-items:flex-start;padding:var(--a-padding-x10) var(--a-padding-x4);background:var(--color-white);grid-template-columns:1fr}@media screen and (min-width: 1200px){.s-event__block{margin:2.5rem auto}}@media screen and (min-width: 1440px){.s-event__block{display:flex;justify-content:space-between;padding:var(--a-padding-x15) var(--a-padding-x10);border-radius:var(--border-radius-x3)}}.s-event__aside{display:grid;grid-template-columns:1fr;gap:0.75rem}@media screen and (min-width: 768px){.s-event__aside{grid-template-columns:repeat(2, 1fr)}}@media screen and (min-width: 1440px){.s-event__aside{align-items:flex-start;grid-template-columns:1fr;gap:0;width:100%;max-width:19.375rem}}.s-event__main{display:flex;flex-direction:column;margin-top:1.5rem}@media screen and (min-width: 1440px){.s-event__main{width:100%;margin:0 0 0 3.375rem}}.s-event__main-title{margin-bottom:1.5rem;color:var(--color-text);font-size:1.375rem;font-weight:500;line-height:1.5rem}@media screen and (min-width: 1440px){.s-event__main-title{font-size:2rem;line-height:2.5rem}}.s-event__main-content p{font-size:1rem;font-weight:400;line-height:1.375rem}@media screen and (min-width: 1440px){.s-event__main-content p{font-size:1.25rem;line-height:1.75rem}}.s-event__main-content p strong{font-size:1.125rem;font-weight:500;line-height:1.5rem}@media screen and (min-width: 1440px){.s-event__main-content p strong{font-size:1.25rem;line-height:1.75rem}}.s-event__box{padding:var(--a-padding-x4) var(--a-padding-x6);background:var(--color-bg);border-radius:var(--border-radius-x3)}@media screen and (min-width: 768px){.s-event__box{padding:var(--a-padding-x6)}}@media screen and (min-width: 1440px){.s-event__box:first-child{padding:var(--a-padding-x8) var(--a-padding-x8) 0 var(--a-padding-x8);border-radius:var(--border-radius-x3) var(--border-radius-x3) 0 0}.s-event__box:last-child{padding:var(--a-padding-x6) var(--a-padding-x8) var(--a-padding-x8) var(--a-padding-x8);border-radius:0 0 var(--border-radius-x3) var(--border-radius-x3)}}.s-event__box-description{margin-bottom:0.5rem;font-size:1rem;line-height:1.25rem}.s-event__box-text{font-size:1.25rem;font-weight:500;line-height:1.625rem}.s-event__popup{padding:0}.s-event__popup .a-popup .a-button__label{font-size:1rem}@media screen and (min-width: 768px){.s-event__popup .a-popup .a-button__label{font-size:1.125rem}}.s-event__popup .a-popup .a-button--accent{background-color:var(--color-orange);font-size:1rem}.s-event__popup .a-popup__container{padding:0}.s-event__popup .a-popup__content{border-radius:var(--a-padding-x6)}",""]),e.exports=o},418:function(e,t,n){"use strict";n.r(t);n(21),n(23),n(37),n(404);var o={name:"s-event",props:{eventCurrent:{type:Object,default:function(){return{}}},dateStart:String,dateEnd:String},data:function(){return{showPopup:!1,title:"Регистрация",checkboxText:"Я даю согласие на обработку персональных данных\n      и получение информационных рассылок от Университета «Синергия»,\n      а также с политикой конфиденциальности",btnText:"Записаться",typeCtrl:"checkbox",typeBtn:"checkbox",checked:!0,titleClass:null,subtitle:null}}},r=n(35),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"s-event"},[t("div",{staticClass:"s-event__top"},[t("div",{staticClass:"s-event__image",style:{backgroundImage:"url(".concat(e.eventCurrent.imageUrl,")")}}),e._v(" "),t("div",{staticClass:"s-event__container s-event__top-content l-wide"},[t("h1",{staticClass:"s-event__title s-title"},[e._v(e._s(e.eventCurrent.name))]),e._v(" "),t("a-button",{staticClass:"s-event__button",class:[{disabled:e.eventCurrent.limitIsOver}],attrs:{bgColor:"default",size:"s-md",label:"Принять участие",type:"primary"},on:{click:function(t){e.showPopup=!e.showPopup}}})],1)]),e._v(" "),t("div",{staticClass:"s-event__container l-wide"},[t("div",{staticClass:"s-event__block"},[t("div",{staticClass:"s-event__aside"},[t("div",{staticClass:"s-event__box"},[t("p",{staticClass:"s-event__box-description"},[e._v("Дата проведения:")]),e._v(" "),t("p",{staticClass:"s-event__box-text"},[t("span",[e._v(e._s(e.dateStart))]),e._v(" "),0!=e.dateEnd?t("span",[e._v("- "+e._s(e.dateEnd))]):e._e()])]),e._v(" "),e.eventCurrent.isOnline?t("div",{staticClass:"s-event__box"},[t("p",{staticClass:"s-event__box-description"},[e._v("Формат проведения:")]),e._v(" "),t("p",{staticClass:"s-event__box-text"},[e._v("Онлайн")])]):t("div",{staticClass:"s-event__box"},[t("p",{staticClass:"s-event__box-description"},[e._v("Адрес проведения:")]),e._v(" "),t("p",{staticClass:"s-event__box-text"},[e._v(e._s(e.eventCurrent.address))])])]),e._v(" "),t("div",{staticClass:"s-event__main"},[t("p",{staticClass:"s-event__main-title"},[e._v(e._s(e.eventCurrent.name))]),e._v(" "),t("div",{staticClass:"s-event__main-content",domProps:{innerHTML:e._s(e.eventCurrent.description)}}),e._v(" "),t("a-button",{staticClass:"s-event__button s-event__button--bottom",class:[{disabled:e.eventCurrent.limitIsOver}],attrs:{bgColor:"default",size:"s-md",label:"Принять участие",type:"primary"},on:{click:function(t){e.showPopup=!e.showPopup}}})],1)])]),e._v(" "),t("a-popup",{staticClass:"s-event__popup",attrs:{visible:e.showPopup,width:"800px"},on:{close:function(t){e.showPopup=!1}}},[t("m-form-registration",{attrs:{title:e.title,checkboxText:e.checkboxText,btnText:e.btnText,typeCtrl:e.typeCtrl,typeBtn:e.typeBtn,checked:!0,subtitle:e.subtitle,titleClass:e.titleClass,eventCurrent:e.eventCurrent}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{AButton:n(391).default,MFormRegistration:n(415).default,APopup:n(397).default})}}]);