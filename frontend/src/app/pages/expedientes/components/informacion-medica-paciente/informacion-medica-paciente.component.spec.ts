import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionMedicaPacienteComponent } from './informacion-medica-paciente.component';

describe('InformacionMedicaPacienteComponent', () => {
  let component: InformacionMedicaPacienteComponent;
  let fixture: ComponentFixture<InformacionMedicaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionMedicaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionMedicaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
