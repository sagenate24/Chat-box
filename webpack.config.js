
module.exports = {
	devtool: 'eval',
	entry: './FamousPerson/index.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist/'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['env', 'react']
						}
					}
				]
			}
		]
	}
};
