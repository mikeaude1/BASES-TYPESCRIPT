"use strict";
const conducirBatimovil = (auto) => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
};
const batimovil = {
    encender: false,
    velocidadMaxima: 0,
    acelerar() {
        console.log("...... gogogo!!!");
    }
};
const guason = {
    reir: true,
    comer: true,
    llorar: false
};
const reir = (guason) => {
    if (guason.reir) {
        console.log("JAJAJAJA");
    }
};
const ciudadGotica = (ciudadanos) => {
    return ciudadanos.length;
};
class Persona {
    imprimirBio() {
        console.log(this.nombre);
    }
}
(() => {
    let flash = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el Tiempo'],
    };
    let superman = {
        name: 'Clark Kent',
        age: 24,
        powers: ['Super Velocidad', 'Volar'],
        getNombre() { return this.name; }
    };
})();
(() => {
    class Mutant {
        mutantPower() {
            return this.name + '' + this.realName;
        }
    }
})();
(() => {
    const client = {
        name: 'Miguel',
        age: 39,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa'
        }
    };
    const client2 = {
        name: 'Melissa',
        age: 25,
        address: {
            id: 155,
            zip: 'LMP SUD',
            city: 'Chiapas'
        }
    };
    const client3 = {
        name: 'Daniela',
        age: 21,
    };
})();
(() => {
    let addNumbersFunction;
    addNumbersFunction = (a, b) => {
        return 10;
    };
})();
//# sourceMappingURL=main.js.map