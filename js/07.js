// Unir 2 objetos
const producto = {
    nombre: "Fernando",
    precio: 300,
    disponible: true
}

const cliente = {
    nombre: 'Alam',
    premium: true
}

// const nuevoObjeto = Object.assign(producto, cliente)
const nuevoObjeto2 = {
    producto: { ...producto },
    cliente: { ...cliente }
}

console.log(nuevoObjeto2)
console.log(cliente)
console.log(producto)