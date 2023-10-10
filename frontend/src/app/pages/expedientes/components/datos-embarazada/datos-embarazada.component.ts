import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-datos-embarazada',
  templateUrl: './datos-embarazada.component.html',
  styleUrls: ['./datos-embarazada.component.css']
})
export class DatosEmbarazadaComponent {
  @Input() nombre: string =""
  @Input() edad!: number;
  @Input() curp: string =""
  @Input() estadoCivil: string =""
  @Input() ocupacion: string =""
  @Input() estado: string =""
  @Input() municipio: string =""
  @Input() localidad: string =""
  @Input() direccion: string =""
}
