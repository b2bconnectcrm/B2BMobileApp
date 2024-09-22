import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  intractions = [
    { name: 'calendar', label: 'Upcoming', url: '/upcoming' },
    { name: 'call', label: 'Missed', url: '/missed-calls' },
    { name: 'calendar-clear', label: 'Overall', url: '/overall' },
    { name: 'newspaper', label: 'Notes', url: '/notes' },
    { name: 'people-outline', label: 'Pending Followups', url: '/pending-followups' },
    { name: 'people-outline', label: 'Week Followups', url: '/week-followups' },
    { name: 'business-outline', label: 'Prime Site Visits', url: '/prime-site-visits' },
    { name: 'heart', label: 'Favourite Leads', url: '/favourite-leads' }
    
  ];

  leads = [
    { name: 'home', label: 'My Leads' , url: '/my-leads' },
    { name: 'call', label: 'Lead Call Logs', url: '/lead-call-logs'  },
    { name: 'heart', label: 'Cross Segments', url: '/cross-segments'  },
  ];

  calling = [
    // { name: 'call', label: 'Cold Call', url: '/cold-call'  },
    // { name: 'star', label: 'Cold Meeting', url: '/cold-meeting'  },
    { name: 'heart', label: 'Call Data' , url: '/call-data' },
    { name: 'camera', label: 'Call Logs', url: '/call-logs'  }
  ];

  activities= [
    { name: 'home', label: 'My Team' , url: '/my-team'  },
    { name: 'star', label: 'My Team Intractions', url: '/my-team-interactions'  },
    { name: 'heart', label: 'My Visits', url: '/my-visits'  },
    { name: 'camera', label: 'Camera' , url: '/site-visit-schedules' },
    { name: 'call', label: 'Call', url: '/upcoming'  },
    { name: 'person', label: 'Site Visit Sch`d', url: '/site-visit-schedules'  },
    { name: 'call', label: 'Meetings Sch`d' , url: '/meeting-schedules' },
    { name: 'mail', label: 'Hot Updates' , url: '/hot-updates' }
  ];

  projects= [
    { name: 'home', label: 'Properties' , url: '/properties'  },
    { name: 'star', label: 'Priority Projects' , url: '/priority-projects' },
    { name: 'heart', label: 'Prime Projects', url: '/prime-projects'  },
    { name: 'camera', label: 'CMA', url: '/cma'  },
  ];

  channelPartners= [
    { name: 'home', label: 'My CP`s' , url: '/my-cps' },
    { name: 'star', label: 'CP Submitted Leads' , url: '/cp-submitted-leads' },
  ];
  
  constructor(private platform:Platform) { }

  ngOnInit() {
  }

  openDialPad(phoneNumber: string) {
    if (this.platform.is('capacitor')) {
      window.open(`tel:${phoneNumber}`, '_system');
    } else {
      window.location.href = `tel:${phoneNumber}`;
    }
  }

 
}
