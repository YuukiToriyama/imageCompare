import React from "../../_snowpack/pkg/react.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
import {Box, IconButton} from "../../_snowpack/pkg/@material-ui/core.js";
import {PhotoCamera} from "../../_snowpack/pkg/@material-ui/icons.js";
import FileInputComponent from "../../_snowpack/pkg/react-file-input-previews-base64.js";
class ImageLoader extends React.Component {
  fileInputCallback = (file) => {
    let imageObject = file;
    let img = new Image();
    img.src = imageObject.base64;
    img.onload = () => {
      imageObject["width"] = img.width;
      imageObject["height"] = img.height;
      this.props.onInputImageChange(imageObject);
    };
  };
  render() {
    return /* @__PURE__ */ React.createElement(Box, null, /* @__PURE__ */ React.createElement(FileInputComponent, {
      labelText: this.props.loaderId + 1 + "\u679A\u76EE",
      imagePreview: true,
      multiple: false,
      callbackFunction: (file) => {
        console.log(file.name + " has been loaded.");
        this.fileInputCallback(file);
      },
      buttonComponent: /* @__PURE__ */ React.createElement(IconButton, {
        color: "primary",
        "aria-label": "upload picture",
        component: "span"
      }, /* @__PURE__ */ React.createElement(PhotoCamera, null)),
      textFieldComponent: /* @__PURE__ */ React.createElement("input", {
        type: "text"
      }),
      accept: "image/*"
    }));
  }
}
export default ImageLoader;
ImageLoader.propTypes = {
  loaderId: PropTypes.number.isRequired,
  onInputImageChange: PropTypes.func.isRequired
};
//# sourceMappingURL=ImageLoader.js.map
