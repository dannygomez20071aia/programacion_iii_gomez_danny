let colaboradores = ["Ana", "Luis", "Sofia", "Mateo", "Valeria", "Danny"];

console.log("Elemento 0:", colaboradores[0]);
console.log("Elemento 2:", colaboradores[2]);
console.log("Elemento 1:", colaboradores[1]);
console.log("Elemento 5:", colaboradores[5]);
console.log("Tamaño del arreglo:", colaboradores.length);

console.log("Colaboradores:", colaboradores);
console.log("Agregar colaboradores al arreglo");
colaboradores.unshift("Camila");
colaboradores.push("Andres");

console.log("Actualizar un elemento del arreglo");
colaboradores[0] = "Gabriela";
console.log("Colaboradores:", colaboradores);

console.log("Eliminar elementos del arreglo");
colaboradores.pop();
console.log("Despues de pop:", colaboradores);
colaboradores.shift();
console.log("Despues de shift:", colaboradores);
colaboradores.splice(1, 1);
console.log("Despues de splice:", colaboradores);
