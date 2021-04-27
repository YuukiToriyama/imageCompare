/* ScrollDialog.jsx */

import React from 'react';
import PropTypes from 'prop-types';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@material-ui/core';

const ScrollDialog = (props) => {
	const [isOpen, setIsOpen] = React.useState(false);
	const refDescriptionElement = React.useRef(null);

	const handleClick = () => {
		const open = () => setIsOpen(true);
		const close = () => setIsOpen(false);
	};

	return (
		<div>
			<Button onClick={handleClick.open}>{props.label}</Button>
			<Dialog
				open={isOpen}
				onClose={handleClick.close}
				scroll='paper'
				aria-labelledby='scroll-dialog-title'
				aria-describedby='scroll-dialog-description'
				aria-label="scroll-dialog"
			>
				<DialogTitle id='scroll-dialog-title'>{props.title}</DialogTitle>
				<DialogContent dividers={true}>
					{(props.content != undefined) ? props.content :
						<DialogContentText
							id='scroll-dialog-description'
							ref={refDescriptionElement}
							tabIndex={-1}
						>
							{props.contentText}
						</DialogContentText>
					}
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClick.close} color='primary'>
						OK
						</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};
export default ScrollDialog;

ScrollDialog.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.any,
};
