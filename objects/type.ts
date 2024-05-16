( () =>{

    type Hero = {
        name:string;
        age?:number;
        powers:string[]; 
        getNombre?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Allen',
        age:24,
        powers:['Super Velocidad','Viajar en el Tiempo'],
    }

  let superman: Hero = {
        name: 'Clark Kent',
        age:24,
        powers:['Super Velocidad','Volar'],
        getNombre(){ return this.name}
    }
     
    }
  

)()