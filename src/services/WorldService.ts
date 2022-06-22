import EMove from '../types/enums/EMove'
import ZeroActiveZombiesError from '../types/errors/ZeroActiveZombiesError'
import ICharacter from '../types/interfaces/ICharacter'
import ICoordinate from '../types/interfaces/ICoordinate'
import IWorld from '../types/interfaces/IWorld'
import * as ZombieService from '../services/ZombieService'
import Logger from '../util/Logger'

export const getCurrentZombie = (world: IWorld): ICharacter => {
  const id = world.currentZombieId
  const zombies = world.zombies
  if (id < zombies.length) {
    return zombies[id]
  } else {
    throw new ZeroActiveZombiesError()
  }
}

export const moveZombie = (world: IWorld, move: EMove): void => {
  const zombie = getCurrentZombie(world)
  ZombieService.move(world.grid, zombie, move)
  Logger.info(
    `zombie ${world.currentZombieId} moved to (${zombie.getCoordinate().x},${
      zombie.getCoordinate().y
    })`
  )
}

export const getCreaturesAtCoordinate = (
  world: IWorld,
  coordinate: ICoordinate
): Array<ICharacter> => {
  const creaturesAtCoordinate = world.creatures.filter((c) => {
    const creatureCoordinate = c.getCoordinate()
    return (
      creatureCoordinate.x === coordinate.x &&
      creatureCoordinate.y === coordinate.y
    )
  })

  return creaturesAtCoordinate
}

export const infectCreatures = (world: IWorld): IWorld => {
  const zombieCoordinate = getCurrentZombie(world).getCoordinate()
  const newZombies = getCreaturesAtCoordinate(world, zombieCoordinate)

  if (newZombies.length > 0) {
    Logger.info(
      `zombie ${world.currentZombieId} infected creature/s at (${zombieCoordinate.x},${zombieCoordinate.y})`
    )

    const zombies = [...world.zombies, ...newZombies]
    const creatures = world.creatures.filter((c) => {
      const creatureCoordinate = c.getCoordinate()
      return (
        creatureCoordinate.x !== zombieCoordinate.x ||
        creatureCoordinate.y !== zombieCoordinate.y
      )
    })
    return {
      ...world,
      zombies: zombies,
      creatures: creatures
    }
  } else {
    return world
  }

  
}
