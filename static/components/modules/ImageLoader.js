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
