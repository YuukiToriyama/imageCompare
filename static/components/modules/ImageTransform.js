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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9tb2R1bGVzL0ltYWdlVHJhbnNmb3JtLmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUtBO0FBQ0E7QUFDQTtBQUdBO0FBRUEsTUFBTSxZQUFZLENBQUMsTUFBTSxNQUFNLFVBQVUsVUFBVSxhQUFhO0FBSS9ELFFBQU0sT0FBTyxHQUFHLGFBQWEsVUFBVSxHQUFHLEdBQUcsUUFBUTtBQUNyRCxRQUFNLE9BQU8sR0FBRyxhQUFhLFVBQVUsR0FBRyxHQUFHLFFBQVE7QUFHckQsUUFBTSxxQkFBcUIsQ0FBQyxTQUFTLFNBQVMsV0FBVztBQUV4RCxRQUFJLGFBQWEsSUFBSSxHQUFHLElBQUksR0FBRyxHQUFHLEdBQUc7QUFDckMsaUJBQWEsR0FBRyxlQUFlLFNBQVMsU0FBUztBQUNqRCxXQUFPO0FBQUE7QUFHUixNQUFJLElBQUksbUJBQW1CLE1BQU0sTUFBTTtBQUN2QyxNQUFJLE1BQU0sR0FBRyxJQUFJLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxHQUFHO0FBRWhELEtBQUcsZ0JBQ0YsTUFDQSxLQUNBLEdBQ0EsSUFBSSxHQUFHLEtBQUssSUFBSSxNQUFNLElBQUksT0FDMUIsR0FBRyxjQUNILEdBQUcsaUJBQ0gsSUFBSSxHQUFHO0FBSVIsU0FBTztBQUFBO0FBSVIsNkJBQTZCLE1BQU0sVUFBVTtBQUFBLEVBQzVDLFlBQVksT0FBTztBQUNsQixVQUFNO0FBQ04sU0FBSyxTQUFTLEtBQUssTUFBTTtBQUN6QixTQUFLLFFBQVE7QUFBQSxNQUNaLDBCQUEwQixDQUFDLE1BQU07QUFBQTtBQUVsQyxTQUFLLHlCQUF5QixLQUFLLHVCQUF1QixLQUFLO0FBQy9ELFNBQUsscUJBQXFCLE1BQU07QUFDaEMsU0FBSyxXQUFXO0FBQUE7QUFBQSxFQUdqQix1QkFBdUIscUJBQXFCLElBQUk7QUFDL0MsUUFBSSxRQUFRLEtBQUssTUFBTTtBQUN2QixVQUFNLE1BQU07QUFDWixTQUFLLFNBQVM7QUFBQSxNQUNiLDBCQUEwQjtBQUFBO0FBQUE7QUFBQSxFQUk1Qix1QkFBdUI7QUFFdEIsVUFBTSx3QkFBd0IsS0FBSyxNQUFNLHlCQUF5QixHQUNoRSxJQUFJLENBQUMsU0FBUztBQUNkLGFBQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHO0FBQUEsT0FFeEI7QUFDRixVQUFNLHdCQUF3QixLQUFLLE1BQU0seUJBQXlCLEdBQ2hFLElBQUksQ0FBQyxTQUFTO0FBQ2QsYUFBTyxDQUFDLEtBQUssR0FBRyxLQUFLLEdBQUc7QUFBQSxPQUV4QjtBQUVGLFVBQU0sbUJBQW1CLENBQUMsYUFBWTtBQUNyQyxVQUFJLGFBQWEsSUFBSTtBQUNyQixpQkFBVyxNQUFNO0FBQ2pCLGFBQU87QUFBQTtBQUdSLFFBQUksVUFBVSxHQUFHLE9BQU8saUJBQWlCLEtBQUssT0FBTyxHQUFHO0FBQ3hELFFBQUksVUFBVSxHQUFHLE9BQU8saUJBQWlCLEtBQUssT0FBTyxHQUFHO0FBR3hELFFBQUksY0FBYyxVQUFVLFNBQVMsU0FBUyx1QkFBdUIsdUJBQXVCLEtBQUs7QUFFakcsT0FBRyxPQUFPLEtBQUssbUJBQW1CLFNBQVM7QUFDM0MsUUFBSSxVQUFVLEtBQUssbUJBQW1CLFFBQVEsVUFBVSxhQUFhO0FBQ3JFLFVBQU0sY0FBYztBQUFBLE1BQ25CLFVBQVUsS0FBSyxPQUFPLEdBQUcsV0FBVztBQUFBLE1BQ3BDLFdBQVc7QUFBQSxNQUNYLFlBQVksS0FBSyxtQkFBbUIsUUFBUTtBQUFBLE1BQzVDLGFBQWEsS0FBSyxtQkFBbUIsUUFBUTtBQUFBO0FBRzlDLFNBQUssTUFBTSxzQkFBc0I7QUFFakMsWUFBUTtBQUNSLFlBQVE7QUFDUixnQkFBWTtBQUFBO0FBQUEsRUFHYixTQUFTO0FBQ1IsV0FDQyxvQ0FBQyxLQUFELE1BQ0Msb0NBQUMsY0FBRDtBQUFBLE1BQ0MsU0FBUztBQUFBLE1BQ1QsT0FBTyxLQUFLLE9BQU87QUFBQSxNQUNuQixhQUFhLEtBQUs7QUFBQSxNQUNsQixVQUFVLEtBQUs7QUFBQSxNQUNmLE9BQU8sQ0FBRSxPQUFPLE9BQU8sT0FBTztBQUFBLFFBRS9CLG9DQUFDLGNBQUQ7QUFBQSxNQUNDLFNBQVM7QUFBQSxNQUNULE9BQU8sS0FBSyxPQUFPO0FBQUEsTUFDbkIsYUFBYSxLQUFLO0FBQUEsTUFDbEIsVUFBVSxLQUFLO0FBQUEsTUFDZixPQUFPLENBQUUsT0FBTztBQUFBLFFBRWpCLG9DQUFDLFVBQUQ7QUFBQSxNQUFRLEtBQUssS0FBSztBQUFBLE1BQW9CLE9BQU8sQ0FBRSxTQUFTO0FBQUE7QUFBQTtBQUFBO0FBTTVELGVBQWU7QUFFZixlQUFlLFlBQVk7QUFBQSxFQUMxQixRQUFRLFVBQVUsTUFBTTtBQUFBLEVBQ3hCLHVCQUF1QixVQUFVLEtBQUs7QUFBQTsiLAogICJuYW1lcyI6IFtdCn0K
