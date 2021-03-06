import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from "@angular/router";

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
  years: number[] = [];
  dob = new FormControl(new Date());
  age: number;
  dependents: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  constructor(
    private fb: FormBuilder, 
    private dataSvc: DataService, 
    private status: MatSnackBar,
    private router: Router) { 
    
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
      resided: [null],
      residedInState: [null],
      residedInPast5Years: [null],
      occupation: [null],
      occupationLength: [null],
      businessAddress: [null],
      businessZip: [null],
      businessPhone: [null],
      businessName: [null],
      ssn: [null],
      born: [null],
      dob: [null],
      disability: [null],
      age: [null],
      reasonPhysical: [null],
      convicted: [null],
      reasonConvicted: [null],
      married: [null],
      dependents: [null],
      childrenAgeGender: [null],
      wifesName: [null],
      appliedBefore: [null],
      whenWhatLodge: [null],
      whatWereTheresults: [null],
      overthrowTheGovernment: [null],
      giveDates: [null],
      demolayMember: [null],
      whatChapter: [null],
      demolayOffices: [null],
      demolayInterest: [null]
    });
  }

  ngOnInit() {
    this.createForm();
    this.createDays();
    this.createYears();
  }

  createDays() {
    for(let count=1; count<32; count++)
      this.days.push(count.toString());
  }

  createYears() {
    for(let i=1; i<100; i++)
      this.years.push(i);
  }

  save(frm) {
    this.validateForm(frm);
    //console.log(this.lodgeFormGroup.value);
    this.dataSvc.savePetition(this.frmPetition.value);
    this.statusUpdate(`${this.frmPetition.controls['lodgeName'].value}`, `Success`);
    this.router.navigate(['/petition-part2']);
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

  addDOBEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.events.push(`${type}: ${event.value}`);
    console.log(`${event.value}`);

    this.age = (new Date().getFullYear()) - event.value.getFullYear();
    console.log(this.age);
  }

}
