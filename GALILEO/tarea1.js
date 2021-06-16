

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




//**=======================EJERCICIO 2 ======================= */

function calculoMasaCorporal(){

  alert("CALCULO DEL INDICE DE MASA CORPORAL (IMC)")
  let peso =   parseInt(prompt("Ingrese su PESO"));
  let altura = parseInt(prompt("Ingrese su ALTURA"));
  let imc = 703 * peso / (altura * altura);
  let resultado = Math.round(imc);

  if(altura==""|| peso =="" ){
    alert("Debes ingresar los datos completos");
    return;
  }

  alert("Su IMC es: " +resultado);

  if(imc>=18.5 && imc<=24.9 ){
  alert("Peso Normal")
  }
  else if(imc>=25 && imc<=29.9){
    alert("Peso más alto al normal");
  }
  else if(imc>=30){
    "Demasiado alto, tienes problemas de obesidad"
  }
  else if(imc<=18.5){
    alert("Peso más bajo al normal");
  }
  else{
    alert("Debes ingresar peso y altura"  );
  }
}

calculoMasaCorporal();

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






//**=======================EJERCICIO 4 ======================= */

function menuCalculadora(){
  alert( "=========CALCULADORA BÁSICA========= \n|| Selecciona una opción para realizar la operación || \n  1.SUMA                                              \n  2.RESTA                                           \n  3.MULTIPLIACIÓN                             \n  4.DIVISIÓN                                       \n||================================||  " );

  let opcion = Number(prompt("Ingrese una Opción"));
  let num1=0;
  let num2=0;
  let resultado=0;
  
    switch (opcion) {
      case 1:
              alert("INGRESE 2 NUMEROS PARA REALIZAR LA SUMA");
              num1= Number(prompt("Ingrese el primer numero"));
              num2= Number(prompt("Ingrese el segundo numero"));
              function sumarNumeros(num1,num2){
               resultado = num1+num2;
               return alert("La SUMA de los numeros es: " +resultado);
              }
               sumarNumeros(num1,num2);
        
              break;
      case 2: 
              alert("INGRESE 2 NUMEROS PARA REALIZAR LA RESTA");
              num1= Number(prompt("Ingrese el primer numero"));
              num2= Number(prompt("Ingrese el segundo numero"));
              function restarNumeros(num1,num2){
                resultado = num1-num2;
                return alert("La RESTA de los numeros es: " +resultado);
              }
               restarNumeros(num1,num2);
        
              break;
      case 3: 
              alert("INGRESE 2 NUMEROS PARA REALIZAR LA MULTIPLICACION");
              num1= Number(prompt("Ingrese el primer numero"));
              num2= Number(prompt("Ingrese el segundo numero"));
              function multiplicarNumeros(num1,num2){
                resultado= num1*num2;
                return alert("La MULTIPLICACION de los numeros es: " +resultado);
              }
               multiplicarNumeros(num1,num2);
              break;
      case 4: 
              alert("INGRESE 2 NUMEROS PARA REALIZAR LA DIVISION");
              num1= Number(prompt("Ingrese el primer numero"));
              num2= Number(prompt("Ingrese el segundo numero"));
              function dividirNumeros(num1,num2){
                resultado=num1/num2;
                return alert("La DIVISION de los numeros es: " +resultado);
              }
               dividirNumeros(num1,num2);
              break;
    
      default: alert("Ingrese un numero valido");    
      break;
    }

}

menuCalculadora();


//**========================================================= */





//**=======================EJERCICIO 5 ======================= */

function convertidorTemperaturaCelsius(){
  alert( "=========CONVERTIDOR DE TEMPERATURA========= \n \n Convierta de temperatura Celsius a FAHRENHEIT o KELVIN" );

  let celsius = Number(prompt("Ingrese una temperatura en grados Celsius"));
  let opcion = Number(prompt("=========SELECCIONE UNA OPCION PARA CONVERTIR========= \n 1. FAHRENHEIT \n 2. KELVIN "))
  let resultado=0;
  
    switch (opcion) {
      case 1:
              function convertirCelsiusaFahrenheit(celsius){
                resultado = celsius * 1.8 + 32;
                return alert("El Equivalente en Grados Fahrenheit es : " +resultado);
              }
              convertirCelsiusaFahrenheit(celsius);
              break;
      case 2: 
              function convertirCelsiusaKelvin(celsius){
                resultado = celsius + 273.15;
                return alert("El equivalente en Grados Kelvin es : " +resultado);
              }
              convertirCelsiusaKelvin(celsius);
              break;
    
      default: alert("Ingrese un numero valido");    
      break;
    }

}

convertidorTemperaturaCelsius();


//**========================================================= */














