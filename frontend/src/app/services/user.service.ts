import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Servicio para realizar operaciones relacionadas con usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: string = 'http://localhost:8000/api/account';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  /**
   * Constructor del servicio UserService.
   * @param http Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) { }

  /**
   * Obtiene la información de un usuario.
   * @param id Identificador del usuario a obtener.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getUser(id: string) {
    return this.http.get<any>(this.url + '/users/'+id, this.httpOptions);
  }

  /**
   * Elimina un usuario.
   * @param id Identificador del usuario a eliminar.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  deleteUser(id: string) {
    return this.http.delete<any>(this.url + '/users/'+id, this.httpOptions);
  }
}
