import { c as createCommonjsModule, g as getDefaultExportFromCjs } from '../../common/_commonjsHelpers-8c19dec8.js';
import { i as interopRequireDefault } from '../../common/interopRequireDefault-3cc583d4.js';
import { i as interopRequireWildcard } from '../../common/interopRequireWildcard-4b5df1c6.js';
import { _ as _extends_1, o as objectWithoutProperties } from '../../common/defaultTheme-8262ede6.js';
import { r as react } from '../../common/index-04edb6a1.js';
import { p as propTypes } from '../../common/index-ce016b4a.js';
import { r as require$$4 } from '../../common/withStyles-9cb64e83.js';
import { F as FormControl$1, u as useFormControl } from '../../common/FormControl-ae3665f3.js';
import { w as withStyles_1 } from '../../common/withStyles-a04cd98a.js';
import { c as capitalize_1 } from '../../common/capitalize-6ef41b38.js';
import { r as require$$6 } from '../../common/Typography-70f93d21.js';
import '../../common/typeof-06592999.js';
import '../../common/styled-ad35330b.js';
import '../../common/green-c86e4e47.js';
import '../../common/withStyles-2981c907.js';
import '../../common/capitalize-0ec16b1b.js';
import '../../common/isMuiElement-8cbbe173.js';

var FormControl = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': FormControl$1,
  useFormControl: useFormControl
});

var FormControlLabel_1 = createCommonjsModule(function (module, exports) {





Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = interopRequireDefault(_extends_1);

var _objectWithoutProperties2 = interopRequireDefault(objectWithoutProperties);

var React = interopRequireWildcard(react);

var _propTypes = interopRequireDefault(propTypes);

var _clsx = interopRequireDefault(require$$4);





var _withStyles = interopRequireDefault(withStyles_1);

var _Typography = interopRequireDefault(require$$6);

var _capitalize = interopRequireDefault(capitalize_1);

var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'inline-flex',
      alignItems: 'center',
      cursor: 'pointer',
      // For correct alignment with the text.
      verticalAlign: 'middle',
      WebkitTapHighlightColor: 'transparent',
      marginLeft: -11,
      marginRight: 16,
      // used for row presentation of radio/checkbox
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `labelPlacement="start"`. */
    labelPlacementStart: {
      flexDirection: 'row-reverse',
      marginLeft: 16,
      // used for row presentation of radio/checkbox
      marginRight: -11
    },

    /* Styles applied to the root element if `labelPlacement="top"`. */
    labelPlacementTop: {
      flexDirection: 'column-reverse',
      marginLeft: 16
    },

    /* Styles applied to the root element if `labelPlacement="bottom"`. */
    labelPlacementBottom: {
      flexDirection: 'column',
      marginLeft: 16
    },

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the label's Typography component. */
    label: {
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    }
  };
};
/**
 * Drop in replacement of the `Radio`, `Switch` and `Checkbox` component.
 * Use this component if you want to display an extra label.
 */


exports.styles = styles;
var FormControlLabel = /*#__PURE__*/React.forwardRef(function FormControlLabel(props, ref) {
  var checked = props.checked,
      classes = props.classes,
      className = props.className,
      control = props.control,
      disabledProp = props.disabled,
      inputRef = props.inputRef,
      label = props.label,
      _props$labelPlacement = props.labelPlacement,
      labelPlacement = _props$labelPlacement === void 0 ? 'end' : _props$labelPlacement,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0, _objectWithoutProperties2.default)(props, ["checked", "classes", "className", "control", "disabled", "inputRef", "label", "labelPlacement", "name", "onChange", "value"]);
  var muiFormControl = (0, FormControl.useFormControl)();
  var disabled = disabledProp;

  if (typeof disabled === 'undefined' && typeof control.props.disabled !== 'undefined') {
    disabled = control.props.disabled;
  }

  if (typeof disabled === 'undefined' && muiFormControl) {
    disabled = muiFormControl.disabled;
  }

  var controlProps = {
    disabled: disabled
  };
  ['checked', 'name', 'onChange', 'value', 'inputRef'].forEach(function (key) {
    if (typeof control.props[key] === 'undefined' && typeof props[key] !== 'undefined') {
      controlProps[key] = props[key];
    }
  });
  return /*#__PURE__*/React.createElement("label", (0, _extends2.default)({
    className: (0, _clsx.default)(classes.root, className, labelPlacement !== 'end' && classes["labelPlacement".concat((0, _capitalize.default)(labelPlacement))], disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/React.cloneElement(control, controlProps), /*#__PURE__*/React.createElement(_Typography.default, {
    component: "span",
    className: (0, _clsx.default)(classes.label, disabled && classes.disabled)
  }, label));
});

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormControlLabel'
})(FormControlLabel);

exports.default = _default;
});

var FormControlLabel = createCommonjsModule(function (module, exports) {



Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormControlLabel.default;
  }
});

var _FormControlLabel = interopRequireDefault(FormControlLabel_1);
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(FormControlLabel);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=FormControlLabel.js.map
