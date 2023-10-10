import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionDiarioPacienteComponent } from './informacion-diario-paciente.component';

describe('InformacionDiarioPacienteComponent', () => {
  let component: InformacionDiarioPacienteComponent;
  let fixture: ComponentFixture<InformacionDiarioPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionDiarioPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionDiarioPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
