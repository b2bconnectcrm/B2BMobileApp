import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MarkAttendencePage } from './mark-attendence.page';

describe('MarkAttendencePage', () => {
  let component: MarkAttendencePage;
  let fixture: ComponentFixture<MarkAttendencePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkAttendencePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
