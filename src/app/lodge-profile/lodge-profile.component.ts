import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ILodgeProfile } from '../interfaces/ILodgeProfile';

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
  
  isLinear = false;
  firstFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      lodgeNumber: ['', Validators.required]
    });
  }
}