"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var humano_1 = require("./humano");
var c;
c = new humano_1.Funcionario("Felipe", "Alto da irmandade", 1111 - 22222, 4444 - 7777);
console.log("Seu nome \u00E9" + c._nome + " seu endere\u00E7o \u00E9 " + c.endereco + ",seu telefone \u00E9 " + c.telefone + " e seu cpf" + c.cpf + " ");
