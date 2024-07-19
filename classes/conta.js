const prompt = require("prompt-sync")({ sigint: true });

/* Classe Base */
class Conta {
  // atributos
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }
  // ações
  depositar(valor) {
    if (valor > 0) {
      this.saldo += valor;
      console.log(`Depósito de R$${valor} realizado!\n
O seu novo saldo é de R$${this.saldo}.`);
    } else {
      const depositarNovamente = prompt(
        `Valor menor que 0 ou caractere inválido. Deseja tentar novamente? (s/n): `
      ).toLowerCase();
      if (depositarNovamente === "s") {
        valor = parseFloat(prompt(`Digite um novo valor maior que 0: `));

        this.depositar(valor); // chama recursivamente para tentar novamente
      } else {
        console.log("\nEncerrando.");
      }
    }
  }

  sacar(valor) {
    if (valor > 0 && this.saldo > valor) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado!
\nNovo saldo: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para esse saque ou caractere inválido.`);
      const sacarNovamente = prompt(
        `Deseja tentar sacar novamente? (s/n): `
      ).toLowerCase();
      if (sacarNovamente === "s") {
        valor = parseFloat(
          prompt(
            `Digite um novo valor menor que seu saldo atual de R$ ${this.saldo}: `
          )
        );
        this.sacar(valor); // chama recursivamente para tentar novamente
      } else {
        console.log("Encerrando.");
      }
    }
  }

  verSaldo() {
    console.log(`\nSaldo atual: R$${this.saldo}.`);
  }
}

module.exports = Conta;
