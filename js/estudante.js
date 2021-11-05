"use strict";
var Estudante = /** @class */ (function () {
    function Estudante(id, _credito, nome) {
        this.id = id;
        this._credito = _credito;
        (nome !== undefined ? this.nome = nome : this.nome = "Felipe Gomes");
    }
    Estudante.prototype.get_credito = function () {
        if (this._credito <= 0) {
            this._credito = 1;
        }
        return this._credito;
    };
    return Estudante;
}());
var f = new Estudante(2, 3);
f.get_credito();
console.log(f);
