"use strict";
var Funcionario = /** @class */ (function () {
    function Funcionario(nome, endereco, telefone, cpf) {
        this._nome = "Nao consta";
        this.endereco = "Nao consta";
        this.telefone = 2;
        this.cpf = 4;
        this._nome = nome;
        this.endereco = endereco;
        (telefone !== undefined ? this.telefone = telefone : this.telefone = 3);
        (cpf !== undefined ? this.cpf = cpf : this.cpf = 4);
    }
    Funcionario.prototype.getCor = function () {
        return this._nome;
    };
    Funcionario.prototype.setCor = function (_nome) {
        this._nome = _nome;
    };
    return Funcionario;
}());
var c;
c = new Funcionario("Felipe", "Alto da irmandade");
console.log("Seu nome \u00E9 " + c._nome + " seu endere\u00E7o \u00E9 " + c.endereco + ",seu telefone \u00E9 " + c.telefone + " e seu cpf" + c.cpf + " ");
