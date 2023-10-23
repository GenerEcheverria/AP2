import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CitaService } from 'src/app/services/cita.service';

@Component({
  selector: 'app-appointment-summary-form',
  templateUrl: './appointment-summary-form.component.html',
  styleUrls: ['./appointment-summary-form.component.css']
})
export class AppointmentSummaryFormComponent {
  @Input() idAppointment!: string
  summaryForm: FormGroup;
  showSuccessAlert = false;

  constructor(private fb: FormBuilder, private citaService: CitaService) {
    this.summaryForm = this.fb.group({
      summary: ['', [Validators.required]],
      prescription: ['', [Validators.required]]
    });
  }

  onSubmit() {
    const summaryControl = this.summaryForm.get('summary');
    const prescriptionControl = this.summaryForm.get('prescription');
  
    if (summaryControl && prescriptionControl) {
      const summary = summaryControl.value;
      const prescription = prescriptionControl.value;
  
      this.citaService.setSummary(this.idAppointment, summary, prescription).subscribe(() => {
        this.showAlert();
        summaryControl.reset('');
        prescriptionControl.reset('');
      });
    }
  }
  
  

  showAlert() {
    this.showSuccessAlert = true;
  }

  hideAlert() {
    this.showSuccessAlert = false;
  }
}
