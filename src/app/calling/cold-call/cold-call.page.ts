import { Component, OnInit } from '@angular/core';
import { CallNumber } from '@awesome-cordova-plugins/call-number/ngx';

@Component({
  selector: 'app-cold-call',
  templateUrl: './cold-call.page.html',
  styleUrls: ['./cold-call.page.scss'],
})
export class ColdCallPage implements OnInit {

  selectedClientOption:any;
  selectedCrossSegmentOption:any;
  notLookingOptions:any=['Not Intersted','Voicemail','Call Back','DND']
  mobileNumber: any;
  constructor(private callNumber: CallNumber) { }

  ngOnInit() {
  }
  onclientbuttonclick(selectedbutton:any){
    if(this.selectedClientOption == selectedbutton){
      this.selectedClientOption = '';
      return
    }
    this.selectedClientOption=selectedbutton;
   
    console.log(this.selectedClientOption)
  }
  onCrossSegmentbuttonclick(selectedcrosssegmentbutton:any){
    if(this.selectedCrossSegmentOption == selectedcrosssegmentbutton){
      this.selectedCrossSegmentOption = '';
      return
    }
    this.selectedCrossSegmentOption=selectedcrosssegmentbutton;
    console.log(this.selectedClientOption)
  }

  callNow() {
    if (this.mobileNumber) {
      this.callNumber.callNumber(this.mobileNumber, true)
        .then((res: any) => console.log('Dialing', res))
        .catch((err: any) => console.log('Error launching dialer', err));
    } else {
      console.log('Please enter a valid mobile number');
    }
  }
}
