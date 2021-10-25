"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
var direcao_1 = require("./direcao");
var motor_1 = require("./motor");
var Veiculo = /** @class */ (function () {
    function Veiculo() {
    }
    // public constructor(){
    //     this._motor = new Motor();
    //     this._direcao = new Direcao();
    // }
    Veiculo.prototype.ligar = function () {
        this._motor = new motor_1.Motor();
        this._direcao = new direcao_1.Direcao();
    };
    Object.defineProperty(Veiculo.prototype, "motor", {
        //Getters
        get: function () {
            return this._motor;
        },
        //Setters
        set: function (motor) {
            this._motor = motor;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Veiculo.prototype, "direcao", {
        get: function () {
            return this._direcao;
        },
        set: function (direcao) {
            this._direcao = direcao;
        },
        enumerable: false,
        configurable: true
    });
    return Veiculo;
}());
exports.Veiculo = Veiculo;
