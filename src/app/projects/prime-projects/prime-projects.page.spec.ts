import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrimeProjectsPage } from './prime-projects.page';

describe('PrimeProjectsPage', () => {
  let component: PrimeProjectsPage;
  let fixture: ComponentFixture<PrimeProjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PrimeProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
