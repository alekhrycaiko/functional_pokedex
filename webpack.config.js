const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
	filename: "[name].css", // TODO: can add hash, but need a way to load dynamically.
	disable: process.env.NODE_ENV === "development"
});

module.exports = {
	entry: './src/App.jsx',
	output: {
		filename: 'bundle.js',
		publicPath: '/',
		path: path.resolve(__dirname, 'dist')
	},
	externals : {
		'react/addons' : true,
		'react/lib/ExecutionEnvironment': true,
		'react/lib/ReactContext' : true
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin(),
		extractSass
	],
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.jsx$|/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ["@babel/preset-react", "@babel/preset-stage-0", "@babel/preset-env", "@babel/preset-es2017"],
					 	plugins: ["transform-decorators-legacy", "transform-class-properties"]
					}
				}
			},
			{
				test: /\.scss$/,
				use : extractSass.extract({
					use: [{
						loader: "css-loader", // translates CSS into CommonJS
						options: { sourceMap: true }
					}, {
						loader: "sass-loader", // compiles Sass to CSS
						options: { sourceMap: true}
					}],
					fallback: "style-loader"
				})
			}
		]
	}
}
