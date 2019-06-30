export class DegreeProficiency {
    roles: string[] = [];
    rolesPart1: string[] = [];
    rolesPart2: string[] = [];

    constructor() {
        this.createRolesPart1List();
        this.createRolesPart2List();
    }

    getRolesForPart1() {
        return this.rolesPart1;
    }

    getRolesForPart2() {
        return this.rolesPart2;
    }

    createRolesPart1List(): void {
        this.rolesPart1.push('Worshipful Master');
        this.rolesPart1.push('Senior Warden');
        this.rolesPart1.push('Junior Warden');
        this.rolesPart1.push('Senior Deacon');
        this.rolesPart1.push('Junior Deacon');
        this.rolesPart1.push('Senior Steward');
        this.rolesPart1.push('Junior Steward');
        this.rolesPart1.push('Conductor');
        this.rolesPart1.push('Chaplain');
        this.rolesPart1.push('Treasurer');
        this.rolesPart1.push('Secretary');
        this.rolesPart1.push('Charge');
        this.rolesPart1.push('Lecture');
        this.rolesPart1.push('Tyler');
    }

    createRolesPart2List(): void {

        this.rolesPart2.push('KS');
        this.rolesPart2.push('SD');
        this.rolesPart2.push('JA');
        this.rolesPart2.push('JO');
        this.rolesPart2.push('JU');
        this.rolesPart2.push('SGW');
        this.rolesPart2.push('JD');
        this.rolesPart2.push('TY');
        this.rolesPart2.push('GSE');
        this.rolesPart2.push('FC 10');
        this.rolesPart2.push('FC 11');
        this.rolesPart2.push('FC 12');
        this.rolesPart2.push('WF');
    }


}