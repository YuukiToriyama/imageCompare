/* PreviewImage.jsx */

import React from "react";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

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
		this.state = {
			width: 0,
			height: 0,
		};
		this.map = null;
		this.layer = null;
		this.imageBounds;
		this.markers = [];
	}

	componentDidMount() {
		let image = this.props.image;
		this.imageBounds = new L.latLngBounds([
			[-image.height / 2, -image.width / 2],
			[image.height / 2, image.width / 2],
		]);

		this.map = L.map(this.mapRef.current, {
			center: [0, 0],
			maxBounds: this.imageBounds.pad(0.3),
			crs: L.CRS.Simple,
		});
		this.layer = L.imageOverlay(image.base64, this.imageBounds);
		this.layer.addTo(this.map);
		this.map.fitBounds(this.imageBounds);

		// マーカーを設置
		// これを動かして位置合わせをする
		for (var i = 0; i < 10; i++) {
			let divIcon = L.divIcon({
				html: `<div class="bg-round"><span>${10 - i}</span></div>`,
				className: "divicon",
			});
			let center = this.map.getCenter();
			let marker = new L.marker(center, {
				draggable: true,
				icon: divIcon,
			});
			this.markers.push(marker);
		}
		this.markers.forEach((marker) => {
			marker.on("moveend", (event) => {
				let position = event.target.getLatLng();
				console.log(position);
			});
			marker.addTo(this.map);
		});
	}

	render() {
		return (
			<div ref={this.mapRef} style={{ width: "100%", height: "300px" }}></div>
		);
	}
}

export default PreviewImage;
