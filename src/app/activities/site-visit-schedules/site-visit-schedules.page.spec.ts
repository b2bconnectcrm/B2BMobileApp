import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteVisitSchedulesPage } from './site-visit-schedules.page';

describe('SiteVisitSchedulesPage', () => {
  let component: SiteVisitSchedulesPage;
  let fixture: ComponentFixture<SiteVisitSchedulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteVisitSchedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
