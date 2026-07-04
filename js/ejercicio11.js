function convertir() {
    var kilometros = document.getElementById("Kilometros").value;
    if (kilometros < 0) {
        alert("Por favor, ingrese un valor positivo.");
        return;
    }
    else{
        var millas = kilometros * 0.621371;
        document.getElementById("resultado").value = "El resultado es: " + millas + " mi";
    }
}