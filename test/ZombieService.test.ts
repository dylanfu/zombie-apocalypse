import { expect } from 'chai'
import * as ZombieService from '../src/services/ZombieService'
import Character from '../src/models/Character'
import Grid from '../src/models/Grid'
import EMove from '../src/types/enums/EMove'

describe('Test ZombieService', () => {
  it('test move', () => {
    const initialCoordinate = { x: 0, y: 1 }
    const grid = new Grid(4)
    const zombie = new Character(initialCoordinate)
    expect(zombie.getCoordinate()).to.deep.equal(initialCoordinate)
    ZombieService.move(grid, zombie, EMove.RIGHT)
    expect(zombie.getCoordinate()).to.deep.equal({ x: 1, y: 1 })
  })
})
