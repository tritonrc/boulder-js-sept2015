var webpack = require('webpack');
var path = require('path');
//var ExtractTextPlugin = require("extract-text-webpack-plugin")

module.exports = {
  devtool: 'eval',
  entry: {
    avatar: './avatar'
  },
  output: {
    path: path.join(__dirname, '/build/'),
    filename: '[name].js',
  },
  plugins: [
    //new ExtractTextPlugin('[name].css'),
    new webpack.DefinePlugin({
      DEBUG: true,
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  target: 'web',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel-loader?optional=runtime'],
        exclude: /node_modules/
      },
      {
        test: /\.js?$/,
        loaders: ['babel-loader?optional=runtime'],
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/
      },
      //{
      //  test: /\.less$/,
      //  loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?browsers=last 2 versions!less')
      //}
    ]
  }
};
