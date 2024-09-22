import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    pathMatch: 'full'
  },
  {
    path: 'otp',
    loadChildren: () => import('./otp/otp.module').then( m => m.OtpPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  // start sidemenu items
  {
    path: 'share-bisiness-card',
    loadChildren: () => import('./sidemenu/share-bisiness-card/share-bisiness-card.module').then( m => m.ShareBisinessCardPageModule)
  },
  {
    path: 'mark-attendence',
    loadChildren: () => import('./sidemenu/mark-attendence/mark-attendence.module').then( m => m.MarkAttendencePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./sidemenu/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'add-tcf',
    loadChildren: () => import('./sidemenu/add-tcf/add-tcf.module').then( m => m.AddTcfPageModule)
  },
  {
    path: 'tcf-list',
    loadChildren: () => import('./sidemenu/tcf-list/tcf-list.module').then( m => m.TcfListPageModule)
  },
  {
    path: 'add-mcf',
    loadChildren: () => import('./sidemenu/add-mcf/add-mcf.module').then( m => m.AddMcfPageModule)
  },
  {
    path: 'mcf-list',
    loadChildren: () => import('./sidemenu/mcf-list/mcf-list.module').then( m => m.McfListPageModule)
  },
  {
    path: 'announcements',
    loadChildren: () => import('./sidemenu/announcements/announcements.module').then( m => m.AnnouncementsPageModule)
  },
  {
    path: 'view-profile',
    loadChildren: () => import('./sidemenu/view-profile/view-profile.module').then( m => m.ViewProfilePageModule)
  },
  // end sidemenu items
  // start interactions
  {
    path: 'upcoming',
    loadChildren: () => import('./interactions/upcoming/upcoming.module').then( m => m.UpcomingPageModule)
  },
  {
    path: 'missed-calls',
    loadChildren: () => import('./interactions/missed-calls/missed-calls.module').then( m => m.MissedCallsPageModule)
  },
  {
    path: 'overall',
    loadChildren: () => import('./interactions/overall/overall.module').then( m => m.OverallPageModule)
  },
  {
    path: 'notes',
    loadChildren: () => import('./interactions/notes/notes.module').then( m => m.NotesPageModule)
  },
  {
    path: 'pending-followups',
    loadChildren: () => import('./interactions/pending-followups/pending-followups.module').then( m => m.PendingFollowupsPageModule)
  },
  {
    path: 'week-followups',
    loadChildren: () => import('./interactions/week-followups/week-followups.module').then( m => m.WeekFollowupsPageModule)
  },
  {
    path: 'prime-site-visits',
    loadChildren: () => import('./interactions/prime-site-visits/prime-site-visits.module').then( m => m.PrimeSiteVisitsPageModule)
  },
  {
    path: 'favourite-leads',
    loadChildren: () => import('./interactions/favourite-leads/favourite-leads.module').then( m => m.FavouriteLeadsPageModule)
  },
  // end interactions
  // start leads
  {
    path: 'my-leads',
    loadChildren: () => import('./leads/my-leads/my-leads.module').then( m => m.MyLeadsPageModule)
  },
  {
    path: 'lead-call-logs',
    loadChildren: () => import('./leads/lead-call-logs/lead-call-logs.module').then( m => m.LeadCallLogsPageModule)
  },
  {
    path: 'cross-segments',
    loadChildren: () => import('./leads/cross-segments/cross-segments.module').then( m => m.CrossSegmentsPageModule)
  },
  {
    path: 'view-lead-details',
    loadChildren: () => import('./leads/view-lead-details/view-lead-details.module').then( m => m.ViewLeadDetailsPageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./leads/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  // end leads
  // start Calling
  {
    path: 'cold-call',
    loadChildren: () => import('./calling/cold-call/cold-call.module').then( m => m.ColdCallPageModule)
  },
  {
    path: 'cold-meeting',
    loadChildren: () => import('./calling/cold-meeting/cold-meeting.module').then( m => m.ColdMeetingPageModule)
  },
  {
    path: 'call-data',
    loadChildren: () => import('./calling/call-data/call-data.module').then( m => m.CallDataPageModule)
  },
  {
    path: 'call-logs',
    loadChildren: () => import('./calling/call-logs/call-logs.module').then( m => m.CallLogsPageModule)
  },
 // end Calling
 // start activities
  {
    path: 'my-team',
    loadChildren: () => import('./activities/my-team/my-team.module').then( m => m.MyTeamPageModule)
  },
  {
    path: 'my-team-interactions',
    loadChildren: () => import('./activities/my-team-interactions/my-team-interactions.module').then( m => m.MyTeamInteractionsPageModule)
  },
  {
    path: 'my-visits',
    loadChildren: () => import('./activities/my-visits/my-visits.module').then( m => m.MyVisitsPageModule)
  },
  {
    path: 'site-visit-schedules',
    loadChildren: () => import('./activities/site-visit-schedules/site-visit-schedules.module').then( m => m.SiteVisitSchedulesPageModule)
  },
  {
    path: 'meeting-schedules',
    loadChildren: () => import('./activities/meeting-schedules/meeting-schedules.module').then( m => m.MeetingSchedulesPageModule)
  },
  {
    path: 'hot-updates',
    loadChildren: () => import('./activities/hot-updates/hot-updates.module').then( m => m.HotUpdatesPageModule)
  },
  // end activities
  // start projects
  {
    path: 'properties',
    loadChildren: () => import('./projects/properties/properties.module').then( m => m.PropertiesPageModule)
  },
  {
    path: 'priority-projects',
    loadChildren: () => import('./projects/priority-projects/priority-projects.module').then( m => m.PriorityProjectsPageModule)
  },
  {
    path: 'prime-projects',
    loadChildren: () => import('./projects/prime-projects/prime-projects.module').then( m => m.PrimeProjectsPageModule)
  },
  {
    path: 'cma',
    loadChildren: () => import('./projects/cma/cma.module').then( m => m.CmaPageModule)
  },
    // end projects
    // start channel partners
  {
    path: 'my-cps',
    loadChildren: () => import('./channelPartners/my-cps/my-cps.module').then( m => m.MyCpsPageModule)
  },
  {
    path: 'cp-submitted-leads',
    loadChildren: () => import('./channelPartners/cp-submitted-leads/cp-submitted-leads.module').then( m => m.CpSubmittedLeadsPageModule)
  },
  
 
   // end channel partners
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
