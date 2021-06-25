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
imprimirNumeros.push(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);


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
imprimirNumeros.push(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);

let minimo = Math.min.apply(null,imprimirNumeros);
let maximo = Math.max.apply(null,imprimirNumeros);

alert("Los Numero Guardados y en posición son: \n" +imprimirNumeros);
alert("El numero minimo es : " +minimo+ "\n El numero maximo es: " +maximo);
//**========================================================================== */











//**==========================EJERCICIO 4 =============================== */
let arreglo1 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


let arreglo2 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

let arreglo3 =[];


for (i=0; i<arreglo1.length; i++){
  
  arreglo3[i]=arreglo1[i]+arreglo2[i];
}



console.log("ARREGLO 1");
console.log(arreglo1);
console.log("ARREGLO 2");
console.log(arreglo2);
console.log("ARREGLO 3 \n SUMA DE ARREGLO1 Y ARREGLO 2 POR POSICIÓN");
console.log(arreglo3);


//**========================================================================== */







//**==========================EJERCICIO 5 =============================== */
let arreglo = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
          alert("NUMEROS QUE SE ENCUENTRAN EN EL ARREGLO: \n" +arreglo);
let numero = parseInt(prompt("INGRESA UN NUMERO"));
let verificar= arreglo.indexOf(numero);

if(verificar===-1){
  alert("-1 NO EXISTE EN EL ARREGLO.");
}else{
  alert("POSICIÓN " +arreglo.indexOf(numero)+ " DEL ARREGLO.");
}

//**========================================================================== */















