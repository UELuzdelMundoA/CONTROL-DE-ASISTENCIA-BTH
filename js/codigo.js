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
//Crear lista de alumnos
function crearListaEstudiantesPorDefecto() {
    const estudiantes = [];
    for (let i = 1; i <= 45; i++) {
        estudiantes.push(nombre: `Estudiante ${i}`,asistencia{})
    }
    return estudiantes;
}
//Mostrar años Disponibles
function mostrarAnios(carrera) {
    // document.getElementById(): método del DOM que selecciona un elemento HTML por su ID
    const contenido = document.getElementById('contenido');

    // .innerHTML: propiedad que permite reemplazar el contenido HTML de un elemento
    // En este caso, se inserta HTML con tres tarjetas para seleccionar los años escolares en el div id contenido
    contenido.innerHTML = `
    <h2>${carrera}</h2>
    <div class='cuadricula'>
        <div class="tarjeta" onclick="mostrarTrimestres('${carrera}', '4to')">4to de Secundaria</div>
        <div class="tarjeta" onclick="mostrarTrimestres('${carrera}', '5to')">5to de Secundaria</div>
        <div class="tarjeta" onclick="mostrarTrimestres('${carrera}', '6to')">6to de Secundaria</div>
    </div>`;
}
//Mostrar trimestres disponibles
function mostrarTrimestres(carrera, anio) {
    const contenido = document.getElementById('contenido');

    // Muestra tres botones (tarjetas) para seleccionar los trimestres de un año específico 
    contenido.innerHTML = `
    <h2>${carrera} - ${anio}</h2>
    <div class='cuadricula'>
        <div class="tarjeta" onclick="mostrarTablaAsistencia('${carrera}', '${anio}', '1er Trimestre')">1er Trimestre</div>
        <div class="tarjeta" onclick="mostrarTablaAsistencia('${carrera}', '${anio}', '2do Trimestre')">2do Trimestre</div>
        <div class="tarjeta" onclick="mostrarTablaAsistencia('${carrera}', '${anio}', '3er Trimestre')">3er Trimestre</div>
    </div>`;
}
