(()=>{

    const fullName = ( firstName:string,lastName:string):string =>{
        if(!firstName){
            throw new Error('Nombre requerido ');
        }
        return `${firstName} ${lastName}`;

    }
    let noName:string;
    const name = fullName('Tony','Stark');
    console.log({name});

     })()