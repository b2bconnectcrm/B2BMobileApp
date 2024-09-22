import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallDataPage } from './call-data.page';

describe('CallDataPage', () => {
  let component: CallDataPage;
  let fixture: ComponentFixture<CallDataPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CallDataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
