webpackJsonp([6],{

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("9d382062", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-800e70f6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsList.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-800e70f6\",\"scoped\":true,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./GoodsList.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.mui-table-view.mui-grid-view .mui-table-view-cell > a[data-v-800e70f6]:not(.mui-btn) {\r\n    margin: 0px;\r\n    padding: 0px;\r\n    border: 1px solid #5c5c5c;\r\n    box-shadow: 0 0 4px #666;\n}\n.sell > span[data-v-800e70f6] {\r\n    float: left;\r\n    color: red;\r\n    text-align: left;\n}\n.detail >.hot[data-v-800e70f6] {\r\n    float: left;\r\n    text-align: left;\r\n    font-size: 15px;\n}\n.detail >.count[data-v-800e70f6] {\r\n    float: right;\r\n    text-align: right;\r\n    font-size: 15px;\n}\r\n\r\n/*撑开，去除浮动没有的高度*/\n.detail[data-v-800e70f6] {\r\n    overflow: hidden;\n}\n.desc[data-v-800e70f6] {\r\n    color: rgba(92, 92, 92, 0.8);\r\n    background-color: rgba(0, 0, 0, 0.2);\n}\n.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-object[data-v-800e70f6] {\r\n    height: 200px;\n}\n.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body[data-v-800e70f6]{\r\n    margin: 8px 2px;\n}\r\n", ""]);

// exports


/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "tmpl",
      staticStyle: { height: "577px", overflow: "hidden", "overflow-y": "auto" }
    },
    [
      _c("nav-bar", { attrs: { title: "商品列表" } }),
      _vm._v(" "),
      _c(
        "mt-loadmore",
        {
          ref: "loadmore",
          attrs: {
            "bottom-method": _vm.loadBottom,
            "bottom-all-loaded": _vm.allLoaded,
            "auto-fill": _vm.isAutoFill
          }
        },
        [
          _c(
            "ul",
            { staticClass: "mui-table-view mui-grid-view" },
            _vm._l(_vm.goodsList, function(item, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "mui-table-view-cell mui-media mui-col-xs-6"
                },
                [
                  _c(
                    "router-link",
                    {
                      attrs: {
                        to: { name: "goods.detail", params: { id: item.id } }
                      }
                    },
                    [
                      _c("img", {
                        directives: [
                          {
                            name: "lazy",
                            rawName: "v-lazy",
                            value: item.image,
                            expression: "item.image"
                          }
                        ],
                        staticClass: "mui-media-object"
                      }),
                      _vm._v(" "),
                      _c("div", { staticClass: "mui-media-body" }, [
                        _vm._v(_vm._s(item.title))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "desc" }, [
                        _c("div", { staticClass: "sell" }, [
                          _c("span", [_vm._v("￥" + _vm._s(item.price))])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "detail" }, [
                          _c("div", { staticClass: "hot" }, [
                            _vm._v(
                              "\n                                 热卖中\n                             "
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "count" }, [
                            _vm._v(
                              "\n                                 剩最后10件\n                             "
                            )
                          ])
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ]
      )
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
    require("vue-hot-reload-api")      .rerender("data-v-800e70f6", esExports)
  }
}

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_800e70f6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsList_vue__ = __webpack_require__(147);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(145)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-800e70f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_GoodsList_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_800e70f6_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_GoodsList_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/content/goods/GoodsList.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-800e70f6", Component.options)
  } else {
    hotAPI.reload("data-v-800e70f6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    name: 'GoodsList',
    data: function data() {
        return {
            indexPage: 1,
            goodsList: [],
            allLoaded: false, //是否禁止触发上拉函数
            isAutoFill: false //是否自动触发上拉函数
        };
    },
    created: function created() {
        this.loadMore();
    },

    methods: {
        loadMore: function loadMore() {
            var _this = this;

            this.$axios.get("home/data?type=pop&page=" + this.indexPage).then(function (res) {
                var arr = res.data.data.list;
                arr.forEach(function (element) {
                    var objData = {
                        id: element.iid,
                        image: element.show.img,
                        title: element.title,
                        price: element.orgPrice
                    };
                    _this.goodsList.push(objData);
                });
                console.log(_this.goodsList);
            }).catch(function (err) {
                console.log(err);
            });
        },
        loadBottom: function loadBottom() {
            console.log('上啦触发了');
            this.loadmoreConcat();
        },
        loadmoreConcat: function loadmoreConcat() {
            var _this2 = this;

            this.$axios.get("home/data?type=pop&page=" + ++this.indexPage).then(function (res) {
                var arr = res.data.data.list;
                arr.forEach(function (element) {
                    var objData = {
                        id: element.iid,
                        image: element.show.img,
                        title: element.title,
                        price: element.orgPrice
                    };
                    _this2.goodsList.push(objData);
                });
                // 追加内容
                // this.goodsList = this.goodsList.concat(this.goodsList);
                if (res.data.data.list.length != 30) {
                    // 数据不足30条，就停止下一次刷新
                    _this2.allLoaded = true; // 为 true 禁止调用上拉函数
                }
                // 通知上拉已经操作完成
                _this2.$refs.loadmore.onBottomLoaded();
            }).catch(function (err) {
                console.log(err);
            });
        }
    }
};

/***/ })

});