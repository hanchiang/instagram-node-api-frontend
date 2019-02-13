/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');

// Plugins
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// config
const baseConfig = require('./webpack.base.config');

const prodConfiguration = env => merge([
  {
    optimization: {
      // splitChunks will chunk common codes into a separate module, which will be loaded first
      // and may not be needed in the page that the user is in
      // runtimeChunk: 'single',
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /[\\/]node_modules[\\/]/,
      //       name: 'vendors',
      //       chunks: 'all'
      //     }
      //   }
      // },
      minimizer: [new UglifyJsPlugin()],
    },
    plugins: [
      new MiniCssExtractPlugin(), // Extracts css into main.css
      new OptimizeCssAssetsPlugin(), // Minify main.css
      new Visualizer({ filename: './statistics.html' })
    ],
  },
]);

module.exports = env => merge(baseConfig(env), prodConfiguration(env));
