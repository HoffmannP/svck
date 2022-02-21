import { Kosten, Rohstoff, Siedlungstyp } from "./Lib"

export interface Ausbau {
    readonly kosten: Kosten
    readonly aktion: Function
}

export interface Ritter extends Ausbau {
    readonly handschuhe: number,
    readonly koepfe: number
}

export interface Flotte extends Ausbau {
    readonly rohstoff: Rohstoff
}

export interface Bauwerk extends Ausbau {
    readonly kloster_bibliothek_universitaet: boolean
    readonly ist_lager: boolean
    readonly nur_stadt: boolean
}