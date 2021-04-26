import React from "../_snowpack/pkg/react.js";
import {OpenCvProvider} from "../_snowpack/pkg/opencv-react.js";
import {
  createMuiTheme,
  ThemeProvider
} from "../_snowpack/pkg/@material-ui/core/styles.js";
import CssBaseline from "../_snowpack/pkg/@material-ui/core/CssBaseline.js";
import * as colors from "../_snowpack/pkg/@material-ui/core/colors.js";
import MenuBar from "./components/block/MenuBar.js";
import Workflow from "./components/modules/Workflow.js";
import {
  APP_INFO,
  OPENCV_URL
} from "./utils/Settings.js";
import ButtonWithIcon from "./components/atoms/ButtonWithIcon.js";
import {
  Brightness4,
  Brightness7
} from "../_snowpack/pkg/@material-ui/icons.js";
const useDarkMode = () => {
  const [darkMode, setDarkMode] = React.useState(localStorage.getItem("darkMode") === "on" ? true : false);
  const handleDarkModeOn = React.useCallback(() => {
    localStorage.setItem("darkMode", "on");
    setDarkMode(true);
  }, []);
  const handleDarkModeOff = React.useCallback(() => {
    localStorage.setItem("darkMode", "off");
    setDarkMode(false);
  }, []);
  return {
    darkMode,
    handleDarkModeOn,
    handleDarkModeOff
  };
};
const App = () => {
  const [isOpencvLoaded, setIsOpencvLoaded] = React.useState(false);
  const {darkMode, handleDarkModeOn, handleDarkModeOff} = useDarkMode();
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: darkMode ? colors.brown[500] : colors.deepOrange[500]
      },
      type: darkMode ? "dark" : "light"
    },
    typography: {
      fontFamily: ["Roboto", "Noto Sans"].join(",")
    }
  });
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(OpenCvProvider, {
    openCvPath: OPENCV_URL,
    onLoad: () => {
      setIsOpencvLoaded(() => true);
      console.log(cv.getBuildInformation());
    }
  }, /* @__PURE__ */ React.createElement(MenuBar, {
    title: APP_INFO.NAME,
    message: APP_INFO.COPYRIGHT,
    isOpencvLoaded,
    darkModeSwitcher: darkMode ? /* @__PURE__ */ React.createElement(ButtonWithIcon, {
      onClick: handleDarkModeOff,
      icon: /* @__PURE__ */ React.createElement(Brightness7, null),
      title: "Light mode"
    }) : /* @__PURE__ */ React.createElement(ButtonWithIcon, {
      onClick: handleDarkModeOn,
      icon: /* @__PURE__ */ React.createElement(Brightness4, null),
      title: "Dark mode"
    })
  }), /* @__PURE__ */ React.createElement(Workflow, null)));
};
export default App;
