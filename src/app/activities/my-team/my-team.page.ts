import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public  results: any = [
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
}
