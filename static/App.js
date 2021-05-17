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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvQXBwLmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0EsTUFBTSxjQUFjLE1BQU07QUFDekIsUUFBTSxDQUFDLFVBQVUsZUFBZSxNQUFNLFNBQ3JDLGFBQWEsUUFBUSxnQkFBZ0IsT0FBTyxPQUFPO0FBRXBELFFBQU0sbUJBQW1CLE1BQU0sWUFBWSxNQUFNO0FBQ2hELGlCQUFhLFFBQVEsWUFBWTtBQUNqQyxnQkFBWTtBQUFBLEtBQ1Y7QUFDSCxRQUFNLG9CQUFvQixNQUFNLFlBQVksTUFBTTtBQUNqRCxpQkFBYSxRQUFRLFlBQVk7QUFDakMsZ0JBQVk7QUFBQSxLQUNWO0FBQ0gsU0FBTztBQUFBLElBQ047QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBO0FBQUE7QUFJRixNQUFNLE1BQU0sTUFBTTtBQUNqQixRQUFNLENBQUMsZ0JBQWdCLHFCQUFxQixNQUFNLFNBQVM7QUFFM0QsUUFBTSxDQUFFLFVBQVUsa0JBQWtCLHFCQUFzQjtBQUMxRCxRQUFNLFFBQVEsZUFBZTtBQUFBLElBQzVCLFNBQVM7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNSLE1BQU0sV0FBVyxPQUFPLE1BQU0sT0FBTyxPQUFPLFdBQVc7QUFBQTtBQUFBLE1BRXhELE1BQU0sV0FBVyxTQUFTO0FBQUE7QUFBQSxJQUUzQixZQUFZO0FBQUEsTUFDWCxZQUFZLENBQUMsVUFBVSxhQUFhLEtBQUs7QUFBQTtBQUFBO0FBSTNDLFNBQ0Msb0NBQUMsZUFBRDtBQUFBLElBQWU7QUFBQSxLQUNkLG9DQUFDLGFBQUQsT0FDQSxvQ0FBQyxnQkFBRDtBQUFBLElBQWdCLFlBQVk7QUFBQSxJQUFZLFFBQVEsTUFBTTtBQUNyRCx3QkFBa0IsTUFBTTtBQUN4QixjQUFRLElBQUksR0FBRztBQUFBO0FBQUEsS0FFZixvQ0FBQyxTQUFEO0FBQUEsSUFDQyxPQUFPLFNBQVM7QUFBQSxJQUNoQixTQUFTLFNBQVM7QUFBQSxJQUNsQjtBQUFBLElBQ0Esa0JBQ0MsV0FBVyxvQ0FBQyxnQkFBRDtBQUFBLE1BQWdCLFNBQVM7QUFBQSxNQUFtQixNQUFNLG9DQUFDLGFBQUQ7QUFBQSxNQUFpQixPQUFNO0FBQUEsU0FBa0Isb0NBQUMsZ0JBQUQ7QUFBQSxNQUFnQixTQUFTO0FBQUEsTUFBa0IsTUFBTSxvQ0FBQyxhQUFEO0FBQUEsTUFBaUIsT0FBTTtBQUFBO0FBQUEsTUFHaEwsb0NBQUMsVUFBRDtBQUFBO0FBTUosZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
