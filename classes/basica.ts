(()=>{

 class Avenger{
   /*  private name :string;
    public team :string;
    public realName?:string;*/
    static avgAge?:number =35; 
    static getAvgAge(){
        return this.name;
    }


    constructor(private name:string, private team:string,public realName?:string, avgAge:number=35 ) {
       /*  this.name = name;
        this.team = team;
        this.realName = realName; */
       
    }
    public bio(){
        return `${this.name} (${this.team})!!!`
    }
 }

 const antman: Avenger = new Avenger ('Antman', 'Capitan','Scott Lang');
 Avenger.avgAge ;
 //console.log(antman);
// console.log(Avenger.getAvgAge());
})()