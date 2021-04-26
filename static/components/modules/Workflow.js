import React from "../../../_snowpack/pkg/react.js";
import withStyles from "../../../_snowpack/pkg/@material-ui/core/styles/withStyles.js";
import {
  Box,
  Button,
  Paper,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
  Tooltip
} from "../../../_snowpack/pkg/@material-ui/core.js";
import CircularProgress from "../../../_snowpack/pkg/@material-ui/core/CircularProgress.js";
import ImageLoader from "./ImageLoader.js";
import ImageCompare from "./ImageCompare.js";
import ImageTransform from "./ImageTransform.js";
import {
  howToUse,
  workflowSteps
} from "../../utils/Messages.js";
const styles = {
  root: {
    width: "100%"
  },
  button: {
    marginTop: "15px",
    marginRight: "15px"
  }
};
const Workflow = (props) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [inputImages, setInputImages] = React.useState([]);
  const [transformedImage, setTransformedImage] = React.useState({});
  const [isProcessing, setIsProcessing] = React.useState(false);
  const handleNext = () => {
    setActiveStep((prevState) => prevState + 1);
  };
  const handleBack = () => {
    setActiveStep((prevState) => prevState - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
    setInputImages([]);
    setIsProcessing(false);
  };
  const refImageTransform = React.useRef(null);
  const handleImageProcessingDone = (imageObject) => {
    setTransformedImage(imageObject);
    setIsProcessing(false);
  };
  const generateEachSteps = (index) => {
    if (index == 0) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, howToUse.map((message) => {
        const text = message.content.map((line, index2) => {
          return /* @__PURE__ */ React.createElement("div", {
            key: index2
          }, line);
        });
        return /* @__PURE__ */ React.createElement(Paper, {
          elevation: 3,
          style: {marginTop: "10px"}
        }, /* @__PURE__ */ React.createElement(Typography, {
          variant: "h6"
        }, message.title), /* @__PURE__ */ React.createElement(Typography, {
          variant: "body2"
        }, text));
      }), /* @__PURE__ */ React.createElement(Button, {
        color: "primary",
        variant: "contained",
        onClick: handleNext
      }, "始める"));
    } else if (index == 1) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ImageLoader, {
        onInputImageChange: (data) => {
          setInputImages(data);
        }
      }), /* @__PURE__ */ React.createElement(Button, {
        disabled: inputImages.length < 2 ? true : false,
        color: "primary",
        variant: "contained",
        onClick: () => handleNext()
      }, "次へ"));
    } else if (index == 2) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(ImageTransform, {
        ref: refImageTransform,
        images: inputImages,
        onImageProcessingDone: handleImageProcessingDone
      }), /* @__PURE__ */ React.createElement(Button, {
        variant: "contained",
        color: "primary",
        onClick: () => {
          new Promise((resolve, reject) => {
            setIsProcessing(true);
            refImageTransform.current.executeImageMatching();
            resolve(true);
          }).then(() => {
            setIsProcessing(false);
            handleNext();
          });
        }
      }, "処理を実行"), isProcessing === true && /* @__PURE__ */ React.createElement(CircularProgress, null));
    } else if (index == 3) {
      if (inputImages[1] != null) {
        return /* @__PURE__ */ React.createElement(ImageCompare, {
          images: [
            transformedImage,
            inputImages[1]
          ]
        });
      }
    } else {
      return /* @__PURE__ */ React.createElement(Typography, null, "Unknown step");
    }
  };
  const ResetButton = () => {
    return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(Button, {
      disabled: activeStep === 0,
      onClick: handleReset
    }, "最初に戻る"));
  };
  return /* @__PURE__ */ React.createElement(Box, {
    className: props.classes.root
  }, /* @__PURE__ */ React.createElement(Stepper, {
    activeStep,
    orientation: "vertical"
  }, workflowSteps.map((step, index) => /* @__PURE__ */ React.createElement(Step, {
    key: "step" + index
  }, /* @__PURE__ */ React.createElement(StepLabel, null, step.title), /* @__PURE__ */ React.createElement(Tooltip, {
    title: step.hint,
    placement: "bottom",
    arrow: true,
    interactive: true
  }, /* @__PURE__ */ React.createElement(StepContent, null, /* @__PURE__ */ React.createElement(Typography, {
    variant: "body1"
  }, step.description.join("\n")), generateEachSteps(index), /* @__PURE__ */ React.createElement(ResetButton, {
    props
  })))))));
};
export default withStyles(styles)(Workflow);
