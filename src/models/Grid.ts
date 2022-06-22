import EMove from '../types/enums/EMove'
import ICoordinate from '../types/interfaces/ICoordinate'
import IGrid from '../types/interfaces/IGrid'

export default class Grid implements IGrid {
  private rows: number
  private columns: number

  constructor(dimensions: number) {
    this.rows = dimensions
    this.columns = dimensions
  }

  public isValidCoordinate(coordinate: ICoordinate): boolean {
    return (
      coordinate.x >= 0 &&
      coordinate.x < this.columns &&
      coordinate.y >= 0 &&
      coordinate.y < this.rows
    )
  }

  private applyEdgeMove(coordinate: ICoordinate): ICoordinate {
    if (coordinate.x >= this.columns) {
      return { ...coordinate, x: 0 }
    } else if (coordinate.y >= this.rows) {
      return { ...coordinate, y: 0 }
    } else if (coordinate.x < 0) {
      return { ...coordinate, x: this.columns - 1 }
    } else if (coordinate.y < 0) {
      return { ...coordinate, y: this.rows - 1 }
    } else {
      return coordinate
    }
  }

  public getNextCoordinate(coordinate: ICoordinate, move: EMove): ICoordinate {
    const newCoordinate = {
      [EMove.LEFT]: { ...coordinate, x: coordinate.x - 1 },
      [EMove.RIGHT]: { ...coordinate, x: coordinate.x + 1 },
      [EMove.UP]: { ...coordinate, y: coordinate.y - 1 },
      [EMove.DOWN]: { ...coordinate, y: coordinate.y + 1 }
    }[move]

    return this.applyEdgeMove(newCoordinate)
  }
}
