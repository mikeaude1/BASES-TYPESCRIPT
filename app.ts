(() => {

    // Tipos
    const batman:string = 'Bruce';
    const superman:string = 'Clark';
  
    const existe:boolean = false;
  
    // Tuplas
    const parejaHeroes:[string,string] = [batman,superman];
    const villano:[string,number,boolean] = ['Lex Lutor',5,true];
  
    // Arreglos
    const aliados :string[] = ['Mujer Maravilla','Acuaman','San', 'Flash'];
  
    //Enumeraciones
    enum strongHeroes{
      acuaman,
      batman,
      flash = 5,
      superman = 100,
    }
    const fuerzaFlash:strongHeroes = strongHeroes.flash;
    const fuerzaSuperman:strongHeroes = strongHeroes.superman;
    const fuerzaBatman : strongHeroes = strongHeroes.batman;
    const fuerzaAcuaman : strongHeroes = strongHeroes.acuaman;
    // Retorno de funciones
    function activar_batiseñal():string{
      return 'activada';
    }
  
    function pedir_ayuda():void{
      console.log('Auxilio!!!');
    }
  
    // Aserciones de Tipo
    const poder: any = '100';
    const largoDelPoder:number = (poder as string).length;
    console.log( largoDelPoder );
  
  
  })()
  
  