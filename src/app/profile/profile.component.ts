import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LodgePositions } from '../class/LodgePositions';
import { OfficersRole } from '../class/OfficersRole';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  default_value: string = '';
  angForm: FormGroup;
  ea_date: string;
  fc_date: string;
  mm_date: string;
  lodgePositions = new FormControl();
  lodgePositionList: string[] = LodgePositions.lodgePositionList;
  
  //selected drop down positions
  selectedLodgePositions;
  
  officersRole: OfficersRole;
  officerRoleList: string[];


  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.events.push(`${type}: ${event.value}`);
    //this.ea_date = event.value.toString();
  }
  constructor(private fb: FormBuilder, private dataSvc: DataService) { 
    this.createForm();
  }
  
  ngOnInit() {
    this.officersRole = new OfficersRole();
    this.officerRoleList = this.officersRole.get();
  }

  createForm() {
    this.angForm = this.fb.group({
      first_name: ['', Validators.required],
      middle_name: [''],
      last_name: ['', Validators.required],
      email: ['', Validators.required],
      phone: [''],
      ea_date: [this.ea_date],
      fc_date: [this.fc_date],
      mm_date: [this.mm_date],
      lodge_positions: [null],
      officerRole: ['']
    });
  }

  reset() {
        this.angForm.reset();
  }

  showValue() {
    //console.log(this.selectedLodgePositions);
  }


  save() {
    //add the selected positions to the form values
    this.angForm.controls['lodge_positions'].setValue(this.selectedLodgePositions);
    this.dataSvc.saveProfile(this.angForm.value);
  }
}
