import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
      first_name: [''],
      middle_name: [''],
      last_name: ['']
    });
  }

  reset() {
    //TODO
  }

  save(first_name, middle_name, last_name) {
    this.dataSvc.saveProfile(first_name, middle_name, last_name);
  }

}
