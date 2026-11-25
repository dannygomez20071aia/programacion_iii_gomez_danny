console.log(document)

const titulo = document.getElementById('titulo')
console.log(titulo)
titulo.textContent = 'Laboratorio Interdimensional'

const estado = document.getElementById('estado');
const boton = document.getElementById('botonPortal');

boton.addEventListener('click', function() {
    console.log('Boton presionado');
    estado.textContent = 'Portal Abierto';
    console.log("Texto cambiado en el elemento 'estado'");
    alert('¡Portal activado! ¡Prepárate para la aventura!');s
});
 
const  titulo2 = document.getElementById('titulo2');
const  mensaje2 = document.getElementById('mensaje2');
const  botonPrueba = document.getElementById('botonPrueba');

botonPrueba.addEventListener('click', function() {
    console.log('Boton de prueba presionado');
    titulo2.textContent = 'Prueba Activada';
    mensaje2.textContent = '¡Hola Morty! ¡La prueba ha comenzado!';
    console.log("Texto cambiado en los elementos 'titulo2' y 'mensaje2'");
    alert('¡Prueba activada! ¡Prepárate para la aventura!');
});

let viajes = 0;
const contador = document.getElementById('contador');
const nuevoViaje = document.getElementById('nuevoViaje');
nuevoViaje.addEventListener('click', function() {
    viajes+=1;
    contador.textContent = viajes;
});