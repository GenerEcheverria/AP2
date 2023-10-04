import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Crypto } from 'src/app/util/crypto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
   * Formulario de inicio de sesión.
   */
  public formLogin!: FormGroup;

   /**
   * Objeto para encriptar datos.
   */
  private crypto = new Crypto;

  /**
   * Constructor del componente.
   * @param formBuilder Objeto FormBuilder para construir formularios.
   * @param authService Servicio de autenticación.
   * @param router Objeto Router para la navegación.
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {}

   /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });  
  }

  
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { emailInvalid: true };
    };
  }

  /**
   * Método ejecutado al enviar el formulario de inicio de sesión.
   */
  onSubmit() {
    const formUser = this.formLogin.value;
    const user = {
      'email' : formUser.email,
      'password' : this.crypto.encrypted(formUser.password)
    } 
    this.authService.login(user.email, user.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.authService.setUserRoles(response.role);
        if (response.role === 'Doctor') {
          this.router.navigate(['/cita']);
        } else if (response.role === 'Patient') {
          this.router.navigate(['/mi-cuenta']);
        } else {
          // Redirigir a otra página en caso de otro tipo de usuario
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
