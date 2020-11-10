/* App.jsx */
import React from "react";
import {
	createMuiTheme,
	ThemeProvider
} from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import orange from "@material-ui/core/colors/orange";

// 自作モジュールの読み込み
import MyAppBar from "./MyAppBar.jsx";
import MainContent from "./MainContent.jsx";


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

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MyAppBar />
			<MainContent />
		</ThemeProvider>
	);
}

export default App;
