import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent {
  citaForm: FormGroup;
  idPatient: string = "";
  horasLaborales: string[] = ['08:00:00','09:00:00', '10:00:00', '11:00:00', '12:00:00', '14:00:00', '15:00:00','16:00:00'];
  horasNoOcupadas!: string[];
  
  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      idDoctor: [localStorage.getItem('idDoctor')],
      idPatient:[localStorage.getItem('idPatient')],
      date: [''],
      time: ['']
    });
  }

  availableTime(){
    const _dateValue = this.citaForm.get('date')?.value;
    const _idDoc = this.citaForm.get('idDoctor')?.value;
    let dateSelectedInfo = JSON.stringify({dateValue: _dateValue, idDoc: _idDoc});

    this.citaService.availableTime(dateSelectedInfo).subscribe(
      (response) => {
        const horasOcupadas = response as any[];
        this.horasNoOcupadas = this.horasLaborales.filter(hora => !horasOcupadas.includes(hora));
      }
    )
  }

  onSubmit() {
    let informacionCita = JSON.stringify(this.citaForm.value);
    console.log("Ya voy a mandar la info");
    this.citaService.crearCita(informacionCita).subscribe(data => {
      console.log(data);
    })
  }
}