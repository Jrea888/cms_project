webpackJsonp([7],{206:function(t,n,r){"use strict";function a(t){s||r(277)}Object.defineProperty(n,"__esModule",{value:!0});var i=r(222),d=r.n(i);for(var e in i)"default"!==e&&function(t){r.d(n,t,function(){return i[t]})}(e);var o=r(279),s=!1,l=r(7),p=a,u=l(d.a,o.a,!1,p,"data-v-df58f410",null);u.options.__file="src/components/content/goods/GoodsDetail.vue",n.default=u.exports},222:function(t,n,r){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var i=r(153),d=a(i),e=r(154),o=a(e);n.default={name:"GoodsDetail",data:function(){return{id:"",num:0,shopTitle:"",marketPrice:0,buyPrice:0,shopParams:[],isShow:!0,imgList:[]}},created:function(){var t=this;console.log(this.$route.params.id,"获取流行-IID"),this.id=this.$route.params.id,this.$axios.get("detail?iid="+this.id).then(function(n){console.log(n.data.result.itemInfo.topImages),console.log(n.data),t.imgList=n.data.result.itemInfo.topImages,t.shopTitle=n.data.result.itemInfo.title,t.marketPrice=n.data.result.itemInfo.highNowPrice,t.buyPrice=n.data.result.itemInfo.highPrice,t.shopParams=n.data.result.itemParams.info.set}).catch(function(t){console.log(t)})},methods:{afterEnter:function(){},substract:function(){this.num<=0||this.num--},add:function(){this.num++},addShopcart:function(){d.default.$emit("addNum",this.num),o.default.addGoods({id:this.id,num:this.num})}}}},277:function(t,n,r){var a=r(278);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);r(6)("773af5ab",a,!1,{})},278:function(t,n,r){n=t.exports=r(5)(!1),n.push([t.i,"\n.swiperImg[data-v-df58f410]{\r\n    height: 200px;\r\n    margin: 10px;\r\n    border: 1px solid #2de26a66;\r\n    border-radius: 5px;\n}\n.swiperImg img[data-v-df58f410]{\r\n    width: 100%; \r\n    border-radius: 5px;\n}\n.mint-button--normal[data-v-df58f410]{\r\n    display: inline-block;\r\n    padding: 0 12px;\r\n    height: 27px;\r\n    font-size: 16px;\n}\n.swiper[data-v-df58f410] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-df58f410],\r\n.product-desc[data-v-df58f410],\r\n.product-props[data-v-df58f410],\r\n.product-info[data-v-df58f410] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-df58f410],\r\n.product-desc ul[data-v-df58f410],\r\n.product-props ul[data-v-df58f410],\r\n.product-info ul[data-v-df58f410] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-df58f410],\r\n.product-props ul li[data-v-df58f410],\r\n.product-info ul li[data-v-df58f410] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-df58f410] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul[data-v-df58f410] >:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-df58f410],\r\n.product-info ul[data-v-df58f410],\r\n.product-props ul[data-v-df58f410] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-df58f410] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-df58f410] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-df58f410] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul[data-v-df58f410] >:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-df58f410]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-df58f410] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-df58f410] {\r\n    text-align: center;\n}\n.number-li[data-v-df58f410] >:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-df58f410] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n} \r\n",""])},279:function(t,n,r){"use strict";var a=function(){var t=this,n=t.$createElement,r=t._self._c||n;return r("div",[r("nav-bar",{attrs:{title:"商品详情"}}),t._v(" "),r("div",{staticClass:"swiperImg"},[r("mt-swipe",{attrs:{auto:4e3}},t._l(t.imgList,function(t,n){return r("mt-swipe-item",{key:n},[r("img",{attrs:{src:t,alt:""}})])}),1)],1),t._v(" "),r("div",{staticClass:"product-desc"},[r("ul",[r("li",[r("span",{staticClass:"product-desc-span"},[t._v(t._s(t.shopTitle))])]),t._v(" "),r("li",{staticClass:"price-li"},[t._v("\n                市场价："),r("s",[t._v("￥"+t._s(t.marketPrice))]),t._v(" 销售价："),r("span",[t._v("￥"+t._s(t.buyPrice))])]),t._v(" "),r("li",{staticClass:"number-li"},[t._v("\n                购买数量："),r("span",{on:{click:t.substract}},[t._v("-")]),t._v(" "),r("span",[t._v(t._s(t.num))]),r("span",{on:{click:t.add}},[t._v("+")])]),t._v(" "),r("li",[r("mt-button",{attrs:{type:"primary"},on:{click:t.addShopcart}},[t._v("添加到购物车")]),t._v(" "),r("mt-button",{attrs:{type:"danger"}},[t._v("立即购买")])],1)])]),t._v(" "),r("div",{staticClass:"product-props"},[r("ul",[r("li",[t._v("商品参数")]),t._v(" "),t._l(t.shopParams,function(n,a){return r("li",{key:a},[r("div",[t._v(t._s(n.key)+" ："+t._s(n.value))])])})],2)]),t._v(" "),r("div",{staticClass:"product-info"},[r("ul",[r("li",[r("mt-button",{attrs:{type:"primary",size:"large",plain:""}},[t._v("图文介绍")])],1),t._v(" "),r("li",[r("mt-button",{attrs:{type:"danger",size:"large",plain:""}},[t._v("商品评论")])],1)])])],1)},i=[];a._withStripped=!0;var d={render:a,staticRenderFns:i};n.a=d}});