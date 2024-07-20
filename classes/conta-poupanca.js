const Conta = require("./conta");

class ContaPoupanca extends Conta {
  constructor(titular, saldo, rendimento) {
    super(titular, saldo);
    this.rendimento = rendimento;
  }

  aplicarRendimento() {
    const aumento = this.saldo * this.rendimento;
    this.saldo += aumento;
    console.log(
      `Rendimento de R$${aumento} aplicado! Novo saldo: R$${this.saldo}`
    );
  }
}

module.exports = ContaPoupanca;
