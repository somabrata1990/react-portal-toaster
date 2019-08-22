const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.js'),
    output: {
        filename: 'react-portal-toaster.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs2'
    },
    mode: "production",
    devtool: "source-map",
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
              loader: 'babel-loader'
            }
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
    optimization: {
		// We do not want to minimize our code.
		minimize: false
	},
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    'react': 'react',
    'react-dom': 'react-dom'
 }
};