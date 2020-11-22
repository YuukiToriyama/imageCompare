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
import ImageLoader from "./ImageLoader.jsx";
import ImageCrop from "./ImageCrop.jsx";

const styles = {
	root: {
		width: '100%',
	},
	button: {
		marginTop: "5px",
		marginRight: "5px",
	},
	actionsContainer: {
		marginBottom: "5px",
	},
	resetContainer: {
		padding: "5px",
	},
};
/*
function getSteps() {
	return ['画像をアップロード', '頂点を選択', '変換'];
}
*/

function getStepContent(step) {
	switch (step) {
		case 0: return (
			<Box>
				<Typography>処理を行ないたい画像をアップロードして下さい</Typography>
				<Typography>URLを指定してインターネット上の画像を読み込むこともできます</Typography>
				<ImageLoader />
			</Box>
		);
		case 1: return (
			<Box>
				<Typography>画像補正のために頂点をマウスで選択して下さい</Typography>
				<Typography>時計回りに4点を指定してもらえると嬉しいです</Typography>
				<ImageCrop />
			</Box>
		);
		case 2: return (
			<Box>
				<Typography>処理を行なっています…</Typography>
				<Typography>しばらくお待ち下さい</Typography>
			</Box>
		);
		default:
			return 'Unknown step';
	}
}

class Workflow extends React.Component {
//const Workflow = () => {
	state = {
		activeStep: 0
	}
	//[activeStep, setActiveStep] = React.useState(0);
	//steps = getSteps();
	steps = [
		'画像をアップロード',
		'頂点を選択',
		'変換'
	];

	handleNext = () => {
		this.setState({
			activeStep: this.state.activeStep + 1
		});
		//setActiveStep((prevActiveStep) => prevActiveStep + 1);
	}

	handleBack = () => {
		this.setState({
			activeStep: this.state.activeStep - 1
		});
	}
	/*
	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};*/

	handleReset = () => {
		this.setState({
			activeStep: 0
		});
	}
	/*
	const handleReset = () => {
		setActiveStep(0);
	};*/

	render() {
		return (
			<Box className={this.props.classes.root}>
				<Stepper activeStep={this.state.activeStep} orientation="vertical">
					{this.steps.map((label, index) => (
						<Step key={label}>
							<StepLabel>{label}</StepLabel>
							<StepContent>
								<Typography>{getStepContent(index)}</Typography>
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

//export default Workflow;

export default withStyles(styles)(Workflow);