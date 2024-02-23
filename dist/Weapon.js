"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weapon = void 0;
const uuid_1 = require("uuid");
class Weapon {
    constructor(name, damagePoints) {
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.damagePoints = damagePoints;
    }
}
exports.Weapon = Weapon;
