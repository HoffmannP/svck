import { Siedlungstyp } from './Lib'
import { Ausbau } from './Ausbau'
import { Landschaft } from './Landschaft'

export class Siedlung {
    typ: Siedlungstyp
    ausbauten: Ausbau[]
    landschaften: Landschaft[]
    nachbar: Siedlung

    constructor (typ: Siedlungstyp, ausbauten: Ausbau[], landschaften: Landschaft[], nachbar: Siedlung) {
    this.typ = typ
    this.ausbauten = ausbauten
    this.landschaften = landschaften
    this.nachbar = nachbar
  }
}
