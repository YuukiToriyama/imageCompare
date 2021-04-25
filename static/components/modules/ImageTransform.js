import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import Box from "../../../_snowpack/pkg/@material-ui/core/Box.js";
import PreviewImage from "../block/PreviewImage.js";
const warpImage = (srcA, srcB, cPointsA, cPointsB, n_points) => {
  const matA = cv.matFromArray(n_points, 3, cv.CV_32F, cPointsA);
  const matB = cv.matFromArray(n_points, 3, cv.CV_32F, cPointsB);
  const estimateHomography = (matrixA, matrixB, method) => {
    let homography = new cv.Mat(3, 3, cv.CV_32F);
    homography = cv.findHomography(matrixA, matrixB, method);
    return homography;
  };
  let H = estimateHomography(matA, matB, 0);
  let dst = cv.Mat.zeros(srcB.rows, srcB.cols, cv.CV_8UC3);
  cv.warpPerspective(srcA, dst, H, new cv.Size(dst.cols, dst.rows), cv.INTER_LINEAR, cv.BORDER_CONSTANT, new cv.Scalar());
  return dst;
};
class ImageTransform extends React.Component {
  constructor(props) {
    super(props);
    this.images = this.props.images;
    this.state = {
      correspondingPointsArray: [null, null]
    };
    this.setCorrespondingPoints = this.setCorrespondingPoints.bind(this);
    this.invisibleCanvasRef = React.createRef();
    this.n_marker = 4;
  }
  setCorrespondingPoints(correspondingPoints, id) {
    let array = this.state.correspondingPointsArray;
    array[id] = correspondingPoints;
    this.setState({
      correspondingPointsArray: array
    });
  }
  executeImageMatching() {
    const correspondingPoints_1 = this.state.correspondingPointsArray[0].map((hash) => {
      return [hash.x, hash.y, 1];
    }).flat();
    const correspondingPoints_2 = this.state.correspondingPointsArray[1].map((hash) => {
      return [hash.x, hash.y, 1];
    }).flat();
    const createImgElement = (dataUrl2) => {
      let imgElement = new Image();
      imgElement.src = dataUrl2;
      return imgElement;
    };
    let image_1 = cv.imread(createImgElement(this.images[0].ofileData));
    let image_2 = cv.imread(createImgElement(this.images[1].ofileData));
    let new_image_1 = warpImage(image_1, image_2, correspondingPoints_1, correspondingPoints_2, this.n_marker);
    cv.imshow(this.invisibleCanvasRef.current, new_image_1);
    let dataUrl = this.invisibleCanvasRef.current.toDataURL("image/png", 1);
    const imageObject = {
      fileName: this.images[0].fileName + "(Transformed)",
      ofileData: dataUrl,
      ofileWidth: this.invisibleCanvasRef.current.width,
      ofileHeight: this.invisibleCanvasRef.current.height
    };
    this.props.onImageProcessingDone(imageObject);
    image_1.delete();
    image_2.delete();
    new_image_1.delete();
  }
  render() {
    return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(PreviewImage, {
      imageId: 0,
      image: this.images[0],
      onPointsSet: this.setCorrespondingPoints,
      n_marker: this.n_marker,
      style: {width: "50%", float: "left"}
    }), /* @__PURE__ */ React.createElement(PreviewImage, {
      imageId: 1,
      image: this.images[1],
      onPointsSet: this.setCorrespondingPoints,
      n_marker: this.n_marker,
      style: {width: "50%"}
    }), /* @__PURE__ */ React.createElement("canvas", {
      ref: this.invisibleCanvasRef,
      style: {display: "none"}
    }));
  }
}
export default ImageTransform;
ImageTransform.propTypes = {
  images: PropTypes.array.isRequired,
  onImageProcessingDone: PropTypes.func.isRequired
};
