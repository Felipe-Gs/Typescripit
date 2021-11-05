"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Livro = void 0;
var Livro = /** @class */ (function () {
    function Livro() {
    }
    Object.defineProperty(Livro.prototype, "TipoDeCapa", {
        get: function () {
            return this.tipoDeCapa;
        },
        set: function (TipoDeCapa) {
            this.tipoDeCapa = TipoDeCapa;
        },
        enumerable: false,
        configurable: true
    });
    return Livro;
}());
exports.Livro = Livro;
