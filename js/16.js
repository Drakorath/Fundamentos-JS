const tecnologias = ["HTML", "CSS", "JavaScript", "React", "Node.js"];
const numeros = [10, 20, 30];

let nuevoArray;

// Filter
nuevoArray = tecnologias.filter((tech) => tech !== "React");

// Comprobar si un elemento existe en el array
// Const resultado = tecnologias.includes('GraphQL')

// Some - Devuelve si al menos uno cumple la condición
// Const resultado = numeros.some(numero => numero > 15)

//Find - Devuelve el primer elemento que cumpla la condición

// const resultado = numeros.find((numero) => numero > 15);

// Every - Retorna true or false si todos cumplen la condición
// const resultado = numeros.every((numero) => numero > 9);

// Reduce
// const resultado = numeros.reduce ((total, numero) => numero + total, 0 )

// Filter - crea un nuevo array en base a una condición
// const resultado = tecnologias.filter((tech) => tech !== "Node.js");
// const resultado = tecnologias.filter((numero) => numero > 15);

// ForEach acceder a cada elemento del arrayw
tecnologias.forEach((tech, index) => console.log(tech, index));

// Crear un nuevo array
const arrayMap = tecnologias.map(function (tech) {
  return tech;
});
