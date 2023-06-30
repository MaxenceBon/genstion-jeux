import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TournoisPage } from './tournois.page';

describe('TournoisPage', () => {
  let component: TournoisPage;
  let fixture: ComponentFixture<TournoisPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TournoisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
