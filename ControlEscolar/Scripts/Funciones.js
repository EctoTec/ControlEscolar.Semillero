let nombre = document.getElementById("Nombre");
let apellidos = document.getElementById("Apellidos");
let carrera = document.getElementById("Carrera");
let semestre = document.getElementById("Semestre");

let GuardarDatoss = () => {
    $.ajax({
        type: "POST",
        url: "/api/DatosAlumnos",
        data: {
            "Nombre": nombre.value,
            "Apellidos": apellidos.value,
            "Carrera": carrera.value,
            "Semestres": semestre.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#modalAlumnos').modal('hide');
            return response;
        }
    });
}

let table_body = document.getElementById("cuerpo_tabla");

let drawTableAlumnos = (arreglo) => {
    let content = table_body.innerHTML;
    for (i of arreglo) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Nombre + '</td><td>' + i.Apellidos + '</td><td>' + i.Carrera + '</td><td>' + i.Semestres + '</td></tr>';
        content = content + row;
    }
    table_body.innerHTML = content;
}

window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/DatosAlumnos",
        dataType: "JSON",
        success: (response) => {
            drawTableAlumnos(response);
            return response;
        }
    });
}

function Buscar() {
    var input, table, tr, td, i, valor;
    input = document.getElementById("inputBuscar");
    filter = input.value;
    table = document.getElementsByClassName("table");
    tr = document.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            valor = td.textContent || td.innerText;
            if (valor.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}