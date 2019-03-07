var ggT = require('./my_modules/ggT.js');
var index = require('./page/index.html');
require('./asset/css/index.css.js');//接收css


function data() {
    return {
        name: 'GG a2 ',
        age: 23
    };
}
var gg = new ggT("app", data());
gg.component('index', index);
gg.component('inde2', index);
gg.ggS();
