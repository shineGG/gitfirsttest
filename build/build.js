const getJs = require('./entryConfig');
const getHtmlPlugin = require('./HtmlWebpackPlugin');

exports.entryConfig = getJs;
exports.HtmlPluginConfig = [...getHtmlPlugin];