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
            cargarProfesor();
            $('#modalAddProf').modal('show');
            setTimeout(function () {
                $('#modalAddProf').modal('hide');
            }, 1500);
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
        let row = '<tr><td>' + getNumeroProfesor(i.Id) + '</td><td>' + i.Nombre + '</td><td>' + i.Apellido + '</td><td>' + i.Area +
            '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar"><i class="material-icons text-primary">edit</i ></button></td>' +
            '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    input_P_Table.innerHTML = content;
}

function getNumeroProfesor(id) {
    if (id < 1) {
        id = "00000" + id;
    }
    else if (id < 10) {
        id = "0000" + id;
    }
    else if (id < 100) {
        id = "000" + id;
    }
    else if (id < 1000) {
        id = "00" + id;
    }
    else if (id < 10000) {
        id = "0" + id;
    }
    else if (id >= 10000) {
        id = id;
    }
    return id;
}

window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Profesor",
        dataType: "JSON",
        success: (response) => {
            drawTableProfesor(response);
            return response;
        }
    });
}

window.onload = () => {
    cargarProfesor();
    $.ajax({
        type: "GET",
        url: "/api/Area",
        dataType: "JSON",
        success: (response) => {
            drawSelectArea(response);
            return response;
        }
    });
}

//Buscar
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
