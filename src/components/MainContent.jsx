/* MainContent.jsx */
import React from 'react';

// 自作モジュールの読み込み
import Workflow from './Workflow';
//import opencvUtils from '../opencv-utils/opencv-utils.js';
import LoadingSpinner from './LoadingSpinner';

class MainContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			opencvLoaded: false,
		};
	}
	/*
	// Appコンポーネントが呼び出されたら次はOpenCV.jsの読み込みを行なう
	componentDidMount() {
		const opencv_utils = new opencvUtils();
		opencv_utils.loadOpenCV('https://docs.opencv.org/4.5.0/opencv.js', () => {
			// OpenCV.jsの読み込みが完了したらstate.loadingをfalseにする
			this.setState({
				opencvLoaded: true,
			});
		});
	}
	*/

	render() {
		return (
			<div>
				<LoadingSpinner opencvLoaded={this.state.opencvLoaded} />
				<Workflow />
			</div>
		);
	}
}

export default MainContent;
