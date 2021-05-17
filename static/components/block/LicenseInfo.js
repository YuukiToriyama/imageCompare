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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9ibG9jay9MaWNlbnNlSW5mby5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQSxNQUFNLGNBQWMsTUFBTTtBQUN6QixTQUNDLG9DQUFDLE1BQUQsTUFDRSxPQUFPLEtBQUssVUFBVSxJQUFJLENBQUMsZ0JBQWdCO0FBQzNDLFdBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0Msb0NBQUMsVUFBRDtBQUFBLE1BQVUsWUFBVztBQUFBLE9BQ3BCLG9DQUFDLGNBQUQ7QUFBQSxNQUNDLFNBQVM7QUFBQSxNQUNULFdBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0UsU0FBUyxhQUFhLGdCQUFnQixTQUN0QyxvQ0FBQyxZQUFEO0FBQUEsUUFDQyxXQUFVO0FBQUEsUUFDVixTQUFRO0FBQUEsUUFDUixPQUFNO0FBQUEsU0FDTixPQUNJLFNBQVMsYUFBYSxnQkFFekIsSUFDRixTQUFTLGFBQWE7QUFBQSxTQUszQixvQ0FBQyxTQUFEO0FBQUEsTUFBUyxTQUFRO0FBQUEsTUFBUSxXQUFVO0FBQUE7QUFBQTtBQUFBO0FBUXpDLGVBQWU7IiwKICAibmFtZXMiOiBbXQp9Cg==
