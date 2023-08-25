//Generamos un numero al azar
let numeroAzar = Math.floor(Math.random() * 100) + 1; //<- incluye 1 y 100 ya que al multiplicar por 100 casi nunca sale ni 0 ni 100.

let numeroEntrada = document.getElementById('numeroEntrada'); //<-Traemos el input.
let mensaje = document.getElementById('mensaje'); //<-Traemos el párrafo.
//contar intentos:
let intento = document.getElementById('intento');
let intentos = 0;

//Funcion que se ejecuta al dar click: 
function chequearResultado() {
    intentos++
    intento.textContent = intentos;
    let numeroIngresado = parseInt(numeroEntrada.value);
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) { //<<isNaN funcion para revisar el valor y determinar si es no es numérico.
        mensaje.textContent = 'Favor de introducir un número entre 1 y 100'; //<<textContent atributo de la variable mensaje. Pinta texto.
        mensaje.style.color = 'gray';
        return;
    }
    if (numeroIngresado === numeroAzar && intentos == 1) {
        mensaje.textContent = 'SUPREME VICTORY!!!';
        mensaje.style.color = 'gold';
        numeroEntrada.disabled = true;
        return;
    } else if (numeroIngresado === numeroAzar) {
        mensaje.textContent = '¡Felicidades! Adivinaste el número secreto';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        return;
    }
    if (numeroAzar - 5 < numeroIngresado && numeroIngresado < numeroAzar + 5) {
        mensaje.textContent = '¡TE ESTAS QUEMANDO!!';
        mensaje.style.color = 'red';
        return;
    } else if (numeroAzar - 15 < numeroIngresado && numeroIngresado < numeroAzar + 15) {
        mensaje.textContent = '¡CALIENTE!';
        mensaje.style.color = 'orange';
        return;
    } else {
        mensaje.textContent = '¡FRÍO!';
        mensaje.style.color = 'blue';
    }
}
console.log(numeroAzar);