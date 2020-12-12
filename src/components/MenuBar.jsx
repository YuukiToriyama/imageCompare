/* MenuBar.jsx */

import React from "react";
import PropTypes from "prop-types";

import withStyles from "@material-ui/core/styles/withStyles";
import {
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	CircularProgress,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

// 自作モジュールの読み込み
import MyDrawer from "./MyDrawer";
import ScrollDialog from "./ScrollDialog";

const useStyles = (theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
});

class MenuBar extends React.Component {
	constructor(props) {
		super(props);
		this.drawerRef = React.createRef();
	}

	handleDrawerOpen = () => {
		this.drawerRef.current.handleDrawerOpen();
	};

	render() {
		const { classes } = this.props;
		return (
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
							onClick={this.handleDrawerOpen}
						>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" className={classes.title}>
							{this.props.title}
						</Typography>
						{!this.props.isOpencvLoaded ? (
							<CircularProgress color="inherit" />
						) : (
							<ScrollDialog
								label="About OpenCV.js"
								title="Build information"
								content={cv
									.getBuildInformation()
									.split("\n")
									.map((line, key) => (
										<span key={key}>
											{line}
											<br />
										</span>
									))}
							/>
						)}
						<ScrollDialog
							label="Help"
							title="About this app"
							content={this.props.message}
						/>
					</Toolbar>
				</AppBar>
				<MyDrawer ref={this.drawerRef} />
			</div>
		);
	}
}

export default withStyles(useStyles)(MenuBar);

MenuBar.propTypes = {
	message: PropTypes.string,
	title: PropTypes.string.isRequired,
};
