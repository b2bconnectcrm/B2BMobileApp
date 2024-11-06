import { Component, OnInit } from '@angular/core';
import { FormGroup, UntypedFormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DealsService } from 'src/app/services/deals.service';
import { LeadsService } from 'src/app/services/leads.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppConstants } from '../../../app/appconstants/appConstants';
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
    ];
    selectedId:any;
    leadsData:any;  
  selectedPancardFile: File | null = null;   
  pancardUrl: any | ArrayBuffer; 
  pancardFileUploaded: boolean = false;
  imageData: any;
  dealsEditData:any;
  constructor( private _http: HttpClient,private leadsService:LeadsService ,private activateRouter: ActivatedRoute,private router: Router, private fb: UntypedFormBuilder,private deslaservice:DealsService) { 
    this.activateRouter.queryParams.subscribe(res => {
      this.selectedId = res;     
    });  
  }

  ngOnInit() {
    this.getleads();    
    this.dealsForm = this.fb.group({
      id: [''],
      dealName: ['', Validators.required],
      dealOwner:['',Validators.required],
      clientName: ['', Validators.required],
      accountName: ['',Validators.required],
      referredBy:['',Validators.required],
      forcastCategory:['',Validators.required],
      leadId:['',Validators.required],
      stage: ['', Validators.required],
      salesPipeline: ['', Validators.required],
      amount: ['', Validators.required],
      commissionPercent: ['', Validators.required],
      unitStatus: ['', Validators.required],
      closingDate: ['', Validators.required],
      phone: ['', Validators.required],
      projectType: ['', Validators.required],
      pancardNumber:['', Validators.required],
      pancardFilePath:['']
    });    
    if(this.selectedId.val !=0){
      this.deslaservice.getDealsById(this.selectedId.val).subscribe(res=>{ 
        this.dealsEditData = res;     
        this.dealsForm = this.fb.group({
          id: res.id,
          dealName: res.dealName,
          dealOwner:res.dealOwner,
          leadId:res?.leadId,
          clientName: res.clientName,
          forcastCategory:res?.forcastCategory,
          referredBy:res?.referredBy,
          accountName: res.accountName,
          stage: res.stage,
          salesPipeline: res.salesPipeline,
          amount: res.amount,
          commissionPercent: res.commissionPercent,
          unitStatus: res.unitStatus,
          closingDate: res.closingDate,
          phone: res.phone,
          projectType: res.projectType,
          pancardNumber:res.pancardNumber,
          pancardFilePath:res?.pancardFilePath          
        });
      });     
    
    }
  }
  get f(): { [key: string]: AbstractControl } {
    return this.dealsForm.controls;
  }
  getleads(){
    this.leadsService.getLeads().subscribe((res:any)=>{
      this.leadsData = res?.filter((x:any)=>x?.leadId !=null);
    })
  }
  saveDetails() {
    console.log(this.dealsForm)
    console.log(this.dealsForm.value);
    this.dealsForm.markAllAsTouched();  
    if(this.selectedId.val ==0) {
      this.deslaservice.createDeals(this.dealsForm.value).subscribe((data: any) => {
        console.log("success")
        // this.selectedPancardFile=null;
        this.router.navigateByUrl("/deals");
      }, (error: any) => {
        console.log("error")
      })
    } else {
      this.deslaservice.updateDeals(this.selectedId?.val,this.dealsForm.value).subscribe((data: any) => {
        console.log("success")
        this.router.navigateByUrl("/deals");
      }, (error: any) => {
        console.log("error")
      })
    }   
  }

  onPancardFileSelected(event: any): void {
    this.selectedPancardFile = event.target.files[0];
    if (this.selectedPancardFile) {
      console.dir(this.selectedPancardFile);
      var reader = new FileReader();

      reader.readAsDataURL(this.selectedPancardFile); // read file as data url

      reader.onload = (event) => { // called once readAsDataURL is completed
        this.pancardUrl = event?.target?.result;
      }
    }

  }
  uploadPancardImage() {
    if (this.selectedPancardFile) {
      const formData = new FormData();
      formData.append('file', this.selectedPancardFile);
      this._http.post(AppConstants.uploadUrl, formData, { responseType: 'json' })
        .subscribe(
          (response: any) => {            
            this.pancardFileUploaded = true;
            this.imageData = response;
            console.dir(this.imageData);
            console.dir(this.imageData.path);
            console.dir(this.imageData?.path);
            console.dir(response?.imageName);
            this.dealsForm.patchValue({
              pancardFilePath: this.imageData.imageName
            })
          
          },
          (error: HttpErrorResponse) => {
            
            console.dir(error);
          }
        );
    } else {
      
    }
  } 
  getPancardImagePath(image: string) {    
    return AppConstants.GET_REMOTE_IMAGE_PATH(image);
  }
}
