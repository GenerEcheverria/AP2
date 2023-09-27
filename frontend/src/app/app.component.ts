import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

/**
 * Componente raíz de la aplicación.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Título de la aplicación.
   */
  title = 'frontend';
}
