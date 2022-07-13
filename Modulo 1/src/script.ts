let number1 = document.getElementById('number1') as HTMLInputElement;
let number2 = document.getElementById('number2') as HTMLInputElement;

let botao = document.getElementById('calcular') as HTMLButtonElement;
let res = document.getElementById('resultado') as HTMLDivElement;

function calcular(number1: number, number2: number ) {
  return number1 + number2;
}

botao.addEventListener('click', function() {
  res.innerHTML = calcular(+number1.value, +number2.value).toString();
});