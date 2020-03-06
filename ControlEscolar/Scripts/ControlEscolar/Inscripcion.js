let gpoId = document.getElementById("gpoId");
let mat = document.getElementById("matricula");

const obtenerMatricula = () => {
    localStorage.setItem("matAlum", $('#matricula').val())
}

function addGpo(id) {
    $.ajax({
        type: "POST",
        url: "/api/InscripcionApi",
        data: {
            "IdGpo": id,
            "IdAlumno": localStorage.getItem("matAlum")
        },
        dataType: "JSON",
        success: (response) => {
            alert("Se ha inscrito satisfactoriamente");
            return response;
        },
        Error: (error) => {
            alert("Error al guardar los datos" + error)
            return error;
        }
    });
}

//VARIABLES ALUMNOSGPO
let selectCarrera = document.getElementById("selectCarrera").value;
let selectMateria = document.getElementById("selectMateria").value;
let selectGrupo = document.getElementById("selectGrupo").value;

let btnConsultar = document.getElementById("btnConsultar");

