const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

module.exports = (env, argv) => ({
    context: path.join( __dirname, 'src' ),
    devtool: argv.mode === 'production' ? 'none' : 'source-map',
    entry: {
        app: './client/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel-loader', 'eslint-loader'],
            }
        ],
    },
    output: {
        path: path.resolve( __dirname, 'dist' ),
        filename: '[name].bundle.js',
    },
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'webpack-report.html',
            openAnalyzer: false,
        }),
    ]
});
