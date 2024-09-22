import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CmaPage } from './cma.page';

describe('CmaPage', () => {
  let component: CmaPage;
  let fixture: ComponentFixture<CmaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CmaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
