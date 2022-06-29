document.getElementById('form').addEventListener('submit', cargar);
let ListaNumeros = [];
// Cargar
// Numeros ejemplo { 2 3 4 -1 -7 8 -13 6 2 }
function cargar(e){ // Agrega numeros al localStorage
    e.preventDefault();
    let numero = document.getElementById('numero').value;
    ListaNumeros.push(numero);
    const elemento = {
        ListaNumeros
    };
    // localList es el nombre del JSON
    if (localStorage.getItem('localList') === null) {
        localStorage.setItem('localList', JSON.stringify(elemento));
    } else {
        localStorage.setItem('localList', JSON.stringify(elemento));
    }
    e.target.reset();
    mostrar();
}

// Mostrar
function mostrar(json){
    let espacio = document.getElementById('list');
    let espacioSuma = document.getElementById('resultContainer');
    if (json == null || json === '' || json == 'null') {
        espacio.innerHTML = '';
        ListaNumeros.forEach(numero => {
            espacio.innerHTML += `<li>${numero}</li>`;
        });
    } else if(typeof(json) == "number"){
        espacioSuma.classList.remove('hide');
        let resultado = document.getElementById('result');
        resultado.value = json.toString();
    } else {
        espacio.innerHTML = '';
        json.listaNumeros.forEach(numero => {
            espacio.innerHTML += `<li>${numero}</li>`;
        });
        espacioSuma.classList.add('hide');
    }
}
mostrar();

// Limpiar
document.getElementById('btnClear').addEventListener('click', limpiar);
function limpiar(){
    localStorage.removeItem('localList');
    let espacioSuma = document.getElementById('resultContainer');
    let espacio = document.getElementById('list');
    espacio.innerHTML = '';
    for (let i = 0; i < ListaNumeros.length; i++) {
        ListaNumeros.pop(i);
    }
    espacioSuma.classList.add('hide');
}

// Preparar JSON
var select = document.getElementById('selectMath');
select.addEventListener('change', prepararJSON);
function prepararJSON(e){
    e.preventDefault();
    let operacion = this.options[select.selectedIndex];
    let camino = parseInt(operacion.value);
    if (camino != null || camino != '' || camino != "null") {
        // Descargar el JSON del localStorage
        let lista = JSON.parse(localStorage.getItem('localList'));
        APIRequest(lista, camino);
    } else {
        console.log('No hay nada');
    }
}

// Conexión a la API
function APIRequest(lista, camino){
    let uri = 'https://localhost:44310/Arreglo/';
    switch (camino) {
        case 1:
            fetch(uri+'OrdenarDSC', {
                method: 'POST',
                headers: {'Content-Type':'application/json; charset=UTF-8'},
                body: JSON.stringify(lista)
            })
            .then(response => response.json())
            .then(json => mostrar(json))
            .catch(err => console.log(err));
            break;

        case 2:
            fetch(uri+'OrdenarASC', {
                method: 'POST',
                headers: {'Content-Type':'application/json; charset=UTF-8'},
                body: JSON.stringify(lista)
            })
            .then(response => response.json())
            .then(json => mostrar(json))
            .catch(err => console.log(err));
            break;
        
        case 3:
            fetch(uri+'Suma', {
                method: 'POST',
                headers: {'Content-Type':'application/json; charset=UTF-8'},
                body: JSON.stringify(lista)
            })
            .then(response => response.json())
            .then(json => mostrar(json))
            .catch(err => console.log(err));
            break;

        case 4:
            fetch(uri+'Multiplicar', {
                method: 'POST',
                headers: {'Content-Type':'application/json; charset=UTF-8'},
                body: JSON.stringify(lista)
            })
            .then(response => response.json())
            .then(json => mostrar(json))
            .catch(err => console.log(err));
            break;
    }
}