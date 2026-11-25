let colaborador = {
    nombre: "Ana Morales",
    edad: 28,
    area: "Recursos Humanos",
    capacitacion: 80,
    activo: true
};

console.log("Informacion del colaborador:");
console.log("Nombre: " + colaborador.nombre);
console.log("Edad: " + colaborador.edad);
console.log("Area: " + colaborador.area);
console.log("Avance de capacitacion: " + colaborador.capacitacion + "%");
console.log("¿Esta activo/a? " + colaborador.activo);
console.log("Colaborador:", colaborador);

console.log("Agregar informacion al perfil");
colaborador.cargo = "Asistente de seleccion";
colaborador["sede"] = "Quito";
console.log("Cargo: " + colaborador.cargo);
console.log("Sede: " + colaborador.sede);

console.log("Actualizar el avance de capacitacion");
colaborador.capacitacion = 100;
console.log("Nuevo avance: " + colaborador.capacitacion + "%");
colaborador.activo = false;
console.log("Estado: " + (colaborador.activo ? "Activo/a" : "Inactivo/a"));

console.log("Eliminar una propiedad temporal");
delete colaborador.sede;
console.log("Colaborador:", colaborador);

console.log("Recorrer las propiedades del perfil");
for (let propiedad in colaborador) {
    console.log(propiedad + ": " + colaborador[propiedad]);
}

let indicadores = {
    vacantes: 4,
    postulaciones: 25,
    entrevistas: 8,
    capacitaciones: 3
};
console.log("Indicadores de Recursos Humanos:");
for (let indicador in indicadores) {
    console.log(indicador + ": " + indicadores[indicador]);
}
let totalActividades = indicadores.vacantes + indicadores.postulaciones
    + indicadores.entrevistas + indicadores.capacitaciones;
console.log("Total de actividades registradas: " + totalActividades);
