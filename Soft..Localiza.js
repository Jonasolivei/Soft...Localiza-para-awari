/*LOCALIZA*/

/*Classe Carro: responsável por armazenar todas as informações dos carros disponíveis para locação.*/
class Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao) {
      this.placa = placa;
      this.ano = ano;
      this.cor = cor;
      this.modelo = modelo;
      this.quilometragem = quilometragem;
      this.valorDiario = valorDiario;
      this.observacao = observacao;
    }
  }

  /*Classe Esportivo: herda as propriedades da classe Carro e adiciona novas informações específicas de carros esportivos.*/
  class Esportivo extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, tempo0a100, melhorias) {
      super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
      this.tempo0a100 = tempo0a100;
      this.melhorias = melhorias;
    }
  }

  /*Classe Utilitario: herda as propriedades da classe Carro e adiciona novas informações específicas de carros utilitários.*/
  class Utilitario extends Carro {
    constructor(placa, ano, cor, modelo, quilometragem, valorDiario, observacao, qtdPassageiros, tamanhoBagageiro, kmPorLitro) {
      super(placa, ano, cor, modelo, quilometragem, valorDiario, observacao);
      this.qtdPassageiros = qtdPassageiros;
      this.tamanhoBagageiro = tamanhoBagageiro;
      this.kmPorLitro = kmPorLitro;
    }
  }

  /*Classe Cliente: responsável por armazenar todas as informações dos clientes cadastrados no sistema.*/
  class Cliente {
    constructor(nome, email, telefone, endereco) {
      this.nome = nome;
      this.email = email;
      this.telefone = telefone;
      this.endereco = endereco;
    }
  }

  /*Classe Reserva: responsável por armazenar todas as informações das reservas de carros realizadas pelos clientes.*/
  class Reserva {
    constructor(cliente, carro, codigo, status, dataInicio, dataFim) {
      this.cliente = cliente;
      this.carro = carro;
      this.codigo = codigo;
      this.status = status;
      this.dataInicio = dataInicio;
      this.dataFim = dataFim;
    }
  }
  /*Classe Promocao: responsável por armazenar as informações das promoções a serem enviadas aos clientes cadastrados no sistema.*/
  class Promocao {
    constructor(titulo, descricao, dataValidade) {
      this.titulo = titulo;
      this.descricao = descricao;
      this.dataValidade = dataValidade;
    }
  }

  /*Com essas classes, podemos criar um sistema completo de gerenciamento de locação de carros, cadastro de clientes e envio de promoções. 
  Por exemplo, podemos criar um objeto Carro e uma reserva associada a um cliente da seguinte forma:*/
  const carro1 = new Esportivo('ABC1234', 2020, 'vermelho', 'Ferrari', 5000, 500, 'Carro esportivo muito rápido', )
  
  /*Classe Funcionario: responsável por armazenar todas as informações dos funcionários da Localiza.*/
class Funcionario {
    constructor(nome, cpf, idade, endereco, dataContratacao, salario, qtdAlugueis, status, telefone) {
      this.nome = nome;
      this.cpf = cpf;
      this.idade = idade;
      this.endereco = endereco;
      this.dataContratacao = dataContratacao;
      this.salario = salario;
      this.qtdAlugueis = qtdAlugueis;
      this.status = status;
      this.telefone = telefone;
    }
  }
/*Classe Cliente:informações adicionais, como data de nascimento, número da carteira de motorista, foto 
da carteira de motorista e ano de vencimento da carteira de motorista.*/
  class Cliente {
    constructor(nome, cpf, idade, dataNascimento, numCNH, fotoCNH, vencimentoCNH, endereco, telefone, email) {
      this.nome = nome;
      this.cpf = cpf;
      this.idade = idade;
      this.dataNascimento = dataNascimento;
      this.numCNH = numCNH;
      this.fotoCNH = fotoCNH;
      this.vencimentoCNH = vencimentoCNH;
      this.endereco = endereco;
      this.telefone = telefone;
      this.email = email;
    }
  }

  /*Com essas classes, podemos criar objetos Funcionario e Cliente da seguinte forma:*/
  const funcionario1 = new Funcionario('João Silva', '123.456.789-00', 25, 'Rua A, 123', '01/01/2020', 2000, 10, true, '11 99999-9999');

  const cliente1 = new Cliente('Maria Santos', '987.654.321-00', 35, '01/01/1988', '123456789', 'foto.jpg', '01/01/2023', 'Rua B, 456', '11 99999-8888', 'maria.santos@email.com');
  
  /*Dessa forma, podemos gerenciar os dados dos funcionários e clientes da Localiza junto com
   as informações de carros, reservas e promoções.*/
    
/*Vamos hospedar em um banco de dados relacional, o mysql, no caso criando conexão com o banco de dados*/
  
  const mysql = require('mysql');

  const connection = mysql.createConnection({
  host: 'localhost',
  user: 'usuario',
  password: 'senha',
  database: 'localiza_db'
});

/* Conectando ao banco de dados*/
connection.connect();

/* Criando um novo funcionário*/
const novoFuncionario = new Funcionario('João Silva', '123.456.789-00', 25, 'Rua A, 123', '01/01/2020', 2000, 10, true, '11 99999-9999');

/* Inserindo o novo funcionário na tabela de funcionários*/
const sql = `INSERT INTO funcionarios (nome, cpf, idade, endereco, data_contratacao, salario, qtd_alugueis, status, telefone) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
const values = [novoFuncionario.nome, novoFuncionario.cpf, novoFuncionario.idade, novoFuncionario.endereco, novoFuncionario.dataContratacao, novoFuncionario.salario, novoFuncionario.qtdAlugueis, novoFuncionario.status, novoFuncionario.telefone];
connection.query(sql, values, (error, results, fields) => {
  if (error) throw error;
  console.log('Novo funcionário inserido com sucesso!');
});

/* Encerrando conexão com o banco de dados*/
connection.end();