import EMove from '../types/enums/EMove'
import ICharacter from '../types/interfaces/ICharacter'
import IGrid from '../types/interfaces/IGrid'

export const move = (grid: IGrid, zombie: ICharacter, move: EMove): void => {
  const coordinate = zombie.getCoordinate()
  const newCoordinate = grid.getNextCoordinate(coordinate, move)

  zombie.setCoordinate(newCoordinate)
}
