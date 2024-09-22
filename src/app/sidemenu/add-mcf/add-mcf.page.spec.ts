import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMcfPage } from './add-mcf.page';

describe('AddMcfPage', () => {
  let component: AddMcfPage;
  let fixture: ComponentFixture<AddMcfPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMcfPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
