var number1 = document.getElementById('number1');
var number2 = document.getElementById('number2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(number1, number2) {
    return number1 + number2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+number1.value, +number2.value).toString();
});
