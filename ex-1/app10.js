var a = e = i = o = u = blancos = 0;
vectorLetras = consultarTexto();

function consultarTexto(){
    var pideTexto = window.prompt("Escribe un texto cualquiera");
    var textoRoto = pideTexto.toLowerCase().split("");
    return textoRoto;
}        

for(k=0;k < vectorLetras.length;k++){
    
    switch(vectorLetras[k]){
        case "a":
      
            a++;
            break;
        case "e":
       
            e++;
            break;
        case "i":
     
            i++;
            break;
        case "o":
     
            o++;
            break;
        case "u":
        
            u++;
            break;
        case " ":
            blancos++;
    }
}
totalVocales = a+e+i+o+u;

document.write("Hay " +  a + " vocales 'a'<br>");
document.write("Hay " +  e + " vocales 'e'<br>");
document.write("Hay " +  i + " vocales 'i'<br>");
document.write("Hay " +  o + " vocales 'o'<br>");
document.write("Hay " +  u + " vocales 'u'<br>");