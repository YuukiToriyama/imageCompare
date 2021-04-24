import React from "../../../_snowpack/pkg/react.js";
import withStyles from "../../../_snowpack/pkg/@material-ui/core/styles/withStyles.js";
import {
  Link,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton
} from "../../../_snowpack/pkg/@material-ui/core.js";
import {ChevronLeft, Help, GitHub, Info} from "../../../_snowpack/pkg/@material-ui/icons.js";
const drawerWidth = 240;
const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
});
class MyDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleDrawerClose.bind(this);
    this.handleDrawerOpen.bind(this);
  }
  handleDrawerOpen = () => {
    this.setState({
      open: true
    });
  };
  handleDrawerClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    const {classes} = this.props;
    return /* @__PURE__ */ React.createElement(Drawer, {
      className: classes.drawer,
      variant: "persistent",
      anchor: "left",
      open: this.state.open,
      classes: {
        paper: classes.drawerPaper
      }
    }, /* @__PURE__ */ React.createElement("div", {
      className: classes.drawerHeader
    }, /* @__PURE__ */ React.createElement(IconButton, {
      onClick: this.handleDrawerClose
    }, /* @__PURE__ */ React.createElement(ChevronLeft, null))), /* @__PURE__ */ React.createElement(Divider, null), /* @__PURE__ */ React.createElement(List, null, /* @__PURE__ */ React.createElement(Link, {
      href: "https://github.com/YUUKIToriyama/imageCompare"
    }, /* @__PURE__ */ React.createElement(ListItem, {
      button: true,
      key: "Github"
    }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(GitHub, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "View Source Code"))), /* @__PURE__ */ React.createElement(ListItem, {
      button: true,
      key: "Information"
    }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Info, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "More information")), /* @__PURE__ */ React.createElement(ListItem, {
      button: true,
      key: "Help"
    }, /* @__PURE__ */ React.createElement(ListItemIcon, null, /* @__PURE__ */ React.createElement(Help, null)), /* @__PURE__ */ React.createElement(ListItemText, null, "Show Help"))));
  }
}
export default withStyles(useStyles)(MyDrawer);
