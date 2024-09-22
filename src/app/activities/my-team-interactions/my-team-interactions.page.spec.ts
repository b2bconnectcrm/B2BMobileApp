import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyTeamInteractionsPage } from './my-team-interactions.page';

describe('MyTeamInteractionsPage', () => {
  let component: MyTeamInteractionsPage;
  let fixture: ComponentFixture<MyTeamInteractionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTeamInteractionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
