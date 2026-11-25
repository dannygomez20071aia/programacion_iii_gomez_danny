let horasCapacitacion = [3, 5, 2, 4];
let posicion = 2;
let nuevasHoras = 6;

for (let i = 0; i < horasCapacitacion.length; i++) {
    console.log("Posicion:", i);
    console.log("Horas registradas:", horasCapacitacion[i]);
    if (posicion >= 0 && posicion < horasCapacitacion.length) {
        horasCapacitacion[posicion] = nuevasHoras;
    } else {
        console.log("Posicion no valida");
    }
}
console.log("Horas de capacitacion actualizadas:", horasCapacitacion);

let colaboradores = [
    { id: 1, nombre: "Ana", area: "Seleccion", avance: 90 },
    { id: 2, nombre: "Luis", area: "Capacitacion", avance: 80 },
    { id: 3, nombre: "Sofia", area: "Bienestar", avance: 100 }
];

for (let colaborador of colaboradores) {
    console.log("ID:", colaborador.id);
    console.log("Nombre:", colaborador.nombre);
    console.log("Area:", colaborador["area"]);
    console.log("Avance de capacitacion:", colaborador["avance"] + "%");
}
