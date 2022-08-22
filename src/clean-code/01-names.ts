(() => {

    // Ejemplo
    // Archivos a evaluar - files to evaluate

    // Bad
    /* const fs = [
        { id: 1, f: false },
        { id: 2, f: false },
        { id: 3, f: true },
        { id: 4, f: false },
        { id: 5, f: false },
        { id: 7, f: true },
    ]; */

    // Better
    const filesToEvaluate = [
        { id: 1, flagged: false },
        { id: 2, flagged: false },
        { id: 3, flagged: true },
        { id: 4, flagged: false },
        { id: 5, flagged: false },
        { id: 7, flagged: true },
    ]; 
    
    // Archivos marcados para borrar - files to delete
    //Bad
    // const arhivos = fs.map( f => f.f );

    // Better
    const filesToDelete = filesToEvaluate.map( file => file.flagged );

    // Bad 
    class AbstractUser { };
    class UserMixin { };
    class UserImplementation { };
    interface IUser { };

    // Better
    class User { };
    interface User { };

    // día de hoy - today
    // Bad
    //const ddmmyyyy = new Date();

    // Better
    const todayDate = new Date();
    


    // días transcurridos - elapsed time in days
    // Bad
    // const d: number = 23;

    // Better
    const elapsedTimeInDays: number = 23;
    
    // número de archivos en un directorio - number of files in directory
    // Bad
    // const dir = 33;

    // Better
    const numberOfFilesInDirectory = 33;
    


    // primer nombre - first name
    // Bad
    //const nombre = 'Jose';

    // Better
    const firstName = 'Jose';
    


    // primer apellido - last name
    // Bad
    // const apellido = 'Galdamez';

    // Better
    const lastName = 'Galdamez';



    // días desde la última modificación - days since modification
    // Bad
    // const dsm = 12;

    // Better
    const daySinceLastModification = 12;
    



    // cantidad máxima de clases por estudiante - max classes per student
    // Bad
    // const max = 6;

    // Better
    const maxClassesPerStudent = 6;

})();
