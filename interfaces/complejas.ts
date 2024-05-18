(()=>{
    interface Client{
        name:string;
        age?:number;
        address?:Address
    }
    
        interface Address{
            id:number;
            zip:string;
            city:string;
        }
    
    const client:Client={
        name:'Miguel',
        age:39,
        address:{
            id:125,
            zip:'KY2 SUD',
            city:'Ottawa'
        }
    }
    const client2:Client={
        name:'Melissa',
        age:25,
        address:{
            id:155,
            zip:'LMP SUD',
            city:'Chiapas'
        }
    }
    const client3:Client={
        name:'Daniela',
        age:21,
        
    }
})()