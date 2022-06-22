import { expect } from 'chai'
import * as Parser from '../src/cli/Parser'
import EMove from '../src/types/enums/EMove'

describe('Test Parser', () => {
  it('test parseCoordinate', () => {
    expect(Parser.parseCoordinate('1,1')).to.deep.equal({ x: 1, y: 1 })
  })

  it('test parseCoordinateList', () => {
    const coordinates = [
      { x: 1, y: 1 },
      { x: 0, y: 1 },
      { x: 2, y: 3 }
    ]
    expect(Parser.parseCoordinateList('1,1 0,1 2,3')).to.deep.equal(coordinates)
  })

  it('test parseMoves', () => {
    const moves = [EMove.LEFT, EMove.RIGHT, EMove.UP, EMove.DOWN]
    expect(Parser.parseMoves('LRUD')).to.deep.equal(moves)
  })
})
