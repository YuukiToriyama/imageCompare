/* App.jsx */
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from "@material-ui/core/colors/orange";
//aaa

// 自作モジュールの読み込み
import MenuBar from "./components/MenuBar";
import Workflow from "./components/Workflow";

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
			"(C)Copyright 2020 YUUKIToriyama All Rights Reserved.",
		].join("\n");
		this.OPEN_CV_URL = "https://docs.opencv.org/4.5.0/opencv.js";
	}

	// Appコンポーネントが呼び出されたら次はOpenCV.jsの読み込みを行なう
	componentDidMount() {
		let script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.addEventListener("load", () => {
			if (cv.getBuildInformation) {
				console.log(cv.getBuildInformation());
				// 読み込みが完了したらstate.isOpencvLoadedを変更する
				this.setState({
					isOpencvLoaded: true,
				});
			} else {
				cv["onRuntimeInitialized"] = () => {
					console.log(cv.getBuildInformation());
					// 読み込みが完了したらstate.isOpencvLoadedを変更する
					this.setState({
						isOpencvLoaded: true,
					});
				};
			}
		});
		script.addEventListener("error", () => {
			console.error("Failed to load " + this.OPEN_CV_URL);
		});
		script.src = this.OPEN_CV_URL;
		let node = document.querySelector("head");
		node.appendChild(script);
		/*;
		const opencv_utils = new opencvUtils();
		opencv_utils.loadOpenCV('https://docs.opencv.org/4.5.0/opencv.js', () => {
			// OpenCV.jsの読み込みが完了したらstate.loadingをfalseにする
			this.setState({
				isOpencvLoaded: true,
			});
		});
		*/
	}

	render() {
		return (
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<MenuBar
					title={this.APP_NAME}
					message={this.APP_INFO}
					isOpencvLoaded={this.state.isOpencvLoaded}
				/>
				<Workflow />
			</ThemeProvider>
		);
	}
}

export default App;
