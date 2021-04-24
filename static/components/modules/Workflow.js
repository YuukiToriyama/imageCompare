import React from "../../../_snowpack/pkg/react.js";
import withStyles from "../../../_snowpack/pkg/@material-ui/core/styles/withStyles.js";
import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from "../../../_snowpack/pkg/@material-ui/core.js";
import CircularProgress from "../../../_snowpack/pkg/@material-ui/core/CircularProgress.js";
import ImageLoader from "./ImageLoader.js";
import ImageCompare from "./ImageCompare.js";
import ImageTransform from "./ImageTransform.js";
const styles = {
  root: {
    width: "100%"
  },
  button: {
    marginTop: "15px",
    marginRight: "15px"
  }
};
class Workflow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      inputImages: [null, null],
      transformedImage: {},
      processing: false
    };
    this.imageCropRef = React.createRef();
    this.steps = [
      "はじめに",
      "画像の読み込み",
      "コントロールポイントの設定",
      "画像比較ビュー"
    ];
  }
  renderImageLoader = (i) => {
    return /* @__PURE__ */ React.createElement(ImageLoader, {
      loaderId: i,
      onInputImageChange: (imageObject) => new Promise((resolve) => {
        let images = this.state.inputImages;
        images[i] = imageObject;
        this.setState({
          inputImage: images
        });
        resolve(true);
      }).then((result) => {
        this.state.inputImages.every((image) => {
          return image !== null;
        }) && this.handleNext();
      })
    });
  };
  executeImageMatching = () => {
    this.imageCropRef.current.executeImageMatching();
  };
  handleImageProcessingDone = (imageObject) => {
    this.setState({
      transformedImage: imageObject,
      processing: false
    });
  };
  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1
    }));
  };
  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1
    }));
  };
  handleReset = () => {
    this.setState({
      activeStep: 0,
      inputImages: [null, null],
      processing: false
    });
  };
  howToMessage = [
    {
      title: "このアプリでできること",
      content: [
        "このアプリでは、特徴の似ている画像をうまく対応させて重ねて見ることができます。",
        "これまではPhotoShopやGIMPなどのアプリを開いて難しい手順を踏まなければできなかった作業をブラウザの中だけで実現できます。"
      ]
    },
    {
      title: "このアプリの使い方",
      content: [
        "まず、比較をしたい画像を用意します。対応しているファイルタイプはjpegとpngです。",
        "つぎに、それらファイルを読み込みます。",
        "画像の読み込みが完了すると、読み込んだ画像をマウスで動かしたり拡大縮小できる画面が現れます。",
        "この画面では、2つの画像を一致させるために必要な操作を行ないます。",
        "それぞれの画面の中央に、数字のついたマーカーが用意されています。これらを動かして、右と左とで同じ番号のマーカーが同じポイントを押さえるようにマーカーの位置を調整して下さい。",
        "マーカーの位置合わせが終わったら、次は画像処理の作業に移ります。",
        "「処理を実行」ボタンを押すと、左画面に映っていた画像が、左側の画像にフィットするように変形作業が実行されます。",
        "ボタンを押すと処理は自動的に進行し、処理が終わると画像の比較閲覧画面が表示されます。",
        "デフォルトはレイヤー表示ですが、トグルスイッチをいじると、二画面モードにも変更できます。",
        "うまく画像が合っていないというときは、対応点の位置合わせがうまく行っていない可能性があります。「始めに戻る」ボタンを押して最初からやり直して下さい。"
      ]
    }
  ];
  getEachSteps = (step) => {
    switch (step) {
      case 0:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "はじめにこのアプリについて説明します。"), this.howToMessage.map((message) => {
          const text = message.content.map((line, index) => {
            return /* @__PURE__ */ React.createElement("div", {
              key: index
            }, line);
          });
          return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Typography, {
            variant: "h3"
          }, message.title), /* @__PURE__ */ React.createElement(Typography, {
            variant: "body1"
          }, text));
        }), /* @__PURE__ */ React.createElement(Button, {
          color: "primary",
          variant: "contained",
          onClick: this.handleNext
        }, "始める"));
      case 1:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "比較を行ないたい画像をアップロードしてください。"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "画像はブラウザ上に読み込まれるだけで、外部には送信されません。"), /* @__PURE__ */ React.createElement("div", null, this.renderImageLoader(0), this.renderImageLoader(1)));
      case 2:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "数字のついたマーカーを動かして、2つの画像の対応関係を設定します。"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "右と左とで同じ番号のマーカーが同じポイントを押さえるようにマーカーの位置を調整して下さい。"), /* @__PURE__ */ React.createElement(ImageTransform, {
          ref: this.imageCropRef,
          images: this.state.inputImages,
          onImageProcessingDone: this.handleImageProcessingDone
        }), this.state.processing === true && /* @__PURE__ */ React.createElement(CircularProgress, null), /* @__PURE__ */ React.createElement(Button, {
          variant: "contained",
          color: "primary",
          onClick: () => {
            new Promise((resolve, reject) => {
              this.setState({
                processing: true
              });
              this.imageCropRef.current.executeImageMatching();
              resolve(true);
            }).then(() => {
              this.setState({
                processing: false
              });
              this.handleNext();
            });
          }
        }, "処理を実行"));
      case 3:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "処理が完了しました！"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "透明度を変えることで2つの画像を透過させてみることができます。また、二画面モードに表示を切り替えることもできます。"), this.state.inputImages[1] != null && /* @__PURE__ */ React.createElement(ImageCompare, {
          images: [
            this.state.transformedImage,
            this.state.inputImages[1]
          ]
        }));
      default:
        return /* @__PURE__ */ React.createElement(Typography, null, "Unknown step");
    }
  };
  render() {
    const ResetButton = () => {
      return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Button, {
        disabled: this.state.activeStep === 0,
        onClick: this.handleReset
      }, "最初に戻る"));
    };
    return /* @__PURE__ */ React.createElement(Box, {
      className: this.props.classes.root
    }, /* @__PURE__ */ React.createElement(Stepper, {
      activeStep: this.state.activeStep,
      orientation: "vertical"
    }, this.steps.map((label, index) => /* @__PURE__ */ React.createElement(Step, {
      key: label
    }, /* @__PURE__ */ React.createElement(StepLabel, null, label), /* @__PURE__ */ React.createElement(StepContent, null, this.getEachSteps(index), /* @__PURE__ */ React.createElement(ResetButton, {
      props: this.props
    }))))));
  }
}
export default withStyles(styles)(Workflow);
