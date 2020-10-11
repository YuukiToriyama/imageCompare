# skewedImageIron 画像歪み変換ツール
歪んだ画像に対しホモグラフィ変換を行ない、画像をまっすぐに直すWebツールです

## Usage
```bash
# clone this repository
git clone https://github.com/YUUKIToriyama/skewedImageIron.git
# do npm settings
npm install
# type these commands on bash, and go to localhost:8080 on your browser
npm run test
```

## 技術的背景
- OpenCVをブラウザ向けにコンパイルしたOpenCV.jsを活用したもの
	- 若干重いが工夫により軽量化は可能？
