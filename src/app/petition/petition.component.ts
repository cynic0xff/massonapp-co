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

  constructor(private fb: FormBuilder) { 
    
  }

  createForm() {
    this.frmPetition = this.fb.group({
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
    console.log(frm.value);
  }

}
