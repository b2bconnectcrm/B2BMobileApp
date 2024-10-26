import { Component, OnInit } from '@angular/core';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
dummyresponse:any=[
  {
    "id": 1,
    "dealName": "fdfgdf",
    "clientName": "345345",
    "accountName": "string",
    "stage": "STARTED",
    "unitStatus": null,
    "pancardFilePath": "string",
    "pancardNumber": "string",
    "amount": 0,
    "forcastCategory": "string",
    "commissionPercent": "string",
    "closingDate": "2024-10-26",
    "phone": "string",
    "projectType": null,
    "subProjectType": "string",
    "referredBy": "string",
    "employeeId": null,
    "leadId": null,
    "employeeDto": null,
    "leadDto": null,
    "salesPipeline": null
  },
  {
    "id": 2,
    "dealName": "dfgfdh",
    "clientName": "fghfdghdf",
    "accountName": "string",
    "stage": "STARTED",
    "unitStatus": null,
    "pancardFilePath": "string",
    "pancardNumber": "string",
    "amount": 0,
    "forcastCategory": null,
    "commissionPercent": "string",
    "closingDate": "2024-10-26",
    "phone": "string",
    "projectType": null,
    "subProjectType": null,
    "referredBy": null,
    "employeeId": null,
    "leadId": null,
    "employeeDto": null,
    "leadDto": null,
    "salesPipeline": null
  },
  {
    "id": 3,
    "dealName": "testt",
    "clientName": "test",
    "accountName": "test",
    "stage": "STARTED",
    "unitStatus": null,
    "pancardFilePath": null,
    "pancardNumber": "tyretyfghf",
    "amount": 12,
    "forcastCategory": null,
    "commissionPercent": "12",
    "closingDate": "2024-10-26",
    "phone": "5645785675467",
    "projectType": null,
    "subProjectType": null,
    "referredBy": null,
    "employeeId": null,
    "leadId": null,
    "employeeDto": null,
    "leadDto": null,
    "salesPipeline": null
  },
  {
    "id": 4,
    "dealName": "test1",
    "clientName": "test2",
    "accountName": "test2",
    "stage": "NEGOTIATION",
    "unitStatus": null,
    "pancardFilePath": null,
    "pancardNumber": "9875644",
    "amount": 12,
    "forcastCategory": null,
    "commissionPercent": "12",
    "closingDate": "2024-10-26",
    "phone": "9876543211",
    "projectType": null,
    "subProjectType": null,
    "referredBy": null,
    "employeeId": null,
    "leadId": null,
    "employeeDto": null,
    "leadDto": null,
    "salesPipeline": null
  },
  {
    "id": 5,
    "dealName": "test4",
    "clientName": "test4",
    "accountName": "test4",
    "stage": "STARTED",
    "unitStatus": null,
    "pancardFilePath": null,
    "pancardNumber": "",
    "amount": null,
    "forcastCategory": null,
    "commissionPercent": "",
    "closingDate": null,
    "phone": "",
    "projectType": null,
    "subProjectType": null,
    "referredBy": null,
    "employeeId": null,
    "leadId": null,
    "employeeDto": null,
    "leadDto": null,
    "salesPipeline": null
  }
];
dealsData:any;
  constructor(private deslaservice:DealsService) { }

  ngOnInit() {
    this.getDetails()
  }
  getDetails() {        
    this.deslaservice.getDeals().subscribe((data: any) => {
      this.dealsData = data;
      console.log(data)
      console.log("success")
      // this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }
}
