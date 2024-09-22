import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-team-interactions',
  templateUrl: './my-team-interactions.page.html',
  styleUrls: ['./my-team-interactions.page.scss'],
})
export class MyTeamInteractionsPage implements OnInit {

  selectedDate!: string;
  isDatePickerOpen = false;

  constructor() { }

  ngOnInit() {
  }

  public results: any = [
    {
      "propertyName": "Lake View Front, HYD",
      "clientName": "Dasu Magupalli",
      "id": "5642349",
      "mobile": "+91 8500053952",
      "date": "09-07-2024"
    },
    {
      "propertyName": "Lake View Front, HYD",
      "clientName": "Naveen kyama",
      "id": "56429999",
      "mobile": "+91 7877887877",
      "date": "07-02-2024",
    }
  ];

  dateChanged(event: any) {
    this.selectedDate = event.detail.value;
    console.log('Selected Date:', this.selectedDate);
  }

  submitDate() {
    console.log('Selected Date:', this.selectedDate);
  }

  clearDate() {
    this.selectedDate = '';
    this.closeDatePicker();
  }

  openDatePicker() {
    this.isDatePickerOpen = true;
  }

  closeDatePicker() {
    this.isDatePickerOpen = false;
  }

  clicked(event: any) {
    console.dir(event);
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
