import { expect } from 'chai'
import ICharacter from '../src/types/interfaces/ICharacter'
import Character from '../src/models/Character'
import ICoordinate from '../src/types/interfaces/ICoordinate'

describe('Test Character Class', () => {
  it('test get and set character coordinates', () => {
    const coordinates: ICoordinate = { x: 1, y: 2 }
    const robot: ICharacter = new Character(coordinates)
    robot.setCoordinate(coordinates)
    expect(robot.getCoordinate()).to.equal(coordinates)
  })
})
