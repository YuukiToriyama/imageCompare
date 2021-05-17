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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9tb2R1bGVzL1dvcmtmbG93LmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBLE1BQU0sU0FBUztBQUFBLEVBQ2QsTUFBTTtBQUFBLElBQ0wsT0FBTztBQUFBO0FBQUEsRUFFUixRQUFRO0FBQUEsSUFDUCxXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUE7QUFBQTtBQUlmLE1BQU0sV0FBVyxDQUFDLFVBQVU7QUFFM0IsUUFBTSxDQUFDLFlBQVksaUJBQWlCLE1BQU0sU0FBUztBQUVuRCxRQUFNLENBQUMsYUFBYSxrQkFBa0IsTUFBTSxTQUFTO0FBRXJELFFBQU0sQ0FBQyxrQkFBa0IsdUJBQXVCLE1BQU0sU0FBUztBQUUvRCxRQUFNLENBQUMsY0FBYyxtQkFBbUIsTUFBTSxTQUFTO0FBR3ZELFFBQU0sYUFBYSxNQUFNO0FBQ3hCLGtCQUFjLGVBQWEsWUFBWTtBQUFBO0FBRXhDLFFBQU0sYUFBYSxNQUFNO0FBQ3hCLGtCQUFjLGVBQWEsWUFBWTtBQUFBO0FBRXhDLFFBQU0sY0FBYyxNQUFNO0FBQ3pCLGtCQUFjO0FBQ2QsbUJBQWU7QUFDZixvQkFBZ0I7QUFBQTtBQUlqQixRQUFNLG9CQUFvQixNQUFNLE9BQU87QUFHdkMsUUFBTSw0QkFBNEIsQ0FBQyxnQkFBZ0I7QUFDbEQsd0JBQW9CO0FBQ3BCLG9CQUFnQjtBQUFBO0FBSWpCLFFBQU0sb0JBQW9CLENBQUMsVUFBVTtBQUNwQyxRQUFJLFNBQVMsR0FBRztBQUNmLGFBQ0Msb0NBQUMsTUFBTSxVQUFQLE1BQ0UsU0FBUyxJQUFJLENBQUMsWUFBWTtBQUMxQixjQUFNLE9BQU8sUUFBUSxRQUFRLElBQUksQ0FB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
