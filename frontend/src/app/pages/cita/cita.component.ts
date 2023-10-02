import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.css']
})
export class CitaComponent implements OnInit {
  citaForm: FormGroup;
  doctores: string[] = ["Gener", "Raul"];
  idPregnant: string = "";

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.citaForm = this.fb.group({
      IdDoctor: [''],
      IdPregnant:[],
      Date: ['',],
      Time: ['']
    });
  }

  ngOnInit(): void {
    this.getUserInfo();
    
}

  onSubmit() {
    console.log(this.citaForm + "id preñada:");
    console.log(this.citaForm);
  }

  private getUserInfo(){
    this.authService.me().subscribe(data => {
      this.idPregnant = data.id;
      console.log("este valor es de pregnant cuando hace get userinfo"+this.idPregnant);
      this.citaForm.patchValue({
        IdPregnant: this.idPregnant
      });
    })
  }
}