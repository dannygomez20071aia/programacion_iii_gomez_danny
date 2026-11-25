console.log("Funciones para el area de Recursos Humanos");

function iniciarJornada() {
    console.log("La jornada de induccion ha comenzado");
}
iniciarJornada();

function darBienvenida(nombre) {
    console.log("Bienvenido/a al equipo, " + nombre);
}
darBienvenida("Ana");
darBienvenida("Luis");

function calcularHorasCapacitacion(horasActuales, horasNuevas) {
    let totalHoras = horasActuales + horasNuevas;
    console.log("Horas de capacitacion acumuladas: " + totalHoras);
    return totalHoras;
}
let horasRegistradas = 4;
horasRegistradas = calcularHorasCapacitacion(horasRegistradas, 3);
horasRegistradas = calcularHorasCapacitacion(horasRegistradas, 2);

function calcularAvance(porcentajeActual, avanceAdicional) {
    let porcentajeFinal = porcentajeActual + avanceAdicional;
    if (porcentajeFinal > 100) {
        porcentajeFinal = 100;
    }
    return porcentajeFinal;
}
let avanceCapacitacion = calcularAvance(70, 20);
console.log("Avance de la capacitacion: " + avanceCapacitacion + "%");

function evaluarCapacitacion(porcentaje, evaluacion, totalPreguntas) {
    let porcentajeCorrecto = (evaluacion / totalPreguntas) * 100;
    if (porcentaje < 20) {
        console.log("Recordatorio: la capacitacion esta por completarse");
    }
    if (porcentajeCorrecto >= 70) {
        console.log("Capacitacion aprobada con " + porcentajeCorrecto + "% de respuestas correctas");
    } else {
        console.log("Se recomienda repasar el material de capacitacion");
    }
}
evaluarCapacitacion(15, 8, 10);

function calcularHorasSemanales(dias, horasPorDia) {
    return dias * horasPorDia;
}
let horasSemanales = calcularHorasSemanales(5, 7);
console.log("Horas de trabajo registradas esta semana: " + horasSemanales);
