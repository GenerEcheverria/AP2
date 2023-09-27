import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


/**
 * Guardia de ruta para validar roles de usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  /**
   * Constructor del guardia de ruta RoleGuard.
   * @param authService Servicio de autenticación para verificar los roles del usuario.
   * @param router Instancia de Router para redirigir a otras rutas.
   */
  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Método de canActivate para determinar si el usuario tiene los roles requeridos.
   * @param route Instantánea de ActivatedRouteSnapshot que representa la ruta actual.
   * @returns Valor booleano que indica si el usuario tiene los roles requeridos.
   */
  canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles: string[] = route.data['roles'];

    for (const role of requiredRoles) {
      if (this.authService.hasRole(role)) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }
}
