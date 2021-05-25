//---------------FUNCIONES SIMPLES---------------


//mandar una alerta con mi nombre
function nombre(){
  alert("Mi nombre es Erik");
}

//pedir un nombre y luego mostrarlo
function Pedirnombre(){
  let nombre = prompt("Ingrese su nombre");
  alert("Su nombre es:" + nombre);
}

//Generar un numero entero aleatorio entre 5 y 10
function generarAleatorio(){
  let aleatorio = Math.floor(Math.random()*(10-5)+5);
  alert(aleatorio);
}


/*-------------FUNCIONES CON PARAMETROS-----------
*
*los parametros son todos los elementos que se 
*encuentran adentro del parentesis Ej. "ancho, alto"
*
*/


function areaRectangulo(ancho, alto){
  let area = ancho*alto;
  alert("Area" + area);
}


/*
*
*Cuando mandamos a ejecturar se llaman
*argumentos areaRectangulo(5,20);
*
*/


//Ejemplo function con Parametros
function calcularEdad(anio_nac){
  let edad = 2021 - anio_nac;
  alert(edad);
}

//calcularEdad(1985);


//*---------FUNCIONES CON RETORNO RETURN---------


//Pasar numero decimal a binario
function binario(num){
  let num_binario="";
  while(num>=1){//1 va ser el valor mas bajo para seguir dividiendo
    num_binario = (num % 2)+ num_binario;
    num = Math.trunc(num/2);
  }
  return num_binario;
}
