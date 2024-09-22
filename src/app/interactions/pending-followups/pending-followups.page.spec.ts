import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PendingFollowupsPage } from './pending-followups.page';

describe('PendingFollowupsPage', () => {
  let component: PendingFollowupsPage;
  let fixture: ComponentFixture<PendingFollowupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingFollowupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
