/* App.jsx */
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from "@material-ui/core/colors/orange";
import { OpenCvProvider } from "opencv-react";

// 自作モジュールの読み込み
import MenuBar from "./components/block/MenuBar";
import Workflow from "./components/modules/Workflow";

const theme = createMuiTheme({
	palette: {
		primary: orange,
	},
	typography: {
		fontFamily: ["Roboto", "Noto Sans"].join(","),
		fontSize: 13,
		h1: {
			fontSize: "1.75rem",
		},
		h2: {
			fontSize: "1.5rem",
		},
		h3: {
			fontSize: "1.25rem",
		},
		h4: {
			fontSize: "1.125rem",
		},
		h5: {
			fontSize: "1rem",
		},
		h6: {
			fontSize: "1rem",
		},
	},
});

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpencvLoaded: false,
		};
		this.APP_NAME = "imageCompare";
		this.APP_INFO = [
			"imageCompare 0.9",
			"https://github.com/YUUKIToriyama/imageCompare",
			"(C)Copyright 2020-2021 YUUKIToriyama All Rights Reserved.",
		].join("\n");
		this.OPEN_CV_URL = "https://docs.opencv.org/4.5.0/opencv.js";
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<OpenCvProvider openCvPath={this.OPEN_CV_URL} onLoad={() => {
					this.setState({
						isOpencvLoaded: true
					});
					console.log(cv.getBuildInformation());
				}}>
					<MenuBar
						title={this.APP_NAME}
						message={this.APP_INFO}
						isOpencvLoaded={this.state.isOpencvLoaded}
					/>
					<Workflow />
				</OpenCvProvider>
			</ThemeProvider>
		);
	}
}

export default App;
