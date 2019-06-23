import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  default_value: string = '';
  angForm: FormGroup;

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
      email: ['', Validators.required]
    });
  }

  reset() {
    //TODO
  }

  save(profile_data) {
    //this.dataSvc.saveProfile(profile_data.first_name, profile_data.middle_name, profile_data.last_name, profile_data.email);
    this.dataSvc.saveProfile(profile_data);
  }
}
