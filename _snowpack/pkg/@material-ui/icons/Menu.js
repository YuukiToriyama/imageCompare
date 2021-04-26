import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-3cc583d4.js';
import { i as interopRequireWildcard } from '../../common/interopRequireWildcard-93557af1.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { c as capitalize } from '../../common/capitalize-e18a6395.js';
import { c as createChainedFunction, d as debounce, o as ownerDocument, a as ownerWindow, u as useControlled, b as useId } from '../../common/unstable_useId-d743e691.js';
import { c as createSvgIcon$1 } from '../../common/createSvgIcon-e2313177.js';
import { i as isMuiElement } from '../../common/isMuiElement-8cbbe173.js';
import { s as setRef, a as useEventCallback, u as useForkRef, b as useIsFocusVisible } from '../../common/useIsFocusVisible-8be5e09b.js';
import '../../common/withStyles-225f3571.js';
import '../../common/index-ce016b4a.js';
import '../../common/withStyles-04eff16a.js';
import '../../common/index-3eae4d6e.js';

function deprecatedPropType(validator, reason) {
  {
    return function () {
      return null;
    };
  }
}

function requirePropFactory(componentNameInError) {
  {
    return function () {
      return null;
    };
  }
}

function unsupportedProp(props, propName, componentName, location, propFullName) {
  {
    return null;
  }
}

var utils = /*#__PURE__*/Object.freeze({
  __proto__: null,
  capitalize: capitalize,
  createChainedFunction: createChainedFunction,
  createSvgIcon: createSvgIcon$1,
  debounce: debounce,
  deprecatedPropType: deprecatedPropType,
  isMuiElement: isMuiElement,
  ownerDocument: ownerDocument,
  ownerWindow: ownerWindow,
  requirePropFactory: requirePropFactory,
  setRef: setRef,
  unsupportedProp: unsupportedProp,
  useControlled: useControlled,
  useEventCallback: useEventCallback,
  useForkRef: useForkRef,
  unstable_useId: useId,
  useIsFocusVisible: useIsFocusVisible
});

var createSvgIcon = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return utils.createSvgIcon;
  }
});
});

var Menu = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = interopRequireWildcard(react);

var _createSvgIcon = interopRequireDefault(createSvgIcon);

var _default = (0, _createSvgIcon.default)( /*#__PURE__*/React.createElement("path", {
  d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
}), 'Menu');

exports.default = _default;
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(Menu);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=Menu.js.map
