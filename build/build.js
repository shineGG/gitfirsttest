const fs = require('fs');
let getJsFileName = Object.keys(require('./entryConfig'));

getJsFileName.forEach((jsFileName) => {//自动化引入css文件，不需要在对应js文件中手写require css。
    let jsPath = `./src/js/${jsFileName}.js`;
    let data = fs.readFileSync(jsPath + '', 'utf-8', (err, data) => {
        if (err) throw err;
    });
    let cssSource = "require(" + "'../asset/css/" + jsFileName + ".css')";
    let reg = new RegExp("cssSource", "g");
    if (!reg.test(data)) {
        data = cssSource + "//自动引入cssSource文件" + data;
        console.log("不存在");
    } else {
        console.log("已存在");//防止重复引入css文件
    }
    fs.writeFileSync(jsPath, data, (err) => {
        if (err) throw err;
    });
});

const getJs = require('./entryConfig');
const getHtmlPlugin = require('./HtmlWebpackPlugin');

exports.entryConfig = getJs;
exports.HtmlPluginConfig = [...getHtmlPlugin];