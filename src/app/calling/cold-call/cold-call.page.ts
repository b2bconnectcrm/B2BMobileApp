import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { debounceTime } from 'rxjs';
import { CallingService } from 'src/app/services/calling.service';

@Component({
  selector: 'app-cold-call',
  templateUrl: './cold-call.page.html',
  styleUrls: ['./cold-call.page.scss'],
})
export class ColdCallPage implements OnInit {
  
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
      comments: [""],
      notINterestedStatus: [""],
      properties:[null],
      propertyType: [""],
      subPropertyType: [""],
      salesPipeline: [""],
      crossSegments: [""],
      leadStatus:[""],
      plantodo: [""],        
      clientinterest: [""],
      crosssegmentleads: [""],
      propertyLead: [false],
      enterProject: [""],
      propertyLeadOptions: [''],      
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

  onclientinterestchange(ev: any) { 
    if(ev.target.value == "Yes"){    
      let v = Validators.required;
      this.SetValidations(v)
    }else{      
      this.ClearValidation();
    }
    this.updateFormGroup();
  }
 
  SetValidations(condition:any){
    this.coldcallForm.get('propertyType').setValidators(condition);
    this.coldcallForm.get('subPropertyType').setValidators(condition);
    this.coldcallForm.get('leadStatus').setValidators(condition);
    this.coldcallForm.get('plantodo').setValidators(condition);
    this.coldcallForm.get('salesPipeline').setValidators(condition);    
    this.updateFormGroup();
  }
  ClearValidation(){
    this.coldcallForm.get('propertyType').clearValidators();
    this.coldcallForm.get('subPropertyType').clearValidators();
    this.coldcallForm.get('leadStatus').clearValidators();
    this.coldcallForm.get('plantodo').clearValidators();
    this.coldcallForm.get('salesPipeline').clearValidators();   
    this.coldcallForm.patchValue({
      propertyType:"",
      subPropertyType:"",
      leadStatus:"",
      plantodo:"",
      salesPipeline:""           
    });
    this.updateFormGroup();
  }
  updateFormGroup(){
    this.coldcallForm.updateValueAndValidity();
  }
  
  addProject() {
    this.selectedProjects.push(this.enterProject);
    this.enterProject = '';
  }
  removeproject(val: any) {
    this.selectedProjects = this.selectedProjects.filter((x: any) => x != val)
  } 
  get f(): { [key: string]: AbstractControl } {
    return this.coldcallForm.controls;
  }
  onSelectPropertyChange(event: any){
    console.log('Current value:', JSON.stringify(event.target.value));
    this.selectedPropertyType= event.target.value;
  }  
  
  saveLeadDetails() {
    console.log(this.coldcallForm)
    console.log(this.coldcallForm.value);
    this.coldcallForm.markAllAsTouched();
    this.updateFormGroup();
    this.callingService.createLeadDetails(this.coldcallForm.value).subscribe((data: any) => {
      console.log("success")
      this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }
}
