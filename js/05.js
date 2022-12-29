// Objetos - Manipulación

const producto = {
    nombre: "tablet",
    precio: 300,
    disponible: true
}

// Object.freeze(producto) - Freeze - No deja modificarlo, no permite añadir ni eliminar
// Object.seal(producto) - Seal - Modificar propiedades existentes, no permite añadir ni eliminar

// reescribir un valor
producto.nombre = "Monitor Curvo"

// si no existe, lo va a añadir
producto.imagen = "imagen.jpg"

delete producto.disponible

console.table(producto)