import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DealsService } from 'src/app/services/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.page.html',
  styleUrls: ['./deals.page.scss'],
})
export class DealsPage implements OnInit {
  dealsData: any;
  constructor(private router: Router, private deslaservice: DealsService, private navController: NavController) { }

  ngOnInit() {
    // this.getDetails()
  }

  ionViewDidEnter() {
    this.getDetails();
  }
  getDetails() {
    this.deslaservice.getDeals().subscribe((data: any) => {
      this.dealsData = data;
      console.log(data)
      console.log("success")
      // this.router.navigateByUrl("/home");
    }, (error: any) => {
      console.log("error")
    })
  }
  addDeals(val: any) {
    console.log(val)
    this.router.navigate(['/add-deals'], { queryParams: { val } })
  }
  edit(val: any) {
    console.log(val)
    this.router.navigate(['/add-deals'], { queryParams: { val } })
  }
  delete(val: any) {
    this.deslaservice.deleteDeals(val).subscribe(res => {
      this.getDetails();
    })
  }
}
