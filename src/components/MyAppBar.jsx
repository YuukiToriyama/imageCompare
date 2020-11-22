/* MyAppBar.jsx */

import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// 自作モジュールの読み込み
import ScrollDialog from "./ScrollDialog";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	}
}));

const message = `
imageCompare 0.9
https://github.com/YUUKIToriyama/imageCompare
(C)Copyright 2020 YUUKIToriyama All Rights Reserved.
`.split("\n").map(line => <span>{line}<br/></span>);

const MyAppBar = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
						<MenuIcon/>
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						imageCompare
					</Typography>
					<ScrollDialog
						label="Help"
						title="About this app"
						content={message}
					/>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default MyAppBar;