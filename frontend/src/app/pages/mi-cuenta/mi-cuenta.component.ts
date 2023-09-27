import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { passwordValidator } from './password.validator';
import { AuthService } from 'src/app/services/auth.service';
import { MiCuentaService } from 'src/app/services/mi-cuenta.service';
import { Router } from '@angular/router';
import { Cuenta } from 'src/app/interfaces/cuenta';

/**
 * Componente encargado de administrar la cuenta del usuario.
 */
@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css']
})
export class MiCuentaComponent implements OnInit {
  public form1!: FormGroup;

  /**
   * Formulario para el cambio de contraseña del usuario.
   */
  public form2!: FormGroup;
  public datosCuenta: any[] = [];
  public userData: any;
  public idUser: string = "";
  public nameUser: string = "";
  public emailUser: string = "";
  public phoneUser: string = "";
  
    /**
   * Constructor del componente MiCuentaComponent.
   * @param formBuilder Instancia del FormBuilder utilizado para crear los formularios.
   * @param authService Servicio de autenticación.
   * @param router Enrutador de la aplicación.
   * @param cuenta Servicio para administrar la cuenta.
   */
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private cuenta: MiCuentaService){}

  /**
   * Método de ciclo de vida de Angular que se ejecuta al iniciar el componente.
   * Se encarga de inicializar los formularios y definir las validaciones.
   */
  ngOnInit(): void {
    this.form1 = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', [Validators.required, Validators.pattern('^((\\+52-?)|0)?[0-9]{10}$')]]
    })
    this.form2 = this.formBuilder.group({
      npass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]],
      cpass: ['', [Validators.required, Validators.maxLength(32), Validators.minLength(8)]]
    }, { validator: passwordValidator })

    this.authService.me().subscribe(data => {
      this.userData = data;
      this.idUser = data.id;
    
      this.form1.patchValue({
        nombre: data.name,
        tel: data.phone,
        email: data.email,        
      });
    });
    
  }

  /**
   * Método que se ejecuta al enviar el formulario de datos de cuenta.
   * Guarda los cambios realizados en la cuenta del usuario.
   */
  onSubmitDatos() {
    const sitioForm = this.form1.value;
    sitioForm.url = sitioForm.name;
    sitioForm.views = 0;
    console.log("Sitio forme es: "+sitioForm);
    this.cuenta.miCuenta(sitioForm, this.idUser).subscribe(
      (response) => {
        this.router.navigate(['/misSitios']);
      },
      (error) => {
        console.error(JSON.stringify(JSON.parse(error), null, 2));
      }
    );
  }

  /**
   * Método que se ejecuta al enviar el formulario de cambio de contraseñas.
   * Guarda la nueva contraseña del usuario.
   */
  onSubmitContrasenas(){
    const sitioForm = this.form2.value;
    sitioForm.url = sitioForm.name;
    sitioForm.views = 0;
    console.log("Sitio forme es: "+sitioForm);
    this.cuenta.miCuenta(sitioForm, this.idUser).subscribe(
      (response) => {
        this.router.navigate(['/misSitios']);
      },
      (error) => {
        console.error(JSON.stringify(JSON.parse(error), null, 2));
      }
    );
  }
}
