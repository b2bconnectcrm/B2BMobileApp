import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TcfListPage } from './tcf-list.page';

describe('TcfListPage', () => {
  let component: TcfListPage;
  let fixture: ComponentFixture<TcfListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TcfListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
