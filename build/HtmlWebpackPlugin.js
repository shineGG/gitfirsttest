const { getView } = require('./getView');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let pages = Object.keys(getView('./src/view/*.html'));//html path
let plugins = [];

pages.forEach(pathname => {
    let htmlname = pathname.split('src\\view\\')[1];
    let conf = {
        filename: `${htmlname}.html`,
        template: `${pathname}.html`,
        hash: true,
        chunks: [htmlname],
        minify: {
            removeAttributeQuotes: true,
            removeComments: true,
            collapseWhitespace: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true
        }
    }

    plugins.push(new HtmlWebpackPlugin(conf));
});
module.exports = plugins;