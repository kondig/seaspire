var webpack = require('webpack');
var path = require('path');

module.exports = {
  // property entry tells to bundle all assets  from src/index.js together
  entry: './src/index.js',
  // property output tells webpack that final bundle.js file should be saved into dist folder
  output: {
    filename: 'bundle.js',
    // path: path.resolve(__dirname, 'docs')
    path: path.resolve(__dirname, 'docs' ),
    // publicPath: '/public/',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        //for any file with a filename extension matching with .png, .jpeg, .jpg or .svg, use the loader specified in the 'use' property
        use: [{
                loader: 'url-loader',
                options: {
                    limit: 8000, // Convert images < 8kb to base64 strings
                    name: 'images/[hash]-[name].[ext]'
              }
            }]
        }
    ]
  },
  resolve: {
        extensions: ['.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]
  },
  devServer: {
        contentBase: './docs'
  }
};
