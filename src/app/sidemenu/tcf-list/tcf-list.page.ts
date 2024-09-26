import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tcf-list',
  templateUrl: './tcf-list.page.html',
  styleUrls: ['./tcf-list.page.scss'],
})
export class TcfListPage implements OnInit {
  selectedTime: string = '';
  isTimePickerOpen = false;
  constructor(private navController:NavController) { }

  ngOnInit() {
  }
  openTimePicker() {
    this.isTimePickerOpen = true;
  }

  closeTimePicker() {
    this.isTimePickerOpen = false;
  }

  timeChanged(event: any) {
    this.selectedTime = event.detail.value;
    console.log('Selected selectedTime:', this.selectedTime);
  }

  clearTime() {
    this.selectedTime = '';
    this.closeTimePicker();
  }
  gotoaddtcfpage(){
    this.navController.navigateRoot("/add-tcf");
  }
}
