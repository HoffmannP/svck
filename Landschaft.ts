import { Rohstoff } from './Lib'
import { Ausbau } from './Ausbau'
import { Siedlung } from './Siedlung'

export class Landschaft {
  readonly rohstoff: Rohstoff
  readonly wuerfelzahl: number
  menge: number
  ausbau: Ausbau[]
  siedlungen: Siedlung[]

  constructor (rohstoff: Rohstoff, wuerfelzahl: number, menge: number, ausbau: Ausbau[], siedlungen: Siedlung[]) {
    this.rohstoff = rohstoff
    this.wuerfelzahl = wuerfelzahl
    this.menge = menge
    this.ausbau = ausbau
    this.siedlungen = siedlungen
  }
}