// Fetch API - Async Await (Múltiples llamados)

const url = "https://jsonplaceholder.typicode.com/comments";
const url2 = "https://jsonplaceholder.typicode.com/photos";

const consultarAPI = async () => {
  const inicio = performance.now();
  const respuesta = await fetch(url);
  const resultado = await respuesta.json();
  //   console.log(resultado);

  //   console.log("Iniciando la 2da consulta");

  const respuesta2 = await fetch(url);
  const resultado2 = await respuesta2.json();
  //   console.log(resultado2);
  const fin = performance.now();

  console.log(`ejecución PRIMER async ${fin - inicio} ms`);
};
consultarAPI();

const consultarAPI2 = async () => {
  const inicio = performance.now();
  const [respuesta, respuesta2] = await Promise.all([fetch(url), fetch(url2)]);

  const resultado = await respuesta.json();
  const resultado2 = await respuesta2.json();

  //   console.log(resultado);
  //   console.log(resultado2);

  const fin = performance.now();

  console.log(`ejecución SEGUNDO async ${fin - inicio} ms`);
};
consultarAPI2();
