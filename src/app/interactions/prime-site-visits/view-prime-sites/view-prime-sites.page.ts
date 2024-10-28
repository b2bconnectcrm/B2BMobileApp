import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';


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

  constructor(private router: Router) { }

  ngOnInit() {

  }
  async ionViewDidEnter() {
    await this.checkGeolocationPermission();
    await this.getCurrentLocation();
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

}
