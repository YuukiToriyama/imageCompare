/* ImageLoader.jsx */

import React from 'react';
import PropTypes from 'prop-types';

import {
	Box,
	Paper,
	TableContainer,
	Table,
	TableHead,
	TableRow,
	TableCell,
	TableBody
} from '@material-ui/core';
import ReactImageBase64 from "react-image-base64";

const ImageLoader = (props) => {
	const [images, setImages] = React.useState({ data: [] });

	const fileInputCallback = React.useCallback((file) => {
		let img = new Image();
		img.src = file.ofileData;
		// Base64でよみこんだデータからImageオブジェクトを作成し
		// 縦横のサイズを取得する。
		img.onload = () => {
			file['ofileWidth'] = img.width;
			file['ofileHeight'] = img.height;
			// 画像プレビューのためにstateに保存
			let filelist = images.data;
			filelist.push(file);
			setImages({
				data: filelist
			});
			// 読み込んだ画像を親コンポーネントのstateに登録
			if (images.data.length >= 2) {
				props.onInputImageChange(images.data.slice(0, 2));
			}
		};
		/* fileには次のようなオブジェクトが入ります
		console.log(file)
		{
			fileData: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgIC...",
			fileName: "IMG_0419.JPG",
			fileSize: 5152,
			fileType: "image/jpeg",
			ofileData: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgIC...",
			ofileSize: 3618725,
			ofileWidth: 3456,
			ofileHeight: 4608, 
			result: true
		}
		*/
	});
	return (
		<Box>
			<ReactImageBase64
				thumbnail_size={100}
				drop={true}
				dropText="ファイルをdrug&dropしてください"
				multiple={true}
				handleChange={(data) => {
					fileInputCallback(data);
				}}
			/>
			<TableContainer component={Paper}>
				<Table stickyHeader size="small">
					<TableHead>
						<TableRow>
							<TableCell>ファイル名</TableCell>
							<TableCell>画像</TableCell>
							<TableCell>縦(px)</TableCell>
							<TableCell>横(px)</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{images.data.map((image, index) => (
						<TableRow key={index}>
							<TableCell>{image.fileName}</TableCell>
							<TableCell><img src={image.fileData} /></TableCell>
							<TableCell>{image.ofileWidth}</TableCell>
							<TableCell>{image.ofileHeight}</TableCell>
						</TableRow>
					))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
}
export default ImageLoader;

ImageLoader.propTypes = {
	onInputImageChange: PropTypes.func.isRequired,
};