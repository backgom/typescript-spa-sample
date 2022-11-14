const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Plugin
const webpackPlugin = [
  new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
  }),
];

// Config
module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    historyApiFallback: true, // MEMO
    static: path.join(__dirname, 'public'),
    compress: true,
    port: 3000,
  },
  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js',
  },
  resolve: {
    extensions: ['.js', '.ts'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.png/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: webpackPlugin,
};
