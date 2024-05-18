(()=>{
    interface Xmen {
        name:string;
        realName:string;
        mutantPower(id:number):string;

    }
interface Human{
age:number;
}

    class Mutant implements Xmen,Human{
        public name: 'Gambito';
        public realName: 'Remy Etienne LeBeau'; 
        public age:25;
        mutantPower(){
            return this.name+''+this.realName
        }

    }
})()