import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'View Profile', url: '/view-profile', icon: 'person' },
    { title: 'Share Business Card', url: '/share-bisiness-card', icon: 'business' },
    { title: 'Mark Attendence', url: '/mark-attendence', icon: 'today' },
    { title: 'Dashboard', url: '/dashboard', icon: 'grid' },
    { title: 'Add TCF', url: '/add-tcf', icon: 'newspaper' },
    { title: 'TCF List', url: '/tcf-list', icon: 'folder' },
    { title: 'Add MCF', url: '/add-mcf', icon: 'newspaper' },
    { title: 'MCF List', url: '/mcf-list', icon: 'folder' },
    { title: 'Announcements', url: '/announcements', icon: 'notifications' },
    { title: 'Logout', url: '/login', icon: 'log-out' },
  ];

  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}

  
}
