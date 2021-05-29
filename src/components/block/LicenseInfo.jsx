/* LicenseInfo.jsx */

import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	Typography,
	Divider
} from "@material-ui/core";

import licenses from "../../licenses.json";

const LicenseInfo = () => {
	return (
		<List>
			{licenses.map((license) => {
				const abstract = license["name"] + "@" + license["installedVersion"];
				return (
					<React.Fragment>
						<ListItem alignItems="flex-start">
							<ListItemText
								primary={abstract}
								secondary={
									<React.Fragment>
										<Typography component="p" variant="body2" color="textPrimary">{license["licenseType"] + " by " + license["author"]}</Typography>
										<Typography component="p" variant="body2" color="textSecondary">{license["link"]}</Typography>
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