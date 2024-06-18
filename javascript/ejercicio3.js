// Escribe un programa que pida al usuario un año y muestre si es bisiesto o no
let year = prompt("Ingresa un año para determinar si es bisiesto");

if (!isNaN(year) && year !== '') {
    year = parseInt(year); 

    if (year % 4 === 0) {
        if (year % 100 !== 0 || (year % 100 === 0 && year % 400 === 0)) {
            alert('El ' + year + ' es un año bisiesto.');
        } else {
            alert('El ' + year + ' no es un año bisiesto.');
        }
    } 
}
