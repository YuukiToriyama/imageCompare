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
import DisplayImage from "./DisplayImage.jsx";

class ImageLoader extends React.Component {
	state = {
		imageSrc: ""
	}

	handleChangeFile = (event) => {
		let files = event.target.files;
		let imageURL = "";
		if (files.length != 0) {
			imageURL = URL.createObjectURL(files[0]);
		};
		this.props.onInputImageChange(imageURL);
		this.setState({
			imageSrc: imageURL
		});
		
	}

	deletePhoto = (event) => {
		this.setState({
			imageSrc: ""
		});
	}

	render() {
		return (
			<Box>
				<input accept="image/*" id="upload-photo" type="file" style={{display: "none"}} onChange={this.handleChangeFile}/>
				<label htmlFor="upload-photo">
					<ButtonWithIcon icon={<PhotoCamera />} title="アップロード" />
				</label>
				<ButtonWithIcon icon={<DeleteForever />} title="削除" onClick={this.deletePhoto} />
				<DisplayImage imageURL={this.state.imageSrc} width="100"/>
			</Box>
		);
	}
}
export default ImageLoader;