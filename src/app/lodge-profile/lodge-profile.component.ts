import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ILodgeProfile } from '../interfaces/ILodgeProfile';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-lodge-profile',
  templateUrl: './lodge-profile.component.html',
  styleUrls: ['./lodge-profile.component.scss']
})
export class LodgeProfileComponent implements OnInit, ILodgeProfile {

  lodgeNumber: number;
  lodgeName: string;
  district: number;

  profileForm = new FormGroup({});

  //TODO: country
  countries: string[] = ['USA'];

  //days: number[] = Array.from(Array(31), (x, index) => index + 1);
  days: string[] = ['1st', '2nd', '3rd', '4th'];
  times: string[] = ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  dayNames: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  isLinear = false;
  
  lodgeFormGroup = new FormGroup({
    lodgeNameControl: new FormControl('')
  });

  lodgeDetails = false;

  constructor(private _formBuilder: FormBuilder, private dataSvc: DataService, private status: MatSnackBar) {}

  ngOnInit() {
    this.lodgeFormGroup = this._formBuilder.group({
      lodgeNumber: [null, Validators.required],
      lodgeName: [null, Validators.required],
      districtNumber: [null, Validators.required],
      address1: [null, Validators.required],
      address2: [null],
      city: [null, Validators.required],
      state: [null, Validators.required],
      country: [null, Validators.required],
      phone: [null],
      zip: [null]
    });
  }

  save() {
    /*add the selected positions to the form values
    this.angForm.controls['lodge_positions'].setValue(this.selectedLodgePositions);
    this.angForm.controls['degree_proficiency_1'].setValue(this.selectedProficiencyRoles1);
    this.angForm.controls['degree_proficiency_2'].setValue(this.selectedProficiencyRoles2);
    this.angForm.controls['lodgeMembership'].setValue(this.selectedlodgeMembership);
    */
    
    //console.log(this.angForm.value);
    this.dataSvc.saveProfile(this.lodgeFormGroup.value);
    this.statusUpdate(`${this.lodgeFormGroup.controls['lodgeName'].value}`, `Success`);
  }

  statusUpdate(message: string, action: string) {

    let msg = `Saved ${message}'s profile successfully`
    this.status.open(msg, action, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}