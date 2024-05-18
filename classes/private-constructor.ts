(()=>{
    class Apocalipsis{
        static instance:Apocalipsis;
      private  constructor(public name: string){

      }    

      static callApocalipsis(): Apocalipsis{
        if(!Apocalipsis.instance){
            Apocalipsis.instance = new Apocalipsis('Soy Apocalipsis el único')
        }
        return Apocalipsis.instance;
      }
      changeName(newNAme:string): void{
        this.name = newNAme;
      }

    }

const apocalipsis1 = Apocalipsis.callApocalipsis()
const apocalipsis2 = Apocalipsis.callApocalipsis()
const apocalipsis3 = Apocalipsis.callApocalipsis()

apocalipsis1.changeName('Xavier');
/* const apocalipsis1 = new Apocalipsis('Soy Apocalipsis1... el único')
const apocalipsis2 = new Apocalipsis('Soy Apocalipsis1... el único')
const apocalipsis3 = new Apocalipsis('Soy Apocalipsis1... el único')
 */

console.log(apocalipsis1,apocalipsis2,apocalipsis3);
})()