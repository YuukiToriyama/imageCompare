import { c as createCommonjsModule, g as getDefaultExportFromCjs } from './common/_commonjsHelpers-8c19dec8.js';
import { r as react } from './common/index-57a74e37.js';
import { p as propTypes } from './common/index-ce016b4a.js';

var nonPreviewDefaultComponent = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _react2 = _interopRequireDefault(react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NonPreviewDefaultComponent = function NonPreviewDefaultComponent(_ref) {
  var _ref$title = _ref.title,
      title = _ref$title === undefined ? "No Preview" : _ref$title,
      _ref$size = _ref.size,
      size = _ref$size === undefined ? null : _ref$size,
      _ref$type = _ref.type,
      type = _ref$type === undefined ? null : _ref$type;
  return _react2.default.createElement(
    'div',
    { style: {
        backgroundColor: '#FFFFFF',
        height: '30vmin',
        width: '30vmin',
        marginTop: 5,
        marginBottom: 5,
        marginRight: 5,
        boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px",
        overflow: 'hidden'
      }
    },
    _react2.default.createElement(
      'div',
      { style: { margin: 5 } },
      _react2.default.createElement(
        'p',
        { style: { margin: 0, fontWeight: '500' } },
        title.split('.')[0]
      ),
      _react2.default.createElement(
        'p',
        { style: { margin: 0 } },
        size + " kb"
      ),
      _react2.default.createElement(
        'p',
        { style: { margin: 0 } },
        type !== "" ? type.split('/')[1] : title.split('.')[1]
      )
    )
  );
};

exports.default = NonPreviewDefaultComponent;
});

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



var _react2 = _interopRequireDefault(react);



var _propTypes2 = _interopRequireDefault(propTypes);



var _nonPreviewDefaultComponent2 = _interopRequireDefault(nonPreviewDefaultComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileInputBase64PreviewComponent = function (_Component) {
  _inherits(FileInputBase64PreviewComponent, _Component);

  function FileInputBase64PreviewComponent(props) {
    _classCallCheck(this, FileInputBase64PreviewComponent);

    var _this = _possibleConstructorReturn(this, (FileInputBase64PreviewComponent.__proto__ || Object.getPrototypeOf(FileInputBase64PreviewComponent)).call(this, props));

    _this.state = {
      image_objs_array: []
    };
    return _this;
  }

  _createClass(FileInputBase64PreviewComponent, [{
    key: 'simulateClickOnInput',
    value: function simulateClickOnInput() {
      var clickEvent = new MouseEvent("click", {
        "view": window,
        "bubbles": true,
        "cancelable": false
      });
      this.fileInput.dispatchEvent(clickEvent);
    }
  }, {
    key: 'handleFileChange',
    value: function handleFileChange(e) {
      var _this2 = this;

      var inp_files = e.target.files;
      var op_all_files = [];

      var _loop = function _loop(i) {
        var to_file = inp_files[i];
        var reader_obj = new FileReader();
        reader_obj.readAsDataURL(to_file);
        reader_obj.onload = function () {
          var to_file_obj = {
            name: to_file.name,
            type: to_file.type,
            size: Math.round(to_file.size / 1000),
            base64: reader_obj.result,
            file: to_file
          };
          op_all_files.push(to_file_obj);
          if (op_all_files.length === inp_files.length) {
            if (_this2.props.multiple) {
              _this2.setState({ image_objs_array: op_all_files });
              _this2.props.callbackFunction(op_all_files);
            } else {
              _this2.setState({ image_objs_array: op_all_files });
              _this2.props.callbackFunction(op_all_files[0]);
            }
          }
        };
      };

      for (var i = 0; i < inp_files.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return _react2.default.createElement(
        'div',
        { style: this.props.parentStyle },
        _react2.default.createElement(
          'label',
          { htmlFor: this.props.inputId, style: this.props.labelStyle },
          this.props.labelText
        ),
        this.props.imagePreview && (this.state.image_objs_array.length !== 0 || this.props.defaultFiles.length !== 0) && _react2.default.createElement(
          'div',
          { style: this.props.imageContainerStyle },
          this.state.image_objs_array.length !== 0 && this.state.image_objs_array.map(function (img_obj) {
            if (img_obj.type.split("/")[0] === "image") {
              return _react2.default.createElement('img', { alt: img_obj.name, src: img_obj.base64, key: img_obj.name, style: _this3.props.imageStyle });
            } else {
              return _react2.default.cloneElement(_this3.props.nonPreviewComponent, { type: img_obj.type, size: img_obj.size, title: img_obj.name, key: img_obj.name });
            }
          }),
          this.state.image_objs_array.length === 0 && this.props.defaultFiles.map(function (img_url, index) {
            return _react2.default.createElement('img', { alt: "Preview " + index, src: img_url, key: index, style: _this3.props.imageStyle });
          })
        ),
        _react2.default.createElement('input', {
          name: this.props.inputName,
          id: this.props.inputId,
          type: 'file',
          onChange: this.handleFileChange.bind(this),
          multiple: this.props.multiple,
          accept: this.props.accept,
          ref: function ref(thisInput) {
            _this3.fileInput = thisInput;
          },
          style: { display: "none" }
        }),
        this.props.textBoxVisible && _react2.default.cloneElement(this.props.textFieldComponent, this.props.useTapEventPlugin ? {
          onTouchTap: function onTouchTap() {
            _this3.simulateClickOnInput();
          },
          value: this.state.image_objs_array.length === 1 ? this.state.image_objs_array[0].name : this.state.image_objs_array.length > 1 ? this.state.image_objs_array.length + " files selected" : this.props.defaultFiles.length === 0 ? "No files selected" : "Leave empty to keep previous selection"
        } : {
          onClick: function onClick() {
            _this3.simulateClickOnInput();
          },
          value: this.state.image_objs_array.length === 1 ? this.state.image_objs_array[0].name : this.state.image_objs_array.length > 1 ? this.state.image_objs_array.length + " files selected" : this.props.defaultFiles.length === 0 ? "No files selected" : "Leave empty to keep previous selection"
        }),
        _react2.default.cloneElement(this.props.buttonComponent, this.props.useTapEventPlugin ? { onTouchTap: function onTouchTap() {
            _this3.simulateClickOnInput();
          } } : { onClick: function onClick() {
            _this3.simulateClickOnInput();
          } })
      );
    }
  }]);

  return FileInputBase64PreviewComponent;
}(react.Component);

exports.default = FileInputBase64PreviewComponent;


FileInputBase64PreviewComponent.defaultProps = {
  callbackFunction: function callbackFunction() {},
  labelText: "File Upload",
  useTapEventPlugin: false,
  multiple: true,
  imagePreview: true,
  textBoxVisible: false,
  accept: "*",
  imageContainerStyle: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap"
  },
  imageStyle: {
    marginTop: 5,
    marginBottom: 5,
    marginRight: 5,
    width: "auto",
    height: "30vmin",
    boxShadow: "rgba(0, 0, 0, 0.188235) 0px 10px 30px, rgba(0, 0, 0, 0.227451) 0px 6px 10px" //zDepth 3
  },
  labelStyle: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.298039)',
    display: 'block'
  },
  parentStyle: {
    marginTop: 14
  },
  buttonComponent: _react2.default.createElement(
    'button',
    { type: 'button' },
    'Attach'
  ),
  nonPreviewComponent: _react2.default.createElement(_nonPreviewDefaultComponent2.default, null),
  textFieldComponent: _react2.default.createElement('input', { type: 'text' }),
  defaultFiles: []
};

FileInputBase64PreviewComponent.propTypes = {
  inputName: _propTypes2.default.string,
  inputId: _propTypes2.default.string,
  callbackFunction: _propTypes2.default.func,
  labelText: _propTypes2.default.string,
  useTapEventPlugin: _propTypes2.default.bool,
  multiple: _propTypes2.default.bool,
  imagePreview: _propTypes2.default.bool,
  textBoxVisible: _propTypes2.default.bool,
  accept: _propTypes2.default.string,
  imageContainerStyle: _propTypes2.default.object,
  imageStyle: _propTypes2.default.object,
  labelStyle: _propTypes2.default.object,
  parentStyle: _propTypes2.default.object,
  buttonComponent: _propTypes2.default.element,
  nonPreviewComponent: _propTypes2.default.element,
  textFieldComponent: _propTypes2.default.element,
  defaultFiles: _propTypes2.default.array
};
});

var __pika_web_default_export_for_treeshaking__ = /*@__PURE__*/getDefaultExportFromCjs(lib);

export default __pika_web_default_export_for_treeshaking__;
//# sourceMappingURL=react-file-input-previews-base64.js.map
