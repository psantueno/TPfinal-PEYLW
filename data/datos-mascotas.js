// Verificar si los datos ya están en sessionStorage antes de almacenarlos
if (!sessionStorage.getItem('gatos')) {
    const gatos = [
        { nombre: "Misha", edad: 2, descripcion: "Aventurera y compañera", color: "Negro", pelo: "Corto", genero: "Hembra", imagen: "images/gato-10.jpg" },
        { nombre: "Toby", edad: 4, descripcion: "Tranquilo y amistoso", color: "Atigrado", pelo: "Largo", genero: "Macho", imagen: "images/gato-2.jpg" },
        { nombre: "Luna", edad: 1, descripcion: "Curiosa y enérgica", color: "Blanco", pelo: "Corto", genero: "Hembra", imagen: "images/gato-3.jpg" },
        { nombre: "Simba", edad: 3, descripcion: "Valiente y explorador", color: "Naranja", pelo: "Corto", genero: "Macho", imagen: "images/gato-4.jpg" },
        { nombre: "Nala", edad: 5, descripcion: "Amorosa y tranquila", color: "Tricolor", pelo: "Largo", genero: "Hembra", imagen: "images/gato-5.jpg" },
        { nombre: "Molly", edad: 7, descripcion: "Aventurera y compañera", color: "Negro", pelo: "Corto", genero: "Hembra", imagen: "images/gato-6.jpg" },
        { nombre: "Tomy", edad: 9, descripcion: "Tranquilo y amistoso", color: "Blanco", pelo: "Largo", genero: "Macho", imagen: "images/gato-7.jpg" },
        { nombre: "Porky", edad: 11, descripcion: "Curiosa y enérgica", color: "Beige", pelo: "Corto", genero: "Hembra", imagen: "images/gato-8.jpg" },
        { nombre: "Silvestre", edad: 10, descripcion: "Valiente y explorador", color: "Blanco y Negro", pelo: "Corto", genero: "Macho", imagen: "images/gato-1.jpg" },
        { nombre: "Afrodita", edad: 8, descripcion: "Amorosa y tranquila", color: "Tricolor", pelo: "Largo", genero: "Hembra", imagen: "images/gato-9.jpg" }
    ];
    sessionStorage.setItem('gatos', JSON.stringify(gatos));
}

if (!sessionStorage.getItem('perros')) {
    const perros = [
        { nombre: "Bobby", edad: 2, descripcion: "Juguetón y cariñoso", color: "Negro", pelo: "Corto", genero: "Macho", imagen: "images/perro-1.jpg" },
        { nombre: "Rocky", edad: 4, descripcion: "Tranquilo y leal", color: "Marrón", pelo: "Largo", genero: "Macho", imagen: "images/perro-2.jpg" },
        { nombre: "Lola", edad: 1, descripcion: "Enérgica y amigable", color: "Blanco", pelo: "Corto", genero: "Hembra", imagen: "images/perro-3.jpg" },
        { nombre: "Max", edad: 3, descripcion: "Valiente y protector", color: "Gris", pelo: "Corto", genero: "Macho", imagen: "images/perro-4.jpg" },
        { nombre: "Bella", edad: 5, descripcion: "Amorosa y tranquila", color: "Tricolor", pelo: "Largo", genero: "Hembra", imagen: "images/perro-5.jpeg" },
        { nombre: "Coco", edad: 2, descripcion: "Curioso y juguetón", color: "Negro y blanco", pelo: "Corto", genero: "Macho", imagen: "images/perro-6.jpeg" },
        { nombre: "Molly", edad: 6, descripcion: "Leal y protectora", color: "Marrón claro", pelo: "Largo", genero: "Hembra", imagen: "images/perro-7.jpg" },
        { nombre: "Buddy", edad: 7, descripcion: "Amigable y leal", color: "Beige", pelo: "Corto", genero: "Macho", imagen: "images/perro-8.jpg" },
        { nombre: "Daisy", edad: 3, descripcion: "Activa y amorosa", color: "Blanco y marrón", pelo: "Largo", genero: "Hembra", imagen: "images/perro-9.jpg" },
        { nombre: "Charlie", edad: 4, descripcion: "Cariñoso y juguetón", color: "Negro", pelo: "Corto", genero: "Macho", imagen: "images/perro-10.jpg" }
    ];
    sessionStorage.setItem('perros', JSON.stringify(perros));
}