import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "../../../_snowpack/pkg/@material-ui/core.js";
const ScrollDialog = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const refDescriptionElement = React.useRef(null);
  const handleClick = {
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  };
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClick.open
  }, props.label), /* @__PURE__ */ React.createElement(Dialog, {
    open: isOpen,
    onClose: handleClick.close,
    scroll: "paper",
    "aria-labelledby": "scroll-dialog-title",
    "aria-describedby": "scroll-dialog-description",
    "aria-label": "scroll-dialog"
  }, /* @__PURE__ */ React.createElement(DialogTitle, {
    id: "scroll-dialog-title"
  }, props.title), /* @__PURE__ */ React.createElement(DialogContent, {
    dividers: true
  }, props.content != void 0 ? props.content : /* @__PURE__ */ React.createElement(DialogContentText, {
    id: "scroll-dialog-description",
    ref: refDescriptionElement,
    tabIndex: -1
  }, props.contentText)), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
    onClick: handleClick.close,
    color: "primary"
  }, "OK"))));
};
export default ScrollDialog;
ScrollDialog.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9hdG9tcy9TY3JvbGxEaWFsb2cuanN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTQSxNQUFNLGVBQWUsQ0FBQyxVQUFVO0FBQy9CLFFBQU0sQ0FBQyxRQUFRLGFBQWEsTUFBTSxTQUFTO0FBQzNDLFFBQU0sd0JBQXdCLE1BQU0sT0FBTztBQUUzQyxRQUFNLGNBQWM7QUFBQSxJQUNuQixNQUFNLE1BQU0sVUFBVTtBQUFBLElBQ3RCLE9BQU8sTUFBTSxVQUFVO0FBQUE7QUFHeEIsU0FDQyxvQ0FBQyxPQUFELE1BQ0Msb0NBQUMsUUFBRDtBQUFBLElBQVEsU0FBUyxZQUFZO0FBQUEsS0FBTyxNQUFNLFFBQzFDLG9DQUFDLFFBQUQ7QUFBQSxJQUNDLE1BQU07QUFBQSxJQUNOLFNBQVMsWUFBWTtBQUFBLElBQ3JCLFFBQU87QUFBQSxJQUNQLG1CQUFnQjtBQUFBLElBQ2hCLG9CQUFpQjtBQUFBLElBQ2pCLGNBQVc7QUFBQSxLQUVYLG9DQUFDLGFBQUQ7QUFBQSxJQUFhLElBQUc7QUFBQSxLQUF1QixNQUFNLFFBQzdDLG9DQUFDLGVBQUQ7QUFBQSxJQUFlLFVBQVU7QUFBQSxLQUN0QixNQUFNLFdBQVcsU0FBYSxNQUFNLFVBQ3JDLG9DQUFDLG1CQUFEO0FBQUEsSUFDQyxJQUFHO0FBQUEsSUFDSCxLQUFLO0FBQUEsSUFDTCxVQUFVO0FBQUEsS0FFVCxNQUFNLGVBSVYsb0NBQUMsZUFBRCxNQUNDLG9DQUFDLFFBQUQ7QUFBQSxJQUFRLFNBQVMsWUFBWTtBQUFBLElBQU8sT0FBTTtBQUFBLEtBQVU7QUFBQTtBQVF6RCxlQUFlO0FBRWYsYUFBYSxZQUFZO0FBQUEsRUFDeEIsT0FBTyxVQUFVO0FBQUEsRUFDakIsT0FBTyxVQUFVO0FBQUEsRUFDakIsU0FBUyxVQUFVO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
