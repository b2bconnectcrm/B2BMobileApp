import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-add-deals',
  templateUrl: './add-deals.page.html',
  styleUrls: ['./add-deals.page.scss'],
})
export class AddDealsPage implements OnInit {
  dealsForm: FormGroup | any;
  stagedValues:any=[
    {value:'STARTED',displayValue:'Started'},
    {value:'DOWNPAYMENT_STAGE',displayValue:'Downpayment Stage'},
    {value:'NEGOTIATION',displayValue:'Negotiation'},
  ];
  pipelineValues:any=[
    {value:'OPEN',displayValue:'Open'},
    {value:'COLD_CALLING_MEETING',displayValue:'Cold Calling/Meeting'},
    {value:'PROPOSAL',displayValue:'Proposal'},
    {value:'NEGOTIATION',displayValue:'Negotiation'},
    {value:'DEALS_OFFERED',displayValue:'Deal Offered'},
    {value:'CLOSURE',displayValue:'Closure'},
    {value:'CONVERSION',displayValue:'Conversion'}    
  ]
  UnitStatusValues:any=[
    {value:'Blocked',displayValue:'Blocked'},
    {value:'Sold',displayValue:'Sold'},
    ]
  projectTypeValues:any=[
    {value:'FLAT',displayValue:'FLAT'},
    {value:'OPENPLOT',displayValue:'OPEN PLOT'},
    {value:'COMMERCIALSPACE',displayValue:'COMMERCIAL SPACE'}    
    ]
  constructor(private router: Router, private fb: UntypedFormBuilder,private deslaservice:DealsService) { }

  ngOnInit() {
    this.dealsForm = this.fb.group({
      id: [''],
      dealName: ['', Validators.required],
      clientName: ['', Validators.required],
      accountName: ['',Validators.required],
      stage: ['', Validators.required],
      salesPipeline: ['', Validators.required],
      amount: ['', Validators.required],
      commissionPercent: ['', Validators.required],
      unitStatus: ['', Validators.required],
      closingDate: ['', Validators.required],
      phone: ['', Validators.required],
      projectType: ['', Validators.required],
      pancardNumber:['', Validators.required],

    });
  }
  get f(): { [key: string]: AbstractControl } {
    return this.dealsForm.controls;
  }
  saveDetails() {
    console.log(this.dealsForm)
    console.log(this.dealsForm.value);
    this.dealsForm.markAllAsTouched();  
    this.deslaservice.createDeals(this.dealsForm.value).subscribe((data: any) => {
      console.log("success")
      this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }

}
