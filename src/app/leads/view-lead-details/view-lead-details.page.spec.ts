import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewLeadDetailsPage } from './view-lead-details.page';

describe('ViewLeadDetailsPage', () => {
  let component: ViewLeadDetailsPage;
  let fixture: ComponentFixture<ViewLeadDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLeadDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
