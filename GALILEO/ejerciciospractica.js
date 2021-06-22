
//**==========================EJERCICIO 1 =============================== */

function transmografo(num1,num2,num3){
    let operacion = num1*num2;
    let resultado = Math.pow(operacion,num3);
    return console.log(resultado);
  }
  transmografo(5,3,6);
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













