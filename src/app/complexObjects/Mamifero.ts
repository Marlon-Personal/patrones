import { Vertebrado } from './Vertebrado';

export class Mamifero extends Vertebrado {
    private _TipoAlimentacion:String;
    private _TipoMovimiento:String;
    private _Habitat: String;
    private _TipoPiel: String;
  
    /************************************************************************************
     * Funcion:     Constructor
     * Parametros:  pNombre: String, 
     *              pSonido: String, 
     *              pTipo_esqueleto: String, 
     *              pCantidad_extremidades: Number
     * Descripcion: Crea un objeto de tipo vertebrado con los valores que vienen por parametro
     * Return:      N/A
     ************************************************************************************/
    constructor(pNombre: String, pSonido: String, pTipo_esqueleto: String, pCantidad_extremidades: Number, pAlimentacion: String, pMovimiento: String, pHabitat: String, pTipoPiel: String) {
        super(pNombre, pSonido, pTipo_esqueleto, pCantidad_extremidades);
        this.TipoAlimentacion = pAlimentacion;
        this.TipoMovimiento = pMovimiento;
        this.TipoHabitat = pHabitat;
        this.TipoPiel = pTipoPiel;
    }

    /************************************************************************************
     * Funcion:     Set TipoAlimentacion
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoAlimentacion
     * Return:      N/A
     ************************************************************************************/
    set TipoAlimentacion(val: String){
        this._TipoAlimentacion = val;
    }
    
    /************************************************************************************
     * Funcion:     Set TipoMovimiento
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoMovimiento
     * Return:      N/A
     ************************************************************************************/
    set TipoMovimiento(val: String){
        this._TipoMovimiento = val;
    }

    /************************************************************************************
     * Funcion:     Set TipoPiel
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoPiel
     * Return:      N/A
     ************************************************************************************/
    set TipoPiel(val: String){
        this._TipoPiel = val;
    }

        /************************************************************************************
     * Funcion:     Set TipoHabitat
     * Parametros:  val: String
     * Descripcion: Agrega el valor a la variable _TipoHabitat
     * Return:      N/A
     ************************************************************************************/

    set TipoHabitat(val: String){
        this._Habitat = val;
    }
    /************************************************************************************
     * Funcion:     get TipoAlimentacion
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoAlimentacion, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Alimentacion(){ 
        return  "Nuestro " + this.Nombre.toLowerCase() + " es "+this._TipoAlimentacion; 
    }

    /************************************************************************************
     * Funcion:     get TipoHabitat
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoHabitat, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Habitat(){ 
        return  "Nuestro " + this.Nombre.toLowerCase() + " vive en "+this._Habitat; 
    }

      /************************************************************************************
     * Funcion:     get TipoHabitat
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoHabitat, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Piel(){ 
        return  "Nuestro " + this.Nombre.toLowerCase() + " tiene tipo de piel "+this._TipoPiel; 
    }

    /************************************************************************************
     * Funcion:     Comunicacion
     * Parametros:  N/A
     * Descripcion: Obtiene el valor de la variable Sonido guardada en el padre
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Comunicacion(){ 
        return "El sonido del " + this.Nombre.toLowerCase() + " que emite es: " + this.Sonido; 
    }

    /************************************************************************************
     * Funcion:     get TipoMovimiento
     * Parametros:  N/A
     * Descripcion: Devuelve el valor en la variable _TipoMovimiento, con formato.
     * Return:      Valor de la variable con formato
     ************************************************************************************/
    Movimiento(){ 
        return "El movimiento del " + this.Nombre.toLowerCase()  + " es: " + this._TipoMovimiento;  
    }

    /************************************************************************************
     * Funcion:     sumary
     * Parametros:  n/a
     * Descripcion: muestra un texto con los valores de nuestras clases. Llama a su padre
     * Return:      String con los datos del animal
     ************************************************************************************/
    sumary(){
        let mSuperMessage = super.summary();
        return mSuperMessage + ". " + this.Alimentacion() + this.Comunicacion() + this.Movimiento();
    }
}