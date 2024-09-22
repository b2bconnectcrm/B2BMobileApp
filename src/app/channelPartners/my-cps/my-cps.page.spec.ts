import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyCpsPage } from './my-cps.page';

describe('MyCpsPage', () => {
  let component: MyCpsPage;
  let fixture: ComponentFixture<MyCpsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCpsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
