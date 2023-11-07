import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url: string = 'http://localhost:8000/api/paciente';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  getPacientes(_idDoc : string){
    return this.http.get(this.url + '/pacientes/'+_idDoc, this.httpOptions)
  }

  getAllPacientes(){
    return this.http.get(this.url + '/all-pacientes', this.httpOptions)
  }

  getInfoPaciente(idPaciente: string){
    return this.http.get(this.url + '/info-paciente/'+idPaciente, this.httpOptions)
  }
  updateExpediente(idPaciente: string, MedRecBackground: string, MedRecNumber: number, MedRecPhyExam: string, MedRecResults: string, MedRecTreatment: string ){
    return this.http.put(this.url + '/updateExpediente/'+idPaciente, {idPaciente, MedRecBackground, MedRecNumber, MedRecPhyExam, MedRecResults, MedRecTreatment}, this.httpOptions)
  }
}
