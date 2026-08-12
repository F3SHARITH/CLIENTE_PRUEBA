import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoDinamicoComponent } from './contenido-dinamico';

describe('ContenidoDinamicoComponent', () => {
  let component: ContenidoDinamicoComponent;
  let fixture: ComponentFixture<ContenidoDinamicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenidoDinamicoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoDinamicoComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
