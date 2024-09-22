import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeSiteVisitsPage } from './prime-site-visits.page';

describe('PrimeSiteVisitsPage', () => {
  let component: PrimeSiteVisitsPage;
  let fixture: ComponentFixture<PrimeSiteVisitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeSiteVisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
