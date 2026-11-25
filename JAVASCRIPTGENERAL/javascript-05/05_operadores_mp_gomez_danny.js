console.log("Operadores Aritmeticos");
let salarioMensual = 1200;
let bono = 150;
console.log("Suma:", salarioMensual + bono);
console.log("Resta:", salarioMensual - bono);
console.log("Multiplicacion:", salarioMensual * 2);
console.log("Division:", salarioMensual / 2);
console.log("Modulo:", salarioMensual % 500);

console.log("Operadores de Comparacion");
console.log("El salario es igual al bono:", salarioMensual == bono);
console.log("El salario es diferente al bono:", salarioMensual != bono);
console.log("El salario es mayor que el bono:", salarioMensual > bono);
console.log("El salario es menor que el bono:", salarioMensual < bono);
console.log("El salario es mayor o igual al bono:", salarioMensual >= bono);
console.log("El salario es menor o igual al bono:", salarioMensual <= bono);

console.log("Operadores Logicos");
let cursoCompletado = true;
let colaboradorActivo = false;
console.log("Curso completado AND colaborador activo:", cursoCompletado && colaboradorActivo);
console.log("Curso completado OR colaborador activo:", cursoCompletado || colaboradorActivo);
console.log("NOT curso completado:", !cursoCompletado);

console.log("Operadores de Asignacion");
let presupuestoCapacitacion = 1000;
console.log("Presupuesto inicial:", presupuestoCapacitacion);
presupuestoCapacitacion += 250;
console.log("Presupuesto despues de += 250:", presupuestoCapacitacion);
presupuestoCapacitacion -= 100;
console.log("Presupuesto despues de -= 100:", presupuestoCapacitacion);
presupuestoCapacitacion *= 2;
console.log("Presupuesto despues de *= 2:", presupuestoCapacitacion);
presupuestoCapacitacion /= 2;
console.log("Presupuesto despues de /= 2:", presupuestoCapacitacion);

console.log("Operadores de Incremento y Decremento");
let colaboradoresContratados = 10;
console.log("Valor inicial de colaboradores:", colaboradoresContratados);
colaboradoresContratados++;
console.log("Colaboradores despues de ++:", colaboradoresContratados);
colaboradoresContratados--;
console.log("Colaboradores despues de --:", colaboradoresContratados);

console.log("Operadores de Concatenacion");
let nombre = "Ana";
let apellido = "Torres";
console.log("Nombre completo:", nombre + " " + apellido);
let nombreCompleto = `${nombre} ${apellido}`;
console.log("Nombre completo con template literals:", nombreCompleto);

console.log("Operadores de Comparacion Estricta");
let diasVacaciones = 10;
let diasVacacionesTexto = "10";
console.log("Dias iguales:", diasVacaciones == diasVacacionesTexto);
console.log("Dias estrictamente iguales:", diasVacaciones === diasVacacionesTexto);
console.log("Dias diferentes:", diasVacaciones != diasVacacionesTexto);
console.log("Dias estrictamente diferentes:", diasVacaciones !== diasVacacionesTexto);

console.log("Operadores Ternarios");
let asistencia = 95;
let mensaje = asistencia >= 90 ? "Cumple la meta de asistencia" : "Debe mejorar su asistencia";
console.log(mensaje);

console.log("Calculo de bono por antiguedad");
for (let anios = 1; anios <= 10; anios++) {
    console.log(`${anios} anios: bono de $${anios * 50}`);
}

console.log("Distribucion del presupuesto de capacitacion");
for (let colaboradores = 1; colaboradores <= 5; colaboradores++) {
    console.log(`Presupuesto para ${colaboradores} colaboradores: $${(presupuestoCapacitacion / colaboradores).toFixed(2)}`);
}
