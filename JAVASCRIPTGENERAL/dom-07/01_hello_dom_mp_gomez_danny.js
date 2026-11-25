const titulo = document.getElementById("titulo");
titulo.textContent = "Area de Recursos Humanos";

const estado = document.getElementById("estado");
const botonJornada = document.getElementById("botonJornada");
botonJornada.addEventListener("click", function() {
    estado.textContent = "La jornada de induccion esta activa";
});

const tituloInduccion = document.getElementById("tituloInduccion");
const mensajeInduccion = document.getElementById("mensajeInduccion");
const botonInduccion = document.getElementById("botonInduccion");
botonInduccion.addEventListener("click", function() {
    tituloInduccion.textContent = "Induccion iniciada";
    mensajeInduccion.textContent = "Revisa las politicas y conoce a tu equipo.";
});

const mensaje = document.getElementById("mensaje");
const botonMensaje = document.getElementById("botonMensaje");
botonMensaje.addEventListener("click", function() {
    mensaje.textContent = "Estamos aqui para apoyarte en tu desarrollo laboral.";
});

let colaboradoresRegistrados = 0;
const contador = document.getElementById("contador");
const nuevoColaborador = document.getElementById("nuevoColaborador");
nuevoColaborador.addEventListener("click", function() {
    colaboradoresRegistrados++;
    contador.textContent = colaboradoresRegistrados;
});
