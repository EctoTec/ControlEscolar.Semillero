let nombre = document.getElementById("Nombre");
let apellidos = document.getElementById("Apellidos");
let carrera = document.getElementById("Carrera");
let semestre = document.getElementById("Semestre");
let arregloAlumno;
let idAlumno = null;

let GuardarDatoss = () => {
    console.log(idAlumno);
    if (idAlumno == null) {
        $.ajax({
            type: "POST",
            url: "/api/DatosAlumnos",
            data: {
                "Nombre": nombre.value,
                "Apellidos": apellidos.value,
                "Carrera": carrera.value,
                "Semestres": 1
            },
            dataType: "JSON",
            success: (response) => {
                $('#modalAlumnos').modal('hide');
                datosAlumno();
                $('#modalAgregado').modal('show');
                setTimeout(function () {
                    $('#modalAgregado').modal('hide');
                }, 2000);
                Limpiar();
                return response;
            }
        });
    }
    else {
        $.ajax({
            type: "Put",
            url: "/api/DatosAlumnos/" + idAlumno,
            data: {
                "Nombre": document.getElementById("Nombre").value,
                "Apellidos": document.getElementById("Apellidos").value,
                "Carrera": document.getElementById("Carrera").value
            },
            dataType: "JSON",
            success: function (e) {
                idAlumno = null;
                $('#modalAlumnos').modal('hide');
                datosAlumno();
                Limpiar();
            }
        })
    }
}

function modalEditar(id)
{
    idAlumno = id;
    let alumno = arregloAlumno.find(e => e.Id == id)
    console.log(alumno);
    document.getElementById("Nombre").value = alumno.Nombre;
    document.getElementById("Apellidos").value = alumno.Apellidos;
    document.getElementById("Carrera").value = alumno.Carrera_Id;
    $('#modalAlumnos').modal('show');
}

let BorrarDatos = (Id) => {
    $.ajax({
        type: "Delete",
        url: "/api/DatosAlumnos/" + Id,
        dataType: "JSON",
        success: (s) => {
            datosAlumno();
            alert('Se elimino alumno correctamente')
            return s;
        },
        error: (e) => {
            alert('No es posible eliminar alumno ya que se encuentra inscrito al periodo escolar ')
        }
    });
}

let drawSelectCarrera = (arreglo) => {
    let content = carrera.innerHTML;
    for (i of arreglo) {

        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    carrera.innerHTML = content;
}

let table_body = document.getElementById("cuerpo_tabla");

let drawTableAlumnos = (arreglo) => {
    arregloAlumno = arreglo;
    let content = table_body.innerHTML;
    content = "";
    for (i of arreglo) {
        let row = '<tr><td>' + getMatricula(i.Id) + '</td><td>' + i.Nombre + '</td><td>' + i.Apellidos + '</td><td>' + i.Carrera + '</td><td>' + i.Semestres + '</td><td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar" onclick="modalEditar(' + i.Id + ');"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="BorrarDatos(' + i.Id +'); "><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    table_body.innerHTML = content;
}

window.onload = () => {
    datosAlumno();
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

function Buscar() {
    var input, table, tr, td, i, valor;
    input = document.getElementById("inputBuscar");
    filter = input.value;
    table = document.getElementsByClassName("table");
    tr = document.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            valor = td.textContent || td.innerText;
            if (valor.indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}

function datosAlumno(){
    $.ajax({
        type: "GET",
        url: "/api/DatosAlumnos",
        dataType: "JSON",
        success: (response) => {
            drawTableAlumnos(response);
            return response;
        }
    });
}

function getMatricula(id)
{
    if (id < 10) {
        id = "000000" + id;
    }
    else if (id < 100) {
        id = "00000" + id;
    }
    else if (id < 1000) {
        id = "0000" + id;
    }
    else if (id < 10000) {
        id = "000" + id;
    }
    else if (id < 100000) {
        id = "00" + id;
    }
    else if (id < 1000000) {
        id = "0" + id;
    }
    else if (id >= 1000000) {
        id = id;
    }
    return id;
}

function Limpiar() {
    nombre.value = "";
    apellidos.value = "";
    carrera.value = "";
}