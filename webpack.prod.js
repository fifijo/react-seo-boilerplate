 const merge = require('webpack-merge');
 const common = require('./webpack.common.js');
 const Visualizer = require('webpack-visualizer-plugin');
 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 module.exports = merge(common, {
   mode: 'production',
   plugins: [
     new Visualizer({
       filename: './statistics.html'
   }),
   new BundleAnalyzerPlugin()
  ],
 });