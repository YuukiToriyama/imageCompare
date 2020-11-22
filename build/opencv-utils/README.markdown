# opencv-utils.js 

## Overview
OpenCV.jsを使用する際、そのファイルの読み込みの順番やスクリプトの実行のタイミングを考慮しながらプログラムを書くのが難しい。  
そこで、OpenCV.jsを読み込み安全に処理を実行できるようユーティリティを開発した。  
このスクリプトには原型があって、それを参考に独自のスクリプトを作成した(下記Referenceの項を参照)。  

## Usage
```javascript
const utils = new opencvUtils();
utils.loadOpenCV("https://docs.opencv.org/3.4.0/opencv.js", () => {
	utils.executeScript("./process.js");
});
```

## Reference
- [https://docs.opencv.org/3.4/utils.js](https://docs.opencv.org/3.4/utils.js)

