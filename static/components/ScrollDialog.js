import React from "../../_snowpack/pkg/react.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "../../_snowpack/pkg/@material-ui/core.js";
class ScrollDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.descriptionElement = React.createRef();
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    });
  };
  handleClose = () => {
    this.setState({
      open: false
    });
  };
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Button, {
      onClick: this.handleClickOpen
    }, this.props.label), /* @__PURE__ */ React.createElement(Dialog, {
      open: this.state.open,
      onClose: this.handleClose,
      scroll: "paper",
      "aria-labelledby": "scroll-dialog-title",
      "aria-describedby": "scroll-dialog-description"
    }, /* @__PURE__ */ React.createElement(DialogTitle, {
      id: "scroll-dialog-title"
    }, this.props.title), /* @__PURE__ */ React.createElement(DialogContent, {
      dividers: true
    }, this.props.content != void 0 ? this.props.content : /* @__PURE__ */ React.createElement(DialogContentText, {
      id: "scroll-dialog-description",
      ref: this.descriptionElement,
      tabIndex: -1
    }, this.props.contentText)), /* @__PURE__ */ React.createElement(DialogActions, null, /* @__PURE__ */ React.createElement(Button, {
      onClick: this.handleClose,
      color: "primary"
    }, "OK"))));
  }
}
export default ScrollDialog;
ScrollDialog.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.any
};
