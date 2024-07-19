const Conta = require("./classes/conta");
const prompt = require("prompt-sync")({ sigint: true });

const teste = new Conta("Jão", 20);

teste.sacar(10);

// teste.verSaldo();
