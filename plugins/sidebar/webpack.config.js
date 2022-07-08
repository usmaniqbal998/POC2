const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const deps = require('./package.json').dependencies;

module.exports = (env) => {
	return {
		mode: env.production ? 'production' : 'development',
		entry: path.join(__dirname, 'index.js'),
		output: {
			filename: 'main.js',
			publicPath: 'https://localhost:8001',
			libraryTarget: 'system',
		},

		devtool: 'inline-source-map',
		cache: false,
		externals: ['react', 'react-dom', 'single-spa'],
		resolve: {
			extensions: ['.js', '.jsx'],
			modules: ['node_modules'],
			alias: {
				react: path.resolve('./node_modules/react'),
				'react-dom': path.resolve('./node_modules/react-dom'),
			},
		},
		module: {
			rules: [
				{
					test: /\.(js|jsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
						options: {
							cacheCompression: false,
							cacheDirectory: true,
						},
					},
				},
				{
					test: /\.(png|jpg|jpeg)$/i,
					type: 'asset/resource',
				},
				{
					test: /\.svg$/i,
					type: 'asset/inline',
				},
			],
		},
		plugins: [
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
			}),
			!env.production && new ReactRefreshWebpackPlugin(),
		].filter(Boolean),
		devServer: {
			historyApiFallback: true,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			client: {
				webSocketURL: {
					hostname: 'localhost',
				},
			},
			allowedHosts: 'all',
			https: true,
			port: 8001,
			compress: true,
			hot: true,
		},
	};
};
