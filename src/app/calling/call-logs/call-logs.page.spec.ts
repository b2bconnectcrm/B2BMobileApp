import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CallLogsPage } from './call-logs.page';

describe('CallLogsPage', () => {
  let component: CallLogsPage;
  let fixture: ComponentFixture<CallLogsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CallLogsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
