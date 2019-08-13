import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  years: string = new Date().getFullYear().toString();

  constructor(private fb: FormBuilder) { 
    
  }

  createForm() {
    this.frmPetition = this.fb.group({
      cityLodge: [null, Validators.required],
      day: [null, Validators.required],
      month: [null, Validators.required],
      year: [null, Validators.required],
      lodgeName: [null],
      lodgeNumber: [null]
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

  save(frm) {
    this.validateForm(frm);
  }

  validateForm(frm) {
    if(!frm.value.year)
      this.frmPetition.controls['year'].setValue('2019');
  }

}
