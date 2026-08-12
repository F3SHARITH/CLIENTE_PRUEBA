import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservaVuelosComponent } from './reserva-vuelos';

describe('ReservaVuelos', () => {
  let component: ReservaVuelosComponent;
  let fixture: ComponentFixture<ReservaVuelosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservaVuelosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReservaVuelosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
