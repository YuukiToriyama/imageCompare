/* DisplayImage.jsx */

import React from "react";
import {
	Card,
	CardMedia
} from "@material-ui/core";

const DisplayImage = (props) => {
	return (
		<Card style={{width: 300}} >
			<CardMedia
				component="img"
				src={props.imageURL}
				title={props.title}
			/>
		</Card>
	);
};

export default DisplayImage;
