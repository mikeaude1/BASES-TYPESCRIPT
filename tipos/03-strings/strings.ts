(()=>{
    const batman : any ='batman';
    const linternaVerde : string ="Linterna's Verde";
    const volcanNegro :string =`Héroe: Volcan Negro`;
    const abc = 123;

    console.log(`I´m ${linternaVerde}, ${abc.toString()} `);

    console.log(volcanNegro.toUpperCase());

    console.log(volcanNegro[10]?.toUpperCase()||'No está Precente');

})()