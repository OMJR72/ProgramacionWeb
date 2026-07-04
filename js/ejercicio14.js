function Calcular() {
    var arreglo = document.getElementById("numeros").value.split(",");
    var arregloNum = arreglo.map(Number);
    document.getElementById("mayor").value = Math.max(arregloNum);
    document.getElementById("menor").value = Math.min(arregloNum);
    var suma = arregloNum.reduce((a, b) => a + b, 0);
    document.getElementById("promedio").value = suma / arregloNum.length;
}