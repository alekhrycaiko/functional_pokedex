const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin({
    filename: "[name].css", // TODO: can add hash, but need a way to load dynamically.
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/App.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, 'dist')
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
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["react", "stage-0"],
                        plugins: ["transform-decorators-legacy"]
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
