import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';
import { debounceTime } from 'rxjs';
import { Property } from 'src/app/model/proprty.model';
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
  allProperties: Property[] = [];
  filteredProperties: Property[] = [];
  selectedProperties: Property[] = [];
  propertiesMap = new Map<number, Property>();
  searchTerm: string = '';
  displayDropdown: boolean = false;
  enterProject: any = '';
  coldcallForm: FormGroup | any;
  callButtonEnabled: boolean = true;
  yesOrnoOptions: any = [
    {
      name: 'Yes',
      value: true
    },
    {
      name: 'No',
      value: false
    }];

  mobileNumber: any = '';
  selectedPropertyType: any;
  sources: any = [
    {
      "value": "Company_Lead",
      "name": "Company Lead"
    },
    {
      "value": "Own_Lead",
      "name": "Own Lead"
    },
    {
      "value": "Shared_Lead",
      "name": "Shared Lead"
    },
    {
      "value": "Cold_Call_Lead",
      "name": "Cold Call Lead"
    },
    {
      "value": "CP_Lead",
      "name": "CP Lead"
    }

  ]
  constructor(private callNumber: CallNumber, private fb: FormBuilder, private router: Router,
    private callingService: CallingService) {

    this.coldcallForm = this.fb.group({
      firstName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", Validators.required],
      comments: [""],
      notINterestedStatus: [""],
      properties: [null],
      propertyType: [""],
      subPropertyType: [""],
      salesPipeline: [""],
      leadSource: [""],
      crossSegments: [""],
      leadStatus: [""],
      plantodo: [""],
      clientInterested: [""],
      crosssegmentleads: [""],
      propertyLead: [false],
      enterProject: [""],
      propertyLeadOptions: [''],
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
            mobile: this.mobileNumber
          })
          setTimeout(() => {
            this.callButtonEnabled = false;
          }, 10000);
          console.log('Dialing', res);
        })
        .catch((err: any) => {
          // this.callButtonEnabled = false;
          console.log('Error launching dialer', err)
        });
    } else {
      alert('Please enter a valid mobile number');
    }
  }


  getAllProjects() {
    console.log(this.coldcallForm.value)
    this.callingService.getAllPropeties().subscribe((data: any) => {
      this.allProperties = data;
      // this.coldcallForm.patchValue({
      //   properties:this.filteredProperties
      // })
      console.dir(this.filteredProperties);
    }, (error: any) => {
      console.log("error")
    })
  }

  filterProperties(event: any) {
    const searchValue = event.target.value.toLowerCase();
    if (searchValue) {
      this.filteredProperties = this.allProperties.filter(property =>
        property?.propertyName?.toLowerCase().includes(searchValue)
      );
      if (this.filteredProperties.length > 0) {
        this.displayDropdown = true;
      }
    } else {
      this.filteredProperties = []; // Clear the dropdown if no search term
      this.displayDropdown = false;
    }
  }

  selectProperty(property: Property) {
    //this.selectedProperties = this.selectedProperties.filter((x: any) => x.id != property?.id)
    this.searchTerm = '';
    if (!this.propertiesMap.has(property.id)) {
      this.propertiesMap.set(property.id, property)
      this.selectedProperties.push(property);
    }
    this.displayDropdown = false;

    console.dir(this.selectedProperties);
  }


  onclientinterestchange(ev: any) {
    if (ev.target.value == "true") {
      let v = Validators.required;
      this.SetValidations(v)
    } else {
      this.ClearValidation();
    }
    this.updateFormGroup();
  }

  SetValidations(condition: any) {
    this.coldcallForm.get('propertyType').setValidators(condition);
    this.coldcallForm.get('subPropertyType').setValidators(condition);
    this.coldcallForm.get('leadStatus').setValidators(condition);
    this.coldcallForm.get('plantodo').setValidators(condition);
    this.coldcallForm.get('leadSource').setValidators(condition);
    this.coldcallForm.get('salesPipeline').setValidators(condition);
    this.updateFormGroup();
  }
  ClearValidation() {
    this.coldcallForm.get('propertyType').clearValidators();
    this.coldcallForm.get('subPropertyType').clearValidators();
    this.coldcallForm.get('leadStatus').clearValidators();
    this.coldcallForm.get('plantodo').clearValidators();
    this.coldcallForm.get('leadSource').clearValidators();
    this.coldcallForm.get('salesPipeline').clearValidators();
    this.coldcallForm.patchValue({
      propertyType: "",
      subPropertyType: "",
      leadStatus: "",
      plantodo: "",
      salesPipeline: ""
    });
    this.updateFormGroup();
  }
  updateFormGroup() {
    this.coldcallForm.updateValueAndValidity();
  }

  addProject() {
    this.filteredProperties.push(this.enterProject);
    this.enterProject = '';
  }
  removeproject(val: any) {
    this.filteredProperties = this.filteredProperties.filter((x: any) => x != val)
  }
  get f(): { [key: string]: AbstractControl } {
    return this.coldcallForm.controls;
  }
  onSelectPropertyChange(event: any) {
    console.log('Current value:', JSON.stringify(event.target.value));
    this.selectedPropertyType = event.target.value;
  }

  saveLeadDetails() {
    this.coldcallForm.patchValue({
      properties: this.selectedProperties
    });
    console.log(this.coldcallForm)
    console.log(this.coldcallForm.value);
    this.coldcallForm.markAllAsTouched();
    this.callingService.createLeadDetails(this.coldcallForm.value).subscribe((data: any) => {
      console.log("success")
      this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }
}
