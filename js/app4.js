"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var terrestre_1 = require("./terrestre");
var terreste = new terrestre_1.Terrestre();
terreste.capacidade = 10;
console.log(terreste.capacidade);
// let transporte = new Transporte();
// transporte.capacidade
terreste.numRodas = 4;
terreste.exibirInformações();
