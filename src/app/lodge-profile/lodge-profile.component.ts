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

  //TODO: country
  countries: string[] = ['USA'];
  //days: number[] = Array.from(Array(31), (x, index) => index + 1);
  days: string[] = ['1st', '2nd', '3rd', '4th'];
  times: string[] = ['16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00'];
  
  isLinear = false;
  lodgeFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.lodgeFormGroup = this._formBuilder.group({
      lodgeNumber: ['', Validators.required],
      lodgeName: ['', Validators.required]
    });

    console.log(this.days);
  }
}