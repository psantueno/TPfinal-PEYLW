document.addEventListener('DOMContentLoaded', () => {
    const tipoAnimalSelect = document.getElementById('tipo-animal');
    const nombreMascotaSelect = document.getElementById('nombre-mascota');
    const form = document.getElementById('adoption-form');
    const formMessage = document.getElementById('form-message');

    const gatoSeleccionado = JSON.parse(sessionStorage.getItem('gatoSeleccionado'));
    const perroSeleccionado = JSON.parse(sessionStorage.getItem('perroSeleccionado'));

    if (gatoSeleccionado) {
        // Preseleccionar el tipo de animal y el nombre del gato en el formulario
        tipoAnimalSelect.value = 'gato'; // Esto asegura que se seleccione 'gato' en el select
        const option = document.createElement('option');
        option.value = gatoSeleccionado.nombre;
        option.textContent = gatoSeleccionado.nombre;
        nombreMascotaSelect.appendChild(option);
        nombreMascotaSelect.value = gatoSeleccionado.nombre;

        // Limpiar sessionStorage después de usar la información
        sessionStorage.removeItem('gatoSeleccionado');
    } else if (perroSeleccionado) {
        // Preseleccionar el tipo de animal y el nombre del perro en el formulario
        tipoAnimalSelect.value = 'perro'; // Esto asegura que se seleccione 'perro' en el select
        const option = document.createElement('option');
        option.value = perroSeleccionado.nombre;
        option.textContent = perroSeleccionado.nombre;
        nombreMascotaSelect.appendChild(option);
        nombreMascotaSelect.value = perroSeleccionado.nombre;

        // Limpiar sessionStorage después de usar la información
        sessionStorage.removeItem('perroSeleccionado');
    }

    tipoAnimalSelect.addEventListener('change', () => {
        const tipoAnimal = tipoAnimalSelect.value;
        nombreMascotaSelect.innerHTML = '<option value="">Seleccione una mascota</option>';

        let mascotas = [];
        if (tipoAnimal === 'gato') {
            mascotas = JSON.parse(sessionStorage.getItem('gatos')) || [];
        } else if (tipoAnimal === 'perro') {
            mascotas = JSON.parse(sessionStorage.getItem('perros')) || [];
        }

        mascotas.forEach(mascota => {
            const option = document.createElement('option');
            option.value = mascota.nombre;
            option.textContent = mascota.nombre;
            nombreMascotaSelect.appendChild(option);
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Evitar el envío del formulario

        let isValid = true;
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const tipoAnimal = tipoAnimalSelect.value;
        const nombreMascota = nombreMascotaSelect.value;
        const mensaje = document.getElementById('mensaje');

        // Validar Nombre
        if (nombre.value.trim() === '') {
            nombre.classList.add('invalid');
            isValid = false;
        } else {
            nombre.classList.remove('invalid');
        }


        // Validar Email
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email.value.trim() === '' || !emailPattern.test(email.value)) {
            email.classList.add('invalid');
            isValid = false;
        } else {
            email.classList.remove('invalid');
        }

        // Validar Teléfono
        const telefonoPattern = /^[0-9]+$/;
        if (telefono.value.trim() === '' || !telefonoPattern.test(telefono.value)) {
            telefono.classList.add('invalid');
            isValid = false;
        } else {
            telefono.classList.remove('invalid');
        }

        // Validar Tipo de Animal
        if (tipoAnimal === '') {
            tipoAnimalSelect.classList.add('invalid');
            isValid = false;
        } else {
            tipoAnimalSelect.classList.remove('invalid');
        }

        // Validar Nombre de Mascota
        if (nombreMascota === '') {
            nombreMascotaSelect.classList.add('invalid');
            isValid = false;
        } else {
            nombreMascotaSelect.classList.remove('invalid');
        }


        // Mostrar mensaje de error si no es válido
        if (!isValid) {
            alert('Por favor, complete todos los campos correctamente.');
        } else {
            // Si todo es válido, proceder con el envío del formulario
            if (tipoAnimal === 'gato') {
                // Eliminar el gato seleccionado de sessionStorage
                let gatos = JSON.parse(sessionStorage.getItem('gatos')) || [];
                gatos = gatos.filter(gato => gato.nombre !== nombreMascota);
                sessionStorage.setItem('gatos', JSON.stringify(gatos));
            } else if (tipoAnimal === 'perro') {
                // Eliminar el perro seleccionado de sessionStorage
                let perros = JSON.parse(sessionStorage.getItem('perros')) || [];
                perros = perros.filter(perro => perro.nombre !== nombreMascota);
                sessionStorage.setItem('perros', JSON.stringify(perros));
            }

            form.reset(); // Limpiar el formulario
            form.style.display = 'none'; // Ocultar el formulario
            formMessage.style.display = 'block'; // Mostrar mensaje de confirmación
            document.getElementById('loader').style.display = 'block';
            // Redirigir a la página de inicio después de 5 segundos
            setTimeout(function () {
                window.location.href = "/";
            }, 8000);
        }
    });
});
