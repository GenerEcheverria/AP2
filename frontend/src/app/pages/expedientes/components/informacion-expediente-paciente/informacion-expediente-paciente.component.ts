import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-informacion-expediente-paciente',
  templateUrl: './informacion-expediente-paciente.component.html',
  styleUrls: ['./informacion-expediente-paciente.component.css']
})
export class InformacionExpedientePacienteComponent {
  @Input() MedRecBackground: string = ''
  @Input() MedRecDiagnostic: string = ''
  @Input() MedRecNumber: number = 0
  @Input() MedRecPhyExam: string = ''
  @Input() MedRecResults: string = ''
  @Input() MedRecTreatment: string = ''
  @Input() idUser: string = ''
  medRecForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private pacienteService:PacienteService) {
    this.medRecForm = this.formBuilder.group({
      idUser:[''],
      MedRecBackground: [''],
      MedRecDiagnostic: [''],
      MedRecNumber: [''],
      MedRecPhyExam: [''],
      MedRecResults: [''],
      MedRecTreatment: ['']
    });
  }
  ngOnChanges(changes: SimpleChanges) {
    this.medRecForm.patchValue({
      idUser: this.idUser,
      MedRecBackground: this.MedRecBackground !== null ? this.MedRecBackground : '',
      MedRecDiagnostic: this.MedRecDiagnostic !== null ? this.MedRecDiagnostic : '',
      MedRecNumber: this.MedRecNumber !== null ? this.MedRecNumber : '',
      MedRecPhyExam: this.MedRecPhyExam !== null ? this.MedRecPhyExam : '',
      MedRecResults: this.MedRecResults !== null ? this.MedRecResults : '',
      MedRecTreatment: this.MedRecTreatment !== null ? this.MedRecTreatment : ''
    });
  }
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log(this.data)
  //   if (changes['data'] && this.data) {
  //     if ('MedRecBackground' in this.data) {
  //       this.medRecForm.get('MedRecBackground')?.setValue(this.data.MedRecBackground);
  //     }
  //     if ('MedRecDiagnostic' in this.data) {
  //       this.medRecForm.get('MedRecDiagnostic')?.setValue(this.data.MedRecDiagnostic);
  //     }
  //     if ('MedRecNumber' in this.data) {
  //       this.medRecForm.get('MedRecNumber')?.setValue(this.data.MedRecNumber);
  //     }
  //     if ('MedRecPhyExam' in this.data) {
  //       this.medRecForm.get('MedRecPhyExam')?.setValue(this.data.MedRecPhyExam);
  //     }
  //     if ('MedRecResults' in this.data) {
  //       this.medRecForm.get('MedRecResults')?.setValue(this.data.MedRecResults);
  //     }
  //     if ('MedRecTreatment' in this.data) {
  //       this.medRecForm.get('MedRecTreatment')?.setValue(this.data.MedRecTreatment);
  //     }
  //   }
  // }

  onSubmit() {
    // const summaryControl = this.summaryForm.get('summary');
    // const prescriptionControl = this.summaryForm.get('prescription');
  
    // if (summaryControl && prescriptionControl) {
    //   const summary = summaryControl.value;
    //   const prescription = prescriptionControl.value;
  
    //   this.citaService.setSummary(this.idAppointment, summary, prescription).subscribe(() => {
    //     this.showAlert();
    //     summaryControl.reset('');
    //     prescriptionControl.reset('');
    //     this.summaryDoneReference()
    //   });
    // }

    // const formData = this.medRecForm.value;
    const MedRecBackground = this.medRecForm.get('MedRecBackground');
    const MedRecDiagnostic = this.medRecForm.get('MedRecDiagnostic')
    const MedRecNumber = this.medRecForm.get('MedRecNumber');
    const MedRecPhyExam = this.medRecForm.get('MedRecPhyExam');
    const MedRecResults = this.medRecForm.get('MedRecResults');
    const MedRecTreatment = this.medRecForm.get('MedRecTreatment');
    // console.log(formData);
    this.pacienteService.updateExpediente(this.idUser, MedRecBackground?.value, MedRecDiagnostic?.value, MedRecNumber?.value, MedRecPhyExam?.value, MedRecResults?.value, MedRecTreatment?.value ).subscribe(data => {
      console.log('se actualizo')
   })
  }
}
