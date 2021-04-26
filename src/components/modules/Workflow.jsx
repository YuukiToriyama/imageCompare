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
	howToUse
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

	// 画像処理を行なう
	const executeImageMatching = () => {
		refImageTransform.current.executeImageMatching();
	};
	// 処理の終わった画像を受け取る関数(ImageTransformsから呼び出して使う)
	const handleImageProcessingDone = (imageObject) => {
		setTransformedImage(imageObject);
		setIsProcessing(false);
	};


	const steps = [
		"はじめに",
		"画像の読み込み",
		"コントロールポイントの設定",
		"画像比較ビュー",
	];
	// Stepperの各段階を作成する関数
	const generateEachSteps = (step) => {
		switch (step) {
			case 0:
				return (
					<Box>
						<Typography variant="body1">
							はじめにこのアプリについて説明します。
						</Typography>
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
						<Button
							color="primary"
							variant="contained"
							onClick={handleNext}
						>
							始める
						</Button>
					</Box>
				);
			case 1:
				return (
					<Box>
						<Typography variant="body1">
							比較を行ないたい画像をアップロードしてください。
						</Typography>
						<Typography variant="body2">
							画像はブラウザ上に読み込まれるだけで、外部には送信されません。
						</Typography>
						<ImageLoader onInputImageChange={(data) => {
							setInputImages(data);
						}} />
						<Button
							disabled={(inputImages.length < 2) ? true : false}
							color="primary"
							variant="contained"
							onClick={() => handleNext()}
						>
							次へ
						</Button>

					</Box>
				);
			case 2:
				return (
					<Box>
						<Typography variant="body1">
							数字のついたマーカーを動かして、2つの画像の対応関係を設定します。
						</Typography>
						<Typography variant="body2">
							右と左とで同じ番号のマーカーが同じポイントを押さえるようにマーカーの位置を調整して下さい。
						</Typography>
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
						>
							処理を実行
						</Button>
						{(isProcessing === true) && <CircularProgress />}
					</Box>
				);
			case 3:
				return (
					<Box>
						<Typography variant="body1">処理が完了しました！</Typography>
						<Typography variant="body2">
							透明度を変えることで2つの画像を透過させてみることができます。また、二画面モードに表示を切り替えることもできます。
						</Typography>
						{inputImages[1] != null && (
							<ImageCompare
								images={[
									transformedImage,
									inputImages[1]
								]}
							/>
						)}
					</Box>
				);
			default:
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
				{steps.map((label, index) => (
					<Step key={label}>
						<StepLabel>{label}</StepLabel>
						<StepContent>
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