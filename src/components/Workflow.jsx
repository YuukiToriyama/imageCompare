/* Workflow.jsx */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Box, Button, Step, StepContent, StepLabel, Stepper, Typography } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

// 自作モジュールの読み込み
import ImageLoader from './ImageLoader';
import ImageCompare from './ImageCompare';
import ImageTransform from './ImageTransform';

const styles = {
	root: {
		width: '100%',
	},
	button: {
		marginTop: '15px',
		marginRight: '15px',
	},
	actionsContainer: {
		marginBottom: '15px',
	},
	resetContainer: {
		padding: '15px',
	},
};

class Workflow extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			activeStep: 0,
			inputImages: [null, null],
			transformedImage: {},
			processing: false,
		};
		this.imageCropRef = React.createRef();
		this.steps = ['画像をアップロード', '対応点を選択', '画像比較ビュー'];
	}

	// ImageLoaderを複数用意するための準備
	renderImageLoader = (i) => {
		return (
			<ImageLoader
				loaderId={i}
				onInputImageChange={(imageObject) =>
					new Promise((resolve) => {
						// ImageLoaderで読み込んだ画像をstate.inputImagesに保存して、
						let images = this.state.inputImages;
						images[i] = imageObject;
						this.setState({
							inputImage: images,
						});
						resolve(true);
					}).then((result) => {
						// それが終わったらstate.inputImagesの状態を確認
						// 条件が整っていればstepperを一つ進める
						this.state.inputImages.every((image) => {
							return image !== null;
						}) && this.handleNext();
					})
				}
			/>
		);
	};

	// 画像処理を行なう
	executeImageMatching = () => {
		this.imageCropRef.current.executeImageMatching();
	};
	// 処理の終わった画像を受け取る関数
	// ImageTransformsから呼び出して使う
	handleImageProcessingDone = (imageObject) => {
		this.setState({
			transformedImage: imageObject,
			processing: false,
		});
	};

	// Stepperの挙動を制御する関数
	handleNext = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep + 1,
		}));
	};
	handleBack = () => {
		this.setState((prevState) => ({
			activeStep: prevState.activeStep - 1,
		}));
	};
	handleReset = () => {
		this.setState({
			activeStep: 0,
			inputImages: [null, null],
			processing: false,
		});
	};

	getEachSteps = (step) => {
		switch (step) {
			case 0:
				return (
					<Box>
						<Typography>処理を行なう画像をアップロード</Typography>
						<div>
							{this.renderImageLoader(0)}
							{this.renderImageLoader(1)}
						</div>
					</Box>
				);
			case 1:
				return (
					<Box>
						<Typography>
							マーカーを動かして二つの画像の間で対応する点を指定してください。マーカーを動かし終わったら処理実行ボタンを押してください。
						</Typography>
						<ImageTransform
							ref={this.imageCropRef}
							images={this.state.inputImages}
							onImageProcessingDone={this.handleImageProcessingDone}
						/>
						{this.state.processing === true && <CircularProgress />}
						<Button
							variant='contained'
							color='primary'
							onClick={() => {
								new Promise((resolve, reject) => {
									this.setState({
										processing: true,
									});
									this.imageCropRef.current.executeImageMatching();
									resolve(true);
								}).then(() => {
									this.setState({
										processing: false,
									});
									this.handleNext();
								});
							}}
						>
							処理実行
						</Button>
					</Box>
				);
			case 2:
				return (
					<Box>
						<Typography>処理結果</Typography>
						{this.state.inputImages[1] != null && (
							<ImageCompare images={[this.state.transformedImage, this.state.inputImages[1]]} />
						)}
					</Box>
				);
			default:
				return <Typography>Unknown step</Typography>;
		}
	};

	render() {
		// 戻る(リセット)ボタン
		const ResetButton = () => {
			return (
				<Box>
					<Button disabled={this.state.activeStep === 0} onClick={this.handleReset}>
						はじめに戻る
					</Button>
				</Box>
			);
		};
		return (
			<Box className={this.props.classes.root}>
				<Stepper activeStep={this.state.activeStep} orientation='vertical'>
					{this.steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							<StepContent>
								{this.getEachSteps(index)}
								<ResetButton props={this.props} />
							</StepContent>
						</Step>
					))}
				</Stepper>
				{/*
				{this.state.activeStep === this.steps.length && (
					<Paper square elevation={0} className={this.props.classes.resetContainer}>
						<Typography>処理が完了しました</Typography>
						<Button onClick={this.handleReset} className={this.props.classes.button}>
							最初に戻る
						</Button>
					</Paper>
				)}
				*/}
			</Box>
		);
	}
}

export default withStyles(styles)(Workflow);
