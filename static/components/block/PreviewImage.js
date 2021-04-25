import React from "../../../_snowpack/pkg/react.js";
import PropTypes from "../../../_snowpack/pkg/prop-types.js";
import "../../../_snowpack/pkg/leaflet/dist/leaflet.css.proxy.js";
import L from "../../../_snowpack/pkg/leaflet.js";
class PreviewImage extends React.Component {
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.map = null;
    this.layer = null;
    this.imageBounds;
    this.markers = [];
  }
  componentDidMount() {
    let image = this.props.image;
    this.imageBounds = new L.latLngBounds([
      [-image.ofileHeight / 2, -image.ofileWidth / 2],
      [image.ofileHeight / 2, image.ofileWidth / 2]
    ]);
    this.map = L.map(this.mapRef.current, {
      center: [0, 0],
      maxBounds: this.imageBounds.pad(0.3),
      crs: L.CRS.Simple
    });
    this.layer = L.imageOverlay(image.ofileData, this.imageBounds);
    this.layer.addTo(this.map);
    this.map.fitBounds(this.imageBounds);
    for (var i = 0; i < this.props.n_marker; i++) {
      let divIcon = L.divIcon({
        html: `<div class="bg-round"><span>${this.props.n_marker - i}</span></div>`,
        className: "divicon"
      });
      let {lat, lng} = this.map.getCenter();
      lat = lat + 50 * Math.cos(2 * (i + 1) * Math.PI / this.props.n_marker);
      lng = lng + 50 * Math.sin(2 * (i + 1) * Math.PI / this.props.n_marker);
      let marker = new L.marker([lat, lng], {
        draggable: true,
        icon: divIcon
      });
      this.markers.push(marker);
    }
    const setCorrespondingPoints = () => {
      let correspondingPoint = this.markers.map((marker) => {
        let latlng = marker.getLatLng();
        let point = {
          x: this.props.image.ofileWidth / 2 + latlng.lng,
          y: this.props.image.ofileHeight / 2 - latlng.lat
        };
        return point;
      });
      this.props.onPointsSet(correspondingPoint, this.props.imageId);
    };
    setCorrespondingPoints();
    this.markers.forEach((marker) => {
      marker.on("moveend", (event) => {
        setCorrespondingPoints();
      });
      marker.addTo(this.map);
    });
  }
  render() {
    return /* @__PURE__ */ React.createElement("div", {
      ref: this.mapRef,
      style: {width: this.props.style.width, height: "80vh", float: this.props.style.float}
    });
  }
}
PreviewImage.propTypes = {
  image: PropTypes.object.isRequired,
  imageId: PropTypes.number.isRequired,
  style: PropTypes.object
};
PreviewImage.defaultProps = {
  style: {width: "50%", height: "80vh", float: "none"}
};
export default PreviewImage;
