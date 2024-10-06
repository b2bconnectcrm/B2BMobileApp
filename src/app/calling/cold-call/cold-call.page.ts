import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cold-call',
  templateUrl: './cold-call.page.html',
  styleUrls: ['./cold-call.page.scss'],
})
export class ColdCallPage implements OnInit {
  selectedClientOption:any;
  selectedCrossSegmentOption:any;
  notLookingOptions:any=['Not Intersted','Voicemail','Call Back','DND']
  clientTyPeOptions:any=[
    {
      id: 1,
      name: 'HOT',
      type: 'HOT',
    },
    {
      id: 3,
      name: 'WARM',
      type: 'WARM',
    },
    {
      id: 2,
      name: 'COLD',
      type: 'COLD',
    },
  ];
  plantoDotypes:any=[
    {
      id: 1,
      name: 'F2F',
      type: 'F2F',
    },
    {
      id: 2,
      name: 'Site Visit',
      type: 'Site Visit',
    },
    {
      id: 3,
      name: 'Calls',
      type: 'Calls',
    },
    {
      id: 4,
      name: 'Closure Meeting',
      type: 'Closure Meeting',
    },
  ];
  addedProjects:any=[];
  enterProject:any='';
  constructor() { }

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
  compareWith(o1:any, o2:any) {
    return o1.id === o2.id;
  }

  handleChange(ev:any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }

  trackItems(index: number, item: any) {
    return item.id;
  }
  plantodohandleChange(ev:any) {
    console.log('Current value:', JSON.stringify(ev.target.value));
  }
  plantodocompare(o1:any, o2:any) {
    return o1.id === o2.id;
  }
  plantodoitemstracking(index: number, item: any) {
    return item.id;
  }
  addProject(){
    this.addedProjects.push(this.enterProject);
    this.enterProject='';
  }
  removeproject(val:any){
    this.addedProjects = this.addedProjects.filter((x:any)=>x != val)
  }
}
