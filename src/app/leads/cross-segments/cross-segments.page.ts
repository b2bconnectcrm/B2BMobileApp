import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cross-segments',
  templateUrl: './cross-segments.page.html',
  styleUrls: ['./cross-segments.page.scss'],
})
export class CrossSegmentsPage implements OnInit {

  constructor(private navController:NavController) { }

  ngOnInit() {
  }

  crossSegments = [
    { name: 'business-outline', label: 'Real Estate' },
    { name: 'calendar', label: 'Loans'},
    { name: 'call', label: 'Rent' },
    { name: 'calendar-clear', label: 'Resale' },
    { name: 'newspaper', label: 'Ineterior'}
  ];

  gotoHomePage(){
    this.navController.navigateRoot('/home');
  }

}
