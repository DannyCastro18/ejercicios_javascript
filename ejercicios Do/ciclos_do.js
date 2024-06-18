//Estructura: Ciclos Do

//Ejercicio 1:  Sumar los números del 1 al 10 utilizando un bucle.

let numero = 1;
let suma = 0;

do {
    suma += numero; // Sumar el siguiente número a la suma acumulada
    numero++; // Incrementar el número 
} while (numero <= 10); // Continuar el bucle mientras el número sea menor o igual a 10

alert("La suma de los números del 1 al 10 es: " + suma);
//------------------------------------------------------------------------------------------

//Ejercicio 2: Pedir al usuario que ingrese un número mayor que 100 utilizando un bucle. 

// let numeroMayor;

// do {
//     numeroMayor = parseInt(prompt("Ingresa un número mayor que 100:"));
//     if (isNaN(numeroMayor)) { //Verifica si lo ingresado no es un número (isNaN)
//         alert("Por favor, ingrese un número válido.");
//     } else if (numeroMayor <= 100) { //si el número ingresa es menor a 100 entonces:
//         alert("Por favor, ingrese un número mayor que 100.");
//     }
// } while (isNaN(numeroMayor) || numeroMayor <= 100);

// alert("¡Gracias! Ha ingresado un número mayor que 100.");
//------------------------------------------------------------------------------------------

//Ejercicio 3: Generar un número aleatorio entre 1 y 10 hasta que se obtenga un 7.

// let numeroAleatorio;

// do {
//     numeroAleatorio = Math.floor(Math.random() * 10) + 1; // Math.floor(...): Redondea hacia abajo el resultado * 10 - Math.random(): Genera un número decimal aleatorio - Al sumarle (+ 1), se obtiene un número entero aleatorio entre 1 y 10 
//     alert("El número generado es: " + numeroAleatorio);
// } while (numeroAleatorio !== 7);

// alert("¡Se ha obtenido el número 7!");
//-----------------------------------------------------------------------------------------------

//Ejercicio 4: Imprimir los números pares del 0 al 20 

// let numeroInicial = 0;

// do {
//     if (numeroInicial % 2 === 0) {
//         alert(numeroInicial);
//     }
//     numeroInicial ++;
// } while (numeroInicial <= 20);
//-------------------------------------------------------------------------------------------------

//Ejercicio 5: Pedir al usuario que ingrese un número entre 1 y 5.

// let eleccion;

// do {
//     eleccion = parseInt(prompt("Ingresa un número entre 1 y 5:")); 
//     if (isNaN(eleccion) || eleccion < 1 || eleccion > 5) { // Verificar si el número ingresado cumple, sino ->
//         alert("Por favor, ingrese un número entre 1 y 5."); 
//     }
// } while (isNaN(eleccion) || eleccion < 1 || eleccion > 5); // Repetir el bucle mientras el número no sea válido

// alert("Ha ingresado el número " + eleccion ); 
//-----------------------------------------------------------------------------------------------------

//Ejercicio 6: Imprimir los primeros 10 números de la serie de Fibonacci  

// inicializamos los primeros dos números de la serie de Fibonacci

// let a = 0;
// let b = 1;

// // imprimimo los primeros 10 números de la serie de Fibonacci
// console.log("Los primeros 10 números de la serie de Fibonacci son:");
// console.log(a); 
// console.log(b); 

// let contador = 2;
// do {
//     let num = a + b; // calculamos el siguiente número de la serie
//     alert(num); // mostramos el siguiente número de la serie
//     a = b; // actualizamos el primer número con el segundo número
//     b = num; // actualizamos el segundo número con el resultado 
//     contador++; // incrementamos el contador
// } while (contador < 10); // Continuamos el ciclo mientras el contador sea menor que 10
//------------------------------------------------------------------------------------------------------------------

//Ejercicio 7: Pedir al usuario que ingrese una contraseña y repetir la solicitud hasta que ingrese una contraseña válida (por ejemplo, "contraseña123").

// let password;

// do {
//     password = prompt("Ingresa la contraseña:"); // Solicitar al usuario que ingrese la contraseña
//     if (password !== "contraseña123") { // Verificar si la contraseña no es válida - !== se utiliza para comparar dos valores y verificar si no son iguales
//         alert("Contraseña incorrecta. Por favor, inténtelo de nuevo."); 
//     }
// } while (password !== "contraseña123"); // Repetir el ciclo mientras la contraseña no sea válida
//     alert("¡Bienvenido!"); 
//-----------------------------------------------------------------------------------------------------------------------

//Ejercicio 8: Imprimir los primeros 5 números primos.

//----------------------------------------------------------------------------------------------------------------------

//Ejercicio 9: Pedir al usuario que ingrese un número positivo utilizando un bucle do - while y mostrar un mensaje de error si no lo hace.

// let ingreso;

// do {
//     ingreso = parseInt(prompt("Ingresa un número positivo:")); 
//     if (ingreso <= 0 || isNaN(ingreso)) { // Verificar si el número no es positivo o no es un número
//         alert("Error: Por favor, ingresa un número positivo válido."); 
//     }
// } while (ingreso <= 0 || isNaN(ingreso)); // Repetir el bucle mientras la entrada no sea válida

// alert("¡Número ingresado correctamente!"); 


//----------------------------------------------------------------------------------------------------------------------

//Ejercicio 10:  Imprimir los números del 10 al 1

// let numero = 10; 

// do {
//     console.log(numero); // Imprimimos el número actual
//     numero--; // Decrementamos el número en cada iteración para imprimir los números en orden descendente
// } while (numero >= 1); // Continuamos el bucle mientras el número sea mayor o igual a 1

