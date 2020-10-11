/* main.js */

var canvas;
var scale = 1;
var src, working;
let fillColor, strokeColor;

window.onload = () => {
	document.getElementById("readImage").addEventListener("change", loadLocalImage, false);
	fillColor = new cv.Scalar(255,255,0,0.5);
	strokeColor = new cv.Scalar(255,255,10,1);
}

// 読み込みボタンを押すと画像が読み込まれる
const loadLocalImage = (event) => {
	var target = event.target;
	if (!target.files.length) {
		alert("ファイルが選択されていません");
		return -1;
	}
	points = [];
	loadImage(event.target);
}

// canvasに画像をロードする
const loadImage = (input) => {
	// 描画領域の初期化
	clearImage();
	// 選択したファイルの読み込み
	const file = input.files[0];
	const reader = new FileReader();
	reader.readAsDataURL(file);
	reader.onload = () => {
		// 読み込んだ画像をセットする
		const src_data = reader.result;
		let img = new Image();
		img.src = src_data;
		img.onload = () => {
			// opencv.jsの機能を使ってcanvasに画像を描画
			src = cv.imread(img, cv.IMREAD_COLOR);
			working = src.clone();
			cv.imshow(canvas, src);
			//src.delete();
			// 画像の実際のサイズと表示のサイズの比を取っておく
			scale = canvas.clientWidth / img.naturalWidth;
			// canvasにイベントリスナーを設定
			canvas.addEventListener("click", (ev) => drawSquare(ev));
		}
	}
}

// マウスでポイントを取る
// 配列points内に頂点の情報を追加していく
var points = [];
const drawSquare = (event) => {
	let n = points.length;
	if (n < 4) {
		let rect = event.target.getBoundingClientRect();
		let x = (event.clientX - rect.left) / scale;
		let y = (event.clientY - rect.top) / scale;
		let p = new cv.Point(parseInt(x),parseInt(y));
		//console.log(x,y);

		// クリックした位置にマーカーを描画
		cv.circle(working, p, 10, fillColor, cv.FILLED);
		// 配列pointsに点の情報を格納
		points.push(p);
		
		// 2点目からはその点とその前の点とを結ぶ線分を描く
		if (0 < n) {
			cv.line(working, points[n - 1], points[n], strokeColor, 2, cv.LINE_AA, 0);
		}
		// 4点指定したら最初の点と最後の点を結び、四角形にする
		if (n == 3) {
			cv.line(working, points[3], points[0], strokeColor, 2, cv.LINE_AA, 0);
		}

		// 描画
		cv.imshow(canvas, working);

		// 画像処理(ホモグラフィ変換)
		if (points.length == 4) {
			let dialog = window.confirm("この四点で変換を行ないますか？");
			if (dialog === true) {
				rectifyImage(src, points);
			} else {
				// キャンセルを押したらポイントはリセット
				cv.imshow(canvas, src);
				points = [];
			}
		}
	} else {
		let dialog = window.confirm("既に4点指定しています。「キャンセル」を押すとこのダイアログは閉じます。「OK」を押すと画面は初期化されます。");
		if (dialog == true) {
			clearImage();
			points = [];
		}
	}
} 

// ホモグラフィ変換で画像の歪みを補正する
const rectifyImage = (src, p) => {
	let srcArr = [];
	p.forEach(p => {
		srcArr.push(p.x);
		srcArr.push(p.y);
	});
	// 生成画像のアスペクト比を決める
	let w1 = Math.sqrt((p[0].x - p[1].x) ** 2 + (p[0].y - p[1].y) ** 2);
	let h1 = Math.sqrt((p[1].x - p[2].x) ** 2 + (p[1].y - p[2].y) ** 2);
	let w2 = Math.sqrt((p[2].x - p[3].x) ** 2 + (p[2].y - p[3].y) ** 2);
	let h2 = Math.sqrt((p[3].x - p[0].x) ** 2 + (p[3].y - p[0].y) ** 2);
	let w = Math.max(w1, w2);
	let h = Math.max(h1, h2);
	let dstArr = [
		0,0,
		w,0,
		w,h,
		0,h
	];
	let srcTri = cv.matFromArray(4, 1, cv.CV_32FC2, srcArr);
	let dstTri = cv.matFromArray(4, 1, cv.CV_32FC2, dstArr);
	let M = cv.getPerspectiveTransform(srcTri, dstTri);
	let dst = new cv.Mat();
	let dsize = new cv.Size(w, h);
	cv.warpPerspective(src, dst, M, dsize, cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
	cv.imshow(canvas, dst);
}


// 画像を削除する
const clearImage = () => {
	let image_area = document.getElementById("image_area");
	while (image_area.firstChild) {
		image_area.removeChild(image_area.firstChild);
	}
	canvas = document.createElement("canvas");
	image_area.appendChild(canvas);
}

// Escを押すと画像を削除
document.addEventListener("keydown", event => {
	if (event.code === "KeyQ") {
		clearImage();
		points = [];
	} else if (event.code === "Escape") {
		cv.imshow(canvas, src);
		working = src.clone();
		points = [];
	}
})

// 画像処理(サンプル)
const convertColor = () => {
	let src = cv.imread(canvas);
	let dst = new cv.Mat();
	cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY);
	cv.imshow(canvas, dst);
}
