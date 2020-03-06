//Botones
let btn_Add_Profesor = document.getElementById("Ag_Add_Profesor");
let btn_Del_Profesor = document.getElementById("Del_Prfoesor");
let btn_edit_Profesor = document.getElementById("Edit_Profesor")

//Inputs
let input_P_Nombre = document.getElementById("P_Nombre");
let input_P_Apellido = document.getElementById("P_Apellido");
let input_P_Area = document.getElementById("P_Area");

//---
let input_M_Area = document.getElementById("Area_Mat");
let input_M_AreaEdit = document.getElementById("Area_MatEdit");
let input_P_Table = document.getElementById("T_Prof_body_content");

//--
let arregloProf = [];
IdEdit = null;


let eliminar = (Id) => {
    $.ajax({
        type: "DELETE",
        url: "/api/Profesor/" + Id,
        dataType: "JSON",
        success: (response) => {
            cargarProfesor();
            $('#modaldelProf').modal('show');
            setTimeout(function () {
                $('#modaldelProf').modal('hide');
            }, 1000);
            return response;
        }
    });
}


btn_Add_Profesor.onclick = () => {
        if (input_P_Nombre !== "" || input_P_Apellido !== "" || input_P_Area !== "" ) {
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
                    }, 1000);
                    return response;
                }
            });
        }
        else {
            alert("Ingrese todos los campos");
        }
}

btn_edit_Profesor.onclick = () => {
    $.ajax({
        type: "PUT",
        url: "/api/Profesor/" + IdEdit,
        data: {
            "Nombre": document.getElementById("P_NombreEdit").value,
            "Apellido": document.getElementById("P_ApellidoEdit").value,
            "Area": document.getElementById("Area_MatEdit").value
        },
        dataType: "JSON",
        success: (response) => {
            IdEdit = null;
            $('#modalEditProf').modal('hide');
            cargarProfesor();
            $('#modalActualizado').modal('show');
            setTimeout(function () {
                $('#modalActualizado').modal('hide');
            }, 1000);
            return response;
        }
    });
}

function editModal(id) {
    IdEdit = id;
    let profesor = arregloProf.find(e => e.Id == id);
    console.log(profesor);
    document.getElementById("P_NombreEdit").value = profesor.Nombre;
    document.getElementById("P_ApellidoEdit").value = profesor.Apellido;
    document.getElementById("Area_MatEdit").value = profesor.Area_Id;
    $('#modalEditProf').modal('show');
}


let drawSelectArea = (arreglo) => {
    let content = input_M_Area.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Area.innerHTML = content;
    input_M_AreaEdit.innerHTML = content;
}


let drawTableProfesor = (arreglo) => {
    let content = input_P_Table.innerHTML;
    content = "";
    for (i of arreglo) {
        let row = '<tr><td>' + getNumeroProfesor(i.Id) + '</td><td>' + i.Nombre + '</td><td>' + i.Apellido + '</td><td>' + i.Area +
            '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar"  onclick="editModal(' + i.Id + ');"><i class="material-icons text-primary">edit</i ></button></td>' +
            '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="eliminar('+ i.Id +');"><i class="material-icons text-danger">delete</i ></button></td></tr>';
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

function cargarProfesor() {
    $.ajax({
        type: "GET",
        //url: "/api/Area",
        url: "/api/Profesor",
        dataType: "JSON",
        success: (response) => {
           // drawSelectArea(response);
            drawTableProfesor(response);
            arregloProf = response;
            return response;
        }
    });
}

let cargarArea = () => {
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

window.onload = () => {
    cargarProfesor();
    cargarArea();
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
