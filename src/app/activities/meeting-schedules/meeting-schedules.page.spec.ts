import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MeetingSchedulesPage } from './meeting-schedules.page';

describe('MeetingSchedulesPage', () => {
  let component: MeetingSchedulesPage;
  let fixture: ComponentFixture<MeetingSchedulesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingSchedulesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
