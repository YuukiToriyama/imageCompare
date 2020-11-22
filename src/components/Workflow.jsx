/* Workflow.jsx */

import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
	Stepper,
	Step,
	StepLabel,
	StepContent,
	Button,
	Box,
	Paper,
	Typography
} from "@material-ui/core";

// 自作モジュールの読み込み
import ImageLoader from "./ImageLoader";
import ImageCrop from "./ImageCrop";
import ImageDisplay from "./ImageDisplay";

const styles = {
	root: {
		width: '100%',
	},
	button: {
		marginTop: "15px",
		marginRight: "15px",
	},
	actionsContainer: {
		marginBottom: "15px",
	},
	resetContainer: {
		padding: "15px",
	},
};


class Workflow extends React.Component {
	constructor(props) {
		super(props);
		this.handleInputImageChange = this.handleInputImageChange.bind(this);
		this.state = {
			activeStep: 0,
			inputImage: "",
			processedImage: {
				url: "",
				width: 0,
				height: 0
			}
		}
	}

	steps = [
		'画像をアップロード',
		'頂点を選択',
		'変換'
	];

	// 読み込んだ画像のURLを変更する関数
	// ImageLoaderから呼び出して使う
	handleInputImageChange = (url) => {
		this.setState({
			inputImage: url
		});
	};
	// 処理の終わった画像を受け取る関数
	// ImageCropsから呼び出して使う
	handleImageProcessingDone = (image) => {
		this.setState({
			processedImage: image
		});
	};

	// Stepperの挙動を制御する関数
	handleNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1
		});
	};
	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1
		});
	};
	handleReset = () => {
		this.setState({
			activeStep: 0
		});
	};

	getStepContent = (step) => {
		switch(step) {
			case 0: return(
				<Box>
					<Typography>処理を行ないない画像をアップロードしてください</Typography>
					<ImageLoader onInputImageChange={this.handleInputImageChange}/>
				</Box>
			);
			case 1: return(
				<Box>
					<Typography>画像補正のために頂点をマウスで選択して下さい</Typography>
					<ImageCrop image={this.state.inputImage} onImageProcessingDone={this.handleImageProcessingDone}/>
				</Box>
			);
			case 2: return(
				<Box>
					<Typography>処理中……</Typography>
					<ImageDisplay image={this.state.processedImage}/>
				</Box>
			);
			default: return(
				<Typography>Unknown step</Typography>
			);
		};
	}

	render() {
		return (
			<Box className={this.props.classes.root}>
				<Stepper activeStep={this.state.activeStep} orientation="vertical">
					{this.steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							<StepContent>
								{
									// 各ステップがここに挿入される
									this.getStepContent(index)
								}
								<Box className={this.props.classes.actionsContainer}>
									<Box>
										<Button
											disabled={this.state.activeStep === 0}
											onClick={this.handleBack}
											className={this.props.classes.button}
										>
											Back
										</Button>
										<Button
											variant="contained"
											color="primary"
											onClick={this.handleNext}
											className={this.props.classes.button}
										>
											{this.state.activeStep === this.steps.length - 1 ? 'Finish' : 'Next'}
										</Button>
									</Box>
								</Box>
							</StepContent>
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
};

export default withStyles(styles)(Workflow);