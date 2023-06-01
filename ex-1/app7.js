var letra=prompt("Introduce una letra para encontar en la frase");
var frase=prompt("Introduce una frase");

cont=0;
for (i=0;i<frase.length;i++) {

if(letra==frase[i]){
    cont++;
}
}

alert(" la letra " + letra +" se repite " + cont + " veces");