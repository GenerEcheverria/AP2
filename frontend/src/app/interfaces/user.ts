/**
 * Interfaz que representa a un usuario.
 * 
 * @interface User
 * @description
 * La interfaz User define la estructura de un objeto usuario.
 */
export interface User {
    /**
   * El nombre del usuario.
   * 
   * @property {string} name
   */
    name: string,

     /**
   * El correo electrónico del usuario.
   * 
   * @property {string} email
   */
    email: string,

    /**
   * La contraseña del usuario.
   * 
   * @property {string} password
   */
    password: string,

    /**
   * El rol del usuario.
   * 
   * @property {string} role
   */
    role: string,

    /**
   * El número de teléfono del usuario.
   * 
   * @property {string} phone
   */
    phone: string,
}