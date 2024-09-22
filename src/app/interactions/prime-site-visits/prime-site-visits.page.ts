import { Component, OnInit, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { empty } from 'rxjs';

@Component({
  selector: 'app-prime-site-visits',
  templateUrl: './prime-site-visits.page.html',
  styleUrls: ['./prime-site-visits.page.scss'],
})
export class PrimeSiteVisitsPage implements OnInit {

public  data: any = [
    {
      "propertyName": "Lake View Front, HYD",
      "date":new Date(),
      "clientName":"Dasu Magupalli",
      "id":"5642349",
      "mobile":"+91 8500053952"
    },
    {
      "propertyName": "Lake View Front, HYD",
      "date":new Date(),
      "clientName":"Naveen kyama",
      "id":"56429999",
      "mobile":"+91 7877887877"
    }
  ];
  selectedDate!: string;
  selecteStartdDate!: string;
  isStartDatePickerOpen = false;
  isDatePickerOpen = false;

  public results = [...this.data];
  constructor() { }

  ngOnInit() {
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d: any) => (d.propertyName.toLowerCase().indexOf(query) || d.clientName.toLowerCase().indexOf(query) ) > -1);
    console.dir( this.results )
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


  
}
