// Desafio

// Criar um tipo de objeto chamado convidados que possa conter as propriedades e métodos inerentes a um
// convidado.
var convidados = {
    nome: "Getúlio",
    idade: 50,
    vip: true,
    registro: "12345G",
    checkIn: function(data) {
        console.log("Convidado VIP entrou em: " + data);
    },
    checkOut: function(data) {
        console.log("Convidado VIP saiu em: " + data);
    }
};
convidados.checkIn("26/10/2025");

// Corrigido código sugerido pelo Professor Fontoura
