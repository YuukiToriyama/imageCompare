/* ImageLoader.jsx */

import React from "react";
import { Box, IconButton } from "@material-ui/core";
import { PhotoCamera, DeleteForever } from "@material-ui/icons";
import FileInputComponent from "react-file-input-previews-base64";

// 自作モジュールの読み込み
import PreviewImage from "./PreviewImage";

class ImageLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file: {},
		};
	}

	fileInputCallback = (file) => {
		let fileDetail = file;
		let img = new Image();
		img.src = fileDetail.base64;
		img.onload = () => {
			fileDetail["width"] = img.width;
			fileDetail["height"] = img.height;
			this.setState({
				file: fileDetail,
			});
			this.props.onInputImageChange(fileDetail);
		};
	};

	render() {
		return (
			<Box>
				<FileInputComponent
					labelText={this.props.loaderId + 1 + "枚目"}
					imagePreview={true}
					multiple={false}
					callbackFunction={(file) => {
						console.log(file.name);
						this.fileInputCallback(file, 1);
					}}
					buttonComponent={
						<IconButton
							color="primary"
							aria-label="upload picture"
							component="span"
						>
							<PhotoCamera />
						</IconButton>
					}
					textFieldComponent={<input type="text" />}
					accept="image/*"
				/>
				{/*
				// 読み込んだ画像のleafletでの表示は次のセクションにて
				{this.state.file.name !== undefined ? (
					<PreviewImage image={this.state.file} />
				) : (
					""
				)}
				*/}
			</Box>
		);
	}
}
export default ImageLoader;
