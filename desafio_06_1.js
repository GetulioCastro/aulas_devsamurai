// Utilizando o for crie um programa que calcule a função log Math.log(x) para cada valor do contador.
// Este programa deve solicitar os valores iniciais, finais e de incremento. E também escrever na tela o
// resultado.

var vi = Number(prompt('Digite um valor inicial: '));
var vf = Number(prompt('Digite um valor final: '));
var inc = Number(prompt('Digite um incremento: '));

var res = 0;

for (x = vi; x <= vf; x += inc) {
    res = Math.log(x);
    console.log(res);
}