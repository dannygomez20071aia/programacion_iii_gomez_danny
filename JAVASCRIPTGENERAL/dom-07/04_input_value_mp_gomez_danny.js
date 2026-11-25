const sesiones = document.getElementById("sesiones");
const horas = document.getElementById("horas");
const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcular.addEventListener("click", function() {
    if (sesiones.value.trim() === "" || horas.value.trim() === "") {
        resultado.textContent = "Completa ambos campos";
        return;
    }

    const cantidadSesiones = Number(sesiones.value);
    const horasPorSesion = Number(horas.value);
    if (!Number.isFinite(cantidadSesiones) || !Number.isFinite(horasPorSesion)
        || cantidadSesiones < 0 || horasPorSesion < 0) {
        resultado.textContent = "Ingresa valores validos";
        return;
    }

    const totalHoras = cantidadSesiones * horasPorSesion;
    resultado.textContent = "Total de horas de capacitacion: " + totalHoras;
});
