/* LoadingSpinner.jsx */
/*
 * OpenCV.jsの読み込みに時間がかかるので読み込んでいるあいだスピナーを表示します
 *
 */

import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Icon from '@material-ui/core/Icon';
import DoneIcon from '@material-ui/icons/Done';

// 自作モジュールの読み込み
import ScrollDialog from "./ScrollDialog";

class LoadingSpinner extends React.Component {
	render() {
		return(
			<Box>
				{this.props.loading ? <CircularProgress /> : <Icon color="primary" fontSize="large"><DoneIcon/></Icon>}
				<Typography>
					{this.props.loading ? "Now Loading OpenCV.js..." : "OpenCV.js has been loaded on your browser!"}
				</Typography>
				{this.props.loading ? "" : <ScrollDialog label="About OpenCV.js" title="Build information" content={cv.getBuildInformation().split("\n").map((line) => <span>{line}<br /></span>)} />}
			</Box>
		)
	}
}

export default LoadingSpinner;
