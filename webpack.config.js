const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (env, argv) => ({
    context: path.join( __dirname, 'src' ),
    devtool: argv.mode === 'production' ? 'none' : 'source-map',
    entry: {
        app: './client/index.js',
    },
    resolve: {
        modules: [
            path.resolve( './src' ),
            'node_modules',
        ],
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader', 'eslint-loader'],
            },
        ],
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].bundle.js',
    },
    plugins: [
        new BundleAnalyzerPlugin( {
            analyzerMode: 'static',
            reportFilename: 'webpack-report.html',
            openAnalyzer: false,
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename:  argv.mode === 'development' ? '[name].css' : '[name].[hash].css',
            chunkFilename:  argv.mode === 'development'? '[id].css' : '[id].[hash].css',
          })
    ]
});
