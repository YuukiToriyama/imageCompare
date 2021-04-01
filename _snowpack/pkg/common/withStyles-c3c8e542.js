import { g as getDefaultExportFromCjs, c as createCommonjsModule } from './_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from './interopRequireDefault-3cc583d4.js';
import { _ as _extends_1, d as defaultTheme_1, a as esm } from './defaultTheme-bdfc9657.js';

var withStyles_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = interopRequireDefault(_extends_1);



var _defaultTheme = interopRequireDefault(defaultTheme_1);

function withStyles(stylesOrCreator, options) {
  return (0, esm.withStyles)(stylesOrCreator, (0, _extends2.default)({
    defaultTheme: _defaultTheme.default
  }, options));
}

var _default = withStyles;
exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(withStyles_1);

export { __pika_web_default_export_for_treeshaking__ as _, withStyles_1 as w };
//# sourceMappingURL=withStyles-c3c8e542.js.map
