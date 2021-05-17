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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9ibG9jay9NZW51QmFyLmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFHQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLFlBQVksQ0FBQyxVQUFXO0FBQUEsRUFDN0IsTUFBTTtBQUFBLElBQ0wsVUFBVTtBQUFBO0FBQUEsRUFFWCxZQUFZO0FBQUEsSUFDWCxhQUFhLE1BQU0sUUFBUTtBQUFBO0FBQUEsRUFFNUIsT0FBTztBQUFBLElBQ04sVUFBVTtBQUFBO0FBQUE7QUFJWixzQkFBc0IsTUFBTSxVQUFVO0FBQUEsRUFDckMsWUFBWSxPQUFPO0FBQ2xCLFVBQU07QUFDTixTQUFLLFlBQVksTUFBTTtBQUFBO0FBQUEsRUFHeEIsbUJBQW1CLE1BQU07QUFDeEIsU0FBSyxVQUFVLFFBQVE7QUFBQTtBQUFBLEVBR3hCLFNBQVM7QUFDUixVQUFNLENBQUUsV0FBWSxLQUFLO0FBQ3pCLFdBQ0Msb0NBQUMsT0FBRDtBQUFBLE1BQUssV0FBVyxRQUFRO0FBQUEsT0FDdkIsb0NBQUMsUUFBRDtBQUFBLE1BQVEsVUFBUztBQUFBLE9BQ2hCLG9DQUFDLFNBQUQsTUFDQyxvQ0FBQyxZQUFEO0FBQUEsTUFDQyxNQUFLO0FBQUEsTUFDTCxXQUFXLFFBQVE7QUFBQSxNQUNuQixPQUFNO0FBQUEsTUFDTixjQUFXO0FBQUEsTUFDWCxTQUFTLEtBQUs7QUFBQSxPQUVkLG9DQUFDLFVBQUQsUUFFRCxvQ0FBQyxZQUFEO0FBQUEsTUFBWSxTQUFRO0FBQUEsTUFBSyxXQUFXLFFBQVE7QUFBQSxPQUMxQyxLQUFLLE1BQU0sUUFFWixDQUFDLEtBQUssTUFBTSxpQkFDWixvQ0FBQyxrQkFBRDtBQUFBLE1BQWtCLE9BQU07QUFBQSxTQUV4QixvQ0FBQyxjQUFEO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixPQUFNO0FBQUEsTUFDTixhQUFhLEdBQ1gsc0JBQ0EsTUFBTSxNQUNOLElBQUksQ0FBQyxNQUFNLFFBQ1gsb0NBQUMsUUFBRDtBQUFBLFFBQU07QUFBQSxTQUNKLE1BQ0Qsb0NBQUMsTUFBRDtBQUFBLFFBS0wsb0NBQUMsY0FBRDtBQUFBLE1BQ0MsT0FBTTtBQUFBLE1BQ04sT0FBTTtBQUFBLE1BQ04sU0FBUyxvQ0FBQyxhQUFEO0FBQUEsUUFFVixvQ0FBQyxjQUFEO0FBQUEsTUFDQyxPQUFNO0FBQUEsTUFDTixPQUFNO0FBQUEsTUFDTixhQUFhLEtBQUssTUFBTTtBQUFBLFFBRXhCLEtBQUssTUFBTSxvQkFHZCxvQ0FBQyxVQUFEO0FBQUEsTUFBVSxLQUFLLEtBQUs7QUFBQTtBQUFBO0FBQUE7QUFNeEIsZUFBZSxXQUFXLFdBQVc7QUFFckMsUUFBUSxZQUFZO0FBQUEsRUFDbkIsU0FBUyxVQUFVO0FBQUEsRUFDbkIsT0FBTyxVQUFVLE9BQU87QUFBQSxFQUN4QixrQkFBa0IsVUFBVTtBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
