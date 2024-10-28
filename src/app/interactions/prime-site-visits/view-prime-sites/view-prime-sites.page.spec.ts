import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewPrimeSitesPage } from './view-prime-sites.page';

describe('ViewPrimeSitesPage', () => {
  let component: ViewPrimeSitesPage;
  let fixture: ComponentFixture<ViewPrimeSitesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPrimeSitesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
