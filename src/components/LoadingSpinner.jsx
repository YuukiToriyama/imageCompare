/* LoadingSpinner.jsx */
/*
 * OpenCV.jsの読み込みに時間がかかるので読み込んでいるあいだスピナーを表示します
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

import { Box, Typography, CircularProgress, Icon } from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';

// 自作モジュールの読み込み
import ScrollDialog from './ScrollDialog';

class LoadingSpinner extends React.Component {
	render() {
		return (
			<Box>
				{!this.props.opencvLoaded ? (
					<CircularProgress />
				) : (
					<Icon color='primary' fontSize='large'>
						<DoneIcon />
					</Icon>
				)}
				<Typography>{!this.props.opencvLoaded ? 'Now Loading OpenCV.js...' : 'OpenCV.js has been loaded on your browser!'}</Typography>
				{this.props.opencvLoaded == true && (
					<ScrollDialog
						label='About OpenCV.js'
						title='Build information'
						content={cv
							.getBuildInformation()
							.split('\n')
							.map((line, key) => (
								<span key={key}>
									{line}
									<br />
								</span>
							))}
					/>
				)}
			</Box>
		);
	}
}
export default LoadingSpinner;

LoadingSpinner.propsTypes = {
	opencvLoaded: PropTypes.bool.isRequired,
};
LoadingSpinner.defaultProps = {
	opencvLoaded: false,
};
