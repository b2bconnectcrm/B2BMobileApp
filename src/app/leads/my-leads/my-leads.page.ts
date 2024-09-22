import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-my-leads',
  templateUrl: './my-leads.page.html',
  styleUrls: ['./my-leads.page.scss'],
})
export class MyLeadsPage implements OnInit {

  
public  data: any = [
  {
    "propertyName": "Lake View Front, HYD",
    "clientName":"Dasu Magupalli",
    "id":"5642349",
    "mobile":"+91 8500053952",
    "date":"09-07-2024"
  },
  {
    "propertyName": "Lake View Front, HYD",
    "clientName":"Naveen kyama",
    "id":"56429999",
    "mobile":"+91 7877887877",
    "date": "07-02-2024",
  }
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

}

