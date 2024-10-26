import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddDealsPage } from './add-deals.page';

describe('AddDealsPage', () => {
  let component: AddDealsPage;
  let fixture: ComponentFixture<AddDealsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDealsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
