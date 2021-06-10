

//**=======================EJERCICIO 1 ======================= */
function histograma(numero1,numero2,numero3,numero4,numero5){
    var numero1 = "*****";  
    var numero2 = "***";
    var numero3 = "**";
    var numero4 = "****";
    var numero5 = "*";
   
    alert( numero1+ "\n"  +numero2+ "\n" +numero3+ "\n" +numero4+ "\n" +numero5);
  }
  
  histograma(1,2,6,7,4);
//**========================================================= */










//**=======================EJERCICIO 3 ======================= */

function numeroPrimoEncontrar(){
  let numero= parseInt(prompt("Ingrese un numero para saber si es un numero Primo"));
  //Si es un tipo distinto a number se crea un 
  //error de TYPEERROR
  if(typeof numero !='number'){
      alert('El argumento debe ser un número.');
  }
  //Si no es un numero entero se crea un 
  //error de TYPEERROR
  else if(!Number.isInteger(numero)){
      alert('El argumento debe ser un número entero.');
  }
  //Si no es un número positivo se crea un 
  //error de TYPEERROR
  else if(numero<=1){
    alert('El argumento debe ser un número entero positivo.');
  }

  else{
    //Con Raiz Cuadrada se va a determinar si el numero es primo.
  let raizCuadrada = Math.floor(Math.sqrt(numero))+1;

  for(let i=2; i< raizCuadrada; ++i){
    if(numero % i ==0){
      return alert("El numero: " +numero+ " no es PRIMO." );
    }
  }

  return alert("El numero: " +numero+ " es PRIMO." );
  }

}

numeroPrimoEncontrar();

//**========================================================= */