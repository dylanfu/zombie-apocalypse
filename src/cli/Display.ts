import ICoordinateResults from '../types/interfaces/ICoordinateResults'
import Logger from '../util/Logger'

export const displaySimulatorResult = (results: ICoordinateResults) => {
  Logger.info(`
    zombies\` coordinates: 
    ${results.zombieCoordinates
      .map((zombie) => `(${zombie.x},${zombie.y})`)
      .join(' ')}
    creatures\` coordinates: 
    ${
      results.creatureCoordinates
        .map((creature) => `(${creature.x},${creature.y})`)
        .join(' ') || 'none'
    }
  `)
}
