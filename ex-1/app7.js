function contar () {
    let caracter='a', cont =0;
    var palabra = prompt("Pon una palabra")
    for(var i=0; i<palabra.length; i++){
    if (palabra[i] == caracter){
        cont++
    }     
    }
    alert('la cantidad de a es: '+cont)
}

contar()