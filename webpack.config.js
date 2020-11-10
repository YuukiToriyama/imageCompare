const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");

const DEV_PORT = process.env.PORT || 3000;

module.exports = {
	entry: "./src/main.js",
	output: {
		path: path.resolve(__dirname, "dist/"),
		filename: "bundle.js"
	},
	devServer: {
		contentBase: path.join(__dirname, "dist/"),
			port: DEV_PORT,
			hot: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new CopyPlugin({
			patterns: [
				{
					from: "./public",
					to: "."
				}
			]
		})
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: ["@babel/env"]
				}
			},
			{
				test: /\.css$/,
				exclude: /node_modules/,
				use: [
					"style-loader",
					{
						loader: "css-loader?modules",
						options: {url: false}
					}
				],
			}
		]
	}
}
