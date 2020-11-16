/* Workflow.jsx */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
	},
	button: {
		marginTop: theme.spacing(1),
		marginRight: theme.spacing(1),
	},
	actionsContainer: {
		marginBottom: theme.spacing(2),
	},
	resetContainer: {
		padding: theme.spacing(3),
	},
}));

function getSteps() {
	return ['画像をアップロード', '頂点を選択', '変換'];
}

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

const Workflow = () => {
	const classes = useStyles();
	const [activeStep, setActiveStep] = React.useState(0);
	const steps = getSteps();

	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleReset = () => {
		setActiveStep(0);
	};

	return (
		<Box className={classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
							<Typography>{getStepContent(index)}</Typography>
							<Box className={classes.actionsContainer}>
								<Box>
									<Button
										disabled={activeStep === 0}
										onClick={handleBack}
										className={classes.button}
									>
										Back
									</Button>
									<Button
										variant="contained"
										color="primary"
										onClick={handleNext}
										className={classes.button}
									>
										{activeStep === steps.length - 1 ? 'Finish' : 'Next'}
									</Button>
								</Box>
							</Box>
						</StepContent>
					</Step>
				))}
			</Stepper>
			{activeStep === steps.length && (
				<Paper square elevation={0} className={classes.resetContainer}>
					<Typography>処理が完了しました！</Typography>
					<Button onClick={handleReset} className={classes.button}>
						やり直す
					</Button>
				</Paper>
			)}
		</Box>
	);
};

export default Workflow;
