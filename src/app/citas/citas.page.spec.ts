import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CitasPage } from './citas.page';

describe('CitasPage', () => {
  let component: CitasPage;
  let fixture: ComponentFixture<CitasPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
