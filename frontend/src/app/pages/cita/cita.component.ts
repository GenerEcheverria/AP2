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
  doctores: string[] = ["1"];
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
    console.log("Ya voy a mandar la info");
    this.citaService.crearCita(informacionCita).subscribe(data => {
      console.log(data);
    })
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