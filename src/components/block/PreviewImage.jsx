/* PreviewImage.jsx */

import React from 'react';
import PropTypes from 'prop-types';

// Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

/*
import markerIcon from "leaflet/dist/images/marker-icon.png";
const defaultIcon = L.icon({
	iconUrl: markerIcon,
	iconSize: [25, 35],
});
*/

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
			[image.ofileHeight / 2, image.ofileWidth / 2],
		]);

		this.map = L.map(this.mapRef.current, {
			center: [0, 0],
			maxBounds: this.imageBounds.pad(0.3),
			crs: L.CRS.Simple,
		});
		this.layer = L.imageOverlay(image.ofileData, this.imageBounds);
		this.layer.addTo(this.map);
		this.map.fitBounds(this.imageBounds);

		// マーカーを設置
		// これを動かして位置合わせをする
		for (var i = 0; i < this.props.n_marker; i++) {
			let divIcon = L.divIcon({
				html: `<div class="bg-round"><span>${this.props.n_marker - i}</span></div>`,
				className: 'divicon',
			});
			let { lat, lng } = this.map.getCenter();
			lat = lat + 50 * Math.cos((2 * (i + 1) * Math.PI) / this.props.n_marker);
			lng = lng + 50 * Math.sin((2 * (i + 1) * Math.PI) / this.props.n_marker);
			let marker = new L.marker([lat, lng], {
				draggable: true,
				icon: divIcon,
			});
			this.markers.push(marker);
		}

		const setCorrespondingPoints = () => {
			let correspondingPoint = this.markers.map((marker) => {
				let latlng = marker.getLatLng();
				// CRS.Simpleから通常の原点座標系へ変換している
				let point = {
					x: this.props.image.ofileWidth / 2 + latlng.lng,
					y: this.props.image.ofileHeight / 2 - latlng.lat,
				};
				return point;
			});
			this.props.onPointsSet(correspondingPoint, this.props.imageId);
		};
		setCorrespondingPoints();
		this.markers.forEach((marker) => {
			marker.on('moveend', (event) => {
				//let position = event.target.getLatLng();
				//console.log(position);
				setCorrespondingPoints();
			});
			marker.addTo(this.map);
		});
	}

	render() {
		return <div ref={this.mapRef} style={{ width: this.props.style.width, height: '80vh', float: this.props.style.float }}></div>;
	}
}

PreviewImage.propTypes = {
	image: PropTypes.object.isRequired,
	imageId: PropTypes.number.isRequired,
	style: PropTypes.object
};
PreviewImage.defaultProps = {
	style: { "width": "50%", height: "80vh", float: "none" }
};

export default PreviewImage;