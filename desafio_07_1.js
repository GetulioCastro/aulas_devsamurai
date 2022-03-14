// Desafio
// Como parte da nossa viagem matemática implemente a função fatorial (sem a chamada da biblioteca Math)
// com recursão.


var calcularFatorial = Number(prompt("Digite um número para calcular seu fatorial: "));

function fatorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * fatorial(n - 1);
}
fatorial(calcularFatorial);