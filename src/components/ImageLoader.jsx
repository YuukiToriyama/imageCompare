/* ImageLoader.jsx */

import React from "react";
import {
	Box,
	IconButton
} from "@material-ui/core";
import {
	PhotoCamera,
	DeleteForever
} from "@material-ui/icons";
import FileInputComponent from 'react-file-input-previews-base64';


// 自作モジュールの読み込み
import PreviewImageOnLeaflet from "./PreviewImageOnLeaflet";

class ImageLoader extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			file1: {hoge: "hage"},
			file2: {}
		}
	}

	render() {
		return (
			<Box>
				<FileInputComponent
					labelText="1枚め"
					imagePreview={false}
					multiple={false}
					callbackFunction={(file) => {
						console.log(file.name);
						this.setState({
							file1: file
						});
					}}
					buttonComponent={
						<IconButton color="primary" aria-label="upload picture" component="span"><PhotoCamera /></IconButton>
					}
					textFieldComponent={<input type="text"/>}
					accept='image/*'
				/>
				{this.state.file1.name !== undefined ? <PreviewImageOnLeaflet image={this.state.file1} /> : ""}
			</Box>
		);
	}
}
export default ImageLoader;
