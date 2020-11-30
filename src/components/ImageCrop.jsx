/* ImageCrop.jsx */
// canvasを使って画像の位置合わせをするのをやめる
// その代わりにleafletのピンを用いて位置の特定を行ない、
// それをもとにopencvで位置合わせを行なう

import React from "react";
import Box from "@material-ui/core/Box";
//import opencvUtils from "../opencv-utils/opencv-utils";

// 自作モジュールの読み込み
import PreviewImage from "./PreviewImage";

class ImageCrop extends React.Component {
	constructor(props) {
		super(props);
		this.canvasElement = React.createRef();
		this.images = this.props.images;
		this.src;
		this.working;
		this.imageSize;
		this.scale;
		this.state = {
			vertices: [],
		};
	}

	/*
	showImage = (imageURL, canvas) => {
		// opencvUtilsを援用して画像をCanvasに読み込み
		// typeof(src): cv.Mat
		const opencv_utils = new opencvUtils();
		opencv_utils.loadImage(imageURL, (src) => {
			cv.imshow(canvas, src);
			// 一旦srcを削除するのでデータを退避
			this.src = src.clone();
			this.working = src.clone();

			// 画像のサイズを計測
			console.log(src.size());
			this.imageSize = src.size();
			this.scale = canvas.clientWidth / this.imageSize.width;

			// srcを削除
			src.delete();
		});
	};
	*/

	drawRectifyArea = (event) => {
		const fillColor = new cv.Scalar(255, 255, 0, 0.5);
		const strokeColor = new cv.Scalar(255, 0, 255, 0.5);
		let n = this.state.vertices.length;
		// ポイントの数が0,1,2,3個のとき
		if (n < 4) {
			/*
			 * キャンパス上のマウスカーソルの位置を特定し、
			 * それと、事前に求めておいたscaleの値(実際の画像の大きさと表示上の大きさの比)を元に、
			 * 切り出しポイントを特定している。
			 */
			let rect = event.target.getBoundingClientRect();
			let x = (event.clientX - rect.left) / this.scale;
			let y = (event.clientY - rect.top) / this.scale;
			//console.log(x,y);
			let vertex = new cv.Point(parseInt(x), parseInt(y));

			// その位置にマーカーを描画
			cv.circle(this.working, vertex, 10 / this.scale, fillColor, cv.FILLED);
			cv.imshow(this.canvasElement.current, this.working);

			// 配列verticesに計算したvertexを追加
			this.state.vertices.push(vertex);

			// 2点めからはその一つ前の点とその点を結ぶ線分も描く
			if (n != 0) {
				cv.line(
					this.working,
					this.state.vertices[n - 1],
					this.state.vertices[n],
					strokeColor,
					2 / this.scale,
					cv.LINE_AA,
					0
				);
				cv.imshow(this.canvasElement.current, this.working);
			}
		}

		// ポイントの数が3個のとき
		// 4点目を指定したら最初の1つ目の点と4つ目の点を結び四角形にする
		if (n == 3) {
			cv.line(
				this.working,
				this.state.vertices[3],
				this.state.vertices[0],
				strokeColor,
				2 / this.scale,
				cv.LINE_AA,
				0
			);
			cv.imshow(this.canvasElement.current, this.working);
		}

		// 4点指定できたら画像処理を行う
		if (this.state.vertices.length == 4) {
			this.rectifyImage(this.src, this.state.vertices);
		}
	};

	// ホモグラフィ変換で画像の歪みを補正する
	rectifyImage = (src, vertices) => {
		let srcArr = [];
		vertices.forEach((vertex) => {
			srcArr.push(vertex.x);
			srcArr.push(vertex.y);
		});

		const distance = (p1, p2) => {
			return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2);
		};

		let w1 = distance(vertices[0], vertices[1]);
		let h1 = distance(vertices[1], vertices[2]);
		let w2 = distance(vertices[2], vertices[3]);
		let h2 = distance(vertices[3], vertices[0]);

		let w = Math.max(w1, w2);
		let h = Math.max(h1, h2);

		const dstArr = [0, 0, w, 0, w, h, 0, h];

		const srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, srcArr);
		const dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, dstArr);
		const M = cv.getPerspectiveTransform(srcTri, dstTri);

		let dst = new cv.Mat();
		let dsize = new cv.Size(w, h);

		cv.warpPerspective(
			src,
			dst,
			M,
			dsize,
			cv.INTER_LINEAR,
			cv.BORDER_CONSTANT,
			new cv.Scalar()
		);
		cv.imshow(this.canvasElement.current, dst);

		// 処理後の画像を親コンポーネントに渡す
		//let dataURL = this.canvasElement.current.toDataURL("image/png", 1, w, h);
		var processedImage = {
			url: this.canvasElement.current.toDataURL("image/png", 1, w, h),
			width: w,
			height: h,
		};
		this.props.onImageProcessingDone(processedImage);

		[src, dst].forEach((mat) => mat.delete());
	};

	componentDidMount() {
		//this.showImage(this.props.image, this.canvasElement.current);
	}

	render() {
		return (
			<Box>
				<PreviewImage image={this.images[0]} />
				<PreviewImage image={this.images[1]} />
				{/*
				<canvas
					onClick={(event) => this.drawRectifyArea(event)}
					ref={this.canvasElement}
					style={{ width: "500px", maxWidth: "90%" }}
				></canvas>
				*/}
			</Box>
		);
	}
}

export default ImageCrop;
