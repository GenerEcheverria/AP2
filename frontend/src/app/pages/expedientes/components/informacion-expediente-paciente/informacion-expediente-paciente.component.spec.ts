import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionExpedientePacienteComponent } from './informacion-expediente-paciente.component';

describe('InformacionExpedientePacienteComponent', () => {
  let component: InformacionExpedientePacienteComponent;
  let fixture: ComponentFixture<InformacionExpedientePacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformacionExpedientePacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacionExpedientePacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
