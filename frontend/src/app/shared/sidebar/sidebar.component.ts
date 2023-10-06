import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Componente de la barra lateral de la aplicación.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() role!: string|null;

  constructor(private authService: AuthService, private router: Router) { }

  
  /**
   * Cierra la sesión del usuario y redirige al inicio de sesión.
   */
  logout(){
    this.authService.logout().subscribe(
      (response) => {
        localStorage.removeItem('idDoctor');
        localStorage.removeItem('idPatient');
        localStorage.removeItem('idUser');
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
