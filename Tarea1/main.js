document.querySelector('#seleccionar').onclick = function(event){
    const $cantidadIntegrantes = document.querySelector('#numero-integrantes');
    const cantidadIntegrantes = Number($cantidadIntegrantes.value);

    borrarIntegrantesAnteriores();
    crearIntegrantes(cantidadIntegrantes);

    event.preventDefault();
}

document.querySelector('#calcular').onclick = function(event) {
    const numeros = obtenerEdadesIntegrantes();
    mostrarEdad('mayor', obtenerMayorNumero(numeros));
    mostrarEdad('menor', obtenerMenorNumero(numeros));
    mostrarEdad('promedio', obtenerPromedio(numeros));
    mostrarResultados();

    event.preventDefault();
}

document.querySelector('#resetear').onclick = resetear;

function borrarIntegrantesAnteriores() {
    const $integrantes = document.querySelectorAll('.integrante');
    for(let i = 0; i < $integrantes.length; i++) {
        $integrantes[i].remove();
    }
}

function crearIntegrantes(cantidadIntegrantes){
    for (let i = 0; i < cantidadIntegrantes; i++) {
        crearIntegrante(i);
    }

    if (cantidadIntegrantes > 0) {
        mostrarBotonCalculo();
    } else {
        resetear();
    }
}

function crearIntegrante(indice){
    const $div = document.createElement('div');  
    $div.className = 'integrante';

    const $label = document.createElement('label');  
    $label.textContent = 'Edad del integrante #: ' + (indice + 1); 
    const $input = document.createElement('input'); 
    $input.type = 'number';
    $input.classList.add('edad');

    $div.appendChild($label);  //<div> ... </div>
    $div.appendChild($input);  //<label> Edad del integrante... </label>

    const $integrantes = document.querySelector('#integrantes'); 
    $integrantes.appendChild($div); //<div id="integrantes"> <div> </div> </div>
}

function resetear() {
    borrarIntegrantesAnteriores();
    ocultarBotonCalculo();
    ocultarResultados();
}

function ocultarBotonCalculo() {
    document.querySelector('#calcular').className = 'oculto';
}

function mostrarBotonCalculo() {
    document.querySelector('#calcular').className = '';
}

function ocultarResultados() {
    document.querySelector('#analisis').className = 'oculto';
}

function mostrarResultados() {
    document.querySelector('#analisis').className = '';
}

function mostrarEdad(tipo, valor) {
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

function obtenerEdadesIntegrantes(){
    const $integrantes = document.querySelectorAll('.integrante input');
    const edades = [];
    for (let i = 0; i < $integrantes.length; i++) {
        edades.push(Number($integrantes[i].value));
    }
    return edades;
}