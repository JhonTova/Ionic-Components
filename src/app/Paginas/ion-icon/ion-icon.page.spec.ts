import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonIconPage } from './ion-icon.page';

describe('IonIconPage', () => {
  let component: IonIconPage;
  let fixture: ComponentFixture<IonIconPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonIconPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
