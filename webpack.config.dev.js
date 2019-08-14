const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        historyApiFallback: true,
        compress: true,
        port: 9000
    },
    mode: "development",
    entry: path.join(__dirname, './example/index.js'),
    output: {
        filename: 'index.js',
        path: path.join(__dirname, 'dist-example')
    },
    module: {
        rules: [
            {
                test: /\.(tsx|js)?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                  // The `injectType`  option can be avoided because it is default behaviour
                  { loader: 'style-loader', options: { injectType: 'styleTag' } },
                  { loader: 'css-loader', options: { modules: true } }
                ],
            },
            {
                test: /\.(png|jpg|gif|svg)$/i,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000
                    }
                  }
                ]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./example/index.html",
        filename: "./index.html"
    })],
    optimization: {
		// We no not want to minimize our code.
		minimize: false
	},
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    }
};