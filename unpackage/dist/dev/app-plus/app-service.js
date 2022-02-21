(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 8));\n\n\nvar _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 12));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n_vue.default.config.productionTip = false;\n_App.default.mpType = 'app';\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7OztBQUduQixzRTtBQUNBQSxhQUFJQyxNQUFKLENBQVdDLGFBQVgsR0FBMkIsS0FBM0I7QUFDQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7QUFDQSxJQUFNQyxHQUFHLEdBQUcsSUFBSUwsWUFBSjtBQUNMRyxZQURLLEVBQVo7O0FBR0FFLEdBQUcsQ0FBQ0MsTUFBSiIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICd1bmktcGFnZXMnO2ltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblxuaW1wb3J0IFZ1ZSBmcm9tICd2dWUnXG5WdWUuY29uZmlnLnByb2R1Y3Rpb25UaXAgPSBmYWxzZVxuQXBwLm1wVHlwZSA9ICdhcHAnXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KClcblxuXG5cblxuXG5cblxuXG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/pages.json ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!**********************************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2dOO0FBQ2hOLGdCQUFnQixpTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************************************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhenglian/Desktop/uni-app/ocrdemo/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "content"), attrs: { _i: 0 } },
    [
      _c("button", {
        attrs: { _i: 1 },
        on: {
          click: function($event) {
            return _vm.scan("back")
          }
        }
      }),
      _c("button", { attrs: { _i: 2 }, on: { click: _vm.scan } }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "text-area"), attrs: { _i: 3 } },
        [
          _c(
            "text",
            { staticClass: _vm._$s(4, "sc", "title"), attrs: { _i: 4 } },
            [_vm._v(_vm._$s(4, "t0-0", _vm._s(_vm.title)))]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd1QixDQUFnQixzdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhenglian/Desktop/uni-app/ocrdemo/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\nvar _api = __webpack_require__(/*! @/commom/api.js */ 13); //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { data: function data() {return { title: 'Hello', access_token: '', image: '' };\n  },\n  onLoad: function onLoad() {\n    this.gettoken();\n  },\n  methods: {\n    gettoken: function gettoken() {var _this = this;\n      (0, _api.getToken)().then(function (res) {\n        __f__(\"log\", \"-=getToken==dd==\", res, \" at pages/index/index.vue:34\");\n        _this.access_token = res.access_token;\n\n      });\n    },\n\n\n    //-front：身份证含照片的一面 -back：身份证带国徽的一面\n    getidCard: function getidCard(image) {var _this2 = this;\n      var params = {\n\n        access_token: this.access_token,\n        data: {\n          id_card_side: 'back',\n          image: image } };\n\n\n      (0, _api.getIdCard)(params).then(function (res) {\n        __f__(\"log\", \"-=身份证====\", res, \" at pages/index/index.vue:52\");\n        _this2.title = res;\n      });\n    },\n    getbankcard: function getbankcard(image) {var _this3 = this;\n      var params = {\n        access_token: this.access_token,\n        data: {\n          detect_direction: false,\n          image: image } };\n\n\n      (0, _api.getbankcard)(params).then(function (res) {\n        __f__(\"log\", \"-=银行卡====\", res, \" at pages/index/index.vue:65\");\n        _this3.title = res;\n\n      });\n    },\n    scan: function scan(type) {\n      var that = this;\n      uni.chooseImage({\n        count: 1,\n        sizeType: ['compressed'],\n        sourceType: ['album', 'camera'],\n        success: function success(res) {\n          var tempFilePath = res.tempFilePaths[0];\n          that.tempFile = tempFilePath;\n          plus.io.resolveLocalFileSystemURL(that.tempFile, function (entry) {\n            entry.file(function (file) {\n              var fileReader = new plus.io.FileReader();\n              fileReader.readAsDataURL(file);\n              fileReader.onloadend = function (evt) {\n                __f__(\"log\", \"==\" + evt.target.result, \" at pages/index/index.vue:84\");\n                // that. = evt.target.result.split(\",\")[1]; // that.src=evt.target.result;\n                uni.showToast({\n                  title: evt.target.result.split(\",\")[1] });\n\n\n                if (type == 'back') {\n                  that.getidCard(evt.target.result.split(\",\")[1]);\n                } else {\n                  that.getbankcard(evt.target.result.split(\",\")[1]);\n                }\n              };\n            });\n          });\n        } });\n\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFhQSwwRDs7Ozs7Ozs7Ozs7O2VBTUEsRUFDQSxJQURBLGtCQUNBLENBQ0EsU0FDQSxjQURBLEVBRUEsZ0JBRkEsRUFHQSxTQUhBO0FBS0EsR0FQQTtBQVFBLFFBUkEsb0JBUUE7QUFDQTtBQUNBLEdBVkE7QUFXQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FKQTtBQUtBLEtBUEE7OztBQVVBO0FBQ0EsYUFYQSxxQkFXQSxLQVhBLEVBV0E7QUFDQTs7QUFFQSx1Q0FGQTtBQUdBO0FBQ0EsOEJBREE7QUFFQSxzQkFGQSxFQUhBOzs7QUFRQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0F4QkE7QUF5QkEsZUF6QkEsdUJBeUJBLEtBekJBLEVBeUJBO0FBQ0E7QUFDQSx1Q0FEQTtBQUVBO0FBQ0EsaUNBREE7QUFFQSxzQkFGQSxFQUZBOzs7QUFPQTtBQUNBO0FBQ0E7O0FBRUEsT0FKQTtBQUtBLEtBdENBO0FBdUNBLFFBdkNBLGdCQXVDQSxJQXZDQSxFQXVDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBLGdDQUZBO0FBR0EsdUNBSEE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBREE7OztBQUlBO0FBQ0E7QUFDQSxpQkFGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBLGVBWkE7QUFhQSxhQWhCQTtBQWlCQSxXQWxCQTtBQW1CQSxTQTFCQTs7QUE0QkEsS0FyRUEsRUFYQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcblx0XHRcclxuXHRcdDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJzY2FuKCdiYWNrJylcIj7ouqvku73or4Hlm73lvr08L2J1dHRvbj5cclxuXHRcdDxidXR0b24gdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJzY2FuXCI+6ZO26KGM5Y2hPC9idXR0b24+XHJcblx0XHQ8dmlldyBjbGFzcz1cInRleHQtYXJlYVwiPlxyXG5cdFx0XHQ8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3t0aXRsZX19PC90ZXh0PlxyXG5cdFx0PC92aWV3PlxyXG5cclxuXHQ8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCB7XHJcblx0XHRnZXRUb2tlbixcclxuXHRcdGdldElkQ2FyZCxcblx0XHRnZXRiYW5rY2FyZFxyXG5cclxuXHR9IGZyb20gJ0AvY29tbW9tL2FwaS5qcydcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRkYXRhKCkge1xyXG5cdFx0XHRyZXR1cm4ge1xyXG5cdFx0XHRcdHRpdGxlOiAnSGVsbG8nLFxyXG5cdFx0XHRcdGFjY2Vzc190b2tlbjogJycsXHJcblx0XHRcdFx0aW1hZ2U6ICcnXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRvbkxvYWQoKSB7XHJcblx0XHRcdHRoaXMuZ2V0dG9rZW4oKVxyXG5cdFx0fSxcclxuXHRcdG1ldGhvZHM6IHtcclxuXHRcdFx0Z2V0dG9rZW4oKSB7XHJcblx0XHRcdFx0Z2V0VG9rZW4oKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIi09Z2V0VG9rZW49PWRkPT1cIiwgcmVzKTtcclxuXHRcdFx0XHRcdHRoaXMuYWNjZXNzX3Rva2VuID0gcmVzLmFjY2Vzc190b2tlblxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblxyXG5cclxuXHRcdFx0Ly8tZnJvbnTvvJrouqvku73or4HlkKvnhafniYfnmoTkuIDpnaIgLWJhY2vvvJrouqvku73or4HluKblm73lvr3nmoTkuIDpnaJcclxuXHRcdFx0Z2V0aWRDYXJkKGltYWdlKSB7XHJcblx0XHRcdFx0bGV0IHBhcmFtcyA9IHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YWNjZXNzX3Rva2VuOiB0aGlzLmFjY2Vzc190b2tlbixcclxuXHRcdFx0XHRcdGRhdGE6e1xuXHRcdFx0XHRcdFx0aWRfY2FyZF9zaWRlOiAnYmFjaycsXG5cdFx0XHRcdFx0XHRpbWFnZTogaW1hZ2UsXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRnZXRJZENhcmQocGFyYW1zKS50aGVuKHJlcyA9PiB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhcIi096Lqr5Lu96K+BPT09PVwiLCByZXMpO1xyXG5cdFx0XHRcdFx0dGhpcy50aXRsZT1yZXNcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxuXHRcdFx0Z2V0YmFua2NhcmQoaW1hZ2Upe1xuXHRcdFx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0XHRcdGFjY2Vzc190b2tlbjogdGhpcy5hY2Nlc3NfdG9rZW4sXG5cdFx0XHRcdFx0ZGF0YTp7XG5cdFx0XHRcdFx0XHRkZXRlY3RfZGlyZWN0aW9uOiBmYWxzZSxcblx0XHRcdFx0XHRcdGltYWdlOiBpbWFnZSxcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0Z2V0YmFua2NhcmQocGFyYW1zKS50aGVuKHJlcyA9PiB7XG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCItPemTtuihjOWNoT09PT1cIiwgcmVzKTtcblx0XHRcdFx0XHR0aGlzLnRpdGxlPXJlc1xuXHRcdFx0XHRcdFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcclxuXHRcdFx0c2Nhbih0eXBlKSB7XHJcblx0XHRcdFx0Y29uc3QgdGhhdCA9IHRoaXNcclxuXHRcdFx0XHR1bmkuY2hvb3NlSW1hZ2Uoe1xyXG5cdFx0XHRcdFx0Y291bnQ6IDEsXHJcblx0XHRcdFx0XHRzaXplVHlwZTogWydjb21wcmVzc2VkJ10sXHJcblx0XHRcdFx0XHRzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLFxyXG5cdFx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcblx0XHRcdFx0XHRcdHZhciB0ZW1wRmlsZVBhdGggPSByZXMudGVtcEZpbGVQYXRoc1swXTtcclxuXHRcdFx0XHRcdFx0dGhhdC50ZW1wRmlsZSA9IHRlbXBGaWxlUGF0aDtcclxuXHRcdFx0XHRcdFx0cGx1cy5pby5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHRoYXQudGVtcEZpbGUsIGZ1bmN0aW9uKGVudHJ5KSB7XHJcblx0XHRcdFx0XHRcdFx0ZW50cnkuZmlsZShmdW5jdGlvbihmaWxlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgZmlsZVJlYWRlciA9IG5ldyBwbHVzLmlvLkZpbGVSZWFkZXIoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZpbGVSZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24oZXZ0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiPT1cIiArIGV2dC50YXJnZXQucmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gdGhhdC4gPSBldnQudGFyZ2V0LnJlc3VsdC5zcGxpdChcIixcIilbMV07IC8vIHRoYXQuc3JjPWV2dC50YXJnZXQucmVzdWx0O1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkuc2hvd1RvYXN0KHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogZXZ0LnRhcmdldC5yZXN1bHQuc3BsaXQoXCIsXCIpWzFdXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdGlmKHR5cGU9PSdiYWNrJyl7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQuZ2V0aWRDYXJkKGV2dC50YXJnZXQucmVzdWx0LnNwbGl0KFwiLFwiKVsxXSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhhdC5nZXRiYW5rY2FyZChldnQudGFyZ2V0LnJlc3VsdC5zcGxpdChcIixcIilbMV0pXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG5cdC5jb250ZW50IHtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LmxvZ28ge1xyXG5cdFx0aGVpZ2h0OiAyMDBycHg7XHJcblx0XHR3aWR0aDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLXRvcDogMjAwcnB4O1xyXG5cdFx0bWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRtYXJnaW4tcmlnaHQ6IGF1dG87XHJcblx0XHRtYXJnaW4tYm90dG9tOiA1MHJweDtcclxuXHR9XHJcblxyXG5cdC50ZXh0LWFyZWEge1xyXG5cdFx0ZGlzcGxheTogZmxleDtcclxuXHRcdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdH1cclxuXHJcblx0LnRpdGxlIHtcclxuXHRcdGZvbnQtc2l6ZTogMzZycHg7XHJcblx0XHRjb2xvcjogIzhmOGY5NDtcclxuXHR9XHJcbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 8 */
/*!********************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/App.vue ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 9);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDME07QUFDMU0sZ0JBQWdCLGlOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMsIHJlY3ljbGFibGVSZW5kZXIsIGNvbXBvbmVudHNcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*********************************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../Applications/HBuilderX.app/Contents/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 10);\n/* harmony import */ var _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_Applications_HBuilderX_app_Contents_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJyQixDQUFnQix5c0JBQUcsRUFBQyIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9BcHBsaWNhdGlvbnMvSEJ1aWxkZXJYLmFwcC9Db250ZW50cy9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0FwcGxpY2F0aW9ucy9IQnVpbGRlclguYXBwL0NvbnRlbnRzL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vQXBwbGljYXRpb25zL0hCdWlsZGVyWC5hcHAvQ29udGVudHMvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!/Users/zhenglian/Desktop/uni-app/ocrdemo/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 11)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 12 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 13 */
/*!**************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/commom/api.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _http = __webpack_require__(/*! ./http.js */ 14);\nvar url = {\n  // 获取Access Token\n  token: 'oauth/2.0/token',\n  //身份证识别\n\n  idCard: 'rest/2.0/ocr/v1/idcard',\n\n  bankcard: \"rest/2.0/ocr/v1/bankcard\" };\n\n\nmodule.exports = {\n  getToken: function getToken() {\n    return (0, _http.httpRequest)({\n      url: \"\".concat(url.token, \"?grant_type=client_credentials&client_id=UEGsSuXcWGn2uYyIMIMIMdwR&client_secret=Qo1RWA8G1ZX48fTu43Kebv3H0yDtV9H1\") });\n\n  },\n  getIdCard: function getIdCard(params) {\n    return (0, _http.httpRequest)({\n      url: \"\".concat(url.idCard, \"?access_token=\").concat(params.access_token),\n      data: params.data,\n      header: {\n        \"Content-Type\": \"application/x-www-form-urlencoded\" } });\n\n\n  },\n  getbankcard: function getbankcard(params) {\n    return (0, _http.httpRequest)({\n      url: \"\".concat(url.bankcard, \"?access_token=\").concat(params.access_token),\n      data: params.data,\n      header: {\n        \"Content-Type\": \"application/x-www-form-urlencoded\" } });\n\n\n  } };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9tL2FwaS5qcyJdLCJuYW1lcyI6WyJ1cmwiLCJ0b2tlbiIsImlkQ2FyZCIsImJhbmtjYXJkIiwibW9kdWxlIiwiZXhwb3J0cyIsImdldFRva2VuIiwiZ2V0SWRDYXJkIiwicGFyYW1zIiwiYWNjZXNzX3Rva2VuIiwiZGF0YSIsImhlYWRlciIsImdldGJhbmtjYXJkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLElBQUlBLEdBQUcsR0FBRztBQUNUO0FBQ0FDLE9BQUssRUFBQyxpQkFGRztBQUdUOztBQUVBQyxRQUFNLEVBQUMsd0JBTEU7O0FBT1RDLFVBQVEsRUFBQywwQkFQQSxFQUFWOzs7QUFVQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2hCQyxVQURnQixzQkFDTjtBQUNULFdBQU8sdUJBQVk7QUFDbEJOLFNBQUcsWUFBSUEsR0FBRyxDQUFDQyxLQUFSLHFIQURlLEVBQVosQ0FBUDs7QUFHQSxHQUxlO0FBTWhCTSxXQU5nQixxQkFNTkMsTUFOTSxFQU1DO0FBQ2hCLFdBQU8sdUJBQVk7QUFDbEJSLFNBQUcsWUFBSUEsR0FBRyxDQUFDRSxNQUFSLDJCQUErQk0sTUFBTSxDQUFDQyxZQUF0QyxDQURlO0FBRWxCQyxVQUFJLEVBQUNGLE1BQU0sQ0FBQ0UsSUFGTTtBQUdsQkMsWUFBTSxFQUFDO0FBQ04sd0JBQWUsbUNBRFQsRUFIVyxFQUFaLENBQVA7OztBQU9BLEdBZGU7QUFlaEJDLGFBZmdCLHVCQWVKSixNQWZJLEVBZUc7QUFDbEIsV0FBTyx1QkFBWTtBQUNsQlIsU0FBRyxZQUFJQSxHQUFHLENBQUNHLFFBQVIsMkJBQWlDSyxNQUFNLENBQUNDLFlBQXhDLENBRGU7QUFFbEJDLFVBQUksRUFBQ0YsTUFBTSxDQUFDRSxJQUZNO0FBR2xCQyxZQUFNLEVBQUM7QUFDTix3QkFBZSxtQ0FEVCxFQUhXLEVBQVosQ0FBUDs7O0FBT0EsR0F2QmUsRUFBakIiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2h0dHBSZXF1ZXN0fSBmcm9tICcuL2h0dHAuanMnXG5sZXQgdXJsID0ge1xuXHQvLyDojrflj5ZBY2Nlc3MgVG9rZW5cblx0dG9rZW46J29hdXRoLzIuMC90b2tlbicsXG5cdC8v6Lqr5Lu96K+B6K+G5YirXG5cblx0aWRDYXJkOidyZXN0LzIuMC9vY3IvdjEvaWRjYXJkJyxcblx0XG5cdGJhbmtjYXJkOlwicmVzdC8yLjAvb2NyL3YxL2JhbmtjYXJkXCJcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdGdldFRva2VuKCl7XG5cdFx0cmV0dXJuIGh0dHBSZXF1ZXN0KHtcblx0XHRcdHVybDpgJHt1cmwudG9rZW59P2dyYW50X3R5cGU9Y2xpZW50X2NyZWRlbnRpYWxzJmNsaWVudF9pZD1VRUdzU3VYY1dHbjJ1WXlJTUlNSU1kd1ImY2xpZW50X3NlY3JldD1RbzFSV0E4RzFaWDQ4ZlR1NDNLZWJ2M0gweUR0VjlIMWBcblx0XHR9KVxuXHR9LFxuXHRnZXRJZENhcmQocGFyYW1zKXtcblx0XHRyZXR1cm4gaHR0cFJlcXVlc3Qoe1xuXHRcdFx0dXJsOmAke3VybC5pZENhcmR9P2FjY2Vzc190b2tlbj0ke3BhcmFtcy5hY2Nlc3NfdG9rZW59YCxcblx0XHRcdGRhdGE6cGFyYW1zLmRhdGEsXG5cdFx0XHRoZWFkZXI6e1xuXHRcdFx0XHRcIkNvbnRlbnQtVHlwZVwiOlwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCJcblx0XHRcdH1cblx0XHR9KVxuXHR9LFxuXHRnZXRiYW5rY2FyZChwYXJhbXMpe1xuXHRcdHJldHVybiBodHRwUmVxdWVzdCh7XG5cdFx0XHR1cmw6YCR7dXJsLmJhbmtjYXJkfT9hY2Nlc3NfdG9rZW49JHtwYXJhbXMuYWNjZXNzX3Rva2VufWAsXG5cdFx0XHRkYXRhOnBhcmFtcy5kYXRhLFxuXHRcdFx0aGVhZGVyOntcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiXG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuIH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!***************************************************************!*\
  !*** /Users/zhenglian/Desktop/uni-app/ocrdemo/commom/http.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// 配置公共的URL路径\nvar Host = \"https://aip.baidubce.com/\";\n// const Host = \"/api\"\n\n\nvar http = function http(params) {\n\n  //返回promise 对象\n  return new Promise(function (resolve, reject) {\n    uni.request({\n      // 服务器url+参数中携带的接口具体地址\n      url: Host + params.url,\n      // 请求参数\n      data: params.data,\n      // 设置后端需要的常用的格式就好，特殊情况调用的时候单独设置\n      header: params.header || {\n        \"Content-Type\": \";application/json;charset=utf-8\",\n        \"api-version\": params.apiVersion || '1.0' },\n\n      // \"Authorization\": token\n      // 默认为GET,可以不写，如常用请求格式为POST，可以设置POST为默认请求方式\n      method: params.method && params.method.toUpperCase() || 'POST',\n      dataType: params.dataType, //返回的数据格式,默认为JSON，特殊格式可以在调用的时候传入参数\n      responseType: params.responseType, //响应的数据类型\n      success: function success(res) {\n        // 接口访问正常返回数据\n        if (res.statusCode == 200 && res.data.code === 200 || res.data.code === 401) {\n          //1. 操作成功返回数据\n          resolve(res.data);\n        } else {\n          //2. 操作不成功返回数据，以toast方式弹出响应信息，如后端未格式化非操作成功异常信息，则可以统一定义异常提示\n          if (res.data.code === 503) {\n            uni.showToast({\n              icon: \"none\",\n              title: \"系统异常\",\n              duration: 3000 });\n\n          } else {\n            if (res.data.msg) {\n              uni.showToast({\n                icon: \"none\",\n                title: res.data.msg,\n                duration: 3000 });\n\n            }\n          }\n          resolve(res.data);\n        }\n      },\n      fail: function fail(e) {\n        if (e.errMsg === \"request:fail timeout\") {\n          uni.showToast({\n            icon: \"none\",\n            title: \"网络连接超时,请稍后重试\" });\n\n        }\n        reject(e);\n        setTimeout(function () {\n          uni.hideLoading();\n        }, 1500);\n      },\n      complete: function complete(e) {\n        resolve(e);\n      } });\n\n  });\n};\n\nmodule.exports = {\n  httpRequest: http };//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9tL2h0dHAuanMiXSwibmFtZXMiOlsiSG9zdCIsImh0dHAiLCJwYXJhbXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVuaSIsInJlcXVlc3QiLCJ1cmwiLCJkYXRhIiwiaGVhZGVyIiwiYXBpVmVyc2lvbiIsIm1ldGhvZCIsInRvVXBwZXJDYXNlIiwiZGF0YVR5cGUiLCJyZXNwb25zZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwic3RhdHVzQ29kZSIsImNvZGUiLCJzaG93VG9hc3QiLCJpY29uIiwidGl0bGUiLCJkdXJhdGlvbiIsIm1zZyIsImZhaWwiLCJlIiwiZXJyTXNnIiwic2V0VGltZW91dCIsImhpZGVMb2FkaW5nIiwiY29tcGxldGUiLCJtb2R1bGUiLCJleHBvcnRzIiwiaHR0cFJlcXVlc3QiXSwibWFwcGluZ3MiOiI7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRywyQkFBYjtBQUNBOzs7QUFHQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxDQUFDQyxNQUFELEVBQVk7O0FBRXZCO0FBQ0EsU0FBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3RDQyxPQUFHLENBQUNDLE9BQUosQ0FBWTtBQUNWO0FBQ0FDLFNBQUcsRUFBQ1IsSUFBSSxHQUFDRSxNQUFNLENBQUNNLEdBRk47QUFHVjtBQUNBQyxVQUFJLEVBQUVQLE1BQU0sQ0FBQ08sSUFKSDtBQUtWO0FBQ0FDLFlBQU0sRUFBRVIsTUFBTSxDQUFDUSxNQUFQLElBQWlCO0FBQ3ZCLHdCQUFnQixpQ0FETztBQUV2Qix1QkFBZVIsTUFBTSxDQUFDUyxVQUFQLElBQW9CLEtBRlosRUFOZjs7QUFVYjtBQUNHO0FBQ0FDLFlBQU0sRUFBRVYsTUFBTSxDQUFDVSxNQUFQLElBQWlCVixNQUFNLENBQUNVLE1BQVAsQ0FBY0MsV0FBZCxFQUFqQixJQUFnRCxNQVo5QztBQWFWQyxjQUFRLEVBQUVaLE1BQU0sQ0FBQ1ksUUFiUCxFQWFnQjtBQUMxQkMsa0JBQVksRUFBRWIsTUFBTSxDQUFDYSxZQWRYLEVBY3dCO0FBQ2xDQyxhQUFPLEVBQUUsaUJBQUFDLEdBQUcsRUFBSTtBQUNkO0FBQ0EsWUFBS0EsR0FBRyxDQUFDQyxVQUFKLElBQWtCLEdBQWxCLElBQXlCRCxHQUFHLENBQUNSLElBQUosQ0FBU1UsSUFBVCxLQUFrQixHQUE1QyxJQUFrREYsR0FBRyxDQUFDUixJQUFKLENBQVNVLElBQVQsS0FBa0IsR0FBeEUsRUFBNkU7QUFDM0U7QUFDQWYsaUJBQU8sQ0FBQ2EsR0FBRyxDQUFDUixJQUFMLENBQVA7QUFDRCxTQUhELE1BR087QUFDTDtBQUNOLGNBQUdRLEdBQUcsQ0FBQ1IsSUFBSixDQUFTVSxJQUFULEtBQWtCLEdBQXJCLEVBQXlCO0FBQ2pCYixlQUFHLENBQUNjLFNBQUosQ0FBYztBQUNaQyxrQkFBSSxFQUFFLE1BRE07QUFFWkMsbUJBQUssRUFBRSxNQUZLO0FBR1pDLHNCQUFRLEVBQUMsSUFIRyxFQUFkOztBQUtELFdBTlAsTUFNVztBQUNWLGdCQUFHTixHQUFHLENBQUNSLElBQUosQ0FBU2UsR0FBWixFQUFnQjtBQUNkbEIsaUJBQUcsQ0FBQ2MsU0FBSixDQUFjO0FBQ1pDLG9CQUFJLEVBQUUsTUFETTtBQUVaQyxxQkFBSyxFQUFFTCxHQUFHLENBQUNSLElBQUosQ0FBU2UsR0FGSjtBQUdIRCx3QkFBUSxFQUFDLElBSE4sRUFBZDs7QUFLRDtBQUNEO0FBQ0RuQixpQkFBTyxDQUFDYSxHQUFHLENBQUNSLElBQUwsQ0FBUDtBQUNLO0FBQ0YsT0F2Q1M7QUF3Q1ZnQixVQUFJLEVBQUUsY0FBVUMsQ0FBVixFQUFhO0FBQ2pCLFlBQUdBLENBQUMsQ0FBQ0MsTUFBRixLQUFhLHNCQUFoQixFQUF1QztBQUNyQ3JCLGFBQUcsQ0FBQ2MsU0FBSixDQUFjO0FBQ1pDLGdCQUFJLEVBQUUsTUFETTtBQUVaQyxpQkFBSyxFQUFFLGNBRkssRUFBZDs7QUFJRDtBQUNEakIsY0FBTSxDQUFDcUIsQ0FBRCxDQUFOO0FBQ0FFLGtCQUFVLENBQUMsWUFBSztBQUNkdEIsYUFBRyxDQUFDdUIsV0FBSjtBQUNELFNBRlMsRUFFUCxJQUZPLENBQVY7QUFHRCxPQW5EUztBQW9EVkMsY0FwRFUsb0JBb0RESixDQXBEQyxFQW9EQztBQUNUdEIsZUFBTyxDQUFDc0IsQ0FBRCxDQUFQO0FBQ0QsT0F0RFMsRUFBWjs7QUF3REQsR0F6RE0sQ0FBUDtBQTBERCxDQTdERDs7QUErREFLLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNmQyxhQUFXLEVBQUVoQyxJQURFLEVBQWpCIiwiZmlsZSI6IjE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyDphY3nva7lhazlhbHnmoRVUkzot6/lvoRcbmNvbnN0IEhvc3QgPSBcImh0dHBzOi8vYWlwLmJhaWR1YmNlLmNvbS9cIjtcbi8vIGNvbnN0IEhvc3QgPSBcIi9hcGlcIlxuXG5cbmNvbnN0IGh0dHAgPSAocGFyYW1zKSA9PiB7XG5cbiAgLy/ov5Tlm55wcm9taXNlIOWvueixoVxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIHVuaS5yZXF1ZXN0KHtcbiAgICAgIC8vIOacjeWKoeWZqHVybCvlj4LmlbDkuK3mkLrluKbnmoTmjqXlj6PlhbfkvZPlnLDlnYBcbiAgICAgIHVybDpIb3N0K3BhcmFtcy51cmwsXG4gICAgICAvLyDor7fmsYLlj4LmlbBcbiAgICAgIGRhdGE6IHBhcmFtcy5kYXRhLFxuICAgICAgLy8g6K6+572u5ZCO56uv6ZyA6KaB55qE5bi455So55qE5qC85byP5bCx5aW977yM54m55q6K5oOF5Ya16LCD55So55qE5pe25YCZ5Y2V54us6K6+572uXG4gICAgICBoZWFkZXI6IHBhcmFtcy5oZWFkZXIgfHwge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIjthcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLThcIixcbiAgICAgICAgXCJhcGktdmVyc2lvblwiOiBwYXJhbXMuYXBpVmVyc2lvbiB8fCcxLjAnXG4gICAgICB9LFxuXHQgIC8vIFwiQXV0aG9yaXphdGlvblwiOiB0b2tlblxuICAgICAgLy8g6buY6K6k5Li6R0VULOWPr+S7peS4jeWGme+8jOWmguW4uOeUqOivt+axguagvOW8j+S4ulBPU1TvvIzlj6/ku6Xorr7nva5QT1NU5Li66buY6K6k6K+35rGC5pa55byPXG4gICAgICBtZXRob2Q6IHBhcmFtcy5tZXRob2QgJiYgcGFyYW1zLm1ldGhvZC50b1VwcGVyQ2FzZSgpIHx8ICdQT1NUJyxcbiAgICAgIGRhdGFUeXBlOiBwYXJhbXMuZGF0YVR5cGUsLy/ov5Tlm57nmoTmlbDmja7moLzlvI8s6buY6K6k5Li6SlNPTu+8jOeJueauiuagvOW8j+WPr+S7peWcqOiwg+eUqOeahOaXtuWAmeS8oOWFpeWPguaVsFxuICAgICAgcmVzcG9uc2VUeXBlOiBwYXJhbXMucmVzcG9uc2VUeXBlLC8v5ZON5bqU55qE5pWw5o2u57G75Z6LXG4gICAgICBzdWNjZXNzOiByZXMgPT4ge1xuICAgICAgICAvLyDmjqXlj6Porr/pl67mraPluLjov5Tlm57mlbDmja5cbiAgICAgICAgaWYgKChyZXMuc3RhdHVzQ29kZSA9PSAyMDAgJiYgcmVzLmRhdGEuY29kZSA9PT0gMjAwKXx8cmVzLmRhdGEuY29kZSA9PT0gNDAxKSB7XG4gICAgICAgICAgLy8xLiDmk43kvZzmiJDlip/ov5Tlm57mlbDmja5cbiAgICAgICAgICByZXNvbHZlKHJlcy5kYXRhKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vMi4g5pON5L2c5LiN5oiQ5Yqf6L+U5Zue5pWw5o2u77yM5LuldG9hc3TmlrnlvI/lvLnlh7rlk43lupTkv6Hmga/vvIzlpoLlkI7nq6/mnKrmoLzlvI/ljJbpnZ7mk43kvZzmiJDlip/lvILluLjkv6Hmga/vvIzliJnlj6/ku6Xnu5/kuIDlrprkuYnlvILluLjmj5DnpLpcblx0XHQgIGlmKHJlcy5kYXRhLmNvZGUgPT09IDUwMyl7XG4gICAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgaWNvbjogXCJub25lXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIuezu+e7n+W8guW4uFwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjozMDAwXG4gICAgICAgICAgICB9KSAgIFxuICAgICAgICAgIH1lbHNle1xuXHRcdFx0ICBpZihyZXMuZGF0YS5tc2cpe1xuXHRcdFx0ICAgIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0ICAgICAgaWNvbjogXCJub25lXCIsXG5cdFx0XHQgICAgICB0aXRsZTogcmVzLmRhdGEubXNnLFxuICAgICAgICAgICAgICAgICAgZHVyYXRpb246MzAwMFxuXHRcdFx0ICAgIH0pXG5cdFx0XHQgIH1cblx0XHQgIH1cblx0XHQgIHJlc29sdmUocmVzLmRhdGEpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZihlLmVyck1zZyA9PT0gXCJyZXF1ZXN0OmZhaWwgdGltZW91dFwiKXtcbiAgICAgICAgICB1bmkuc2hvd1RvYXN0KHtcbiAgICAgICAgICAgIGljb246IFwibm9uZVwiLFxuICAgICAgICAgICAgdGl0bGU6IFwi572R57uc6L+e5o6l6LaF5pe2LOivt+eojeWQjumHjeivlVwiXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT57XG4gICAgICAgICAgdW5pLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgIH0sIDE1MDApXG4gICAgICB9LFxuICAgICAgY29tcGxldGUoZSl7XG4gICAgICAgIHJlc29sdmUoZSlcbiAgICAgIH1cbiAgICB9KVxuICB9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaHR0cFJlcXVlc3Q6IGh0dHBcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///14\n");

/***/ })
],[[0,"app-config"]]]);