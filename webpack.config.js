const path = require('path');

module.exports = {
    entry: path.join(__dirname, './src/index.tsx'),
    output: {
        filename: 'react-portal-toaster.js',
        path: path.join(__dirname, 'dist')
    },
    mode: "production",
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
    optimization: {
		// We do not want to minimize our code.
		minimize: false
	},
  resolve: {
      extensions: [".tsx", ".ts", ".js"]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDom"
  }
};