"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var carro_1 = require("./carro");
var c;
c = new carro_1.Carro("Hilux", "Vermelho", "XXX-000", 4);
console.log("A cor do carro \u00E9 " + c._cor + " e o seu modelo \u00E9 " + c.modelo + ", sua placa \u00E9 " + c.placaDoCarro + " com " + c.numeroDePortas + " portas");
var c2 = new carro_1.Carro("Gol", "Amarelo", "YYY-000", 2);
console.log("A cor do carro \u00E9 " + c2._cor + " e o seu modelo \u00E9 " + c2.modelo + ", sua placa \u00E9 " + c2.placaDoCarro + " com " + c2.numeroDePortas + " portas");
