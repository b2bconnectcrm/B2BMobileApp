import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColdMeetingPage } from './cold-meeting.page';

describe('ColdMeetingPage', () => {
  let component: ColdMeetingPage;
  let fixture: ComponentFixture<ColdMeetingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdMeetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
