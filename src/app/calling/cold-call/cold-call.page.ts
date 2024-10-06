import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-cold-call',
  templateUrl: './cold-call.page.html',
  styleUrls: ['./cold-call.page.scss'],
})
export class ColdCallPage implements OnInit {
  notLookingOptions: any = ['Not Intersted', 'Voicemail', 'Call Back', 'DND'];
  yesOrnoOptions: any = ['Yes', 'No'];
  addedProjects: any = [];
  enterProject: any = '';
  coldcallForm: FormGroup | any;

  mobileNumber: any;
  constructor(private callNumber: CallNumber, private fb: FormBuilder) { }

  clientTyPeOptions: any = [
    {
      id: 1,
      name: 'HOT',
      type: 'HOT',
    },
    {
      id: 3,
      name: 'WARM',
      type: 'WARM',
    },
    {
      id: 2,
      name: 'COLD',
      type: 'COLD',
    },
  ];
  plantoDotypes: any = [
    {
      id: 1,
      name: 'F2F',
      type: 'F2F',
    },
    {
      id: 2,
      name: 'Site Visit',
      type: 'Site Visit',
    },
    {
      id: 3,
      name: 'Calls',
      type: 'Calls',
    },
    {
      id: 4,
      name: 'Closure Meeting',
      type: 'Closure Meeting',
    },
  ];



  ngOnInit() {
    this.coldcallForm = this.fb.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      clientinterest: ["", Validators.required],
      crosssegmentleads: ["", Validators.required],
      comments: [""],
      propertyLead: [false],
      enterProject: [""],
      propertyLeadOptions: [''],
      rsvp: [false],
      rsvpOptions: [],
      plcumrsvp: [false],
      clienttype: ["", Validators.required],
      planitemstype: ["", Validators.required],
      nointerestedVal: ["", Validators.required]
    });
    this.coldcallForm.updateValueAndValidity();
  }
  callNow() {
    if (this.mobileNumber) {
      this.callNumber.callNumber(this.mobileNumber, true)
        .then((res: any) => console.log('Dialing', res))
        .catch((err: any) => console.log('Error launching dialer', err));
    } else {
      console.log('Please enter a valid mobile number');
    }
  }

  compareWith(o1: any, o2: any) {
    return o1.id === o2.id;
  }
  noninterestedcompareWith(o1: any, o2: any) {
    return o1 === o2;
  }

  notInteresthandleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
  notInteresttrackItems(index: number, item: any) {
    return item;
  }
  trackItems(index: number, item: any) {
    return item.id;
  }
  plantodohandleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
  plantodocompare(o1: any, o2: any) {
    return o1.id === o2.id;
  }
  plantodoitemstracking(index: number, item: any) {
    return item.id;
  }
  addProject() {
    this.addedProjects.push(this.enterProject);
    this.enterProject = '';
  }
  removeproject(val: any) {
    this.addedProjects = this.addedProjects.filter((x: any) => x != val)
  }
  get name() {
    return this.coldcallForm.get('name');
  }

  get email() {
    return this.coldcallForm.get('email');
  }
  onSubmit() {
    console.log(this.coldcallForm.value)
  }
}
