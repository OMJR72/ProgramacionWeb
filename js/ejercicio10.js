function calcular(){
    var celcius = document.getElementById("celcius").value;
    var farenheit = (celcius*(9/5))+32;

    document.getElementById("farenheit").innerHTML = "El resultado es: " + farenheit;
}