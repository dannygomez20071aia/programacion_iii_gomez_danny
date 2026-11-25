const mensaje = document.getElementById("mensaje");
const saludo = document.getElementById("saludo");

mensaje.textContent = "Conoce a las personas de nuestra organizacion";
saludo.innerHTML = "<strong>Trabajamos en equipo para crecer juntos.</strong>";

const ficha = document.getElementById("ficha");
ficha.innerHTML = `
    <h2>Ana Morales</h2>
    <p>Area: Recursos Humanos</p>
    <p>Cargo: Asistente de seleccion</p>
    <p>Estado: Colaboradora activa</p>`;

const nombre = document.getElementById("nombre");
const saludar = document.getElementById("saludar");
const registrar = document.getElementById("registrar");
registrar.addEventListener("click", function() {
    const nombreColaborador = nombre.value.trim();
    if (nombreColaborador === "") {
        saludar.textContent = "Escribe un nombre para continuar.";
        return;
    }
    saludar.textContent = "¡Bienvenido/a al equipo, " + nombreColaborador + "!";
});
