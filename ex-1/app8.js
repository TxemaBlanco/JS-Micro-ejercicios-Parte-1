var frase = prompt('Escriba una frase y le dire las  "vocales" que aparecen');
var numeroVocales = frase.match(/[aeiou]/g);
alert(`Las vocales de tu frase son: ${numeroVocales}`);