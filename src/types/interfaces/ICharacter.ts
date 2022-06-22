import ICoordinate from "./ICoordinate";

export default interface ICharacter {
  setCoordinate: (coordinate: ICoordinate) => void
  getCoordinate: () => ICoordinate
}