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
