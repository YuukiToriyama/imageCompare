/* Workflow.jsx */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import { Stepper, Step, StepLabel, StepContent, Button, Box, Paper, Typography } from '@material-ui/core';

import CircularProgress from '@material-ui/core/CircularProgress';
// 自作モジュールの読み込み
import ImageLoader from './ImageLoader';
import ImageCrop from './ImageCrop';
import ImageCompare from './ImageCompare';

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

// ステップごとに「進む」「戻る」ボタンの有効/無効を決めたかったのでWorkflowから分離
class GuideButtons extends React.Component {
	render() {
		return (
			<Box>
				<Button disabled={this.props.activeStep === 0} onClick={this.props.handleBack}>
					Back
				</Button>
				<Button disabled={!this.props.isAllowedToStepForward} variant='contained' color='primary' onClick={this.props.handleNext}>
					{this.props.activeStep === this.props.steps.length - 1 ? 'Finish' : 'Next'}
				</Button>
			</Box>
		);
	}
}

class Workflow extends React.Component {
	constructor(props) {
		super(props);
		//this.handleInputImageChange = this.handleInputImageChange.bind(this);
		this.state = {
			activeStep: 0,
			//isAllowedToStepForward: false,
			inputImages: [null, null],
			processedImage: '',
			processing: false,
		};
		this.imageCropRef = React.createRef();
	}

	steps = ['画像をアップロード', '対応点を選択', '変換'];

	// ImageLoaderを複数用意するための準備
	renderImageLoader = (i) => {
		return (
			<ImageLoader
				loaderId={i}
				onInputImageChange={(imageObject) => {
					let images = this.state.inputImages;
					images[i] = imageObject;
					this.setState({
						inputImages: images,
					});
				}}
			/>
		);
	};

	// 画像処理を行なう
	executeImageMatching = () => {
		this.imageCropRef.current.executeImageMatching();
	};
	// 処理の終わった画像を受け取る関数
	// ImageCropsから呼び出して使う
	handleImageProcessingDone = (imageURL) => {
		this.setState({
			processedImage: imageURL,
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
		});
	};

	getEachSteps = (step) => {
		switch (step) {
			case 0:
				return (
					<StepContent>
						<Box>
							<Typography>処理を行なう画像をアップロード</Typography>
							{this.renderImageLoader(0)}
							{this.renderImageLoader(1)}
						</Box>
						<GuideButtons
							activeStep={this.state.activeStep}
							handleBack={this.handleBack}
							handleNext={this.handleNext}
							isAllowedToStepForward={
								// 画像が二枚選択されていないと次に進めないようにする
								this.state.inputImages.length == 2 &&
								this.state.inputImages.every((inputImage) => {
									return inputImage != null;
								})
							}
							steps={this.steps}
						/>
					</StepContent>
				);
			case 1:
				return (
					<StepContent>
						<Box>
							<Typography>マーカーを動かして対応する点を指定してください</Typography>
							<ImageCrop ref={this.imageCropRef} images={this.state.inputImages} onImageProcessingDone={this.handleImageProcessingDone} />
							<Button
								onClick={() => {
									this.setState({
										processing: true,
									});
									this.executeImageMatching();
								}}
							>
								開始
							</Button>
							{this.state.processing == true && <CircularProgress />}
						</Box>
						<GuideButtons activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} isAllowedToStepForward={this.state.processedImage != ''} steps={this.steps} />
					</StepContent>
				);
			case 2:
				return (
					<StepContent>
						<Box>
							<Typography>処理結果</Typography>
							<ImageCompare images={[this.state.processedImage, this.state.inputImages[1]?.base64]} view={0}/>
						</Box>
						<GuideButtons activeStep={this.state.activeStep} handleBack={this.handleBack} handleNext={this.handleNext} isAllowedToStepForward={true} steps={this.steps} />
					</StepContent>
				);
			default:
				return (
					<StepContent>
						<Typography>Unknown step</Typography>
					</StepContent>
				);
		}
	};

	render() {
		return (
			<Box className={this.props.classes.root}>
				<Stepper activeStep={this.state.activeStep} orientation='vertical'>
					{this.steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							{
								// 各ステップがここに挿入される
								this.getEachSteps(index)
							}
						</Step>
					))}
				</Stepper>
				{this.state.activeStep === this.steps.length && (
					<Paper square elevation={0} className={this.props.classes.resetContainer}>
						<Typography>処理が完了しました！</Typography>
						<Button onClick={this.handleReset} className={this.props.classes.button}>
							やり直す
						</Button>
					</Paper>
				)}
			</Box>
		);
	}
}

export default withStyles(styles)(Workflow);
