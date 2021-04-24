/* ImageCompare.jsx */

import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// Leaflet
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Leaflet.Control.Opacity
import 'leaflet.control.opacity/dist/L.Control.Opacity.css';
import 'leaflet.control.opacity';

// Leaflet.Sync
import 'leaflet.sync';

const imageObjectToImageLayer = (imageObject) => {
	/* 引数imageObjectとして想定されるもの
	{
		name: "IMG_1192.jpg",
		width: 1000,
		height: 670,
		base64: "data:image/jpg;base64,xxxxx..."
	}
	*/
	let fileName = imageObject.name;
	let width = imageObject.width;
	let height = imageObject.height;
	let imageLayer = L.imageOverlay(imageObject.base64, [
		[(-1 * height) / 2, (-1 * width) / 2],
		[height / 2, width / 2],
	]);
	return { fileName: fileName, imageLayer: imageLayer };
};

// 二枚の画像をオーバーレイして表示するモード
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
			zoom: 0,
		});

		this.props.images.forEach((imageObject) => {
			let { fileName, imageLayer } = imageObjectToImageLayer(imageObject);
			this.layers[fileName] = imageLayer;
		});
		Object.keys(this.layers).forEach((key) => {
			this.viewer.addLayer(this.layers[key]);
		});

		L.control
			.layers({}, this.layers, {
				collapsed: false,
			})
			.addTo(this.viewer);
		L.control
			.opacity(this.layers, {
				label: '透明度を変更',
				collapsed: false,
			})
			.addTo(this.viewer);
	}

	render() {
		return <div ref={this.viewerRef} style={{ width: '100%', height: '90vh' }}></div>;
	}
}

// 二枚の画像を並べて表示するモード
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
		// propsから与えられた画像の読み込み
		this.props.images.forEach((imageObject, key) => {
			let { fileName, imageLayer } = imageObjectToImageLayer(imageObject);
			let that = {};
			that[fileName] = imageLayer;
			this.imageLayers.push(that);
		});
		// 左画面を作成
		this.viewer1 = L.map(this.viewer1Ref.current, {
			center: [0, 0],
			zoom: 0,
			crs: L.CRS.Simple,
		});
		L.control.layers({}, this.imageLayers[0], { collapsed: false }).addTo(this.viewer1);
		this.viewer1.addLayer(Object.values(this.imageLayers[0])[0]);
		// 右画面を作成
		this.viewer2 = L.map(this.viewer2Ref.current, {
			center: [0, 0],
			zoom: 0,
			crs: L.CRS.Simple,
		});
		L.control.layers({}, this.imageLayers[1], { collapsed: false }).addTo(this.viewer2);
		this.viewer2.addLayer(Object.values(this.imageLayers[1])[0]);

		// 右画面と左画面の動きを連動させる
		this.viewer1.sync(this.viewer2);
		this.viewer2.sync(this.viewer1);
	}

	render() {
		return (
			<div>
				<div ref={this.viewer1Ref} style={{ width: '50%', height: '80vh', float: 'left' }}></div>
				<div ref={this.viewer2Ref} style={{ width: '50%', height: '80vh' }}></div>
			</div>
		);
	}
}

class ImageCompare extends React.Component {
	constructor(props) {
		super(props);
		this.OVERLAY = true;
		this.MULTIPLE = false;
		this.state = {
			view: this.OVERLAY,
			toggleLabel: 'オーバーレイ表示',
		};
		this.changeView = this.changeView.bind(this);
	}

	changeView() {
		this.setState((prevState) => ({
			view: !prevState.view,
			toggleLabel: prevState.view == true ? '二画面表示' : 'オーバーレイ表示',
		}));
	}

	render() {
		return (
			<div>
				<FormControlLabel control={<Switch checked={this.state.view} onChange={this.changeView}></Switch>} label={this.state.toggleLabel} />
				{this.state.view === this.OVERLAY && <OverlayView images={this.props.images} />}
				{this.state.view === this.MULTIPLE && <MultipleView images={this.props.images} />}
			</div>
		);
	}
}

ImageCompare.propTypes = {
	images: PropTypes.array.isRequired,
};
export default ImageCompare;
