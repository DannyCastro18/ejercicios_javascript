
// Ejercicio 1: un programa que pida al usuario un número y muestre si es par o impar  

// paso 1: declaro la variable numero para almacenar el valor ingresado
let numero =  parseInt(prompt("ingresa un número"));
// paso 3: verificar si el número es par o impar para ello declaro la siguiente variable 
let par = numero % 2 === 0;
// paso 3: con la estructura if else verifico si el número es par o impar 
if (par) {
// realizo la siguiente concatenacion para mostrar el resultado 
alert("El número "  + numero + " es par.");
} else {
 alert("El número "  + numero + " es impar.");
}
//--------------------------------------------------------------------------------------------------------------

// Ejercicio 2: Escribe un programa que pida al usuario dos números y muestre el mayor de ellos  

// paso 1: creo dos variables para almacenar los numeros solicitador
// let num1 = parseInt(prompt("ingresa un número"));
// let num2 = parseInt(prompt("ingresa un segundo número"));

// if (num1 > num2) {
//  alert("Entre el número " + num1 + " y el número  "  + num2  + ", " + num1 + " es el mayor");
 
// } else{
//  alert("Entre el número " + num1 + " y el número  "  +  num2  + ", " + num2 + " es el mayor");
// }
//--------------------------------------------------------------------------------------------------------------

// Ejercicio 3: Escribe un programa que pida al usuario un año y muestre si es bisiesto o no 

// let year = parseInt(prompt("Ingresa un año"));

//  if (year % 4 === 0) {
//     alert("El año " + year  + " es bisiesto");

//  } else {
//     alert("El año" + " " + year + " " + "no es bisiesto");
//  }
//-------------------------------------------------------------------------------------------------------------

//Ejercicio 4: Escribe un programa que pida al usuario una letra y muestre si es vocal o consonante. 

// let letra = prompt("ingresa una letra").toLowerCase(); //.toLowerCase() convertir todos los caracteres de una cadena de texto a minúsculas
// let vocales = ["a", "e", "i", "o", "u"];
// if (vocales.includes(letra)) {
//     alert("La letra "  + letra +  " es una vocal");
// } else {
//     alert("La letra "  + letra  + " es una consonante");
// }
//-------------------------------------------------------------------------------------------------------------

//Ejercicio 5: Escribe un programa que pida al usuario un mes y muestre el número de días que tiene.

// let mes = prompt("Ingresa un mes");
// // utilizo el operador or para enlazar las condiciones
// if (mes === "enero" || mes === "marzo" || mes === "mayo" || mes === "julio" || mes === "agosto" || mes === "octubre" || mes === "diciembre"){
//     alert( `El mes de ${mes} tiene 31 días`);
// // el else if para que si la otra opcion no se cumpla pase a la siguiente
// }else if (mes === "febrero"){
//     alert(`El mes de ${mes} tiene 28 dias, a excepción de los años bisiestos que cuentan con 29 días.`);
// }else if(mes === "abril" || mes === "junio" || mes === "septiembre" || mes === "novimbre"){
//     alert(`El mes de ${mes} tiene 30 días`);
// }else {
//     alert("Por favor ingrese un mes válido");
// }
//--------------------------------------------------------------------------------------------------------------------

//Ejercicio 6: Escribe un programa que pida al usuario una calificación numérica y muestre su equivalente en letras (A, B, C, D o F) 

// let calificacion = parseFloat(prompt("ingresa tu calificacion del 1 a 5"));
// if (calificacion >= 5.0) {
//     alert("Tu calificacion es A");
// } else if (calificacion >= 4.5) {
//     alert("Tu calificacion es A");

// } else if (calificacion >= 3.5) {
//     alert("Tu calificacion es B");

// } else if (calificacion >= 3.0) {
//     alert("Tu calificacion es C");

// } else if (calificacion >= 2.5) {
//     alert("Tu calificacion es D");

// } else if (calificacion <= 2.0) {
//     alert("Tu calificacion es E");

// } else if (calificacion <= 1.5) {
//     alert("Tu calificacion es F");

// } else if (calificacion <= 1.0) {
//     alert("Tu calificacion es F");

// } else {
//     alert("Por favor ingresa una calificacion válida");
// }
//--------------------------------------------------------------------------------------------------------------------

//Ejercicio 7: Escribe un programa que pida al usuario una temperatura en grados Celsius y muestre su equivalente en grados Fahrenheit

// let celsius = parseFloat(prompt("Ingresa la temperatura en grados celsius"));

// if (fahrenheit = (celsius * 9 / 5) + 32) {
//     alert(`${celsius} grados Celsius (°C) equivalen a ${fahrenheit} grados Fahrenheit (°F).`);

// } else {
//     alert("Por favor ingresa una temperatura válida");

// }
//------------------------------------------------------------------------------------------------------------------

//Ejercicio 8: Escribe un programa que pida al usuario una contraseña y muestre si es correcta o no. La contraseña válida es “1234 ” .

//  let password = prompt("Ingresa tu contraseña");
//  if (password == "1234") {
//      alert("Tu contraseña es correcta");

//  } else {
//      alert("Tu contraseña es incorrecta");

//  }

//------------------------------------------------------------------------------------------------------------------

//Ejercicio 9: Escribe un programa que pida al usuario un color y muestre si es uno de los colores del arcoíris o no.

// let color = prompt("Ingresa un color");

// if (color === "rojo" || color === "naranja" || color === "amarillo" || color === "verde" || color === "azul" || color === "indigo" || color === "violeta") {
//     alert(`El ${color} hace parte de los colores del arcoíris`);
// } else {
//     alert(`El ${color} no hace parte de los colores del arcoíris`);
// }
//----------------------------------------------------------------------------------------------------------------------

//Ejercicio 10:  Escribe un programa que pida al usuario un animal y muestre si es un mamífero, un ave, un reptil, un anfibio, un pez o un invertebrado 

// let nombre = prompt("Ingresa el nombre de un animal:");

// //utilizare arrays para clasificar los animales

// const mamiferos = ["burro", "zorro", "jirafa", "oso", "elefante", "rinoceronte", "koala", "ardilla", "ciervo", "perro", "panda"];
// const aves = ["colibri", "aguila", "buho", "gaviota", "lechuza", "pajaro carpintero", "tucan", "flamenco", "gorrion", "loro"];
// const reptiles = ["tortuga", "iguana", "escorpion", "salamandra", "camaleón", "caiman", "serpiente"];
// const anfibios = ["rana", "sapo", "ajolote"]
// const acuaticos = ["delfin", "pez globo", "pulpo", "medusa", "caballo de mar", "tiburón", "ballena", "bagre"]
// const invertebrados = [ "gusano", "escarabajo","tarantula", "babosa", "abeja"]

// //para vericar si el animal ingresado esta en el array

// if (mamiferos.includes(nombre)) {
//     alert(`${nombre} es un mamífero.`);
// } else if (aves.includes(nombre)) {
//     alert(`${nombre} es un ave.`);
// } else if (reptiles.includes(nombre)) {
//     alert(`${nombre} es un reptil.`);
// } else if (anfibios.includes(nombre)) {
//     alert(`${nombre} es un anfibio.`);
// } else if (acuaticos.includes(nombre)) {
//     alert(`${nombre} es un animal acuático`);
// } else if (invertebrados.includes(nombre)) {
//     alert(`${nombre} es un animal invertebrado`);
// } else {
//     alert(`${nombre} no se encuentra en la lista de clasificación.`);
// }
//--------------------------------------------------------------------------------------------------------------

//estructura de control anidada

// ejercicio 1:  Escribe un programa que pida al usuario un número y muestre si es positivo, negativo o cero.
 
// let numero = parseInt(prompt("Ingresa un numero"));

//  if (numero > 0) {
//      alert(`${numero} es positivo`);
//  } else if (numero < 0) {
//      alert(`${numero} es negativo`);
//  } else {
//      alert(`${numero} es cero`);
//  }
//--------------------------------------------------------------------------------------------------------------

//Ejercicio 2:  Escribe un programa que pida al usuario tres números y muestre el mayor, el menor y el medio de ellos.

// const num1 = parseInt(prompt("Ingresa el primer número"));
// const num2 = parseInt(prompt("Ingresa el segundo número"));
// const num3 = parseInt(prompt("Ingresa el tercer número"));

// let mayor, medio, menor;


// if(num1 ===0 || num2 === 0 || num3 === 0) {
//     alert('El número cero no puede ser comparado, por favor ingresa números válidos')
// }else if (num1 >= num2 && num1 >= num3) {
//     mayor = num1;
//     if (num2 >= num3) {
//         medio = num2;
//         menor = num3;
//     } else {
//         medio = num3;
//         menor = num2;
//     }
// } else if (num2 >= num1 && num2 >= num3) {
//     mayor = num2;
//     if (num1 >= num3) {
//         medio = num1;
//         menor = num3;
//     } else {
//         medio = num3;
//         menor = num1;
//     }
// } else {
//     mayor = num3;
//     if (num1 >= num2) {
//         medio = num1;
//         menor = num2;
//     } else {
//         medio = num2;
//         menor = num1;
//     }
// } 

// alert(`El número mayor es ${mayor}, el número del medio es ${medio} y el número menor es ${menor}`);
//---------------------------------------------------------------------------------------------------------------------

//Ejercicio 3:  Escribe un programa que pida al usuario un día de la semana y muestre si es laboral o no.

// let dia = parseInt(prompt("Ingresa un día de la semana del 1 al 7"));

// // verificación:  el numero debe estar entre 1 y 7

// if (dia >= 1 && dia <= 7) {
//     if (dia >= 1 && dia <= 7) { 
//         if (dia <= 6) {
//             alert("Es un día laboral");
//         } else {
//             alert("Es un día no laboral");
//         }
//     } 
// } else {
//     alert("El número de día ingresado no es válido");
// }
//-----------------------------------------------------------------------------------------------------------------------

//Ejercicio: 4  Escribe un programa que pida al usuario un mes y muestre la estación del año a la que pertenece.

// let mes = prompt("Ingresa un mes:")

// // Verifica el mes y muestra la estación correspondiente
// if (mes === "enero" || mes === "febrero" || mes === "diciembre") {
//     alert("En este mes la estación es invierno.");
// } else if (mes === "marzo" || mes === "abril" || mes === "mayo") {
//     alert("En este mes la estación es primavera.");
// } else if (mes === "junio" || mes === "julio" || mes === "agosto") {
//     alert("En este mes la estación es verano.");
// } else if (mes === "septiembre" || mes === "octubre" || mes === "noviembre") {
//     alert("En este mes la estación es otoño.");
// } else {
//     alert("No aplica. Por favor ingresa un mes válido .");
// }
//--------------------------------------------------------------------------------------------------------------------

//Ejercicio 5: Escribe un programa que pida al usuario una edad y muestre si es menor de edad, mayor de edad o jubilado.

// let edad = parseInt(prompt("Ingresa tu edad:"));

// if(edad >= 18){
//     if(edad >= 62){
//         alert("Es jubilado");
//     }else{
//         alert("Es mayor de edad");
//     }
// }else{
//     alert("Es menor de edad");
// }
//--------------------------------------------------------------------------------------------------------------------

//Ejercicio 6: Escribe un programa que pida al usuario un carácter y muestre si es una letra mayúscula, una letra minúscula, un número o un símbolo.

//--------------------------------------------------------------------------------------------------------------------

// Ejercicio 7: Escribe un programa que pida al usuario dos números enteros y muestre si son divisibles entre sí o no

// let num1 = parseInt(prompt("Ingresa un número:"));
// let num2 = parseInt(prompt("Ingresa un segundo número:"));

// if (num1 % num2 == 0) {
//     alert("Son divisibles entre sí.");
// }else{
//     alert("No son divisibles entre sí.");
// }if (num2 % num1 == 0) {
//     alert("Son divisibles entre sí.");
// }else{
//     alert("No son divisibles entre sí.");
// }
//---------------------------------------------------------------------------------------------------------------------

//Ejercicio 8:  Escribe un programa que pida al usuario una nota numérica y muestre su equivalente en letras según el siguiente criterio: A ( 10 - 9), B (8 - 7), C (6 - 5), D (4 - 3), F (2 - 0)

// let nota = parseInt(prompt("Ingresa una nota numérica:"));

// if (nota === 10 || nota === 9) {
//     alert("Su calificación es: A");
// }else if (nota === 8 || nota === 7) {
//     alert("Su calificación es: B");
// }else if (nota === 6 || nota === 5) {
//     alert("Su calificación es: C");
// }else if (nota === 4 || nota === 3) {
//     alert("Su calificación es: D");
// }else if(nota === 2 || nota === 0) {
//     alert("Su calificación es: F");
// }else{
//     alert("La nota que ingresaste no es válida.");
// }
// ----------------------------------------------------------------------------------------------------------------------















