# YUUKIToriyama/imageCompare

必ずしも一致しない二枚の画像を読み込み、一方をもう一方に合わせることで二枚を重ねたり並べたりして比較できるようにするツールです。

## How to setup

```bash
# clone this repository
git clone --recursive https://github.com/YUUKIToriyama/imageCompare.git
# do npm settings
npm install
# type these commands on bash, and go to localhost:8080 on your browser
npm run start
```

## How to use

1. 画像を読みこむ
2. マーカーを動かし手作業で特徴点を結びつける
3. 処理実行ボタンを押す

## 技術的背景

### OpenCV.js

- 対応点から二つの画像の間のホモグラフィを計算するのに`findHomography`関数を用いている。

### Leaflet.js

- `L.ImageOverlay`を用いてインタラクティブな画像表示を可能にしている。
- ユーザに対応点を指定してもらうのに、`L.marker`を用いている。
- その他プラグインを用いてレイヤー透過や二画面連動操作などの機能を実現した。

### React.js & Material-UI

- インターフェースのデザインは全て Material-UI を用いた。
