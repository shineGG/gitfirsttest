const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    // entry: './src/main.js',
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'js/[name].js',
        path: __dirname + '/dist',
        // publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        hot: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    node: {
        fs: "empty"
    }

}