import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotUpdatesPage } from './hot-updates.page';

describe('HotUpdatesPage', () => {
  let component: HotUpdatesPage;
  let fixture: ComponentFixture<HotUpdatesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotUpdatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
