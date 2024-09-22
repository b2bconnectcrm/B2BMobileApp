import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeekFollowupsPage } from './week-followups.page';

describe('WeekFollowupsPage', () => {
  let component: WeekFollowupsPage;
  let fixture: ComponentFixture<WeekFollowupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekFollowupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
