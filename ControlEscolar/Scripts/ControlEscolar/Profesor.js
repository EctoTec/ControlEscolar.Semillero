//Botones
let btn_Add_Profesor = document.getElementById("Ag_Add_Profesor");

//Inputs
let input_P_Nombre = document.getElementById("P_Nombre");
let input_P_Apellido = document.getElementById("P_Apellido");
let input_P_Area = document.getElementById("P_Area");

btn_Add_Profesor.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Profesor",
        data: {
            "Nombre": input_P_Nombre.value,
            "Apellido": input_P_Apellido.value,
            "Area": input_P_Area.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#modalProfesores').modal('hide');
            return response;
        }
    });

}