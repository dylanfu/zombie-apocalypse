import EMove from "../enums/EMove";
import ICoordinate from "./ICoordinate";

export default interface IConfiguration {
  dimensions: number,
  zombieCoordinate: ICoordinate,
  creatureCoordinates: Array<ICoordinate>,
  moves: Array<EMove>
}