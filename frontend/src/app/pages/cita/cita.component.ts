import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CitaService } from '../../services/cita.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit{
  citaForm: FormGroup;
  idPatient: string = "";
  horasLaborales: string[] = ['08:00:00','08:30:00','09:00:00', '09:30:00','10:00:00',
  '10:30:00','11:00:00','11:30:00','12:00:00','12:30:00', '14:00:00','14:30:00',
  '15:00:00', '15:30:00', '16:00:00','16:30:00', '17:00:00','17:30:00', '18:00:00'];
  horasNoOcupadas!: string[];
  doctores!: any[];
  showSuccessAlert = false;
  
  constructor(private fb: FormBuilder, private citaService: CitaService, private doctorService: DoctorService) {
    this.citaForm = this.fb.group({
      idDoctor: [''],
      idPatient:[localStorage.getItem('idUser')],
      date: [''],
      time: ['']
    });
  }

  onSubmit() {
    let informacionCita = JSON.stringify(this.citaForm.value);
    this.citaService.crearCita(informacionCita).subscribe(data => {
      this.showAlert()
      this.citaForm.get('date')?.reset('');
      this.citaForm.get('time')?.reset('');
    })
  }

  ngOnInit(): void {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctores = data as [];
    })
  }

  availableTime(){
    const _dateValue = this.citaForm.get('date')?.value;
    const _idDoc = this.citaForm.get('idDoctor')?.value;
    let dateSelectedInfo = JSON.stringify({dateValue: _dateValue, idDoc: _idDoc});

    console.log(dateSelectedInfo)
    this.citaService.availableTime(dateSelectedInfo).subscribe(
      (response) => {
        const horasOcupadas = response as any[];
        if(horasOcupadas.length == 14){
          alert("No hay citas disponibles para el día seleccionado")
        }else{
          this.horasNoOcupadas = this.horasLaborales.filter(hora => !horasOcupadas.includes(hora));
        }
      }
    )
  }

  showAlert() {
    this.showSuccessAlert = true;
  }

  hideAlert() {
    this.showSuccessAlert = false;
  }
  
}