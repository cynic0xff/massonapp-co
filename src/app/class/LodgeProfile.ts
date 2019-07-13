import { ILodgeProfile }  from '../interfaces/ILodgeProfile';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

export class LodgeProfile implements ILodgeProfile {

    number: number;
    name: string;
    district: number;

    lodgeForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }


    createForm() {
        this.lodgeForm = new FormGroup({
            lodgeNumber: new FormControl()
        });
    }
}