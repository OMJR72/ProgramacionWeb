var arreglo = [];

function Añadir() {
    const estudiante = {
        nombre: document.getElementById("nombre").value,
        calificacion: parseInt(document.getElementById("calificacion").value)
    }
    localStorage.setItem(estudiante.nombre, estudiante.calificacion);
    arreglo.push(estudiante);
}

function Calcular() {
    var arreglo = document.getElementById("numeros").value.split(",");
        var arregloNum = arreglo.map(Number);
        document.getElementById("mayor").value = Math.max(...arregloNum);
        document.getElementById("menor").value = Math.min(...arregloNum);
        var suma = arregloNum.reduce((a, b) => a + b, 0);
        document.getElementById("promedio").value = suma / arregloNum.length;
}