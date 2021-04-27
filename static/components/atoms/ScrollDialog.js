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
  const handleClick = () => {
    const open = () => setIsOpen(true);
    const close = () => setIsOpen(false);
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
