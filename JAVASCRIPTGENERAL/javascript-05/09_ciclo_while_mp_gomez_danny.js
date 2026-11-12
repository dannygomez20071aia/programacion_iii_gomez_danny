console.log("Preparando estaciones de trabajo...");
let estacion = 1;
while (estacion <= 5) {
    console.log("Estacion preparada: " + estacion);
    estacion++;
}
console.log("Todas las estaciones estan listas");

console.log("Cuenta regresiva para iniciar la jornada de induccion");
let minutos = 5;
while (minutos >= 0) {
    console.log("Faltan " + minutos + " minutos para iniciar la induccion");
    minutos--;
}

console.log("Completar una capacitacion");
let avance = 50;
let progresoPorSesion = 10;
let sesionesRealizadas = 0;
while (avance < 100) {
    avance += progresoPorSesion;
    sesionesRealizadas++;
    console.log("Progreso de la capacitacion: " + avance + "%");
}
console.log("Capacitacion completada en " + sesionesRealizadas + " sesiones");

let horasCapacitacion = [2, 1, 3, 2, 4, 1, 3, 2];
let metaHoras = 10;
let horasAcumuladas = 0;
let indice = 0;
while (indice < horasCapacitacion.length) {
    let horas = horasCapacitacion[indice];
    indice++;
    if (horas < 2) {
        console.log("Sesion de " + horas + " hora: se registra como actividad breve");
        continue;
    }
    horasAcumuladas += horas;
    console.log("Sesion de " + horas + " horas agregada. Total: " + horasAcumuladas);
    if (horasAcumuladas >= metaHoras) {
        console.log("Se alcanzo la meta de horas de capacitacion");
        break;
    }
}
console.log("Horas de capacitacion acumuladas: " + horasAcumuladas);
