let cristales =[30,50,70,40];
let posicion = 2;
let nuevaEnergia = 100;
for (let i=0; i<cristales.length; i++){
    console.log("Posicion", i);
    console.log("Cristal: ", cristales[i])
    if(posicion>=0 && posicion<cristales.length){
        cristales[posicion] = nuevaEnergia
    }else{
        console.log("Posicion no vàlida");
    }
}
console.log(cristales);

let personajes = [
    {id: 1,nombre: "Rick", energia:99, edad:80},
    {id: 1,nombre: "mOrty", energia:80, edad:14},
    {id: 1,nombre: "Danny", energia:100, edad:19},
]
for (let personaje of personajes){
    console.log("ID: ", personaje.id);
    console.log("Nombre: ", personaje.nombre);
    console.log("Energìa: ", personaje["energia"]);
    console.log("Edad; ", personaje["edad"]);
}