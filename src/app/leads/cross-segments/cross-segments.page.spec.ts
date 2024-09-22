import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrossSegmentsPage } from './cross-segments.page';

describe('CrossSegmentsPage', () => {
  let component: CrossSegmentsPage;
  let fixture: ComponentFixture<CrossSegmentsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossSegmentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
