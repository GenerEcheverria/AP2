import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionCitaComponent } from './informacion-cita.component';

describe('InformacionCitaComponent', () => {
  let component: InformacionCitaComponent;
  let fixture: ComponentFixture<InformacionCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
