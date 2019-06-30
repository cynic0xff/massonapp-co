import { OnInit } from '@angular/core';

export class OfficersRole {
    roles: string[] = [];

    constructor() {

        this.roles.push('Worshipful Master');
        this.roles.push('Senior Warden');
        this.roles.push('Junior Warden');
        this.roles.push('Senior Deacon');
        this.roles.push('Junior Deacon');
        this.roles.push('Senior Steward');
        this.roles.push('Junior Steward');
        this.roles.push('Treasurer');
        this.roles.push('Secretary');
        this.roles.push('Marshal');
        this.roles.push('Tyler');
        this.roles.push('Chaplain');
    }

    get() {
        return this.roles;
    }
}