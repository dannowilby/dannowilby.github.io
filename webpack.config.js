const path = require('path');
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve(''),
    filename: 'bundle.js'
  },
  devServer: {
      historyApiFallback: true
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(png|jpg)$/, loader: 'url-loader', exclude: /node_modules/ },
      { test: /\.scss$/, use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader",
          options: {
            modules: true
          }
        },
        {
          loader: "sass-loader",
          options: {
            importLoaders: 1
          }
        }
    ]
  }
  ]
  }
}
