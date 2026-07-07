const sumar = (a, b) => a + b;
const restar = (a, b) => a - b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => {
    if (b === 0) {
        return "Error";
    }
    return a / b;
};

function calcularOperacion(operacion) {
    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    let resultado = document.getElementById("resultado");

    if (numero1 === "" || numero2 === "" || isNaN(numero1) || isNaN(numero2)) {
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ingrese números válidos."
        });
        return;
    }

    let n1 = parseFloat(numero1);
    let n2 = parseFloat(numero2);

    switch (operacion) {
        case "suma":
            resultado.value = sumar(n1, n2);
            break;

        case "resta":
            resultado.value = restar(n1, n2);
            break;

        case "multiplicacion":
            resultado.value = multiplicar(n1, n2);
            break;

        case "division":

            if (n2 === 0) {
                Swal.fire({
                    icon: "error",
                    title: "Error",
                    text: "No se puede dividir entre cero."
                });
                resultado.value = "";
            } else {
                resultado.value = dividir(n1, n2).toFixed(2);
            }
            break;
    }
}