// Desafio
// Criar um método dentro do sistema de controle de convidados para que possa clonar objetos aproveitando
// os dados de outro convidado.

var aluno = {id: 123, nome: "Getúlio Castro"};
var alunos = [aluno];
novoAluno = Object.create(aluno);
alunos.push(novoAluno);
console.log(alunos);