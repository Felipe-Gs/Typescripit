"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var conta_1 = require("./conta");
var cadastro_1 = require("./cadastro");
var cadastrar = new cadastro_1.Cadastro();
cadastrar.nome = 'Felipe Gomes da Silva';
cadastrar.idade = 19;
cadastrar.senha = 123;
var conta = new conta_1.Conta();
conta.limite = 3000;
conta.saldo = 1900;
conta.titular = 'Felipe Gomes da Silva';
var cont = new conta_1.Conta();
cont.getSacar();
console.log(cont.getSacar);
console.log(cadastrar);
console.log(conta);
