webpackJsonp([4],{134:function(t,e,i){var n=i(135);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(5)("1a4fd8aa",n,!1,{})},135:function(t,e,i){e=t.exports=i(4)(!1),e.push([t.i,"\n.news-title p[data-v-4c67396a] {\r\n    color: #0a87f8;\r\n    font-size: 20px;\r\n    font-weight: bold;\r\n    text-align: center;\r\n    margin: 10px 0;\n} \r\n",""])},136:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"tmpl"},[i("nav-bar",{attrs:{title:"新闻内容页"}}),t._v(" "),i("div",{staticClass:"news-title"},[i("p",[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"thumbs"},[i("vue-preview",{attrs:{slides:t.imgs}})],1)],1)},s=[];n._withStripped=!0;var a={render:n,staticRenderFns:s};e.a=a},67:function(t,e,i){"use strict";function n(t){c||i(134)}Object.defineProperty(e,"__esModule",{value:!0});var s=i(83),a=i.n(s);for(var r in s)"default"!==r&&function(t){i.d(e,t,function(){return s[t]})}(r);var o=i(136),c=!1,l=i(6),u=n,d=l(a.a,o.a,!1,u,"data-v-4c67396a",null);d.options.__file="src/components/content/news/NewsDetail.vue",e.default=d.exports},83:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"NewsDetail",data:function(){return{iid:"",title:"",topImages:[],imgs:[]}},created:function(){var t=this;console.log(this.$route.params.id,"获取最新-IID"),this.iid=this.$route.params.id,this.$axios.get("detail?iid="+this.iid).then(function(e){t.title=e.data.result.itemInfo.title,t.topImages=e.data.result.itemInfo.topImages,t.topImages.forEach(function(e){var i={};i.src=e,i.msrc=e,i.h=480,i.w=350,t.imgs.push(i)})}).catch(function(t){console.log(t)})},methods:{}}}});