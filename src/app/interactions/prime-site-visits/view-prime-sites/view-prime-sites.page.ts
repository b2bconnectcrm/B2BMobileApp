import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
import { LeadsService } from 'src/app/services/leads.service';
import { PrimeSiteService } from 'src/app/services/primrvisites.service';


declare var google: any;
@Component({
  selector: 'app-view-prime-sites',
  templateUrl: './view-prime-sites.page.html',
  styleUrls: ['./view-prime-sites.page.scss'],
})
export class ViewPrimeSitesPage implements OnInit {

  latitude: any;
  longitude: any;
  options = {
    enableHighAccuracy: true,  // Get more accurate GPS data
    timeout: 5000,            // Timeout after 10 seconds (increase if necessary)
    maximumAge: 0              // Don't use cached positions
  };
  selectedId:any;
  siteData:any;
  leadsData:any;
  selectedLead:any="";
  otpgenerated:boolean=false;
  enteredOtp:any="";
  generatedOTP:any;
  constructor(private router: Router,private activateRouter: ActivatedRoute,private sitesservice:PrimeSiteService,private leadsService:LeadsService ) { 
    this.activateRouter.queryParams.subscribe(res => {
      this.selectedId = res;      
    });  
  }

  ngOnInit() {
    this.getprimesitebyId();
    this.getLeadDetails();
  }
  async ionViewDidEnter() {
    await this.checkGeolocationPermission();
    await this.getCurrentLocation();
  }
  getprimesitebyId(){
    this.sitesservice.getsitesById(this.selectedId?.data).subscribe(res=>{
      this.siteData=res;
    })
  }
  async checkGeolocationPermission() {
    const permissionStatus = await Geolocation.checkPermissions();
    console.log('Geolocation coarseLocation Status:', permissionStatus.coarseLocation);
    console.log('Geolocation location Status:', permissionStatus.location);
    if (permissionStatus?.coarseLocation == 'denied') {
      this.requestGeolocationPermission();
    }

  }

  async requestGeolocationPermission() {
    const permissionStatus = await Geolocation.requestPermissions();
    console.log('Geolocation Permission Granted:', permissionStatus);
  }

  async getCurrentLocation() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Latitude1:', coordinates.coords.latitude, 'Longitude:', coordinates.coords.longitude);
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;

    } catch (error) {
      console.error('Error getting location', error);
    }
  }
  getLeadDetails(){
    this.leadsService.getLeads().subscribe((res:any)=>{
      this.leadsData = res?.filter((x:any)=>x?.leadId !=null);
    })
  }
  generateOtp(){
    this.otpgenerated = true;
    this.generatedOTP='12345'
  }
  verifyOtp(){
    console.log(this.generatedOTP)
    console.log(this.enteredOtp)
    if(this.generatedOTP === this.enteredOtp){
      alert('Valid')
    } else {
      alert('Invalid')
    }
  }
}
