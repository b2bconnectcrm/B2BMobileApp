import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-view-lead-details',
  templateUrl: './view-lead-details.page.html',
  styleUrls: ['./view-lead-details.page.scss'],
})
export class ViewLeadDetailsPage implements OnInit {

 
public  data: any = [
  {
    "propertyName": "Lake View Front, HYD",
    "clientName":"Dasu Magupalli",
    "id":"5642349",
    "mobile":"+91 8500053952",
    "date":"09-07-2024"
  }
];
intractions = [
  { name: 'logo-whatsapp', label: 'WhatsApp', url: '/upcoming' },
  { name: 'chatbox-ellipses-outline', label: 'SMS', url: '/missed-calls' },
  { name: 'call', label: 'Call', url: '/overall' },
  { name: 'mail-outline', label: 'Email', url: '/notes' },
  { name: 'storefront-outline', label: 'Knowledge Center', url: '/pending-followups' },
  { name: 'arrow-redo-outline', label: 'Add Referral', url: '/week-followups' },
  { name: 'business-outline', label: 'Send CMA', url: '/prime-site-visits' },
  { name: 'share-social-outline', label: 'Share', url: '/favourite-leads' }
];

selectedDate!: string;
selecteStartdDate!: string;
isStartDatePickerOpen = false;
isDatePickerOpen = false;

public results = [...this.data];
constructor(private navController:NavController) { }

ngOnInit() {
}

openDatePicker() {
  this.isDatePickerOpen = true;
}
openStartDatePicker(){
 this.isStartDatePickerOpen = true;
}

closeDatePicker() {
  this.isDatePickerOpen = false;
}

closeStartDatePicker() {
  this.isStartDatePickerOpen = false;
}

dateChanged(event: any) {
  this.selectedDate = event.detail.value;
  console.log('Selected Date:', this.selectedDate);
}

startDateChanged(event: any) {
  this.selecteStartdDate = event.detail.value;
  console.log('selecteStartdDate Date:', this.selecteStartdDate);
}

submitDate() {
  console.log('Selected Date:', this.selectedDate);
}

clearDate() {
  this.selectedDate = '';
  this.selecteStartdDate ='';
  this.closeDatePicker();
  this.closeStartDatePicker();
}

gotoViewLeadDetails(){
  this.navController.navigateRoot("/view-lead-details")
}

gotoActivityPage(){
  this.navController.navigateRoot("/add-activity");
}

}
