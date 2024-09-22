import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PriorityProjectsPage } from './priority-projects.page';

describe('PriorityProjectsPage', () => {
  let component: PriorityProjectsPage;
  let fixture: ComponentFixture<PriorityProjectsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PriorityProjectsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
