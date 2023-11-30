export class Ordonnance {
    [x: string]: string;
    numord:string;
    prepa:string;
    telpat:string;
    texte:string;
    constructor(ord: { numord: string; prepa: string; telpat: string; texte: string; }){
        this.numord=ord.numord;
        this.prepa=ord.prepa;
        this.telpat=ord.telpat;
        this.texte=ord.texte;

    }
}
