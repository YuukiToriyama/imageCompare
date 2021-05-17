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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiL2hvbWUvcnVubmVyL3dvcmsvaW1hZ2VDb21wYXJlL2ltYWdlQ29tcGFyZS9zcmMvY29tcG9uZW50cy9ibG9jay9QcmV2aWV3SW1hZ2UuanN4Il0sCiAgIm1hcHBpbmdzIjogIkFBRUE7QUFDQTtBQUdBO0FBQ0E7QUFVQSwyQkFBMkIsTUFBTSxVQUFVO0FBQUEsRUFDMUMsWUFBWSxPQUFPO0FBQ2xCLFVBQU07QUFDTixTQUFLLFNBQVMsTUFBTTtBQUNwQixTQUFLLE1BQU07QUFDWCxTQUFLLFFBQVE7QUFDYixTQUFLO0FBQ0wsU0FBSyxVQUFVO0FBQUE7QUFBQSxFQUdoQixvQkFBb0I7QUFDbkIsUUFBSSxRQUFRLEtBQUssTUFBTTtBQUN2QixTQUFLLGNBQWMsSUFBSSxFQUFFLGFBQWE7QUFBQSxNQUNyQyxDQUFDLENBQUMsTUFBTSxjQUFjLEdBQUcsQ0FBQyxNQUFNLGFBQWE7QUFBQSxNQUM3QyxDQUFDLE1BQU0sY0FBYyxHQUFHLE1BQU0sYUFBYTtBQUFBO0FBRzVDLFNBQUssTUFBTSxFQUFFLElBQUksS0FBSyxPQUFPLFNBQVM7QUFBQSxNQUNyQyxRQUFRLENBQUMsR0FBRztBQUFBLE1BQ1osV0FBVyxLQUFLLFlBQVksSUFBSTtBQUFBLE1BQ2hDLEtBQUssRUFBRSxJQUFJO0FBQUE7QUFFWixTQUFLLFFBQVEsRUFBRSxhQUFhLE1BQU0sV0FBVyxLQUFLO0FBQ2xELFNBQUssTUFBTSxNQUFNLEtBQUs7QUFDdEIsU0FBSyxJQUFJLFVBQVUsS0FBSztBQUl4QixhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssTUFBTSxVQUFVLEtBQUs7QUFDN0MsVUFBSSxVQUFVLEVBQUUsUUFBUTtBQUFBLFFBQ3ZCLE1BQU0sK0JBQStCLEtBQUssTUFBTSxXQUFXO0FBQUEsUUFDM0QsV0FBVztBQUFBO0FBRVosVUFBSSxDQUFFLEtBQUssT0FBUSxLQUFLLElBQUk7QUFDNUIsWUFBTSxNQUFNLEtBQUssS0FBSyxJQUFLLElBQUssS0FBSSxLQUFLLEtBQUssS0FBTSxLQUFLLE1BQU07QUFDL0QsWUFBTSxNQUFNLEtBQUssS0FBSyxJQUFLLElBQUssS0FBSSxLQUFLLEtBQUssS0FBTSxLQUFLLE1BQU07QUFDL0QsVUFBSSxTQUFTLElBQUksRUFBRSxPQUFPLENBQUMsS0FBSyxNQUFNO0FBQUEsUUFDckMsV0FBVztBQUFBLFFBQ1gsTUFBTTtBQUFBO0FBRVAsV0FBSyxRQUFRLEtBQUs7QUFBQTtBQUduQixVQUFNLHlCQUF5QixNQUFNO0FBQ3BDLFVBQUkscUJBQXFCLEtBQUssUUFBUSxJQUFJLENBQUMsV0FBVztBQUNyRCxZQUFJLFNBQVMsT0FBTztBQUVwQixZQUFJLFFBQVE7QUFBQSxVQUNYLEdBQUcsS0FBSyxNQUFNLE1BQU0sYUFBYSxJQUFJLE9BQU87QUFBQSxVQUM1QyxHQUFHLEtBQUssTUFBTSxNQUFNLGNBQWMsSUFBSSxPQUFPO0FBQUE7QUFFOUMsZUFBTztBQUFBO0FBRVIsV0FBSyxNQUFNLFlBQVksb0JBQW9CLEtBQUssTUFBTTtBQUFBO0FBRXZEO0FBQ0EsU0FBSyxRQUFRLFFBQVEsQ0FBQyxXQUFXO0FBQ2hDLGFBQU8sR0FBRyxXQUFXLENBQUMsVUFBVTtBQUcvQjtBQUFBO0FBRUQsYUFBTyxNQUFNLEtBQUs7QUFBQTtBQUFBO0FBQUEsRUFJcEIsU0FBUztBQUNSLFdBQU8sb0NBQUMsT0FBRDtBQUFBLE1BQUssS0FBSyxLQUFLO0FBQUEsTUFBUSxPQUFPLENBQUUsT0FBTyxLQUFLLE1BQU0sTUFBTSxPQUFPLFFBQVEsUUFBUSxPQUFPLEtBQUssTUFBTSxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBSWhILGFBQWEsWUFBWTtBQUFBLEVBQ3hCLE9BQU8sVUFBVSxPQUFPO0FBQUEsRUFDeEIsU0FBUyxVQUFVLE9BQU87QUFBQSxFQUMxQixPQUFPLFVBQVU7QUFBQTtBQUVsQixhQUFhLGVBQWU7QUFBQSxFQUMzQixPQUFPLENBQUUsT0FBUyxPQUFPLFFBQVEsUUFBUSxPQUFPO0FBQUE7QUFHakQsZUFBZTsiLAogICJuYW1lcyI6IFtdCn0K
