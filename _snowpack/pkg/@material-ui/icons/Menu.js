import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault, _ as _extends_1 } from '../../common/extends-cde0e8c4.js';
import { r as react } from '../../common/index-57a74e37.js';
import { r as require$$2 } from '../../common/SvgIcon-2b1943e7.js';
import '../../common/useTheme-44d92618.js';
import '../../common/index-ce016b4a.js';
import '../../common/clsx.m-114f790f.js';
import '../../common/withStyles-70eb090b.js';
import '../../common/defaultTheme-7753c4cc.js';
import '../../common/createMuiTheme-779b326f.js';
import '../../common/withStyles-afecc0b4.js';
import '../../common/hoist-non-react-statics.cjs-c1ffb7fa.js';
import '../../common/capitalize-f0c61973.js';

var createSvgIcon_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createSvgIcon;

var _extends2 = interopRequireDefault(_extends_1);

var _react = interopRequireDefault(react);

var _SvgIcon = interopRequireDefault(require$$2);

function createSvgIcon(path, displayName) {
  var Component = _react.default.memo(_react.default.forwardRef(function (props, ref) {
    return _react.default.createElement(_SvgIcon.default, (0, _extends2.default)({
      ref: ref
    }, props), path);
  }));

  Component.muiName = _SvgIcon.default.muiName;
  return Component;
}
});

var Menu = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = interopRequireDefault(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon_1);

var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Menu);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=Menu.js.map
