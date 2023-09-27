import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Servicio para realizar operaciones relacionadas con la cuenta del usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class MiCuentaService {
  url: string = 'http://localhost:8000/api';

  /**
   * Constructor del servicio MiCuentaService.
   * @param http Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  /**
   * Actualiza la cuenta del usuario.
   * @param cuenta Información de la cuenta a actualizar.
   * @param id Identificador del usuario.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  miCuenta(cuenta: any, id: string) {
    return this.http.put<any>(this.url + '/account/users/'+id, { cuenta, id }, this.httpOptions);
  }
}
