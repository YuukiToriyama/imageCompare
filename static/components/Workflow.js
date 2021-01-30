import React from "../../_snowpack/pkg/react.js";
import withStyles from "../../_snowpack/pkg/@material-ui/core/styles/withStyles.js";
import {
  Box,
  Button,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography
} from "../../_snowpack/pkg/@material-ui/core.js";
import CircularProgress from "../../_snowpack/pkg/@material-ui/core/CircularProgress.js";
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
      "\u306F\u3058\u3081\u306B",
      "\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F",
      "\u30B3\u30F3\u30C8\u30ED\u30FC\u30EB\u30DD\u30A4\u30F3\u30C8\u306E\u8A2D\u5B9A",
      "\u753B\u50CF\u6BD4\u8F03\u30D3\u30E5\u30FC"
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
      title: "\u3053\u306E\u30A2\u30D7\u30EA\u3067\u3067\u304D\u308B\u3053\u3068",
      content: [
        "\u3053\u306E\u30A2\u30D7\u30EA\u3067\u306F\u3001\u7279\u5FB4\u306E\u4F3C\u3066\u3044\u308B\u753B\u50CF\u3092\u3046\u307E\u304F\u5BFE\u5FDC\u3055\u305B\u3066\u91CD\u306D\u3066\u898B\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002",
        "\u3053\u308C\u307E\u3067\u306FPhotoShop\u3084GIMP\u306A\u3069\u306E\u30A2\u30D7\u30EA\u3092\u958B\u3044\u3066\u96E3\u3057\u3044\u624B\u9806\u3092\u8E0F\u307E\u306A\u3051\u308C\u3070\u3067\u304D\u306A\u304B\u3063\u305F\u4F5C\u696D\u3092\u30D6\u30E9\u30A6\u30B6\u306E\u4E2D\u3060\u3051\u3067\u5B9F\u73FE\u3067\u304D\u307E\u3059\u3002"
      ]
    },
    {
      title: "\u3053\u306E\u30A2\u30D7\u30EA\u306E\u4F7F\u3044\u65B9",
      content: [
        "\u307E\u305A\u3001\u6BD4\u8F03\u3092\u3057\u305F\u3044\u753B\u50CF\u3092\u7528\u610F\u3057\u307E\u3059\u3002\u5BFE\u5FDC\u3057\u3066\u3044\u308B\u30D5\u30A1\u30A4\u30EB\u30BF\u30A4\u30D7\u306Fjpeg\u3068png\u3067\u3059\u3002",
        "\u3064\u304E\u306B\u3001\u305D\u308C\u3089\u30D5\u30A1\u30A4\u30EB\u3092\u8AAD\u307F\u8FBC\u307F\u307E\u3059\u3002",
        "\u753B\u50CF\u306E\u8AAD\u307F\u8FBC\u307F\u304C\u5B8C\u4E86\u3059\u308B\u3068\u3001\u8AAD\u307F\u8FBC\u3093\u3060\u753B\u50CF\u3092\u30DE\u30A6\u30B9\u3067\u52D5\u304B\u3057\u305F\u308A\u62E1\u5927\u7E2E\u5C0F\u3067\u304D\u308B\u753B\u9762\u304C\u73FE\u308C\u307E\u3059\u3002",
        "\u3053\u306E\u753B\u9762\u3067\u306F\u30012\u3064\u306E\u753B\u50CF\u3092\u4E00\u81F4\u3055\u305B\u308B\u305F\u3081\u306B\u5FC5\u8981\u306A\u64CD\u4F5C\u3092\u884C\u306A\u3044\u307E\u3059\u3002",
        "\u305D\u308C\u305E\u308C\u306E\u753B\u9762\u306E\u4E2D\u592E\u306B\u3001\u6570\u5B57\u306E\u3064\u3044\u305F\u30DE\u30FC\u30AB\u30FC\u304C\u7528\u610F\u3055\u308C\u3066\u3044\u307E\u3059\u3002\u3053\u308C\u3089\u3092\u52D5\u304B\u3057\u3066\u3001\u53F3\u3068\u5DE6\u3068\u3067\u540C\u3058\u756A\u53F7\u306E\u30DE\u30FC\u30AB\u30FC\u304C\u540C\u3058\u30DD\u30A4\u30F3\u30C8\u3092\u62BC\u3055\u3048\u308B\u3088\u3046\u306B\u30DE\u30FC\u30AB\u30FC\u306E\u4F4D\u7F6E\u3092\u8ABF\u6574\u3057\u3066\u4E0B\u3055\u3044\u3002",
        "\u30DE\u30FC\u30AB\u30FC\u306E\u4F4D\u7F6E\u5408\u308F\u305B\u304C\u7D42\u308F\u3063\u305F\u3089\u3001\u6B21\u306F\u753B\u50CF\u51E6\u7406\u306E\u4F5C\u696D\u306B\u79FB\u308A\u307E\u3059\u3002",
        "\u300C\u51E6\u7406\u3092\u5B9F\u884C\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u3001\u5DE6\u753B\u9762\u306B\u6620\u3063\u3066\u3044\u305F\u753B\u50CF\u304C\u3001\u5DE6\u5074\u306E\u753B\u50CF\u306B\u30D5\u30A3\u30C3\u30C8\u3059\u308B\u3088\u3046\u306B\u5909\u5F62\u4F5C\u696D\u304C\u5B9F\u884C\u3055\u308C\u307E\u3059\u3002",
        "\u30DC\u30BF\u30F3\u3092\u62BC\u3059\u3068\u51E6\u7406\u306F\u81EA\u52D5\u7684\u306B\u9032\u884C\u3057\u3001\u51E6\u7406\u304C\u7D42\u308F\u308B\u3068\u753B\u50CF\u306E\u6BD4\u8F03\u95B2\u89A7\u753B\u9762\u304C\u8868\u793A\u3055\u308C\u307E\u3059\u3002",
        "\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u30EC\u30A4\u30E4\u30FC\u8868\u793A\u3067\u3059\u304C\u3001\u30C8\u30B0\u30EB\u30B9\u30A4\u30C3\u30C1\u3092\u3044\u3058\u308B\u3068\u3001\u4E8C\u753B\u9762\u30E2\u30FC\u30C9\u306B\u3082\u5909\u66F4\u3067\u304D\u307E\u3059\u3002",
        "\u3046\u307E\u304F\u753B\u50CF\u304C\u5408\u3063\u3066\u3044\u306A\u3044\u3068\u3044\u3046\u3068\u304D\u306F\u3001\u5BFE\u5FDC\u70B9\u306E\u4F4D\u7F6E\u5408\u308F\u305B\u304C\u3046\u307E\u304F\u884C\u3063\u3066\u3044\u306A\u3044\u53EF\u80FD\u6027\u304C\u3042\u308A\u307E\u3059\u3002\u300C\u59CB\u3081\u306B\u623B\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u6700\u521D\u304B\u3089\u3084\u308A\u76F4\u3057\u3066\u4E0B\u3055\u3044\u3002"
      ]
    }
  ];
  getEachSteps = (step) => {
    switch (step) {
      case 0:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "\u306F\u3058\u3081\u306B\u3053\u306E\u30A2\u30D7\u30EA\u306B\u3064\u3044\u3066\u8AAC\u660E\u3057\u307E\u3059\u3002"), this.howToMessage.map((message) => {
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
        }, "\u59CB\u3081\u308B"));
      case 1:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "\u6BD4\u8F03\u3092\u884C\u306A\u3044\u305F\u3044\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9\u3057\u3066\u304F\u3060\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "\u753B\u50CF\u306F\u30D6\u30E9\u30A6\u30B6\u4E0A\u306B\u8AAD\u307F\u8FBC\u307E\u308C\u308B\u3060\u3051\u3067\u3001\u5916\u90E8\u306B\u306F\u9001\u4FE1\u3055\u308C\u307E\u305B\u3093\u3002"), /* @__PURE__ */ React.createElement("div", null, this.renderImageLoader(0), this.renderImageLoader(1)));
      case 2:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "\u6570\u5B57\u306E\u3064\u3044\u305F\u30DE\u30FC\u30AB\u30FC\u3092\u52D5\u304B\u3057\u3066\u30012\u3064\u306E\u753B\u50CF\u306E\u5BFE\u5FDC\u95A2\u4FC2\u3092\u8A2D\u5B9A\u3057\u307E\u3059\u3002"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "\u53F3\u3068\u5DE6\u3068\u3067\u540C\u3058\u756A\u53F7\u306E\u30DE\u30FC\u30AB\u30FC\u304C\u540C\u3058\u30DD\u30A4\u30F3\u30C8\u3092\u62BC\u3055\u3048\u308B\u3088\u3046\u306B\u30DE\u30FC\u30AB\u30FC\u306E\u4F4D\u7F6E\u3092\u8ABF\u6574\u3057\u3066\u4E0B\u3055\u3044\u3002"), /* @__PURE__ */ React.createElement(ImageTransform, {
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
        }, "\u51E6\u7406\u3092\u5B9F\u884C"));
      case 3:
        return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Typography, {
          variant: "body1"
        }, "\u51E6\u7406\u304C\u5B8C\u4E86\u3057\u307E\u3057\u305F\uFF01"), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, "\u900F\u660E\u5EA6\u3092\u5909\u3048\u308B\u3053\u3068\u30672\u3064\u306E\u753B\u50CF\u3092\u900F\u904E\u3055\u305B\u3066\u307F\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002\u307E\u305F\u3001\u4E8C\u753B\u9762\u30E2\u30FC\u30C9\u306B\u8868\u793A\u3092\u5207\u308A\u66FF\u3048\u308B\u3053\u3068\u3082\u3067\u304D\u307E\u3059\u3002"), this.state.inputImages[1] != null && /* @__PURE__ */ React.createElement(ImageCompare, {
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
      }, "\u6700\u521D\u306B\u623B\u308B"));
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
//# sourceMappingURL=Workflow.js.map
