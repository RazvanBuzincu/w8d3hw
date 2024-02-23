import { Weapon } from './Weapon';

export abstract class Character {
    private weapons: Weapon[] = [];
    constructor(public name: string) {}

    addWeapon(weapon: Weapon): void {
        this.weapons.push(weapon);
    }

    removeWeapon(weaponId: string): void {
        this.weapons = this.weapons.filter(weapon => weapon.id !== weaponId);
    }

    printStats(): void {
        console.log(`Character: ${this.name}`);
        this.weapons.forEach(weapon => {
            console.log(`${weapon.name} - Damage: ${weapon.damagePoints}`);
        });
    }

    totalDamage(): number {
        return this.weapons.reduce((total, weapon) => total + weapon.damagePoints, 0);
    }
}
