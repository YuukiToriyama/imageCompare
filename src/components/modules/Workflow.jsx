/* Workflow.jsx */

import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
	Box,
	Button,
	Step,
	StepContent,
	StepLabel,
	Stepper,
	Typography,
} from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

// 自作モジュールの読み込み
import ImageLoader from "./ImageLoader";
import ImageCompare from "./ImageCompare";
import ImageTransform from "./ImageTransform";
import {
	howToUse,
	workflowSteps
} from "../../utils/Messages";

const styles = {
	root: {
		width: "100%",
	},
	button: {
		marginTop: "15px",
		marginRight: "15px",
	},
};

const Workflow = (props) => {
	// Stepperの操作に使用する
	const [activeStep, setActiveStep] = React.useState(0);
	// ImageLoaderで読み込んだ画像をImageTransformに受け渡す際に使用する
	const [inputImages, setInputImages] = React.useState([]);
	// ImageTransformで変形処理を施した画像をImageCompareに受け渡すために使用する
	const [transformedImage, setTransformedImage] = React.useState({});
	// 画像処理にかんして処理中かどうかを表すフラグ
	const [isProcessing, setIsProcessing] = React.useState(false);

	// Stepperの挙動を制御する関数
	const handleNext = () => {
		setActiveStep(prevState => prevState + 1);
	};
	const handleBack = () => {
		setActiveStep(prevState => prevState - 1);
	};
	const handleReset = () => {
		setActiveStep(0);
		setInputImages([]);
		setIsProcessing(false);
	};

	// <ImageTransform/>を参照するためのref
	const refImageTransform = React.useRef(null);

	// 処理の終わった画像を受け取る関数(ImageTransformsから呼び出して使う)
	const handleImageProcessingDone = (imageObject) => {
		setTransformedImage(imageObject);
		setIsProcessing(false);
	};

	// Stepperの各段階を作成する関数
	const generateEachSteps = (index) => {
		if (index == 0) {
			return (
				<React.Fragment>
					{howToUse.map((message) => {
						const text = message.content.map((line, index) => {
							return <div key={index}>{line}</div>;
						});
						return (
							<div>
								<Typography variant="h3">{message.title}</Typography>
								<Typography variant="body1">{text}</Typography>
							</div>
						);
					})}
					<Button color="primary" variant="contained" onClick={handleNext}>始める</Button>
				</React.Fragment>
			);
		} else if (index == 1) {
			return (
				<React.Fragment>
					<ImageLoader onInputImageChange={(data) => {
						setInputImages(data);
					}} />
					<Button
						disabled={(inputImages.length < 2) ? true : false}
						color="primary"
						variant="contained"
						onClick={() => handleNext()}
					>次へ</Button>
				</React.Fragment>
			);
		} else if (index == 2) {
			return (
				<React.Fragment>
					<ImageTransform
						ref={refImageTransform}
						images={inputImages}
						onImageProcessingDone={handleImageProcessingDone}
					/>
					<Button
						variant="contained"
						color="primary"
						onClick={() => {
							new Promise((resolve, reject) => {
								setIsProcessing(true);
								refImageTransform.current.executeImageMatching();
								resolve(true);
							}).then(() => {
								setIsProcessing(false);
								handleNext();
							});
						}}
					>処理を実行</Button>
					{(isProcessing === true) && <CircularProgress />}
				</React.Fragment>
			);
		} else if (index == 3) {
			if (inputImages[1] != null) {
				return <ImageCompare
					images={[
						transformedImage,
						inputImages[1]
					]}
				/>
			}
		} else {
			return <Typography>Unknown step</Typography>;
		}
	};

	// 戻る(リセット)ボタン
	const ResetButton = () => {
		return (
			<Box>
				<Button
					disabled={activeStep === 0}
					onClick={handleReset}
				>
					最初に戻る
					</Button>
			</Box>
		);
	};

	return (
		<Box className={props.classes.root}>
			<Stepper activeStep={activeStep} orientation="vertical">
				{workflowSteps.map((step, index) => (
					<Step key={"step" + index}>
						<StepLabel>{step.title}</StepLabel>
						<StepContent>
							<Typography variant="body1">{step.description.join("\n")}</Typography>
							<Typography variant="caption">{step.hint}</Typography>
							{generateEachSteps(index)}
							<ResetButton props={props} />
						</StepContent>
					</Step>
				))}
			</Stepper>
		</Box>
	);
}
export default withStyles(styles)(Workflow);