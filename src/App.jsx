/* App.jsx */
import React from "react";
import {
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from "@material-ui/core/colors/orange";

// 自作モジュールの読み込み
import opencvUtils from "./opencv-utils/opencv-utils.js";
import MyAppBar from "./components/MyAppBar.jsx";
import MainContent from "./components/MainContent.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";


const theme = createMuiTheme({
	palette: {
		primary: orange
	},
	typography: {
		fontFamily: [
			"Roboto",
			"Noto Sans"
		].join(","),
		fontSize: 13,
		h1: {
			fontSize: "1.75rem"
		},
		h2: {
			fontSize: "1.5rem"
		},
		h3: {
			fontSize: "1.25rem"
		},
		h4: {
			fontSize: "1.125rem"
		},
		h5: {
			fontSize: "1rem"
		},
		h6: {
			fontSize: "1rem"
		}
	}
});

const message = `
imageCompare 0.9
https://github.com/YUUKIToriyama/imageCompare
(C)Copyright 2020 YUUKIToriyama All Rights Reserved.
`;


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true,
		}
	}

	// Appコンポーネントが呼び出されたら次はOpenCV.jsの読み込みを行なう
	componentDidMount() {
		const opencv_utils = new opencvUtils();
		opencv_utils.loadOpenCV("https://docs.opencv.org/4.5.0/opencv.js", () => {
		//opencv_utils.loadOpenCV("./opencv.js", () => {
			//opencv_utils.executeScript("./process.js");
			// OpenCV.jsの読み込みが完了したらstate.loadingをfalseにする
			this.setState({
				loading: false
			});
		});
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MyAppBar message={message}/>
				<LoadingSpinner loading={this.state.loading} />
				<MainContent />
			</ThemeProvider>
		);
	}
}

export default App;
