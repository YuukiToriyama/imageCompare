/* MyDrawer.jsx */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';

import {
	Link,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	IconButton,
} from '@material-ui/core';
import { ChevronLeft, Help, GitHub, Info } from '@material-ui/icons';

const drawerWidth = 240;

const useStyles = (theme) => ({
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: theme.spacing(0, 1),
		// necessary for content to be below app bar
		...theme.mixins.toolbar,
		justifyContent: 'flex-end',
	},
});
class MyDrawer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			open: false,
		};
		//classes = this.props;
		this.handleDrawerClose.bind(this);
		this.handleDrawerOpen.bind(this);
	}

	handleDrawerOpen = () => {
		this.setState({
			open: true,
		});
	};
	handleDrawerClose = () => {
		this.setState({
			open: false,
		});
	};
	render() {
		const { classes } = this.props;
		return (
			<Drawer
				className={classes.drawer}
				variant='persistent'
				anchor='left'
				open={this.state.open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.handleDrawerClose}>
						<ChevronLeft />
					</IconButton>
				</div>
				<Divider />
				<List>
					<Link href='https://github.com/YUUKIToriyama/imageCompare'>
						<ListItem button key='Github'>
							<ListItemIcon>
								<GitHub />
							</ListItemIcon>
							<ListItemText>View Source Code</ListItemText>
						</ListItem>
					</Link>
					<ListItem button key='Information'>
						<ListItemIcon>
							<Info />
						</ListItemIcon>
						<ListItemText>More information</ListItemText>
					</ListItem>
					<ListItem button key='Help'>
						<ListItemIcon>
							<Help />
						</ListItemIcon>
						<ListItemText>Show Help</ListItemText>
					</ListItem>
				</List>
			</Drawer>
		);
	}
}

export default withStyles(useStyles)(MyDrawer);
