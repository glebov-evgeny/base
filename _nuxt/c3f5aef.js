(window.webpackJsonp=window.webpackJsonp||[]).push([[16,5],{386:function(t,n,e){"use strict";var r=e(2),o=e(387);r({target:"String",proto:!0,forced:e(388)("link")},{link:function(t){return o(this,"a","href",t)}})},387:function(t,n,e){var r=e(4),o=e(36),d=e(16),c=/"/g,l=r("".replace);t.exports=function(t,n,e,r){var m=d(o(t)),h="<"+n;return""!==e&&(h+=" "+e+'="'+l(d(r),c,"&quot;")+'"'),h+">"+m+"</"+n+">"}},388:function(t,n,e){var r=e(3);t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},389:function(t,n,e){var content=e(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("178857f8",content,!0,{sourceMap:!1})},390:function(t,n,e){var r=e(52)(!1);r.push([t.i,".a-button{position:relative;display:flex;justify-content:center;align-items:center;width:100%;padding:0.625rem;border:none;border-radius:0.5rem;font-weight:500;cursor:pointer}.a-button .a-button__label{display:flex;justify-content:center;align-items:center;font-size:1.125rem;flex-grow:1}.a-button--default{color:var(--color-text);background-color:var(--color-yellow)}.a-button--bordered{color:var(--a-color-red);background-color:rgba(0,0,0,0);border:0.0625rem solid var(--a-color-red)}.a-button--s-md{min-height:3rem}.a-button--medium{min-height:2.5rem}.a-button--rounded{width:1.875rem;height:1.875rem;border-radius:50%}.a-button[disabled]{opacity:.7;cursor:not-allowed}",""]),t.exports=r},391:function(t,n,e){"use strict";e.r(n);var r=e(18),o=(e(389),{name:"a-button",props:{label:{type:String,default:null},disabled:{type:Boolean,required:!1}},emits:["click"],computed:{classes:function(){var t;return t={"a-button":!0},Object(r.a)(t,"a-button--".concat(this.size||"medium"),!0),Object(r.a)(t,"a-button--".concat(this.bgColor),this.bgColor),Object(r.a)(t,"a-button--".concat(this.addIcon),this.addIcon),t}},methods:{onClickBtn:function(){this.$emit("click")}}}),d=e(35),component=Object(d.a)(o,(function(){var t=this;return(0,t._self._c)("button",{class:t.classes,attrs:{type:"button",disabled:t.disabled},on:{click:function(n){return n.preventDefault(),n.stopPropagation(),t.onClickBtn.apply(null,arguments)}}})}),[],!1,null,null,null);n.default=component.exports},393:function(t,n){t.exports=function(t){t.options.__i18n=t.options.__i18n||[],t.options.__i18n.push('{"ru":{"login":"Войти"},"en":{"login":"Login"}}'),delete t.options._Ctor}},401:function(t,n,e){var content=e(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(53).default)("1f31a498",content,!0,{sourceMap:!1})},402:function(t,n,e){var r=e(52)(!1);r.push([t.i,".s-thanks{max-width:100vw}.s-thanks__container{width:100%}.s-thanks__top{position:relative;display:flex;overflow:hidden;align-items:center}.s-thanks__top-content{display:flex;flex-direction:column;justify-content:space-between;min-height:35.3125rem;padding:var(--a-padding-x14) var(--a-padding-x4) var(--a-padding-x6)}@media screen and (min-width: 768px){.s-thanks__top-content{justify-content:center;min-height:30rem;padding:var(--a-padding-x14) var(--a-padding-x4) var(--a-padding-x14)}.s-thanks__top-content.--full{min-height:70vh}}@media screen and (min-width: 1200px){.s-thanks__top-content{min-height:40.625rem}}.s-thanks__image{position:absolute;z-index:0;top:0;left:50%;width:100%;min-height:100%;background-position:center;background-size:cover;transform:translateX(-50%);object-fit:cover}.s-thanks__image.--compact{background:#bb6868}.s-thanks__title{position:relative;z-index:1;color:var(--color-white)}@media screen and (min-width: 768px){.s-thanks__title{max-width:43.75rem}}@media screen and (min-width: 1200px){.s-thanks__title{max-width:68.75rem}}.s-thanks__navigation{display:grid;grid-template-columns:1fr;gap:0.75rem}@media screen and (min-width: 768px){.s-thanks__navigation{grid-template-columns:repeat(2, 1fr);align-items:flex-end;max-width:37.5rem}}.s-thanks__vk{position:relative;display:flex;justify-content:center;align-items:center;width:100%;min-height:3rem;background:var(--color-white);border-radius:var(--border-radius-x2);font-size:1rem;font-weight:500;text-align:center}@media screen and (min-width: 768px){.s-thanks__vk{max-width:20.5rem}}.s-thanks__vk-icon{margin-left:1.5rem}.s-thanks__button{position:relative;margin-top:3.125rem}.s-thanks__button.disabled{opacity:.7;cursor:default;pointer-events:none}@media screen and (min-width: 768px){.s-thanks__button{max-width:20.5rem}}.s-thanks__button--bottom{margin-top:1.5rem}@media screen and (min-width: 1440px){.s-thanks__button--bottom{max-width:16.875rem;margin-top:2.5rem}}.s-thanks__block{display:grid;align-items:flex-start;padding:var(--a-padding-x10) var(--a-padding-x4);background:var(--color-white);grid-template-columns:1fr}@media screen and (min-width: 1200px){.s-thanks__block{margin:2.5rem auto}}@media screen and (min-width: 1440px){.s-thanks__block{display:flex;justify-content:space-between;padding:var(--a-padding-x15) var(--a-padding-x10);border-radius:var(--border-radius-x3)}}.s-thanks__aside{display:grid;grid-template-columns:1fr;gap:0.75rem}@media screen and (min-width: 768px){.s-thanks__aside{grid-template-columns:repeat(2, 1fr)}}@media screen and (min-width: 1440px){.s-thanks__aside{align-items:flex-start;grid-template-columns:1fr;gap:0;width:100%;max-width:19.375rem}}.s-thanks__main{display:flex;flex-direction:column;margin-top:1.5rem}@media screen and (min-width: 1440px){.s-thanks__main{width:100%;margin:0 0 0 3.375rem}}.s-thanks__main-title{margin-bottom:1.5rem;color:var(--color-text);font-size:1.375rem;font-weight:500;line-height:1.5rem}@media screen and (min-width: 1440px){.s-thanks__main-title{font-size:2rem;line-height:2.5rem}}.s-thanks__main-content p{font-size:1rem;font-weight:400;line-height:1.375rem}@media screen and (min-width: 1440px){.s-thanks__main-content p{font-size:1.25rem;line-height:1.75rem}}.s-thanks__main-content p strong{font-size:1.125rem;font-weight:500;line-height:1.5rem}@media screen and (min-width: 1440px){.s-thanks__main-content p strong{font-size:1.25rem;line-height:1.75rem}}.s-thanks__box{padding:var(--a-padding-x4) var(--a-padding-x6);background:var(--color-bg);border-radius:var(--border-radius-x3)}@media screen and (min-width: 768px){.s-thanks__box{padding:var(--a-padding-x6)}}@media screen and (min-width: 1440px){.s-thanks__box:first-child{padding:var(--a-padding-x8) var(--a-padding-x8) 0 var(--a-padding-x8);border-radius:var(--border-radius-x3) var(--border-radius-x3) 0 0}.s-thanks__box:last-child{padding:var(--a-padding-x6) var(--a-padding-x8) var(--a-padding-x8) var(--a-padding-x8);border-radius:0 0 var(--border-radius-x3) var(--border-radius-x3)}}.s-thanks__box-description{margin-bottom:0.5rem;font-size:1rem;line-height:1.25rem}.s-thanks__box-text{font-size:1.25rem;font-weight:500;line-height:1.625rem}.s-thanks__popup{padding:0}.s-thanks__popup .a-popup .a-button__label{font-size:1rem}@media screen and (min-width: 768px){.s-thanks__popup .a-popup .a-button__label{font-size:1.125rem}}.s-thanks__popup .a-popup .a-button--accent{background-color:var(--color-orange);font-size:1rem}.s-thanks__popup .a-popup__container{padding:0}.s-thanks__popup .a-popup__content{border-radius:var(--a-padding-x6)}",""]),t.exports=r},403:function(t,n,e){"use strict";var r=e(393),o=e.n(r);n.default=o.a},417:function(t,n,e){"use strict";e.r(n);e(21);var r=e(5),o=(e(54),e(31),e(32),e(11),e(27),e(45),e(386),e(401),{name:"s-thanks",data:function(){return{content:{}||null,link:"http://vkontakte.ru/share.php",name:"",answerForVK:{}}},methods:{goBack:function(){this.$router.go(-1)},getContent:function(){sessionStorage.getItem("thankspage")?(this.content=JSON.parse(sessionStorage.getItem("thankspage")),this.answerForVK={url:"https://synergystart.ru/",title:this.trimText(this.content.name,100),image:"https://synergystart.ru/images/logo-for-vk.png",noparse:!0}):this.content=null},trimText:function(text,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"...",e=text.indexOf(" ",t);return-1===e&&(e=t),text.slice(0,e)+n}},computed:{paramsLink:function(){var t=this,n="",e=Object.keys(this.answerForVK);return e.forEach((function(r,i){var o=e.length-1!==i?"&":"";n+="".concat(r,"=").concat(t.answerForVK[r]).concat(o)})),"".concat(this.link,"?").concat(n)}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.getContent();case 1:case"end":return n.stop()}}),n)})))()}}),d=o,c=e(35),l=e(403),component=Object(c.a)(d,(function(){var t=this,n=t._self._c;return n("section",{staticClass:"s-thanks"},[n("div",{staticClass:"s-thanks__top"},[null!==t.content?n("div",{staticClass:"s-thanks__image",style:{backgroundImage:"url(".concat(t.content.imageUrl,")")}}):n("div",{staticClass:"s-thanks__image --compact"}),t._v(" "),n("div",{staticClass:"s-thanks__container s-thanks__top-content l-wide",class:{"--full":null==t.content}},[n("h1",{staticClass:"s-thanks__title s-title"},[t._v("\n        Поздравляем! "+t._s(t.$t("login"))+" Ты успешно зарегистрировался на\n        "+t._s(null!==t.content?t.content.name:"мероприятие")+"\n      ")]),t._v(" "),n("div",{staticClass:"s-thanks__navigation"},[n("a-button",{staticClass:"s-thanks__button",attrs:{bgColor:"default",size:"s-md",label:"Вернуться на главную",type:"primary"},on:{click:function(n){return t.goBack()}}}),t._v(" "),null!==t.content?n("a",{staticClass:"s-thanks__vk",attrs:{href:t.paramsLink,target:"_blank"}},[t._v("\n          Поделиться\n          "),n("svg",{staticClass:"s-thanks__vk-icon",attrs:{width:"26",height:"26",viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M16.9651 0.0834961H9.03426C1.80093 0.0834961 0.0830078 1.80141 0.0830078 9.03475V16.9656C0.0830078 24.1989 1.80093 25.9168 9.03426 25.9168H16.9651C24.1984 25.9168 25.9163 24.1989 25.9163 16.9656V9.03475C25.9163 1.80141 24.1984 0.0834961 16.9651 0.0834961ZM20.9434 18.5156H19.0576C18.3472 18.5156 18.1276 17.9343 16.8747 16.6556C15.738 15.5835 15.2472 15.4285 14.9759 15.4285C14.6013 15.4285 14.4851 15.5318 14.4851 16.0743V17.7664C14.4851 18.2185 14.343 18.5027 13.1418 18.5027C11.1526 18.5027 8.94384 17.2885 7.39384 15.0539C5.05592 11.7731 4.42301 9.29308 4.42301 8.80225C4.42301 8.531 4.51342 8.27266 5.05592 8.27266H6.95468C7.43259 8.27266 7.61342 8.47933 7.79426 8.996C8.72426 11.7085 10.2743 14.0335 10.9072 14.0335C11.1526 14.0335 11.2559 13.9172 11.2559 13.3231V10.546C11.1913 9.28016 10.5068 9.16391 10.5068 8.71183C10.5068 8.47933 10.6876 8.27266 10.9847 8.27266H13.9426C14.343 8.27266 14.4851 8.47933 14.4851 8.97016V12.7031C14.4851 13.1035 14.653 13.2456 14.7822 13.2456C15.0147 13.2456 15.2213 13.1035 15.6476 12.6643C17.0038 11.1531 17.9726 8.81516 17.9726 8.81516C18.1018 8.54391 18.3084 8.28558 18.8122 8.28558H20.6593C21.2276 8.28558 21.3568 8.58266 21.2276 8.98308C20.9951 10.081 18.6959 13.3231 18.7218 13.3231C18.5151 13.646 18.4376 13.7881 18.7218 14.1627C18.9155 14.4339 19.5743 15.0022 20.0134 15.506C20.8143 16.4231 21.4343 17.1852 21.6022 17.7147C21.7443 18.2443 21.4859 18.5156 20.9434 18.5156Z",fill:"black"}})])]):t._e()],1)])])])}),[],!1,null,null,null);"function"==typeof l.default&&Object(l.default)(component);n.default=component.exports;installComponents(component,{AButton:e(391).default})}}]);