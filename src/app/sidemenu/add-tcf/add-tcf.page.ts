import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tcf',
  templateUrl: './add-tcf.page.html',
  styleUrls: ['./add-tcf.page.scss'],
})
export class AddTcfPage implements OnInit {
  segment: any="currentaddress";
  constructor() { }

  ngOnInit() {
  }

}
