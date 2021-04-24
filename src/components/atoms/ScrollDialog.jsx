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

class ScrollDialog extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		this.descriptionElement = React.createRef();
	}

	handleClickOpen = () => {
		this.setState({
			open: true,
		});
	};

	handleClose = () => {
		this.setState({
			open: false,
		});
	};

	render() {
		return (
			<div>
				<Button onClick={this.handleClickOpen}>{this.props.label}</Button>
				<Dialog
					open={this.state.open}
					onClose={this.handleClose}
					scroll='paper'
					aria-labelledby='scroll-dialog-title'
					aria-describedby='scroll-dialog-description'
				>
					<DialogTitle id='scroll-dialog-title'>{this.props.title}</DialogTitle>
					<DialogContent dividers={true}>
						{(this.props.content != undefined) ? this.props.content :
							<DialogContentText
								id='scroll-dialog-description'
								ref={this.descriptionElement}
								tabIndex={-1}
							>
								{this.props.contentText}
							</DialogContentText>
						}
					</DialogContent>
					<DialogActions>
						<Button onClick={this.handleClose} color='primary'>
							OK
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}
export default ScrollDialog;

ScrollDialog.propTypes = {
	label: PropTypes.string,
	title: PropTypes.string,
	content: PropTypes.any,
};
