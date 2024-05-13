(()=>{
    const a = 10;
    let b;
    function sayHello(msg = 'Hola Mundo') {
        console.log(msg);
        return msg;
    }
    let s = sayHello('hola MuNdo');
    console.log(s.toUpperCase());
    })()