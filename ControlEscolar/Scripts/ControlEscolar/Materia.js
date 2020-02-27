let btn_Add_Carrera = document.getElementById("Ag_Add_Carrera");
let btn_Add_Area = document.getElementById("Ag_Add_Area");
let btn_Add_Materia = document.getElementById("Ag_Add_Materia");

let input_C_Nombre = document.getElementById("C_Nombre");
let input_C_Nivel = document.getElementById("C_Nivel");
let input_A_Nombre = document.getElementById("A_Nombre");

let input_M_Carrera = document.getElementById("Carrera_Mat");
let input_M_Area = document.getElementById("Area_Mat");
let input_M_Nombre = document.getElementById("Nombre_Mat");

let input_M_Table = document.getElementById("T_body_content");

let drawSelectCarrera = (arreglo) => {
    let content = input_M_Carrera.innerHTML;
    for(i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Carrera.innerHTML = content;
}

let drawSelectArea = (arreglo) => {
    let content = input_M_Area.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Area.innerHTML = content;
}

let drawTableMateria = (arreglo) => {
    let content = input_M_Table.innerHTML;
    for (i of arreglo) {
        let row = '<tr><td>' + i.Nombre + '</td><td>' + i.Nivel + '</td><td>' + i.Carrera + '</td></tr>';
        content = content + row;
    }
    input_M_Table.innerHTML = content;
}

btn_Add_Area.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Area",
        data: {
            "Nombre": input_A_Nombre.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#Ag_Area').modal('hide');
            return response;
        }
    });
}

btn_Add_Materia.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Materia",
        data: {
            "Nombre": input_M_Nombre.value,
            "Carrera": input_M_Carrera.value,
            "Area": input_M_Area.value
        },
        dataType: "JSON",
        success: (response) => {
            alert("Se ha agregado la materia satisfactoriamente");
            return response;
        }
    });
}

btn_Add_Carrera.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Carrera",
        data: {
            "Nombre": input_C_Nombre.value,
            "Nivel": input_C_Nivel.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#Ag_Carrera').modal('hide');
            return response;
        }
    });

}

window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Area",
        dataType: "JSON",
        success: (response) => {
            drawSelectArea(response);
            return response;
        }
    });
    $.ajax({
        type: "GET",
        url: "/api/Carrera",
        dataType: "JSON",
        success: (response) => {
            drawSelectCarrera(response);
            return response;
        }
    });
    $.ajax({
        type: "GET",
        url: "/api/Materia",
        dataType: "JSON",
        success: (response) => {
            drawTableMateria(response);
            return response;
        }
    });
}
