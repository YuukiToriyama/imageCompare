import React from "../../_snowpack/pkg/react.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
import Button from "../../_snowpack/pkg/@material-ui/core/Button.js";
const ButtonWithIcon = (props) => {
  return /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    startIcon: props.icon,
    component: "span",
    color: props.color
  }, props.title);
};
export default ButtonWithIcon;
ButtonWithIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired
};
ButtonWithIcon.defaltProps = {
  color: "default"
};
