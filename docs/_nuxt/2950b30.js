(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,4,7,8],{401:function(t,e,r){t.exports=r.p+"img/heading-line-dec.13b0f84.png"},402:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("fc37e000",content,!0,{sourceMap:!1})},403:function(t,e,r){var content=r(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(90).default)("170ccf82",content,!0,{sourceMap:!1})},404:function(t,e,r){t.exports=r.p+"img/about-right-dec.c894512.png"},405:function(t,e,r){"use strict";r(402)},406:function(t,e,r){var n=r(89)(!1);n.push([t.i,".caret .custom[data-v-f862ee30]{color:red}",""]),t.exports=n},407:function(t,e,r){"use strict";r(403)},408:function(t,e,r){var n=r(89)(!1);n.push([t.i,".image[data-v-14ac6c73]{width:200px;height:auto;padding-bottom:20px;display:inline-block}",""]),t.exports=n},413:function(t,e,r){"use strict";r.r(e);r(25),r(44),r(31),r(55);var n={props:{title:{type:String,required:!0},strings:{type:String,required:!0},subtitle:{type:String,required:!0},ctabuttons:{type:Array,required:!0},heroimage:{type:String,required:!0}},computed:{stringsArr:{get:function(){var t=this.strings.split(",");return t=t.map((function(t){return t.trim()}))}}}},l=(r(405),r(73)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main-banner",attrs:{id:"top"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-6 align-self-center"},[r("div",{staticClass:"left-content show-up header-text"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-lg-12"},[r("h2",[t._v("\n                    "+t._s(t.title)+"\n                    "),r("vue-typer",{attrs:{text:t.stringsArr}})],1),t._v(" "),r("p",[t._v("\n                    "+t._s(t.subtitle)+"\n                  ")])]),t._v(" "),r("div",{staticClass:"col-lg-12"},t._l(t.ctabuttons,(function(e,n){return r("div",{key:n,staticClass:"green-button first-button scroll-to-section"},[r("a",{attrs:{href:e.href}},[t._v(t._s(e.title)+" "),r("i",{class:e.icon})])])})),0)])])]),t._v(" "),r("div",{staticClass:"col-lg-6"},[r("div",{staticClass:"right-image wow fadeInRight",attrs:{"data-wow-duration":"1s","data-wow-delay":"0.5s"}},[t.$device.isMobile?t._e():r("img",{directives:[{name:"parallax",rawName:"v-parallax",value:.2,expression:"0.2"}],attrs:{src:t.heroimage,alt:""}})])])])])])])])}),[],!1,null,"f862ee30",null);e.default=component.exports},414:function(t,e,r){"use strict";r.r(e);var n={props:{benefits:{type:Array,required:!0}}},l=r(73),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"benefits section",attrs:{id:"benefits"}},[n("div",{staticClass:"container",staticStyle:{"padding-top":"100px"}},t._l(t.benefits,(function(e,l){return n("div",{key:l,staticClass:"row",staticStyle:{"padding-bottom":"70px"}},[n("div",{staticClass:"section-heading"},[n("h4",[t._v(t._s(e.fields.title))]),t._v(" "),n("img",{attrs:{src:r(401),alt:""}})]),t._v(" "),l%2==0?n("div",{staticClass:"col-md-5"},[n("img",{attrs:{src:e.fields.image.fields.file.url,alt:""}})]):t._e(),t._v(" "),n("div",{class:l%2==0?"ml-auto col-md-6":"col-md-6",staticStyle:{"padding-top":"50px"}},[e.fields.description&&e.fields.description.content&&e.fields.description.content[0]&&e.fields.description.content[0].content&&e.fields.description.content[0].content.length>0?n("ul",[n("li",{key:l,attrs:{"v-for":(t.ben,l in e.fields.description.content)}},[n("p",[t._v(t._s(t.ben))])])]):t._e()]),t._v(" "),l%2!=0?n("div",{staticClass:"col-md-5 ml-auto"},[n("img",{attrs:{src:e.fields.image.fields.file.url,alt:""}})]):t._e()])})),0)])}),[],!1,null,null,null);e.default=component.exports},415:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{animation:""}},props:{services:{type:Array,required:!0},heading:{type:Object,required:!0}},created:function(){console.log(JSON.stringify(this.heading))},methods:{visibilityChanged:function(t){this.animation=t?"animate__animated animate__pulse":""}}},l=(r(407),r(73)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"services section",attrs:{id:"services"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-12"},[n("div",{directives:[{name:"parallax",rawName:"v-parallax",value:.1,expression:"0.1"}],staticClass:"section-heading"},[n("h4",[t._v(t._s(t.heading.title))]),t._v(" "),n("img",{attrs:{src:r(401),alt:""}}),t._v(" "),n("p",[t._v("\n            "+t._s(t.heading.heading)+"\n          ")])])])])]),t._v(" "),n("div",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.visibilityChanged,expression:"visibilityChanged"}],staticClass:"container"},[n("div",{staticClass:"row"},t._l(t.services,(function(e,r){return n("div",{key:r,staticClass:"col-lg-3",staticStyle:{"z-index":"1"},style:t.$device.isMobile?"padding-bottom : 20px":""},[n("div",{staticClass:"service-item",staticStyle:{height:"100%"}},[e.fields.image?n("img",{staticClass:"image",attrs:{src:e.fields.image.fields.file.url,"aria-hidden":"true"}}):t._e(),t._v(" "),n("h4",[t._v(t._s(e.fields.title))]),t._v(" "),n("p",[t._v("\n            "+t._s(e.fields.subtitle)+"\n          ")]),t._v(" "),n("div",{staticClass:"text-button"},[e.fields.link?n("a",{attrs:{href:e.fields.link}},[t._v("Read More "),n("i",{staticClass:"fa fa-arrow-right"})]):t._e()])])])})),0)])])}),[],!1,null,"14ac6c73",null);e.default=component.exports},416:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"section-heading"},[n("h4",[t._v("Become a "),n("em",[t._v("Product Hero")]),t._v(" With")]),t._v(" "),n("img",{attrs:{src:r(401),alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"col-lg-12"},[r("div",{staticClass:"green-button",staticStyle:{"padding-top":"25px"}},[r("a",{attrs:{href:"https://app.popcorns.io"}},[r("i",{staticClass:"fa fa-sign-in-alt"}),t._v(" Get Started")])])])}],l={props:{aboutus:{type:Array,required:!0}}},c=r(73),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about-us section",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-lg-6 align-self-center"},[t._m(0),t._v(" "),n("div",{staticClass:"row"},[t._l(t.aboutus,(function(e,r){return n("div",{key:r,staticClass:"col-lg-6"},[n("div",{staticClass:"box-item"},[n("h4",[n("a",{attrs:{href:e.fields.link}},[t._v(t._s(e.fields.title))])]),t._v(" "),n("p",[t._v(t._s(e.fields.subtitle))])])])})),t._v(" "),t._m(1)],2)]),t._v(" "),n("div",{staticClass:"col-lg-6"},[n("div",{staticClass:"right-image"},[t.$device.isDesktop?n("img",{directives:[{name:"parallax",rawName:"v-parallax",value:.1,expression:"0.1"}],attrs:{src:r(404),alt:""}}):n("img",{attrs:{src:r(404),alt:""}})])])])])])}),n,!1,null,null,null);e.default=component.exports},425:function(t,e,r){"use strict";r.r(e);var n=r(46),l=(r(9),r(64),r(67),r(130),r(131),r(161),r(204)),c=(r(411),Object(l.createClient)()),o={asyncData:function(){return Promise.all([c.getEntries({content_type:"welcomemessaging",order:"-sys.createdAt"}),c.getEntries({content_type:"services",order:"fields.order"}),c.getEntries({content_type:"aboutus",order:"fields.order"}),c.getEntries({content_type:"headings",order:"-sys.createdAt"}),c.getEntries({content_type:"benefits",order:"fields.order"})]).then((function(t){var e=Object(n.a)(t,5),r=e[0],l=e[1],c=e[2],o=e[3],d=e[4];return{welcome:r.items[0].fields,heroimage:r.includes.Asset[0].fields.file.url,services:l.items,aboutus:c.items,servicesheading:o.items.find((function(t){return"Services Heading"==t.fields.ref})).fields,benefits:d.items}})).catch(console.error)}},d=r(73),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("titlearea",{attrs:{title:t.welcome.title,strings:t.welcome.strings,subtitle:t.welcome.subtitle,ctabuttons:t.welcome.ctas,heroimage:t.heroimage}}),t._v(" "),r("benefits",{attrs:{benefits:t.benefits}}),t._v(" "),r("services",{attrs:{services:t.services,heading:t.servicesheading}}),t._v(" "),r("aboutus",{attrs:{aboutus:t.aboutus}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Titlearea:r(413).default,Benefits:r(414).default,Services:r(415).default,Aboutus:r(416).default})}}]);