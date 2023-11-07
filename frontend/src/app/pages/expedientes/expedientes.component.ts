import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  hojaSeleccionada: any;
  modalVisible: boolean = false;
  citaElegida: any;
  modalVisibleCita: boolean = false;

  constructor(private route: ActivatedRoute, private pacienteService:PacienteService, private citaPaciente: CitaService, private diarioEmbarazadaService: DiarioEmbarazadaService ){ }

  openModal(hoja: any) {
    this.hojaSeleccionada = hoja;
    this.modalVisible = true;
  }

  openModalCita(cita: any) {
    this.citaElegida = cita;
    this.modalVisibleCita = true;
  }

 
  closeModal() {
    this.modalVisible = false;
  }

  ngOnInit(): void {
    let _idDoc = localStorage.getItem('idUser');
    // console.log(_idDoc)
    if(_idDoc != null){
      this.pacienteService.getPacientes(_idDoc).subscribe(data => {
        // console.log(data)
         this.pacientes = data as Paciente[];
         this.route.params.subscribe(params => {
          const id = params['id'];
          if (id) {
            // Realiza la acción que deseas solo si hay un parámetro 'id' presente
            // console.log('ID del expediente:', id);
            // console.log(this.pacientes)
            let pacient = this.pacientes.find(paciente => paciente.id == id);
            // console.log(pacient)
            if (pacient) {
              this.pacienteSeleccionada = pacient
              this.getInfoPaciente()
            } else {
              console.log('No se encontró ningún paciente con el ID proporcionado.');
            }
          }
        });
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