//**==========================EJERCICIO 1 =============================== */

function palindromoidentificar(){
    let cadena= prompt("Escriba una palabra: ").toLocaleLowerCase();
    
    cadena= cadena.replace(/ /g, "");

    for (let i= 0; i<cadena.length;i++){
        if(cadena[i]!=cadena[cadena.length-i-1]){
            return alert("No es un Palindromo");
        }
    }
    return alert("Si es un Palindromo");
}

palindromoidentificar();


//**======================================================================== */













//**==========================EJERCICIO 8 =============================== */

function conteoVocales(frase){
    let vocales = 'aeiouAEIOU';
    let conteo =0;
    for(let i=0; i<frase.length; i++){
        if(vocales.indexOf(frase[i]) !== -1){
            conteo +=1;
        }
    }
    return console.log("Numero de vocales encontradas: "+conteo);
   
}

conteoVocales('Hola Mundo');


//**======================================================================== */

















