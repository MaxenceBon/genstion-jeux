import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JoueursPage } from './joueurs.page';

describe('JoueursPage', () => {
  let component: JoueursPage;
  let fixture: ComponentFixture<JoueursPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JoueursPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
