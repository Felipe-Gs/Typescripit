"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(modelo, cor, placa, portas) {
        this.modelo = "Nao consta";
        this._cor = "Nao cosnta";
        this.placaDoCarro = "Nao consta";
        this.numeroDePortas = 2;
        this.modelo = modelo;
        this._cor = cor;
        (placa !== undefined ? this.placaDoCarro = placa : this.placaDoCarro = "Carro sem placa!");
        (portas !== undefined ? this.numeroDePortas = portas : this.numeroDePortas = 4);
    }
    Carro.prototype.getCor = function () {
        return this._cor;
    };
    Carro.prototype.setCor = function (cor) {
        this._cor = cor;
    };
    return Carro;
}());
exports.Carro = Carro;
