webpackJsonp([1],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search.png";

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "callme.png";

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "swiperImg" },
      [
        _c(
          "mt-swipe",
          { attrs: { auto: 4000 } },
          _vm._l(_vm.imgList, function(item, index) {
            return _c("mt-swipe-item", { key: index }, [
              _c("img", { attrs: { src: item.image, alt: "" } })
            ])
          }),
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "mui-content" }, [
      _c("ul", { staticClass: "mui-table-view mui-grid-view mui-grid-9" }, [
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "newslist" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-home" }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("新闻资讯")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-email" }, [
                _c("span", { staticClass: "mui-badge" }, [_vm._v("5")])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("图文分享")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "goodslist" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-chatbubble" }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("商品展示")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-location" }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("留言反馈")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-search" }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("搜索资讯")])
            ])
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass:
              "mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"
          },
          [
            _c("router-link", { attrs: { to: { name: "" } } }, [
              _c("span", { staticClass: "mui-icon mui-icon-phone" }),
              _vm._v(" "),
              _c("div", { staticClass: "mui-media-body" }, [_vm._v("联系我们")])
            ])
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-74b1de62", esExports)
  }
}

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__);
/* harmony namespace reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74b1de62_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__ = __webpack_require__(102);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(94)
}
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-74b1de62"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Home_vue___default.a,
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_74b1de62_hasScoped_true_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Home_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/home/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74b1de62", Component.options)
  } else {
    hotAPI.reload("data-v-74b1de62", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 82:
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
    name: 'Home',
    data: function data() {
        return {
            imgList: []
        };
    },
    created: function created() {
        var _this = this;

        this.$axios.get('home/multidata').then(function (result) {
            _this.imgList = result.data.data.banner.list;
        }).catch(function (err) {
            console.error(err);
        });
    }
};

/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(7)("1f114f1b", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74b1de62\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-74b1de62\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.swiperImg[data-v-74b1de62]{\r\n    height: 200px;\n}\n.swiperImg img[data-v-74b1de62]{\r\n    width: 100%;\n}\r\n/* 九宫格 */\n.mui-grid-view.mui-grid-9[data-v-74b1de62]{\r\n    background: white;\n}\n.mui-content>.mui-table-view[data-v-74b1de62]:first-child{\r\n    margin: 0;\n}\n.mui-icon-home[data-v-74b1de62]:before,\r\n.mui-icon-email[data-v-74b1de62]:before,\r\n.mui-icon-chatbubble[data-v-74b1de62]:before,\r\n.mui-icon-location[data-v-74b1de62]:before,\r\n.mui-icon-search[data-v-74b1de62]:before,\r\n.mui-icon-phone[data-v-74b1de62]:before{\r\n    content: \"\";\n}\n.mui-icon-home[data-v-74b1de62] {\r\n    background-image: url(" + escape(__webpack_require__(96)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-email[data-v-74b1de62]{\r\n    background-image: url(" + escape(__webpack_require__(97)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-chatbubble[data-v-74b1de62]{\r\n    background-image: url(" + escape(__webpack_require__(98)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-location[data-v-74b1de62]{\r\n    background-image: url(" + escape(__webpack_require__(99)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-search[data-v-74b1de62]{\r\n    background-image: url(" + escape(__webpack_require__(100)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-phone[data-v-74b1de62]{\r\n    background-image: url(" + escape(__webpack_require__(101)) + ");\r\n    background-repeat: round;\n}\n.mui-icon-home[data-v-74b1de62],\r\n.mui-icon-email[data-v-74b1de62],\r\n.mui-icon-chatbubble[data-v-74b1de62],\r\n.mui-icon-location[data-v-74b1de62],\r\n.mui-icon-search[data-v-74b1de62],\r\n.mui-icon-phone[data-v-74b1de62]{\r\n    height: 50px;\r\n    width: 50px;\n}\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "news.png";

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "picShare.png";

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "goodShow.png";

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "feedback.png";

/***/ })

});