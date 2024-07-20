const Conta = require("./conta");

class ContaCorrente extends Conta {
  constructor(titular, saldo, juros) {
    super(titular, saldo);
    this.juros = juros;
  }

  aplicarJuros() {
    this.saldo += this.saldo * this.juros;
    console.log(
      `Juros de R$${this.juros} aplicados. Saldo atual: R$${this.saldo}`
    );
  }
}

module.exports = ContaCorrente;
