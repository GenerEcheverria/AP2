import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CitaService } from '../../services/cita.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  citaForm: FormGroup;
  doctores: string[] = ["Gener", "Raul"];
  idPatient: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService, private citaService: CitaService) {
    this.citaForm = this.fb.group({
      idDoctor: [''],
      idPatient:[],
      date: ['',],
      time: ['']
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  onSubmit() {
    let informacionCita = JSON.stringify(this.citaForm.value);
    this.citaService.crearCita(informacionCita);
  }

  private getUserInfo(){
    this.authService.me().subscribe(data => {
      this.idPatient = data.id;
      console.log("este valor es de pregnant cuando hace get userinfo"+this.idPatient);
      this.citaForm.patchValue({
        idPatient: this.idPatient
      });
    })
  }
}