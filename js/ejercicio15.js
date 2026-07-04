var arreglo = [];
var aux = 0;
function Anadir() {
    if (document.getElementById("nombre").value === "" || document.getElementById("calificacion").value === "") {
        alert("No puede dejar campos vacios");
        return;
    }
    const estudiante = {
        nombre: document.getElementById("nombre").value,
        calificacion: parseInt(document.getElementById("calificacion").value)
    }
    localStorage.setItem(estudiante.nombre, estudiante.calificacion);
    arreglo.push(estudiante);
    actualizarTabla();
}

function Calcular() {
    arreglo.sort(function (a, b) {
        return a.calificacion - b.calificacion
    })
    document.getElementById("mayor").value = arreglo[arreglo.length - 1].nombre + " tiene la mayor calificacion con: " + arreglo[arreglo.length - 1].calificacion;
    document.getElementById("menor").value = arreglo[0].nombre + " tiene la menor calificacion con: " + arreglo[0].calificacion;
    var suma = arreglo.map(estudiante => estudiante.calificacion).reduce((a, b) => a + b, 0);
    document.getElementById("promedio").value = "El promedio es: " + suma / arreglo.length;
}

function actualizarTabla() {
    const tbody = document.querySelector("#tabla tbody");
    tbody.innerHTML = "";
    arreglo.forEach(estudiante => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = estudiante.nombre;
        row.insertCell(1).textContent = estudiante.calificacion;
    });
}