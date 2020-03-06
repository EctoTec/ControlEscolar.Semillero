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
let input_C_Table = document.getElementById("T_body_content_carrera");
let input_A_Table = document.getElementById("T_body_content_area");
let load = document.getElementById("load_data");
let elementLoad = "";

let arreglo_M = [];
let arreglo_C = [];
let arreglo_A = [];

// DIBUJA EN PANTALLA LOS SELECTS DE CARRERA
let drawSelectCarrera = (arreglo) => {
    let content = input_M_Carrera.innerHTML;
    for(i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Carrera.innerHTML = content;
    document.getElementById("Carrera_Mat_Ed").innerHTML = content;
}
//DIBUJA LOS SELECTS DE AREA
let drawSelectArea = (arreglo) => {
    let content = input_M_Area.innerHTML;
    for (i of arreglo) {
        let option = '<option value="' + i.Id + '">' + i.Nombre + '</option>';
        content = content + option;
    }
    input_M_Area.innerHTML = content;
    document.getElementById("Area_Mat_Ed").innerHTML = content;
}
//DIBUJA LOS RENGLONES DEPENDIENDO DE LA PAGINACION DADA DE MATERIA
let drawpagination = (desde, hasta) => {
    arreglo = arreglo_M;
    let content = input_M_Table.innerHTML;
    content = "";
    for (i = desde; i <= hasta; i++) {
        console.log(i)
        let row = '<tr><td>' + arreglo[i].Nombre + '</td><td>' + (arreglo[i].Carrera.Nivel == 'L' ? 'Licenciatura' : (arreglo[i].Carrera.Nivel == 'M' ? 'Maestria' : 'Doctorado')) + '</td><td>'
            + arreglo[i].Carrera.Nombre + '</td><td>' + arreglo[i].Area.Nombre + '</td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar" onclick="Edit_Materia(' + arreglo[i].Id + ')"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="Delete_Materia('+arreglo[i].Id+')"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    input_M_Table.innerHTML = content;
}
//DIBUJA LAS PAGINACIONES DE MATERIA DEPENDIENDO DE EL TOTAL DEL ARREGLO
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
//DIBUJA LOS RENGLONES DEPENDIENDO DE LAS PAGINACIONES DE CARRERA
let drawpaginationCarrera = (desde, hasta) => {
    arreglo = arreglo_C;
    let content = input_C_Table.innerHTML;
    content = "";
    for (i = desde; i <= hasta; i++) {
        console.log(i)
        let row = '<tr><td>' + arreglo[i].Nombre + '</td><td>' + (arreglo[i].Nivel == 'L' ? 'Licenciatura' : (arreglo[i].Nivel == 'M' ? 'Maestria' : 'Doctorado')) +'</td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar" onclick="Edit_Carrera(' + arreglo[i].Id + ')"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="Delete_Carrera(' + arreglo[i].Id + ')"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    input_C_Table.innerHTML = content;
}
//DIBUJA EN PANTALLA LOS RENGLONES DEPENDIENDO DE LAS PAGINACIONES DE EL AREA
let drawpaginationArea = (desde, hasta) => {
    arreglo = arreglo_A;
    let content = input_A_Table.innerHTML;
    content = "";
    for (i = desde; i <= hasta; i++) {
        console.log(i)
        let row = '<tr><td>' + arreglo[i].Nombre + '</td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Editar" onclick="Edit_Area(' + arreglo[i].Id + ')"><i class="material-icons text-primary">edit</i ></button></td>' +
            '<td><button class="btn" data-toggle="tooltip" data-placement="top" title="Eliminar" onclick="Delete_Area(' + arreglo[i].Id + ')"><i class="material-icons text-danger">delete</i ></button></td></tr>';
        content = content + row;
    }
    input_A_Table.innerHTML = content;
}
//DIBUJA EN PANTALLA LAS PAGINACIONES DE CARRERA DEPENDIENDO DE LA LONGITUD DEL ARREGLO
let drawTableCarrera = (arreglo) => {
    arreglo_C = arreglo;
    let paginacion = document.getElementById('paginacionCarrera');
    let totalRows = arreglo.length;
    let numerosPaginacion = totalRows / 5;
    console.log(numerosPaginacion);
    paginacion.innerHTML = "";
    let number = '';
    console.log(Math.ceil(numerosPaginacion))
    for (i = 0; i < Math.ceil(numerosPaginacion); i++) {
        number = number + '<li class="page-item"><button class="page-link" onclick="drawpaginationCarrera(' +
            i * 5 + ',' + ((i + 1 > numerosPaginacion) ? totalRows - 1 : ((i + 1) * 5) - 1) + ')">' + (i + 1) + '</button></li>'
    }
    paginacion.innerHTML = number;
    drawpaginationCarrera(0, 4);
}
//DIBUJA EN PANTALLA LA PAGINACIONES DE AREA DEPENDIENDO DE LA LONGITUD DEL ARREGLO
let drawTableArea = (arreglo) => {
    arreglo_A = arreglo;
    let paginacion = document.getElementById('paginacionArea');
    let totalRows = arreglo.length;
    let numerosPaginacion = totalRows / 5;
    console.log(numerosPaginacion);
    paginacion.innerHTML = "";
    let number = '';
    console.log(Math.ceil(numerosPaginacion))
    for (i = 0; i < Math.ceil(numerosPaginacion); i++) {
        number = number + '<li class="page-item"><button class="page-link" onclick="drawpaginationArea(' +
            i * 5 + ',' + ((i + 1 > numerosPaginacion) ? totalRows - 1 : ((i + 1) * 5) - 1) + ')">' + (i + 1) + '</button></li>'
    }
    paginacion.innerHTML = number;
    drawpaginationArea(0, 4);
}
//FUNCION QUE HACE LA FUNCION DE AGREGAR MATERIA A LA BASE DE DATOS SI EL ID ES NULL, SI NO, ESTA HACE UN UPDATE HACIA LA BASE DE DATOS  
let Agregar_Materia = (id = null) => {
    if (id == null) {
        if (input_M_Area.value !== "" && input_M_Carrera.value !== "" && input_M_Nombre !== "") {
            console.log(id);
            $.ajax({
                type: "POST",
                url: "/api/Materia",
                data: {
                    "Nombre": input_M_Nombre.value,
                    "Carrera": { "Id":input_M_Carrera.value },
                    "Area": { "Id": input_M_Area.value }
                },
                dataType: "JSON",
                success: (response) => {
                    limpiarTodo();
                    GetMateria();
                    alert("Se ha agregado la materia satisfactoriamente");
                    return response;
                }
            });
        } else {
            alert('Agrege todos los campos')
        }
    } else {
        $.ajax({
            type: "PUT",
            url: "/api/Materia/" + id,
            data: {
                "Carrera": { "Id": document.getElementById("Carrera_Mat_Ed").value },
                "Area": { "Id": document.getElementById("Area_Mat_Ed").value },
                "Nombre": document.getElementById("Nombre_Mat_Ed").value
            },
            dataType: "JSON",
            success: (response) => {
                limpiarTodo();
                GetMateria();
                alert("Se ha agregado la materia satisfactoriamente");
                return response;
            }
        });
    }
}
//FUNCION QUE HACE LA FUNCION DE AGREGAR UN AREA A LA BASE DE DATOS SI EL ID ES NULL, SI NO, ESTA HACE UN UPDATE HACIA LA BASE DE DATOS
let Agregar_Area = (id = null) => {
    if (id == null) {
        if (input_A_Nombre.value !== "") {
            $.ajax({
                type: "POST",
                url: "/api/Area",
                data: {
                    "Nombre": input_A_Nombre.value
                },
                dataType: "JSON",
                success: (response) => {
                    limpiarTodo();
                    $('#Ag_Area').modal('hide');
                    GetArea();
                    return response;
                }
            });
        } else {
            alert('Agrege todos los campos')
        }
    } else {
        $.ajax({
            type: "PUT",
            url: "/api/Area/" + id,
            data: {
                "Nombre": input_A_Nombre.value
            },
            dataType: "JSON",
            success: (response) => {
                limpiarTodo();
                $('#Ag_Area').modal('hide');
                GetArea();
                return response;
            }
        });
    }
}
//FUNCION QUE HACE LA FUNCION DE AGREGAR AREA A LA BASE DE DATOS SI EL ID ES NULL, SI NO, ESTA HACE UN UPDATE HACIA LA BASE DE DATOS
let Agregar_Carrera = (id = null) => {
    if (id == null) {
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
                    limpiarTodo();
                    $('#Ag_Carrera').modal('hide');
                    GetCarrera();
                    return response;
                }
            });
        } else {
            alert('Agrege todos los campos')
        }
    } else {
        $.ajax({
            type: "PUT",
            url: "/api/Carrera/" + id,
            data: {
                "Nombre": input_C_Nombre.value,
                "Nivel": input_C_Nivel.value
            },
            dataType: "JSON",
            success: (response) => {
                limpiarTodo();
                $('#Ag_Carrera').modal('hide');
                GetCarrera();
                return response;
            }
        });
    }
}

//SE LE ASIGNO ACCIONES A LOS BOTONES DE AGREGAR
btn_Add_Area.onclick = () => {Agregar_Area();}
btn_Add_Materia.onclick = () => {Agregar_Materia();}
btn_Add_Carrera.onclick = () => {Agregar_Carrera();}

//fUNCIONES Y ACCIONES QUE SE HACEN AL CARGAR LA PAGINA 
window.onload = () => {
    //elementLoad = load.innerHTML;
    //load.innerHTML = "<img src='../Content/Imagen/gif-loading-png-2.gif' />";
    GetArea();
    GetCarrera();
    GetMateria();
}

// TRAE LOS DATOS DE MATERIA DE LA BASE DE DATOS Y PINTA EN LA TABLA AL TERMINAR
let GetMateria = () => {
    $.ajax({
        type: "GET",
        url: "/api/Materia",
        dataType: "JSON",
        success: (response) => {
            //load.innerHTML = elementLoad;
            drawTableMateria(response);
        }
    });
}
//FUNCION QUE TRAE LOS DATOS DE CARRERA DE LA BASE DE DATOS Y PINTA EN PANTALLA
let GetCarrera = () => {
    $.ajax({
        type: "GET",
        url: "/api/Carrera",
        dataType: "JSON",
        success: (response) => {
            drawSelectCarrera(response);
            drawTableCarrera(response);
        }
    });
}
//FUNCION QUE TRAE LOS DATOS DE AREA DE LA BASE DE DATOS Y PINTA EN PANTALLA
let GetArea = () => {
    $.ajax({
        type: "GET",
        url: "/api/Area",
        dataType: "JSON",
        success: (response) => {
            drawSelectArea(response);
            drawTableArea(response);
        }
    });
}
//FUNCION QUE SE LLAMA PARA QUE MUESTRE LOS DATOS EN EL MODAL DE EDITAR MATERIA
let Edit_Materia = (id) => {
    let objeto = arreglo_M.find(e => e.Id == id);
    if (objeto != null) {
        console.log(objeto);
        document.getElementById("Carrera_Mat_Ed").value = objeto.Carrera.Id;
        document.getElementById("Area_Mat_Ed").value = objeto.Area.Id;
        document.getElementById("Nombre_Mat_Ed").value = objeto.Nombre;
        document.getElementById('Ag_Ed_Materia').onclick = () => { Agregar_Materia(id) };
        $('#Ag_Materia').modal('show');
    }
}
//FUNCION QUE SE LLAMA PARA QU MUESTRE LOS DATOS EN EL MODAL DE CARRERA PARA EDITAR
let Edit_Carrera = (id) => {
    let objeto = arreglo_C.find(e => e.Id == id);
    if (objeto != null) {
        console.log(objeto);
        input_C_Nombre.value = objeto.Nombre;
        input_C_Nivel.value = objeto.Nivel;
        btn_Add_Carrera.onclick = () => { Agregar_Carrera(id); };
        $('#Ag_Carrera').modal('show');
    }
}
//FUNCION QUE SE LLAMA PARA QUE MUESTRE LOS DATOS EN EL MODAL DE AREA PARA EDITAR
let Edit_Area = (id) => {
    let objeto = arreglo_A.find(e => e.Id == id);
    if (objeto != null) {
        console.log(objeto);
        input_A_Nombre.value = objeto.Nombre;
        btn_Add_Area.onclick = () => { Agregar_Area(id); };
        $('#Ag_Area').modal('show');
    }
}
//FUNCION QUE ELIMINA DE LA BASE DE DATOS UN ELEMENTO DE MATERIA SI NO ESTA REFERENCIADO EN OTRA TABLA
let Delete_Materia = (id) => {
    $.ajax({
        type: "DELETE",
        url: "/api/Materia/"+id,
        dataType: "JSON",
        success: (response) => {
            GetMateria();
            return response;
        },
        error: (err) => {
            console.log(err);
            alert(err.responseJSON.Message +' No se puede eliminar este dato ya que esta conectado con otras tablas');
        }
    });
}
//FUNCION QUE ELIMINA UN ELEMENTO DE CARRERA SI NO ESTA REFERENIADO EN OTRA TABLA
let Delete_Carrera = (id) => {
    $.ajax({
        type: "DELETE",
        url: "/api/Carrera/" + id,
        dataType: "JSON",
        success: (response) => {
            GetCarrera();
            return response;
        },
        error: (err) => {
            console.log(err);
            alert(err.responseJSON.Message + ' No se puede eliminar este dato ya que esta conectado con otras tablas');
        }
    });
}
//FUNCION QUE ELIMINA UN ELEMENTO DE AREA SI NO ESTA REFERENIADO EN OTRA TABLA
let Delete_Area = (id) => {
    $.ajax({
        type: "DELETE",
        url: "/api/Area/" + id,
        dataType: "JSON",
        success: (response) => {
            GetArea();
            return response;
        },
        error: (err) => {
            console.log(err);
            alert(err.responseJSON.Message + ' No se puede eliminar este dato ya que esta conectado con otras tablas');
        }
    });
}

//FUNCION PARA FILTRAR EN LA TABLA DE MATERIA

function FiltradoMateria() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput1");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_M");
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
//FUNCION PARA FILTRAR EN LA TABLA DE CARRERA
function FiltradoCarrera() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput2");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_C");
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
//FUNCION DE FILTRADO DE LA TABLA AREA
function FoltradoArea() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput3");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_A");
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

let limpiarTodo = () => {
    input_C_Nombre.value = "";
    input_C_Nivel.value = "";
    input_A_Nombre.value = "";
    input_M_Carrera.value = "";
    input_M_Area.value = "";
    input_M_Nombre.value = "";
    document.getElementById("Carrera_Mat_Ed").value = "";
    document.getElementById("Area_Mat_Ed").value = "";
    document.getElementById("Nombre_Mat_Ed").value = "";
}