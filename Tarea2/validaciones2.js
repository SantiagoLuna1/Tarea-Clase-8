document.querySelector('#calcular').addEventListener('click', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('.agregar-familiar');
    for (let i = 0; i < inputs.length; i++) {
        const value = parseFloat(inputs[i].value);
        if (value === 0) {
            console.assert(value !== 0, "El valor no puede ser 0"); 
        } else {
            console.assert(value !== 0, "La validación falló con un número válido"); 
        }
    }
});

