/* MainContent.jsx */

import React from "react";

// 自作モジュールの読み込み
import Workflow from "./Workflow.jsx";

class MainContent extends React.Component {
	state = {
		image: ""
	}

	render() {
		return (
			<Workflow />
		);
	}
}

export default MainContent;
