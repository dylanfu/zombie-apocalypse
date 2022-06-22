import IConfiguration from '../types/interfaces/IConfiguration'
import Grid from '../models/Grid'
import InvalidCoordinateError from '../types/errors/InvalidCoordinateError'
import Character from '../models/Character'
import IWorld from '../types/interfaces/IWorld'
import ICoordinateResults from '../types/interfaces/ICoordinateResults'
import { infectCreatures, moveZombie } from './WorldService'

export const initialise = (params: IConfiguration): IWorld => {
  const grid = new Grid(params.dimensions)

  const allCoordinates = [
    ...params.creatureCoordinates,
    params.zombieCoordinate
  ]
  const validCoordinates = allCoordinates.every((c) =>
    grid.isValidCoordinate(c)
  )
  if (!validCoordinates) {
    throw new InvalidCoordinateError()
  }

  const zombies = [new Character(params.zombieCoordinate)]
  const creatures = params.creatureCoordinates.map((c) => new Character(c))
  const currentZombieId = 0

  return {
    zombies,
    creatures,
    currentZombieId,
    grid
  }
}

export const simulate = (params: IConfiguration): ICoordinateResults => {
  const moves = params.moves
  let world = initialise(params)

  while (world.currentZombieId < world.zombies.length) {
    // Infect creatures before zombie moves
    world = infectCreatures(world)
    moves.forEach((move) => {
      moveZombie(world, move)
      world = infectCreatures(world)
    })
    world = { ...world, currentZombieId: world.currentZombieId + 1 }
  }

  return {
    zombieCoordinates: world.zombies.map((z) => z.getCoordinate()),
    creatureCoordinates: world.creatures.map((c) => c.getCoordinate())
  }
}
