// Funciones - Function Declaration

// function sumar(numero1 = 0, numero2 = 0) {
//   console.log(numero1 + numero2);
// }

// sumar(10, 20);
// sumar(10, 3);
// sumar(100);
// sumar();

function sumar(numero1 = 0, numero2 = 0) {
  return {
    resultado: numero1 + numero2,
    mensaje: "hola mundo",
  };
}

const { resultado, mensaje } = sumar(20, 30);

console.log(resultado);
console.log(mensaje);
