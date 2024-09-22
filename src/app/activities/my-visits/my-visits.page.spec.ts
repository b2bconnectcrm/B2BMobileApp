import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyVisitsPage } from './my-visits.page';

describe('MyVisitsPage', () => {
  let component: MyVisitsPage;
  let fixture: ComponentFixture<MyVisitsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVisitsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
