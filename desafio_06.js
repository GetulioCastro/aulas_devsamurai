// No nosso exemplo da calculadora criar uma rotina que fique sempre perguntando os valores até que seja
// digitado a letra N em qualquer valor (indicando uma condição de parada).

while(true) {
    var x = prompt("Digite um número entre 0 e 10.");
    alert('Você digitou: ' + x)
    if (x == 5) {
        break;
    }
}

    // while(true) {
    //    var x = prompt("Digite o primeiro número ou N");
    //    var y = prompt("Digite o segundo número ou N");
    //    if (x == "N" || y == "N") {
    //    break;
    //    }
    //    var resultado = Number(x) + Number(y);
    //    alert("O resultado da soma é: " + resultado);
    // }

    // (solução proposta pelo Prof. Felipe Fontoura)