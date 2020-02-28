//Botones
let btn_Add_Profesor = document.getElementById("Ag_Add_Profesor");
let btn_Del_Profesor = document.getElementById("Del_Prfoesor");

//Inputs
let input_P_Nombre = document.getElementById("P_Nombre");
let input_P_Apellido = document.getElementById("P_Apellido");
let input_P_Area = document.getElementById("P_Area");
//let input_P_Del_Id = document.getElementById("Id_Eliminar");

//---
let input_M_Area = document.getElementById("Area_Mat");
let input_P_Table = document.getElementById("T_Prof_body_content");

/*btn_Del_Profesor.onclick = () => {
    $.ajax({
        type: "DELETE",
        url: "/api/Profesor",
        data: {
            "Prf_Id": input_P_Del_Id.value
        },
        dataType: "JSON",
        success: (response) => {
            $(alert("Eliminado con Exito"));
            return response;
        }
    });
}*/


btn_Add_Profesor.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Profesor",
        data: {
            "Nombre": input_P_Nombre.value,
            "Apellido": input_P_Apellido.value,
            "Area": input_M_Area.value

        },
        dataType: "JSON",
        success: (response) => {
            $('#modalProfesores').modal('hide');
            return response;
        }
    });
}

let drawSelectArea = (arreglo) => {
    let content = input_M_Area.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Area.innerHTML = content;
}


let drawTableProfesor = (arreglo) => {
    let content = input_P_Table.innerHTML;
    for (i of arreglo) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Nombre + '</td><td>' + i.Apellido + '</td><td>' + i.Area + '</td><td><button type="button" class="btn btn-secondary">Editar</button><button type="button" class="btn btn-warning">Eliminar</button></td></tr>';
        content = content + row;
        console.log(content);
    }
    input_P_Table.innerHTML = content;
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
        url: "/api/Profesor",
        dataType: "JSON",
        success: (response) => {
            console.log(response);
            drawTableProfesor(response);
            return response;
        }
    });
}