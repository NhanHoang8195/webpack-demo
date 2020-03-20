const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = (env) => {
  console.log(env);
  return {
    mode: 'development',
    entry: {
      app: './src/index.js',
      another: './src/another-module.js',
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      port: process.env.PORT || 3000,
      open: true
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[id].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './index.html',
      }),
    ],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader',
          ],
        },
      ],
    },
    optimization: {
      splitChunks: {
        chunks: 'all',
      }
    },
  };
};
