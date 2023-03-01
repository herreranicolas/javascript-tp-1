let frase = prompt("Ingrese una frase");
let vocales = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U","á", "é", "í", "ó", "ú", "Á", "É", "Í", "Ó", "Ú"];

for (let i = 0; i < frase.length; i++) {
  if (vocales.includes(frase.charAt(i))) {
    document.write(frase.charAt(i));
  }
}

