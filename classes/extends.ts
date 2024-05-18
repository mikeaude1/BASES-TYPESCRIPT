(()=>{
    class Avenger{
        constructor(public name:string, 
            public realName:string
        ){
          //  console.log('Constructor de avangers llamado!');
        }
        protected getFullName(){
            return `${this.name}, ${this.realName}`
        
        }
    }


    class Xmen extends Avenger{
        constructor(name:string,realName:string,public isMutant:boolean,){
            super(name, realName);
            //console.log('Constructor de xmen llamado!!');
        }
            get FullNAme(){
                return `${this.name}-${this.realName}`
            }
            set FullNAme(name:string){
                if(name.length < 3){
                    throw new Error('El nombre debe ser mayor a 3 caracteres');
                }
                this.name = name;
                return 
            }

            getFullNameDesdeXmen(){
               // console.log(super.getFullName());
            }
        }
    
   const wolverine = new Xmen('Woverine','Logan', true)
   /*   console.log(wolverine);
    wolverine.getFullNameDesdeXmen();
    console.log( wolverine.FullNAme );
    wolverine.FullNAme='fernando';
    console.log( wolverine.FullNAme ); */
})()