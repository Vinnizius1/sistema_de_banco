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
    if (valor > 0 && isNaN(valor)) this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado!
O seu novo saldo é de R$${this.saldo}.`);
  }

  sacar(valor) {
    if (valor > 0 && this.saldo > valor) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado!
\nNovo saldo: R$${this.saldo}`);
    } else {
      console.log(`Saldo insuficiente para esse saque ou caractere inválido.`);
      const continuar = prompt(
        `Deseja tentar sacar novamente? (s/n): `
      ).toLowerCase();
      if (continuar === "s") {
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
