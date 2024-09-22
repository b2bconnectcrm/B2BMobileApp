import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddTcfPage } from './add-tcf.page';

describe('AddTcfPage', () => {
  let component: AddTcfPage;
  let fixture: ComponentFixture<AddTcfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTcfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
