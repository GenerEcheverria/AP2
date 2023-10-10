import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-diario-paciente',
  templateUrl: './informacion-diario-paciente.component.html',
  styleUrls: ['./informacion-diario-paciente.component.css']
})
export class InformacionDiarioPacienteComponent {
  @Input() fechaDiario: string = ""
  @Input() tituloDiario: string = ""
}
