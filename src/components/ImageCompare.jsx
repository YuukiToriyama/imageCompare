/* ImageCompare.jsx */

import React from "react";
import PropTypes from "prop-types";

// Leaflet
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class OverlayView extends React.Component {
	constructor(props) {
		super(props);
		this.viewer, (this.layers = []), (this.viewerRef = React.createRef());
	}

	componentDidMount() {
		this.viewer = L.map(this.viewerRef.current, {
			center: [0, 0],
			crs: L.CRS.Simple,
			zoom: 0,
		});
		this.props.images.forEach((imageURL, key) => {
			let imageLayer = L.imageOverlay(imageURL, [
				[-100, -100],
				[100, 100],
			]);
			this.layers.push(imageLayer);
		});
		this.layers.forEach((layer) => {
			layer.addTo(this.viewer);
		});
		L.control.layers(this.layers).addTo(this.viewer);
	}

	render() {
		return (
			<div
				ref={this.viewerRef}
				style={{ width: "100%", height: "500px" }}
			></div>
		);
	}
}

class ImageCompare extends React.Component {
	render() {
		return <OverlayView images={this.props.images} />;
	}
}

ImageCompare.propTypes = {
	images: PropTypes.array.isRequired,
	view: PropTypes.number.isRequired,
};
export default ImageCompare;
