// Desafio
// No objeto convidado (criado na aula anterior) crie 2 métodos:
// 1. registroEntrada (data e hora do computador)
// 2. registroSaida (data e hora do computador)
// Com os 2 métodos criados, crie uma propriedade chamada tempoPermanencia que será calculada
// automaticamente ao executar o método registroSaida.
// O tempoPermanencia deve estar em minutos.
// Dica: utilize a biblioteca nativa Date do JavaScript para isso.
var aluno = {
    nome: "Getulio",
    matriculado: true,
    entrada: false,
    saida: false,
    tempoPermanencia: false,
    registroEntrada: function(){
        this.entrada = new Date();
    },
    registroSaida: function(){
        this.saida = new Date();
        this.tempoPermanencia = (this.saida - this.entrada) / (1000 * 60);
    },
    
}
aluno.registroEntrada();
aluno.registroSaida();
aluno.tempoPermanencia;

// Solução não esperada, pois, a função "DATE" do javascript entrega outro formato de data/hora 