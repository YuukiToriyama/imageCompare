import React from "react"
import "@testing-library/jest-dom";
import {
	render,
	screen
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ScrollDialog from "../components/atoms/ScrollDialog";

describe("<ScrollDialog/>", () => {
	test("ダイアログを呼び出すボタンが描画されているか", () => {
		const result = render(<ScrollDialog
			label="Show help"
			title="Help"
			content="Help content below"
		/>);
		const button = screen.getByRole("button");
		expect(button).toBeInTheDocument();
	});
	test("ボタンを押した時ダイアログが表示されるかどうか", async () => {
		const result = render(<ScrollDialog
			label="Show help"
			title="Help"
			content="Help content below"
		/>);
		const button = screen.getByRole("button");
		userEvent.click(button);
		const element = screen.getByText(/Help/i);
		expect(element).toBeInTheDocument();
	});
})