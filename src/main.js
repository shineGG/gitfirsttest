var ggT = require('./my_modules/ggT.js');
var index = require('./page/index.html');


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
