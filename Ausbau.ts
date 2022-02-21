import { Kosten, Rohstoff, Siedlungstyp } from "./Lib"

export interface Ausbau {
    readonly kosten: Kosten
    readonly aktion: Function
}

export interface Ritter extends Ausbau {
    handschuhe: number,
    koepfe: number
}

export interface Flotte extends Ausbau {
    rohstoff: Rohstoff
}

export interface Bauwerk extends Ausbau {
    kloster_bibliothek_universitaet: boolean
    ist_lager: boolean
    nur_stadt: boolean
}