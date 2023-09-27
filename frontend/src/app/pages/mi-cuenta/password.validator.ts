import { AbstractControl } from '@angular/forms';

/**
 * Validador personalizado para comparar contraseñas.
 * Verifica si las contraseñas ingresadas en los campos 'npass' y 'cpass' son iguales.
 * @param control Control del formulario que contiene los campos de contraseña y confirmación de contraseña.
 * @returns Objeto con la clave 'passwordsDoNotMatch' si las contraseñas no coinciden, o null si son iguales.
 */
export function passwordValidator(control: AbstractControl): {[key: string]: boolean} | null {
  const password = control.get('npass');
  const confirmPassword = control.get('cpass');

  if (password && confirmPassword && password.value !== confirmPassword.value) {
    return { 'passwordsDoNotMatch': true };
  }

  return null;
}