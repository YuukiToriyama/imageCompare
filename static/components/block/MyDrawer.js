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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9ibG9jay9NeURyYXdlci5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTtBQUVBLE1BQU0sY0FBYztBQUVwQixNQUFNLFlBQVksQ0FBQyxVQUFXO0FBQUEsRUFDN0IsUUFBUTtBQUFBLElBQ1AsT0FBTztBQUFBLElBQ1AsWUFBWTtBQUFBO0FBQUEsRUFFYixhQUFhO0FBQUEsSUFDWixPQUFPO0FBQUE7QUFBQSxFQUVSLGNBQWM7QUFBQSxJQUNiLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFNBQVMsTUFBTSxRQUFRLEdBQUc7QUFBQSxPQUV2QixNQUFNLE9BQU87QUFBQSxJQUNoQixnQkFBZ0I7QUFBQTtBQUFBO0FBR2xCLHVCQUF1QixNQUFNLFVBQVU7QUFBQSxFQUN0QyxZQUFZLE9BQU87QUFDbEIsVUFBTTtBQUNOLFNBQUssUUFBUTtBQUFBLE1BQ1osTUFBTTtBQUFBO0FBR1AsU0FBSyxrQkFBa0IsS0FBSztBQUM1QixTQUFLLGlCQUFpQixLQUFLO0FBQUE7QUFBQSxFQUc1QixtQkFBbUIsTUFBTTtBQUN4QixTQUFLLFNBQVM7QUFBQSxNQUNiLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHUixvQkFBb0IsTUFBTTtBQUN6QixTQUFLLFNBQVM7QUFBQSxNQUNiLE1BQU07QUFBQTtBQUFBO0FBQUEsRUFHUixTQUFTO0FBQ1IsVUFBTSxDQUFFLFdBQVksS0FBSztBQUN6QixXQUNDLG9DQUFDLFFBQUQ7QUFBQSxNQUNDLFdBQVcsUUFBUTtBQUFBLE1BQ25CLFNBQVE7QUFBQSxNQUNSLFFBQU87QUFBQSxNQUNQLE1BQU0sS0FBSyxNQUFNO0FBQUEsTUFDakIsU0FBUztBQUFBLFFBQ1IsT0FBTyxRQUFRO0FBQUE7QUFBQSxPQUdoQixvQ0FBQyxPQUFEO0FBQUEsTUFBSyxXQUFXLFFBQVE7QUFBQSxPQUN2QixvQ0FBQyxZQUFEO0FBQUEsTUFBWSxTQUFTLEtBQUs7QUFBQSxPQUN6QixvQ0FBQyxhQUFELFNBR0Ysb0NBQUMsU0FBRCxPQUNBLG9DQUFDLE1BQUQsTUFDQyxvQ0FBQyxNQUFEO0FBQUEsTUFBTSxNQUFLO0FBQUEsT0FDVixvQ0FBQyxVQUFEO0FBQUEsTUFBVSxRQUFNO0FBQUEsTUFBQyxLQUFJO0FBQUEsT0FDcEIsb0NBQUMsY0FBRCxNQUNDLG9DQUFDLFFBQUQsUUFFRCxvQ0FBQyxjQUFELE1BQWMsdUJBR2hCLG9DQUFDLFVBQUQ7QUFBQSxNQUFVLFFBQU07QUFBQSxNQUFDLEtBQUk7QUFBQSxPQUNwQixvQ0FBQyxjQUFELE1BQ0Msb0NBQUMsTUFBRCxRQUVELG9DQUFDLGNBQUQsTUFBYyxzQkFFZixvQ0FBQyxVQUFEO0FBQUEsTUFBVSxRQUFNO0FBQUEsTUFBQyxLQUFJO0FBQUEsT0FDcEIsb0NBQUMsY0FBRCxNQUNDLG9DQUFDLE1BQUQsUUFFRCxvQ0FBQyxjQUFELE1BQWM7QUFBQTtBQUFBO0FBUXBCLGVBQWUsV0FBVyxXQUFXOyIsCiAgIm5hbWVzIjogW10KfQo=
