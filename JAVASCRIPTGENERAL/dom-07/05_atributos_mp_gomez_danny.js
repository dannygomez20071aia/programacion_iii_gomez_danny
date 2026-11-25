const colaborador = document.getElementById("colaborador");
const cambiar = document.getElementById("cambiar");
const verArea = document.getElementById("verArea");
const area = document.getElementById("area");

cambiar.addEventListener("click", function() {
    if (colaborador.getAttribute("title") === "Ana") {
        colaborador.setAttribute("src", "doctor_ortiz.webp");
        colaborador.setAttribute("alt", "Carlos Ortiz, colaborador");
        colaborador.setAttribute("title", "Carlos");
        colaborador.dataset.area = "Capacitacion";
    } else {
        colaborador.setAttribute("src", "doctora_cevallos.jpe");
        colaborador.setAttribute("alt", "Ana Cevallos, colaboradora");
        colaborador.setAttribute("title", "Ana");
        colaborador.dataset.area = "Bienestar";
    }
});

verArea.addEventListener("click", function() {
    area.textContent = "Area: " + colaborador.dataset.area;
});

const estado = document.getElementById("estado");
const actualizarEstado = document.getElementById("actualizarEstado");
actualizarEstado.addEventListener("click", function() {
    const capacitacionCompleta = estado.dataset.completa === "true";
    if (capacitacionCompleta) {
        estado.style.backgroundColor = "#f3d9d9";
        estado.style.color = "#7a1f1f";
        estado.textContent = "Capacitacion pendiente";
        estado.dataset.completa = "false";
    } else {
        estado.style.backgroundColor = "#176b42";
        estado.style.color = "white";
        estado.textContent = "Capacitacion completada";
        estado.dataset.completa = "true";
    }
    estado.style.padding = "12px";
});
