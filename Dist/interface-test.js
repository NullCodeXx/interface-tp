"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Saver_1 = require("./Saver");
var chien_1 = require("./chien");
var saver = new Saver_1.Saver();
saver.save(new chien_1.Chien('toto', 'tata'));
saver.save(new chien_1.Chien('titi', 'tutu'));
saver.display();
//# sourceMappingURL=interface-test.js.map