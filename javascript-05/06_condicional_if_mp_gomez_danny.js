console.log("Condicionales If");
let vacantesDisponibles = 3;
if (vacantesDisponibles > 0) {
    console.log("Recursos Humanos puede recibir postulaciones");
}

console.log("Condicionales If-Else: Dos caminos");
let documentosEntregados = 4;
if (documentosEntregados >= 4) {
    console.log("El expediente del colaborador esta completo");
} else {
    console.log("Faltan documentos para completar el expediente");
}

console.log("Condicionales If-Else If: Varios caminos");
let evaluacion = 85;
if (evaluacion >= 90) {
    console.log("Desempeno sobresaliente");
} else if (evaluacion >= 75) {
    console.log("Desempeno satisfactorio");
} else if (evaluacion >= 60) {
    console.log("Necesita un plan de mejora");
} else {
    console.log("Requiere seguimiento de Recursos Humanos");
}

console.log("Condicionales If Anidados");
let entrevistaAprobada = true;
let referenciasVerificadas = true;
if (entrevistaAprobada) {
    if (referenciasVerificadas) {
        console.log("La postulacion puede avanzar a la etapa de contratacion");
    } else {
        console.log("Se deben verificar las referencias antes de contratar");
    }
}

console.log("Condicionales If con Operadores Logicos");
let cursoSeguridadCompletado = true;
let colaboradorActivo = true;
if (cursoSeguridadCompletado && colaboradorActivo) {
    console.log("El colaborador cumple los requisitos de capacitacion");
} else {
    console.log("El colaborador debe completar los requisitos de capacitacion");
}

console.log("Control de contratacion");
let experienciaLaboral = 4;
let entrevistaConcluida = true;
let documentosVerificados = true;
let vacanteAbierta = true;

if (experienciaLaboral >= 2 && entrevistaConcluida && documentosVerificados && vacanteAbierta) {
    console.log("Postulacion aprobada para contratacion");
} else {
    if (experienciaLaboral < 2) {
        console.log("Se requiere al menos dos anios de experiencia");
    }
    if (!entrevistaConcluida) {
        console.log("La entrevista esta pendiente");
    }
    if (!documentosVerificados) {
        console.log("Los documentos aun no han sido verificados");
    }
    if (!vacanteAbierta) {
        console.log("La vacante ya no esta disponible");
    }
}

console.log("Evaluacion de desempeno y plan de reconocimiento");
let metaCumplida = 92;
let ausencias = 1;
let capacitacionPendiente = false;
let reconocimiento = 0;
let diasLaborables = 100;
let diasAsistidos = diasLaborables - ausencias;
let porcentajeAsistencia = (diasAsistidos / diasLaborables) * 100;

console.log("Resultados de la evaluacion");
if (metaCumplida >= 90) {
    console.log("Cumplio mas del 90% de sus metas");
    reconocimiento += 10;
} else if (metaCumplida >= 75) {
    console.log("Cumplio mas del 75% de sus metas");
    reconocimiento += 5;
} else if (metaCumplida >= 50) {
    console.log("Necesita apoyo para alcanzar sus metas");
    reconocimiento += 2;
} else {
    console.log("Se recomienda elaborar un plan de mejora");
}

console.log("Porcentaje de asistencia:", porcentajeAsistencia.toFixed(2) + "%");
if (ausencias > 5) {
    console.log("Se requiere revisar las ausencias con el colaborador");
    reconocimiento -= 5;
}
if (capacitacionPendiente) {
    console.log("El colaborador tiene capacitaciones pendientes");
    reconocimiento -= 2;
}
console.log("Puntaje de reconocimiento:", reconocimiento);
