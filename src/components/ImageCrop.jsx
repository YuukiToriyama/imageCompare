/* ImageCrop.jsx */
// canvasを使って画像の位置合わせをするのをやめる
// その代わりにleafletのピンを用いて位置の特定を行ない、
// それをもとにopencvで位置合わせを行なう

import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';

// 自作モジュールの読み込み
import PreviewImage from './PreviewImage';

const warpImage = (srcA, srcB, cPointsA, cPointsB, n_points) => {
	// srcA, srcB: 入力画像(cv.Mat)
	// cPointsA, cPointsB: 対応点。javascriptの配列
	// n_points: 対応点の個数
	const matA = cv.matFromArray(n_points, 3, cv.CV_32F, cPointsA);
	const matB = cv.matFromArray(n_points, 3, cv.CV_32F, cPointsB);

	// ホモグラフィの推定
	const estimateHomography = (matrixA, matrixB, method) => {
		// method: 0(default) or 4(LMEDS) or 8(RANSAC) or 16(RHO)
		let homography = new cv.Mat(3, 3, cv.CV_32F);
		homography = cv.findHomography(matrixA, matrixB, method);
		return homography;
	};

	let H = estimateHomography(matA, matB, 0);
	let dst = cv.Mat.zeros(srcB.rows, srcB.cols, cv.CV_8UC3);

	cv.warpPerspective(srcA, dst, H, new cv.Size(dst.cols, dst.rows), cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
	//srcA.delete();
	//srcB.delete();
	return dst;
	//dst.delete();
};

class ImageCrop extends React.Component {
	constructor(props) {
		super(props);
		this.images = this.props.images;
		this.state = {
			correspondingPointsArray: [null, null],
		};
		this.setCorrespondingPoints = this.setCorrespondingPoints.bind(this);
		this.invisibleCanvasRef = React.createRef();
		this.n_marker = 4;
	}

	setCorrespondingPoints(correspondingPoints, id) {
		let array = this.state.correspondingPointsArray;
		array[id] = correspondingPoints;
		this.setState({
			correspondingPointsArray: array,
		});
	}

	executeImageMatching() {
		// マーカーの位置情報から対応点の配列を作る
		const correspondingPoints_1 = this.state.correspondingPointsArray[0]
			.map((hash) => {
				return [hash.x, hash.y, 1];
			})
			.flat();
		const correspondingPoints_2 = this.state.correspondingPointsArray[1]
			.map((hash) => {
				return [hash.x, hash.y, 1];
			})
			.flat();
		// 画像の読み出し
		const createImgElement = (dataUrl) => {
			let imgElement = new Image();
			imgElement.src = dataUrl;
			return imgElement;
		};

		let image_1, image_2;
		image_1 = cv.imread(createImgElement(this.images[0].base64));
		image_2 = cv.imread(createImgElement(this.images[1].base64));

		// image_1をimage_2のサイズをもとに変換する
		let new_image_1 = warpImage(image_1, image_2, correspondingPoints_1, correspondingPoints_2, this.n_marker);
		// new_image_1を一旦canvasに貼り、base64に変換する
		cv.imshow(this.invisibleCanvasRef.current, new_image_1);
		let dataUrl = this.invisibleCanvasRef.current.toDataURL('image/png', 1);
		// Workflowに送る
		this.props.onImageProcessingDone(dataUrl);
		image_1.delete();
		image_2.delete();
		new_image_1.delete();
	}

	render() {
		return (
			<Box>
				<PreviewImage imageId={0} image={this.images[0]} onPointsSet={this.setCorrespondingPoints} n_marker={this.n_marker} />
				<PreviewImage imageId={1} image={this.images[1]} onPointsSet={this.setCorrespondingPoints} n_marker={this.n_marker} />
				<canvas ref={this.invisibleCanvasRef} style={{ display: 'none' }}></canvas>
			</Box>
		);
	}
}

export default ImageCrop;

ImageCrop.propTypes = {
	images: PropTypes.array.isRequired,
	onImageProcessingDone: PropTypes.func.isRequired,
};
