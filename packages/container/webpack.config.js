const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SystemJSPublicPathWebpackPlugin = require('systemjs-webpack-interop/SystemJSPublicPathWebpackPlugin');

module.exports = (env) => {
	const envoirnment = env.production ? 'production' : 'development';

	return {
		mode: envoirnment,
		entry: path.join(__dirname, 'src', 'index.js'),
		output: {
			filename: 'index.js',
			libraryTarget: 'system',
			path: path.resolve(__dirname, '../dist'),
			publicPath: 'https://localhost:8000',
		},
		devtool: 'inline-source-map',
		externals: ['react', 'react-dom', 'systemjs', 'single-spa'],
		cache: false,
		resolve: {
			extensions: ['.js', '.jsx', '.ts', '.tsx'],
			modules: ['node_modules'],
		},
		module: {
			rules: [
				{
					test: /\.(js|ts)x?$/,
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
					test: /\.css$/i,
					include: /src/,
					exclude: [/\.module\.css$/, /node_modules/],
					use: [
						{
							loader: require.resolve('style-loader', {
								paths: [__dirname],
							}),
						},
						{
							loader: require.resolve('css-loader', {
								paths: [__dirname],
							}),
							options: {
								modules: false,
							},
						},
					],
				},
				{
					test: /\.module\.css$/i,
					exclude: [/node_modules/],
					use: [
						{
							loader: require.resolve('style-loader', {
								paths: [__dirname],
							}),
						},
						{
							loader: require.resolve('css-loader', {
								paths: [__dirname],
							}),
							options: {
								modules: true,
							},
						},
					],
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
			new SystemJSPublicPathWebpackPlugin({
				rootDirectoryLevel: 1,
			}),
			new CleanWebpackPlugin(),
			new HtmlWebpackPlugin({
				template: path.join(__dirname, 'public', 'index.html'),
				scriptLoading: 'systemjs-module',
			}),
		],
		devServer: {
			historyApiFallback: true,

			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			allowedHosts: 'all',
			host: 'localhost',
			port: '8000',
			https: true,
			open: true,
			client: {
				webSocketURL: {
					hostname: 'localhost',
				},
			},
			allowedHosts: 'all',
		},
	};
};
