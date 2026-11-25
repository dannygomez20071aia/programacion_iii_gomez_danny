console.log("Rick y morty: Funciones en Javascript");
function abrirPortal(){
    console.log("Portal abierto. !Vamos a otra dimension!")
}
abrirPortal();


function pilotoNave(nombre){
    console.log("El piloto" + nombre +"está abordo de la nave");
}
pilotoNave("Rick");
pilotoNave("Morty");

function recargaPistola(energiaActual, recarga){
    let energiaTotal = energiaActual + recarga;
    if(energiaTotal>100){
        energiaTotal = 100;
    }
    console.log("Pistola de portales recargada. Nivel de energía:" + energiaTotal+"%");
    return energiaTotal;
}
let energiaPistola = 50;
energiaPistola = recargaPistola(energiaPistola, 30);
energiaPistola = recargaPistola(energiaPistola, 400); 

console.log("Calcular descuentos interdimensionales");
function calcularDescuento(precio, descuento){
    let precioFinal = precio - (precio * (descuento/100));
    return precioFinal;
}
let precioOriginal = 100;
let descuento = 20;
let precioConDescuento = calcularDescuento(precioOriginal, descuento);
console.log("Precio original:" + precioOriginal + "Precio con descuento:" + precioConDescuento);

function evaluarCombustibleExamen (combustibe, correctas, totalPreguntas){
    let porcentajeCorrectas = (correctas / totalPreguntas) * 100;
    if (combustible < 20 ){
        console.log("Advertencia: Combustible bajo. Nivel actual:" + combustible + "%");
    }
    if (porcentajeCorrectas >= 70){
        console.log("FElicidades! Has aporbado el examen con un:" + porcentajeCorrectas + "% de resupestas correctas");
    }
}



//EJERCICIO 1
let misiones = [5]
let cristalesRecolectados = 1;
function TotalCristalesRecolectados (misiones, cristalesRecolectados){
    if (misiones.length += 5){
        return cristalesRecolectados;
    }
}
console.log("Total de cristatles recolectados en la mision" + TotalCristalesRecolectados(misiones, cristalesRecolectados));


//EJERCICIO 2

let cristales =[50]
function mision (cristales){
    if (cristales >= 50){
        return "EXITOSA";
    } 
    else{
        return "NO EXITOSA";
    }
}

console.log("Mision de recoleccion de cristales: " + mision(cristales));
