import EMove from "../enums/EMove";
import ICoordinate from "./ICoordinate";

export default interface IGrid {
  isValidCoordinate: (coordinate: ICoordinate) => boolean
  getNextCoordinate: (coordinate: ICoordinate, move: EMove) => ICoordinate
}