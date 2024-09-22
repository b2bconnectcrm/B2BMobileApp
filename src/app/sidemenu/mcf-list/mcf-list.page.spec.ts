import { ComponentFixture, TestBed } from '@angular/core/testing';
import { McfListPage } from './mcf-list.page';

describe('McfListPage', () => {
  let component: McfListPage;
  let fixture: ComponentFixture<McfListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(McfListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
