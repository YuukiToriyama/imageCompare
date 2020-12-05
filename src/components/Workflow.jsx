/* Workflow.jsx */

import React from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Box,
	Paper,
	Typography,
} from '@material-ui/core';

// 自作モジュールの読み込み
import ImageLoader from './ImageLoader';
import ImageCrop from './ImageCrop';
import ImageDisplay from './ImageDisplay';

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
				<Box>
					<Button
						disabled={this.props.activeStep === 0}
						onClick={this.props.handleBack}
					>
						Back
					</Button>
					<Button
						disabled={!this.props.isAllowedToStepForward}
						variant='contained'
						color='primary'
						onClick={this.props.handleNext}
					>
						{this.props.activeStep === this.props.steps.length - 1
							? 'Finish'
							: 'Next'}
					</Button>
				</Box>
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
			isAllowedToStepForward: false,
			inputImages: [null, null],
			processedImage: '',
		};
		this.imageCropRef = React.createRef();
	}

	steps = ['画像をアップロード', '対応点を選択', '変換'];

	// ImageLoaderを複数用意するための準備
	renderImageLoader = (i) => {
		return (
			<ImageLoader
				loaderId={i}
				onInputImageChange={(inputImage) => {
					let images = this.state.inputImages;
					images[i] = inputImage;
					this.setState({
						inputImages: images,
					});
				}}
			/>
		);
	};

	executeImageMatching = () => {
		this.imageCropRef.current.executeImageMatching();
	};
	// 処理の終わった画像を受け取る関数
	// ImageCropsから呼び出して使う
	handleImageProcessingDone = (imageURL) => {
		this.setState({
			processedImage: imageURL,
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

	// 次に進んでよいかどうかを状態goNextStepを使って管理している
	allowToStepForward = () => {
		this.setState({
			isAllowedToStepForward: true,
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
							isAllowedToStepForward={this.isAllowedToStepForward}
							steps={this.steps}
						/>
					</StepContent>
				);
			case 1:
				return (
					<StepContent>
						<Box>
							<Typography>
								マーカーを動かして対応する点を指定してください
							</Typography>
							<ImageCrop
								ref={this.imageCropRef}
								images={this.state.inputImages}
								onImageProcessingDone={this.handleImageProcessingDone}
							/>
							<Button onClick={this.executeImageMatching}>開始</Button>
						</Box>
						<GuideButtons
							activeStep={this.state.activeStep}
							handleBack={this.handleBack}
							handleNext={this.handleNext}
							isAllowedToStepForward={this.isAllowedToStepForward}
							steps={this.steps}
						/>
					</StepContent>
				);
			case 2:
				return (
					<StepContent>
						<Box>
							<Typography>処理中……</Typography>
							<ImageDisplay image={this.state.processedImage} />
						</Box>
						<GuideButtons
							activeStep={this.state.activeStep}
							handleBack={this.handleBack}
							handleNext={this.handleNext}
							isAllowedToStepForward={this.isAllowedToStepForward}
							steps={this.steps}
						/>
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
					<Paper
						square
						elevation={0}
						className={this.props.classes.resetContainer}
					>
						<Typography>処理が完了しました！</Typography>
						<Button
							onClick={this.handleReset}
							className={this.props.classes.button}
						>
							やり直す
						</Button>
					</Paper>
				)}
			</Box>
		);
	}
}

export default withStyles(styles)(Workflow);
