import { OnInit } from '@angular/core';

//['Phoenix Lodge 346', 'Venice Lodge', 'Miami Lodge', 'Cambridge Lodge', 'London Lodge', 'Edinbugh Lodge'];
export class LodgeMembership {
    lodge: string[] = [];

    constructor() {

        this.lodge.push('Phoenix Lodge');
        this.lodge.push('Venice Lodge');
        this.lodge.push('Miami Lodge');
        this.lodge.push('United Grand Lodge of London');
        this.lodge.push('Miami Lodge');
    }

    getLodgeList(): string[] {
        return this.lodge;
    }
}