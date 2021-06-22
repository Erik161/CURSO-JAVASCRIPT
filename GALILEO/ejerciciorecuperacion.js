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









//**==========================EJERCICIO 2 =============================== */

function cantidadpalabras(){
    let palabras=[];
    for(let i=0;i<5; i++){
        palabra[i]=prompt("Ingrese una frase").toLocaleLowerCase();
        palabra = palabra.replace(/ /g, "");
        palabra.length;
    }
}

cantidadpalabras();


//**======================================================================== */



















