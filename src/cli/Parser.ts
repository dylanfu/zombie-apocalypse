import EMove from '../types/enums/EMove'
import ICoordinate from '../types/interfaces/ICoordinate'

export const parseCoordinate = (input: string): ICoordinate => {
  const [x, y] = input.split(',')
  return { x: parseInt(x), y: parseInt(y) }
}

export const parseCoordinateList = (input: string): Array<ICoordinate> => {
  const coordinatesList = input.split(' ')
  return coordinatesList.map((coord) => {
    return parseCoordinate(coord)
  })
}

export const parseMoves = (input: string): Array<EMove> => {
  const moves = input.split('')
  return moves.map((move) => {
    switch (move) {
      case 'L':
        return EMove.LEFT
      case 'R':
        return EMove.RIGHT
      case 'U':
        return EMove.UP
      default:
        return EMove.DOWN
    }
  })
}
