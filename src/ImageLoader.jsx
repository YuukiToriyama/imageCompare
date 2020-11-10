/* ImageLoader.jsx */

import React from "react";
import {
	Box
} from "@material-ui/core";
import {
	PhotoCamera,
	DeleteForever
} from "@material-ui/icons";


// 自作モジュールの読み込み
import ButtonWithIcon from "./ButtonWithIcon.jsx";


const ImageLoader = () => {
	const [imageSrc, setImageSrc] = React.useState("");

	const handleChangeFile = (event) => {
		let files = event.target.files;
		let imageURL = "";
		if (files.length != 0) {
			imageURL = URL.createObjectURL(files[0]);
		}
		setImageSrc(imageURL);
	};

	const deletePhoto = () => {
		setImageSrc("");
	}

	return (
		<Box>
			<input accept="image/*" id="upload-photo" type="file" style={{display: "none"}} onChange={handleChangeFile}/>
			<label htmlFor="upload-photo">
				<ButtonWithIcon icon={<PhotoCamera />} title="アップロード" />
			</label>
			<ButtonWithIcon icon={<DeleteForever />} title="削除" onChange={handle}/>
			<img src={imageSrc} />
		</Box>
	);
}

export default ImageLoader;
