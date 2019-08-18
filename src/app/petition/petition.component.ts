import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-petition',
  templateUrl: './petition.component.html',
  styleUrls: ['./petition.component.scss']
})
export class PetitionComponent implements OnInit {

  //form
  frmPetition: FormGroup;
  days: string[] = [];
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  year: string = new Date().getFullYear().toString();
  years: string[];

  constructor(private fb: FormBuilder, private dataSvc: DataService, private status: MatSnackBar) { 
    
  }

  createForm() {
    this.frmPetition = this.fb.group({
      cityLodge: [null, Validators.required],
      day: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      lodgeName: [null],
      lodgeNumber: [null],
      godExists: [null],
      firstName: [null],
      lastName: [null],
      address1: [null],
      city: [null],
      zip: [null],
      phone: [null],
      email: [null],
      resided: [null]
    });
  }

  ngOnInit() {
    this.createForm();
    this.createDays();
  }

  createDays() {
    for(let count=1; count<32; count++)
      this.days.push(count.toString());
  }
  createYears() {
    for(let i=0; i<100; i++)
      this.years.push(i.toString());
  }

  save(frm) {
    this.validateForm(frm);
    //console.log(this.lodgeFormGroup.value);
    this.dataSvc.savePetition(this.frmPetition.value);
    this.statusUpdate(`${this.frmPetition.controls['lodgeName'].value}`, `Success`);
  }

  statusUpdate(message: string, action: string) {

    let msg = `Saved ${message}'s profile successfully`
    this.status.open(msg, action, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }

  validateForm(frm) {
    if(!frm.value.year)
      this.frmPetition.controls['year'].setValue('2019');
  }

}
