//*************************************************************** */
//********F*****U*****N*****C*****I*****O*****N*****E*****S***** */
//************************************************************* */







//**=======================EJEMPLO1================================= */

//funcion que despliegue en pantalla las vocales dos veces, una por una.
function imprimirVocales() {
    alert("a");
    alert("b");
    alert("c");
    alert("d");
    alert("e");
}

//se manda a llamar 2 veces la funcion para que se despliegue 2 veces las vocales 1 por una.
imprimirVocales();
imprimirVocales();

//**================================================================ */







//**=======================EJEMPLO2================================= */

//Escribir un programa que muestre a un piloto las indicaciones para llegar desde el origen hasta el destino.//

function indicaciones_izquierda(){
    console.log("Seguir recto una cuadra");
    console.log("Cruzar a la izquierda");
}

function indicaciones_derecha(){
    console.log("Seguir recto una cuadra");
    console.log("Cruzar a la derecha");
}

//Se manda llamar de esta manera para resolver el problema.
indicaciones_izquierda();
indicaciones_derecha();
indicaciones_derecha();
indicaciones_derecha();

//**================================================================ */






//*************************************************************** */
//*********************FUNCIONES******************************** */
//*********************PARAMETROS*******************************/
//**********************ARGUMENTOS*******************************/
//*******************VALORES DE RETORNO*************************/
//*****************ENTORNO DE VARIABLES*********************** */
//************************************************************ */




//**=======================EJEMPLO1 FUNCIONES CON PARAMETROS======================= */

//Los parametros son variables de entrada de la funcion que esperan recibir valores 
//cuando sea llamada. Una funcion puede esperar uno o más parametros que iran 
//separados por una coma.

function multiplica(multiplicando1, multiplicando2){
    var resultado= multiplicando1*multiplicando2;
    alert(resultado);
}

multiplica(6,4);


//**============================================================================== */







//**===================EJEMPLO1 FUNCIONES VALORES DE RETORNO======================= */
//Al momento de ejecucion de alguna funcion en el momento que se encuentra la 
//palabra reservada de retorno, la funcion se detendra y devolvera el valor especificado.








//**============================================================================== */
















