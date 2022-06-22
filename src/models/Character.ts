import ICharacter from '../types/interfaces/ICharacter'
import ICoordinate from '../types/interfaces/ICoordinate'

export default class Character implements ICharacter {
  private coordinate: ICoordinate

  constructor(coordinate: ICoordinate) {
    this.coordinate = coordinate
  }

  public getCoordinate(): ICoordinate {
    return this.coordinate
  }

  public setCoordinate(coordinate: ICoordinate): void {
    this.coordinate = coordinate
  }
}
