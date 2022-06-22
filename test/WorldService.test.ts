import { expect } from 'chai'
import { spy } from 'sinon'
import ZeroActiveZombiesError from '../src/types/errors/ZeroActiveZombiesError'
import * as ZombieService from '../src/services/ZombieService'
import * as WorldService from '../src/services/WorldService'
import IWorld from '../src/types/interfaces/IWorld'
import Character from '../src/models/Character'
import Grid from '../src/models/Grid'
import EMove from '../src/types/enums/EMove'

describe('Test WorldService', () => {
  it('test retrieval of current active zombie', () => {
    const zombie = new Character({ x: 0, y: 1 })
    const world: IWorld = {
      grid: new Grid(4),
      zombies: [zombie],
      creatures: [new Character({ x: 0, y: 0 })],
      currentZombieId: 0
    }
    expect(WorldService.getCurrentZombie(world)).to.equal(zombie)
  })

  it('test retrieval of invalid active zombie', () => {
    const world: IWorld = {
      grid: new Grid(2),
      zombies: [new Character({ x: 0, y: 1 })],
      creatures: [new Character({ x: 0, y: 0 })],
      currentZombieId: 1
    }
    expect(() => {
      WorldService.getCurrentZombie(world)
    }).to.throw(ZeroActiveZombiesError)
  })

  it('test retrieval of creatures at coordinate', () => {
    const creatures = [
      new Character({ x: 0, y: 1 }),
      new Character({ x: 1, y: 2 })
    ]
    const world: IWorld = {
      grid: new Grid(4),
      zombies: [new Character({ x: 0, y: 1 })],
      creatures: creatures,
      currentZombieId: 0
    }
    expect(
      WorldService.getCreaturesAtCoordinate(world, { x: 1, y: 2 })
    ).to.deep.equal([creatures[1]])
  })

  it('test retrieval of multiple creatures at coordinate', () => {
    const coordinate = { x: 0, y: 1 }
    const creatures = [new Character(coordinate), new Character(coordinate)]
    const world: IWorld = {
      grid: new Grid(4),
      zombies: [new Character({ x: 0, y: 0 })],
      creatures: creatures,
      currentZombieId: 0
    }
    expect(
      WorldService.getCreaturesAtCoordinate(world, coordinate)
    ).to.deep.equal(creatures)
  })

  it('test zombie move', () => {
    const func = spy(ZombieService, 'move')
    const world: IWorld = {
      grid: new Grid(4),
      zombies: [new Character({ x: 0, y: 1 })],
      creatures: [new Character({ x: 0, y: 0 })],
      currentZombieId: 0
    }
    WorldService.moveZombie(world, EMove.RIGHT)
    expect(func.called).to.be.true
  })

  it('test infecting creatures', () => {
    const initialWorld: IWorld = {
      grid: new Grid(4),
      zombies: [new Character({ x: 0, y: 0 })],
      creatures: [new Character({ x: 0, y: 0 })],
      currentZombieId: 0
    }
    const world = WorldService.infectCreatures(initialWorld)
    expect(world.zombies.length).to.equal(2)
    expect(world.creatures.length).to.equal(0)
  })
})
