let primerNumero = parseInt(prompt("Ingrese un número"));
let segundoNumero = parseInt(prompt("Ingrese otro número"));
let tercerNumero = parseInt(prompt("Ingrese otro número más"));

if (primerNumero > segundoNumero && primerNumero > tercerNumero) {
  document.write(`El número ${primerNumero} es el mayor de los números ingresados.`);
} else if (segundoNumero > primerNumero && segundoNumero > tercerNumero) {
  document.write(`El número ${segundoNumero} es el mayor de los números ingresados.`);
} else {
  document.write(`El número ${tercerNumero} es el mayor de los números ingresados.`);
}