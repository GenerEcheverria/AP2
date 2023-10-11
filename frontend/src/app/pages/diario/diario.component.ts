import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiarioEmbarazadaService } from '../../services/diario-embarazada.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {
  diarioForm: FormGroup;
  showSuccessAlert = false;

  constructor(private fb: FormBuilder, private diarioEmbarazadaService: DiarioEmbarazadaService) {
    this.diarioForm = this.fb.group({
      idUser:[localStorage.getItem('idUser')],
      titulo: [''],
      comentario:['']
    });
  }

  onSubmit() {
    let informacionPagina = JSON.stringify(this.diarioForm.value);

    this.diarioEmbarazadaService.crearPaginaDiario(informacionPagina).subscribe(() => {
      this.showAlert()
      this.diarioForm.get('titulo')?.reset('');
      this.diarioForm.get('comentario')?.reset('');
    })
  }

  showAlert() {
    this.showSuccessAlert = true;
  }

  hideAlert() {
    this.showSuccessAlert = false;
  }
}