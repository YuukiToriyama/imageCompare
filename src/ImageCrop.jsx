/* ImageCrop.jsx */

import React from "react";

const ImageCrop = () => {
	const canvasElement = React.useRef(null);

	const loadImage = (imageURL) => {
		let img = new Image();
		img.src = imageURL;
		img.onload = () => {
			let src = cv.imread(img, cv.IMREAD_COLOR);
			//working = src.clone();
			cv.imshow(canvasElement, src);
		}
		src.delete();
	}

	return (
		<canvas
			ref={canvasElement}
			width="500px"
			height="300px"
		></canvas>
	);
};

export default ImageCrop;
