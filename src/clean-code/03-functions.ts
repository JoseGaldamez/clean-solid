(() => {

    // función para obtener información de una película por Id
    function getMovieByID( movieId: string ) {
        console.log({ movieId });
    }

    // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
    function getMovieCastByID( movieId: string ) {
        console.log({ movieId });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioByID( ActorId: string ) {
        console.log({ ActorId });
    }

    interface IMovie {
        cast: string[];
        description: string;
        rating: number;
        title: string; 
    }
    
    // Crear una película
    function createMovie( {title, description, rating, cast} : IMovie ) {
        console.log({ title, description, rating, cast });
    }

    function checkFullName( fullName: string ) : boolean {
         // tarea asincrona para verificar nombre
        // ..
        // ..
        if ( fullName === 'fernando' ) return false;
        return true;
    }

    // Crea un nuevo actor
    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( checkFullName( fullName ) ) return false;

        console.log('Crear actor' + fullName + ' ' + birthdate);
        return true;        

    }


    // Continue
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {

        // better
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        return ( isRetired ) ? 3000 : 4000;


        // bad
        // let result: number = 0;
        /*if ( isDead ) {
            result = 1500;
        } else {
            if ( isSeparated ) {
                result = 2500;
            } else {
                if ( isRetired ) {
                    result = 3000;
                } else {
                    result = 4000; 
                }
            }
        }*/
        
    }


})();
