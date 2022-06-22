import ICoordinate from "./ICoordinate"

export default interface ICoordinateResults {
  zombieCoordinates: Array<ICoordinate>
  creatureCoordinates: Array<ICoordinate>
}