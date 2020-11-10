/* ButtonWithIcon.jsx */

import React from "react";
import Button from "@material-ui/core/Button";

const ButtonWithIcon = (props) => {
	return (
		<Button
			variant="contained"
			startIcon={props.icon}
			component="span"
		>
			{props.title}
		</Button>
	);
};

export default ButtonWithIcon;
