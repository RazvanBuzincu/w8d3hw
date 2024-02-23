
import { v4 as uuidv4 } from 'uuid';

export class Weapon {
    readonly id: string;
    name: string;
    damagePoints: number;

    constructor(name: string, damagePoints: number) {
        this.id = uuidv4(); 
        this.name = name;
        this.damagePoints = damagePoints;
    }
}

  
