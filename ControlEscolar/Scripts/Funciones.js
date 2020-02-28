function GuardarDatos() {
    let isEmpty = false,
        id = document.getElementById("Id").value,
        nombre = document.getElementById("Nombre").value,
        apellidos = document.getElementById("Apellidos").value;
        carrera = document.getElementById("Carrera").value
        semestre = document.getElementById("Semestre").value
    if (nombre === "") {
        alert("Nombre no puede estar vacio");
        isEmpty = true;
    }
    else if (apellidos === "") {
        alert("Apellidos no puede estar vacio");
        isEmpty = true;
    }
    else if (carrera === "") {
        alert("Carrera no puede estar vacio");
        isEmpty = true;
    }
    else if (semestre === "") {
        alert("Semestre no puede estar vacio");
        isEmpty = true;
    }
    return isEmpty;
}

let table_body = document.getElementById("cuerpo_tabla");

let drawTableAlumnos = (arreglo) => {
    let content = table_body.innerHTML;
    for (i of arreglo) {
        let row = '<tr><td>' + i.Id + '</td><td>' + i.Nombre + '</td><td>' + i.Apellidos + '</td><td>' + i.Carrera + '</td><td>' + i.Semestres + '</td></tr>';
        content = content + row;
    }
    table_body.innerHTML = content;
}

window.onload = () => {
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
