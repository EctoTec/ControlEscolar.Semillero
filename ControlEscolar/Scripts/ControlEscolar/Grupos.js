let btn_Add_Grupo = document.getElementById("save");

var input_Materia = document.getElementById("Materia");
var input_Maestro = document.getElementById("Maestro");
var input_Turno = document.getElementById("Turno");
let Table = document.getElementById("T_Grupo")

input_Materia.addEventListener('change', function () {
    var selectedOption1 = this.options[select.selectedIndex];
    console.log(selectedOption1.value + ":" + selectedOption1.text);
});
input_Maestro.addEventListener('change', function () {
    var selectedOption2 = this.options[select.selectedIndex];
    console.log(selectedOption2.value + ":" + selectedOption2.text);
});
input_Turno.addEventListener('change', function () {
    var selectedOption3 = this.options[select.selectedIndex];
    console.log(selectedOption3.value + ":" + selectedOption.text);
});

btn_Add_Grupo.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Grupo",
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

let drawMateria = (arreglo) => {
    let content = input_Materia.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Materia_Id + '</option>';
        content = content + option;
    }
    input_Materia.innerHTML = content;
}

let drawMaestro = (arreglo1) => {
    let content1 = input_Maestro.innerHTML;
    for (j of arreglo1) {
        let option = '<option value="' + j.Id + '">' + j.Maestro_Id + '</option>';
        content = content + option;
    }
    input_Maestro.innerHTML = content;
}

let drawTurno = (arreglo2) => {
    let content = input_Materia.innerHTML;
    for (k of arreglo2) {
        let option = '<option value="' + k.Id+ '">' + k.Turno + '</option>';
        content = content + option;
    }
    input_Turno.innerHTML = content;
}

let drawTable = (arreglo3) => {
    let content = Table.innerHTML;
    for (l of arreglo3) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Materia_Id + '</td><td>' + j.Maestro_Id + '</td><td>' + k.Turno + '</td></tr>';
        content = content + row;
        console.log(content);
    }
    Table.innerHTML = content;
}


window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Grupo",
        dataType: "JSON",
        success: (response) => {
            return response;
        }
    });
}