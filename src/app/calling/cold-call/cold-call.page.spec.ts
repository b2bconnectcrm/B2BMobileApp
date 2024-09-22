import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColdCallPage } from './cold-call.page';

describe('ColdCallPage', () => {
  let component: ColdCallPage;
  let fixture: ComponentFixture<ColdCallPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ColdCallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
