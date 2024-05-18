"use strict";
(() => {
    class Mutante {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
    }
    class Xmen extends Mutante {
        salvarMundo() {
            return 'Mundo a Salvo!!!';
        }
    }
    class Villian extends Mutante {
        conquistrMundo() {
            return 'Mundo Consquistado!!!';
        }
    }
    const wolverine = new Xmen('Wolverine', 'Logan');
    const Magneto = new Villian('Magneto', 'Magnus');
    console.log(wolverine.salvarMundo());
    console.log(Magneto.conquistrMundo());
    const printName = (character) => {
        console.log(character.realName);
    };
    printName(wolverine);
    printName(Magneto);
})();
(() => {
    class Avenger {
        static getAvgAge() {
            return this.name;
        }
        constructor(name, team, realName, avgAge = 35) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        bio() {
            return `${this.name} (${this.team})!!!`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Antman', 'Capitan', 'Scott Lang');
    Avenger.avgAge;
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
        }
        getFullName() {
            return `${this.name}, ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
        }
        get FullNAme() {
            return `${this.name}-${this.realName}`;
        }
        set FullNAme(name) {
            if (name.length < 3) {
                throw new Error('El nombre debe ser mayor a 3 caracteres');
            }
            this.name = name;
            return;
        }
        getFullNameDesdeXmen() {
        }
    }
    const wolverine = new Xmen('Woverine', 'Logan', true);
})();
(() => {
    class Apocalipsis {
        constructor(name) {
            this.name = name;
        }
        static callApocalipsis() {
            if (!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único');
            }
            return Apocalipsis.instance;
        }
        changeName(newNAme) {
            this.name = newNAme;
        }
    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();
    apocalipsis1.changeName('Xavier');
    console.log(apocalipsis1, apocalipsis2, apocalipsis3);
})();
//# sourceMappingURL=main.js.map