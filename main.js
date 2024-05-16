"use strict";
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman('LLamando a Batman');
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
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
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, " ").concat(lastName || 'No lastName').toUpperCase();
        }
        else {
            return "".concat(firstName, " ").concat(lastName || 'No lastName');
        }
    };
    var name = fullName('Tony', 'Stark', true);
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName || 'No lastName');
    };
    var name = fullName('Tony');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName, lastName) {
        if (!firstName) {
            throw new Error('Nombre requerido ');
        }
        return "".concat(firstName, " ").concat(lastName);
    };
    var noName;
    var name = fullName('Tony', 'Stark');
    console.log({ name: name });
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'Kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumber = function (a, b) { return a + b; };
    var greet = function (name) { return "hola ".concat(name); };
    var saveTheWorld = function () { return "El mundo esta salvado"; };
    var myFunction;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: undefined,
        mutante: true
    }];
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
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
(function () {
    var flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo'],
    };
    var superman = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super Velocidad', 'Volar'],
        getNombre: function () { return this.name; }
    };
})();
(function () {
    var myCustomVariable = 'fernando';
    console.log(myCustomVariable);
    myCustomVariable = 20;
    console.log(myCustomVariable);
    myCustomVariable = {
        name: 'bruce',
        age: 20,
        powers: [1]
    };
    console.log(myCustomVariable);
})();
(function () {
    var isSuperman = true;
    var isBatman = true;
    isSuperman = (isBatman) ? true : false;
    console.log({ isSuperman: isSuperman });
})();
(function () {
    var avengers = 10;
    console.log(Number);
    var villans = 20;
    if (avengers < villans) {
        console.log('estamos en problemas');
    }
    else {
        console.log('nos salvamos');
    }
    avengers = Number('123');
    console.log({ avengers: avengers });
})();
(function () {
    var _a;
    var batman = 'batman';
    var linternaVerde = "Linterna's Verde";
    var volcanNegro = "H\u00E9roe: Volcan Negro";
    var abc = 123;
    console.log("I\u00B4m ".concat(linternaVerde, ", ").concat(abc.toString(), " "));
    console.log(volcanNegro.toUpperCase());
    console.log(((_a = volcanNegro[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No está Precente');
})();
(function () {
    var avenger = 123;
    var exist;
    var power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    console.log(avenger.charAt(0));
    avenger = 150.234545;
    console.log(avenger.toFixed(2));
    console.log(avenger.toFixed(2));
})();
(function () {
    var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    num.push(true);
    var villan = ['Omega Rojo', 'Dormammu', 'Guason'];
    villan.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
(function () {
    var hero = ['Dr Strange', 100, true];
    hero[1] = 50;
    hero[0] = 'Ironman';
    hero[2] = false;
    console.log(hero);
})();
(function () {
    var AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["medium"] = 2] = "medium";
        AudioLevel[AudioLevel["max"] = 10] = "max";
    })(AudioLevel || (AudioLevel = {}));
    var currentAudio = AudioLevel.medium;
    console.log(currentAudio);
})();
(function () {
    function callBatman() {
    }
    var callSuperman = function () {
        return;
    };
    var a = callBatman();
    console.log(a);
})();
(function () {
    var error = function (message) {
        if (true) {
            throw new Error(message);
        }
        return 1;
    };
    error('Auxilio!');
    console.log('Hola mundo');
})();
(function () {
    var nada = undefined;
    console.log(nada);
    var isActive = null;
    console.log(isActive);
})();
//# sourceMappingURL=main.js.map