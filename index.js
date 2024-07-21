const Conta = require("./classes/conta");
const ContaCorrente = require("./classes/conta-corrente");
const ContaPoupanca = require("./classes/conta-poupanca");
const prompt = require("prompt-sync")({ sigint: true });

// Array para armazenar todas as contas
const contas = [];

/* Função que cria cada conta, e é a "tela inicial" do projeto */
function criarConta() {
  // Cria conta corrente ou conta poupança e posteriormente cria o nome do titular
  const tipoConta = prompt(
    "Qual tipo de conta deseja criar? (corrente/poupanca): "
  ).toLowerCase();
  const titular = prompt("Digite o nome do titular: ");

  // Variável que irá armazenar o objeto da conta criada: tanto uma conta corrente quanto uma conta poupança, dependendo da escolha do usuário
  let contaUsuário;

  // Cria a funcionalidade de "juros" ou "poupança" dependendo do tipo de conta selecionada anteriormente
  if (tipoConta === "corrente") {
    const juros = parseFloat(prompt("Digite a taxa de juros: "));
    contaUsuário = new ContaCorrente(titular, 0, juros);
  } else if (tipoConta === "poupanca") {
    const rendimento = parseFloat(prompt("Digite a taxa de rendimento: "));
    contaUsuário = new ContaPoupanca(titular, 0, rendimento);
  } else {
    // Se os dados forem inválidos, chama a função para uma nova tentativa para criar conta
    console.log("Tipo de conta inválido.");

    // Se o retorno da função "confirmarNovaTentativa" for true, então a função "criarConta" é chamada
    if (confirmarNovaTentativa()) {
      return criarConta();
    }
  }

  /* Função que oferece nova tentativa para criar conta */
  function confirmarNovaTentativa() {
    let resposta;
    do {
      resposta = prompt("Deseja tentar novamente? (s/n): ");
    } while (resposta !== "s" && resposta !== "n");

    return resposta === "s";
  }

  contas.push(contaUsuário);
  console.log(
    `\nConta do tipo "${tipoConta}" e titular "${titular}" criada com sucesso!\n`
  );

  const novaConta = prompt(`Deseja criar outra conta? (s/n): `).toLowerCase();
  if (novaConta === "s") {
    criarConta();
  } else {
    operacoesConta();
  }
}

/* Função que mostra todas as contas para o usuário selecionar qual deseja operar */
function selecionarConta() {
  if (contas.length === 0) {
    console.log("Nenhuma conta disponível.");
    return null;
  }

  if (contas.length > 1) {
    console.log("\nContas disponíveis: ");
  } else {
    console.log(`\nConta disponível: `);
  }

  contas.forEach((conta, index) =>
    console.log(`${index + 1}. ${conta.titular}`)
  );

  const indiceConta = parseInt(prompt("Digite o número da conta: ")) - 1;

  if (indiceConta >= 0 && indiceConta < contas.length) {
    return contas[indiceConta];
  } else {
    console.log("Conta inválida.");
    return null;
  }
}

/* Função para manipular a conta selecionada anteriormente oferecendo todas operações possíveis pro usuário */
function operacoesConta() {
  let operacao;

  do {
    console.log("\n--------------------------------------------------------");
    console.log("\nEscolha uma operação: \n");
    console.log("1. Depositar");
    console.log("2. Sacar");
    console.log("3. Aplicar rendimento em Conta Poupança");
    console.log("4. Aplicar juros em Conta Corrente");
    console.log("5. Ver Saldo");
    console.log("6. Sair");

    operacao = prompt("Digite o número da operação: ");

    switch (operacao) {
      case "1":
        const contaParaDeposito = selecionarConta();
        if (contaParaDeposito) {
          const valorDeposito = parseFloat(
            prompt("Digite o valor para depositar: ")
          );
          contaParaDeposito.depositar(valorDeposito);
        }
        break;
      case "2":
        const contaParaSaque = selecionarConta();
        if (contaParaSaque) {
          const valorSaque = parseFloat(prompt("Digite o valor para sacar: "));
          contaParaSaque.sacar(valorSaque);
        }
        break;
      case "3":
        const aplicarRendimentoContaPoupanca = selecionarConta();
        if (aplicarRendimentoContaPoupanca instanceof ContaPoupanca) {
          // Só aplica rendimento se a conta for do tipo Poupança
          const valorRendimento = parseFloat(
            prompt("Digite o valor para rendimento: ")
          );
          aplicarRendimentoContaPoupanca.aplicarRendimento(valorRendimento);
          console.log(
            `Rendimento de R$${valorRendimento} realizado com sucesso!`
          );
        } else {
          console.log(
            "\nATENÇÃO: Esta operação só pode ser realizada em 'contas poupança'."
          );
        }
        break;

      case "4":
        const aplicarJurosContaCorrente = selecionarConta();
        if (aplicarJurosContaCorrente instanceof ContaCorrente) {
          // Só aplica juros se a conta for do tipo Corrente
          const valorJuros = parseFloat(prompt("Digite o valor para juros: "));
          aplicarJurosContaCorrente.aplicarJuros(valorJuros);
          console.log(`Juros de R$${valorJuros} realizado com sucesso!`);
        } else {
          console.log(
            "\nATENÇÃO: Esta operação só pode ser realizada em 'contas correntes'."
          );
        }
        break;

      case "5":
        const contaParaSaldo = selecionarConta();
        if (contaParaSaldo) {
          contaParaSaldo.verSaldo();
        }
        break;
      case "6":
        console.log("Saindo...");
        break;

      default:
        console.log("Operação inválida.");
        break;
    }
  } while (operacao !== "6");

  console.log("\nTenha um ótimo dia!");
}

/* Iniciamos com a função para criar conta corrente ou conta poupança */
criarConta();
