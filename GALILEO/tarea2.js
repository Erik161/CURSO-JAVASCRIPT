//**==========================EJERCICIO 1 ============================== */
//DIAS DE LA SEMANA
let diaSemana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];

//SE REALIZA LA CONSULTA PARA OBTENER LA INFORMACIÓN
console.log("Realizar consulta: 0");
console.log("Devuelve: " +diaSemana[0]);

console.log("Realizar consulta: 4");
console.log("Devuelve: " +diaSemana[4]);
//**==================================================================== */



//**===========================EJERCICIO 2 ============================ */
alert("=====INGRESE 10 NUMEROS PARA SER GUARDADOS EN UN ARREGLO=========");
let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let num3 = Number(prompt("Ingrese el tercer numero"));
let num4 = Number(prompt("Ingrese el cuarto numero"));
let num5 = Number(prompt("Ingrese el quinto numero"));
let num6 = Number(prompt("Ingrese el sexto numero"));
let num7 = Number(prompt("Ingrese el septimo numero"));
let num8 = Number(prompt("Ingrese el octavo numero"));
let num9 = Number(prompt("Ingrese el noveno numero"));
let num10 = Number(prompt("Ingrese el decimo numero"));

let imprimirNumeros = [];
imprimirNumeros.push(num1);
imprimirNumeros.push(num2);
imprimirNumeros.push(num3);
imprimirNumeros.push(num4);
imprimirNumeros.push(num5);
imprimirNumeros.push(num6);
imprimirNumeros.push(num7);
imprimirNumeros.push(num8);
imprimirNumeros.push(num9);
imprimirNumeros.push(num10);

alert("Los Numero Guardados y en posición son: \n" +imprimirNumeros);
//**=================================================================== */





//**==========================EJERCICIO 3 =============================== */
alert("==INGRESE 10 NUMEROS PARA SER GUARDADOS EN UN ARREGLO==");
let num1 = Number(prompt("Ingrese el primer numero"));
let num2 = Number(prompt("Ingrese el segundo numero"));
let num3 = Number(prompt("Ingrese el tercer numero"));
let num4 = Number(prompt("Ingrese el cuarto numero"));
let num5 = Number(prompt("Ingrese el quinto numero"));
let num6 = Number(prompt("Ingrese el sexto numero"));
let num7 = Number(prompt("Ingrese el septimo numero"));
let num8 = Number(prompt("Ingrese el octavo numero"));
let num9 = Number(prompt("Ingrese el noveno numero"));
let num10 = Number(prompt("Ingrese el decimo numero"));

let imprimirNumeros = [];
imprimirNumeros.push(num1);
imprimirNumeros.push(num2);
imprimirNumeros.push(num3);
imprimirNumeros.push(num4);
imprimirNumeros.push(num5);
imprimirNumeros.push(num6);
imprimirNumeros.push(num7);
imprimirNumeros.push(num8);
imprimirNumeros.push(num9);
imprimirNumeros.push(num10);

let minimo = Math.min.apply(null,imprimirNumeros);
let maximo = Math.max.apply(null,imprimirNumeros);

alert("Los Numero Guardados y en posición son: \n" +imprimirNumeros);
alert("El numero minimo es : " +minimo+ "\n El numero maximo es: " +maximo);
//**========================================================================== */









