import * as CryptoJS from 'crypto-js';

/**
 * Clase de utilidad para encriptar y desencriptar datos utilizando el algoritmo AES.
 */
export class Crypto {
    /**
     * Clave de encriptación en formato hexadecimal.
     */
    private key = CryptoJS.enc.Hex.parse('23Sr3YuUc4ttANnSsIs3g');
    
     /**
     * Vector de inicialización en formato hexadecimal.
     */
    private iv = CryptoJS.enc.Hex.parse('101112131415161718191a1b1c1d1e1f'); // IV en formato hexadecimal

    /**
     * Encripta un texto utilizando el algoritmo AES.
     * @param text Texto a encriptar.
     * @returns Texto encriptado.
     */
    public encrypted(text: string): string {
        return (CryptoJS.AES.encrypt(text, this.key,{iv:this.iv})).toString();
    }

    /**
     * Desencripta un texto encriptado utilizando el algoritmo AES.
     * @param text Texto encriptado.
     * @returns Texto desencriptado.
     */
      
    public decrypted(text: string): string {
        return (CryptoJS.AES.decrypt(text, this.key)).toString(CryptoJS.enc.Utf8);;

    }  
}