const path = require('path');

module.exports = {
    entry: path.join(__dirname, '/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: [
                  // The `injectType`  option can be avoided because it is default behaviour
                  { loader: 'style-loader', options: { injectType: 'styleTag' } },
                  { loader: 'css-loader', options: { modules: true } }
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                loader: 'file-loader',
                options: {
                  publicPath: 'assets',
                  name: '[path][name].[ext]?[contenthash]',
                },
              },
        ]
    },
    optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    externals: {
        'react': 'React', // Case matters here 
        'react-dom' : 'ReactDOM' // Case matters here 
    }
};