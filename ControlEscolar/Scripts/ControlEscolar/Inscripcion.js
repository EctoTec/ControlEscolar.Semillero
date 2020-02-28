//document.querySelector('#btn-enviar').addEventListener('click', getDatos);

//function getDatos() {
//    const xhttp = new XMLHttpRequest();

//    xhttp.open('GET', 'http://localhost:44387/api/Materia', true);

//    xhttp.send();

//    xhttp.onreadystatechange = function () {
//        if (this.readyState == 4 & this.status == 200) {
//            let datos = JSON.parse(this.responseText);
//            let list = document.querySelector('#list');
//            list.innerHTML = '';

//            for (let item of datos) {
//                list.innerHTML += `
//                    <button type="button" class="list-group-item list-group-item-action">${item.Nombre}</button>
//                `
//            }
//        }
//    }
//}