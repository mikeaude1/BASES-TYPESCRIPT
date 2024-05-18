(()=>{
    abstract class Mutante{
        constructor(
            public name:string,
            public realName:string
        ){}
    }
    class Xmen extends Mutante{
       salvarMundo(){
        return 'Mundo a Salvo!!!'
       }
    }
    class Villian extends Mutante{
       conquistrMundo(){
        return 'Mundo Consquistado!!!'
       }
    }

    const wolverine= new Xmen('Wolverine','Logan');
    const Magneto= new Villian('Magneto','Magnus');
    console.log(wolverine.salvarMundo());
    console.log(Magneto.conquistrMundo());

    const printName=(character: Mutante)=>{
        console.log(character.realName);
    }
    printName(wolverine);
    printName(Magneto);

})()