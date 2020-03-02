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

let arreglo_M = [];

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

let drawpagination = (desde, hasta) => {
    arreglo = arreglo_M;
    let content = input_M_Table.innerHTML;
    content = "";
    for (i = desde; i <= hasta; i++) {
        console.log(i)
        let row = '<tr><td>' + arreglo[i].Nombre + '</td><td>' + (arreglo[i].Nivel == 'L' ? 'Licenciatura' : (arreglo[i].Nivel == 'M' ? 'Maestria' : 'Doctorado')) + '</td><td>'
            + arreglo[i].Carrera + '</td><td>' + arreglo[i].Area + '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    input_M_Table.innerHTML = content;
}

let drawTableMateria = (arreglo) => {
    arreglo_M = arreglo;
    let paginacion = document.getElementById('paginacion');
    let totalRows = arreglo.length;
    let numerosPaginacion = totalRows / 5;
    console.log(numerosPaginacion);
    paginacion.innerHTML = "";
    let number = '';
    console.log(Math.ceil(numerosPaginacion))
    for (i = 0; i < Math.ceil(numerosPaginacion); i++) {
        number = number + '<li class="page-item"><button class="page-link" onclick="drawpagination(' +
            i * 5 + ',' + ((i + 1 > numerosPaginacion) ? totalRows -1 : ((i + 1) * 5) - 1) + ')">' + (i + 1) + '</button></li>'
    }
    paginacion.innerHTML = number;
    drawpagination(0, 4);
}

btn_Add_Area.onclick = () => {
    if (input_A_Nombre.value !== "") {
        $.ajax({
            type: "POST",
            url: "/api/Area",
            data: {
                "Nombre": input_A_Nombre.value
            },
            dataType: "JSON",
            success: (response) => {
                $('#Ag_Area').modal('hide');
                GetArea();
                return response;
            }
        });
    } else {
        alert('Agrege todos los campos')
    }
}

btn_Add_Materia.onclick = (id = null) => {
    if (input_M_Area.value !== "" && input_M_Carrera.value !== "" && input_M_Nombre !== "") {
        console.log(id);
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
                GetMateria();
                alert("Se ha agregado la materia satisfactoriamente");
                return response;
            }
        });
    } else {
        alert('Agrege todos los campos')
    }
}

btn_Add_Carrera.onclick = () => {
    if (input_C_Nivel.value !== "0" && input_C_Nombre !== "") {
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
                GetCarrera();
                return response;
            }
        });
    } else {
        alert('Agrege todos los campos')
    }
}

window.onload = () => {
    GetArea();
    GetCarrera();
    GetMateria();
}

let GetMateria = () => {
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

let GetCarrera = () => {
    $.ajax({
        type: "GET",
        url: "/api/Carrera",
        dataType: "JSON",
        success: (response) => {
            drawSelectCarrera(response);
            return response;
        }
    });
}

let GetArea = () => {
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
