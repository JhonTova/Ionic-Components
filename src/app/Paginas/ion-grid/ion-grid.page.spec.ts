import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonGridPage } from './ion-grid.page';

describe('IonGridPage', () => {
  let component: IonGridPage;
  let fixture: ComponentFixture<IonGridPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(IonGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
