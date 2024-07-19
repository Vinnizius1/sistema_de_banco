const Conta = require("./classes/conta");
const prompt = require("prompt-sync")({ sigint: true });

const teste = new Conta("Jão", 20);

teste.depositar("x");

// teste.verSaldo();
