import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import Switch from "../../../_snowpack/pkg/@material-ui/core/Switch.js";
import FormControlLabel from "../../../_snowpack/pkg/@material-ui/core/FormControlLabel.js";
import "../../../_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js";
import L from "../../../_snowpack/pkg/leaflet.js";
import "../../../_snowpack/pkg/leaflet.control.opacity/dist/L.Control.Opacity.css.proxy.js";
import "../../../_snowpack/pkg/leaflet.control.opacity.js";
import "../../../_snowpack/pkg/leaflet.sync.js";
const imageObjectToImageLayer = (imageObject) => {
  let fileName = imageObject.fileName;
  let width = imageObject.ofileWidth;
  let height = imageObject.ofileHeight;
  let imageLayer = L.imageOverlay(imageObject.ofileData, [
    [-1 * height / 2, -1 * width / 2],
    [height / 2, width / 2]
  ]);
  return {
    fileName,
    imageLayer
  };
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
      label: "透明度を変更",
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
      toggleLabel: "オーバーレイ表示"
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView() {
    this.setState((prevState) => ({
      view: !prevState.view,
      toggleLabel: prevState.view == true ? "二画面表示" : "オーバーレイ表示"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9tb2R1bGVzL0ltYWdlQ29tcGFyZS5qc3giXSwKICAibWFwcGluZ3MiOiAiQUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQSxNQUFNLDBCQUEwQixDQUFDLGdCQUFnQjtBQVNoRCxNQUFJLFdBQVcsWUFBWTtBQUMzQixNQUFJLFFBQVEsWUFBWTtBQUN4QixNQUFJLFNBQVMsWUFBWTtBQUN6QixNQUFJLGFBQWEsRUFBRSxhQUFhLFlBQVksV0FBVztBQUFBLElBQ3RELENBQUUsS0FBSyxTQUFVLEdBQUksS0FBSyxRQUFTO0FBQUEsSUFDbkMsQ0FBQyxTQUFTLEdBQUcsUUFBUTtBQUFBO0FBRXRCLFNBQU87QUFBQSxJQUNOO0FBQUEsSUFDQTtBQUFBO0FBQUE7QUFLRiwwQkFBMEIsTUFBTSxVQUFVO0FBQUEsRUFDekMsWUFBWSxPQUFPO0FBQ2xCLFVBQU07QUFDTixTQUFLO0FBQ0wsU0FBSyxTQUFTO0FBQ2QsU0FBSyxZQUFZLE1BQU07QUFBQTtBQUFBLEVBR3hCLG9CQUFvQjtBQUNuQixTQUFLLFNBQVMsRUFBRSxJQUFJLEtBQUssVUFBVSxTQUFTO0FBQUEsTUFDM0MsUUFBUSxDQUFDLEdBQUc7QUFBQSxNQUNaLEtBQUssRUFBRSxJQUFJO0FBQUEsTUFDWCxNQUFNO0FBQUE7QUFHUCxTQUFLLE1BQU0sT0FBTyxRQUFRLENBQUMsZ0JBQWdCO0FBQzFDLFVBQUksQ0FBRSxVQUFVLGNBQWUsd0JBQXdCO0FBQ3ZELFdBQUssT0FBTyxZQUFZO0FBQUE7QUFFekIsV0FBTyxLQUFLLEtBQUssUUFBUSxRQUFRLENBQUMsUUFBUTtBQUN6QyxXQUFLLE9BQU8sU0FBUyxLQUFLLE9BQU87QUFBQTtBQUdsQyxNQUFFLFFBQVEsT0FBTyxJQUFJLEtBQUssUUFBUTtBQUFBLE1BQ2pDLFdBQVc7QUFBQSxPQUNULE1BQU0s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
