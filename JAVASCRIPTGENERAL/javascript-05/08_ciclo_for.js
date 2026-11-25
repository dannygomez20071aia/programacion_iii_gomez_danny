console.log("Ciclo For");
for(let i=1;i<=5;i++){
    console.log("Iteracion:" + i);
}

console.log("Cuenta regresiva despegue de la mave Morty");
for(let i=10;i>=0;i--){
    console.log("Faltan :" + i+ " segundos para el despegue");
}

console.log("Cuenta regresiva despegue la nave Morty con mensajefinal");
for(let i=10;i>=0;i--){
    if(i===0){
        console.log("Despegue en curso");
    }else{
        console.log("Faltan :" + i+ " segundos para el despegue");
    }
}

console.log("Nivel de energia de Rick");
let energia = 50;
for(let i=0;i<=100;i+= 10){
    if(energia >= i){
        console.log("Nivel de energia de Rick: " + i + "%");
    }
}

const consumoPorViaje = 100;
let totalConsumido = 0;
for (let viaje = 1; viaje <=5; viaje++){
    totalConsumido += consumoPorViaje;
    console.log("Viaje" + viaje);
    console.log ("Total consumido hasta ahora:" +totalConsumido+ "Unidades de combustible");
}
console.log("Total consumido:" + totalConsumido + "Unidades ");

console.log("Promedio de los Cristales");
let totalCristales = 0;
let dias = 7;
for (let dia = 1; dia <= dias; dia++){
    let cristales =  dia *5+ 5;
    totalCristales += cristales;
    console.log("Dia " + dia + ": Cristales recolectados: " + cristales);
}
console.log("Total de Cristales recolectados: " + totalCristales);
console.log("Promedio de Cristales recolectados por dia: " + (totalCristales/dias).toFixed(2));

console.log("Recoleccion de Cristales de Morty");
let cristales =[30,60,,45,80,70,90,55];
let total = 0;
let viajesExitosos = 0;
for (let i=0; i<cristales.length; i++){
    total += cristales[i];
    console.log("Viaje " + (i+1) + ": Cristales recolectados: " + cristales[i]);
    if(cristales[i] >= 50){
        viajesExitosos++;
    }else{
        console.log("Viaje " + (i+1) + " no fue exitoso");
    }
}
console.log("Total de Cristales recolectados: " + total);
console.log("Viajes exitosos: " + viajesExitosos);

console.log("Recorrer Personajes con for .... of");
const personajes = ["Rick", "Morty", "Summer", "Beth", "Jerry"];
for (const personaje of personajes){
    console.log("Personaje: " + personaje);
}

let nave = {
    nombre: "Nave de Rick",
    combustible: 1000,
    velocidad: 500,
    tripulantes: ["Rick", "Morty", "Summer"]
};
console.log("Recorrer propiedades de la nave con for ... in");
for (let propiedad in nave){
    console.log(propiedad + ": " + nave[propiedad]);
    if(propiedad === "tripulantes"){
        console.log("Tripulantes de la nave:");
        for (let tripulante of nave[propiedad]){
            console.log("- " + tripulante);
        }
   }
}

let misiones = [
    { nombre: "Mision 1",cristales:90, meta: 100, personaje:"rick"},
    { nombre: "Mision 2",cristales:80, meta: 100, personaje:"morty"},
    { nombre: "Mision 3",cristales:95, meta: 100, personaje:"summer"}
];

let exitosas = 0;
for(let mision of misiones){
    let porcentaje = (mision.cristales / mision.meta) * 100;
    console.log(mision.nombre + "completada por" + mision.personaje + "con un" + porcentaje.toFixed(2) + "% de cristales recolectados");
    if(porcentaje >= 90){
        exitosas++;
    }else{
        console.log(mision.nombre + " no fue exitosa");
    }
}
console.log("Total de misiones exitosas: " + exitosas);