let departamento = 3;
switch (departamento) {
    case 1:
        console.log("El colaborador pertenece a Recursos Humanos");
        break;
    case 2:
        console.log("El colaborador pertenece a Finanzas");
        break;
    case 3:
        console.log("El colaborador pertenece a Tecnologia");
        break;
    default:
        console.log("Departamento no registrado");
}

let cargo = "Analista";
switch (cargo) {
    case "Analista":
        console.log("El analista apoya los procesos de seleccion y bienestar");
        break;
    case "Coordinador":
        console.log("El coordinador organiza las actividades del equipo");
        break;
    case "Gerente":
        console.log("El gerente dirige el area de Recursos Humanos");
        break;
    default:
        console.log("Cargo no registrado");
}

let nivelDesempeno = 82;
switch (true) {
    case nivelDesempeno >= 90:
        console.log("Desempeno sobresaliente");
        break;
    case nivelDesempeno >= 75:
        console.log("Desempeno satisfactorio");
        break;
    case nivelDesempeno >= 60:
        console.log("Desempeno en desarrollo");
        break;
    default:
        console.log("Se recomienda un plan de mejora");
}

console.log("Calculadora de nomina");
let salarioBase = 1200;
let valorAdicional = 150;
let operacion = "bonificacion";
switch (operacion) {
    case "bonificacion":
        console.log("Salario con bonificacion:", salarioBase + valorAdicional);
        break;
    case "descuento":
        console.log("Salario despues del descuento:", salarioBase - valorAdicional);
        break;
    case "duplicar":
        console.log("Salario duplicado:", salarioBase * 2);
        break;
    case "distribuir":
        if (valorAdicional !== 0) {
            console.log("Salario distribuido:", salarioBase / valorAdicional);
        } else {
            console.log("No se puede dividir para cero");
        }
        break;
    default:
        console.log("Operacion de nomina desconocida");
}
