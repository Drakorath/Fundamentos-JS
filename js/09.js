// Operaciones de los arreglos 

const tecnologias = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js']

// Añadir elementos al array
// tecnologias.push('GraphQL') // añade al final del array 
// tecnologias.unshift('GraphQL') // añade al final del array 

// const nuevoArreglo = ['GraphQL', ...tecnologias]
// const nuevoArreglo = [...tecnologias, 'GraphQL']

// Eliminar elementos del array
// tecnologias.pop() // Elimina el final
// tecnologias.shift() // Elimina el inicio
// tecnologias.splice(2, 3) // Elimina de una posición específica

// const nuevoArray = tecnologias.filter(function (tech) {
//     return tech !== 'React'
// })

// Reemplazar del array
// tecnologias[0] = 'GraphQL'

const nuevoArray = tecnologias.map(function (tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech
    }
})

console.table(tecnologias)
console.table(nuevoArray)