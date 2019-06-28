import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LodgePositions } from '../class/LodgePositions';

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

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.events.push(`${type}: ${event.value}`);
    //this.ea_date = event.value.toString();
  }
  constructor(private fb: FormBuilder, private dataSvc: DataService) { 
    this.createForm();
  }

  ngOnInit() {
   
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
      mm_date: [this.mm_date]
    });
  }

  reset() {
    //TODO
  }

  save(profile_data) {
    this.dataSvc.saveProfile(profile_data);
  }
}
