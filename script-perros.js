// Obtener datos de sessionStorage
const perros = JSON.parse(sessionStorage.getItem('perros')) || [];

function renderPerros(perrosFiltrados) {
    const perrosContainer = document.getElementById('perros-container');
    perrosContainer.innerHTML = '';
    perrosFiltrados.forEach((perro, index) => {
        const perroDiv = document.createElement('div');
        perroDiv.classList.add('mascota-card');
        perroDiv.innerHTML = `
            <img src="${perro.imagen}" alt="${perro.nombre}" class="mascota-imagen">
            <h3>${perro.nombre.toUpperCase()}</h3>
            <p><b>Edad:</b> ${perro.edad} años</p>
            <p><b>Descripción:</b> ${perro.descripcion}</p>
            <p><b>Color:</b> ${perro.color}</p>
            <p><b>Pelo:</b> ${perro.pelo}</p>
            <p><b>Género:</b> ${perro.genero}</p>
            <button onclick="adoptarPerro(${index})">Adoptar</button>
        `;
        perrosContainer.appendChild(perroDiv);
    });
}

function buscarPerros() {
    const nombre = document.getElementById('buscar-nombre').value.toLowerCase();
    const edad = document.getElementById('buscar-edad').value;
    const color = document.getElementById('buscar-color').value.toLowerCase();
    const genero = document.getElementById('buscar-genero').value.toLowerCase();

    const perrosFiltrados = perros.filter(perro => {
        return (
            (nombre === '' || perro.nombre.toLowerCase().includes(nombre)) &&
            (edad === '' || perro.edad == edad) &&
            (color === '' || perro.color.toLowerCase().includes(color)) &&
            (genero === '' || perro.genero.toLowerCase() === genero)
        );
    });

    renderPerros(perrosFiltrados);
}


function adoptarPerro(index) {
    
    const perros = JSON.parse(sessionStorage.getItem('perros')) || [];

    const perroSeleccionado = perros[index];
    sessionStorage.setItem('perroSeleccionado', JSON.stringify(perroSeleccionado));

    window.location.href = 'formulario-adopcion.html';
}


window.onload = function() {
    renderPerros(perros);
}
