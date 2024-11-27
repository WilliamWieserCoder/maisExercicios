"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var guerreiro_1 = require("./guerreiro");
var mago_1 = require("./mago");
var atirador_1 = require("./atirador");
var xam_1 = require("./xam\u00E3");
var guerreiro = new guerreiro_1.Guerreiro('Hércules', 100, 20, 10);
var mago = new mago_1.Mago('Merlin', 80, 25, 5);
var atirador = new atirador_1.Atirador('Ártemis', 60, 35, 15);
var xamã = new xam_1.Xamã('Ragadast', 90, 30, 5);
function combate(personagem1, personagem2) {
    var turno = 1;
    while (personagem1.vida > 0 && personagem2.vida > 0) {
        console.log("\n--- Turno ".concat(turno, " ---"));
        if (turno % 2 === 1) {
            personagem1.atacar(personagem2);
        }
        else {
            personagem2.atacar(personagem1);
        }
        turno++;
    }
    if (personagem1.vida <= 0) {
        console.log("".concat(personagem1.nome, " foi de Vasco! ").concat(personagem2.nome, " deu gap!"));
    }
    else {
        console.log("".concat(personagem2.nome, " foi de Vasco! ").concat(personagem1.nome, " deu gap!"));
    }
}
combate(xamã, atirador);
