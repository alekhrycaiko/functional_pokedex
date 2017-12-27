const path = require('path');
const webpack = require('webpack');
module.exports = {
	entry: './src/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	devtool: 'source-map',
	module: { 
		rules: [ 
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: [
							"transform-decorators-legacy"

						],
						presets: ["react", "env"]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [{
					loader: "style-loader", // creates style nodes from JS strings
					options: { sourceMap: true }
				}, {
					loader: "css-loader", // translates CSS into CommonJS
					options: { sourceMap: true } 
				}, {
					loader: "sass-loader", // compiles Sass to CSS
					options: { sourceMap: true}
				}]
			}
		]
	}
}
