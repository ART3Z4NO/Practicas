//Parte 1 javascript

// 1. Variables y Tipos de Datos
let nombre = "Fabricio";
let edad = 22;
console.log(`Hola, mi nombre es ${nombre} y tengo ${edad} años.`);

// 2. Operadores
let base = 5;
let altura = 3;
let area = base * altura;
console.log(`Área del rectángulo: ${area}`);

// 3. Condicionales
let numero = 4;
if (numero % 2 === 0) {
  console.log(`${numero} es par`);
} else {
  console.log(`${numero} es impar`);
}

// 4. Bucles
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 5. Funciones
function sumar(a, b) {
  return a + b;
}
console.log(`Suma: ${sumar(3, 4)}`);

// 6. Arrays
let frutas = ["manzana", "banana", "pera"];
frutas.push("uva");
console.log(frutas);

// 7. Objetos
let usuario = {
  nombre: "Fabricio",
  edad: 22
};

for (let clave in usuario) {
  if (usuario.hasOwnProperty(clave)) {
    console.log(`${clave}: ${usuario[clave]}`);
  }
}

// 8. Métodos de Arrays
let numeros = [1, 2, 3, 4];
let dobles = numeros.map(num => num * 2);
console.log(dobles);

// 9. Funciones Flecha
const restar = (a, b) => a - b;
console.log(restar(10, 3));

// 10. Ejercicio Integrador
const filtrarPares = arr => arr.filter(n => n % 2 === 0);
console.log(filtrarPares([1, 2, 3, 4]));

