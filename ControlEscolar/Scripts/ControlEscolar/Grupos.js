let btn_Add_Grupo = document.getElementById("save");

let input_Materia = document.getElementById("Materia");
let input_Maestro = document.getElementById("Maestro");
let input_Turno = document.getElementById("Turno");
input_Turno.addEventListener('change', function () {
    var selectedOption3 = this.options[select.selectedIndex];
    console.log(selectedOption3.value + ":" + selectedOption.text);
});
let Table = document.getElementById("T_Grupo")

btn_Add_Grupo.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/grupos",
        data: {
            "Materia": input_Materia.value,
            "Profesor": input_Mestro.value,
            "Turno": input_Turno.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#Ag_Grupo').modal('hide');
            return response;
        }
    })
}

let drawTable = (arreglo) => {
    let content = Table.innerHTML;
    for (i of arreglo3) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Materia + '</td><td>' + i.Maestro + '</td><td>' + i.Turno + '</td></tr>';
        content = content + row;
    }
    Table.innerHTML = content;
}


window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Grupo",
        dataType: "JSON",
        success: (response) => {
            drawTable(response);
            return response;
        }
    });
}