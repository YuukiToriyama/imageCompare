/* PreviewImageOnLeaflet.jsx */

import React from "react";

import "leaflet/dist/leaflet.css";
import {
	MapContainer,
	ImageOverlay,
	Marker
} from "react-leaflet";
import L from "leaflet";

class PreviewImageOnLeaflet extends React.Component {
	/*
	 * Usage:
	 * file = {
	 * 	name: "hoge.jpg",
	 * 	type: "image/jpeg",
	 * 	base64: "data:image/jpeg;....",
	 *	...
	 * }
	 * <PreviewImageOnLeaflet image={file} />
	 */
	constructor(props) {
		super(props);
		this.state = {
			width: 100,
			height: 100
		}
		this.mapRef = React.createRef();
		this.layerRef = React.createRef();

	}

	render() {
		let img = new Image();
		img.src = this.props.image.base64;
		img.onload = () => {
			this.setState({
				width: img.width,
				height: img.height
			})
		};


		return (
			<MapContainer
				ref={this.mapRef}
				maxBounds={L.latLngBounds([0,0], [this.state.height, this.state.width])}
				center={[0, 0]}
				crs={L.CRS.Simple}
				style={{width: "100%", height: "300px"}}
			>
				<ImageOverlay
					ref={this.layerRef}
					url={this.props.image.base64}
					bounds={L.latLngBounds([-this.state.height / 2, -this.state.width / 2], [this.state.height, this.state.width / 2])}
				></ImageOverlay>
			</MapContainer>
		)
	}
}

export default PreviewImageOnLeaflet;
