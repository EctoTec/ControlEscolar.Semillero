function GuardarDatos() {
    let isEmpty = false,
        id = document.getElementById("Id").value,
        nombre = document.getElementById("Nombre").value,
        apellidos = document.getElementById("Apellidos").value;
        carrera = document.getElementById("Carrera").value
        semestre = document.getElementById("Semestre").value
        console.log(id)
        console.log(nombre)
        console.log(apellidos)
        console.log(carrera)
        console.log(semestre)
    if (id === "") {
        alert("Id no puede estar vacio");
        isEmpty = true;
    }
    else if (nombre === "") {
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