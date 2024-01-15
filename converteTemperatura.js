function CelsiusParaFahrenheit(){
    var celcius = document.getElementById("temperaturaC").value;
    document.write((celcius*1.8) + 32 + "Fahrenheit");
}

function FahrenheitParaCelsius(){
    var fahrenheit = Number (document.getElementById("temperaturaF").value);
    document.write((fahrenheit-32)*(5/9) + "Celcius");

}