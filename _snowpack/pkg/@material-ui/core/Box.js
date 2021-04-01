import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireWildcard } from '../../common/interopRequireWildcard-93557af1.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-3cc583d4.js';
import { e as esm } from '../../common/defaultTheme-93e4042c.js';
import { s as styled_1 } from '../../common/styled-1191441e.js';
import '../../common/withStyles-e1b0dff9.js';
import '../../common/index-ce016b4a.js';
import '../../common/index-04edb6a1.js';
import '../../common/styled-942048ba.js';
import '../../common/orange-16905d37.js';

var Box_1 = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styleFunction = void 0;



var _styled = interopRequireDefault(styled_1);

var styleFunction = (0, esm.css)((0, esm.compose)(esm.borders, esm.display, esm.flexbox, esm.grid, esm.positions, esm.palette, esm.shadows, esm.sizing, esm.spacing, esm.typography));
/**
 * @ignore - do not document.
 */

exports.styleFunction = styleFunction;
var Box = (0, _styled.default)('div')(styleFunction, {
  name: 'MuiBox'
});
var _default = Box;
exports.default = _default;
});

var Box = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Box.default;
  }
});
Object.defineProperty(exports, "styleFunction", {
  enumerable: true,
  get: function get() {
    return _Box.styleFunction;
  }
});

var _Box = interopRequireWildcard(Box_1);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Box);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=Box.js.map
