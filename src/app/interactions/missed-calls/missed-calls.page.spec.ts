import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MissedCallsPage } from './missed-calls.page';

describe('MissedCallsPage', () => {
  let component: MissedCallsPage;
  let fixture: ComponentFixture<MissedCallsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedCallsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
