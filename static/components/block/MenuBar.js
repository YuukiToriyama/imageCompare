import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import withStyles from "../../../_snowpack/pkg/@material-ui/core/styles/withStyles.js";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  CircularProgress
} from "../../../_snowpack/pkg/@material-ui/core.js";
import MenuIcon from "../../../_snowpack/pkg/@material-ui/icons/Menu.js";
import MyDrawer from "./MyDrawer.js";
import ScrollDialog from "../atoms/ScrollDialog.js";
import LicenseInfo from "./LicenseInfo.js";
const useStyles = (theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
});
class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.drawerRef = React.createRef();
  }
  handleDrawerOpen = () => {
    this.drawerRef.current.handleDrawerOpen();
  };
  render() {
    const {classes} = this.props;
    return /* @__PURE__ */ React.createElement("div", {
      className: classes.root
    }, /* @__PURE__ */ React.createElement(AppBar, {
      position: "static"
    }, /* @__PURE__ */ React.createElement(Toolbar, null, /* @__PURE__ */ React.createElement(IconButton, {
      edge: "start",
      className: classes.menuButton,
      color: "inherit",
      "aria-label": "menu",
      onClick: this.handleDrawerOpen
    }, /* @__PURE__ */ React.createElement(MenuIcon, null)), /* @__PURE__ */ React.createElement(Typography, {
      variant: "h6",
      className: classes.title
    }, this.props.title), !this.props.isOpencvLoaded ? /* @__PURE__ */ React.createElement(CircularProgress, {
      color: "inherit"
    }) : /* @__PURE__ */ React.createElement(ScrollDialog, {
      label: "About OpenCV.js",
      title: "Build information",
      contentText: cv.getBuildInformation().split("\n").map((line, key) => /* @__PURE__ */ React.createElement("span", {
        key
      }, line, /* @__PURE__ */ React.createElement("br", null)))
    }), /* @__PURE__ */ React.createElement(ScrollDialog, {
      label: "Licenses",
      title: "ライセンス情報",
      content: /* @__PURE__ */ React.createElement(LicenseInfo, null)
    }), /* @__PURE__ */ React.createElement(ScrollDialog, {
      label: "Help",
      title: "About this app",
      contentText: this.props.message
    }), this.props.darkModeSwitcher)), /* @__PURE__ */ React.createElement(MyDrawer, {
      ref: this.drawerRef
    }));
  }
}
export default withStyles(useStyles)(MenuBar);
MenuBar.propTypes = {
  message: PropTypes.string,
  title: PropTypes.string.isRequired,
  darkModeSwitcher: PropTypes.element
};
