import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { DataService } from '../services/data.service';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { LodgePositions } from '../class/LodgePositions';
import { OfficersRole } from '../class/OfficersRole';
import { DegreeProficiency } from '../class/DegreeProficiency';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LodgeMembership } from '../class/LodgeMembership';


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
  selectedLodgePositions;
  
  officersRole: OfficersRole;
  officerRoleList: string[];

  degree_proficiency_1 = new FormControl();
  degreeProficiencyListPart1: string[];
  selectedProficiencyRoles1;

  degree_proficiency_2 = new FormControl();
  degreeProficiencyListPart2: string[];
  selectedProficiencyRoles2;

  lodgeMembership = new FormControl();
  lodgeMembershipList: string[];
  selectedlodgeMembership;

  isLinear = false;
  contactDetails: FormGroup;
  degreeDates: FormGroup;
  degreeProficiencyPart1: FormGroup;

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    //this.events.push(`${type}: ${event.value}`);
    //this.ea_date = event.value.toString();
  }
  constructor(private fb: FormBuilder, private dataSvc: DataService, private status: MatSnackBar, 
    private _formBuilder: FormBuilder) { 
    this.createForm();
  }
  
  ngOnInit() {

    this.officersRole = new OfficersRole();
    this.officerRoleList = this.officersRole.get();

    let degree_pro_list = new DegreeProficiency();
    this.degreeProficiencyListPart1 = degree_pro_list.getRolesForPart1();
    this.degreeProficiencyListPart2 = degree_pro_list.getRolesForPart2();

    let lodgeMembership = new LodgeMembership();
    this.lodgeMembershipList = lodgeMembership.getLodgeList();

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
      officer_role: [null],
      degree_proficiency_1: [null],
      degree_proficiency_2: [null],
      lodgeMembership: [null]
    });
  }

  reset() {
        this.angForm.reset();
  }

  showValue(sv) {
    //console.log(sv);
  }


  save() {
    //add the selected positions to the form values
    this.angForm.controls['lodge_positions'].setValue(this.selectedLodgePositions);
    this.angForm.controls['degree_proficiency_1'].setValue(this.selectedProficiencyRoles1);
    this.angForm.controls['degree_proficiency_2'].setValue(this.selectedProficiencyRoles2);
    this.angForm.controls['lodgeMembership'].setValue(this.selectedlodgeMembership);
    
    
    //console.log(this.angForm.value);
    this.dataSvc.saveProfile(this.angForm.value);
    this.statusUpdate(`${this.angForm.controls['first_name'].value}`, `Success`);
  }

  statusUpdate(message: string, action: string) {

    let msg = `Saved ${message}'s profile successfully`
    this.status.open(msg, action, {
      duration: 4000,
      verticalPosition: 'top'
    });
  }
}
