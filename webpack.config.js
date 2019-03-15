// const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { entryConfig, HtmlPluginConfig } = require('./build/build.js');

var config = {
    // entry: {
    //     app: './src/main.js'//单页应用
    // },
    entry: entryConfig,//多页应用
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
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true,
        //     // hash: true,
        //     // chunks:['app'],//多页应用时选择相应模块的js，（页面比较少的情况下,手写）
        // }),
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].css")//单独打包出css文件
    ],
    node: {
        fs: "empty"
    }

};
config.plugins.push(...HtmlPluginConfig);//多页应用


module.exports = config;