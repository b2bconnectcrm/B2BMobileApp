import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';
import { empty } from 'rxjs';
import { PrimeSiteService } from 'src/app/services/primrvisites.service';

@Component({
  selector: 'app-prime-site-visits',
  templateUrl: './prime-site-visits.page.html',
  styleUrls: ['./prime-site-visits.page.scss'],
})
export class PrimeSiteVisitsPage  {


  selectedDate!: string;
  selecteStartdDate!: string;
  isStartDatePickerOpen = false;
  isDatePickerOpen = false;

  results:any;
  data:any;
  constructor(private router: Router,private sitesservice:PrimeSiteService) { }

  ngOnInit() {
    this.getdata();
  }

  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d: any) => (d.propertyName.toLowerCase().indexOf(query) || d.clientName.toLowerCase().indexOf(query) ) > -1);
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


  gotoView(data:any){
    this.router.navigate(['/prime-site-visits/view-prime-sites'], { queryParams: { data } })  
  }
  getdata(){
    this.sitesservice.getsites().subscribe(res=>{
      this.data =  res;
      this.results = res;
    })
  }
  
}
