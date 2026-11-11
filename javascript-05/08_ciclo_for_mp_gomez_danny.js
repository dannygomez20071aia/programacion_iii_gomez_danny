console.log("Ciclo For");
for (let i = 1; i <= 5; i++) {
    console.log("Colaborador registrado: " + i);
}

console.log("Cuenta regresiva para iniciar una induccion");
for (let i = 10; i >= 0; i--) {
    console.log("Faltan " + i + " minutos para iniciar la induccion");
}

console.log("Cuenta regresiva con mensaje final");
for (let i = 5; i >= 0; i--) {
    if (i === 0) {
        console.log("La induccion comienza ahora");
    } else {
        console.log("Faltan " + i + " minutos para iniciar la induccion");
    }
}

console.log("Seguimiento del porcentaje de capacitacion");
let progreso = 50;
for (let i = 0; i <= 100; i += 10) {
    if (progreso >= i) {
        console.log("Progreso de la capacitacion: " + i + "%");
    }
}

const costoPorCapacitacion = 100;
let totalInvertido = 0;
for (let capacitacion = 1; capacitacion <= 5; capacitacion++) {
    totalInvertido += costoPorCapacitacion;
    console.log("Capacitacion " + capacitacion);
    console.log("Total invertido hasta ahora: $" + totalInvertido);
}
console.log("Inversion total en capacitaciones: $" + totalInvertido);

console.log("Promedio de horas de capacitacion");
let totalHoras = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++) {
    let horas = dia + 1;
    totalHoras += horas;
    console.log("Dia " + dia + ": horas de capacitacion: " + horas);
}
console.log("Total de horas de capacitacion: " + totalHoras);
console.log("Promedio de horas por dia: " + (totalHoras / dias).toFixed(2));

console.log("Evaluacion de postulantes");
let puntajes = [70, 85, 60, 95, 80, 55, 90];
let totalPuntajes = 0;
let postulantesAprobados = 0;
for (let i = 0; i < puntajes.length; i++) {
    totalPuntajes += puntajes[i];
    console.log("Postulante " + (i + 1) + ": puntaje " + puntajes[i]);
    if (puntajes[i] >= 75) {
        postulantesAprobados++;
    } else {
        console.log("Postulante " + (i + 1) + " no alcanzo el puntaje minimo");
    }
}
console.log("Total de puntos obtenidos: " + totalPuntajes);
console.log("Postulantes aprobados: " + postulantesAprobados);

console.log("Recorrer colaboradores con for...of");
const colaboradores = ["Ana", "Luis", "Sofia", "Mateo", "Valeria"];
for (const colaborador of colaboradores) {
    console.log("Colaborador: " + colaborador);
}

let departamento = {
    nombre: "Recursos Humanos",
    presupuesto: 5000,
    ubicacion: "Quito",
    colaboradores: ["Ana", "Luis", "Sofia"]
};
console.log("Recorrer propiedades del departamento con for...in");
for (let propiedad in departamento) {
    console.log(propiedad + ": " + departamento[propiedad]);
    if (propiedad === "colaboradores") {
        console.log("Integrantes del departamento:");
        for (let colaborador of departamento[propiedad]) {
            console.log("- " + colaborador);
        }
    }
}

let procesosSeleccion = [
    { nombre: "Proceso 1", puntaje: 90, meta: 100, postulante: "Ana" },
    { nombre: "Proceso 2", puntaje: 80, meta: 100, postulante: "Luis" },
    { nombre: "Proceso 3", puntaje: 95, meta: 100, postulante: "Sofia" }
];

let procesosExitosos = 0;
for (let proceso of procesosSeleccion) {
    let porcentaje = (proceso.puntaje / proceso.meta) * 100;
    console.log(`${proceso.nombre} para ${proceso.postulante}: ${porcentaje.toFixed(2)}% del puntaje`);
    if (porcentaje >= 90) {
        procesosExitosos++;
    } else {
        console.log(proceso.nombre + " aun no alcanza la meta");
    }
}
console.log("Total de procesos exitosos: " + procesosExitosos);
