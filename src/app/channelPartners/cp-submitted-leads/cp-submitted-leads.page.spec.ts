import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpSubmittedLeadsPage } from './cp-submitted-leads.page';

describe('CpSubmittedLeadsPage', () => {
  let component: CpSubmittedLeadsPage;
  let fixture: ComponentFixture<CpSubmittedLeadsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CpSubmittedLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
