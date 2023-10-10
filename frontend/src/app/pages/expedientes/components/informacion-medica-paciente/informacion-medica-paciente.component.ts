import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-medica-paciente',
  templateUrl: './informacion-medica-paciente.component.html',
  styleUrls: ['./informacion-medica-paciente.component.css']
})
export class InformacionMedicaPacienteComponent {
  @Input() fecha: string = ""
  @Input() titulo: string = ""
}
