import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import {
  Box,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody
} from "../../../_snowpack/pkg/@material-ui/core.js";
import ReactImageBase64 from "../../../_snowpack/pkg/react-image-base64.js";
const ImageLoader = (props) => {
  const [images, setImages] = React.useState({data: []});
  const fileInputCallback = React.useCallback((file) => {
    let img = new Image();
    img.src = file.ofileData;
    img.onload = () => {
      file["ofileWidth"] = img.width;
      file["ofileHeight"] = img.height;
      let filelist = images.data;
      filelist.push(file);
      setImages({
        data: filelist
      });
      if (images.data.length >= 2) {
        props.onInputImageChange(images.data.slice(0, 2));
      }
    };
  });
  return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(ReactImageBase64, {
    thumbnail_size: 100,
    drop: true,
    dropText: "ファイルをdrug&dropしてください",
    multiple: true,
    handleChange: (data) => {
      fileInputCallback(data);
    }
  }), /* @__PURE__ */ React.createElement(TableContainer, {
    component: Paper
  }, /* @__PURE__ */ React.createElement(Table, {
    stickyHeader: true,
    size: "small"
  }, /* @__PURE__ */ React.createElement(TableHead, null, /* @__PURE__ */ React.createElement(TableRow, null, /* @__PURE__ */ React.createElement(TableCell, null, "ファイル名"), /* @__PURE__ */ React.createElement(TableCell, null, "画像"), /* @__PURE__ */ React.createElement(TableCell, null, "縦(px)"), /* @__PURE__ */ React.createElement(TableCell, null, "横(px)"))), /* @__PURE__ */ React.createElement(TableBody, null, images.data.map((image, index) => /* @__PURE__ */ React.createElement(TableRow, {
    key: index
  }, /* @__PURE__ */ React.createElement(TableCell, null, image.fileName), /* @__PURE__ */ React.createElement(TableCell, null, /* @__PURE__ */ React.createElement("img", {
    src: image.fileData
  })), /* @__PURE__ */ React.createElement(TableCell, null, image.ofileWidth), /* @__PURE__ */ React.createElement(TableCell, null, image.ofileHeight)))))));
};
export default ImageLoader;
ImageLoader.propTypes = {
  onInputImageChange: PropTypes.func.isRequired
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9tb2R1bGVzL0ltYWdlTG9hZGVyLmpzeCJdLAogICJtYXBwaW5ncyI6ICJBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBRUEsTUFBTSxjQUFjLENBQUMsVUFBVTtBQUM5QixRQUFNLENBQUMsUUFBUSxhQUFhLE1BQU0sU0FBUyxDQUFFLE1BQU07QUFFbkQsUUFBTSxvQkFBb0IsTUFBTSxZQUFZLENBQUMsU0FBUztBQUNyRCxRQUFJLE1BQU0sSUFBSTtBQUNkLFFBQUksTUFBTSxLQUFLO0FBR2YsUUFBSSxTQUFTLE1BQU07QUFDbEIsV0FBSyxnQkFBZ0IsSUFBSTtBQUN6QixXQUFLLGlCQUFpQixJQUFJO0FBRTFCLFVBQUksV0FBVyxPQUFPO0FBQ3RCLGVBQVMsS0FBSztBQUNkLGdCQUFVO0FBQUEsUUFDVCxNQUFNO0FBQUE7QUFHUCxVQUFJLE9BQU8sS0FBSyxVQUFVLEdBQUc7QUFDNUIsY0FBTSxtQkFBbUIsT0FBTyxLQUFLLE1BQU0sR0FBRztBQUFBO0FBQUE7QUFBQTtBQWtCakQsU0FDQyxvQ0FBQyxLQUFELE1BQ0Msb0NBQUMsa0JBQUQ7QUFBQSxJQUNDLGdCQUFnQjtBQUFBLElBQ2hCLE1BQU07QUFBQSxJQUNOLFVBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxJQUNWLGNBQWMsQ0FBQyxTQUFTO0FBQ3ZCLHdCQUFrQjtBQUFBO0FBQUEsTUFHcEIsb0NBQUMsZ0JBQUQ7QUFBQSxJQUFnQixXQUFXO0FBQUEsS0FDMUIsb0NBQUMsT0FBRDtBQUFBLElBQU8sY0FBWTtBQUFBLElBQUMsTUFBSztBQUFBLEtBQ3hCLG9DQUFDLFdBQUQsTUFDQyxvQ0FBQyxVQUFELE1BQ0Msb0NBQUMsV0FBRCxNQUFXLFVBQ1gsb0NBQUMsV0FBRCxNQUFXLE9BQ1gsb0NBQUMsV0FBRCxNQUFXLFVBQ1gsb0NBQUMsV0FBRCxNQUFXLFlBR2Isb0NBQUMsV0FBRCxNQUNFLE9BQU8sS0FBSyxJQUFJLENBQUMsT0FBTyxVQUN6QixvQ0FBQyxVQUFEO0FBQUEsSUFBVSxLQUFLO0FBQUEsS0FDZCxvQ0FBQyxXQUFELE1BQVksTUFBTSxXQUNsQixvQ0FBQyxXQUFELE1BQVcsb0NBQUMsT0FBRDtBQUFBLElBQUssS0FBSyxNQUFNO0FBQUEsT0FDM0Isb0NBQUMsV0FBRCxNQUFZLE1BQU0sYUFDbEIsb0NBQUMsV0FBRCxNQUFZLE1BQU07QUFBQTtBQVN6QixlQUFlO0FBRWYsWUFBWSxZQUFZO0FBQUEsRUFDdkIsb0JBQW9CLFVBQVUsS0FBSztBQUFBOyIsCiAgIm5hbWVzIjogW10KfQo=
