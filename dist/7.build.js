webpackJsonp([7],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("773af5ab", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df58f410\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsDetail.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-df58f410\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsDetail.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.swiperImg[data-v-df58f410]{\r\n    height: 200px;\r\n    margin: 10px;\r\n    border: 1px solid #2de26a66;\r\n    border-radius: 5px;\n}\n.swiperImg img[data-v-df58f410]{\r\n    width: 100%; \r\n    border-radius: 5px;\n}\n.mint-button--normal[data-v-df58f410]{\r\n    display: inline-block;\r\n    padding: 0 12px;\r\n    height: 27px;\r\n    font-size: 16px;\n}\n.swiper[data-v-df58f410] {\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 8px;\r\n    width: 95%;\r\n    border-radius: 15px;\r\n    overflow: hidden;\n}\n.outer-swiper[data-v-df58f410],\r\n.product-desc[data-v-df58f410],\r\n.product-props[data-v-df58f410],\r\n.product-info[data-v-df58f410] {\r\n    border-radius: 5px;\r\n    border: 1px solid rgba(0, 0, 0, 0.2);\r\n    margin: 3px;\n}\r\n\r\n\r\n/*请ulpadding*/\n.outer-swiper ul[data-v-df58f410],\r\n.product-desc ul[data-v-df58f410],\r\n.product-props ul[data-v-df58f410],\r\n.product-info ul[data-v-df58f410] {\r\n    padding: 0;\n}\n.product-desc ul li[data-v-df58f410],\r\n.product-props ul li[data-v-df58f410],\r\n.product-info ul li[data-v-df58f410] {\r\n    list-style: none;\r\n    font-size: 15px;\r\n    color: rgba(0, 0, 0, 0.5);\r\n    margin-top: 8px;\n}\n.product-desc ul >:nth-child(1) span[data-v-df58f410] {\r\n    color: blue;\r\n    font-size: 22px;\r\n    font-weight: bold;\n}\n.product-desc ul[data-v-df58f410] >:nth-child(1) {\r\n    border-bottom: 1px solid rgba(0, 0, 0, 0.5);\n}\n.product-desc ul[data-v-df58f410],\r\n.product-info ul[data-v-df58f410],\r\n.product-props ul[data-v-df58f410] {\r\n    padding-left: 10px;\n}\n.price-li span[data-v-df58f410] {\r\n    color: red;\r\n    font-size: 25px;\n}\n.price-li s[data-v-df58f410] {\r\n    margin-right: 16px;\n}\r\n\r\n\r\n/*加减*/\n.number-li span[data-v-df58f410] {\r\n    display: inline-block;\r\n    border: 2px solid rgba(0, 0, 0, 0.1);\r\n    width: 25px;\n}\r\n\r\n\r\n/*商品参数*/\n.product-props ul[data-v-df58f410] >:nth-child(1) {\r\n    text-align: left;\n}\n.product-props ul[data-v-df58f410]:not(:nth-child(1)) {\r\n    margin-left: 40px;\n}\n.product-info ul[data-v-df58f410] {\r\n    margin-bottom: 70px;\r\n    padding: 0 5;\n}\n.number-li span[data-v-df58f410] {\r\n    text-align: center;\n}\n.number-li[data-v-df58f410] >:nth-child(2) {\r\n    width: 40px;\n}\n.ball[data-v-df58f410] {\r\n    border-radius: 50%;\r\n    background-color: red;\r\n    width: 24px;\r\n    height: 24px;\r\n    position: absolute;\r\n    top: 440px;\r\n    left: 120px;\r\n    display: inline-block;\r\n    z-index: 9999;\n} \r\n", ""]);

// exports


/***/ }),

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("nav-bar", { attrs: { title: "商品详情" } }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "swiperImg" },
        [
          _c(
            "mt-swipe",
            { attrs: { auto: 4000 } },
            _vm._l(_vm.imgList, function(item, index) {
              return _c("mt-swipe-item", { key: index }, [
                _c("img", { attrs: { src: item, alt: "" } })
              ])
            }),
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "product-desc" }, [
        _c("ul", [
          _c("li", [
            _c("span", { staticClass: "product-desc-span" }, [
              _vm._v(_vm._s(_vm.shopTitle))
            ])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "price-li" }, [
            _vm._v("\n                市场价："),
            _c("s", [_vm._v("￥" + _vm._s(_vm.marketPrice))]),
            _vm._v(" 销售价："),
            _c("span", [_vm._v("￥" + _vm._s(_vm.buyPrice))])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "number-li" }, [
            _vm._v("\n                购买数量："),
            _c("span", { on: { click: _vm.substract } }, [_vm._v("-")]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.num))]),
            _c("span", { on: { click: _vm.add } }, [_vm._v("+")])
          ]),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "mt-button",
                { attrs: { type: "primary" }, on: { click: _vm.addShopcart } },
                [_vm._v("添加到购物车")]
              ),
              _vm._v(" "),
              _c("mt-button", { attrs: { type: "danger" } }, [
                _vm._v("立即购买")
              ])
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "product-props" }, [
        _c(
          "ul",
          [
            _c("li", [_vm._v("商品参数")]),
            _vm._v(" "),
            _vm._l(_vm.shopParams, function(item, index) {
              return _c("li", { key: index }, [
                _c("div", [
                  _vm._v(_vm._s(item.key) + " ：" + _vm._s(item.value))
                ])
              ])
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "product-info" }, [
        _c("ul", [
          _c(
            "li",
            [
              _c(
                "mt-button",
                { attrs: { type: "primary", size: "large", plain: "" } },
                [_vm._v("图文介绍")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "li",
            [
              _c(
                "mt-button",
                { attrs: { type: "danger", size: "large", plain: "" } },
                [_vm._v("商品评论")]
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-df58f410", esExports)
  }
}

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df58f410_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsDetail_vue__ = __webpack_require__(150);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(148)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-df58f410"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsDetail_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_df58f410_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsDetail_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/content/goods/GoodsDetail.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df58f410", Component.options)
  } else {
    hotAPI.reload("data-v-df58f410", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _connect = __webpack_require__(17);

var _connect2 = _interopRequireDefault(_connect);

var _prodTool = __webpack_require__(18);

var _prodTool2 = _interopRequireDefault(_prodTool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Vue 中组件通信对象
exports.default = {
    name: 'GoodsDetail',
    data: function data() {
        return {
            id: '',
            num: 0,
            shopTitle: "",
            marketPrice: 0,
            buyPrice: 0,
            shopParams: [],
            isShow: true,
            imgList: []
        };
    },
    created: function created() {
        var _this = this;

        console.log(this.$route.params.id, "获取流行-IID");
        this.id = this.$route.params.id;
        this.$axios.get('detail?iid=' + this.id).then(function (res) {
            console.log(res.data.result.itemInfo.topImages);
            console.log(res.data);
            // 获取参数信息
            _this.imgList = res.data.result.itemInfo.topImages;
            _this.shopTitle = res.data.result.itemInfo.title;
            _this.marketPrice = res.data.result.itemInfo.highNowPrice;
            _this.buyPrice = res.data.result.itemInfo.highPrice;
            _this.shopParams = res.data.result.itemParams.info.set;
        }).catch(function (err) {
            console.log(err);
        });
    },

    methods: {
        afterEnter: function afterEnter() {},
        substract: function substract() {
            if (this.num <= 0) return;
            this.num--;
        },
        add: function add() {
            // 货品数量自加
            // if() 正加的值是否大于库存
            this.num++;
        },
        addShopcart: function addShopcart() {
            _connect2.default.$emit("addNum", this.num);
            // 调用 prodTools 对象新增商品
            _prodTool2.default.addGoods({
                id: this.id,
                num: this.num
            });
            // 查看
            // console.log(prodTools.getGoods());
            // console.log(prodTools.getTotal());
        }
    }
};

/***/ })

});