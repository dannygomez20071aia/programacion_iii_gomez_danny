let nombre="Rick";
let edad=70;
let planeta="Tierra C-137";
let energia=100;
let averiada = false;

let nave = {
    nombre: "Rick",
    edad: 70,
    planeta: "Tierra C-137",
    energia: 100,
    averiada: false
}
console.log("Informacion de la nave de Rck: ");
console.log("Nombre del piloto:" + nave.nombre);
console.log("Edad del piloto:" + nave.edad);
console.log("Planeta de origen:" + nave.planeta);
console.log("Nivel de energía:" + nave.energia);
console.log("¿La nave está averiada?" + nave.averiada);
console.log("nave Rick", nave);

console.log("agregar una nueva propiedad a la nave");
nave.modelo = "Nave Espacial X-2000";
console.log("Modelo de la nave:" + nave.modelo);
nave["capacidadPasajeros"] = 5;
console.log("Capacidad de pasajeros:" + nave.capacidadPasajeros);
console.log("nave Rick", nave);

console.log("Actualizar la propiedad de energía de la nave");
nave.energia = 80;
console.log("Nivel de energía actualizado:" + nave.energia + "%");
nave["averiada"] = true;
console.log("Nuevo estado de la nave: " + (nave.averiada ? "Averiada" : "Operativa"));
console.log("nave Rick", nave);

console.log("Eliminar una propiedad de la nave de Rick");
delete nave.capacidadPasajeros;
console.log("Propiedad 'capacidadPsajeros' eliminada");
console.log("nave Rick", nave);

console.log("Recorrer las propiedades de la nave de Rick");
for (let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);
}


let unidades = {
    cristales: 50,
    combustible: 100,
    energia: 100,
    misiles: 10
}
console.log("Unidades del laboratorio de Rick:");
for (let unidad in unidades){
    console.log(unidad + ": " + unidades[unidad]);
}
let unidadesTotales = unidades.cristales + unidades.combustible + unidades.energia + unidades.misiles;
console.log("Total de unidades del laboratorio de Rick: " + unidadesTotales);