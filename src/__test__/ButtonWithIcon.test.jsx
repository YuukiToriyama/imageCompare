import React from "react"
import "@testing-library/jest-dom";
import {
	render,
	fireEvent
} from "@testing-library/react";
import ButtonWithIcon from "../components/atoms/ButtonWithIcon";
import PhoneIcon from '@material-ui/icons/Phone';

describe("<ButtonWithIcon/>", () => {
	const onButtonClick = () => {
		console.log("Hello, world");
	};
	test("ボタンが描画されているか", () => {
		const renderResult = render(<ButtonWithIcon icon={<PhoneIcon />} title="Contact me!" onClick={onButtonClick} />);
		expect(renderResult.getByText("Contact me!")).toBeInTheDocument();
	});
	test("onClickが作動するか", () => {
		const renderResult = render(<ButtonWithIcon icon={<PhoneIcon />} title="Contact me!" onClick={onButtonClick} />);
		fireEvent.click(renderResult.getByRole("button"));
	});
})