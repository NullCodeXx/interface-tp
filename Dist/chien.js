"use strict";
// 3 On crée une class chien avec la function getinfos de l'interface.
Object.defineProperty(exports, "__esModule", { value: true });
var Chien = /** @class */ (function () {
    function Chien(nom, race) {
        this.nom = nom;
        this.race = race;
    }
    Chien.prototype.getinfos = function () {
        return "Nom du chien:" + this.nom + ";Race du chien: " + this.race;
    };
    return Chien;
}());
exports.Chien = Chien;
//# sourceMappingURL=chien.js.map