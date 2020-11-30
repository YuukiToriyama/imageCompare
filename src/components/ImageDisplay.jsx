/* ImageDisplay.jsx */

import React from "react";
import "leaflet/dist/leaflet.css";
/*
import {
    MapContainer,
    ImageOverlay,
    //Marker
} from "react-leaflet";
*/
import L from "leaflet";
/*
import markerIcon from "leaflet/dist/images/marker-icon.png";
const popupIcon = L.icon({
    iconUrl: markerIcon,
    iconSize: [25,35]
});
*/

class ImageDisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 0, 
            lng: 0,
            zoom: 0,
            crs: L.CRS.Simple
        }
    }

    render() {
        const image = this.props.image;
        return (
            /*
            <MapContainer center={[this.state.lat, this.state.lng]} zoom={this.state.zoom} crs={this.state.crs} style={{width: "100%", height: "300px"}}>
                <ImageOverlay
                    attribution="imageCompare"
                    url={image.url}
                    bounds={L.latLngBounds([-image.width / 2, -image.height / 2], [image.width / 2, image.height / 2])}
                >
                </ImageOverlay>
            </MapContainer>
            */
           <div></div>
        )
    }
}

export default ImageDisplay;