import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeadCallLogsPage } from './lead-call-logs.page';

describe('LeadCallLogsPage', () => {
  let component: LeadCallLogsPage;
  let fixture: ComponentFixture<LeadCallLogsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadCallLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
