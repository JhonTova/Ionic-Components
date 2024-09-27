import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonCardPage } from './ion-card.page';

describe('IonCardPage', () => {
  let component: IonCardPage;
  let fixture: ComponentFixture<IonCardPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
