let personajes = ["Goku", "Vegeta", "Trunks", "Gohan", "Piccolo","Danny","Gomez"]
console.log("Elemento 0", personajes[0]);
console.log("Elemento 2", personajes[2]); 
console.log("Elemento 1", personajes [1]);
console.log("Elemento 6", personajes[6]);
console.log("Tamaño del arreglo", personajes.length);

console.log("personajes:", personajes);
console.log("Incluir elementos de un arreglo con PUSH");
personajes.unshift ("Gomez");
personajes.push ("Alexander");
console.log ("Modificar elementos a un arreglo");
personajes[0]="Puedmag";
console.log("personajes:", personajes);

console.log("Eliminar un elemnto de un arreglo ");

console.log("personajes:", personajes);
personajes.pop();
console.log("personajes:", personajes);
personajes.shift();
console.log("personajes:", personajes);
personajes.splice(1,1);
console.log("personajes:", personajes);



