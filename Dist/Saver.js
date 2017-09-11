"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Saver = /** @class */ (function () {
    function Saver(saves) {
        if (saves === void 0) { saves = []; }
        this.saves = saves;
    }
    Saver.prototype.save = function (tosave) {
        this.saves.push(tosave.getinfos());
    };
    Saver.prototype.display = function () {
        console.log(this.saves);
    };
    Saver.prototype.delete = function (pos) {
        this.saves.splice(pos, 1);
    };
    return Saver;
}());
exports.Saver = Saver;
//# sourceMappingURL=Saver.js.map