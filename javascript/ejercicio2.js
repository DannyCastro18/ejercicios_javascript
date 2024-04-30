//Escribe un programa que pida al usuario dos números y muestre el mayor de ellos.
let num1 = prompt('Ingresa un número');
let num2 = prompt('Ingresa otro número');

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 > num2){
    alert('El número mayor es: ' + num1);
}else {
    alert('El número mayor es: ' + num2);
}