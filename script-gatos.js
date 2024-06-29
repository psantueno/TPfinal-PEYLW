// Obtener datos de sessionStorage
const gatos = JSON.parse(sessionStorage.getItem('gatos')) || [];


function renderGatos(gatosFiltrados) {
    const gatosContainer = document.getElementById('gatos-container');
    gatosContainer.innerHTML = '';
    gatosFiltrados.forEach((gato, index) => {
        const gatoDiv = document.createElement('div');
        gatoDiv.classList.add('mascota-card');
        gatoDiv.innerHTML = `
            <img src="${gato.imagen}" alt="${gato.nombre}" class="mascota-imagen">
            <h3>${gato.nombre.toUpperCase()}</h3>
            <p><b>Edad:</b> ${gato.edad} años</p>
            <p><b>Descripción:</b> ${gato.descripcion}</p>
            <p><b>Color:</b> ${gato.color}</p>
            <p><b>Pelo:</b> ${gato.pelo}</p>
            <p><b>Género:</b> ${gato.genero}</p>
            <button onclick="adoptarGato(${index})">Adoptar</button>
        `;
        gatosContainer.appendChild(gatoDiv);
    });
}

function buscarGatos() {
    const nombre = document.getElementById('buscar-nombre').value.toLowerCase();
    const edad = document.getElementById('buscar-edad').value;
    const color = document.getElementById('buscar-color').value.toLowerCase();
    const genero = document.getElementById('buscar-genero').value.toLowerCase(); // Nuevo campo para buscar por género

    const gatosFiltrados = gatos.filter(gato => {
        return (
            (nombre === '' || gato.nombre.toLowerCase().includes(nombre)) &&
            (edad === '' || gato.edad == edad) &&
            (color === '' || gato.color.toLowerCase().includes(color)) &&
            (genero === '' || gato.genero.toLowerCase() === genero) // Filtrar por género
        );
    });

    renderGatos(gatosFiltrados);
}


function adoptarGato(index) {
   
    const gatos = JSON.parse(sessionStorage.getItem('gatos')) || [];

    const gatoSeleccionado = gatos[index];
    sessionStorage.setItem('gatoSeleccionado', JSON.stringify(gatoSeleccionado));

    window.location.href = 'formulario-adopcion.html';
}


window.onload = function() {
    renderGatos(gatos);
}
