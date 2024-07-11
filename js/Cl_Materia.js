export default class Cl_Materia {
    constructor() {
        this.contAp = 0;
        this.contRe = 0;
        this.acumN=0;
        this.contE=0;
      
    }
    procesarEstudiante(est) {
        this.contE++;
        this.acumN+=est.notaF;
        if (est.notaF>=48) {
            this.contAp++;}
            if (est.notaF<48) {
                this.contRe++;}
}
    promNS(){
        return this.acumN/this.contE;
    }
    devolverContAp(){
        return this.contAp;
    }
    devolverContRe(){
        return this.contRe;
    }
}