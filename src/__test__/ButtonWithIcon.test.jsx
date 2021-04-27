import React from "react"
import "@testing-library/jest-dom";
import {
	render,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ButtonWithIcon from "../components/atoms/ButtonWithIcon";
import PhoneIcon from '@material-ui/icons/Phone';

describe("<ButtonWithIcon/>", () => {
	const onButtonClick = () => {
		console.log("Hello, world");
	};
	test("ボタンが描画されているか", () => {
		const renderResult = render(<ButtonWithIcon
			icon={<PhoneIcon />}
			title="Contact me!"
			onClick={onButtonClick}
		/>);
		expect(renderResult.getByText("Contact me!")).toBeInTheDocument();
	});
	test("onClickが作動するか", () => {
		const renderResult = render(<ButtonWithIcon
			icon={<PhoneIcon />}
			title="Contact me!"
			onClick={onButtonClick}
		/>);
		userEvent.click(renderResult.getByRole("button"));
	});
})