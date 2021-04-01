import React from "../_snowpack/pkg/react.js";
import {createMuiTheme, ThemeProvider} from "../_snowpack/pkg/@material-ui/core/styles.js";
import CssBaseline from "../_snowpack/pkg/@material-ui/core/CssBaseline.js";
import orange from "../_snowpack/pkg/@material-ui/core/colors/orange.js";
import MenuBar from "./components/MenuBar.js";
import Workflow from "./components/Workflow.js";
const theme = createMuiTheme({
  palette: {
    primary: orange
  },
  typography: {
    fontFamily: ["Roboto", "Noto Sans"].join(","),
    fontSize: 13,
    h1: {
      fontSize: "1.75rem"
    },
    h2: {
      fontSize: "1.5rem"
    },
    h3: {
      fontSize: "1.25rem"
    },
    h4: {
      fontSize: "1.125rem"
    },
    h5: {
      fontSize: "1rem"
    },
    h6: {
      fontSize: "1rem"
    }
  }
});
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpencvLoaded: false
    };
    this.APP_NAME = "imageCompare";
    this.APP_INFO = [
      "imageCompare 0.9",
      "https://github.com/YUUKIToriyama/imageCompare",
      "(C)Copyright 2020 YUUKIToriyama All Rights Reserved."
    ].join("\n");
    this.OPEN_CV_URL = "https://docs.opencv.org/4.5.0/opencv.js";
  }
  componentDidMount() {
    let script = document.createElement("script");
    script.setAttribute("type", "text/javascript");
    script.addEventListener("load", () => {
      if (cv.getBuildInformation) {
        console.log(cv.getBuildInformation());
        this.setState({
          isOpencvLoaded: true
        });
      } else {
        cv["onRuntimeInitialized"] = () => {
          console.log(cv.getBuildInformation());
          this.setState({
            isOpencvLoaded: true
          });
        };
      }
    });
    script.addEventListener("error", () => {
      console.error("Failed to load " + this.OPEN_CV_URL);
    });
    script.src = this.OPEN_CV_URL;
    let node = document.querySelector("head");
    node.appendChild(script);
  }
  render() {
    return /* @__PURE__ */ React.createElement(ThemeProvider, {
      theme
    }, /* @__PURE__ */ React.createElement(CssBaseline, null), /* @__PURE__ */ React.createElement(MenuBar, {
      title: this.APP_NAME,
      message: this.APP_INFO,
      isOpencvLoaded: this.state.isOpencvLoaded
    }), /* @__PURE__ */ React.createElement(Workflow, null));
  }
}
export default App;
