let btn_Add_Grupo = document.getElementById("save");
let input_Materia = document.getElementById("Materia");
let input_Maestro = document.getElementById("Maestro");
let input_Turno = document.getElementById("Turno");

let GuardarDatosGrupo = () => {
    $.ajax({
        type: "POST",
        url: "/api/Grupos",
        data: {
            "Materia": input_Materia.value,
            "Profesor": input_Maestro.value,
            "Turno": input_Turno.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#Ag_Grupo').modal('hide');
            return response;
        }
    });
}

let Table = document.getElementById("datos_Grupo");

let drawTable = (arreglo) => {
    let content = Table.innerHTML;
    for (i of arreglo) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Materia + '</td><td>' + i.Maestro + '</td><td>' + i.Turno + '</td></tr>';
        content = content + row;
    }
    Table.innerHTML = content;
}


window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Grupos",
        dataType: "JSON",
        success: (response) => {
            drawTable(response);
            return response;
        }
    });
}