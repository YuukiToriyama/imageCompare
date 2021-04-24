/* App.jsx */
import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import * as colors from "@material-ui/core/colors";
import { OpenCvProvider } from "opencv-react";

// 自作モジュールの読み込み
import MenuBar from "./components/block/MenuBar";
import Workflow from "./components/modules/Workflow";

// Dark mode / Light mode切り替え
import ButtonWithIcon from "./components/atoms/ButtonWithIcon";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Brightness4Icon from "@material-ui/icons/Brightness4";

const useDarkMode = () => {
	const [darkMode, setDarkMode] = React.useState(
		localStorage.getItem("darkMode") === "on" ? true : false
	);
	const handleDarkModeOn = () => {
		localStorage.setItem("darkMode", "on");
		setDarkMode(true);
	};
	const handleDarkModeOff = () => {
		localStorage.setItem("darkMode", "off");
		setDarkMode(false);
	};
	return {
		darkMode,
		handleDarkModeOn,
		handleDarkModeOff
	}
}

const App = () => {
	const [isOpencvLoaded, setIsOpencvLoaded] = React.useState(false);
	const APP_INFO = {
		"NAME": "imageCompare",
		"VERSION": "0.9",
		"COPYRIGHT": "(C)Copyright 2020-2021 YUUKIToriyama All Rights Reserved.",
		"GITHUB": "https://github.com/YUUKIToriyama/imageCompare"
	}
	const OPENCV_URL = "https://docs.opencv.org/4.5.0/opencv.js";

	const { darkMode, handleDarkModeOn, handleDarkModeOff } = useDarkMode();
	const theme = createMuiTheme({
		palette: {
			primary: {
				main: colors.orange[500]
			},
			type: darkMode ? "dark" : "light"
		},
		typography: {
			fontFamily: ["Roboto", "Noto Sans"].join(",")
		}
	});


	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<OpenCvProvider openCvPath={OPENCV_URL} onLoad={() => {
				setIsOpencvLoaded(() => true);
				console.log(cv.getBuildInformation());
			}}>
				<MenuBar
					title={APP_INFO.NAME}
					message={APP_INFO.COPYRIGHT}
					isOpencvLoaded={isOpencvLoaded}
				/>
				{
					darkMode ? <ButtonWithIcon onClick={handleDarkModeOff} icon={<Brightness7Icon />} title="Light mode" /> : <ButtonWithIcon onClick={handleDarkModeOn} icon={<Brightness4Icon />} title="Dark mode" />
				}
				<Workflow />
			</OpenCvProvider>
		</ThemeProvider>
	);
}

export default App;
