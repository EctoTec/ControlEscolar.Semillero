let btn_Add_Grupo = document.getElementById("save");
let input_Materia = document.getElementById("Materia");
let input_Maestro = document.getElementById("Maestro");
let input_Turno = document.getElementById("Turno");
let select_Materia = document.getElementById("S_Materia");
let select_Profesor = document.getElementById("S_Profesor");

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
        let row = '<tr><td>' + (i.Id + 1) + '</td><td>' + i.Materia + '</td><td>' + i.Profesor + '</td><td>' + i.Turno + '</td><td><button type="button" class="btn btn-secondary">Editar</button><button type="button" class="btn btn-warning">Eliminar</button></td></tr>';
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

let drawSelectMateria = (arreglo) => {
    let content = select_Materia.innerHTML;
    for (i of arreglo) {
        let option = '<option value"' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    select_Materia.innerHTML = content;
}

let drawSelectProfesor = (arreglo) => {
    let content = select_Profesor.innerHTML;
    for (i of arreglo) {
        let option = '<option value"' + i.Id + '">' + i.Nombre + '</option>';
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
/* FUNCION PARA BUSCAR DE ACUERDO A LETRAS
 * NO NUMEROS
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