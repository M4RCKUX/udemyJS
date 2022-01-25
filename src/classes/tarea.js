
export class Tarea {

    constructor (txt, hecho, id, fechaInicio) {
        this.txt = txt;
        this.hecho = hecho || false;
        this.id =  id || new Date().getTime();
        this.fechaInicio = fechaInicio || new Date();
    }
    
}
