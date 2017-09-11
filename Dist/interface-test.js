"use strict";
// 4 On test et appel les func avec des valeur concrete. (node Dist/interface-test).
Object.defineProperty(exports, "__esModule", { value: true });
var Saver_1 = require("./Saver");
var chien_1 = require("./chien");
var saver = new Saver_1.Saver();
saver.save(new chien_1.Chien('toto', 'tata')); //on peut l'utiliser a plusieur reprise.
saver.save(new chien_1.Chien('titi', 'tutu'));
saver.display();
//Supprimer une valeur de l'array.
saver.delete(1);
saver.display();
//# sourceMappingURL=interface-test.js.map