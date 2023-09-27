import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

/**
 * Componente para el diseño principal de la aplicación.
 */
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit{
  protected name!: string;
  protected photo!: string;
  protected userRole!: string|null;
  
  /**
   * Constructor del componente MainLayoutComponent.
   * @param authService Servicio de autenticación utilizado para obtener información del usuario.
   */
  constructor(private authService: AuthService){}
  
  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
      this.getUserInfo();
      this.userRole = localStorage.getItem('role');
  }

   /**
   * Método privado para obtener la información del usuario.
   */
  private getUserInfo(){
    this.authService.me().subscribe(data => {
      this.name = data.name;
      this.photo = data.photo;
      const img = new Image();
      img.src = this.photo;
      img.onerror = () => {
        this.photo = "../../../assets/images/default-user.png"
      }
    })
  }
}
