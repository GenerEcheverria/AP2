import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-informacion-cita',
  templateUrl: './informacion-cita.component.html',
  styleUrls: ['./informacion-cita.component.css']
})
export class InformacionCitaComponent {
  @Input() dia: string = ""
  @Input() hora: string = "";
}
