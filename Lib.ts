import { Ausbau } from "./Ausbau"

export enum Rohstoff {
    Getreide,
    Erz,
    Wolle,
    Holz,
    Lehm,
    Gold
}

export enum Siedlungstyp {
    Strasse,
    Dorf,
    Stadt
}

export interface Kost {
    rohstoff: Rohstoff,
    anzahl: Number
}

export type Kosten = Kost[]

export type Aktionskarte = Function
export type Karte = Aktionskarte | Ausbau
export type Kartenstapel = Karte[]

export type Ereigniskarte = Function
export type Ereigniskarten = Ereigniskarte[]
