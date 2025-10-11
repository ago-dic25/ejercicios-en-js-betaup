// var alumnos = [
//     "Cesar Oziel",
//     "Juan Perez",
//     "Maria Lopez",
//     "Ana Gomez",
//     "Luis Martinez",
//     "Sofia Rodriguez",
//     "Carlos Sanchez",
//     "Carlos Jimenez",
//     "Marta Fernandez",
//     "Diego Ramirez",
//     "Lucia Torres",
//     "Pedro Diaz",
//     "Brandon Uriel"
// ];

// console.log(alumnos)

// // Elimina el ultimo alumno del arreglo
// alumnos.pop();
// console.log(alumnos);

// // Agrega un nuevo alumno al final del arreglo
// alumnos.push("Brandon Reyna");
// console.log(alumnos);

// // Agrega a regina sosa al inicio del arreglo
// alumnos.unshift("Regina Sosa");
// console.log(alumnos);   

// // Elimina a regina sosa del arreglo
// alumnos.shift();
// console.log(alumnos);

// // Cambia el nombre del alumno en la posicion 3 por "Ana G."
// alumnos[3] = "Ana G.";
// console.log(alumnos);

// alumnos.indexOf("Ana G.") // 3
// console.log(alumnos.indexOf("Ana G."))
// console.log(alumnos.includes("Ana G.")) // true

// console.log(alumnos.find(nombre => nombre == "Brandon")) // "Brandon"

// console.log(alumnos.findIndex(nombre => nombre == "Brandon Reyna")) // 11


// // Codigo de clase (ejercicio)
// const filtroInput = document.getElementById("filtroAlumno");
// const botonConsulta = document.getElementById("button");
// const listaAlumnos = document.getEblementById("listaAlumnos");

// function mostrarAlumnos(alumnosFiltrados) {
//     listaAlumnos.innerHTML = "";
//     alumnosFiltrados.forEach(alumno => {
//         const li = document.createElement("li");
//         li.textContent = alumno;
//         listaAlumnos.appendChild(li);
//     });
// }

// function filtrarAlumnos() {
//     const filtro = filtroInput.value.trim().toLowerCase();
    
//     // Si no hay filtro, mostrar todos los alumnos
//     if (filtro === '') {
//         mostrarAlumnos(alumnos);
//     } else {
//         // Filtrar alumnos que contengan el texto del filtro
//         const alumnosFiltrados = alumnos.filter(alumno => 
//             alumno.toLowerCase().includes(filtro)
//         );
//         mostrarAlumnos(alumnosFiltrados);
//     }
// }

// // Event listeners
// botonConsulta.addEventListener('click', filtrarAlumnos);
// // Opcional: filtrar mientras escribes
// filtroInput.addEventListener('input', filtrarAlumnos);
// // Mostrar todos los alumnos al cargar la pagina
// mostrarAlumnos(alumnos);

var alumnos = [
    {
        nombre: "Cesar",
        apellidoPaterno: "Guajardo",
        apellidoMaterno: "Rodriguez",
        matricula: "2021001"
    },
    {
        nombre: "Juan",
        apellidoPaterno: "Perez",
        apellidoMaterno: "Garcia",
        matricula: "2021002"
    },
    {
        nombre: "Maria",
        apellidoPaterno: "Lopez",
        apellidoMaterno: "Martinez",
        matricula: "2021003"
    },
    {
        nombre: "Ana",
        apellidoPaterno: "Gomez",
        apellidoMaterno: "Rodriguez",
        matricula: "2021004"
    },
    {
        nombre: "Luis",
        apellidoPaterno: "Martinez",
        apellidoMaterno: "Sanchez",
        matricula: "2021005"
    },
    {
        nombre: "Sofia",
        apellidoPaterno: "Rodriguez",
        apellidoMaterno: "Fernandez",
        matricula: "2021006"
    },
    {
        nombre: "Carlos",
        apellidoPaterno: "Sanchez",
        apellidoMaterno: "Torres",
        matricula: "2021007"
    },
    {
        nombre: "Carlos",
        apellidoPaterno: "Jimenez",
        apellidoMaterno: "Diaz",
        matricula: "2021008"
    },
    {
        nombre: "Marta",
        apellidoPaterno: "Fernandez",
        apellidoMaterno: "Lopez",
        matricula: "2021009"
    },
    {
        nombre: "Diego",
        apellidoPaterno: "Ramirez",
        apellidoMaterno: "Gutierrez",
        matricula: "2021010"
    },
    {
        nombre: "Lucia",
        apellidoPaterno: "Torres",
        apellidoMaterno: "Morales",
        matricula: "2021011"
    },
    {
        nombre: "Pedro",
        apellidoPaterno: "Diaz",
        apellidoMaterno: "Castro",
        matricula: "2021012"
    },
    {
        nombre: "Brandon",
        apellidoPaterno: "Reyna",
        apellidoMaterno: "Valdez",
        matricula: "2021013"
    }
];

console.log(alumnos);

// Variables del ejercicio JSON
const filtroInputJSON = document.getElementById("filtroAlumno");
const botonConsultaJSON = document.getElementById("button");
const listaAlumnosJSON = document.getElementById("listaAlumnos");

// Funcion para mostrar alumnos 
function mostrarAlumnosJSON(alumnosFiltrados) {
    listaAlumnosJSON.innerHTML = "";
    
    for (let i = 0; i < alumnosFiltrados.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${alumnosFiltrados[i].nombre} ${alumnosFiltrados[i].apellidoPaterno} ${alumnosFiltrados[i].apellidoMaterno}</strong>
            <br><span style="color: #666;">Matricula: ${alumnosFiltrados[i].matricula}</span>
        `;
        listaAlumnosJSON.appendChild(li);
    }
}

// Funcion para filtrar alumnos
function filtrarAlumnosJSON() {
    const filtro = filtroInputJSON.value.trim().toLowerCase();
    
    // Si no hay filtro, mostrar TODOS los alumnos
    if (filtro === '') {
        mostrarAlumnosJSON(alumnos); // Mostrar todos en lugar de limpiar
        return;
    }
    
    const alumnosFiltrados = [];
    
    for (let i = 0; i < alumnos.length; i++) {
        const nombreCompleto = `${alumnos[i].nombre} ${alumnos[i].apellidoPaterno} ${alumnos[i].apellidoMaterno}`.toLowerCase();
        const matricula = alumnos[i].matricula.toLowerCase();
        
        if (nombreCompleto.includes(filtro) || matricula.includes(filtro)) {
            alumnosFiltrados.push(alumnos[i]);
        }
    }
    
    mostrarAlumnosJSON(alumnosFiltrados);
}

// Event listeners JSON
botonConsultaJSON.addEventListener('click', filtrarAlumnosJSON);
filtroInputJSON.addEventListener('input', filtrarAlumnosJSON);

// Mostrar todos los alumnos al cargar la pagina
mostrarAlumnosJSON(alumnos);