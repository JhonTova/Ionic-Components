import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonRangePage } from './ion-range.page';

describe('IonRangePage', () => {
  let component: IonRangePage;
  let fixture: ComponentFixture<IonRangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonRangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
