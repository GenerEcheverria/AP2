import { Component, Input } from '@angular/core';

/**
 * Componente del encabezado de la aplicación.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
   /**
   * Nombre para mostrar en el encabezado.
   */
  @Input() name: string ="";
  @Input() photo: string ="";
}
