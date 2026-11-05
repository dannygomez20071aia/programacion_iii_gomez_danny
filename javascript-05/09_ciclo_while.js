console.log("abriendo portal de la nave...");
let portal=1;
while(portal<=5){
    console.log("Abriendo Portal:" + portal);
    portal++;
}
console.log("Todos los Portales han sido abiertos");

console.log("Cuenta regresiva despegue de la nave Morty");
let i=10;
while(i>=0){
    console.log("Faltan :" + i+ " segundos para el despegue");
    i--;
}

console.log("Recargar la pistola de portales de Rick");
let baterias = 50;
let energia = baterias;
let recarga = 10;
let totalRecargas = 0;
while(energia < 100){
    energia += recarga;
    totalRecargas++;
    console.log("Recargando la pistola de portales de Rick: " + energia + "%");
}

console.log("Pistola de portales completamente recargada despues de " + totalRecargas + " recargas");

