//Botones
let btn_Add_Profesor = document.getElementById("Ag_Add_Profesor");

//Inputs
let input_P_Nombre = document.getElementById("P_Nombre");
let input_P_Apellido = document.getElementById("P_Apellido");
let input_P_Area = document.getElementById("P_Area");

//---
let input_M_Area = document.getElementById("Area_Mat");
let input_P_Table = document.getElementById("T_Prof_body_content");


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
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Nombre + '</td><td>' + i.Apellido + '</td><td>' + i.Area + '</td></tr>';
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

function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}