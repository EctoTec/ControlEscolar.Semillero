let btn_Add_Grupo = document.getElementById("save");

var input_Materia = document.getElementById("Materia");
var input_Maestro = document.getElementById("Maestro");
var input_Turno = document.getElementById("Turno");

input_Materia.addEventListener('change', function () {
    var selectedOption1 = this.options[select.selectedIndex];
    console.log(selectedOption1.value + ":" + selectedOption1.text);
});
input_Maestro.addEventListener('change', function () {
    var selectedOption2 = this.options[select.selectedIndex];
    console.log(selectedOption2.value + ":" + selectedOption2.text);
});
input_Turno.addEventListener('change', function () {
    var selectedOption3 = this.options[select.selectedIndex];
    console.log(selectedOption3.value + ":" + selectedOption.text);
});

btn_Add_Grupo.onclick = () => {
    $.ajax({
        type: "POST",
        url: "/api/Grupo",
        data: {
            "Materia": input_Materia.value,
            "Profesor": input_Mestro.value,
            "Turno": input_Turno.value
        },
        dataType: "JSON",
        success: (response) => {
            $('#')
        }
    })
}