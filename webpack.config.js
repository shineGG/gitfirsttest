const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: './src/main.js'
    },
    output: {
        filename: 'js/[name].js',
        path: __dirname + '/dist',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })  // 单独打包出CSS
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
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].css")//单独打包出css文件
    ],
    node: {
        fs: "empty"
    }

}