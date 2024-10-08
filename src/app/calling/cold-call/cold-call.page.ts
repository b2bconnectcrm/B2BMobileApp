import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { CallingService } from 'src/app/services/calling.service';

@Component({
  selector: 'app-cold-call',
  templateUrl: './cold-call.page.html',
  styleUrls: ['./cold-call.page.scss'],
})
export class ColdCallPage implements OnInit {

  selectedClientOption: any;
  selectedCrossSegmentOption: any;
  notLookingOptions: any = [{
    "label": "Irrelevant Location",
    "value": "IrrelevantLocation"
  },
  {
    "label": "Not reachable",
    "value": "Notreachable"
  },
  {
    "label": "Not Answering",
    "value": "NotAnswering"
  },
  {
    "label": "All ready purchased",
    "value": "Allreadypurchased"
  }
  ,
  {
    "label": "Already in touch with Company Employee",
    "value": "AlreadyintouchwithCompanyEmployee"
  }
  
  ];
  selectedProjects: any = [];
  enterProject: any = '';
  coldcallForm: FormGroup | any;
  callButtonEnabled: boolean = true;
  yesOrnoOptions: any = ['Yes', 'No'];

  mobileNumber: any;
  selectedPropertyType: any;
  constructor(private callNumber: CallNumber, private fb: FormBuilder, private router: Router,
     private callingService: CallingService) {

    this.coldcallForm = this.fb.group({
      firstName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", Validators.required],
      clientInterested: [false],
      crossSegmentLeads: [false],
      comments: [""],
      notINterestedStatus: [""],

      properties:[null],
      propertyType: [""],
      subPropertyType: [""],
      salesPipeline: [""],
      crossSegments: [""],
      leadStatus:[""],
      plantodo: [""],
      clientType: [""],
     
      clientinterest: [""],
      crosssegmentleads: [""],
      propertyLead: [false],
      enterProject: [""],
      propertyLeadOptions: [''],
      clienttype: [""],
      planitemstype: [""],
      nointerestedVal: [""]
    });
    this.coldcallForm.updateValueAndValidity();
   }

  leadStatusList: any = [
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
    {
      id: 4,
      name: 'CLOSE',
      type: 'CLOSE',
    },
  ];

  plantoDotypes: any = [
    {
      id: 1,
      name: 'F2F',
      value: 'F2F',
    },
    {
      id: 2,
      name: 'Site Visit',
      value: 'SiteVisit',
    },
    {
      id: 3,
      name: 'Calls',
      value: 'Calls',
    },
    {
      id: 4,
      name: 'Closure Meeting',
      value: 'ClosureMeeting',
    },
  ];



  ngOnInit() {
    this.getAllProjects();
   
  }
  onclientbuttonclick(selectedbutton: any) {
    if (this.selectedClientOption == selectedbutton) {
      this.selectedClientOption = '';
      return
    }
    this.selectedClientOption = selectedbutton;

    console.log(this.selectedClientOption)
  }
  onCrossSegmentbuttonclick(selectedcrosssegmentbutton: any) {
    if (this.selectedCrossSegmentOption == selectedcrosssegmentbutton) {
      this.selectedCrossSegmentOption = '';
      return
    }
    this.selectedCrossSegmentOption = selectedcrosssegmentbutton;
    console.log(this.selectedClientOption)
  }


  callNow() {
    if (this.mobileNumber && this.mobileNumber.length == 10) {
      this.callNumber.callNumber(this.mobileNumber, true)
        .then((res: any) => {
          this.coldcallForm.patchValue({
            mobile : this.mobileNumber
          })
          setTimeout(() => {
            this.callButtonEnabled = false;
          }, 10000);
          console.log('Dialing', res);
        })
        .catch((err: any) => {
          this.callButtonEnabled = false;
          console.log('Error launching dialer', err)
        });
    } else {
      alert('Please enter a valid mobile number');
    }
  }

  saveLeadDetails() {
    console.log(this.coldcallForm.value)
    this.callingService.createLeadDetails(this.coldcallForm.value).subscribe((data: any) => {
      console.log("success")
      this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }

  getAllProjects() {
    console.log(this.coldcallForm.value)
    this.callingService.getAllPropeties().subscribe((data: any) => {
      this.selectedProjects = data;
      this.coldcallForm.patchValue({
        properties:this.selectedProjects
      })
      console.dir(this.selectedProjects);
    }, (error: any) => {
      console.log("error")
    })
  }

  compareWith(o1: any, o2: any) {
    return o1.id === o2.id;
  }

  handleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
    let clientType =ev.target.value;
    this.coldcallForm.patchValue({
      leadStatus : clientType?.name
    })
  }
  noninterestedcompareWith(o1: any, o2: any) {
    return o1 === o2;
  }


  notInteresthandleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
    let crossSegmentLeads =ev.target.value;
    if(crossSegmentLeads == "Yes"){
      this.coldcallForm.patchValue({
        crossSegmentLeads : true
      })
    }else{
      this.coldcallForm.patchValue({
        crossSegmentLeads : false
      })
    }
   
  }


  notInteresttrackItems(index: number, item: any) {
    return item;
  }
  trackItems(index: number, item: any) {
    return item.id;
  }
  plantodohandleChange(ev: any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
    let plantodo = ev.target.value;
    this.coldcallForm.patchValue({
      plantodo : plantodo?.value
    })
  }
  plantodocompare(o1: any, o2: any) {
    return o1.id === o2.id;
  }
  plantodoitemstracking(index: number, item: any) {
    return item.id;
  }
  addProject() {
    this.selectedProjects.push(this.enterProject);
    this.enterProject = '';
  }
  removeproject(val: any) {
    this.selectedProjects = this.selectedProjects.filter((x: any) => x != val)
  }
  get name() {
    return this.coldcallForm.get('firstName');
  }

  get email() {
    return this.coldcallForm.get('email');
  }

  onSelectPropertyChange(event: any){
    console.log('Current value:', JSON.stringify(event.target.value));
    this.selectedPropertyType= event.target.value;
  }

}
