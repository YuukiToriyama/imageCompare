import { r as react } from './common/index-04edb6a1.js';
import './common/_commonjsHelpers-8c19dec8.js';

var OpenCvContext = react.createContext();
var OpenCvConsumer = OpenCvContext.Consumer,
    Provider = OpenCvContext.Provider;
var scriptId = 'opencv-react';
var moduleConfig = {
  wasmBinaryFile: 'opencv_js.wasm',
  usingWasm: true
};
var OpenCvProvider = function OpenCvProvider(_ref) {
  var openCvPath = _ref.openCvPath,
      children = _ref.children,
      onLoad = _ref.onLoad;

  var _React$useState = react.useState(false),
      loaded = _React$useState[0],
      setLoaded = _React$useState[1];

  var handleOnLoad = react.useCallback(function () {
    if (onLoad) {
      onLoad(window.cv);
    }

    setLoaded(true);
  }, []);
  react.useEffect(function () {
    if (document.getElementById(scriptId) || window.cv) {
      setLoaded(true);
      return;
    }

    moduleConfig.onRuntimeInitialized = handleOnLoad;
    window.Module = moduleConfig;

    var generateOpenCvScriptTag = function generateOpenCvScriptTag() {
      var js = document.createElement('script');
      js.id = scriptId;
      js.src = openCvPath || 'https://docs.opencv.org/3.4.13/opencv.js';
      js.nonce = true;
      js.defer = true;
      js.async = true;
      return js;
    };

    document.body.appendChild(generateOpenCvScriptTag());
  }, [openCvPath, handleOnLoad]);
  var memoizedProviderValue = react.useMemo(function () {
    return {
      loaded: loaded,
      cv: window.cv
    };
  }, [loaded]);
  return /*#__PURE__*/react.createElement(Provider, {
    value: memoizedProviderValue
  }, children);
};

export { OpenCvProvider };
//# sourceMappingURL=opencv-react.js.map
