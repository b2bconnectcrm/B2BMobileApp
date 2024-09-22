import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareBisinessCardPage } from './share-bisiness-card.page';

describe('ShareBisinessCardPage', () => {
  let component: ShareBisinessCardPage;
  let fixture: ComponentFixture<ShareBisinessCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShareBisinessCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
