import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonItemPage } from './ion-item.page';

describe('IonItemPage', () => {
  let component: IonItemPage;
  let fixture: ComponentFixture<IonItemPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
