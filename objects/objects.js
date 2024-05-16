"use strict";
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['SuperVelocidad', 'Viajar en el Tiempo'],
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['Super Fuerza'],
        getNombre: function () {
            return this.name;
        }
    };
    console.log(flash.getNombre());
})();
