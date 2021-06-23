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
alert("==INGRESE 10 NUMEROS PARA SER GUARDADOS EN UN ARREGLO==");
let num1,num2,num3,num4,num5,num6,num7,num8,num9,num10;

let arreglo1 = [];
arreglo1.push(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);


let arreglo2 = [];
arreglo2.push(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);

parseInt

let arreglo3 = [];
arreglo3.push(num1,num2,num3,num4,num5,num6,num7,num8,num9,num10);





let arreglo1 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


let arreglo2 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

let arreglo3 =[];


for (i=0; i<arreglo1.lenght; i++){
  
  arreglo3[i]=arreglo1[i]+arreglo2[i];
}

console.log(arreglo1)
console.log(arreglo2)
console.log(arreglo3);




var arr1 = [1,2,3,4];
var arr2 = [2,1,3,4];
var r = [];

for(i = 0; i < arr1.length; i++){
  r[i] =arr1[i]+arr2[i];
}
console.log(arr1)
console.log(arr2)
console.log(r);




let arreglo1 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


let arreglo2 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));


let arreglo3 = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

  

   console.log(arreglo1);
   console.log(arreglo2);
   console.log(arreglo3);


//**========================================================================== */




