/* main.js */

// react
import React from "react";
import ReactDOM from "react-dom";

// leaflet
//import Leaflet from "leaflet";
//import {MapContainer, TileLayer} from "react-leaflet";

// opencv
//import "./opencv";

// styleSheet
import "./style.css";
//import "../node_modules/leaflet/dist/leaflet.css"; // ./style.cssによって間接的に読み込んでいる 

// Appコンポーネントを読み込む
import App from "./App.jsx";
ReactDOM.render(<App/>, document.getElementById("app"));
