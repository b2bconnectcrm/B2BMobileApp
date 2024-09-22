import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FavouriteLeadsPage } from './favourite-leads.page';

describe('FavouriteLeadsPage', () => {
  let component: FavouriteLeadsPage;
  let fixture: ComponentFixture<FavouriteLeadsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouriteLeadsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
