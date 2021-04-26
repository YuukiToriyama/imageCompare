import React from "react"
import "@testing-library/jest-dom";
import {
	render
} from "@testing-library/react";
import ButtonWithIcon from "../components/atoms/ButtonWithIcon";
import PhoneIcon from '@material-ui/icons/Phone';

describe("<ButtonWithIcon/>", () => {
	test("ButtonWithIconコンポーネントのレンダリング", () => {
		const { getByText, debug } = render(<ButtonWithIcon icon={<PhoneIcon />} title="Contact me!" />);
		const title = getByText("Contact me!");
		debug(title);
	});
})