const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =  require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const miniCssPlugin = new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
    chunkFilename:  '[id].[hash].css',
})

const htmlPlugin =  new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "index.html"
})

module.exports  = (env,argv) => {

  return {
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        https:  false,
        disableHostCheck: true,
        historyApiFallback: true,
    },
    optimization: {
        nodeEnv: argv.mode,
        splitChunks: {
            chunks: 'all',
        },
        namedChunks: true,
        minimizer: [
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader:  'babel-loader'
                }
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                  argv.mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader,
                  {
                    loader: 'css-loader',
                    options: {
                    modules: true,
                    importLoaders: 1,
                    localIdentName: "[name]_[local]_[hash:base64:5]",
                    }
                  },
                  'sass-loader'
                ]
            }
          
        ]
    },
    plugins: [
        htmlPlugin,
        miniCssPlugin,
        new CleanWebpackPlugin(['dist']),
        new BundleAnalyzerPlugin({
            analyzerMode: 'disabled',
            generateStatsFile: true,
            statsOptions: { source: false }
        }),
    ]
  }
}