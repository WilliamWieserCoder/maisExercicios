"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atirador = void 0;
var Atirador = /** @class */ (function () {
    function Atirador(nome, vida, forca, defesa) {
        this.nome = nome;
        this.vida = vida;
        this.forca = forca;
        this.defesa = defesa;
    }
    Atirador.prototype.atacar = function (inimigo) {
        var dano = this.forca - inimigo.defesa;
        if (dano > 0) {
            console.log("".concat(this.nome, " ataca ").concat(inimigo.nome, " e causa ").concat(dano, " de dano."));
            inimigo.perderVida(dano);
        }
        else {
            console.log("".concat(this.nome, " ataca ").concat(inimigo.nome, ", mas o ataque n\u00E3o causa dano."));
        }
    };
    Atirador.prototype.perderVida = function (dano) {
        this.vida -= dano;
        console.log("".concat(this.nome, " perde ").concat(dano, " de vida. Vida restante: ").concat(this.vida));
    };
    return Atirador;
}());
exports.Atirador = Atirador;
