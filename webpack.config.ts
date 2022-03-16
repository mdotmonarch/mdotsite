const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: './index.html'
})

module.exports = {
	entry: './src',
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.(ts|tsx)/,
				exclude: /node_modules/,
				use: ['ts-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx']
	},
	plugins: [htmlPlugin]
};