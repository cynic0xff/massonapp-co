import { ILodgeProfile }  from '../interfaces/ILodgeProfile';
import { FormGroup, FormBuilder } from '@angular/forms';

export class LodgeProfile implements ILodgeProfile {

    number: number;
    name: string;
    district: number;

    lodgeForm: FormGroup

    constructor(private fb: FormBuilder) {
        this.createForm();
    }


    createForm() {
        this.lodgeForm = this.fb.group({
            lodgeNumber: [''],
          });
    }
}