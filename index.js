const Conta = require("./classes/conta");
const ContaCorrente = require("./classes/conta-corrente");
const ContaPoupanca = require("./classes/conta-poupanca");
const prompt = require("prompt-sync")({ sigint: true });

/* const contas = []; // Usaremos um array para armazenar as contas

function criarConta() {
  const tipoConta = prompt(
    "Qual tipo de conta deseja criar? (corrente/poupanca): "
  ).toLowerCase();
  const titular = prompt("Digite o nome do titular: ");

  // novaConta armazenará cada nova conta que for criada
  let conta;

  if (tipoConta === "corrente") {
    const juros = parseFloat(prompt("Digite a taxa de juros: "));
    conta = new ContaCorrente(titular, 0, juros);
  } else if (tipoConta === "poupanca") {
    const rendimento = parseFloat(prompt("Digite a taxa de rendimento: "));
    conta = new ContaPoupanca(titular, 0, rendimento);
  } else {
    console.log("Tipo de conta inválido.");
    return;
  }

  contas.push(conta);
  console.log(contas);

  console.log(
    `\nConta do tipo ${tipoConta} e titular "${titular}" criada com sucesso!\n`
  );

  const novaConta = prompt(`Deseja criar outra conta? (s/n): `).toLowerCase();

  if (novaConta === "s") {
    criarConta(); // Chamada recursiva para criar outra conta
    console.log(contas);
  } else {
    // operacoesConta(contas);
    console.log("bye");
  }

  } */
operacoesConta();

function operacoesConta() {
  let operacao;

  do {
    console.log("--------------------------------------------------------\n");
    console.log("Escolha uma operação: ");
    console.log("1. Depositar");
    console.log("2. Sacar");
    console.log("3. Ver Saldo");
    console.log("5. Sair");

    operacao = prompt("Digite o número da operação: ");
  } while (operacao !== "5");
  console.log("\nTenha um ótimo dia!");
}

// criarConta();
