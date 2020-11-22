/* opencv-utils.js 
 *
 * Overview
 * OpenCV.jsを使用する際、そのファイルの読み込みの順番やスクリプトの実行のタイミングを考慮しながらプログラムを書くのが難しい。
 * そこで、OpenCV.jsを読み込み安全に処理を実行できるようユーティリティを開発した。
 * このスクリプトには原型があって、それを参考に独自のスクリプトを作成した(下記Referenceの項を参照)。
 *
 * Usage
 * const utils = new opencvUtils();
 * utils.loadOpenCV("https://docs.opencv.org/3.4.0/opencv.js", () => {
 * 	utils.executeScript("./process.js");
 * });
 *
 * Reference
 * https://docs.opencv.org/3.4/utils.js
 *
 * Homepage
 * https://github.com/YUUKIToriyama/opencv-utils.js
 *
 */


const opencvUtils = class {
	loadOpenCV(OPENCV_URL, onloadCallback) {
		/*
		 * utils.loadOpenCV(url, callback);
		 *
		 * OpenCV.jsを読み込むための函数。
		 * 以下のようなscriptタグを生成し、ドキュメントに挿入する。
		 * <script async type="text/javascript" src="OPENCV_URL"></script>
		 * さらにイベントリスナーには読み込みが完了した際、OpenCV.jsのビルド情報を出力する函数を設定している。
		 *
		 */
		let script = document.createElement("script");
		script.setAttribute("async", "");
		script.setAttribute("type", "text/javascript");
		script.addEventListener("load", () => {
			if (cv.getBuildInformation) {
				// opencvの読み込みが完了している場合
				console.log(cv.getBuildInformation());
				onloadCallback();
			} else {
				// opencvの読み込みを待っている場合
				cv["onRuntimeInitialized"] = () => {
					console.log(cv.getBuildInformation());
					onloadCallback();
				}
			}
		});
		script.addEventListener("error", () => {
			console.error("Failed to load " + OPENCV_URL);
		});
		script.src = OPENCV_URL;
		let node = document.querySelector("head");
		node.appendChild(script);
	}

	loadImage(url) {
		/*
		 * utils.loadImage(url);
		 *
		 * 引数によって指定された画像を読み込みimg要素を返す函数。
		 */
		let img = new Image();
		img.crossOrigin = "anonymous";
		img.src = url;
		img.onload = () => {
			return img;
		}
	}

	executeScript(url) {
		/*
		 * utils.executeSctipt(url);
		 *
		 * 引数によって指定されたスクリプトファイルを読み出し実行する函数。
		 * 実行するときはloadOpenCV()の後でなければならない。
		 * あるいは次のようにloadOpenCV()のcallbackに指定しても良い。
		 *
		 * Util.loadOpenCV(() => {
		 *	Util.executeScript("./process.js");
		 * });
		 */
		const SCRIPT_URL = url;
		let script = document.createElement("script");
		script.setAttribute("type", "text/javascript");
		script.src = SCRIPT_URL;
		script.addEventListener("load", () => {
			console.log("Now loading " + SCRIPT_URL);
		});
		script.addEventListener("onload", () => {
			console.log("Executing " + SCRIPT_URL);
		});
		let node = document.querySelector("body");
		node.appendChild(script);
	}

	static credit() {
		console.log("(C) Copyright 2020 YUUKIToriyama, All Rights Reserved.");
	}
}

export default opencvUtils;