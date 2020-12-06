/* ImageLoader.jsx */

import React from 'react';
import PropTypes from 'prop-types';

import { Box, IconButton } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';
import FileInputComponent from 'react-file-input-previews-base64';

class ImageLoader extends React.Component {
	fileInputCallback = (file) => {
		let imageObject = file;
		let img = new Image();
		img.src = imageObject.base64;
		img.onload = () => {
			imageObject['width'] = img.width;
			imageObject['height'] = img.height;
			// 親コンポーネントに読み込んだ画像を登録
			this.props.onInputImageChange(imageObject);
		};
		/* imageObjectには以下のようなオブジェクトが入ります
		{
			name: 'IMG_20160813_102226.jpg',
			type: 'image/jpeg',
			size: 645,
			base64: 'data:image/jpeg;base64,/9j/4SzyRXhpZgAATU0AKgA...',
			file: File,
			width: 320,
			height: 260
		};
		*/
	};

	render() {
		return (
			<Box>
				<FileInputComponent
					labelText={this.props.loaderId + 1 + '枚目'}
					imagePreview={true}
					multiple={false}
					callbackFunction={(file) => {
						console.log(file.name + ' has been loaded.');
						this.fileInputCallback(file);
					}}
					buttonComponent={
						<IconButton color='primary' aria-label='upload picture' component='span'>
							<PhotoCamera />
						</IconButton>
					}
					textFieldComponent={<input type='text' />}
					accept='image/*'
				/>
			</Box>
		);
	}
}
export default ImageLoader;

ImageLoader.propTypes = {
	loaderId: PropTypes.number.isRequired,
	onInputImageChange: PropTypes.func.isRequired,
};
