"use strict";
(function () {
    var a = 10;
    var b;
    function sayHello(msg) {
        if (msg === void 0) { msg = 'Hola Mundo'; }
        console.log(msg);
        return msg;
    }
    var s = sayHello('hola MuNdo');
    console.log(s.toUpperCase());
})();
