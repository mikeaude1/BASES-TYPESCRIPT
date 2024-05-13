"use strict";
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activarBatiseñal = function () {
        return 'Batiseñal Activada!';
    };
    console.log(typeof activarBatiseñal);
    var heroName = returnName();
})();
