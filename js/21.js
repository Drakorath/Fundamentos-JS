// Scope

const precio = 300;

function unaFuncion() {
  const precio = 600;
  console.log(precio);
}

if (true) {
  console.log(precio);
}

unaFuncion();
