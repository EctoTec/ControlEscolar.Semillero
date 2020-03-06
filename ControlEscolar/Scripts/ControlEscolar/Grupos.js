let btn_Add_Grupo = document.getElementById("save");
let input_Turno = document.getElementById("Turno");
let select_Materia = document.getElementById("S_Materia");
let select_Profesor = document.getElementById("S_Profesor");
let arreglo_G = [];
IDEdit = null;

let eliminar = (id) => {
    $.ajax({
        type: "Delete",
        url: "/api/Grupos/"+id,
        dataType: "JSON",
        success: (response) => {
            cargarGrupo();
            $('#modalDeleteGrupo').modal('show');
            setTimeout(function () {
                $('#modalDeleteGrupo').modal('hide');
            }, 1000);
            return response;
        }
    })
}

let editar = (id) => {
    let objeto = arreglo_G.find(e => e.Id == id);
    if (objeto != null) {
        console.log(objeto);
        document.getElementById("S_Materia").value = objeto.Materia;
        document.getElementById("S_Profesor").value = objeto.Profesor;
        document.getElementById("Turno").value = objeto.Turno;
            document.getElementById("save").onclick = () => { GuardarDatosGrupo(id) };
        $('#Ag_Grupo').modal('show');
    }
}

let GuardarDatosGrupo = () => {
    $.ajax({
        type: "POST",
        url: "/api/Grupos",
        data: {
            "Materia": select_Materia.value,
            "Profesor": select_Profesor.value,
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

let drawpagination = (S, M) => {
    arreglo = arreglo_G;
    let content = Table.innerHTML;
    content = "";
    for (i = S; i <= M; i++) {
        console.log(i);
        let row = '<tr><td>' + (arreglo[i].Id) + '</td><td>' + arreglo[i].Materia + '</td><td>' + arreglo[i].Profesor + '</td><td>' + arreglo[i].Turno +
            '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar" onclick="editar(' + arreglo[i].Id +');"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="eliminar(' + arreglo[i].Id +');"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    Table.innerHTML = content;
}

let drawTable = (arreglo) => {
    arreglo_G = arreglo;
    let paginacion = document.getElementById('paginacion');
    let totalRows = arreglo.length;
    let numerosPaginacion = totalRows / 5;
    paginacion.innerHTML = "";
    let number = '';
    for (i = 0; i < Math.ceil(numerosPaginacion); i++) {
        number = number + '<li class="page-item"><button class="page-link" onclick="drawpagination(' +
            i * 5 + ',' + ((i + 1 > numerosPaginacion) ? totalRows - 1 : ((i + 1) * 5) - 1) + ')">' + (i + 1) + '</button></li>'
    }
    paginacion.innerHTML = number;
    drawpagination(0, 4);
}

function cargarGrupo() {
    $.ajax({
        type: "GET",
        url: "/api/Grupos",
        dataType: "JSON",
        success: (response) => {
            drawTable(response);
            arreglo_G = response;
            return response;
        }
    });
}

window.onload = () => {
    cargarGrupo();

    $.ajax({
        type: "GET",
        url: "/api/Profesor",
        dataType: "JSON",
        success: (response) => {
            console.log(response);
            drawSelectProfesor(response);
            return response;
        }
    });

    $.ajax({
        type: "GET",
        url: "/api/Materia",
        dataType: "JSON",
        success: (response) => {
            drawSelectMateria(response);
            return response;
        }
    });
}

//BUSCAR EN ESTA PAGINA
//https://www.tutorialsteacher.com/webapi/create-web-api-for-crud-operation

let drawSelectMateria = (arreglo) => {
    let content = select_Materia.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    select_Materia.innerHTML = content;
}

let drawSelectProfesor = (arreglo) => {
    let content = select_Profesor.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + ' ' +i.Apellido + '</option>';
        content = content + option;
    }
    select_Profesor.innerHTML = content;
}

function myFunction() {
    var input, table, tr, td, i, txtValue;
    var filter;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("datos");
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


/* FUNCION PARA BUSCAR DE ACUERDO A LETRAS NO NUMEROS
function doSearch() {
    const tableReg = document.getElementById('datos');
    const searchText = document.getElementById('searchTerm').value.toLowerCase();
    let total = 0;

    //Recorrer todas las filas de la tabla
    for (let i = 1; i < tableReg.rows.length; i++) {
        //Si el td tiene la calse "noSearch" lo pasa por alto
        if (tableReg.rows[i].classList.contains("noSearch")) {
            continue;
        }

        let found = false;
        const cellsOfRow = tableReg.rows[i].getElementsByTagName('td');
        //Recorrer todas las celdas
        for (let j = 0; j < cellsOfRow.length && !found; j++) {
            const compareWith = cellsOfRow[j].innerHTML.toLowerCase();
            //Buscar el contenido en la celda
            if (searchText.length == 0 || compareWith.indexOf(searchText) > -1) {
                found = true;
                total++;
            }
        }
        if (found) {
            tableReg.rows[i].style.display = '';
        } else {
            //Si no hay coincidencia, esconde la tablas
            tablaReg.rows[i].style.display = 'none';
        }
    }

    const lastTR = tableReg.rows[tableReg.rows.length - 1];
    const td = lastTR.querySelector("td");
    lastTR.classList.remove("hide", "red");
    if (searchText == "") {
        lastTR.classList.add("hide");
    } else if (total) {
        td.innerHTML = "Se ha encontrado " + total + "coincidencia" + ((total > 1) ? "s" : "");
    } else {
        lastTR.classList.add("red");
        td.innerHTML = "No se han encontrado coincidencias";
    }
}
*/