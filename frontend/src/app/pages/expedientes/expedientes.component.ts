import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../services/paciente.service';
import { CitaService } from '../../services/cita.service';
import { DiarioEmbarazadaService } from '../../services/diario-embarazada.service';
import { Paciente } from '../../interfaces/paciente';
import { Cita } from '../../interfaces/cita';
import { DiarioEmbarazada } from '../../interfaces/diario-embarazada';

@Component({
  selector: 'app-expedientes',
  templateUrl: './expedientes.component.html',
  styleUrls: ['./expedientes.component.css']
})
export class ExpedientesComponent implements OnInit {
  pacientes!: Paciente[] ;
  pacienteSeleccionada!: Paciente;
  citas!: Cita[];
  diario!: DiarioEmbarazada[];
  infoPaciente!: any[];
  citaSeleccionada!: Cita;


  constructor(private pacienteService:PacienteService, private citaPaciente: CitaService, private diarioEmbarazadaService: DiarioEmbarazadaService ){ }

  ngOnInit(): void {
    let _idDoc = localStorage.getItem('idUser');
    if(_idDoc != null){
      this.pacienteService.getPacientes(_idDoc).subscribe(data => {
         this.pacientes = data as Paciente[];
      })
    }
  }

  getInfoPaciente() {
    this.citaPaciente.getCitasPacienteById(this.pacienteSeleccionada.id).subscribe(data => {
      this.citas = data as Cita[];
    });
    this.diarioEmbarazadaService.getHojasDiarioById(this.pacienteSeleccionada.id).subscribe(data => {
      this.diario = data as DiarioEmbarazada[];
    });
  }
}