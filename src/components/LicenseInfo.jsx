/* LicenseInfo.jsx */

import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider
} from "@material-ui/core";

import licenses from "../licenses.json";

const LicenseInfo = () => {
	return (
		<List>
			{Object.keys(licenses).map((packageName) => {
				return (
					<React.Fragment>
						<ListItem alignItems="flex-start">
							<ListItemText
								primary={packageName}
								secondary={
									<React.Fragment>
										{licenses[packageName]["publisher"] != undefined ?
											<Typography
												component="p"
												variant="body2"
												color="textPrimary"
											>
												by {licenses[packageName]["publisher"]}
											</Typography>
											: ""}
										{licenses[packageName]["licenseText"]}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
					</React.Fragment>
				)
			})}
		</List>
	)
}

export default LicenseInfo;