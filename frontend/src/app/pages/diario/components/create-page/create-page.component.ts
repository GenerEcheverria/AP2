import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DiarioEmbarazadaService } from 'src/app/services/diario-embarazada.service';

@Component({
  selector: 'app-create-page',
  templateUrl: './create-page.component.html',
  styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent {
  @Input() listPages!: Function;
  diarioForm: FormGroup;
  showSuccessAlert = false;

  constructor(private fb: FormBuilder, private diarioEmbarazadaService: DiarioEmbarazadaService) {
    this.diarioForm = this.fb.group({
      idUser:[localStorage.getItem('idUser')],
      titulo: ['', [Validators.required]], 
      comentario: ['', [Validators.required]]
    });
  }

  onSubmit() {
    let informacionPagina = JSON.stringify(this.diarioForm.value);

    this.diarioEmbarazadaService.crearPaginaDiario(informacionPagina).subscribe(() => {
      this.showAlert()
      this.diarioForm.get('titulo')?.reset('');
      this.diarioForm.get('comentario')?.reset('');
      this.listPages()
    })
  }

  showAlert() {
    this.showSuccessAlert = true;
  }

  hideAlert() {
    this.showSuccessAlert = false;
  }
}
