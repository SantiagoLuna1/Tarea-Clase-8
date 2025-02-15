function obtenerEdadesIntegrantes() {
    const edadInputs = document.querySelectorAll('#integrantes .edad'); 
    const edades = [];

    for (let i = 0; i < edadInputs.length; i++) {
        const valor = Number(edadInputs[i].value);
        edades.push(valor);
    }

    return edades;  
} // Los inputs del formulario pasan a un array

function validarEdad(edades) {
    for (let i = 0; i < edades.length; i++) {
        if (edades[i] % 1 !== 0) {
            return "El campo edad no puede tener números con decimales";
        }
    }
    return '';
} // En cada iteración se controla si cumple con la validación

document.querySelector('#calcular').addEventListener('click', function(event) {
    event.preventDefault();

    const edades = obtenerEdadesIntegrantes();
    const resultado = validarEdad(edades);

    if (resultado !== '') {
        console.assert(resultado === '', 
            resultado
        );
    } else {
    console.assert(resultado === '',
        "La validación falló con un número válido"
    );
    }
});

