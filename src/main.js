var ggT = require('./my_modules/ggT.js');
const router = require('./router');
require('./asset/css/index.css.js');//接收css


function data() {
    return {
        name: 'GG a2 ',
        age: 23
    };
}
var gg = new ggT("app", data(), router);
gg.ggS();