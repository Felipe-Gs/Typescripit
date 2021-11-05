"use strict";
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
var Conta = /** @class */ (function () {
    function Conta(titular, saldo, limite) {
        this.titular = titular;
        this.saldo = saldo;
        (limite !== undefined ? this.limite = limite : this.limite = 1900);
    }
    Object.defineProperty(Conta.prototype, "Titular", {
        // //Getters
        get: function () {
            return this.titular;
        },
        // //Setters
        set: function (Titular) {
            this.titular = Titular;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "Saldo", {
        get: function () {
            return this.saldo;
        },
        set: function (Saldo) {
            this.saldo = Saldo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "Limite", {
        get: function () {
            return this.limite;
        },
        set: function (Limite) {
            this.limite = Limite;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.getDepositar = function () {
        var deposito;
        return Number;
    };
    return Conta;
}());
var cadastro = /** @class */ (function (_super) {
    __extends(cadastro, _super);
    function cadastro(titular, saldo, limite, idade, senha) {
        var _this = _super.call(this, titular, saldo, limite) || this;
        _this.idade = idade;
        _this.senha = senha;
        return _this;
    }
    return cadastro;
}(Conta));
var RetirarDinheiro = /** @class */ (function (_super) {
    __extends(RetirarDinheiro, _super);
    function RetirarDinheiro(valorDaconta, valorDaRetirada) {
        var _this = _super.call(this, 'Felipe Gomes', 1900, 3000, 19, 1232) || this;
        _this.valorDaConta = valorDaconta;
        _this.valorDaRetirada = valorDaRetirada;
        return _this;
    }
    RetirarDinheiro.prototype.getRetirar = function () {
        if (this.valorDaConta < this.valorDaRetirada) {
            return 'Não foi possivel realizar o saque! saldo insuficiente';
        }
        return 'Retirada Realizada com sucesso!';
    };
    return RetirarDinheiro;
}(cadastro));
var retirar = new RetirarDinheiro(2000, 1000);
retirar.getRetirar();
console.log(retirar.getRetirar());
// let conta = new Conta('Felipe Gomes', 1900, 3000);
// let cadastrar = new cadastro('Felipe Gomes', 1999, 3000, 19, 123);
// conta.getSacar()
// console.log(conta.getSacar())
// cadastrar.getSacar()
// console.log(cadastrar.getSacar())
// console.log(cadastrar)
// console.log('---------------------------');
// console.log('|-----------BANCO-----------|');
// console.log('|   1--Sacar----------------|');
// console.log('|   2--Depositar------------|');
// console.log('|---------------------------|');
// let cont = new Conta('Felipe Gomes', 1000, 100);
// cont.getSacar()
// console.log(cont.getSacar())
// console.log(cont)
