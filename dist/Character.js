"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
class Character {
    constructor(name) {
        this.name = name;
        this.weapons = [];
    }
    addWeapon(weapon) {
        this.weapons.push(weapon);
    }
    removeWeapon(weaponId) {
        this.weapons = this.weapons.filter(weapon => weapon.id !== weaponId);
    }
    printStats() {
        console.log(`Character: ${this.name}`);
        this.weapons.forEach(weapon => {
            console.log(`${weapon.name} - Damage: ${weapon.damagePoints}`);
        });
    }
    totalDamage() {
        return this.weapons.reduce((total, weapon) => total + weapon.damagePoints, 0);
    }
}
exports.Character = Character;
