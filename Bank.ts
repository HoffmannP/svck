import { Landschaft } from "./Landschaft";

export class Bank {
    landschaften: Landschaft[]
    strassen: number
    doerfer: number
    staedte: number

    constructor (landschaften: Landschaft[], strassen: number, doerfer: number, staedte: number) {
        this.landschaften = landschaften
        this.strassen = strassen
        this.doerfer = doerfer
        this.staedte = staedte
    }
}