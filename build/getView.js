/**
*
* @param {string}  globPath  文件的路径
* @returns entries
*/

var glob = require("glob");
var path = require("path");


exports.getView = function (globPath,flag){
    let files = glob.sync(globPath);

    let entries = {},
    entry, dirname, basename, pathname, extname;

    files.forEach(item => {
        entry = item;
        dirname = path.dirname(entry);//当前目录
        extname = path.extname(entry);//后缀
        basename = path.basename(entry, extname);//文件名
        pathname = path.join(dirname, basename);//文件路径
        if (extname === '.html') {
            entries[pathname] = './' + entry;
        } else if (extname === '.js') {
            entries[basename] = entry;
        }
    });

    return entries;
}