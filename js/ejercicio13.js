function calcular() {
    var edad = document.getElementById("edad").value;
    if (document.getElementById("edad").value < 0) {
        alert("Por favor, ingrese un valor positivo.");
        return;
    }
    else if (edad >= 18) {
        document.getElementById("resultado").value = "Puedes votar.";
    }
    else {
        document.getElementById("resultado").value = "No puedes votar.";
    }
}