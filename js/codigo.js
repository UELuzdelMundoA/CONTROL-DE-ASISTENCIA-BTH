// objetos para almacenar los datos de los trimestres
const clavesTrimestre = {
    "1er Trimestre": "t1",
    "2do Trimestre": "t2",
    "3er Trimestre": "t3",
    };
// objetos para almacenar los nombres de los trimestres
const nombresTrimestre = {
    t1: "1er Trimestre",
    t2: "2do Trimestre",
    t3: "3er Trimestre"
    };
//modo administrador desactivado    
let modoAdministradorActivo = false;

//activar modo administrador
function activarModoAdministrador(){
    const contrasena = prompt("Introduce la contraseña para acceder como administrador:");
    if (contrasena === "admin123") {
        modoAdministradorActivo = true;
        alert("Modo administrador activado");
    } else {
        alert("Contraseña incorrecta");
    }
}