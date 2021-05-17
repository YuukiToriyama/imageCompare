import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import Button from "../../../_snowpack/pkg/@material-ui/core/Button.js";
const ButtonWithIcon = (props) => {
  return /* @__PURE__ */ React.createElement(Button, {
    variant: "contained",
    startIcon: props.icon,
    component: "span",
    color: props.color,
    onClick: props.onClick
  }, props.title);
};
export default ButtonWithIcon;
ButtonWithIcon.propTypes = {
  icon: PropTypes.element.isRequired,
  color: PropTypes.string,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func
};
ButtonWithIcon.defaltProps = {
  color: "default"
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9hdG9tcy9CdXR0b25XaXRoSWNvbi5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFFQSxNQUFNLGlCQUFpQixDQUFDLFVBQVU7QUFDakMsU0FDQyxvQ0FBQyxRQUFEO0FBQUEsSUFDQyxTQUFRO0FBQUEsSUFDUixXQUFXLE1BQU07QUFBQSxJQUNqQixXQUFVO0FBQUEsSUFDVixPQUFPLE1BQU07QUFBQSxJQUNiLFNBQVMsTUFBTTtBQUFBLEtBRWQsTUFBTTtBQUFBO0FBS1YsZUFBZTtBQUVmLGVBQWUsWUFBWTtBQUFBLEVBQzFCLE1BQU0sVUFBVSxRQUFRO0FBQUEsRUFDeEIsT0FBTyxVQUFVO0FBQUEsRUFDakIsT0FBTyxVQUFVLE9BQU87QUFBQSxFQUN4QixTQUFTLFVBQVU7QUFBQTtBQUVwQixlQUFlLGNBQWM7QUFBQSxFQUM1QixPQUFPO0FBQUE7IiwKICAibmFtZXMiOiBbXQp9Cg==
