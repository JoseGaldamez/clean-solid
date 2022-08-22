(() => {

    // arreglo de temperaturas celsius
    // bad
    //const arrayOfNums = [33.6, 12.34];

    // better
    const temperaturesInCelsius = [33.6, 12.34];




    // Dirección ip del servidor
    // bad
    //const ip = '123.123.123.123';

    // better
    const serverIPAddress = '123.123.123.123';




    // Listado de usuarios
    // bad
    // const people = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // better
    const users = [{id: 1, email: 'fernando@google.com'},{ id: 2, email: 'juan@google.com' }, { id: 3, email: 'melissa@google.com' }];

    // Listado de emails de los usuarios
    // bad
    // const emails = users.map( u => u.email );

    // better
    const emails = users.map( user => user.email );




    // Variables booleanas de un video juego
    // bad
    /*
    const jump = false;
    const run = true;
    const noTieneItems = true;
    const loading = false;
    */

    // better
   const hasJumped = false;
   const isRunning = true;
   const hasItems = true;
   const isLoading = false;



    // Otros ejercicios
    // tiempo inicial
    // bad
    //const start = new Date().getTime();

    // better
    const initialTime = new Date().getTime();
    //....
    // 3 doritos después
    //...
    // Tiempo al final
    // bad
    //const end = new Date().getTime() - start;

    // better
    const endTime = new Date().getTime() - initialTime;






    // Funciones
    // Obtiene los libros

    // bad
    /*function book() {
        throw new Error('Function not implemented.');
    } */

    // Better
    function getBook() {
        throw new Error('Function not implemented.');
    }





    // obtiene libros desde un URL
    // bad
    /*function BooksUrl( u: string) {
        throw new Error('Function not implemented.');
    }*/

    // Better
    function getBooksFromUrl( url: string) {
        throw new Error('Function not implemented to get from: ' + url);
    }
    



    // obtiene el área de un cuadrado basado en sus lados
    // bad
   /* function areaCuadrado( s: number ) {
        throw new Error('Function not implemented.');
    } */

    // Better
    function getAreaCuadrado( side: number ) {
        throw new Error('Function not implemented.' + side);
    }



    // imprime el trabajo
    /* function printJobIfJobIsActive() {
        throw new Error('Function not implemented.');
    } */

    // Better
    function printJob() {
        throw new Error('Function not implemented.');
    }

})();