import React from "../../../_snowpack/pkg/react.js";
import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Divider
} from "../../../_snowpack/pkg/@material-ui/core.js";
import licenses from "../../licenses.json.proxy.js";
const LicenseInfo = () => {
  return /* @__PURE__ */ React.createElement(List, null, Object.keys(licenses).map((packageName) => {
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItem, {
      alignItems: "flex-start"
    }, /* @__PURE__ */ React.createElement(ListItemText, {
      primary: packageName,
      secondary: /* @__PURE__ */ React.createElement(React.Fragment, null, licenses[packageName]["publisher"] != void 0 ? /* @__PURE__ */ React.createElement(Typography, {
        component: "p",
        variant: "body2",
        color: "textPrimary"
      }, "by ", licenses[packageName]["publisher"]) : "", licenses[packageName]["licenseText"])
    })), /* @__PURE__ */ React.createElement(Divider, {
      variant: "inset",
      component: "li"
    }));
  }));
};
export default LicenseInfo;
