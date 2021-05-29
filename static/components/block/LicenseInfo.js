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
  return /* @__PURE__ */ React.createElement(List, null, licenses.map((license) => {
    const abstract = license["name"] + "@" + license["installedVersion"];
    return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ListItem, {
      alignItems: "flex-start"
    }, /* @__PURE__ */ React.createElement(ListItemText, {
      primary: abstract,
      secondary: /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(Typography, {
        component: "p",
        variant: "body2",
        color: "textPrimary"
      }, license["licenseType"] + " by " + license["author"]), /* @__PURE__ */ React.createElement(Typography, {
        component: "p",
        variant: "body2",
        color: "textSecondary"
      }, license["link"]))
    })), /* @__PURE__ */ React.createElement(Divider, {
      variant: "inset",
      component: "li"
    }));
  }));
};
export default LicenseInfo;
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9ibG9jay9MaWNlbnNlSW5mby5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUUE7QUFFQSxNQUFNLGNBQWMsTUFBTTtBQUN6QixTQUNDLG9DQUFDLE1BQUQsTUFDRSxTQUFTLElBQUksQ0FBQyxZQUFZO0FBQzFCLFVBQU0sV0FBVyxRQUFRLFVBQVUsTUFBTSxRQUFRO0FBQ2pELFdBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0Msb0NBQUMsVUFBRDtBQUFBLE1BQVUsWUFBVztBQUFBLE9BQ3BCLG9DQUFDLGNBQUQ7QUFBQSxNQUNDLFNBQVM7QUFBQSxNQUNULFdBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0Msb0NBQUMsWUFBRDtBQUFBLFFBQVksV0FBVTtBQUFBLFFBQUksU0FBUTtBQUFBLFFBQVEsT0FBTTtBQUFBLFNBQWUsUUFBUSxpQkFBaUIsU0FBUyxRQUFRLFlBQ3pHLG9DQUFDLFlBQUQ7QUFBQSxRQUFZLFdBQVU7QUFBQSxRQUFJLFNBQVE7QUFBQSxRQUFRLE9BQU07QUFBQSxTQUFpQixRQUFRO0FBQUEsU0FLN0Usb0NBQUMsU0FBRDtBQUFBLE1BQVMsU0FBUTtBQUFBLE1BQVEsV0FBVTtBQUFBO0FBQUE7QUFBQTtBQVF6QyxlQUFlOyIsCiAgIm5hbWVzIjogW10KfQo=
