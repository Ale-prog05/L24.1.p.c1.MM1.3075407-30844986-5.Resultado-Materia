export default class Cl_Estudiante {
    constructor(c,nF){
        this.cedula = c;
        this.notaF=nF;
    }
    set cedula(c){
        this._cedula =+c;
    }
    get cedula(){
        return this._cedula;
    }
    set notaF(nF){
        this._notaF = +nF;
    }
    get notaF(){
        return this._notaF;
    }
    
}