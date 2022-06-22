import { expect } from 'chai'
import InvalidCoordinateError from '../src/types/errors/InvalidCoordinateError'
import * as ZombieService from '../src/services/ZombieService'
import * as WorldService from '../src/services/WorldService'
import * as SimulatorService from '../src/services/SimulatorService'
import IConfiguration from '../src/types/interfaces/IConfiguration'
import EMove from '../src/types/enums/EMove'
import Character from '../src/models/Character'
import Grid from '../src/models/Grid'
import IWorld from '../src/types/interfaces/IWorld'
import ICoordinateResults from '../src/types/interfaces/ICoordinateResults'

describe('Test SimulatorService', () => {
  it('test initialise with invalid coordinates', () => {
    const params: IConfiguration = {
      dimensions: 2,
      zombieCoordinate: { x: 2, y: 2 },
      creatureCoordinates: [
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ],
      moves: [EMove.LEFT]
    }
    expect(() => SimulatorService.initialise(params)).to.throw(
      InvalidCoordinateError
    )
  })

  it('test initialise with valid coordinates', () => {
    const params: IConfiguration = {
      dimensions: 4,
      zombieCoordinate: { x: 2, y: 2 },
      creatureCoordinates: [
        { x: 0, y: 0 },
        { x: 0, y: 0 }
      ],
      moves: [EMove.LEFT]
    }
    const world: IWorld = {
      grid: new Grid(4),
      zombies: [new Character({ x: 2, y: 2 })],
      creatures: [new Character({ x: 0, y: 0 }), new Character({ x: 0, y: 0 })],
      currentZombieId: 0
    }
    expect(SimulatorService.initialise(params)).to.deep.equal(world)
  })

  it('test simulation', () => {
    const params: IConfiguration = {
      dimensions: 2,
      zombieCoordinate: { x: 0, y: 0 },
      creatureCoordinates: [
        { x: 0, y: 1 },
        { x: 1, y: 1 }
      ],
      moves: [EMove.DOWN]
    }
    const coordinateResults: ICoordinateResults = {
      zombieCoordinates: [
        { x: 0, y: 1 },
        { x: 0, y: 0 }
      ],
      creatureCoordinates: [{ x: 1, y: 1 }]
    }
    expect(SimulatorService.simulate(params)).to.deep.equal(coordinateResults)
  })
})
