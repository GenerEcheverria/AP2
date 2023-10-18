import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Crypto } from '../util/crypto';
import { Paciente } from '../interfaces/paciente';

/**
 * Servicio de autenticación y gestión de usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url: string = 'http://localhost:8000/api/auth';
  private crypto = new Crypto;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

   /**
   * Registra un nuevo usuario.
   * @param name Nombre del usuario.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @param role Rol del usuario.
   * @param phone Número de teléfono del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  register(patient:Paciente) {
    console.log(patient)
    return this.http.post<any>(this.url + '/register-patient', patient, this.httpOptions);
  }

  /**
   * Inicia sesión con las credenciales proporcionadas.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  login(email: string, password: string) {
    return this.http.post<any>(this.url + '/login', { email, password });
  }

  /**
   * Obtiene la información del usuario actualmente autenticado.
   * @returns Observable que representa la información del usuario.
   */
  me(){
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.url+'/me', {},httpOptions);
  }

  /**
   * Cierra la sesión del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  logout() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post<any>(this.url + '/logout', {},httpOptions);
  }

  /**
   * Obtiene el token de autenticación almacenado en el almacenamiento local.
   * @returns El token de autenticación o null si no está presente.
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Comprueba si el usuario ha iniciado sesión.
   * @returns Observable que indica si el usuario ha iniciado sesión o no.
   */
  isLoggedIn() {
    const token = this.getToken();
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
      return this.http.get<any>(this.url + `/check`, httpOptions);
    }
    return of({ valid: false });
  }

   /**
   * Establece los roles del usuario en el almacenamiento local.
   * @param role Rol del usuario.
   */
  public setUserRoles(role: string) {
    localStorage.setItem('role', role);
  }

  /**
   * Comprueba si el usuario tiene el rol especificado.
   * @param requiredRole Rol requerido.
   * @returns True si el usuario tiene el rol, False en caso contrario.
   */
  public hasRole(requiredRole: string): boolean {
    const userRole: string | null = localStorage.getItem('role');
    if (userRole) {
      return userRole===requiredRole;
    }
    return false;
  }
  

}
