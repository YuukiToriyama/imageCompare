/* PreviewImage.jsx */

import React from "react";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

class PreviewImage extends React.Component {
	constructor(props) {
		super(props);
		this.mapRef = React.createRef();
		this.state = {
			width: 0,
			height: 0,
		}
		this.map = null;
		this.layer = null;
		this.imageBounds;
	}

	componentDidMount() {
		let image = this.props.image;
		this.imageBounds = new L.latLngBounds([[-image.height / 2, -image.width / 2], [image.height / 2, image.width / 2]]);

		this.map = L.map(this.mapRef.current, {
			center: [0,0],
			maxBounds: this.imageBounds.pad(0.3),
			crs: L.CRS.Simple
		});
		this.layer = L.imageOverlay(image.base64, this.imageBounds);
		this.layer.addTo(this.map);
		this.map.fitBounds(this.imageBounds);
		//this.layers[0] = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
		//this.layers[0].addTo(this.map);
		//this.map.fitBounds([[35,135], [37, 136]]);
	}

	render() {
		return (
			<div ref={this.mapRef} style={{width: "100%", height: "300px"}}></div>
		)
	}
}

export default PreviewImage;
