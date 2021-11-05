"use strict";
//FELIPE GOMES DA SILVA --498842
//PROBLEMA: REALIZAR SAQUE E DEPOSITOS DE UMA CONTA NO BANCO
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferencias = exports.Conta2 = exports.Cadastro = void 0;
var Cadastro = /** @class */ (function () {
    function Cadastro(idade, senha) {
        (senha !== undefined ? this.senha = senha : this.senha = 1234);
        (idade !== undefined ? this.idade = idade : this.idade = 18);
    }
    return Cadastro;
}());
exports.Cadastro = Cadastro;
var Conta2 = /** @class */ (function (_super) {
    __extends(Conta2, _super);
    function Conta2(titular, saldo, idade, senha, limite) {
        var _this = _super.call(this, idade, senha) || this;
        (saldo !== undefined ? _this.saldo = saldo : _this.saldo = 0);
        (titular !== undefined ? _this.titular = titular : _this.titular = 'Nome ainda indefinido!');
        (limite !== undefined ? _this.limite = limite : _this.limite = 1900);
        return _this;
    }
    return Conta2;
}(Cadastro));
exports.Conta2 = Conta2;
var Transferencias = /** @class */ (function (_super) {
    __extends(Transferencias, _super);
    function Transferencias(titular, saldo, idade, senha, limite) {
        var _this = _super.call(this, titular, saldo, idade, senha) || this;
        (saldo !== undefined ? _this.saldo = saldo : _this.saldo = 0);
        (idade !== undefined ? _this.idade = idade : _this.idade = 18);
        (senha !== undefined ? _this.senha = senha : _this.senha = 1234);
        (limite !== undefined ? _this.limite = limite : _this.limite = 1900);
        return _this;
    }
    Transferencias.prototype.getRetirar2 = function (valor) {
        if (valor < this.saldo) {
            this.saldo = (this.saldo - valor);
            return "Saque realizado com sucesso, seu saldo atual \u00E9 de: " + this.saldo;
        }
        return 'Saque indisponivel! Saldo Insuficiente!';
    };
    Transferencias.prototype.getDepositar = function (valor) {
        if (valor >= 0) {
            this.saldo = (valor + this.saldo);
            return "Deposito Realizado com sucesso, seu saldo atual \u00E9 de: " + this.saldo;
        }
        return '';
    };
    return Transferencias;
}(Conta2));
exports.Transferencias = Transferencias;
//criar objeto
var usu = new Transferencias('Felipe', 2000);
//realizar retirada
console.log(usu.getRetirar2(500));
//realizar deposito
console.log(usu.getDepositar(200));
