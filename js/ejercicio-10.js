let numero = parseInt(prompt("Ingrese un número"));

if (
  numero % 2 === 0 ||
  numero % 3 === 0 ||
  numero % 5 === 0 ||
  numero % 7 === 0
) {
  document.write("El número ingresado es divisible por 2, 3, 5 o 7.");
} else {
  document.write("El número ingresado no es divisible por 2, 3, 5 o 7.");
}
