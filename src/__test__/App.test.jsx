import React from "react"
import "@testing-library/jest-dom";
import {
	screen,
	render
} from "@testing-library/react";
import App from "../App";

describe("<App/>", () => {
	test("Appコンポーネントのレンダリング", () => {
		render(<App />);
		screen.debug();
	});
})