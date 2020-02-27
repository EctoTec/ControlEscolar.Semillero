let btn_Add_Carrera = document.getElementById("Ag_Add_Carrera");
let btn_Add_Area = document.getElementById("Ag_Add_Area");

let input_C_Nombre = document.getElementById("C_Nombre");
let input_C_Nivel = document.getElementById("C_Nivel");
let input_A_Nombre = document.getElementById("A_Nombre");

btn_Add_Area.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Area",
        data: {
            "Nombre": input_A_Nombre.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#Ag_Area').modal('hide');
            return response;
        }
    });
}

btn_Add_Carrera.onclick = () => {
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
            return response;
        }
    });

}

window.onload = () => {
    $.ajax({
        type: "GET",
        url: "/api/Area",
        dataType: "JSON",
        success: (response) => {
            console.log(response);
            return response;
        }
    });
    $.ajax({
        type: "GET",
        url: "/api/Carrera",
        dataType: "JSON",
        success: (response) => {
            console.log(response);
            return response;
        }
    });
}
