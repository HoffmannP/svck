import { Landschaft } from "./Landschaft";

export interface Bank {
    landschaften: Landschaft[]
    strassen: Number,
    doerfer: Number,
    staedte: Number
}

export class Bank {
    constructor (landschaften: Landschaft[], strassen: number, doerfer: number, staedte: number) {
        this.landschaften = landschaften
        this.strassen = strassen
        this.doerfer = doerfer
        this.staedte = staedte
    }
}