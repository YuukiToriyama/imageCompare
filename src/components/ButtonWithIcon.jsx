/* ButtonWithIcon.jsx */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';

const ButtonWithIcon = (props) => {
	return (
		<Button
			variant='contained'
			startIcon={props.icon}
			component='span'
			color={props.color}
		>
			{props.title}
		</Button>
	);
};

export default ButtonWithIcon;

ButtonWithIcon.propTypes = {
	icon: PropTypes.element.isRequired,
	color: PropTypes.string,
	title: PropTypes.string.isRequired,
};
ButtonWithIcon.defaltProps = {
	color: 'default',
};
