import { _ as _extends } from '../../common/useTheme-44d92618.js';
import { r as react } from '../../common/index-57a74e37.js';
import '../../common/index-ce016b4a.js';
import { w as withStyles } from '../../common/withStyles-70eb090b.js';
import '../../common/_commonjsHelpers-8c19dec8.js';
import '../../common/defaultTheme-7753c4cc.js';
import '../../common/createMuiTheme-779b326f.js';
import '../../common/withStyles-afecc0b4.js';
import '../../common/hoist-non-react-statics.cjs-c1ffb7fa.js';

var html = {
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box'
};
var body = function body(theme) {
  return _extends({
    color: theme.palette.text.primary
  }, theme.typography.body2, {
    backgroundColor: theme.palette.background.default,
    '@media print': {
      // Save printer ink.
      backgroundColor: theme.palette.common.white
    }
  });
};
var styles = function styles(theme) {
  return {
    '@global': {
      html: html,
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      'strong, b': {
        fontWeight: theme.typography.fontWeightBold
      },
      body: _extends({
        margin: 0
      }, body(theme), {
        // Add support for document.body.requestFullScreen().
        // Other elements, if background transparent, are not supported.
        '&::backdrop': {
          backgroundColor: theme.palette.background.default
        }
      })
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */

function CssBaseline(props) {
  /* eslint-disable no-unused-vars */
  var _props$children = props.children,
      children = _props$children === void 0 ? null : _props$children;
      props.classes;
  /* eslint-enable no-unused-vars */

  return /*#__PURE__*/react.createElement(react.Fragment, null, children);
}

var __pika_web_default_export_for_treeshaking__ = withStyles(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=CssBaseline.js.map
