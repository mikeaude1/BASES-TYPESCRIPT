( () =>{

    let flash: {name:string,age?:number,powers:string[], getNombre?: () => string }= {
        name: 'Barry Allen',
        age:24,
        powers:['SuperVelocidad','Viajar en el Tiempo'],
    }

    flash = {
        name: 'Clark kent',
        age: 60,
        powers:['Super Fuerza'],

        getNombre() {
            return this.name
        } 
     
    }
    console.log( flash.getNombre() )
    
  
}
)()