// No nosso desafio da calculadora, criar um IF para verificar se o valor é maior que 10, caso seja, informar
// uma mensagem escolhida por você.

var x = prompt('Digite um número:');
var y = prompt('Digite outro número:');
var resultado = Number(x) + Number(y);
alert('O valor da soma é: ' + resultado)
if (resultado == 10) {
    alert('Acertô Mizeravi :-P');
}