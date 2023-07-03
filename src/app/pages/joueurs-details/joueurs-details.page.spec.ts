import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoueursDetailsPage } from './joueurs-details.page';

describe('JoueursDetailsPage', () => {
  let component: JoueursDetailsPage;
  let fixture: ComponentFixture<JoueursDetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoueursDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
