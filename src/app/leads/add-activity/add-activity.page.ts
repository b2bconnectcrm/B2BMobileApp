import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-activity',
  templateUrl: './add-activity.page.html',
  styleUrls: ['./add-activity.page.scss'],
})
export class AddActivityPage implements OnInit {

  selectedDate!: string;
  selectedTime: string = '';
  isTimePickerOpen = false;
  selecteStartdDate!: string;
  isStartDatePickerOpen = false;
  isDatePickerOpen = false;
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
  public results = [...this.data];
  constructor() { }

  ngOnInit() {
  }

  
  handleInput(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d: any) => d.propertyName.toLowerCase().indexOf(query ) > -1);
    console.dir( this.results )
  }

  searchEmpoyee(event: any) {
    const query = event.target.value.toLowerCase();
    this.results = this.data.filter((d: any) => d.clientName.toLowerCase().indexOf(query ) > -1);
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
    this.clearTime()
    this.closeDatePicker();
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


  block1Checked: boolean = false;
  block2Checked: boolean = false;
  block3Checked: boolean = false;
  block4Checked: boolean = false;

  toggleBlock(blockNumber: number) {
    switch (blockNumber) {
      case 1:
        this.block1Checked = !this.block1Checked;
        break;
      case 2:
        this.block2Checked = !this.block2Checked;
        break;
      case 3:
        this.block3Checked = !this.block3Checked;
        break;
      case 4:
        this.block4Checked = !this.block4Checked;
        break;
    }
  }

}
