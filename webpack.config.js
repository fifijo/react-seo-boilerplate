const path = require('path')

module.exports = () => ({
    context: path.join( __dirname, 'src' ),
    devtool: 'inline-source-map',
    mode: 'development',
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
    }
});
