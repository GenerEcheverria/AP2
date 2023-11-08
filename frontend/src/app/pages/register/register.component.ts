import { formatNumber } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/interfaces/user';
import { Crypto } from 'src/app/util/crypto';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import { Paciente } from 'src/app/interfaces/paciente';

/**
 * Componente para el registro de usuarios.
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  /**
   * Formulario de registro.
   */
  public formRegisterPatient!: FormGroup;

   /**
   * Contraseña ingresada por el usuario.
   */
  public pass: string = ''

  /**
   * Confirmación de contraseña ingresada por el usuario.
   */
  public pass2: string = ''

  /**
   * Fuente de imagen para mostrar la vista previa.
   */
  public imageSrc: string = '';

  /**
   * Instancia de la clase Crypto para encriptar contraseñas.
   */
  private crypto = new Crypto;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

  /**
   * Se ejecuta al inicializar el componente.
   * Se configura el formulario de registro con las validaciones correspondientes.
   */
  ngOnInit(): void {
    this.formRegisterPatient = this.formBuilder.group({
      Nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, this.emailValidator()]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      edad: ['',  [Validators.required, ]],
      curp: ['', [Validators.required, Validators.minLength(18), Validators.maxLength(18)]],
      estadoCivil: ['', [Validators.required,]],
      ocupacion: ['', [Validators.required]],
      estado: ['', [Validators.required, ]],
      municipio: ['', [Validators.required]],
      localidad: ['', [Validators.required]],
      direccion: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]}, { validator: this.passwordsMatchValidator }); 
  }

  passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if(password != "" && confirmPassword !=""){
      if (password && confirmPassword && password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
    }
  }
  
  
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { emailInvalid: true };
    };
  }


   /**
   * Método para enviar el formulario de registro.
   * Se obtienen los valores ingresados por el usuario y se realiza el registro llamando al servicio de autenticación.
   */
  onSubmit() {
    const patient = this.formRegisterPatient.value;
    const newUser:Paciente = {
      name: patient.Nombre,
      sex: "Mujer",
      email: patient.email,
      password: this.crypto.encrypted(patient.password),
      role: "Patient",
      phone: patient.telefono,
      id: '',
      age: patient.edad,
      curp: patient.curp,
      maritalStatus: patient.estadoCivil,
      occupation: patient.ocupacion,
      state: patient.estado,
      municipality: patient.municipio,
      locality: patient.localidad,
      address: patient.direccion,
      MedRecBackground: '',
      MedRecDiagnostic: '',
      MedRecNumber: 0,
      MedRecPhyExam: '',
      MedRecResults: '',
      MedRecTreatment: ''
    }
    
    this.authService.register(newUser).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
    this.router.navigate(['/login']);

  }
}