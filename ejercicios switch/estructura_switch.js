// //Ejercicio 1: Calificación de letras: Escribe un programa que tome una letra como entrada y devuelva un mensaje según la letra ingresada (A, B, C, D, F)

// let letra = prompt("Ingresa una letra (A, B, C, D, F):").toUpperCase();//toUppercase convierte las letras a mayúsculas
// let mensaje;

// //el siguiente paso es para que se ejecute la funcion del switch
// switch (letra) {
//     //el caso es para comparar con la condicion
//     case "A":
//         mensaje = "Excelente";
//         break //para que se detenga el switch
//     case "B":
//         mensaje = "Muy bien";
//         break
//     case "C":
//         mensaje = "Bien";
//         break
//     case "D":
//         mensaje = "Regular";
//         break
//     case "F":
//         mensaje = "Insuficiente";
//         break
      
//     default: //para que se ejecute si no se cumple ninguna de las condiciones
//         alert(`La letra ${letra} no es válida, ingresa una letra válida`)
//         break

// }if (mensaje){ //se muestra solo si la letra ingresada esta dentro del rango (A-F)
//     alert(mensaje);
// } 
//---------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 2:Días de la semana: Crea un programa que tome un número del 1 al 7 y devuelva el día correspondiente de la semana.

// let numDia = parseInt(prompt("Ingresa un número del 1 al 7 para conocer el día de la semana:"));
// let diaSemana;

// switch (numDia) {
//     case 1:
//         diaSemana = "Lunes";
//         break;
//     case 2:
//         diaSemana = "Martes";
//         break;
//     case 3:
//         diaSemana = "Miércoles";
//         break;
//     case 4:
//         diaSemana = "Jueves";
//         break;
//     case 5:
//         diaSemana = "Viernes";
//         break;
//     case 6:
//         diaSemana = "Sábado";
//         break;
//     case 7:
//         diaSemana = "Domingo";
//         break;
//     default:
//         diaSemana = "Número inválido, ingresa un número del 1 al 7.";

// }if (diaSemana){ //se muestra solo si el número ingresado esta dentro del rango (1-7)
//     alert(diaSemana);
// }
//----------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 3: Meses del año: Escribe un programa que tome un número del 1 al 12 y devuelva el nombre del mes correspondiente.

// let numMes = parseInt(prompt("Ingresa un número del 1 al 12 para conocer el mes:"));
// let mes; 

// switch(numMes){
//     case 1:
//         mes = "Enero";
//         break;
//     case 2:
//         mes = "Febrero";
//         break;
//     case 3:
//         mes = "Marzo";
//         break;
//     case 4:
//         mes = "Abril";
//         break;
//     case 5:
//         mes = "Mayo";
//         break;
//     case 6:
//         mes = "Junio";
//         break;
//     case 7:
//         mes = "Julio";
//         break;
//     case 8:
//         mes = "Agosto";
//         break;
//     case 9:
//         mes = "Septiembre";
//         break;
//     case 10: 
//         mes = "Octubre";
//         break;
//     case 11:
//         mes = "Noviembre";
//         break;
//     case 12:
//         mes = "Diciembre";
//         break;

//         default:
//          alert(`Número inválido, ingresa un número del 1 al 12`)
//         break;
        
// } if (mes){ //se muestra solo si el número ingresado esta dentro del rango (1-12)
//     alert(mes);
// }
//--------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 4: Operaciones matemáticas básicas: Desarrolla un programa que tome dos números y un operador (+, - , *, /) y realice la operación correspondiente.

// Solicitar al usuario que ingrese dos números y un operador

// let number1 = parseFloat(prompt("Ingresa el primer número:"));
// let operador = prompt("Ingresa el operador (+, -, *, /):");
// let number2 = parseFloat(prompt("Ingresa el segundo número:"));
// let resultado;

// switch (operador) {
//     case '+':
//         resultado = number1 + number2;
//         break;
//     case '-':
//         resultado = number1 - number2;
//         break;
//     case '*':
//         resultado = number1 * number2;
//         break;
//     case '/':
//         if (number2 !== 0) {
//             resultado = number1 / number2;
//         } else {
//             resultado = "NO se puede dividir por cero";
//         }
//         break;
//     default:
//         resultado = "Operador no válido";

// } if (resultado){
//     alert(`Resultado: ${resultado}`);
// }

//-----------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 5:  Traductor de idiomas: Crea un programa que tome una palabra en inglés y la traduzca a otro idioma utilizando switch para diferentes casos.

//  let palabra = prompt("Ingresa una palabra en inglés:");
//  let mayus = palabra.charAt(0).toUpperCase() + palabra.slice(1); //Para poner la  primera letra de la palabra en mayúscula
//  let traduction; 

//  switch (mayus)
//  {
//     case "Hello":
//         traduction = "Hola";
//         break;
//     case "Good morning":
//         traduction = "Buenos días";
//         break;  
//     case "God bless you":
//         traduction = "Dios te bendiga";
//         break;
//     case "Welcome":
//         traduction = "Bienvenido";
//         break;
//     case "Good bye":
//         traduction = "Adiós";
//         break;
//     case "Thank you":
//         traduction = "Gracias";
//         break;
//     case "Amazing":
//         traduction = "Increíble";
//         break;
//     case "Congratulations":
//         traduction = "Felicidades";
//         break;
//     default:
//         traduction = "Esta palabra no está registrada";
//         break;
//  } alert("Traducción a español: " +  traduction);

//--------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 6: Calculadora de tarifa de envío: Desarrolla un programa que calcule la tarifa de envío de acuerdo al peso del paquete y el destino

// let pesoPaquete = parseFloat(prompt("Ingresa el peso del paquete (kg):"));
// let destino = prompt("Ingresa el destino del paquete (EEUU, COREA, ARGENTINA, SUIZA):");

// let tarifaEnvio;

// switch (destino.toUpperCase()) { //toUpperCase() Convertir a mayúsculas
//     case 'EEUU':
//         if (pesoPaquete <= 50 || pesoPaquete <= 100) { //if para determinar el peso del paquete
//             tarifaEnvio = 5.000;
//         } else if (pesoPaquete <= 200) {
//             tarifaEnvio = 10.000;
//         } else {
//             tarifaEnvio = 20.000;
//         }
//         break;
//     case 'COREA':
//         if (pesoPaquete <= 50 || pesoPaquete <= 100) {
//             tarifaEnvio = 10.000;
//         } else if (pesoPaquete <= 200) {
//             tarifaEnvio = 20.000;
//         } else {
//             tarifaEnvio = 35.000;
//         }
//         break;
//     case 'ARGENTINA':
//         if (pesoPaquete <= 50 || pesoPaquete <= 100) {
//             tarifaEnvio = 3.000;
//         } else if (pesoPaquete <= 200) {
//             tarifaEnvio = 8.000;
//         } else {
//             tarifaEnvio = 13.000;
//         }
//         break;
//     case 'SUIZA':
//         if (pesoPaquete <= 50 || pesoPaquete <= 100) {
//             tarifaEnvio = 10.000;
//         } else if (pesoPaquete <= 200) {
//             tarifaEnvio = 20.000;
//         } else {
//             tarifaEnvio = 35.000;
//         }
//         break;
//     default:
//         tarifaEnvio = "Destino no válido";
// }

// // Mostrar la tarifa de envío
// if (typeof tarifaEnvio === 'number') { //typeof para verificar si la variable tarifaEnvio es de tipo number
//     alert("La tarifa de envío es: $" + tarifaEnvio.toFixed(3)); //toFixed(3) decimales que se van a mostrar, 3 en este caso
// } else {
//     alert(tarifaEnvio);
// }
//------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 7: Conversor de unidades: Escribe un programa que convierta entre diferentes unidades de medida (por ejemplo, centímetros a pulgadas, kilogramos a libras, etc.).

// let opcion = parseInt(prompt("Seleccione el tipo de conversión: 1. Centímetros a pulgadas  2. Kilogramos a libras"));
// let valor;
// let resultado;

// switch (opcion) {
//     case 1:
//         valor = parseFloat(prompt("Ingresa la longitud en centímetros:"));
//         resultado = valor * 0.393701; 
//         // Convertir centímetros a pulgadas
//         alert(`${valor} centímetros equivale a ${resultado.toFixed(2)} pulgadas.`);
//         break;
//     case 2:
//         valor = parseFloat(prompt("Ingresa el peso en kilogramos:"));
//         resultado = valor * 2.20462; 
//         // Convertir kilogramos a libras
//         alert(`${valor} kilogramos equivale a ${resultado.toFixed(2)} libras.`);
//         break;
//     default:
//         alert("Opción no válida.");
// }
//-----------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 8: Detección de tipo de dato: Crea un programa que tome un valor y determine si es un número, una cadena de texto, un booleano o un objeto.

//---------------------------------------------------------------------------------------------------------------------------------------------

//Ejercicio 9: Generador de mensajes personalizados: Desarrolla un programa que tome un evento como entrada y devuelva un mensaje personalizado dependiendo del evento (cumpleaños, boda, graduación, etc.)

// Pedir al usuario que ingrese el evento
// let evento = prompt("Ingresa el evento:").toLowerCase();

// let mensaje = "";

// switch (evento) {
//     case 'cumpleaños':
//         mensaje = "¡Feliz cumpleaños! Que este día esté lleno de alegría, amor y momentos especiales. Que todos tus deseos se hagan realidad. ¡Disfruta al máximo tu día! 🎁😘";
//         break;
//     case 'boda':
//         mensaje = "¡Felicidades en este día tan especial! Que el amor y la alegría los acompañen en esta nueva etapa juntos. Que su vida esté llena de momentos felices y hermosos recuerdos. ¡Vivan siempre felices! 💞👩🏻‍🤝‍🧑🏻";
//         break;
//     case 'graduacion':
//         mensaje = "¡Felicitaciones por tu graduación! Todo tu esfuerzo y dedicación han dado frutos. Estoy muy orgulloso/a de ti. Que este logro sea el inicio de un futuro brillante y lleno de éxitos. ¡Celebra y disfruta al máximo este gran día! 🎓💐";
//         break;
//     case 'despedida de soltera':
//         mensaje = "Que esta fiesta sea tan épica como tú. ¡Que empiece la diversión y los momentos inolvidables! 🎉💃";
//         break;
//     default:
//         mensaje = "¡Felicitaciones por tu evento!😊";
//         break;
// }
// alert(mensaje);
//---------------------------------------------------------------------------------------------------------------------------------------------
//Ejercicio 10: Menú de opciones: Implementa un programa que muestre un menú con diferentes opciones y realice una acción correspondiente según la opción seleccionada. 

// // Mostrar el menú 
// alert("Género musical favorito: 1. Reguetón 2. Pop 3. Rap 4. Salsa 5. Jazz 6. Vallenato 7. Clásica 8. Trap 9. Corridos 10. Otro");

// // el usuario ingrsa la opcion deseada
// let opcion = prompt("Ingresa el número asignado a tu género musical favorito: 1. Reguetón 2. Pop 3. Rap 4. Salsa 5. Jazz 6. Vallenato 7. Clásica 8. Trap 9. Corridos 10. Otro");

// // Convertir la opción ingresada a un número entero
// opcion = parseInt(opcion);

// switch (opcion) {
//     case 1:
//         alert("Se reproducirá el albúm de Feid en Spotify.");
//         break;
//     case 2:
//         alert("Se reproducirá el albúm de Jungkook en Spotify.");
//         break;
//     case 3:
//         alert("Se reproducirá el albúm de Penyair en Spotify.");
//         break;
//     case 4:
//         alert("Se reproducirá el albúm del Grupo Niche en Spotify.");
//         break;
//     case 5:
//         alert("Se reproducirá el albúm de Taehyung en Spotify");
//         break;
//     case 7:
//         alert("Se reproducirá el albúm de Taehyung en Spotify");
//         break;
//     case 8:
//         alert("Se reproducirá el albúm de Bad Bunny en Spotify");
//         break;
//     case 9:
//         alert("Se reproducirá el albúm de Peso Pluma en Spotify");
//         break;
//     case 10:
//         alert("Se reproducirá en Spotify un albúm de música variada");
//         break;
//     default:
//         alert("Opción no válida. Por favor, ingrese un número válido del menú.");
//         break;
    
// }
//---------------------------------------------------------------------------------------------------------------------------------------------
