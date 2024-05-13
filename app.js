"use strict";
(function () {
    // Tipos
    var batman = 'Bruce';
    var superman = 'Clark';
    var existe = false;
    // Tuplas
    var parejaHeroes = [batman, superman];
    var villano = ['Lex Lutor', 5, true];
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var strongHeroes;
    (function (strongHeroes) {
        strongHeroes[strongHeroes["acuaman"] = 0] = "acuaman";
        strongHeroes[strongHeroes["batman"] = 1] = "batman";
        strongHeroes[strongHeroes["flash"] = 5] = "flash";
        strongHeroes[strongHeroes["superman"] = 100] = "superman";
    })(strongHeroes || (strongHeroes = {}));
    var fuerzaFlash = strongHeroes.flash;
    var fuerzaSuperman = strongHeroes.superman;
    var fuerzaBatman = strongHeroes.batman;
    var fuerzaAcuaman = strongHeroes.acuaman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
