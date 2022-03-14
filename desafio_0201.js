// Desafio
// Com o conceito de array em mente, implemente na sua calculadora o cálculo de média aritmética

var numeros = [];

while(true){
    var num = prompt("Digite um número qualquer ou S(s) para sair.");
    if(num == 'S' || num == 's'){
        break;
    }else {
        numeros.push(Number(num));
    }
}

var soma = 0;
for (i = 0; i < numeros.length; i++){
    soma += numeros[i];
}

var resultados = soma / numeros.length;
console.log(resultados);