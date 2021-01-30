import React from "../../_snowpack/pkg/react.js";
import PropTypes from "../../_snowpack/pkg/prop-types.js";
import Switch from "../../_snowpack/pkg/@material-ui/core/Switch.js";
import FormControlLabel from "../../_snowpack/pkg/@material-ui/core/FormControlLabel.js";
import "../../_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js";
import L from "../../_snowpack/pkg/leaflet.js";
import "../../_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css.proxy.js";
import "../../_snowpack/pkg/leaflet.control.opacity.js";
import "../../_snowpack/pkg/leaflet.sync.js";
const imageObjectToImageLayer = (imageObject) => {
  let fileName = imageObject.name;
  let width = imageObject.width;
  let height = imageObject.height;
  let imageLayer = L.imageOverlay(imageObject.base64, [
    [-1 * height / 2, -1 * width / 2],
    [height / 2, width / 2]
  ]);
  return {fileName, imageLayer};
};
class OverlayView extends React.Component {
  constructor(props) {
    super(props);
    this.viewer;
    this.layers = {};
    this.viewerRef = React.createRef();
  }
  componentDidMount() {
    this.viewer = L.map(this.viewerRef.current, {
      center: [0, 0],
      crs: L.CRS.Simple,
      zoom: 0
    });
    this.props.images.forEach((imageObject) => {
      let {fileName, imageLayer} = imageObjectToImageLayer(imageObject);
      this.layers[fileName] = imageLayer;
    });
    Object.keys(this.layers).forEach((key) => {
      this.viewer.addLayer(this.layers[key]);
    });
    L.control.layers({}, this.layers, {
      collapsed: false
    }).addTo(this.viewer);
    L.control.opacity(this.layers, {
      label: "\u900F\u660E\u5EA6\u3092\u5909\u66F4",
      collapsed: false
    }).addTo(this.viewer);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      ref: this.viewerRef,
      style: {width: "100%", height: "90vh"}
    });
  }
}
class MultipleView extends React.Component {
  constructor(props) {
    super(props);
    this.viewer1;
    this.viewer2;
    this.viewer1Ref = React.createRef();
    this.viewer2Ref = React.createRef();
    this.imageLayers = [];
  }
  componentDidMount() {
    this.props.images.forEach((imageObject, key) => {
      let {fileName, imageLayer} = imageObjectToImageLayer(imageObject);
      let that = {};
      that[fileName] = imageLayer;
      this.imageLayers.push(that);
    });
    this.viewer1 = L.map(this.viewer1Ref.current, {
      center: [0, 0],
      zoom: 0,
      crs: L.CRS.Simple
    });
    L.control.layers({}, this.imageLayers[0], {collapsed: false}).addTo(this.viewer1);
    this.viewer1.addLayer(Object.values(this.imageLayers[0])[0]);
    this.viewer2 = L.map(this.viewer2Ref.current, {
      center: [0, 0],
      zoom: 0,
      crs: L.CRS.Simple
    });
    L.control.layers({}, this.imageLayers[1], {collapsed: false}).addTo(this.viewer2);
    this.viewer2.addLayer(Object.values(this.imageLayers[1])[0]);
    this.viewer1.sync(this.viewer2);
    this.viewer2.sync(this.viewer1);
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", {
      ref: this.viewer1Ref,
      style: {width: "50%", height: "80vh", float: "left"}
    }), /* @__PURE__ */ React.createElement("div", {
      ref: this.viewer2Ref,
      style: {width: "50%", height: "80vh"}
    }));
  }
}
class ImageCompare extends React.Component {
  constructor(props) {
    super(props);
    this.OVERLAY = true;
    this.MULTIPLE = false;
    this.state = {
      view: this.OVERLAY,
      toggleLabel: "\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u8868\u793A"
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView() {
    this.setState((prevState) => ({
      view: !prevState.view,
      toggleLabel: prevState.view == true ? "\u4E8C\u753B\u9762\u8868\u793A" : "\u30AA\u30FC\u30D0\u30FC\u30EC\u30A4\u8868\u793A"
    }));
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(FormControlLabel, {
      control: /* @__PURE__ */ React.createElement(Switch, {
        checked: this.state.view,
        onChange: this.changeView
      }),
      label: this.state.toggleLabel
    }), this.state.view === this.OVERLAY && /* @__PURE__ */ React.createElement(OverlayView, {
      images: this.props.images
    }), this.state.view === this.MULTIPLE && /* @__PURE__ */ React.createElement(MultipleView, {
      images: this.props.images
    }));
  }
}
ImageCompare.propTypes = {
  images: PropTypes.array.isRequired
};
export default ImageCompare;
//# sourceMappingURL=ImageCompare.js.map
