import { Component, Input } from '@angular/core';

/**
 * Componente de una opción de menú para el sidebar.
 */
@Component({
  selector: 'app-menu-option',
  templateUrl: './menu-option.component.html',
  styleUrls: ['./menu-option.component.css']
})
//Boton generico para las opciones del sidebar
export class MenuOptionComponent {

  /**
   * Título de la opción de menú.
   */
  @Input() titulo: string =""

 /**
   * Enlace de la opción de menú.
   */
  @Input() link: string = ""

  /**
   * Icono de la opción de menú.
   */
  @Input() icon: string = ""
}
